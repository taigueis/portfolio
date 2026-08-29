"use client";

import { skillCategories } from "@/data/skills";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function TechWall() {
  return (
    <section id="competencias" className="mx-auto max-w-6xl px-6 py-28">
      <Reveal>
        <SectionHeading
          eyebrow="stack"
          title="Competências"
          description="Ferramentas e tecnologias que uso no dia a dia, organizadas por camada."
        />
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {skillCategories.map((category, i) => (
          <Reveal
            key={category.title}
            delay={Math.min(i * 0.08, 0.24)}
            className="rounded-(--radius-lg) glass p-6"
          >
            <span className="font-mono text-[11px] tracking-wide text-accent">
              {`// ${category.eyebrow}`}
            </span>
            <h3 className="mt-1.5 text-base font-medium text-foreground">{category.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-border bg-white/[0.02] px-3 py-1.5 text-sm text-foreground-muted transition-colors duration-200 hover:border-border-hover hover:text-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
