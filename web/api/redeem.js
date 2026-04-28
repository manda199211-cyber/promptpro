import crypto from "crypto";

function sign(payload, secret) {
  return crypto
    .createHmac("sha256", secret)
    .update(payload)
    .digest("hex")
    .slice(0, 16);
}

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, message: "Method not allowed" });
  }

  const secret = process.env.MPROMPT_TOKEN_SECRET;
  if (!secret) {
    return res.status(500).json({ ok: false, message: "缺少环境变量" });
  }

  const { code } = req.body || {};
  if (!code) {
    return res.status(400).json({ ok: false, message: "请输入兑换码" });
  }

  try {
    const parts = code.split(".");
    if (parts.length !== 2) {
      return res.status(400).json({ ok: false, message: "兑换码格式错误" });
    }

    const payload = parts[0];
    const signature = parts[1];

    const expected = sign(payload, secret);

    if (signature !== expected) {
      return res.status(400).json({ ok: false, message: "兑换码无效" });
    }

    const data = JSON.parse(Buffer.from(payload, "base64url").toString());

    res.status(200).json({
      ok: true,
      plan: data.plan,
      expiresAt: data.expiresAt,
      message: "开通成功"
    });
  } catch (e) {
    res.status(400).json({ ok: false, message: "兑换码解析失败" });
  }
}
