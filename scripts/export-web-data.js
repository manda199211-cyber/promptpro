const fs = require('fs');
const path = require('path');
const { loadEncryptedData } = require('../src/decrypt.js');

const root = path.join(__dirname, '..');
const serverDataDir = path.join(root, 'server', 'data');
const source = fs.readFileSync(path.join(root, 'data.js'), 'utf8');
const match = source.match(/const\s+PROMPT_DATA\s*=\s*(\{[\s\S]*\});?\s*$/);

if (!match) {
  throw new Error('Unable to parse PROMPT_DATA from data.js');
}

const promptData = new Function(`return ${match[1]}`)();
const negativeData = loadEncryptedData('negative_data.enc');

fs.mkdirSync(serverDataDir, { recursive: true });
fs.writeFileSync(
  path.join(serverDataDir, 'positive.json'),
  `${JSON.stringify(promptData, null, 2)}\n`
);
fs.writeFileSync(
  path.join(serverDataDir, 'negative.json'),
  `${JSON.stringify(negativeData, null, 2)}\n`
);

console.log(`Exported ${Object.keys(promptData).length} positive categories.`);
console.log(`Exported ${Object.keys(negativeData).length} negative categories.`);
