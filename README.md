# 企业内部学习网站报价页 Demo

这是一个静态网页项目，可直接本地打开。

## 文件结构

- `index.html`：页面结构
- `styles.css`：视觉样式
- `script.js`：基础交互
- `videos/`：视频文件夹

## 如何替换视频

把你自己的 MP4 视频放入 `videos` 文件夹，并按以下名称命名：

- `basic-demo.mp4`：体验版方案展示视频
- `standard-demo.mp4`：视觉版方案展示视频
- `premium-demo.mp4`：精致版方案展示视频

如果你的视频文件名不同，请打开 `index.html`，修改对应的：

```html
<source src="./videos/basic-demo.mp4" type="video/mp4" />
```

## 如何预览

直接双击打开 `index.html` 即可。
