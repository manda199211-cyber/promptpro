#!/usr/bin/env node
/**
 * M-Prompt 完整构建流程 v2
 * 
 * 目录结构:
 *   src-source/     - 原始源码（不打包）
 *   src/            - 编译后的文件（打包）
 *   main.js         - 加载器
 *   preload.js      - 加载器
 *   main.jsc        - 字节码
 *   preload.jsc     - 字节码
 * 
 * 使用: node scripts/build-protected.js [mac|win|all]
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const bytenode = require('bytenode');

const baseDir = path.resolve(__dirname, '..');
const args = process.argv.slice(2);
const target = args[0] || 'all';

// ====== 配置 ======
const ALGORITHM = 'aes-256-cbc';
const KEY = crypto.scryptSync('M-Prompt-Secret-Key-2024-v1.1-Final', 'M-Prompt-Salt-Value', 32);

console.log('╔════════════════════════════════════════╗');
console.log('║   M-Prompt 完整构建流程 v2            ║');
console.log('║   防解包 + 数据加密 + 字节码编译      ║');
console.log('╚════════════════════════════════════════╝\n');

// ====== 工具函数 ======
function run(cmd, options = {}) {
  console.log('\n▶ ' + cmd);
  return execSync(cmd, { stdio: 'inherit', cwd: baseDir, ...options });
}

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

// ====== 步骤 1: 准备目录 ======
console.log('\n📁 步骤 1: 准备目录...');
const srcSource = path.join(baseDir, 'src-source');
const srcDir = path.join(baseDir, 'src');
const backupDir = path.join(baseDir, 'backup');

ensureDir(srcSource);
ensureDir(backupDir);

// 备份原始数据文件
['src/data.js', 'src/negative_data.js'].forEach(f => {
  const p = path.join(baseDir, f);
  if (fs.existsSync(p)) {
    fs.copyFileSync(p, path.join(backupDir, path.basename(f)));
    console.log('  ✓ 备份: ' + f);
  }
});

// ====== 步骤 2: 加密数据 ======
console.log('\n🔒 步骤 2: 加密数据文件...');

function encryptFile(srcPath, destPath) {
  const content = fs.readFileSync(srcPath, 'utf8');
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv(ALGORITHM, KEY, iv);
  let encrypted = cipher.update(content, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  fs.writeFileSync(destPath, iv.toString('hex') + ':' + encrypted, 'utf8');
  return { src: Buffer.byteLength(content), dest: Buffer.byteLength(encrypted) };
}

const dataFiles = [
  { src: path.join(backupDir, 'data.js'), dest: path.join(srcDir, 'data.enc') },
  { src: path.join(backupDir, 'negative_data.js'), dest: path.join(srcDir, 'negative_data.enc') }
];

dataFiles.forEach(f => {
  if (fs.existsSync(f.src)) {
    const r = encryptFile(f.src, f.dest);
    console.log(`  ✓ ${path.basename(f.src)} → ${path.basename(f.dest)} (${(r.dest/1024).toFixed(1)} KB)`);
  }
});

// ====== 步骤 3: 创建解密模块源码 ======
console.log('\n📝 步骤 3: 创建解密模块...');

const decryptSource = `const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const ALGORITHM = 'aes-256-cbc';
const KEY = crypto.scryptSync('M-Prompt-Secret-Key-2024-v1.1-Final', 'M-Prompt-Salt-Value', 32);

function decryptFile(encPath) {
  const encrypted = fs.readFileSync(encPath, 'utf8');
  const parts = encrypted.split(':');
  const iv = Buffer.from(parts[0], 'hex');
  const decipher = crypto.createDecipheriv(ALGORITHM, KEY, iv);
  let decrypted = decipher.update(parts[1], 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}

function loadEncryptedData(encFile) {
  const encPath = path.join(__dirname, encFile);
  const decrypted = decryptFile(encPath);
  const match = decrypted.match(/const\\s+\\w+\\s*=\\s*(\\{[\\s\\S]*\\});?\\s*$/);
  return new Function('return ' + match[1])();
}

module.exports = { decryptFile, loadEncryptedData };`;

fs.writeFileSync(path.join(srcSource, 'decrypt.js'), decryptSource);
console.log('  ✓ src-source/decrypt.js');

// ====== 步骤 4: 创建主进程源码 ======
console.log('\n📝 步骤 4: 创建主进程源码...');

const mainSource = `const { app, BrowserWindow, ipcMain, clipboard } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1400, height: 900, minWidth: 1000, minHeight: 700,
    titleBarStyle: 'hiddenInset',
    trafficLightPosition: { x: 20, y: 20 },
    backgroundColor: '#0f0f23',
    show: false,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.jsc')
    }
  });
  mainWindow.loadFile(path.join(__dirname, 'src', 'index.html'));
  mainWindow.once('ready-to-show', () => mainWindow.show());
}

app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => { if (BrowserWindow.getAllWindows().length === 0) createWindow(); });
});

app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });

ipcMain.handle('copy-to-clipboard', async (e, text) => { clipboard.writeText(text); return { success: true }; });

ipcMain.handle('load-prompt-data', async () => {
  try {
    require('bytenode');
    const { loadEncryptedData } = require('./src/decrypt.jsc');
    return { success: true, positive: loadEncryptedData('data.enc'), negative: loadEncryptedData('negative_data.enc') };
  } catch (err) { return { success: false, error: err.message }; }
});`;

fs.writeFileSync(path.join(srcSource, 'main.js'), mainSource);
console.log('  ✓ src-source/main.js');

const preloadSource = `const { contextBridge, ipcRenderer } = require('electron');
contextBridge.exposeInMainWorld('electronAPI', {
  copyToClipboard: (text) => ipcRenderer.invoke('copy-to-clipboard', text),
  loadPromptData: () => ipcRenderer.invoke('load-prompt-data')
});`;

fs.writeFileSync(path.join(srcSource, 'preload.js'), preloadSource);
console.log('  ✓ src-source/preload.js');

// ====== 步骤 5: 编译字节码 ======
console.log('\n⚙️  步骤 5: 编译字节码...');

const v8 = require('v8');
v8.setFlagsFromString('--no-lazy');

// 编译 main.js
bytenode.compileFile(path.join(srcSource, 'main.js'), path.join(baseDir, 'main.jsc'));
console.log('  ✓ main.jsc');

// 编译 preload.js
bytenode.compileFile(path.join(srcSource, 'preload.js'), path.join(baseDir, 'preload.jsc'));
console.log('  ✓ preload.jsc');

// 编译 decrypt.js
bytenode.compileFile(path.join(srcSource, 'decrypt.js'), path.join(srcDir, 'decrypt.jsc'));
console.log('  ✓ src/decrypt.jsc');

// 创建加载器
fs.writeFileSync(path.join(baseDir, 'main.js'), "#!/usr/bin/env node\nrequire('bytenode');\nrequire('./main.jsc');");
fs.writeFileSync(path.join(baseDir, 'preload.js'), "require('bytenode');\nmodule.exports = require('./preload.jsc');");

// ====== 步骤 6: 更新 package.json ======
console.log('\n📝 步骤 6: 更新打包配置...');

const pkgPath = path.join(baseDir, 'package.json');
const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));

pkg.dependencies = pkg.dependencies || {};
pkg.dependencies.bytenode = '^3.0.0';

pkg.build.files = [
  'main.js', 'preload.js',
  'main.jsc', 'preload.jsc',
  'src/*.enc',
  'src/decrypt.jsc',
  'src/app.js',
  'src/*.html', 'src/*.css',
  'assets/**/*'
];

fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));
console.log('  ✓ package.json 已更新');

// ====== 步骤 7: 打包 ======
console.log('\n🚀 步骤 7: 打包 Electron...');

const env = { ...process.env, ELECTRON_MIRROR: 'https://npmmirror.com/mirrors/electron/', CSC_IDENTITY_AUTO_DISCOVERY: 'false' };

if (target === 'mac' || target === 'all') {
  console.log('\n  打包 macOS...');
  try { run('npm run build:mac', { env }); } catch (e) { console.log('  ⚠️ Mac 打包出错'); }
}

if (target === 'win' || target === 'all') {
  console.log('\n  打包 Windows...');
  try { run('npm run build:win', { env, timeout: 600000 }); } catch (e) { console.log('  ⚠️ Windows 打包出错'); }
}

// ====== 完成 ======
console.log('\n╔════════════════════════════════════════╗');
console.log('║            ✅ 构建完成！               ║');
console.log('╚════════════════════════════════════════╝');
console.log('\n保护措施:');
console.log('  ✓ 数据文件已加密 (AES-256-CBC)');
console.log('  ✓ 主进程已编译为 V8 字节码');
console.log('  ✓ 解密模块已编译为字节码');
console.log('  ✓ 原始源码已隔离 (src-source/)');
console.log('\n安装包位置: dist/');
console.log('备份位置: backup/');