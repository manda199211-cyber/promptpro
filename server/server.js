const crypto = require('crypto');
const fs = require('fs');
const http = require('http');
const path = require('path');
const { URL } = require('url');

const PORT = Number(process.env.PORT || 4174);
const FREE_CATEGORY_LIMIT = Number(process.env.FREE_CATEGORY_LIMIT || 8);
const TOKEN_SECRET = process.env.MPROMPT_TOKEN_SECRET || 'change-this-secret-before-production';
const ROOT = path.join(__dirname, '..');
const WEB_DIR = path.join(ROOT, 'web');
const DATA_DIR = path.join(__dirname, 'data');
const REDEEM_CODES_FILE = path.join(__dirname, 'redeem-codes.json');
const SITE_CONFIG_FILE = path.join(__dirname, 'site-config.json');

const positiveData = readJson(path.join(DATA_DIR, 'positive.json'));
const negativeData = readJson(path.join(DATA_DIR, 'negative.json'));
let redeemCodes = readJson(REDEEM_CODES_FILE);
const siteConfig = fs.existsSync(SITE_CONFIG_FILE) ? readJson(SITE_CONFIG_FILE) : {};

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

const server = http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url, `http://${req.headers.host}`);
    if (url.pathname.startsWith('/api/')) {
      await handleApi(req, res, url);
      return;
    }
    serveStatic(res, url.pathname);
  } catch (err) {
    console.error(err);
    sendJson(res, 500, { error: '服务器错误' });
  }
});

server.listen(PORT, () => {
  console.log(`M-Prompt server running at http://localhost:${PORT}`);
});

async function handleApi(req, res, url) {
  if (req.method === 'OPTIONS') {
    res.writeHead(204, corsHeaders());
    res.end();
    return;
  }

  if (req.method === 'GET' && url.pathname === '/api/status') {
    sendJson(res, 200, { membership: getMembershipFromReq(req), freeCategoryLimit: FREE_CATEGORY_LIMIT });
    return;
  }

  if (req.method === 'GET' && url.pathname === '/api/health') {
    sendJson(res, 200, {
      ok: true,
      positiveCategories: Object.keys(positiveData).length,
      negativeCategories: Object.keys(negativeData).length
    });
    return;
  }

  if (req.method === 'GET' && url.pathname === '/api/config') {
    sendJson(res, 200, {
      contactName: siteConfig.contactName || 'M-Prompt',
      wechatId: siteConfig.wechatId || '请填写你的微信号',
      notice: siteConfig.notice || '付款后发送截图领取兑换码'
    });
    return;
  }

  if (req.method === 'POST' && url.pathname === '/api/redeem') {
    const body = await readBody(req);
    const code = String(body.code || '').trim().toUpperCase();
    redeemCodes = readJson(REDEEM_CODES_FILE);
    const pack = redeemCodes[code];
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

    redeemCodes[code] = {
      ...pack,
      usedAt: now.toISOString(),
      activatedPlan: membership.plan
    };
    writeJson(REDEEM_CODES_FILE, redeemCodes);

    sendJson(res, 200, { membership, token: signToken(membership) });
    return;
  }

  if (req.method === 'GET' && url.pathname === '/api/categories') {
    const mode = normalizeMode(url.searchParams.get('mode'));
    const data = getData(mode);
    const member = isMemberActive(getMembershipFromReq(req));
    const categories = Object.keys(data).sort().map((name, index) => ({
      name,
      count: data[name].length,
      locked: !member && index >= FREE_CATEGORY_LIMIT
    }));
    sendJson(res, 200, { categories, membership: getMembershipFromReq(req), freeCategoryLimit: FREE_CATEGORY_LIMIT });
    return;
  }

  if (req.method === 'GET' && url.pathname === '/api/prompts') {
    const mode = normalizeMode(url.searchParams.get('mode'));
    const category = url.searchParams.get('category') || '';
    const data = getData(mode);
    const keys = Object.keys(data).sort();
    const index = keys.indexOf(category);
    const member = isMemberActive(getMembershipFromReq(req));

    if (!data[category]) {
      sendJson(res, 404, { error: '分类不存在' });
      return;
    }
    if (!member && index >= FREE_CATEGORY_LIMIT) {
      sendJson(res, 403, { error: '该分类为 Pro 会员内容', locked: true });
      return;
    }

    sendJson(res, 200, { category, prompts: data[category] });
    return;
  }

  sendJson(res, 404, { error: '接口不存在' });
}

function readJson(file) {
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}

function writeJson(file, value) {
  const temp = `${file}.tmp`;
  fs.writeFileSync(temp, `${JSON.stringify(value, null, 2)}\n`);
  fs.renameSync(temp, file);
}

function normalizeMode(mode) {
  return mode === 'negative' ? 'negative' : 'positive';
}

function getData(mode) {
  return mode === 'negative' ? negativeData : positiveData;
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let raw = '';
    req.on('data', chunk => {
      raw += chunk;
      if (raw.length > 10000) {
        req.destroy();
        reject(new Error('请求内容过大'));
      }
    });
    req.on('end', () => {
      try {
        resolve(raw ? JSON.parse(raw) : {});
      } catch {
        resolve({});
      }
    });
    req.on('error', reject);
  });
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

function getMembershipFromReq(req) {
  const header = req.headers.authorization || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : '';
  const membership = verifyToken(token);
  return isMemberActive(membership) ? membership : null;
}

function isMemberActive(membership) {
  if (!membership || membership.status !== 'active') return false;
  if (membership.lifetime) return true;
  return !membership.expiresAt || new Date(membership.expiresAt).getTime() > Date.now();
}

function sendJson(res, status, payload) {
  res.writeHead(status, {
    ...corsHeaders(),
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store'
  });
  res.end(JSON.stringify(payload));
}

function corsHeaders() {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS'
  };
}

function serveStatic(res, pathname) {
  const safePath = decodeURIComponent(pathname === '/' ? '/index.html' : pathname);
  const filePath = path.normalize(path.join(WEB_DIR, safePath));
  if (!filePath.startsWith(WEB_DIR)) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }
  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404);
      res.end('Not found');
      return;
    }
    const ext = path.extname(filePath);
    res.writeHead(200, {
      'Content-Type': mimeTypes[ext] || 'application/octet-stream',
      'Cache-Control': ext === '.html' ? 'no-store' : 'public, max-age=3600'
    });
    res.end(content);
  });
}
