const crypto=require('crypto'),fs=require('fs'),path=require('path');
const _a='aes-256-cbc',_k=crypto.scryptSync('M-Prompt-Secret-Key-2024-v1.1-Final','M-Prompt-Salt-Value',32);
function _d(p){const e=fs.readFileSync(p,'utf8').split(':'),iv=Buffer.from(e[0],'hex'),d=crypto.createDecipheriv(_a,_k,iv);
let r=d.update(e[1],'hex','utf8');r+=d.final('utf8');return r;}
function loadEncryptedData(f){const m=_d(path.join(__dirname,f)).match(/const\s+\w+\s*=\s*(\{[\s\S]*\});?\s*$/);
return new Function('return '+m[1])();}
module.exports={loadEncryptedData};