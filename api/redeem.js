const path = require('path');
const { ROOT, handleOptions, readJson, sendJson, signToken } = require('./_shared');

module.exports = function handler(req, res) {
  if (handleOptions(req, res)) return;
  if (req.method !== 'POST') {
    sendJson(res, 405, { error: '方法不允许' });
    return;
  }

  const body = typeof req.body === 'string' ? safeJson(req.body) : (req.body || {});
  const code = String(body.code || '').trim().toUpperCase();
  const codes = readJson(path.join(ROOT, 'server', 'redeem-codes.json'));
  const pack = codes[code];

  if (!pack) {
    sendJson(res, 400, { error: '兑换码无效' });
    return;
  }
  if (pack.disabled) {
    sendJson(res, 400, { error: '兑换码已停用' });
    return;
  }
  if (pack.usedAt) {
    sendJson(res, 400, { error: '兑换码已被使用' });
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

  sendJson(res, 200, { membership, token: signToken(membership) });
};

function safeJson(value) {
  try {
    return JSON.parse(value);
  } catch {
    return {};
  }
}
