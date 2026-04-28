const { FREE_CATEGORY_LIMIT, getData, getMembership, handleOptions, normalizeMode, sendJson } = require('./_shared');

module.exports = function handler(req, res) {
  if (handleOptions(req, res)) return;
  const mode = normalizeMode(req.query.mode);
  const data = getData(mode);
  const membership = getMembership(req);
  const member = Boolean(membership);
  const categories = Object.keys(data).sort().map((name, index) => ({
    name,
    count: data[name].length,
    locked: !member && index >= FREE_CATEGORY_LIMIT
  }));

  sendJson(res, 200, { categories, membership, freeCategoryLimit: FREE_CATEGORY_LIMIT });
};
