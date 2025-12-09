#!/bin/bash

# PolyHermes Landing Page 构建脚本

set -e

echo "🚀 开始构建 PolyHermes 展示网站..."

# 检查 Node.js
if ! command -v node &> /dev/null; then
    echo "❌ 错误: 未找到 Node.js，请先安装 Node.js"
    exit 1
fi

# 检查 npm
if ! command -v npm &> /dev/null; then
    echo "❌ 错误: 未找到 npm，请先安装 npm"
    exit 1
fi

# 安装依赖
if [ ! -d "node_modules" ]; then
    echo "📦 安装依赖..."
    npm install
fi

# 复制截图到 public 目录
if [ -d "../screenshot" ]; then
    echo "📸 复制截图文件..."
    mkdir -p public/screenshot
    cp -r ../screenshot/* public/screenshot/ 2>/dev/null || true
    echo "✅ 截图文件已复制"
else
    echo "⚠️  警告: 未找到 ../screenshot 目录，截图可能无法显示"
fi

# 构建项目
echo "🔨 构建项目..."
npm run build

echo "✅ 构建完成！"
echo "📁 构建产物在 dist 目录"
echo ""
echo "预览构建结果:"
echo "  npm run preview"
echo ""
echo "部署到服务器:"
echo "  将 dist 目录的内容部署到静态文件服务器"

