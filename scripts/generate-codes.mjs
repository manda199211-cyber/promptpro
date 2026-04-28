import crypto from "crypto";

const secret = process.env.MPROMPT_TOKEN_SECRET;

if (!secret) {
  console.error("请先设置 MPROMPT_TOKEN_SECRET");
  process.exit(1);
}

const plan = process.argv[2] || "life";
const count = Number(process.argv[3] || 1);

function sign(payload, secret) {
  return crypto
    .createHmac("sha256", secret)
    .update(payload)
    .digest("hex")
    .slice(0, 16);
}

function makeCode(plan) {
  const now = Date.now();

  const expiresAt =
    plan === "year"
      ? new Date(now + 365 * 24 * 60 * 60 * 1000).toISOString()
      : "life";

  const data = {
    plan,
    expiresAt,
    nonce: crypto.randomBytes(6).toString("hex")
  };

  const payload = Buffer.from(JSON.stringify(data)).toString("base64url");
  const sig = sign(payload, secret);

  return `${payload}.${sig}`;
}

for (let i = 0; i < count; i++) {
  console.log(makeCode(plan));
}
