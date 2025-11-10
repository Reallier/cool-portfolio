import Link from "next/link";
import Section from "@/components/Section";
import { PROJECTS, getGitHubProjects } from "@/lib/projects";

export default async function ProjectsPage() {
  const [staticProjects, githubProjects] = await Promise.all([
    Promise.resolve(PROJECTS),
    getGitHubProjects()
  ]);

  // 合并项目并按更新时间排序
  const allProjects = [...staticProjects, ...githubProjects].sort((a, b) => {
    if (a.updatedAt && b.updatedAt) {
      return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
    }
    if (a.updatedAt) return -1;
    if (b.updatedAt) return 1;
    return 0;
  });

  return (
    <main>
      <Section title="所有项目作品" fullWidth>
        <div className="mb-8 flex flex-wrap gap-4 justify-center">
          <Link href="/" className="px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-full hover:border-gray-400 hover:bg-gray-50 transition-colors">
            返回首页
          </Link>
          <button className="px-4 py-2 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition-colors">
            全部项目 ({allProjects.length})
          </button>
        </div>

        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
            {allProjects.map((p) => (
              <Link key={p.slug} href={p.githubUrl || `/projects/${p.slug}`} className="group block" target={p.githubUrl ? "_blank" : "_self"} rel={p.githubUrl ? "noopener noreferrer" : ""}>
                <div className="space-y-6">
                  <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden group-hover:bg-gray-50 transition-colors duration-300">
                    <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                      {p.githubUrl ? (
                        <div className="text-center">
                          <svg className="w-8 h-8 mx-auto mb-2 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                          <span className="text-gray-500 text-sm font-medium">GitHub</span>
                        </div>
                      ) : (
                        <span className="text-gray-500 text-sm font-medium">项目预览</span>
                      )}
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-semibold text-black group-hover:text-gray-600 transition-colors">{p.title}</h3>
                    <p className="text-gray-600 text-base leading-relaxed">{p.summary}</p>
                    <div className="flex flex-wrap gap-2">
                      {p.topics && p.topics.length > 0 ? (
                        p.topics.slice(0, 3).map((topic: string) => (
                          <span key={topic} className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full group-hover:bg-blue-200 transition-colors">
                            {topic}
                          </span>
                        ))
                      ) : (
                        p.role.map((r: string) => (
                          <span key={r} className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full group-hover:bg-green-200 transition-colors">
                            {r}
                          </span>
                        ))
                      )}
                    </div>
                    {p.githubUrl && (
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                          <span>查看源码</span>
                        </div>
                        {p.metrics.map(m => (
                          <div key={m.label} className="flex items-center gap-1">
                            <span className="font-medium text-gray-700">{m.value}</span>
                            <span className="text-gray-500">{m.label}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Section>
    </main>
  );
}