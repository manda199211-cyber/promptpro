const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const [, , planArg, countArg] = process.argv;
const count = Number(countArg || 1);
const plans = {
  week: { label: '周付', prefix: 'WEEK', price: '¥10 / 周', days: 7 },
  month: { label: '月付', prefix: 'MONTH', price: '¥19.9 / 月', days: 31 },
  year: { label: '年付', prefix: 'YEAR', price: '¥59 / 年', days: 365 },
  life: { label: '永久', prefix: 'LIFE', price: '¥99 一次性', lifetime: true }
};

if (!plans[planArg] || !Number.isInteger(count) || count < 1 || count > 500) {
  console.log('用法: node scripts/generate-codes.js <week|month|year|life> <数量>');
  console.log('示例: node scripts/generate-codes.js year 20');
  process.exit(1);
}

const root = path.join(__dirname, '..');
const file = path.join(root, 'server', 'redeem-codes.json');
const codes = JSON.parse(fs.readFileSync(file, 'utf8'));
const plan = plans[planArg];
const created = [];

while (created.length < count) {
  const code = `${plan.prefix}-${randomPart()}-${randomPart()}`;
  if (codes[code]) continue;
  codes[code] = {
    plan: plan.label,
    price: plan.price,
    ...(plan.lifetime ? { lifetime: true } : { days: plan.days }),
    createdAt: new Date().toISOString()
  };
  created.push(code);
}

fs.writeFileSync(file, `${JSON.stringify(codes, null, 2)}\n`);

const outputDir = path.join(root, 'server', 'generated-codes');
fs.mkdirSync(outputDir, { recursive: true });
const outputFile = path.join(outputDir, `${planArg}-${Date.now()}.txt`);
fs.writeFileSync(outputFile, `${created.join('\n')}\n`);

console.log(`已生成 ${created.length} 个${plan.label}兑换码:`);
console.log(created.join('\n'));
console.log(`已保存到 ${outputFile}`);

function randomPart() {
  return crypto.randomBytes(3).toString('hex').toUpperCase();
}
