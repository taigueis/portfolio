"use client";

import { ArrowUpRight, Clock } from "lucide-react";
import { projects, type Project, type ProjectTier } from "@/data/projects";
import { Reveal } from "@/components/ui/reveal";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { StatusBadge } from "@/components/ui/status-badge";
import { ContextBadge } from "@/components/ui/context-badge";
import { GithubIcon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

const groups: {
  tier: ProjectTier;
  label: string;
  columns: string;
}[] = [
  { tier: "flagship", label: "Projetos principais", columns: "lg:grid-cols-3" },
  { tier: "client", label: "Sites para clientes", columns: "lg:grid-cols-3" },
  { tier: "personal", label: "Ferramentas pessoais", columns: "lg:grid-cols-1" },
];

function ProjectCard({ project, large }: { project: Project; large: boolean }) {
  const href = project.liveUrl ?? project.repoUrl;
  const Wrapper = href ? "a" : "div";
  const wrapperProps = href ? { href, target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <SpotlightCard className="h-full">
      <Wrapper {...wrapperProps} className={cn("flex h-full flex-col gap-4", large ? "p-7" : "p-6")}>
        <div className="flex items-start justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <ContextBadge>{project.context}</ContextBadge>
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
          <span className="font-mono text-[10px] uppercase tracking-widest text-foreground-subtle">
            {project.category}
          </span>
          <h3 className={cn("font-medium text-foreground", large ? "text-xl" : "text-lg")}>
            {project.title}
          </h3>
          <p className="text-sm leading-relaxed text-foreground-muted">{project.description}</p>
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
  );
}

export function ProjectsGrid() {
  return (
    <section id="projetos" className="mx-auto max-w-6xl px-6 py-28">
      <Reveal>
        <SectionHeading
          eyebrow="projetos"
          title="Mais projetos"
          description="Do trabalho em equipa e parcerias empresariais aos sites para clientes e ferramentas pessoais."
        />
      </Reveal>

      <div className="mt-10 flex flex-col gap-12">
        {groups.map(({ tier, label, columns }) => {
          const items = projects.filter((project) => project.tier === tier);
          if (items.length === 0) return null;

          return (
            <div key={tier}>
              <Reveal>
                <h3 className="font-mono text-xs uppercase tracking-widest text-foreground-subtle">
                  {`// ${label}`}
                </h3>
              </Reveal>
              <div className={cn("mt-4 grid grid-cols-1 gap-4", columns)}>
                {items.map((project, i) => (
                  <Reveal key={project.title} delay={Math.min(i * 0.06, 0.3)}>
                    <ProjectCard project={project} large={tier === "flagship"} />
                  </Reveal>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
