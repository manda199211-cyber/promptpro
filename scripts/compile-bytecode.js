#!/usr/bin/env node
/**
 * M-Prompt 字节码编译工具
 * 将关键 JS 文件编译为 V8 字节码 (.jsc)
 * 
 * 使用方法: node scripts/compile-bytecode.js
 * 
 * 前置要求: npm install bytenode
 */

const bytenode = require('bytenode');
const fs = require('fs');
const path = require('path');
const v8 = require('v8');

v8.setFlagsFromString('--no-lazy');

const FILES_TO_COMPILE = [
  { src: 'main.js', dest: 'main.jsc' },
  { src: 'preload.js', dest: 'preload.jsc' },
  { src: 'src/decrypt.js', dest: 'src/decrypt.jsc' },
  { src: 'src/app.js', dest: 'src/app.jsc' }
];

// 创建加载器文件
function createLoader(jscFile, originalFile) {
  // 对于 main.js，需要特殊处理
  if (originalFile === 'main.js') {
    return `#!/usr/bin/env node
require('bytenode');
require('./${jscFile}');
`;
  }
  
  // 其他文件
  return `require('bytenode');
module.exports = require('./${jscFile}');
`;
}

console.log('=== M-Prompt 字节码编译工具 ===\n');

const baseDir = path.resolve(__dirname, '..');

// 检查 bytenode
try {
  require.resolve('bytenode');
} catch (e) {
  console.log('❌ 请先安装 bytenode: npm install bytenode');
  process.exit(1);
}

FILES_TO_COMPILE.forEach(file => {
  const src = path.join(baseDir, file.src);
  const dest = path.join(baseDir, file.dest);
  
  if (!fs.existsSync(src)) {
    console.log('⚠️  源文件不存在: ' + file.src);
    return;
  }
  
  try {
    // 编译为字节码
    bytenode.compileFile(src, dest);
    console.log('✅ ' + file.src + ' → ' + file.dest);
    
    // 创建加载器 (替换原文件)
    const loaderContent = createLoader(file.dest, file.src);
    fs.writeFileSync(src, loaderContent);
    console.log('   已更新加载器: ' + file.src);
    
    // 统计大小
    const srcSize = fs.statSync(dest).size;
    console.log('   字节码大小: ' + (srcSize / 1024).toFixed(1) + ' KB\n');
    
  } catch (err) {
    console.log('❌ 编译失败: ' + file.src);
    console.log('   错误: ' + err.message + '\n');
  }
});

console.log('=== 完成 ===');
console.log('\n字节码文件已生成 (.jsc)');
console.log('原 JS 文件已转换为加载器');
console.log('\n下一步: 运行 node scripts/encrypt-data.js 加密数据');