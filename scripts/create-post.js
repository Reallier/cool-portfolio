#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askQuestion(question) {
  return new Promise((resolve) => {
    rl.question(question, resolve);
  });
}

async function createPost() {
  try {
    console.log('🎉 创建新博客文章\n');

    const title = await askQuestion('文章标题: ');
    const description = await askQuestion('文章描述: ');
    const tagsInput = await askQuestion('标签（用逗号分隔）: ');
    const date = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format

    // Convert title to slug
    const slug = title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '') // Remove special characters
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/-+/g, '-') // Replace multiple hyphens with single
      .trim();

    // Parse tags
    const tags = tagsInput
      .split(',')
      .map(tag => tag.trim())
      .filter(tag => tag.length > 0);

    // Create frontmatter
    const frontmatter = `---
title: "${title}"
date: "${date}"
description: "${description}"
tags: [${tags.map(tag => `"${tag}"`).join(', ')}]
---`;

    // Read template content
    const templatePath = path.join(__dirname, '..', 'content', 'blog', 'template.md');
    const templateContent = fs.readFileSync(templatePath, 'utf8');

    // Replace template content
    const content = templateContent.replace(/^---[\s\S]*?---/m, frontmatter);

    // Write new post file
    const postPath = path.join(__dirname, '..', 'content', 'blog', `${slug}.md`);
    fs.writeFileSync(postPath, content);

    console.log(`\n✅ 文章创建成功！`);
    console.log(`📁 文件位置: content/blog/${slug}.md`);
    console.log(`🔗 预览地址: /blog/${slug}`);
    console.log(`\n请编辑文件内容，然后提交到Git仓库。`);

  } catch (error) {
    console.error('❌ 创建文章失败:', error.message);
  } finally {
    rl.close();
  }
}

createPost();