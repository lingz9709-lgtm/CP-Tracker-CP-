# 小程序版（导入微信开发者工具）

## 1. 如何导入
1. 打开「微信开发者工具」
2. 选择「导入项目」
3. 项目目录选择：`d:\desktop\黑客松比赛\小程序版`
4. AppID 选择：可先用「测试号」或「无 AppID（游客模式）」导入

## 2. DeepSeek API Key 粘贴位置
文件：`小程序版/miniprogram/config.js`
- 将 `DEEPSEEK_API_KEY` 的值替换为你的 `sk-...`
- 默认请求地址：`https://api.deepseek.com/chat/completions`

## 3. 知识库
小程序内置知识库索引文件：
- `小程序版/miniprogram/data/kb_index.json`

在「知识库」页可直接搜索（无需额外服务）。

## 4. 页面入口
- FBI小警察：包含轨道弹幕（可点击点赞）、时间线筛选与点赞、AI润色与结案报告
- 知识库：关键词检索，返回片段与文件名
- 测一测：16题人格测评
- 生成CP图：像素结婚照（基础版）

