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
    "Plataforma pública e painel de administração para um espaço de restauração, com gestão dinâmica de ementa, motor autónomo de calendário de reabertura e uma superfície de autenticação endurecida ao nível de produção.",
  status: "Em Produção",
  url: "https://www.uniaofrancesinhas.pt",
  stack: ["Next.js", "TypeScript", "Prisma ORM", "PostgreSQL", "Tailwind CSS", "Vercel"],
  metrics: [
    { label: "Níveis de ementa", value: "3" },
    { label: "Fuso horário", value: "WEST-safe" },
    { label: "Autenticação", value: "JWT + 2FA" },
  ],
  highlights: [
    "Painel administrativo seguro com autenticação JWT, 2FA/OTP e mitigação de timing attacks.",
    "Gestão dinâmica de ementa em árvore a 3 níveis com integridade relacional.",
    "Motor timezone-aware de cálculo de reabertura após férias com suporte a WEST (Lisboa).",
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
      "Plataforma web institucional para serviços de medicina dentária, com interface moderna, apresentação clínica detalhada, secção de agendamento/contactos e foco em conversão e UX responsiva.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    status: "Em Produção",
    liveUrl: "https://clinica-dentaria-santa-catarina.vercel.app",
    category: "Fullstack",
    size: "md",
  },
  {
    title: "Pede Já",
    description:
      "Plataforma de pedidos online para restauração fast-food com personalização dinâmica de menus, carrinho de compras interativo e gestão de pedidos em tempo real.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
    status: "Em Desenvolvimento",
    category: "Fullstack",
    size: "md",
  },
  {
    title: "EasyTicket",
    description:
      "Sistema de bilheteira digital e gestão de eventos com controlo de acessos, validação de ingressos e gestão de base de dados relacional.",
    stack: ["PHP", "MySQL", "JavaScript", "HTML/CSS"],
    status: "Open Source",
    repoUrl: "https://github.com/taigueis/easyticket.com",
    category: "Fullstack",
    size: "sm",
  },
];
