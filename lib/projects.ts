export type Project = {
  slug: string; title: string; role: string[];
  summary: string; challenges: string[]; metrics: { label: string; value: string }[];
  cover?: string;
};
export const PROJECTS: Project[] = [
  {
    slug: "trading-automation",
    title: "交易模块自动化测试平台",
    role: ["后端开发", "架构设计", "DevOps"],
    summary: "为Garena游戏交易模块构建完整的自动化测试平台，实现前后端分离架构，集成CI/CD流水线，显著提升测试效率和系统稳定性。",
    challenges: ["高并发请求处理", "分布式事务管理", "跨服务数据一致性"],
    metrics: [{ label: "测试覆盖率", value: "95%" }, { label: "执行时间", value: "↓ 60%" }, { label: "Bug发现率", value: "↑ 80%" }],
    cover: "/images/trading.png"
  },
  {
    slug: "league-data-generator",
    title: "联赛数据源下发模块",
    role: ["后端开发", "数据处理", "性能优化"],
    summary: "设计多进程并行数据生成系统，为游戏联赛提供动态、可配置的测试数据源，支持随机事件生成和数据驱动测试。",
    challenges: ["大数据量处理", "内存优化", "并发控制"],
    metrics: [{ label: "数据生成速度", value: "10k/min" }, { label: "内存使用", value: "↓ 40%" }, { label: "测试用例复用", value: "↑ 300%" }],
    cover: "/images/league.png"
  },
  {
    slug: "ie-proposal-system",
    title: "IE提案系统",
    role: ["全栈开发", "系统设计", "业务分析"],
    summary: "基于Django构建的工业工程提案管理系统，实现提案流程自动化、审批跟踪和效果评估，提升企业改进效率。",
    challenges: ["复杂业务流程建模", "多角色权限管理", "数据统计分析"],
    metrics: [{ label: "提案处理效率", value: "↑ 150%" }, { label: "用户满意度", value: "95%" }, { label: "系统可用性", value: "99.9%" }],
    cover: "/images/ie.png"
  },
  {
    slug: "real-time-dashboard",
    title: "实时生产线可视化平台",
    role: ["前端开发", "数据可视化", "实时通信"],
    summary: "使用GoView和Echarts构建的生产线监控平台，支持实时数据展示、多终端同步和异常预警，提升生产管理效率。",
    challenges: ["实时数据处理", "跨平台兼容性", "性能优化"],
    metrics: [{ label: "数据刷新延迟", value: "< 1s" }, { label: "并发用户数", value: "500+" }, { label: "异常检测准确率", value: "98%" }],
    cover: "/images/dashboard.png"
  },
  {
    slug: "game-server-operator",
    title: "Kubernetes游戏服务器调度器",
    role: ["云原生开发", "DevOps", "容器化"],
    summary: "开发Kubernetes Operator实现游戏服务器的自动化部署和管理，支持有状态工作负载调度和动态扩缩容。",
    challenges: ["有状态应用管理", "资源调度优化", "故障自动恢复"],
    metrics: [{ label: "部署时间", value: "↓ 70%" }, { label: "资源利用率", value: "↑ 40%" }, { label: "系统可用性", value: "99.95%" }],
    cover: "/images/k8s.png"
  }
];
export const getProject = (slug: string) => PROJECTS.find(p => p.slug === slug);
