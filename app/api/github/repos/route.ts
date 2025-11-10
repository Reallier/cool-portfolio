import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch('https://api.github.com/users/Reallier/repos?sort=updated&per_page=100', {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'cool-portfolio'
      },
      next: { revalidate: 3600 } // 缓存1小时
    });

    if (!response.ok) {
      throw new Error('Failed to fetch GitHub repos');
    }

    const repos = await response.json();

    // 过滤掉fork的仓库，只显示原创项目
    const filteredRepos = repos.filter((repo: any) => !repo.fork);

    // 转换数据格式
    const projects = filteredRepos.map((repo: any) => ({
      slug: repo.name,
      title: repo.name.replace(/-/g, ' ').replace(/\b\w/g, (l: string) => l.toUpperCase()),
      summary: repo.description || '暂无描述',
      role: ['开源项目'],
      challenges: [],
      metrics: [
        { label: 'Stars', value: repo.stargazers_count.toString() },
        { label: 'Forks', value: repo.forks_count.toString() },
        { label: 'Language', value: repo.language || 'N/A' }
      ],
      cover: null,
      githubUrl: repo.html_url,
      updatedAt: repo.updated_at,
      topics: repo.topics || []
    }));

    return NextResponse.json(projects);
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    return NextResponse.json({ error: 'Failed to fetch repositories' }, { status: 500 });
  }
}