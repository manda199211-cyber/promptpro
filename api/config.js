module.exports = function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.status(204).end();
    return;
  }

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 'no-store');
  res.status(200).json({
    contactName: 'M-Prompt',
    wechatId: 'Skt1never',
    notice: '\u4ed8\u6b3e\u540e\u53d1\u9001\u622a\u56fe\u9886\u53d6\u5151\u6362\u7801'
  });
};
