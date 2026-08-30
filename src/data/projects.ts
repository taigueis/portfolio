export type Metric = {
  label: string;
  value: string;
};

export type ProjectStatus = "Em Produção" | "Em Desenvolvimento" | "Open Source";

export type FeaturedProject = {
  title: string;
  client: string;
  description: string;
  status: ProjectStatus;
  url: string;
  repoUrl?: string;
  stack: string[];
  metrics: Metric[];
  highlights: string[];
};

export const featuredProject: FeaturedProject = {
  title: "União das Francesinhas",
  client: "Website & Plataforma Administrativa",
  description:
    "Plataforma pública e painel de administração para um espaço de restauração, com gestão dinâmica de ementa, motor autónomo de reabertura após encerramento temporário e uma superfície de autenticação endurecida ao nível de produção.",
  status: "Em Produção",
  url: "https://uniao-francesinhas.vercel.app/",
  stack: ["Next.js", "TypeScript", "Prisma ORM", "PostgreSQL", "Tailwind CSS", "Vercel"],
  metrics: [
    { label: "Níveis de ementa", value: "3" },
    { label: "Fuso horário", value: "WEST-safe" },
    { label: "Autenticação", value: "JWT + 2FA" },
  ],
  highlights: [
    "Gestão dinâmica de ementa em árvore a 3 níveis com integridade relacional via Prisma.",
    "Motor timezone-aware com compensação automática do fuso horário de Lisboa (WEST/UTC+1) e cálculo dinâmico de reabertura após encerramento temporário.",
    "Painel administrativo seguro com autenticação baseada em JWT HttpOnly, 2FA/OTP, rate limiting e cabeçalhos de proteção HSTS.",
  ],
};

export type Project = {
  title: string;
  description: string;
  stack: string[];
  status: ProjectStatus;
  repoUrl?: string;
  liveUrl?: string;
  category: "Fullstack" | "Mobile" | "Algoritmos & Bases de Dados";
  size?: "sm" | "md" | "lg";
};

export const projects: Project[] = [
  {
    title: "Clínica Dentária Santa Catarina",
    description:
      "Plataforma web institucional desenvolvida para serviços de medicina dentária, com interface moderna, secção interativa de marcação de consultas e foco na conversão e experiência de utilizador.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    status: "Em Produção",
    liveUrl: "https://clinica-dentaria-santa-catarina.vercel.app",
    category: "Fullstack",
    size: "md",
  },
  {
    title: "Pede Já",
    description:
      "Plataforma de encomendas online para o setor da restauração, integrando personalização de menus, carrinho interativo e gestão de fluxos de pedidos em tempo real.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
    status: "Em Desenvolvimento",
    category: "Fullstack",
    size: "md",
  },
  {
    title: "EasyTicket",
    description:
      "Sistema de gestão de eventos e bilheteira digital com controlo de acessos, emissão de ingressos e integridade em base de dados relacional.",
    stack: ["PHP", "MySQL", "JavaScript", "HTML/CSS"],
    status: "Open Source",
    repoUrl: "https://github.com/taigueis/easyticket.com",
    category: "Fullstack",
    size: "sm",
  },
];
