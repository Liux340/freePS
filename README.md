# QuickToolLab PS

QuickToolLab PS 是一款基于浏览器的图片编辑器，适合进行快速编辑、图层处理、滤镜应用、画笔绘制、裁剪、文字添加以及常见的视觉调整。

它可以直接在浏览器中运行。用户可以新建图片、从剪贴板粘贴、从本地电脑上传，或通过拖拽导入图片。所有图片编辑操作都在浏览器本地完成。

## 预览

线上地址：

https://ps.quicktoollab.top

## 浏览器支持

- Chrome
- Firefox
- Opera
- Edge
- Safari

## 部署

本项目是静态站点，不需要构建步骤。

### Cloudflare Pages

- 项目名称：`quicktoollab-ps`
- 构建命令：`exit 0`
- 构建输出目录：`.`
- 自定义域名：`ps.quicktoollab.top`

使用 Wrangler 部署：

```bash
npx wrangler pages deploy . --project-name quicktoollab-ps --branch main
```

首次部署完成后，在 Cloudflare Pages > Custom domains 中添加 `ps.quicktoollab.top`。

## QuickToolLab 定制内容

该部署包含独立的品牌定制层：

- `quicktoollab-brand.css`
- `quicktoollab-brand.js`
- `images/quicktoollab-ps.svg`
- `_headers`

核心编辑器文件保持不变，同时针对 `QuickToolLab PS` 定制了公开标题、元数据、Logo、favicon、加载页、配色处理、缓存行为以及 Cloudflare Pages 设置。

发布前，请检查上游项目的许可证，并保留所有必要的开源署名信息。

## 致谢

该定制部署基于开源浏览器图片编辑器生态。

https://github.com/viliusle/miniPaint
