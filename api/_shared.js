const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const FREE_CATEGORY_LIMIT = Number(process.env.FREE_CATEGORY_LIMIT || 8);
const TOKEN_SECRET = process.env.MPROMPT_TOKEN_SECRET || 'change-this-secret-before-production';
const ROOT = path.join(__dirname, '..');
const DATA_DIR = path.join(ROOT, 'server', 'data');

function readJson(file) {
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}

function getData(mode) {
  const file = mode === 'negative' ? 'negative.json' : 'positive.json';
  return readJson(path.join(DATA_DIR, file));
}

function normalizeMode(mode) {
  return mode === 'negative' ? 'negative' : 'positive';
}

function sendJson(res, status, payload) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Cache-Control', 'no-store');
  res.status(status).json(payload);
}

function signToken(payload) {
  const body = Buffer.from(JSON.stringify(payload)).toString('base64url');
  const sig = crypto.createHmac('sha256', TOKEN_SECRET).update(body).digest('base64url');
  return `${body}.${sig}`;
}

function verifyToken(token) {
  if (!token || !token.includes('.')) return null;
  const [body, sig] = token.split('.');
  const expected = crypto.createHmac('sha256', TOKEN_SECRET).update(body).digest('base64url');
  if (Buffer.byteLength(sig) !== Buffer.byteLength(expected)) return null;
  if (!crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(expected))) return null;
  try {
    return JSON.parse(Buffer.from(body, 'base64url').toString('utf8'));
  } catch {
    return null;
  }
}

function isMemberActive(membership) {
  if (!membership || membership.status !== 'active') return false;
  if (membership.lifetime) return true;
  return !membership.expiresAt || new Date(membership.expiresAt).getTime() > Date.now();
}

function getMembership(req) {
  const header = req.headers.authorization || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : '';
  const membership = verifyToken(token);
  return isMemberActive(membership) ? membership : null;
}

function handleOptions(req, res) {
  if (req.method !== 'OPTIONS') return false;
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.status(204).end();
  return true;
}

module.exports = {
  FREE_CATEGORY_LIMIT,
  ROOT,
  getData,
  getMembership,
  handleOptions,
  isMemberActive,
  normalizeMode,
  readJson,
  sendJson,
  signToken
};
