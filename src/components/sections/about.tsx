"use client";

import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const facts = [
  { label: "Foco", value: "Fullstack Web & Mobile" },
  { label: "Abordagem", value: "Arquitetura antes de código" },
  { label: "Base", value: "Portugal, disponível para remoto" },
];

export function About() {
  return (
    <section id="sobre" className="mx-auto max-w-6xl px-6 py-28">
      <Reveal>
        <SectionHeading eyebrow="perfil" title="Sobre mim" />
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-5">
        <Reveal delay={0.1} className="lg:col-span-3">
          <div className="flex flex-col gap-5 text-base leading-relaxed text-foreground-muted">
            <p>
              Trabalho na interseção entre engenharia de software e experiência de utilizador:
              gosto de perceber o problema de negócio até ao detalhe antes de escrever a primeira
              linha de código, e só depois desenhar a arquitetura que o vai suportar a longo prazo.
            </p>
            <p>
              Sinto-me em casa tanto na base de dados como na interface — desde a modelação de
              esquemas relacionais e a escrita de consultas eficientes, até à construção de
              interfaces fluidas e acessíveis com React e Next.js. Essa visão de ponta a ponta é
              o que me permite tomar decisões de arquitetura com consciência do impacto real que
              têm no utilizador final.
            </p>
            <p>
              Trabalho com autonomia em todas as fases de um projeto — do levantamento de
              requisitos ao deploy em produção — e dou valor a código legível, testável e a boas
              práticas de segurança desde o primeiro commit, não como um passo extra, mas como
              parte inseparável de construir bem.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.18} className="lg:col-span-2">
          <div className="flex flex-col gap-3 rounded-(--radius-lg) glass p-6">
            {facts.map((fact) => (
              <div
                key={fact.label}
                className="flex items-center justify-between border-b border-border py-3 last:border-b-0 last:pb-0 first:pt-0"
              >
                <span className="font-mono text-xs text-foreground-subtle">{fact.label}</span>
                <span className="text-sm font-medium text-foreground">{fact.value}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
