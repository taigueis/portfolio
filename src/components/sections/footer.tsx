import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-xs text-foreground-subtle sm:flex-row">
        <span>
          © {new Date().getFullYear()} {profile.name}. Todos os direitos reservados.
        </span>
        <span className="font-mono">Construído com Next.js & Tailwind CSS.</span>
      </div>
    </footer>
  );
}
