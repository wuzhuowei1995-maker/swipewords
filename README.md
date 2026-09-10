# SwipeWords

这是一个为 iPhone 设计的极简 PWA 单词/固定句式复习器。

## 使用方式

1. 修改 `vocabulary.js`，把你的单词、chunks、固定句式追加进去。
2. 把整个文件夹部署到任意 HTTPS 静态网站。
3. iPhone 用 Safari 打开网址。
4. 点“分享” → “添加到主屏幕”。
5. 以后直接点桌面图标打开，上滑即可切换下一条。

## 词库格式

```js
{
  type: "phrase",
  front: "I'd rather ...",
  meaning: "我宁愿……",
  example: "I'd rather hike alone than join a large group."
}
```

`type` 只是整理用；当前极简界面不会显示它。

## 当前规则

- 每天第一次打开时生成当天的随机顺序。
- 当天会记住看到哪一条。
- 上滑或左滑进入下一条。
- 一轮看完后重新随机洗牌。
- 没有账号、收藏、测试、打卡、搜索或设置。
- Service Worker 缓存后可离线使用。

## 本机预览

不要直接双击 `index.html` 测试离线功能。可在该目录运行：

```bash
python -m http.server 8000
```

然后电脑浏览器打开 `http://localhost:8000`。

iPhone 要安装成 PWA，最终建议部署到 HTTPS 地址（例如 GitHub Pages / Cloudflare Pages）。
