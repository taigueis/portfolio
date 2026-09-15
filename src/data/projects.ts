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
  url: "https://www.uniaofrancesinhas.pt/",
  // repoUrl fica de fora: código de cliente, repositório GitHub privado —
  // sem botão "Código" (ver o `featuredProject.repoUrl &&` em featured-project.tsx).
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
      "Site institucional multi-página para uma clínica de medicina dentária: páginas dedicadas por especialidade, blog clínico, galeria de casos reais com comparação antes/depois, formulário de marcação de consulta e contacto direto via WhatsApp. SEO técnico completo (sitemap, robots, Open Graph dinâmico) para maximizar a descoberta orgânica.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    status: "Em Produção",
    liveUrl: "https://clinica-dentaria-santa-catarina.vercel.app",
    category: "Fullstack",
    size: "md",
  },
  {
    title: "Pede Já",
    description:
      "Plataforma de food delivery com quatro interfaces dedicadas por papel — Cliente, Restaurante, Admin e DevOps. Inclui fila operacional em tempo real com alertas de SLA, despacho de estafetas in-house sem dependência de serviços externos, dashboard enterprise com KPIs e aprovação de novos parceiros, e onboarding de restaurantes sujeito a validação. Projeto de equipa em desenvolvimento ativo.",
    stack: ["React", "Vite", "Supabase", "Tailwind CSS"],
    status: "Em Desenvolvimento",
    repoUrl: "https://github.com/franciscox05/PedeJa-Project",
    category: "Fullstack",
    size: "md",
  },
  {
    title: "Restaurante Chelsea",
    description:
      "Site institucional para um restaurante de peixe e marisco em Póvoa de Varzim, com secções de ementa estruturada, mapa de localização integrado e ligação direta para reserva de mesa. Foco em performance e SEO local para captação de clientes da zona.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    status: "Em Produção",
    liveUrl: "https://restaurante-chelsea.vercel.app",
    category: "Fullstack",
    size: "sm",
  },
  {
    title: "Sabores",
    description:
      "Site institucional para um restaurante tradicional português em Vila do Conde, com ementa detalhada por secções, galeria de imagens e fluxo de reserva de mesa. Estruturado para conversão de visitantes em clientes através de contactos diretos e prova social (avaliações).",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    status: "Em Produção",
    liveUrl: "https://sabores-snackbar.vercel.app",
    category: "Fullstack",
    size: "sm",
  },
  {
    title: "NutriCut PT",
    description:
      "Ferramenta pessoal de comparação nutricional de alimentos vendidos em Portugal, orientada a eficiência de proteína, fase de cut e hipertrofia, com análise de custo-benefício por produto.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    status: "Em Produção",
    liveUrl: "https://fat-secret.vercel.app",
    category: "Fullstack",
    size: "sm",
  },
  {
    title: "EasyTicket",
    description:
      "Sistema de bilhética para transporte público rodoviário: compra e validação de bilhetes, carregamento de saldo, gestão de múltiplas linhas de autocarro (rotas e horários) e um painel administrativo para gerir frota, trajetos e contas de utilizador.",
    stack: ["PHP", "MySQL", "JavaScript", "HTML/CSS"],
    status: "Open Source",
    repoUrl: "https://github.com/taigueis/easyticket.com",
    category: "Fullstack",
    size: "sm",
  },
  {
    title: "Plataforma de Gestão de Horários",
    description:
      "Aplicação académica para gestão de escalas de turnos numa loja de retalho, com três módulos integrados num único projeto Maven: API REST (Spring Boot), cliente desktop (JavaFX) e interface web. Suporta geração automática de propostas mensais de horário, pedidos de folga e permutas entre colaboradores, aprovação de preferências pela gerência e relatórios mensais de horas. Desenvolvida em equipa no âmbito de unidades curriculares universitárias (Projeto II).",
    stack: ["Java", "Spring Boot", "Spring Data JPA", "PostgreSQL", "JavaFX", "Maven"],
    status: "Open Source",
    repoUrl: "https://github.com/franciscox05/PlataformaGestaoHorarios",
    category: "Algoritmos & Bases de Dados",
    size: "sm",
  },
];
