"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

export function CopyEmailButton({
  email,
  className,
}: {
  email: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // clipboard API unavailable — no-op, the email is still visible to select manually
    }
  }

  return (
    <div className="relative inline-flex">
      <button
        onClick={handleCopy}
        className={cn(
          "group inline-flex items-center gap-2.5 rounded-full glass px-5 py-2.5 font-mono text-sm text-foreground transition-all duration-200 hover:border-border-hover hover:bg-surface-hover active:scale-[0.97]",
          className
        )}
      >
        {email}
        {copied ? (
          <Check size={14} className="text-success" />
        ) : (
          <Copy size={14} className="text-foreground-subtle transition-colors group-hover:text-foreground" />
        )}
      </button>
      <span
        role="status"
        aria-live="polite"
        className={cn(
          "absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-foreground px-3 py-1.5 text-xs font-medium text-background transition-all duration-200",
          copied ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-1.5 opacity-0"
        )}
      >
        Email copiado!
      </span>
    </div>
  );
}
