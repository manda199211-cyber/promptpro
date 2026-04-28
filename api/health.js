const { getData, handleOptions, sendJson } = require('./_shared');

module.exports = function handler(req, res) {
  if (handleOptions(req, res)) return;
  const positiveData = getData('positive');
  const negativeData = getData('negative');
  sendJson(res, 200, {
    ok: true,
    positiveCategories: Object.keys(positiveData).length,
    negativeCategories: Object.keys(negativeData).length
  });
};
