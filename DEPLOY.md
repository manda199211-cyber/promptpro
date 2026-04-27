# M-Prompt 网页后端上线说明

## 本地启动

```bash
npm run server
```

打开：

```text
http://localhost:4174
```

## 生产环境必改

上线前一定要设置 token 密钥，不要使用默认值：

```bash
MPROMPT_TOKEN_SECRET="换成一串很长的随机字符串" npm run server
```

如果部署到 Render、Railway、宝塔、云服务器，把 `MPROMPT_TOKEN_SECRET` 配到环境变量里。

## 兑换码管理

兑换码在：

```text
server/redeem-codes.json
```

推荐不要手写兑换码，用命令生成：

```bash
npm run codes year 20
npm run codes life 20
```

可用类型：

```text
week   周付
month  月付
year   年付 ¥59
life   永久 ¥99
```

生成出来的码会写入 `server/redeem-codes.json`，同时备份到：

```text
server/generated-codes/
```

兑换码格式示例：

```json
{
  "YEAR-59-MP": { "plan": "年付", "price": "¥59 / 年", "days": 365 },
  "LIFE-99-MP": { "plan": "永久", "price": "¥99 一次性", "lifetime": true }
}
```

不要直接把固定示例码拿去卖，真实销售请用生成脚本生成随机码。现在兑换码是“一码一用”。客户兑换成功后，后端会把这个码标记为已使用。

## 修改联系方式

修改：

```text
server/site-config.json
```

示例：

```json
{
  "contactName": "M-Prompt",
  "wechatId": "你的微信号",
  "notice": "付款后发送截图领取兑换码"
}
```

用户在套餐页会看到这个微信号。

## 你每天怎么卖

1. 用户打开网站，免费体验。
2. 用户想开通，按页面提示添加你的微信。
3. 用户微信付款：年付 ¥59 或永久 ¥99。
4. 你运行命令生成兑换码，或从提前生成的码里拿一个。
5. 把兑换码发给用户。
6. 用户在网页点「兑换码」输入后自动解锁。

## 数据安全

完整提示词数据现在放在：

```text
server/data/positive.json
server/data/negative.json
```

前端不会再直接包含完整数据，也不会直接包含兑换码。用户访问 Pro 分类时，后端会检查兑换后的会员 token。

## 更新提示词数据

桌面版数据更新后，运行：

```bash
node scripts/export-web-data.js
```

它会重新生成后端使用的 JSON 数据。

## 部署建议

最低成本方案：

- 买一个域名，可选
- 用 Render / Railway / 飞书云函数 / 腾讯云轻量服务器跑 Node 服务
- 先手动微信收款 + 兑换码开通

后续自动化方案：

- 接微信支付或支付宝
- 支付成功后由后端自动生成兑换码或直接开通会员
- 兑换码从 JSON 升级到数据库
