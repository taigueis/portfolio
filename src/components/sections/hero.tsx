import { ArrowRight, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { LinkButton } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { DotField } from "@/components/ui/dot-field";
import { AnimatedHeading } from "@/components/ui/animated-heading";
import { Magnetic } from "@/components/ui/magnetic";

function delayStyle(index: number) {
  return { animationDelay: `${0.1 + index * 0.09}s` };
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] flex-col items-center justify-center overflow-hidden px-6 pt-32 pb-20"
    >
      <div className="mask-fade pointer-events-none absolute inset-0">
        <DotField />
      </div>
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[820px] -translate-x-1/2 opacity-40"
        style={{
          background:
            "radial-gradient(closest-side, rgba(124,108,255,0.22), transparent 75%)",
        }}
      />

      <div className="relative z-10 flex max-w-3xl flex-col items-center gap-7 text-center">
        <div
          style={delayStyle(0)}
          className="animate-fade-up inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 font-mono text-xs text-foreground-muted"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-success" />
          </span>
          {profile.status}
        </div>

        <AnimatedHeading
          delay={0.2}
          className="text-balance text-4xl font-medium leading-[1.08] tracking-tight text-foreground sm:text-6xl"
          segments={[
            { text: "Engenharia de software com" },
            { text: "rigor arquitetural", className: "text-foreground-muted" },
            { text: "e foco em" },
            {
              text: "experiência real.",
              className: "bg-gradient-to-br from-foreground to-foreground-muted bg-clip-text text-transparent",
            },
          ]}
        />

        <p
          style={delayStyle(2)}
          className="animate-fade-up max-w-xl text-balance text-base leading-relaxed text-foreground-muted sm:text-lg"
        >
          Sou o {profile.name}, {profile.role} especializado no desenvolvimento Fullstack
          Web & Backend. Construo sites e plataformas em Next.js, Spring Boot e Laravel — desde
          a modelação da base de dados e arquitetura de backend até à interface de utilizador.
        </p>

        <div
          style={delayStyle(3)}
          className="animate-fade-up flex flex-wrap items-center justify-center gap-3"
        >
          <Magnetic>
            <LinkButton href="#projetos" variant="primary">
              Explorar Projetos
              <ArrowRight size={15} />
            </LinkButton>
          </Magnetic>
          <Magnetic>
            <LinkButton href="#contacto" variant="secondary">
              <Mail size={15} />
              Entrar em Contacto
            </LinkButton>
          </Magnetic>
        </div>

        <div style={delayStyle(4)} className="animate-fade-up flex items-center gap-2 pt-2">
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-9 w-9 items-center justify-center rounded-full text-foreground-subtle transition-colors duration-200 hover:bg-surface-hover hover:text-foreground"
          >
            <GithubIcon className="h-[17px] w-[17px]" />
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-9 w-9 items-center justify-center rounded-full text-foreground-subtle transition-colors duration-200 hover:bg-surface-hover hover:text-foreground"
          >
            <LinkedinIcon className="h-[17px] w-[17px]" />
          </a>
        </div>
      </div>
    </section>
  );
}
