import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Database, ShieldCheck, Timer } from "lucide-react";
import { featuredProject } from "@/data/projects";
import { profile } from "@/data/profile";
import { siteUrl } from "@/lib/site";
import { SectionHeading } from "@/components/ui/section-heading";
import { StatusBadge } from "@/components/ui/status-badge";
import { Footer } from "@/components/sections/footer";

const title = "União das Francesinhas — Case Study Técnico | Tiago Costa";
const description =
  "Case study técnico da plataforma União das Francesinhas: gestão de ementa em árvore a 3 níveis, motor timezone-aware para reabertura após férias (WEST) e hardening de segurança do painel administrativo.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: `${siteUrl}/projects/uniao-francesinhas`,
  },
  openGraph: {
    type: "article",
    locale: "pt_PT",
    url: `${siteUrl}/projects/uniao-francesinhas`,
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

const architecture = [
  {
    icon: Database,
    title: "Gestão de Ementa em Árvore a 3 Níveis",
    body: "A ementa é modelada como uma árvore de três níveis — Categorias, Subcategorias e Itens — com integridade relacional garantida ao nível do schema via Prisma ORM. Cada item mantém a sua própria lista de alergénicos com CRUD completo, e apagar ou reordenar um nó da árvore propaga corretamente para os seus descendentes sem deixar registos órfãos na base de dados.",
  },
  {
    icon: Timer,
    title: "Motor Timezone-Aware",
    body: "O cálculo de reabertura após períodos de férias corre num motor consciente de fuso horário, com compensação nativa do horário de verão de Lisboa (WEST). Em vez de datas fixas guardadas em UTC ingénuo, a lógica recalcula dinamicamente o próximo instante de abertura tendo em conta a transição de horário, evitando o erro clássico de um estabelecimento aparecer \"fechado\" ou \"aberto\" uma hora a mais ou a menos nas trocas de hora.",
  },
  {
    icon: ShieldCheck,
    title: "Hardening & Segurança",
    body: "O painel /admin corre atrás de autenticação JWT guardada em cookies HttpOnly, com 2FA/OTP obrigatório no login. Todos os endpoints sensíveis têm rate limiting e a verificação de credenciais foi escrita para ser constant-time, mitigando timing attacks. O cabeçalho HSTS está ativo em produção para forçar HTTPS em todos os pedidos subsequentes.",
  },
];

export default function UniaoFrancesinhasPage() {
  return (
    <>
      <main className="mx-auto max-w-4xl px-6 pt-16 pb-28">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm text-foreground-muted transition-colors duration-200 hover:bg-surface-hover hover:text-foreground"
          >
            <ArrowLeft size={14} />
            Voltar ao Início
          </Link>
          <StatusBadge status={featuredProject.status} />
        </div>

        <div className="mt-12 flex flex-col gap-5">
          <span className="font-mono text-xs tracking-wide text-accent">{"// case study"}</span>
          <h1 className="text-balance text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
            {featuredProject.title}
          </h1>
          <p className="max-w-2xl text-balance text-base leading-relaxed text-foreground-muted sm:text-lg">
            {featuredProject.description}
          </p>

          <div className="flex flex-wrap gap-1.5 pt-1">
            {featuredProject.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-border bg-white/[0.02] px-2.5 py-1 font-mono text-xs text-foreground-subtle"
              >
                {tech}
              </span>
            ))}
          </div>

          <a
            href={featuredProject.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex w-fit items-center gap-1.5 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-transform duration-200 hover:-translate-y-0.5"
          >
            Ver em produção
            <ArrowUpRight size={14} />
          </a>
        </div>

        <div className="mt-20 flex flex-col gap-6">
          <SectionHeading
            eyebrow="contexto"
            title="O Desafio & Contexto"
            description="Um espaço de restauração precisava de deixar de depender de atualizações manuais de ementa e de cálculos ad-hoc para saber quando reabria depois de um período de férias."
          />
          <div className="rounded-(--radius-lg) glass p-7 text-sm leading-relaxed text-foreground-muted sm:p-8 sm:text-base">
            <p>
              Antes desta plataforma, a ementa vivia em documentos estáticos e a reabertura após
              férias era comunicada manualmente, com margem real para erro humano — datas erradas,
              esquecimento de atualizar o horário de verão, ou alergénicos desatualizados numa
              ementa impressa. O objetivo do projeto foi eliminar essa fragilidade operacional:
              dar à equipa um painel onde a ementa se edita como uma árvore estruturada, e deixar
              o sistema calcular sozinho quando o espaço reabre, mesmo atravessando a mudança de
              hora de verão/inverno.
            </p>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-6">
          <SectionHeading
            eyebrow="engenharia"
            title="Arquitetura & Engenharia"
            description="As três decisões de engenharia que definem este sistema."
          />
          <div className="flex flex-col gap-4">
            {architecture.map(({ icon: Icon, title: itemTitle, body }) => (
              <div key={itemTitle} className="rounded-(--radius-lg) glass p-7 sm:p-8">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
                    <Icon size={16} />
                  </span>
                  <h3 className="text-lg font-medium text-foreground">{itemTitle}</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-foreground-muted sm:text-base">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-6">
          <SectionHeading
            eyebrow="stack"
            title="Stack Tecnológica & Deploy"
            description="Next.js App Router no frontend e nas rotas de servidor, Tailwind CSS para a interface, PostgreSQL como base de dados relacional e deploy contínuo na Vercel."
          />
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {featuredProject.stack.map((tech) => (
              <div
                key={tech}
                className="flex items-center justify-center rounded-(--radius-md) border border-border bg-white/[0.02] px-4 py-3 text-center text-sm text-foreground-muted"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center gap-4 rounded-(--radius-lg) glass px-8 py-12 text-center">
          <p className="max-w-md text-balance text-sm leading-relaxed text-foreground-muted sm:text-base">
            Queres falar sobre um projeto com este nível de detalhe técnico?
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-transform duration-200 hover:-translate-y-0.5"
          >
            Entrar em Contacto
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
