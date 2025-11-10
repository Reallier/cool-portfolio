#!/bin/bash

# 腾讯云容器镜像仓库配置
# 你的腾讯云镜像仓库配置
REGISTRY="ccr.ccs.tencentyun.com"
NAMESPACE="reallier"
IMAGE_NAME="portfolio"
VERSION="1.0.0"

# 构建完整镜像名称
FULL_IMAGE="${REGISTRY}/${NAMESPACE}/${IMAGE_NAME}:${VERSION}"
LATEST_IMAGE="${REGISTRY}/${NAMESPACE}/${IMAGE_NAME}:latest"

echo "================================================"
echo "🔨 Docker 镜像构建和推送脚本"
echo "================================================"
echo ""
echo "镜像信息："
echo "  - 版本镜像: ${FULL_IMAGE}"
echo "  - 最新镜像: ${LATEST_IMAGE}"
echo ""

# 构建镜像
echo "🔨 步骤 1/3: 构建镜像..."
docker build -t ${FULL_IMAGE} -t ${LATEST_IMAGE} .

if [ $? -ne 0 ]; then
    echo "❌ 镜像构建失败！"
    exit 1
fi

echo "✅ 镜像构建成功！"
echo ""

# 登录镜像仓库
echo "🔐 步骤 2/3: 登录腾讯云镜像仓库..."
docker login ${REGISTRY}

if [ $? -ne 0 ]; then
    echo "❌ 登录失败！"
    exit 1
fi

echo "✅ 登录成功！"
echo ""

# 推送镜像
echo "📤 步骤 3/3: 推送镜像..."
docker push ${FULL_IMAGE}
docker push ${LATEST_IMAGE}

if [ $? -ne 0 ]; then
    echo "❌ 镜像推送失败！"
    exit 1
fi

echo ""
echo "================================================"
echo "✅ 部署完成！"
echo "================================================"
echo ""
echo "镜像已推送到："
echo "  - ${FULL_IMAGE}"
echo "  - ${LATEST_IMAGE}"
echo ""
echo "下一步："
echo "  1. 登录服务器"
echo "  2. 执行: docker pull ${LATEST_IMAGE}"
echo "  3. 执行: docker-compose -f docker-compose.prod.yml up -d"
echo ""