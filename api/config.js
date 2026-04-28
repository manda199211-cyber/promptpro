const path = require('path');
const { ROOT, handleOptions, readJson, sendJson } = require('./_shared');

module.exports = function handler(req, res) {
  if (handleOptions(req, res)) return;
  const config = readJson(path.join(ROOT, 'server', 'site-config.json'));
  sendJson(res, 200, {
    contactName: config.contactName || 'M-Prompt',
    wechatId: config.wechatId || '请填写你的微信号',
    notice: config.notice || '付款后发送截图领取兑换码'
  });
};
