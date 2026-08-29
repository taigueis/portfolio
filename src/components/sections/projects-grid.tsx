"use client";

import { ArrowUpRight, Clock } from "lucide-react";
import { projects } from "@/data/projects";
import { Reveal } from "@/components/ui/reveal";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { StatusBadge } from "@/components/ui/status-badge";
import { GithubIcon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

const sizeClasses: Record<NonNullable<(typeof projects)[number]["size"]>, string> = {
  sm: "lg:col-span-2",
  md: "lg:col-span-3",
  lg: "lg:col-span-4",
};

export function ProjectsGrid() {
  return (
    <section id="projetos" className="mx-auto max-w-6xl px-6 py-28">
      <Reveal>
        <SectionHeading
          eyebrow="repositórios"
          title="Outros projetos"
          description="Trabalhos comerciais, pessoais e open source."
        />
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-6">
        {projects.map((project, i) => {
          const href = project.liveUrl ?? project.repoUrl;
          const Wrapper = href ? "a" : "div";
          const wrapperProps = href
            ? { href, target: "_blank", rel: "noopener noreferrer" }
            : {};

          return (
            <Reveal
              key={project.title}
              delay={Math.min(i * 0.06, 0.3)}
              className={cn(sizeClasses[project.size ?? "sm"])}
            >
              <SpotlightCard className="h-full">
                <Wrapper {...wrapperProps} className="flex h-full flex-col gap-4 p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-foreground-subtle">
                        {project.category}
                      </span>
                      <StatusBadge status={project.status} />
                    </div>
                    {href && (
                      <ArrowUpRight
                        size={15}
                        className="shrink-0 text-foreground-subtle transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                      />
                    )}
                  </div>

                  <div className="flex flex-1 flex-col gap-2">
                    <h3 className="text-lg font-medium text-foreground">{project.title}</h3>
                    <p className="text-sm leading-relaxed text-foreground-muted">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-border bg-white/[0.02] px-2 py-0.5 font-mono text-[10px] text-foreground-subtle"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-1.5 pt-1 text-xs text-foreground-subtle">
                    {project.liveUrl ? (
                      <>
                        <ArrowUpRight size={12} />
                        Ver em produção
                      </>
                    ) : project.repoUrl ? (
                      <>
                        <GithubIcon className="h-3 w-3" />
                        Ver repositório
                      </>
                    ) : (
                      <>
                        <Clock size={12} />
                        Em breve
                      </>
                    )}
                  </div>
                </Wrapper>
              </SpotlightCard>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
