# M-Prompt 上线清单

## 1. 本地最终检查

```bash
npm run serve
```

打开：

```text
http://localhost:4174
```

检查：

- 免费分类能打开
- Pro 分类会提示开通
- 顶部显示「兑换码」
- 套餐价格是年付 ¥59、永久 ¥99
- 购买说明显示微信 `Skt1never`

## 2. 生成正式兑换码

年付：

```bash
npm run codes year 20
```

永久：

```bash
npm run codes life 20
```

生成的码会保存到：

```text
server/generated-codes/
```

客户付款后，发一个未使用的码给他。

## 3. 部署平台设置

部署时使用：

```bash
npm run serve
```

或：

```bash
node server/server.js
```

环境变量必须设置：

```text
MPROMPT_TOKEN_SECRET=一串很长的随机字符串
```

可选：

```text
FREE_CATEGORY_LIMIT=8
```

## 4. 上传文件

需要上传整个项目，但重点是：

```text
web/
server/
scripts/
package.json
Procfile
```

不要公开发布你的兑换码库存文件。如果用 GitHub，建议用私有仓库。

## 5. 上线后卖法

给用户发：

```text
M-Prompt 提示词库上线了，可以免费体验部分分类。

年付 ¥59
永久 ¥99

开通方式：
添加微信 Skt1never 付款，付款后发送兑换码。
在网页顶部点击「兑换码」输入即可解锁全部提示词。
```

## 6. 换设备说明

兑换后同一浏览器会自动保持会员状态。

如果用户换设备或清理浏览器数据，让他重新输入原兑换码。如果兑换码已显示使用过，你可以给他补发一个新码。
