"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Lock } from "lucide-react";
import { featuredProject } from "@/data/projects";
import { Reveal } from "@/components/ui/reveal";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { StatusBadge } from "@/components/ui/status-badge";
import { GithubIcon } from "@/components/ui/icons";

export function FeaturedProject() {
  return (
    <section id="featured" className="mx-auto max-w-6xl px-6 py-28">
      <Reveal>
        <SectionHeading
          eyebrow="case study"
          title="Projeto em destaque"
          description="Um sistema completo, do banco de dados à interface pública, construído e mantido de raiz."
        />
      </Reveal>

      <Reveal delay={0.1} className="mt-10">
        <SpotlightCard spotlightColor="rgba(124,108,255,0.16)" className="p-1.5">
          <div className="grid gap-6 lg:grid-cols-5">
            {/* Browser mockup */}
            <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-zinc-950/60 shadow-2xl backdrop-blur-sm lg:col-span-3">
              <div className="flex h-10 items-center gap-3 border-b border-white/5 bg-zinc-900/80 px-4">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
                </div>
                <div className="mx-auto flex max-w-[260px] items-center gap-1.5 truncate rounded-md border border-white/5 bg-zinc-950/50 px-3 py-0.5 font-mono text-[11px] text-zinc-400">
                  <Lock size={10} className="shrink-0" />
                  {featuredProject.url.replace("https://", "")}
                </div>
              </div>
              <div className="relative overflow-hidden">
                <Image
                  src="/projects/uniao-preview.png"
                  alt={`Captura de ecrã do website em produção de ${featuredProject.title}`}
                  width={1897}
                  height={807}
                  quality={95}
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="block aspect-[16/10] w-full h-auto object-cover object-top transition-all duration-700 ease-out group-hover:scale-[1.03] group-hover:brightness-105"
                  priority
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-transparent" />
              </div>
            </div>

            {/* Details */}
            <div className="flex flex-col gap-5 p-7 lg:col-span-2 lg:p-8">
              <div>
                <div className="flex items-center gap-2.5">
                  <h3 className="text-xl font-medium text-foreground">{featuredProject.title}</h3>
                  <StatusBadge status={featuredProject.status} />
                </div>
                <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                  {featuredProject.description}
                </p>
              </div>

              <ul className="flex flex-col gap-2.5">
                {featuredProject.highlights.map((point) => (
                  <li key={point} className="flex gap-2.5 text-sm leading-relaxed text-foreground-muted">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5">
                {featuredProject.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-border bg-white/[0.02] px-2 py-1 font-mono text-[11px] text-foreground-subtle"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex flex-wrap gap-3 pt-2">
                <a
                  href={featuredProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-transform duration-200 hover:-translate-y-0.5"
                >
                  Ver em produção
                  <ArrowUpRight size={14} />
                </a>
                <Link
                  href="/projects/uniao-francesinhas"
                  className="inline-flex items-center gap-1.5 rounded-full glass px-4 py-2 text-sm text-foreground transition-colors duration-200 hover:bg-surface-hover"
                >
                  Ler Case Study Completo
                  <ArrowUpRight size={14} />
                </Link>
                {featuredProject.repoUrl && (
                  <a
                    href={featuredProject.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full glass px-4 py-2 text-sm text-foreground transition-colors duration-200 hover:bg-surface-hover"
                  >
                    <GithubIcon className="h-3.5 w-3.5" />
                    Código
                  </a>
                )}
              </div>
            </div>
          </div>
        </SpotlightCard>
      </Reveal>
    </section>
  );
}
