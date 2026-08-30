export type SkillCategory = {
  title: string;
  eyebrow: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    eyebrow: "frontend",
    title: "Frontend & Interfaces",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Angular", "Ionic"],
  },
  {
    eyebrow: "backend",
    title: "Backend & Bases de Dados",
    skills: ["Node.js", "Prisma ORM", "PostgreSQL", "MongoDB", "T-SQL"],
  },
  {
    eyebrow: "languages",
    title: "Linguagens de Programação",
    skills: ["TypeScript", "JavaScript", "C", "Java", "SQL"],
  },
  {
    eyebrow: "tooling",
    title: "Ferramentas & Infraestrutura",
    skills: ["Git", "GitHub", "Vercel", "Docker", "Linux", "OBS Studio", "VEGAS Pro"],
  },
];
