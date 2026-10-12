"use client";

import { useState } from "react";
import { cn } from "pala-ui-core";

export function ExampleFrame({
  url = "app.example.com",
  code,
  children,
  className,
}: {
  url?: string;
  code?: string;
  children: React.ReactNode;
  className?: string;
}) {
  const [showCode, setShowCode] = useState(false);

  return (
    <div className={className}>
      <div className="overflow-hidden pala-cut-lg border border-border bg-card shadow-sm">
        <div className="flex items-center gap-2 border-b border-border bg-surface-bg px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-error/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-warning/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-success/60" />
          <div className="mx-auto flex items-center gap-2 rounded-full bg-background px-4 py-1">
            <span className="h-2 w-2 rounded-full bg-foreground-secondary/40" />
            <span className="font-body text-[11px] font-medium text-foreground-secondary">{url}</span>
          </div>
        </div>
        <div className="bg-background p-5 md:p-6">{children}</div>
      </div>

      {code && (
        <div className="mt-2">
          <button
            onClick={() => setShowCode(!showCode)}
            className="flex items-center gap-1.5 text-xs font-medium text-foreground-secondary transition-colors hover:text-foreground-primary"
          >
            <svg
              className={cn("h-3.5 w-3.5 transition-transform", showCode && "rotate-90")}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
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
    </div>
  );
}
