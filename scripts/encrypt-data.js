#!/usr/bin/env node
/**
 * M-Prompt 数据加密工具
 * 将 src/data.js 和 src/negative_data.js 加密为 .enc 文件
 * 
 * 使用方法: node scripts/encrypt-data.js
 */

const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

// ====== 配置 ======
const ALGORITHM = 'aes-256-cbc';
const KEY = crypto.scryptSync(
  'M-Prompt-Secret-Key-2024-v1.1-Final',  // 密码短语
  'M-Prompt-Salt-Value',                  // salt
  32                                      // 密钥长度 (256 bits)
);
const IV_LENGTH = 16;

const FILES_TO_ENCRYPT = [
  { src: 'src/data.js', dest: 'src/data.enc' },
  { src: 'src/negative_data.js', dest: 'src/negative_data.enc' }
];

// ====== 加密函数 ======
function encryptFile(srcPath, destPath) {
  const content = fs.readFileSync(srcPath, 'utf8');
  
  // 生成随机 IV
  const iv = crypto.randomBytes(IV_LENGTH);
  
  // 创建加密器
  const cipher = crypto.createCipheriv(ALGORITHM, KEY, iv);
  
  // 加密内容
  let encrypted = cipher.update(content, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  
  // IV + 加密数据 (IV 存在开头，解密时需要)
  const output = iv.toString('hex') + ':' + encrypted;
  
  // 写入文件
  fs.writeFileSync(destPath, output, 'utf8');
  
  // 返回统计
  const srcSize = Buffer.byteLength(content, 'utf8');
  const destSize = Buffer.byteLength(output, 'utf8');
  
  return { srcSize, destSize, ratio: (destSize / srcSize).toFixed(2) };
}

// ====== 执行 ======
console.log('=== M-Prompt 数据加密工具 ===\n');
console.log('算法: ' + ALGORITHM);
console.log('密钥长度: 256 bits\n');

const baseDir = path.resolve(__dirname, '..');
let totalSrc = 0, totalDest = 0;

FILES_TO_ENCRYPT.forEach(file => {
  const src = path.join(baseDir, file.src);
  const dest = path.join(baseDir, file.dest);
  
  if (!fs.existsSync(src)) {
    console.log('❌ 源文件不存在: ' + file.src);
    return;
  }
  
  const result = encryptFile(src, dest);
  totalSrc += result.srcSize;
  totalDest += result.destSize;
  
  console.log('✅ ' + file.src + ' → ' + file.dest);
  console.log('   原始: ' + (result.srcSize / 1024).toFixed(1) + ' KB');
  console.log('   加密: ' + (result.destSize / 1024).toFixed(1) + ' KB');
  console.log('   比率: ' + result.ratio + 'x\n');
});

console.log('=== 完成 ===');
console.log('总原始大小: ' + (totalSrc / 1024).toFixed(1) + ' KB');
console.log('总加密大小: ' + (totalDest / 1024).toFixed(1) + ' KB');
console.log('\n加密文件已保存到 src/*.enc');
console.log('请将原始 .js 文件移除或备份！');