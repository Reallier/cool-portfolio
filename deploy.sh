#!/bin/bash

# 服务器端部署脚本
# 用于在服务器上拉取最新镜像并重启服务

# 你的腾讯云镜像仓库配置
REGISTRY="ccr.ccs.tencentyun.com"
IMAGE="ccr.ccs.tencentyun.com/reallier/portfolio:latest"

echo "================================================"
echo "🚀 Docker 服务部署脚本"
echo "================================================"
echo ""

# 登录镜像仓库
echo "🔐 步骤 1/4: 登录腾讯云镜像仓库..."
docker login ${REGISTRY}

if [ $? -ne 0 ]; then
    echo "❌ 登录失败！"
    exit 1
fi

echo "✅ 登录成功！"
echo ""

# 拉取最新镜像
echo "📥 步骤 2/4: 拉取最新镜像..."
docker pull ${IMAGE}

if [ $? -ne 0 ]; then
    echo "❌ 镜像拉取失败！"
    exit 1
fi

echo "✅ 镜像拉取成功！"
echo ""

# 重启服务
echo "🔄 步骤 3/4: 重启服务..."
docker-compose -f docker-compose.prod.yml down
docker-compose -f docker-compose.prod.yml up -d

if [ $? -ne 0 ]; then
    echo "❌ 服务启动失败！"
    exit 1
fi

echo "✅ 服务启动成功！"
echo ""

# 清理未使用的镜像
echo "🧹 步骤 4/4: 清理未使用的镜像..."
docker image prune -f

echo ""
echo "================================================"
echo "✅ 部署完成！"
echo "================================================"
echo ""
echo "查看服务状态："
echo "  docker-compose -f docker-compose.prod.yml ps"
echo ""
echo "查看服务日志："
echo "  docker-compose -f docker-compose.prod.yml logs -f"
echo ""
echo "访问地址："
echo "  https://me.reallier.com"
echo "  http://your-server-ip:8080 (Traefik Dashboard)"
echo ""