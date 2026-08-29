export type SkillCategory = {
  title: string;
  eyebrow: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    eyebrow: "frontend",
    title: "Frontend & Web",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Angular", "Ionic"],
  },
  {
    eyebrow: "backend",
    title: "Backend & Dados",
    skills: ["Node.js", "Prisma ORM", "PostgreSQL", "MongoDB", "T-SQL"],
  },
  {
    eyebrow: "languages",
    title: "Linguagens",
    skills: ["TypeScript", "JavaScript", "C", "Java", "SQL"],
  },
  {
    eyebrow: "tooling",
    title: "Ferramentas & DevOps",
    skills: ["Git", "GitHub", "Vercel", "Docker", "Linux", "OBS Studio", "VEGAS Pro"],
  },
];
