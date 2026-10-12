"use client";

import { useState } from "react";
import { cn } from "pala-ui-core";

interface ComponentPreviewProps {
  title: string
  description?: string
  code?: string
  children: React.ReactNode
  className?: string
}

export function ComponentPreview({ title, description, code, children, className }: ComponentPreviewProps) {
  const [showCode, setShowCode] = useState(false);

  return (
    <section className={cn("mb-8", className)}>
      <div className="mb-3">
        <h3 className="font-heading text-lg font-semibold text-foreground-primary">{title}</h3>
        {description && <p className="mt-1 text-sm text-foreground-secondary">{description}</p>}
      </div>
      <div className="relative overflow-hidden pala-cut-lg border border-border bg-white p-6">
        <div className="flex flex-wrap items-start gap-4">{children}</div>
      </div>
      {code && (
        <div className="mt-2">
          <button
            onClick={() => setShowCode(!showCode)}
            className="flex items-center gap-1.5 text-xs font-medium text-foreground-secondary hover:text-foreground-primary transition-colors"
          >
            <svg
              className={cn("h-3.5 w-3.5 transition-transform", showCode && "rotate-90")}
              viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
            {showCode ? "Hide code" : "Show code"}
          </button>
          {showCode && (
            <pre className="mt-2 overflow-x-auto pala-cut bg-[#1e1e2e] p-4 text-sm text-[#cdd6f4] animate-slide-down">
              <code>{code}</code>
            </pre>
          )}
        </div>
      )}
    </section>
  );
}
