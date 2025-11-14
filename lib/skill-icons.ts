import {
  Code, // For Python, Golang, Django, Flask, FastAPI, Asyncio
  Coffee, // For Java
  Server, // For Node.js, Nginx
  Database, // For MySQL, PostgreSQL, MongoDB, Redis
  MessageSquare, // For RabbitMQ, Kafka
  Container, // For Docker, Kubernetes
  Workflow, // For Jenkins, GitLab CI
  Cloud, // For Terraform
  LayoutPanelTop, // For React, Vue.js
  Type, // For TypeScript
  Box, // For Three.js (using Box as a generic 3D icon)
  BarChart, // For Echarts
  MessageCircle, // For WebSocket
  Bug, // For Pytest, Selenium, OWASP ZAP
  FileText, // For Allure
  ClipboardList, // For Jira
  Send, // For Postman
  Terminal, // For Linux
  Settings, // For Ansible
  Activity, // For Prometheus, Grafana
  Package, // For Packer, Flatpak
  LucideIcon
} from "lucide-react";

export const skillIconMap: { [key: string]: LucideIcon } = {
  Python: Code,
  Django: Code,
  Flask: Code,
  FastAPI: Code,
  Asyncio: Code,
  Golang: Code,
  Java: Coffee,
  "Node.js": Server,
  MySQL: Database,
  PostgreSQL: Database,
  MongoDB: Database,
  Redis: Database,
  RabbitMQ: MessageSquare,
  Kafka: MessageSquare,
  Docker: Container,
  Kubernetes: Container,
  Jenkins: Workflow,
  "GitLab CI": Workflow,
  Nginx: Server,
  Terraform: Cloud,
  React: LayoutPanelTop,
  "Vue.js": LayoutPanelTop,
  TypeScript: Type,
  "Three.js": Box,
  Echarts: BarChart,
  WebSocket: MessageCircle,
  Pytest: Bug,
  Selenium: Bug,
  "OWASP ZAP": Bug,
  Allure: FileText,
  Jira: ClipboardList,
  Postman: Send,
  Linux: Terminal,
  Ansible: Settings,
  Prometheus: Activity,
  Grafana: Activity,
  Packer: Package,
  Flatpak: Package,
};