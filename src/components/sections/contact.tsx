"use client";

import { profile } from "@/data/profile";
import { Reveal } from "@/components/ui/reveal";
import { CopyEmailButton } from "@/components/ui/copy-email-button";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";

export function Contact() {
  return (
    <section id="contacto" className="mx-auto max-w-4xl px-6 py-28">
      <Reveal>
        <div className="relative overflow-hidden rounded-(--radius-lg) glass px-8 py-16 text-center sm:px-16">
          <div
            className="pointer-events-none absolute left-1/2 top-0 h-64 w-96 -translate-x-1/2 -translate-y-1/3 opacity-50"
            style={{
              background:
                "radial-gradient(closest-side, rgba(124,108,255,0.2), transparent 75%)",
            }}
          />
          <div className="relative z-10 flex flex-col items-center gap-6">
            <span className="font-mono text-xs tracking-wide text-accent">{"// contacto"}</span>
            <h2 className="text-balance text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
              Vamos construir algo com rigor.
            </h2>
            <p className="max-w-md text-balance text-sm leading-relaxed text-foreground-muted sm:text-base">
              Estou disponível para novos projetos, colaborações e conversas sobre engenharia de
              software. Envia um email ou encontra-me nas redes abaixo.
            </p>

            <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
              <CopyEmailButton email={profile.email} />
              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full glass text-foreground transition-colors duration-200 hover:bg-surface-hover"
                aria-label="GitHub"
              >
                <GithubIcon className="h-4 w-4" />
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full glass text-foreground transition-colors duration-200 hover:bg-surface-hover"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
