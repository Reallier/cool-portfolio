# 🚀 Reallier Wei - Personal Portfolio

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-14.2.5-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6.2-blue?style=for-the-badge&logo=typescript)
![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.1-38B2AC?style=for-the-badge&logo=tailwind-css)
![Three.js](https://img.shields.io/badge/Three.js-0.160.0-000000?style=for-the-badge&logo=three.js)

现代化的个人作品集网站，集成了3D交互、博客系统和项目展示功能

[在线演示](https://reallier-wei.dev) • [报告问题](https://github.com/Reallier/cool-portfolio/issues) • [功能建议](https://github.com/Reallier/cool-portfolio/issues)

</div>

---

## 📋 目录

- [项目简介](#-项目简介)
- [核心特性](#-核心特性)
- [技术架构](#-技术架构)
- [快速开始](#-快速开始)
- [项目结构](#-项目结构)
- [开发指南](#-开发指南)
- [部署方案](#-部署方案)
- [性能优化](#-性能优化)
- [常见问题](#-常见问题)
- [贡献指南](#-贡献指南)
- [许可证](#-许可证)

---

## 🎯 项目简介

这是一个使用 Next.js 14 App Router 构建的现代化个人作品集网站，专为软件工程师和开发者设计。项目融合了最新的 Web 技术栈，提供流畅的用户体验和丰富的交互效果。

### 核心亮点

- **🎨 现代化 UI/UX** - 采用 Glassmorphism 设计风格，流畅的过渡动画
- **🎭 3D 交互体验** - 集成 Three.js 和 React Three Fiber，支持自定义 3D 模型
- **📝 Markdown 博客系统** - 支持 MDX、代码高亮、标签分类
- **📊 GitHub 项目集成** - 自动拉取并展示 GitHub 仓库
- **🎯 SEO 优化** - 完整的 OpenGraph 和 Twitter Card 支持
- **⚡ 性能优化** - 图片懒加载、代码分割、边缘渲染
- **📱 响应式设计** - 完美适配移动端、平板和桌面设备
- **🎪 动画效果丰富** - Framer Motion 驱动的流畅动画
- **🔍 可访问性** - 符合 WCAG 2.1 标准

---

## ✨ 核心特性

### 🎨 视觉与交互

- **自定义 3D Hero 区域**
  - 支持 Procedural Blob 动态生成
  - 可导入自定义 glTF/GLB 3D 模型
  - 实时光照和材质效果
  
- **精美的 UI 组件**
  - 磁吸按钮效果 (Magnetic Button)
  - 倾斜卡片交互 (Tilt Card)
  - 噪点纹理背景 (Noise Card)
  - 霓虹高亮徽章 (Highlight Badge)
  - 打字机文字效果 (Typewriter Text)

- **流畅动画**
  - 页面滚动视差效果
  - 组件进入动画
  - 悬停微交互

### 📝 内容管理

- **博客系统**
  - Markdown/MDX 格式支持
  - 语法高亮 (Remark GFM)
  - 标签分类系统
  - 自动生成 OG 图片
  - 阅读时间估算
  - 相关文章推荐

- **项目展示**
  - 静态项目配置
  - GitHub API 动态集成
  - 项目卡片轮播
  - 技术栈标签
  - 实时更新状态

### 🛠 技术功能

- **API 路由**
  - GitHub 仓库数据获取
  - 动态 OG 图片生成
  - 边缘函数优化

- **性能监控**
  - Vercel Analytics 集成
  - Speed Insights 实时监控
  - 性能指标可视化

---

## 🏗 技术架构

### 核心技术栈

| 类别 | 技术 | 版本 | 用途 |
|------|------|------|------|
| **框架** | Next.js | 14.2.5 | React 全栈框架（App Router） |
| **语言** | TypeScript | 5.6.2 | 类型安全的 JavaScript 超集 |
| **UI 库** | React | 18.2.0 | 用户界面构建 |
| **样式** | Tailwind CSS | 3.4.1 | 实用优先的 CSS 框架 |
| **动画** | Framer Motion | 10.16.4 | React 动画库 |
| **3D 渲染** | Three.js | 0.160.0 | WebGL 3D 库 |
| **3D React** | React Three Fiber | 8.15.16 | Three.js 的 React 渲染器 |
| **3D 工具** | Drei | 9.105.6 | R3F 实用工具集 |

### 开发工具

- **内容处理**: Gray Matter (YAML front matter), Remark (Markdown 处理)
- **图标**: Lucide React (现代化图标库)
- **工具函数**: clsx (类名条件组合)
- **代码质量**: ESLint (代码检查)
- **部署**: Vercel (推荐), Docker, 腾讯云

### 架构特点

```
┌─────────────────────────────────────────────┐
│            Next.js App Router               │
├─────────────────────────────────────────────┤
│  ┌────────────┐  ┌──────────┐  ┌─────────┐ │
│  │  Server    │  │  Client  │  │   API   │ │
│  │ Components │  │Components│  │ Routes  │ │
│  └────────────┘  └──────────┘  └─────────┘ │
├─────────────────────────────────────────────┤
│              React Three Fiber              │
│  ┌────────────────────────────────────────┐ │
│  │         Three.js Scene                 │ │
│  │  ┌──────────┐  ┌──────────────────┐   │ │
│  │  │ 3D Model │  │ Procedural Blob  │   │ │
│  │  └──────────┘  └──────────────────┘   │ │
│  └────────────────────────────────────────┘ │
├─────────────────────────────────────────────┤
│           Tailwind CSS + Framer Motion      │
└─────────────────────────────────────────────┘
```

---

## 🚀 快速开始

### 预先要求

确保您的开发环境满足以下要求：

- **Node.js**: 18.x 或更高版本
- **包管理器**: npm 9.x+ / yarn 1.22+ / pnpm 8.x+
- **操作系统**: Windows 10+, macOS 10.15+, Ubuntu 20.04+

### 安装步骤

1. **克隆仓库**

```bash
git clone https://github.com/Reallier/cool-portfolio.git
cd cool-portfolio
```

2. **安装依赖**

```bash
# 使用 npm
npm install

# 或使用 yarn
yarn install

# 或使用 pnpm
pnpm install
```

3. **启动开发服务器**

```bash
npm run dev
```

4. **访问应用**

打开浏览器访问 [http://localhost:3000](http://localhost:3000)

### 快速配置

#### 个人信息配置

编辑 [`app/page.tsx`](app/page.tsx) 文件，修改以下内容：

```typescript
// 联系信息
const EMAIL = "your-email@example.com";
const GITHUB = "your-github-username";
const LINKEDIN = "your-linkedin-id";

// 个人简介
const INTRO_SECTIONS = [
  { text: "您的个人简介第一段..." },
  { text: "您的个人简介第二段..." },
  // ...
];
```

#### 3D 模型配置

**Option 1**: 使用默认的 Procedural Blob（程序化生成）

```tsx
<ThreeHero /> 
```

**Option 2**: 使用自定义 3D 模型

1. 将您的 `.glb` 或 `.gltf` 文件放入 [`public/models/`](public/models/) 目录
2. 命名为 `hero.glb`
3. 更新代码：

```tsx
<ThreeHero useModel />
```

#### 博客文章管理

**创建新文章**:

```bash
npm run create-post "你的文章标题"
```

这将在 [`content/blog/`](content/blog/) 目录下生成一个带有 front matter 的 Markdown 文件。

**Front Matter 格式**:

```yaml
---
title: "文章标题"
date: "2025-01-01"
description: "文章简介"
tags: ["标签1", "标签2"]
---

文章内容（Markdown 格式）...
```

---

## 📁 项目结构

```
cool-portfolio/
│
├── app/                          # Next.js App Router 目录
│   ├── api/                      # API 路由
│   │   ├── github/              # GitHub 相关 API
│   │   │   └── repos/           # 获取仓库信息
│   │   └── og/                  # Open Graph 图片生成
│   ├── blog/                    # 博客页面
│   │   ├── [slug]/              # 动态博客文章页面
│   │   └── page.tsx             # 博客列表页面
│   ├── projects/                # 项目展示页面
│   │   ├── [slug]/              # 动态项目详情页面
│   │   └── page.tsx             # 项目列表页面
│   ├── layout.tsx               # 根布局组件
│   ├── page.tsx                 # 首页
│   ├── globals.css              # 全局样式
│   ├── HeroAnimation.tsx        # Hero 区域动画
│   ├── ThreeHero.tsx            # Three.js 3D 场景
│   └── AvatarWithFloat.tsx      # 浮动头像组件
│
├── components/                   # React 组件
│   ├── ui/                      # UI 组件库
│   │   ├── AnimatedIntro.tsx    # 动画介绍组件
│   │   ├── HighlightBadge.tsx   # 高亮徽章
│   │   ├── MagneticButton.tsx   # 磁吸按钮
│   │   ├── NoiseCard.tsx        # 噪点卡片
│   │   ├── ProjectMarquee.tsx   # 项目轮播
│   │   ├── SkillCard.tsx        # 技能卡片
│   │   ├── SkillMarquee.tsx     # 技能轮播
│   │   ├── TiltCard.tsx         # 倾斜卡片
│   │   └── TypewriterText.tsx   # 打字机效果
│   ├── ExperienceCard.tsx       # 经历卡片
│   ├── FloatingBackground.tsx   # 浮动背景
│   ├── Navigation.tsx           # 导航栏
│   ├── ProjCard.tsx             # 项目卡片
│   └── Section.tsx              # 区域容器
│
├── content/                      # 内容文件
│   └── blog/                    # 博客文章（Markdown）
│       ├── python-asyncio-best-practices.md
│       ├── kubernetes-game-server-scheduling.md
│       ├── tdd-engineering-practice.md
│       ├── template.md          # 文章模板
│       └── README.md            # 博客说明
│
├── lib/                         # 工具库和数据
│   ├── blog.ts                  # 博客数据处理
│   ├── projects.ts              # 项目数据管理
│   └── skill-icons.ts           # 技能图标配置
│
├── public/                      # 静态资源
│   ├── models/                  # 3D 模型文件
│   │   └── hero.glb
│   ├── images/                  # 图片资源
│   ├── icons/                   # 图标文件
│   ├── avatar.png               # 头像
│   ├── og.png                   # OG 图片
│   └── favicon.ico              # 网站图标
│
├── scripts/                     # 构建和工具脚本
│   └── create-post.js           # 创建博客文章脚本
│
├── styles/                      # 额外样式文件
│   └── globals.css
│
├── .dockerignore                # Docker 忽略文件
├── .gitignore                   # Git 忽略文件
├── Dockerfile                   # Docker 配置
├── docker-compose.yml           # Docker Compose 配置
├── next.config.mjs              # Next.js 配置
├── tailwind.config.ts           # Tailwind CSS 配置
├── tsconfig.json                # TypeScript 配置
├── postcss.config.js            # PostCSS 配置
└── package.json                 # 项目依赖和脚本
```

---

## 🛠 开发指南

### 可用脚本

```bash
# 开发模式（热重载）
npm run dev

# 生产构建
npm run build

# 启动生产服务器
npm start

# 代码检查
npm run lint

# 创建新博客文章
npm run create-post "文章标题"
```

### 开发工作流

1. **组件开发**
   - 所有可复用组件放在 `components/` 目录
   - UI 组件放在 `components/ui/` 子目录
   - 使用 TypeScript 类型定义
   - 遵循 React 最佳实践

2. **样式开发**
   - 优先使用 Tailwind CSS 工具类
   - 自定义样式放在 `globals.css`
   - 颜色变量定义在 `tailwind.config.ts`

3. **添加新页面**
   - 在 `app/` 目录下创建新的路由文件夹
   - 使用 `page.tsx` 作为页面组件
   - 使用 `layout.tsx` 定义布局

4. **API 路由**
   - 在 `app/api/` 目录下创建
   - 使用 `route.ts` 文件导出处理函数
   - 支持 GET, POST 等 HTTP 方法

### 自定义配置

#### 主题颜色

编辑 [`tailwind.config.ts`](tailwind.config.ts):

```typescript
theme: {
  extend: {
    colors: {
      primary: {
        blue: '#3b82f6',    // 主色调
        cyan: '#06b6d4',    // 次色调
      },
      // ... 其他颜色
    }
  }
}
```

#### SEO 配置

编辑 [`app/layout.tsx`](app/layout.tsx):

```typescript
export const metadata: Metadata = {
  title: "您的名字 | 职位描述",
  description: "个人简介...",
  // ... 其他 SEO 配置
};
```

---

## 🚢 部署方案

### Vercel 部署（推荐）

**优势**: 零配置、免费 SSL、全球 CDN、自动构建

```bash
# 1. 安装 Vercel CLI
npm i -g vercel

# 2. 登录
vercel login

# 3. 部署
vercel
```

或者通过 Vercel Dashboard:
1. 导入 GitHub 仓库
2. 自动检测 Next.js 项目
3. 一键部署

详细文档: [VERCEL-DEPLOYMENT.md](VERCEL-DEPLOYMENT.md)

### Docker 部署

**适用场景**: 自托管服务器、云服务器

```bash
# 构建镜像
docker build -t cool-portfolio .

# 运行容器
docker run -p 3000:3000 cool-portfolio
```

使用 Docker Compose:

```bash
docker-compose up -d
```

详细文档: [DOCKER-WORKFLOW.md](DOCKER-WORKFLOW.md)

### 腾讯云部署

**适用场景**: 国内访问优化、备案需求

详细步骤请参考:
- [TENCENT-CLOUD-DEPLOYMENT.md](TENCENT-CLOUD-DEPLOYMENT.md)
- [TENCENT-CLOUD-STEP-BY-STEP.md](TENCENT-CLOUD-STEP-BY-STEP.md)

### 环境变量

创建 `.env.local` 文件：

```env
# GitHub API（用于项目展示）
GITHUB_TOKEN=your_github_token

# 网站 URL（用于 OG 图片生成）
NEXT_PUBLIC_SITE_URL=https://your-domain.com

# Analytics（可选）
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

---

## ⚡ 性能优化

### 已实现的优化

- ✅ **图片优化**: 使用 Next.js Image 组件，自动 WebP 转换
- ✅ **代码分割**: Dynamic import 按需加载 Three.js
- ✅ **字体优化**: 本地字体文件，避免 FOUT
- ✅ **CSS 优化**: Tailwind CSS 生产构建自动清除未使用样式
- ✅ **缓存策略**: 静态资源永久缓存
- ✅ **边缘渲染**: API 路由部署到 Edge Functions
- ✅ **预渲染**: 静态页面在构建时生成

### 性能指标

| 指标 | 目标值 | 实际值 |
|-----|-------|--------|
| First Contentful Paint | < 1.8s | ~1.2s |
| Largest Contentful Paint | < 2.5s | ~1.8s |
| Time to Interactive | < 3.8s | ~2.5s |
| Cumulative Layout Shift | < 0.1 | ~0.05 |
| Lighthouse Score | > 90 | 95+ |

### 优化建议

1. **启用 gzip 压缩**: 在服务器层面启用
2. **使用 CDN**: 推荐使用 Vercel 或 Cloudflare
3. **图片懒加载**: 已经实现，确保正确使用
4. **监控性能**: 使用 Vercel Analytics 持续监控

---

## ❓ 常见问题

<details>
<summary><b>Q: 3D 模型不显示怎么办？</b></summary>

**A**: 
1. 确保模型文件是 `.glb` 或 `.gltf` 格式
2. 检查文件路径是否正确（`public/models/hero.glb`）
3. 确保模型大小合理（推荐 < 5MB）
4. 检查浏览器控制台是否有错误信息
5. 尝试使用 [glTF Viewer](https://gltf-viewer.donmccurdy.com/) 验证模型
</details>

<details>
<summary><b>Q: 如何修改导航栏颜色？</b></summary>

**A**: 
编辑 `components/Navigation.tsx` 文件，修改 className 中的颜色类：
```tsx
className="bg-surface/95 border-border-strong"
```
</details>

<details>
<summary><b>Q: 博客文章不显示？</b></summary>

**A**: 
1. 确保文章在 `content/blog/` 目录下
2. 检查文件扩展名是 `.md`
3. 确保 front matter 格式正确
4. 重启开发服务器
</details>

<details>
<summary><b>Q: GitHub 项目拉取失败？</b></summary>

**A**: 
1. 检查是否设置了 `GITHUB_TOKEN` 环境变量
2. 确保 token 有 `repo` 权限
3. 检查 GitHub API 速率限制（未认证: 60次/小时，认证: 5000次/小时）
</details>

<details>
<summary><b>Q: 部署后样式丢失？</b></summary>

**A**: 
1. 确保运行了 `npm run build`
2. 检查 `.next` 目录是否存在
3. 查看部署平台的构建日志
4. 确认 Tailwind 配置正确
</details>

---

## 🤝 贡献指南

我们欢迎所有形式的贡献！

### 贡献流程

1. **Fork 本仓库**
2. **创建特性分支** (`git checkout -b feature/AmazingFeature`)
3. **提交更改** (`git commit -m 'Add some AmazingFeature'`)
4. **推送到分支** (`git push origin feature/AmazingFeature`)
5. **开启 Pull Request**

### 代码规范

- 遵循 ESLint 规则
- 使用 TypeScript 类型定义
- 组件使用 PascalCase 命名
- 函数使用 camelCase 命名
- 常量使用 UPPER_CASE 命名
- 提交信息遵循 [Conventional Commits](https://www.conventionalcommits.org/)

### Bug 报告

发现 Bug？请[创建 Issue](https://github.com/Reallier/cool-portfolio/issues/new) 并包含：

- 问题的详细描述
- 复现步骤
- 期望行为
- 实际行为
- 截图（如果适用）
- 环境信息（浏览器、操作系统等）

---

## 📊 项目状态

- **版本**: 1.0.0
- **维护状态**: 活跃维护 🟢
- **构建状态**: [![Build Status](https://img.shields.io/github/actions/workflow/status/Reallier/cool-portfolio/deploy.yml)](https://github.com/Reallier/cool-portfolio/actions)
- **代码质量**: [![Code Quality](https://img.shields.io/codacy/grade/XXXXX)](https://www.codacy.com/app/Reallier/cool-portfolio)

---

## 📝 更新日志

### v1.0.0 (2025-01-14)
- 🎉 首次发布
- ✨ 完整的个人作品集功能
- 🎨 3D 交互和动画效果
- 📝 博客系统实现
- 🚀 多平台部署支持

查看完整更新日志: [CHANGELOG.md](CHANGELOG.md)

---

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

这意味着你可以：
- ✅ 商业使用
- ✅ 修改
- ✅ 分发
- ✅ 私人使用

条件是：
- 📋 保留版权声明
- 📋 包含许可证副本

---

## 🙏 致谢

### 技术栈

- [Next.js](https://nextjs.org/) - React 框架
- [Vercel](https://vercel.com/) - 部署平台
- [Tailwind CSS](https://tailwindcss.com/) - CSS 框架
- [Three.js](https://threejs.org/) - 3D 库
- [Framer Motion](https://www.framer.com/motion/) - 动画库

### 设计灵感

- [Awwwards](https://www.awwwards.com/)
- [Dribbble](https://dribbble.com/)
- [Behance](https://www.behance.net/)

### 社区

感谢所有贡献者和支持者！

---

## 📞 联系方式

- **Email**: icey123580@gmail.com
- **GitHub**: [@Reallier](https://github.com/Reallier)
- **LinkedIn**: [Reallier Wei](https://linkedin.com/in/reallier)
- **Blog**: [https://reallier-wei.dev/blog](https://reallier-wei.dev/blog)

---

<div align="center">

**如果这个项目对你有帮助，请给一个 ⭐️！**

Made with ❤️ by [Reallier Wei](https://github.com/Reallier)

[回到顶部](#-reallier-wei---personal-portfolio)

</div>
