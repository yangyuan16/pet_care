# AGENTS.md

本文件供后续在本仓库中工作的 AI Agent 或开发者快速理解项目。修改代码前请先阅读本文件，并以现有结构和风格为准。

## 项目概览

这是一个基于 Next.js App Router 的宠物洗护门店单页展示站，主题是“高端宠物洗护 / 造型 / SPA / 预约咨询”。页面由多个独立区块组合而成：首页入口在 `app/page.tsx`，全局布局和元数据在 `app/layout.tsx`，全局样式集中在 `app/globals.css`。

当前项目主要是纯前端展示，没有后端接口、数据库、鉴权、状态管理库或测试框架。预约表单只在浏览器端保存临时状态，提交时通过 `window.alert` 给出反馈，然后重置表单。

## 技术栈

- Next.js，使用 `app/` 目录。
- React，组件以函数组件为主。
- TypeScript，`tsconfig.json` 开启 `strict`。
- CSS 使用单个全局样式文件 `app/globals.css`，没有 Tailwind、CSS Modules 或 UI 组件库。
- 路径别名 `@/*` 指向项目根目录。

## 常用命令

```bash
npm run dev
npm run build
npm run start
```

说明：

- `npm run dev` 启动本地开发服务器。
- `npm run build` 做生产构建，是提交前最重要的验证命令。
- `npm run start` 用于运行已经构建好的生产版本。

## 目录结构

```text
app/
  globals.css      全局样式、响应式布局、组件视觉样式
  layout.tsx       根布局、页面 metadata、语言设置
  page.tsx         单页首页，按顺序组合各业务区块

components/
  header.tsx           顶部导航
  hero.tsx             首屏介绍、行动按钮、数据卡片和主视觉
  services.tsx         服务项目卡片
  features.tsx         服务优势卡片
  space-section.tsx    门店空间区块标题与轮播入口
  space-carousel.tsx   门店空间轮播，客户端组件
  reviews.tsx          客户评价轮播，客户端组件
  booking-section.tsx  预约说明、地图和联系方式
  booking-form.tsx     预约表单，客户端组件
  reveal.tsx           IntersectionObserver 入场动画包装组件
  footer.tsx           页脚

public/
  pet-shop-interior-carousel.png  首屏和页面背景图
  space-slide-1.png               门店空间轮播图 1
  space-slide-2.png               门店空间轮播图 2
  space-slide-3.png               门店空间轮播图 3
```

## 页面组成

`app/page.tsx` 当前按以下顺序渲染：

1. `Header`
2. `Hero`
3. `Services`
4. `Features`
5. `SpaceSection`
6. `Reviews`
7. `BookingSection`
8. `Footer`

锚点导航依赖区块上的 `id`，例如 `#services`、`#space`、`#reviews`、`#booking`。新增或改名区块时，同步检查 `Header` 中的链接。

## 组件约定

- 默认优先使用服务端组件；只有需要浏览器 API、React 状态或副作用时才加 `"use client"`。
- 当前客户端组件包括：
  - `components/reveal.tsx`：使用 `IntersectionObserver` 触发入场状态。
  - `components/space-carousel.tsx`：使用 `useState` 和 `setInterval` 自动切换门店空间轮播。
  - `components/reviews.tsx`：把评价按每页 3 条分页，并自动轮播。
  - `components/booking-form.tsx`：维护表单输入状态，并处理提交。
- 数据量较小的展示内容直接放在组件文件顶部的常量数组中，例如 `services`、`features`、`slides`、`reviews`。
- 组件之间没有共享状态。新增交互时优先保持局部状态，避免引入全局状态管理。

## 样式约定

- 所有主要样式集中在 `app/globals.css`。
- 布局基础类：
  - `.page-shell`：页面外壳和整体背景。
  - `.container`：统一内容宽度。
  - `.section`：统一区块上下间距。
  - `.section-head`：区块标题和描述布局。
  - `.card`：卡片通用视觉。
  - `.btn`、`.btn-primary`、`.btn-secondary`：按钮样式。
- 颜色、阴影和边框使用 `:root` 中的 CSS 变量，新增颜色前先检查是否能复用现有变量。
- 响应式断点目前是 `960px` 和 `680px`。
- 图片以 CSS 背景图为主，路径来自 `public/`，在代码中使用 `/filename.png`。

## 内容和编码注意事项

当前多个 `.tsx` 文件中的中文文案呈现为乱码，疑似 UTF-8 内容被错误编码或以错误编码保存后再次读取。部分位置看起来还可能破坏 TSX 字符串或标签语法。后续维护时请优先处理编码问题：

- 用 UTF-8 重新保存所有源码文件。
- 修复明显损坏的中文文案、引号、标签闭合和模板字符串。
- 修复后运行 `npm run build` 验证。
- 不要在未确认原意的情况下大批量猜改业务文案。

## 地图和外部链接

`components/booking-section.tsx` 中使用高德地图 URL：

- `storeAddress` 保存门店地址。
- `mapUrl` 使用 `encodeURIComponent(storeAddress)` 拼接 `https://uri.amap.com/search`。
- `iframe` 使用该 URL 作为地图展示。

如需替换门店信息，优先修改 `storeAddress`、营业时间和预约电话，并检查地图能正常打开。

## 表单行为

`components/booking-form.tsx` 中的表单字段包括：

- 称呼
- 宠物类型
- 预约项目
- 期望到店日期
- 补充说明

默认到店时间由 `createTomorrowMorningValue()` 生成，为当前日期的次日 09:30。提交后不会发送网络请求，只弹出浏览器提示并重置表单。若要接入真实预约能力，应新增 API 路由或外部服务调用，并补充错误、成功、加载状态。

## 开发建议

- 修改页面顺序时，从 `app/page.tsx` 开始。
- 修改文案或卡片内容时，优先在对应组件顶部的数据常量中调整。
- 修改视觉样式时，优先在 `app/globals.css` 中复用已有类和变量。
- 新增图片资源放入 `public/`，并使用根路径引用，例如 `/new-image.png`。
- 新增客户端交互前确认是否真的需要 `"use client"`，避免扩大客户端包体。
- 提交前至少运行 `npm run build`。

## Git 和生成文件

`.gitignore` 已忽略：

- `.next/`
- `node_modules/`
- `out/`
- `dist/`
- 日志文件
- 本地环境变量文件
- 编辑器和系统临时文件
- 覆盖率与 Turbo 缓存

不要提交构建产物、依赖目录、日志或本地环境配置。
