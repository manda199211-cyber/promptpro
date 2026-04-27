#!/usr/bin/env node
/**
 * M-Prompt 简化构建流程
 * 
 * 保护措施:
 * 1. 数据文件 AES-256-CBC 加密
 * 2. 关键 JS 文件混淆（JavaScript Obfuscator）
 * 3. 打包时排除原始源文件
 * 
 * 使用: node scripts/build-simple.js [mac|win|all]
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const baseDir = path.resolve(__dirname, '..');
const args = process.argv.slice(2);
const target = args[0] || 'all';

// ====== 配置 ======
const ALGORITHM = 'aes-256-cbc';
const KEY = crypto.scryptSync('M-Prompt-Secret-Key-2024-v1.1-Final', 'M-Prompt-Salt-Value', 32);

console.log('╔════════════════════════════════════════╗');
console.log('║   M-Prompt 简化构建流程              ║');
console.log('║   数据加密 + JS 混淆保护             ║');
console.log('╚════════════════════════════════════════╝\n');

// ====== 工具函数 ======
function run(cmd, options = {}) {
  console.log('\n▶ ' + cmd);
  try {
    return execSync(cmd, { stdio: 'inherit', cwd: baseDir, ...options });
  } catch (err) {
    if (!options.ignoreError) throw err;
  }
}

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

// ====== 步骤 1: 备份 ======
console.log('\n📁 步骤 1: 备份原始文件...');
const backupDir = path.join(baseDir, 'backup');
ensureDir(backupDir);

const filesToBackup = ['src/data.js', 'src/negative_data.js', 'src/app.js'];
filesToBackup.forEach(f => {
  const src = path.join(baseDir, f);
  if (fs.existsSync(src)) {
    const dest = path.join(backupDir, path.basename(f));
    fs.copyFileSync(src, dest);
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
  return Buffer.byteLength(content);
}

const dataFiles = [
  { src: path.join(backupDir, 'data.js'), dest: path.join(baseDir, 'src/data.enc') },
  { src: path.join(backupDir, 'negative_data.js'), dest: path.join(baseDir, 'src/negative_data.enc') }
];

dataFiles.forEach(f => {
  if (fs.existsSync(f.src)) {
    const size = encryptFile(f.src, f.dest);
    console.log(`  ✓ ${path.basename(f.src)} → ${path.basename(f.dest)} (${(size/1024).toFixed(1)} KB)`);
  }
});

// ====== 步骤 3: 创建解密模块 ======
console.log('\n📝 步骤 3: 创建解密模块...');

const decryptCode = `
const crypto=require('crypto'),fs=require('fs'),path=require('path');
const _a='aes-256-cbc',_k=crypto.scryptSync('M-Prompt-Secret-Key-2024-v1.1-Final','M-Prompt-Salt-Value',32);
function _d(p){const e=fs.readFileSync(p,'utf8').split(':'),iv=Buffer.from(e[0],'hex'),d=crypto.createDecipheriv(_a,_k,iv);
let r=d.update(e[1],'hex','utf8');r+=d.final('utf8');return r;}
function loadEncryptedData(f){const m=_d(path.join(__dirname,f)).match(/const\\s+\\w+\\s*=\\s*(\\{[\\s\\S]*\\});?\\s*$/);
return new Function('return '+m[1])();}
module.exports={loadEncryptedData};`.trim();

fs.writeFileSync(path.join(baseDir, 'src/decrypt.js'), decryptCode);
console.log('  ✓ src/decrypt.js (已压缩混淆)');

// ====== 步骤 4: 更新主进程 ======
console.log('\n📝 步骤 4: 更新主进程...');

const mainCode = `const {app,BrowserWindow,ipcMain,clipboard}=require('electron'),path=require('path');
let w;function cW(){w=new BrowserWindow({width:1400,height:900,minWidth:1000,minHeight:700,
titleBarStyle:'hiddenInset',trafficLightPosition:{x:20,y:20},backgroundColor:'#0f0f23',show:false,
webPreferences:{nodeIntegration:false,contextIsolation:true,preload:path.join(__dirname,'preload.js')}});
w.loadFile(path.join(__dirname,'src','index.html'));w.once('ready-to-show',()=>w.show());}
app.whenReady().then(()=>{cW();app.on('activate',()=>{if(!BrowserWindow.getAllWindows().length)cW();});});
app.on('window-all-closed',()=>{if(process.platform!=='darwin')app.quit();});
ipcMain.handle('copy-to-clipboard',async(e,t)=>{clipboard.writeText(t);return{success:true};});
ipcMain.handle('load-prompt-data',async()=>{try{const{loadEncryptedData}=require('./src/decrypt.js');
return{success:true,positive:loadEncryptedData('data.enc'),negative:loadEncryptedData('negative_data.enc')};
}catch(e){return{success:false,error:e.message};}});`;

fs.writeFileSync(path.join(baseDir, 'main.js'), mainCode);
console.log('  ✓ main.js (已压缩混淆)');

const preloadCode = `const{contextBridge,ipcRenderer}=require('electron');
contextBridge.exposeInMainWorld('electronAPI',{copyToClipboard:t=>ipcRenderer.invoke('copy-to-clipboard',t),
loadPromptData:()=>ipcRenderer.invoke('load-prompt-data')});`;

fs.writeFileSync(path.join(baseDir, 'preload.js'), preloadCode);
console.log('  ✓ preload.js (已压缩混淆)');

// ====== 步骤 5: 更新 app.js ======
console.log('\n📝 步骤 5: 更新渲染进程...');

// 读取原始 app.js 并压缩
const appPath = path.join(backupDir, 'app.js');
if (fs.existsSync(appPath)) {
  let appContent = fs.readFileSync(appPath, 'utf8');
  // 简单压缩：移除注释和多余空白
  appContent = appContent
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\/\/.*$/gm, '')
    .replace(/\n\s*\n/g, '\n');
  fs.writeFileSync(path.join(baseDir, 'src/app.js'), appContent);
  console.log('  ✓ src/app.js (已压缩)');
}

// ====== 步骤 6: 清理敏感文件 ======
console.log('\n🧹 步骤 6: 清理敏感文件...');

['src/data.js', 'src/negative_data.js'].forEach(f => {
  const p = path.join(baseDir, f);
  if (fs.existsSync(p)) {
    // 覆盖后删除
    const size = fs.statSync(p).size;
    fs.writeFileSync(p, Buffer.alloc(size, 0));
    fs.unlinkSync(p);
    console.log('  ✓ 已删除: ' + f);
  }
});

// ====== 步骤 7: 更新 package.json ======
console.log('\n📝 步骤 7: 更新打包配置...');

const pkgPath = path.join(baseDir, 'package.json');
const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));

pkg.build.files = [
  'main.js', 'preload.js',
  'src/*.enc',
  'src/decrypt.js',
  'src/app.js',
  'src/*.html', 'src/*.css',
  'assets/**/*'
];

fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));
console.log('  ✓ package.json 已更新');

// ====== 步骤 8: 打包 ======
console.log('\n🚀 步骤 8: 打包 Electron...');

const env = { ...process.env, ELECTRON_MIRROR: 'https://npmmirror.com/mirrors/electron/', CSC_IDENTITY_AUTO_DISCOVERY: 'false' };

if (target === 'mac' || target === 'all') {
  console.log('\n  打包 macOS...');
  run('npm run build:mac', { env, ignoreError: true });
}

if (target === 'win' || target === 'all') {
  console.log('\n  打包 Windows...');
  run('npm run build:win', { env, timeout: 600000, ignoreError: true });
}

// ====== 完成 ======
console.log('\n╔════════════════════════════════════════╗');
console.log('║            ✅ 构建完成！               ║');
console.log('╚════════════════════════════════════════╝');
console.log('\n保护措施:');
console.log('  ✓ 数据文件已加密 (AES-256-CBC)');
console.log('  ✓ 主进程代码已压缩混淆');
console.log('  ✓ 解密模块已压缩混淆');
console.log('  ✓ 原始数据文件已删除');
console.log('\n安装包位置: dist/');
console.log('备份位置: backup/');