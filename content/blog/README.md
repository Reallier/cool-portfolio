# 博客文章管理指南

这个目录存放博客文章，使用Markdown格式编写。每篇文章都是一个独立的`.md`文件。

## 文件命名规则

文件名应该使用英文或数字，使用连字符`-`分隔单词，对应文章的URL slug。

例如：
- `python-asyncio-best-practices.md` → URL: `/blog/python-asyncio-best-practices`
- `kubernetes-game-server-scheduling.md` → URL: `/blog/kubernetes-game-server-scheduling`

## 文章格式

每篇文章必须包含frontmatter（文件头）和Markdown内容。

### Frontmatter格式

```yaml
---
title: "文章标题"
date: "2024-11-08"
description: "文章简短描述，会显示在文章列表和预览中"
tags: ["标签1", "标签2", "标签3"]
---
```

**字段说明：**
- `title`: 文章标题（必需）
- `date`: 发布日期，格式为YYYY-MM-DD（必需）
- `description`: 文章描述（必需）
- `tags`: 标签数组（可选）

### 文章内容

Frontmatter下面直接写Markdown内容，支持：
- 标准Markdown语法
- GitHub风格的Markdown扩展
- 代码块语法高亮

## 添加新文章步骤

1. 在`content/blog/`目录下创建新的`.md`文件
2. 按照上面的格式编写frontmatter
3. 编写Markdown文章内容
4. 保存文件后，网站会自动更新

## 示例文章

参考现有的文章文件：
- `python-asyncio-best-practices.md`
- `kubernetes-game-server-scheduling.md`
- `tdd-engineering-practice.md`

## 注意事项

- 文件名将成为URL的一部分，请使用有意义的英文命名
- 日期格式必须是`YYYY-MM-DD`
- 描述文字建议控制在100字以内
- 标签使用中文或英文均可
- 文章会按日期倒序显示（最新的在前面）

## 快速创建脚本

你也可以使用以下命令快速创建新文章模板：

```bash
# Linux/Mac
cp template.md new-article-slug.md

# Windows
copy template.md new-article-slug.md
```

然后编辑新文件的内容即可。