"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#projetos", label: "Projetos" },
  { href: "#competencias", label: "Competências" },
  { href: "#contacto", label: "Contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={cn(
        "animate-fade-down fixed top-4 left-1/2 z-50 flex w-[calc(100%-2rem)] max-w-fit -translate-x-1/2 items-center gap-1 overflow-x-auto scrollbar-none rounded-full border border-border bg-background-elevated/80 px-2 py-2 backdrop-blur-md transition-shadow duration-300 sm:top-6",
        scrolled && "shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
      )}
    >
      <a
        href="#top"
        className="mr-1 hidden font-mono text-xs font-medium tracking-tight text-foreground sm:inline-flex sm:pl-2"
      >
        TC
      </a>

      <div className="flex items-center gap-0.5">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={cn(
              "shrink-0 rounded-full px-3 py-2 text-xs whitespace-nowrap text-foreground-muted transition-colors duration-200 hover:bg-surface-hover hover:text-foreground sm:px-4 sm:py-1.5 sm:text-sm",
              link.href === "#competencias" && "hidden min-[400px]:inline-flex"
            )}
          >
            {link.label}
          </a>
        ))}
      </div>

      <div className="mx-1 hidden h-4 w-px bg-border sm:block" />

      <div className="hidden items-center gap-1 pr-1 sm:flex">
        <a
          href={profile.links.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="flex h-8 w-8 items-center justify-center rounded-full text-foreground-muted transition-colors duration-200 hover:bg-surface-hover hover:text-foreground"
        >
          <GithubIcon className="h-4 w-4" />
        </a>
        <a
          href={profile.links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="flex h-8 w-8 items-center justify-center rounded-full text-foreground-muted transition-colors duration-200 hover:bg-surface-hover hover:text-foreground"
        >
          <LinkedinIcon className="h-4 w-4" />
        </a>
      </div>
    </nav>
  );
}
