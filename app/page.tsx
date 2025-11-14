import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import ProjCard from "@/components/ProjCard";
import Section from "@/components/Section";
import Navigation from "@/components/Navigation";
import ExperienceCard from "@/components/ExperienceCard";
import MagneticButton from "@/components/ui/MagneticButton";
import SkillMarquee from "@/components/ui/SkillMarquee";
import ProjectMarquee from "@/components/ui/ProjectMarquee";
import { PROJECTS, getGitHubProjects } from "@/lib/projects";
import { getLatestPosts } from "@/lib/blog";

const ThreeHero = dynamic(() => import("./ThreeHero"), { ssr: false });

const AvatarWithFloat = dynamic(() => import("./AvatarWithFloat"), { ssr: false });

// 所有技能列表
const ALL_SKILLS = [
  "Python", "Django", "Flask", "FastAPI", "Asyncio", "Golang", "Java", "Node.js",
  "MySQL", "PostgreSQL", "MongoDB", "Redis", "RabbitMQ", "Kafka",
  "Docker", "Kubernetes", "Jenkins", "GitLab CI", "Nginx", "Terraform",
  "React", "Vue.js", "TypeScript", "Three.js", "Echarts", "WebSocket",
  "Pytest", "Selenium", "OWASP ZAP", "Allure", "Jira", "Postman",
  "Linux", "Ansible", "Prometheus", "Grafana", "Packer", "Flatpak"
];

export default async function Page() {
  const [staticProjects, githubProjects, latestPosts] = await Promise.all([
    Promise.resolve(PROJECTS),
    getGitHubProjects(),
    Promise.resolve(getLatestPosts(3))
  ]);

  // 合并项目并按更新时间排序，GitHub项目优先显示最新的
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
      <Navigation />
      <section
        id="top"
        className="relative flex items-center min-h-[90vh] pt-24 pb-16 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-page-section via-page to-page pointer-events-none" />
        <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-gradient-to-br from-primary-blue/30 to-primary-cyan/20 blur-3xl opacity-70 pointer-events-none" />
        <div className="relative z-10 w-full px-8 md:px-12 lg:px-16">
          <div className="flex items-center justify-between gap-16 md:gap-24 lg:gap-32">
            <div className="flex-1 min-w-0 space-y-6 text-right">
              <p className="text-sm font-semibold tracking-[0.4em] text-text-soft uppercase">
                Hello, I'm
              </p>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-primary-blue to-primary-cyan bg-clip-text text-transparent">
                  Reallier Wei
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-text-muted leading-snug">
                Senior Testing Developer & Full-Stack Engineer
              </p>
              <p className="text-lg md:text-xl text-text-soft leading-snug">
                Python专家 · DevOps实践者 · 技术创新者
              </p>
              <div className="flex flex-wrap gap-3 justify-end pt-2">
                {["Python 全栈", "云原生 & Kubernetes", "自动化测试开发", "DevOps & CI/CD"].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 text-sm font-medium rounded-full bg-page-section text-text-muted border border-border-subtle/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex-shrink-0">
              <AvatarWithFloat />
            </div>

            <div className="flex-1 min-w-0 space-y-6 text-left">
              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-semibold text-text-main">
                  关于我
                </h2>
                <p className="text-base md:text-lg text-text-muted leading-snug">
                  拥有大型企业（联想）和海外公司（Garena新加坡）工作经验的资深测试开发工程师。
                </p>
                <p className="text-base md:text-lg text-text-muted leading-snug">
                  精通Python全栈开发、DevOps实践和自动化测试，擅长企业级项目架构设计、性能优化和高可用系统构建。
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg md:text-xl font-semibold text-text-main">
                  技术专长
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["测试自动化", "CI/CD", "云原生", "Python", "Kubernetes", "Docker"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-xs font-medium rounded-full bg-primary-blue/10 text-primary-blue border border-primary-blue/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section id="projects" title="项目作品" fullWidth>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-page to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-page to-transparent z-10 pointer-events-none" />
          <div className="space-y-8">
            <ProjectMarquee projects={allProjects.slice(0, 8)} speed={80} />
            <div className="flex justify-center">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-full border border-border-subtle bg-surface/80 text-text-muted hover:border-border-strong hover:bg-page-section/70 transition-colors"
              >
                查看更多项目
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Section id="skills" title="技能专长">
        <div className="space-y-8">
          <SkillMarquee skills={ALL_SKILLS} speed={30} />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-6">
              <h3 className="text-xl md:text-2xl font-semibold text-text-main">后端开发</h3>
              <div className="flex flex-wrap gap-3">
                {["Python", "Django", "Flask", "FastAPI", "Asyncio", "Golang", "Java", "Node.js"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full bg-page-section text-text-muted text-xs md:text-sm border border-border-subtle/70 hover:border-border-strong hover:bg-surface/80 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-xl md:text-2xl font-semibold text-text-main">数据库 & 存储</h3>
              <div className="flex flex-wrap gap-3">
                {["MySQL", "PostgreSQL", "MongoDB", "Redis", "RabbitMQ", "Kafka"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full bg-page-section text-text-muted text-xs md:text-sm border border-border-subtle/70 hover:border-border-strong hover:bg-surface/80 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-xl md:text-2xl font-semibold text-text-main">DevOps & 云原生</h3>
              <div className="flex flex-wrap gap-3">
                {["Docker", "Kubernetes", "Jenkins", "GitLab CI", "Nginx", "Terraform"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full bg-page-section text-text-muted text-xs md:text-sm border border-border-subtle/70 hover:border-border-strong hover:bg-surface/80 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-xl md:text-2xl font-semibold text-text-main">前端 & 可视化</h3>
              <div className="flex flex-wrap gap-3">
                {["React", "Vue.js", "TypeScript", "Three.js", "Echarts", "WebSocket"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full bg-page-section text-text-muted text-xs md:text-sm border border-border-subtle/70 hover:border-border-strong hover:bg-surface/80 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-xl md:text-2xl font-semibold text-text-main">测试 & 质量</h3>
              <div className="flex flex-wrap gap-3">
                {["Pytest", "Selenium", "OWASP ZAP", "Allure", "Jira", "Postman"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full bg-page-section text-text-muted text-xs md:text-sm border border-border-subtle/70 hover:border-border-strong hover:bg-surface/80 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-xl md:text-2xl font-semibold text-text-main">其他技术</h3>
              <div className="flex flex-wrap gap-3">
                {["Linux", "Ansible", "Prometheus", "Grafana", "Packer", "Flatpak"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full bg-page-section text-text-muted text-xs md:text-sm border border-border-subtle/70 hover:border-border-strong hover:bg-surface/80 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section id="experience" title="工作经历">
        <div className="space-y-12">
          {[
            {
              title: "Senior Testing Developer",
              period: "2023.6 - 至今",
              company: "Garena Technology Private Limited • 新加坡",
              description: [
                "担任交易模块测试开发小组长，主导关键模块设计与实现",
                "独立设计交易模块API批量自动化插件，使用Flask+Vue前后端分离",
                "设计联赛数据源下发模块，多进程并行生成随机比赛数据",
                "重构请求轮询链路，引入Asyncio、缓存和数据库优化",
                "配置OWASP ZAP进行安全测试，检测SQL注入、XSS等漏洞"
              ]
            },
            {
              title: "自动化技术支持",
              period: "2022.7 - 2023.6",
              company: "联想信息产品（深圳）有限公司 • 中国深圳",
              description: [
                "为各部门建立数据库，负责数据收集、清理和集成",
                "开发BI报告和自动化数据管道，使用Power BI和Python可视化",
                "校验EOM、MCT、QDS等智能制造系统，集成OPC UA协议",
                "开发多种自动化解决方案，包括UI自动化和微服务应用",
                "提供持续IT支持，解决数据库查询和系统维护问题"
              ]
            },
            {
              title: "技术合伙人",
              period: "2020.7 - 2022.7",
              company: "西安云桥联动网络科技有限公司 • 中国广东",
              description: [
                "深度开发Pterodactyl游戏服务面板，适配多种游戏服务器",
                "开发游戏配置文件动态分发技术，基于Cloudflare Workers",
                "搭建监控系统使用Prometheus+Grafana，部署Ansible自动化脚本",
                "开发Kubernetes Operator调度游戏服务器，编写Terraform配置",
                "研究Linux运行Windows程序技术，使用Flatpak进行沙箱化"
              ]
            }
          ].map((experience, index) => (
            <ExperienceCard key={index} experience={experience} index={index} />
          ))}
        </div>
      </Section>

      <Section id="achievements" title="个人成就">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-text-main">技术认证</h3>
            <ul className="space-y-3 text-text-muted">
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-primary-blue rounded-full"></div>
                <span>AWS Certified Solutions Architect</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-primary-blue rounded-full"></div>
                <span>CKA (Certified Kubernetes Administrator)</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-primary-blue rounded-full"></div>
                <span>Docker Certified Associate</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-primary-blue rounded-full"></div>
                <span>Python Professional Certification</span>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-text-main">开源贡献</h3>
            <ul className="space-y-3 text-text-muted">
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-primary-blue rounded-full"></div>
                <span>Kubernetes社区贡献者</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-primary-blue rounded-full"></div>
                <span>开源测试框架维护者</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-primary-blue rounded-full"></div>
                <span>技术博客作者</span>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-text-main">社区活动</h3>
            <ul className="space-y-3 text-text-muted">
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-primary-blue rounded-full"></div>
                <span>PyCon China演讲者</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-primary-blue rounded-full"></div>
                <span>KubeCon参会者</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-primary-blue rounded-full"></div>
                <span>技术社区导师</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <Section id="services" title="技术服务">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-4 p-8 rounded-2xl border border-border-subtle bg-surface/80 shadow-sm transition-all duration-300 hover:border-border-strong hover:shadow-lg hover:shadow-primary-blue/10">
            <h3 className="text-2xl font-semibold text-text-main">测试开发咨询</h3>
            <p className="text-text-muted leading-relaxed">
              提供自动化测试框架设计、性能测试策略、CI/CD流程优化等专业咨询服务。
            </p>
            <ul className="text-text-soft space-y-1 text-sm">
              <li>• 测试策略规划</li>
              <li>• 自动化框架搭建</li>
              <li>• 性能优化指导</li>
            </ul>
          </div>
          <div className="space-y-4 p-8 rounded-2xl border border-border-subtle bg-surface/80 shadow-sm transition-all duration-300 hover:border-border-strong hover:shadow-lg hover:shadow-primary-blue/10">
            <h3 className="text-2xl font-semibold text-text-main">DevOps实施</h3>
            <p className="text-text-muted leading-relaxed">
              容器化部署、Kubernetes集群管理、监控告警系统搭建等DevOps全栈服务。
            </p>
            <ul className="text-text-soft space-y-1 text-sm">
              <li>• 容器化迁移</li>
              <li>• K8s集群部署</li>
              <li>• 监控系统搭建</li>
            </ul>
          </div>
          <div className="space-y-4 p-8 rounded-2xl border border-border-subtle bg-surface/80 shadow-sm transition-all duration-300 hover:border-border-strong hover:shadow-lg hover:shadow-primary-blue/10">
            <h3 className="text-2xl font-semibold text-text-main">技术培训</h3>
            <p className="text-text-muted leading-relaxed">
              Python高级编程、测试开发最佳实践、DevOps工程实践等专业培训课程。
            </p>
            <ul className="text-text-soft space-y-1 text-sm">
              <li>• 企业内训</li>
              <li>• 技术workshop</li>
              <li>• 代码审查指导</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section id="blog" title="最新文章">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {latestPosts.map((post) => (
            <article
              key={post.slug}
              className="space-y-4 p-6 rounded-2xl border border-border-subtle bg-surface/80 shadow-sm transition-all duration-300 hover:border-border-strong hover:shadow-lg hover:shadow-primary-blue/10"
            >
              <div className="space-y-2">
                <Link href={`/blog/${post.slug}`} className="block">
                  <h3 className="text-xl font-semibold text-text-main hover:text-primary-blue transition-colors">
                    {post.title}
                  </h3>
                </Link>
                <p className="text-text-soft text-sm">{post.date}</p>
              </div>
              <p className="text-text-muted leading-relaxed">
                {post.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs md:text-sm rounded-full bg-page-section text-text-muted border border-border-subtle/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-full border border-border-subtle bg-surface/80 text-text-muted hover:border-border-strong hover:bg-page-section/70 transition-colors"
          >
            查看全部文章
          </Link>
        </div>
      </Section>

      <Section title="关于">
        <div className="max-w-4xl space-y-6">
          <p className="text-text-muted text-lg leading-relaxed">
            拥有大型企业（联想）和海外公司（Garena新加坡）工作经验的资深测试开发工程师。精通Python全栈开发、DevOps实践和自动化测试。
            擅长企业级项目架构设计、性能优化和高可用系统构建。具备丰富的CI/CD、容器化部署和云原生技术经验。
          </p>
          <p className="text-text-muted text-lg leading-relaxed">
            目前专注于游戏行业测试开发，主导交易模块自动化平台建设和数据驱动测试框架。期待在前端可视化、后端架构优化和DevOps领域继续深耕。
          </p>
          <div className="pt-8 border-t border-border-subtle">
            <div className="flex flex-col gap-3">
              <a
                className="text-text-muted hover:text-primary-blue transition-colors text-lg"
                href="mailto:icey123580@gmail.com"
              >
                icey123580@gmail.com
              </a>
              <a
                className="text-text-muted hover:text-primary-blue transition-colors text-lg"
                href="https://github.com/Reallier"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/Reallier
              </a>
              <a
                className="text-text-muted hover:text-primary-blue transition-colors text-lg"
                href="https://linkedin.com/in/reallier"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/reallier
              </a>
              <span className="text-text-soft text-lg">深圳，中国</span>
            </div>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="/resume.pdf"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-full bg-gradient-to-r from-primary-blue to-primary-cyan text-white shadow-lg shadow-primary-blue/30 hover:shadow-xl hover:shadow-primary-blue/40 transition-all duration-300"
              >
                下载简历
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-full border border-border-subtle bg-surface/80 text-text-muted hover:border-border-strong hover:bg-page-section/70 transition-colors"
              >
                联系我
              </a>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
