const crypto = require('crypto');

const TOKEN_SECRET = process.env.MPROMPT_TOKEN_SECRET || 'change-this-secret-before-production';

module.exports = function handler(req, res) {
  if (req.method === 'OPTIONS') {
    setCors(res);
    res.status(204).end();
    return;
  }
  if (req.method !== 'POST') {
    setCors(res);
    res.status(405).json({ error: '\u65b9\u6cd5\u4e0d\u5141\u8bb8' });
    return;
  }

  const body = typeof req.body === 'string' ? safeJson(req.body) : (req.body || {});
  const code = String(body.code || '').trim().toUpperCase();
  const pack = getPackFromCode(code);

  if (!pack) {
    setCors(res);
    res.status(400).json({ error: '\u5151\u6362\u7801\u65e0\u6548' });
    return;
  }

  const now = new Date();
  const membership = {
    status: 'active',
    plan: pack.plan,
    price: pack.price,
    lifetime: Boolean(pack.lifetime),
    activatedAt: now.toISOString()
  };

  if (!pack.lifetime) {
    const expiresAt = new Date(now);
    expiresAt.setDate(expiresAt.getDate() + Number(pack.days || 0));
    membership.expiresAt = expiresAt.toISOString();
  }

  setCors(res);
  res.setHeader('Cache-Control', 'no-store');
  res.status(200).json({ membership, token: signToken(membership) });
};

function getPackFromCode(code) {
  if (/^YEAR-[A-Z0-9]{6}-[A-Z0-9]{6}$/.test(code)) {
    return { plan: '\u5e74\u4ed8', price: '\u00a559 / \u5e74', days: 365 };
  }
  if (/^LIFE-[A-Z0-9]{6}-[A-Z0-9]{6}$/.test(code)) {
    return { plan: '\u6c38\u4e45', price: '\u00a599 \u4e00\u6b21\u6027', lifetime: true };
  }
  return null;
}

function signToken(payload) {
  const body = Buffer.from(JSON.stringify(payload)).toString('base64url');
  const sig = crypto.createHmac('sha256', TOKEN_SECRET).update(body).digest('base64url');
  return `${body}.${sig}`;
}

function safeJson(value) {
  try {
    return JSON.parse(value);
  } catch {
    return {};
  }
}

function setCors(res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
}
