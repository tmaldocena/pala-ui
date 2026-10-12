"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export function NpmInstallSnippet() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText("npm install pala-ui-core");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mt-8 flex items-center gap-2 pala-cut border border-white/15 bg-white/5 px-5 py-3 backdrop-blur-sm">
      <span className="font-mono text-sm text-white/80">
        <span className="text-primary/80">$</span> npm install pala-ui-core
      </span>
      <button
        onClick={copy}
        className="ml-2 flex h-7 w-7 items-center justify-center pala-cut-sm text-white/50 transition-colors hover:bg-white/10 hover:text-white/80"
        aria-label="Copy install command"
      >
        {copied ? <Check size={14} className="text-success" /> : <Copy size={14} />}
      </button>
    </div>
  );
}
