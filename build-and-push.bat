@echo off
chcp 65001 >nul
setlocal enabledelayedexpansion

REM 你的腾讯云镜像仓库配置
set REGISTRY=ccr.ccs.tencentyun.com
set NAMESPACE=reallier
set IMAGE_NAME=portfolio
set VERSION=1.0.0

REM 构建完整镜像名称
set FULL_IMAGE=%REGISTRY%/%NAMESPACE%/%IMAGE_NAME%:%VERSION%
set LATEST_IMAGE=%REGISTRY%/%NAMESPACE%/%IMAGE_NAME%:latest

echo ================================================
echo 🔨 Docker 镜像构建和推送脚本
echo ================================================
echo.
echo 镜像信息：
echo   - 版本镜像: %FULL_IMAGE%
echo   - 最新镜像: %LATEST_IMAGE%
echo.

REM 构建镜像
echo 🔨 步骤 1/3: 构建镜像...
docker build -t %FULL_IMAGE% -t %LATEST_IMAGE% .

if %errorlevel% neq 0 (
    echo ❌ 镜像构建失败！
    pause
    exit /b 1
)

echo ✅ 镜像构建成功！
echo.

REM 登录镜像仓库
echo 🔐 步骤 2/3: 登录腾讯云镜像仓库...
docker login %REGISTRY%

if %errorlevel% neq 0 (
    echo ❌ 登录失败！
    pause
    exit /b 1
)

echo ✅ 登录成功！
echo.

REM 推送镜像
echo 📤 步骤 3/3: 推送镜像...
docker push %FULL_IMAGE%
docker push %LATEST_IMAGE%

if %errorlevel% neq 0 (
    echo ❌ 镜像推送失败！
    pause
    exit /b 1
)

echo.
echo ================================================
echo ✅ 部署完成！
echo ================================================
echo.
echo 镜像已推送到：
echo   - %FULL_IMAGE%
echo   - %LATEST_IMAGE%
echo.
echo 下一步：
echo   1. 登录服务器
echo   2. 执行: docker pull %LATEST_IMAGE%
echo   3. 执行: docker-compose -f docker-compose.prod.yml up -d
echo.
pause