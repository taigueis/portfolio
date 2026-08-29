"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
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
          <div className="grid gap-0 overflow-hidden rounded-[calc(var(--radius-lg)-6px)] lg:grid-cols-5">
            {/* Browser mockup */}
            <div className="border-b border-border bg-background-elevated lg:col-span-3 lg:border-b-0 lg:border-r">
              <div className="flex items-center gap-2 border-b border-border px-4 py-3">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                </div>
                <div className="ml-2 flex-1 truncate rounded-md bg-white/[0.04] px-3 py-1 font-mono text-[11px] text-foreground-subtle">
                  {featuredProject.url.replace("https://", "")}
                </div>
              </div>
              <div className="relative flex aspect-[16/11] items-center justify-center bg-[radial-gradient(circle_at_50%_20%,rgba(124,108,255,0.14),transparent_60%)] p-8">
                <div className="flex flex-col items-center gap-3 text-center">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-accent">
                    {featuredProject.client}
                  </span>
                  <span className="text-2xl font-medium text-foreground">
                    {featuredProject.title}
                  </span>
                  <div className="mt-2 grid grid-cols-3 gap-6">
                    {featuredProject.metrics.map((metric) => (
                      <div key={metric.label} className="flex flex-col items-center gap-1">
                        <span className="font-mono text-lg font-medium text-foreground">
                          {metric.value}
                        </span>
                        <span className="max-w-[6.5rem] text-[10px] leading-tight text-foreground-subtle">
                          {metric.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
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
