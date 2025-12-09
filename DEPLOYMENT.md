# 部署指南

本文档介绍如何部署 PolyHermes 展示网站。

## 前置要求

- Node.js 18+ 和 npm
- 静态文件服务器（Nginx、Apache 等）或静态托管服务

## 构建步骤

### 1. 安装依赖

```bash
cd landing-page
npm install
```

### 2. 构建项目

使用构建脚本（推荐）：

```bash
./build.sh
```

或手动构建：

```bash
# 复制截图文件
mkdir -p public/screenshot
cp -r ../screenshot/* public/screenshot/

# 构建
npm run build
```

构建完成后，产物在 `dist` 目录。

## 部署方式

### 方式一：Nginx 部署

1. 将 `dist` 目录内容复制到 Nginx 网站根目录：

```bash
sudo cp -r dist/* /var/www/polyhermes/
```

2. 配置 Nginx：

```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /var/www/polyhermes;
    index index.html;

    # 支持 SPA 路由
    location / {
        try_files $uri $uri/ /index.html;
    }

    # 静态资源缓存
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Gzip 压缩
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss application/json;
}
```

3. 重启 Nginx：

```bash
sudo nginx -t
sudo systemctl reload nginx
```

### 方式二：Apache 部署

1. 将 `dist` 目录内容复制到 Apache 网站根目录：

```bash
sudo cp -r dist/* /var/www/html/polyhermes/
```

2. 启用 mod_rewrite 和配置 `.htaccess`：

```apache
<Directory /var/www/html/polyhermes>
    Options Indexes FollowSymLinks
    AllowOverride All
    Require all granted
</Directory>
```

在 `dist` 目录创建 `.htaccess`：

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

### 方式三：GitHub Pages 部署

1. 安装 `gh-pages`：

```bash
npm install --save-dev gh-pages
```

2. 在 `package.json` 添加脚本：

```json
{
  "scripts": {
    "deploy": "npm run build && gh-pages -d dist"
  }
}
```

3. 部署：

```bash
npm run deploy
```

### 方式四：Vercel 部署

1. 安装 Vercel CLI：

```bash
npm i -g vercel
```

2. 在项目根目录运行：

```bash
vercel
```

3. 或通过 GitHub 集成自动部署。

### 方式五：Netlify 部署

1. 安装 Netlify CLI：

```bash
npm i -g netlify-cli
```

2. 构建并部署：

```bash
npm run build
netlify deploy --prod --dir=dist
```

3. 或通过 GitHub 集成自动部署。

## 截图路径配置

如果截图文件无法显示，需要确保：

1. 截图文件已复制到 `public/screenshot` 目录
2. 构建时截图文件被正确复制到 `dist/screenshot` 目录
3. 服务器配置正确，可以访问静态资源

## 自定义域名和 HTTPS

### 使用 Let's Encrypt 配置 HTTPS

```bash
# 安装 certbot
sudo apt-get install certbot python3-certbot-nginx

# 获取证书
sudo certbot --nginx -d your-domain.com

# 自动续期
sudo certbot renew --dry-run
```

## 性能优化

### 1. 启用 Gzip 压缩

已在 Nginx 配置示例中包含。

### 2. 静态资源 CDN

将静态资源（图片、CSS、JS）部署到 CDN，提高加载速度。

### 3. 缓存策略

- HTML 文件：不缓存或短时间缓存
- 静态资源：长期缓存（1年）

## 故障排查

### 问题：页面空白

- 检查浏览器控制台错误
- 确认所有资源路径正确
- 检查服务器配置是否正确

### 问题：截图无法显示

- 确认截图文件已复制到 `dist/screenshot` 目录
- 检查文件权限
- 检查服务器配置是否允许访问静态资源

### 问题：路由 404

- 确认服务器配置了 SPA 路由支持（`try_files` 或 `mod_rewrite`）
- 检查 `.htaccess` 文件（Apache）

## 更新部署

更新内容后，重新构建并部署：

```bash
# 重新构建
./build.sh

# 复制到服务器
sudo cp -r dist/* /var/www/polyhermes/

# 重启服务器（如需要）
sudo systemctl reload nginx
```

## 监控和维护

- 定期检查网站可访问性
- 监控服务器资源使用情况
- 定期更新依赖包（`npm update`）
- 备份配置文件

