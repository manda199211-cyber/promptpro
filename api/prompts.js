const { FREE_CATEGORY_LIMIT, getData, getMembership, handleOptions, normalizeMode, sendJson } = require('./_shared');

module.exports = function handler(req, res) {
  if (handleOptions(req, res)) return;
  const mode = normalizeMode(req.query.mode);
  const category = req.query.category || '';
  const data = getData(mode);
  const keys = Object.keys(data).sort();
  const index = keys.indexOf(category);
  const member = Boolean(getMembership(req));

  if (!data[category]) {
    sendJson(res, 404, { error: '分类不存在' });
    return;
  }
  if (!member && index >= FREE_CATEGORY_LIMIT) {
    sendJson(res, 403, { error: '该分类为 Pro 会员内容', locked: true });
    return;
  }

  sendJson(res, 200, { category, prompts: data[category] });
};
