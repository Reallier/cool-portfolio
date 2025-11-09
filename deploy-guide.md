# 项目部署指南

## 第一步：推送到GitHub

1. 在GitHub上创建新仓库
2. 在项目根目录执行以下命令：

```bash
# 初始化git仓库
git init
git add .
git commit -m "Initial commit: 作品集项目"

# 添加远程仓库（替换为您的仓库URL）
git remote add origin https://github.com/your-username/your-portfolio.git

# 推送代码
git push -u origin main
```

## 第二步：部署到Vercel

1. 访问 [vercel.com](https://vercel.com)
2. 使用GitHub账号登录
3. 点击 "New Project"
4. 选择刚才创建的仓库
5. 点击 "Import" 
6. Vercel会自动检测Next.js项目并配置
7. 点击 "Deploy"

## 第三步：访问网站

部署完成后，Vercel会提供一个免费的子域名，例如：
- `your-portfolio.vercel.app`

## 可选：配置自定义域名

1. 在Vercel项目设置中添加域名
2. 更新DNS记录指向Vercel
3. Vercel会自动配置SSL证书

## 部署完成！

您的作品集现在已经在云端运行了！🌟