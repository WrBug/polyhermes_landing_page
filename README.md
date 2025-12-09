# PolyHermes 展示网站

PolyHermes 系统的展示和宣传网站，支持 Web 和移动端适配，支持多语言。

## 功能特性

- ✅ 响应式设计，完美支持桌面端和移动端
- ✅ 现代化的 UI 设计
- ✅ 平滑滚动和动画效果
- ✅ 展示系统核心功能
- ✅ 技术栈介绍
- ✅ 界面截图展示
- ✅ 快速部署指南
- ✅ 多语言支持（简体中文、繁体中文、英文）

## 技术栈

- **框架**: React 18 + TypeScript
- **构建工具**: Vite
- **UI 库**: Ant Design 5.12.0
- **响应式**: react-responsive
- **多语言**: react-i18next + i18next

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

访问 http://localhost:3001

### 构建生产版本

#### 方式一：使用构建脚本（推荐）

```bash
./build.sh
```

构建脚本会自动：
- 检查 Node.js 和 npm
- 安装依赖（如果需要）
- 复制截图文件到 public 目录
- 构建项目

#### 方式二：手动构建

```bash
# 复制截图文件
mkdir -p public/screenshot
cp -r ../screenshot/* public/screenshot/

# 构建项目
npm run build
```

构建产物在 `dist` 目录。

### 预览生产版本

```bash
npm run preview
```

## 项目结构

```
landing-page/
├── src/
│   ├── components/          # 组件
│   │   ├── Header.tsx      # 头部导航
│   │   ├── Hero.tsx        # 首页 Hero 区域
│   │   ├── Features.tsx    # 功能展示
│   │   ├── TechStack.tsx   # 技术栈
│   │   ├── Screenshots.tsx # 界面截图
│   │   ├── QuickStart.tsx  # 快速开始
│   │   ├── Footer.tsx      # 页脚
│   │   ├── LanguageSwitcher.tsx # 语言切换器
│   │   └── MetaTags.tsx    # Meta 标签动态更新
│   ├── locales/            # 多语言文件
│   │   ├── zh-CN/          # 简体中文
│   │   │   └── common.json
│   │   ├── zh-TW/          # 繁体中文
│   │   │   └── common.json
│   │   └── en/             # 英文
│   │       └── common.json
│   ├── i18n/               # 国际化配置
│   │   └── config.ts       # i18n 配置文件
│   ├── App.tsx             # 主应用组件
│   ├── main.tsx            # 入口文件
│   └── index.css           # 全局样式
├── public/                 # 静态资源
│   ├── screenshot/         # 截图文件
│   └── favicon.*           # 网站图标
├── index.html              # HTML 模板
├── package.json            # 依赖配置
├── tsconfig.json           # TypeScript 配置
├── vite.config.ts          # Vite 配置
├── build.sh                # 构建脚本
└── README.md               # 说明文档
```

## 部署

### 静态部署

构建完成后，将 `dist` 目录部署到任何静态文件服务器：

- Nginx
- Apache
- GitHub Pages
- Vercel
- Netlify
- 其他静态托管服务

### Nginx 配置示例

```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /path/to/landing-page/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location /screenshot {
        alias /path/to/polymarket-bot/screenshot;
    }
}
```

### 截图路径配置

构建脚本会自动将截图从项目根目录复制到 `public/screenshot` 目录。

如果手动构建，需要：

1. 将 `../screenshot` 目录复制到 `landing-page/public/screenshot` 目录
2. 或者配置服务器将 `/screenshot` 路径指向实际的截图目录

```bash
# 手动复制截图
mkdir -p public/screenshot
cp -r ../screenshot/* public/screenshot/
```

## 自定义配置

### 修改颜色主题

在 `src/components/` 下的各个 CSS 文件中修改颜色值：

- 主色调：`#1890ff` 和 `#722ed1`（与后台管理系统一致）
- 可以在各个组件的 CSS 文件中自定义

### 修改内容

**注意**：所有文本内容已迁移到多语言文件，请修改语言文件而不是组件文件：

- `src/locales/zh-CN/common.json` - 简体中文
- `src/locales/zh-TW/common.json` - 繁体中文
- `src/locales/en/common.json` - 英文

### 添加新语言

1. 在 `src/locales/` 目录下创建新的语言文件（如 `ja/common.json`）
2. 在 `src/i18n/config.ts` 中添加新语言资源
3. 在 `LanguageSwitcher.tsx` 中添加语言选项

### 语言切换

- 桌面端：Header 右侧显示语言切换器
- 移动端：语言切换器在图标按钮和菜单按钮之间
- 语言设置会保存到 localStorage，刷新后保持

## 浏览器支持

- Chrome (最新版本)
- Firefox (最新版本)
- Safari (最新版本)
- Edge (最新版本)
- 移动端浏览器

## Git 仓库

项目 Git 仓库地址：`git@github.com:WrBug/polyhermes_landing_page.git`

### 首次提交

```bash
git add .
git commit -m "Initial commit: PolyHermes landing page"
git push -u origin main
```

## 许可证

MIT License
