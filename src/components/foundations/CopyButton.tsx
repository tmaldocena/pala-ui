"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "pala-ui-core";

export function CopyButton({ value, label, className }: { value: string; label?: string; className?: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      try {
        const el = document.createElement("textarea");
        el.value = value;
        el.style.position = "fixed";
        el.style.opacity = "0";
        document.body.appendChild(el);
        el.select();
        document.execCommand("copy");
        document.body.removeChild(el);
      } catch {}
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1400);
  };

  return (
    <button
      type="button"
      onClick={copy}
      title={`Copy ${value}`}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium text-foreground-secondary transition-colors hover:bg-surface-bg hover:text-foreground-primary",
        className
      )}
    >
      {label && <span className="font-mono">{label}</span>}
      {copied ? <Check size={12} className="text-success" /> : <Copy size={12} />}
    </button>
  );
}
