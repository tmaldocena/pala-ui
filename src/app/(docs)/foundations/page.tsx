"use client";

import Link from "next/link";
import { ArrowUpRight, Bell, Calendar, CreditCard, Search, Star, User } from "lucide-react";
import { cn } from "pala-ui-core";
import { useTheme } from "pala-ui-core";

type Preview = "colors" | "type" | "spacing" | "shape" | "icons";

const items: { href: string; title: string; desc: string; preview: Preview }[] = [
  { href: "/foundations/colors", title: "Colors", desc: "Semantic palette that adapts to every theme", preview: "colors" },
  { href: "/foundations/typography", title: "Typography", desc: "Funnel Sans for headings, Inter for body", preview: "type" },
  { href: "/foundations/spacing", title: "Spacing", desc: "A 4px rhythm for padding, gaps, and layout", preview: "spacing" },
  { href: "/foundations/shape", title: "Shape", desc: "The Pala cut — two round corners, two sharp", preview: "shape" },
  { href: "/foundations/icons", title: "Icons", desc: "Lucide icons grouped by intent", preview: "icons" },
];

const principles = [
  "Warm & friendly",
  "One signature shape",
  "Themeable by design",
  "Accessible by default",
];

function Preview({ kind }: { kind: Preview }) {
  const { current } = useTheme();
  const t = current.tokens;

  if (kind === "colors") {
    return (
      <div className="flex h-full items-center gap-2">
        {["primary", "primary-soft", "accent", "success", "info", "error"].map((key) => (
          <span
            key={key}
            className="h-10 flex-1 pala-cut-sm border border-black/10"
            style={{ background: t[key] }}
          />
        ))}
      </div>
    );
  }

  if (kind === "type") {
    return (
      <div className="flex h-full items-center gap-4">
        <span className="font-heading text-4xl font-bold text-foreground-primary">Aa</span>
        <span className="font-body text-4xl text-foreground-secondary">Aa</span>
      </div>
    );
  }

  if (kind === "spacing") {
    return (
      <div className="flex h-full flex-col justify-center gap-2">
        {[24, 40, 56, 72].map((w) => (
          <div key={w} className="h-2.5 pala-cut-sm bg-primary" style={{ width: `${w}%` }} />
        ))}
      </div>
    );
  }

  if (kind === "shape") {
    return (
      <div className="flex h-full items-center gap-3">
        <span className="h-10 w-10 pala-cut-sm bg-primary/30" />
        <span className="h-12 w-12 pala-cut bg-primary/50" />
        <span className="h-10 pala-cut-pill bg-primary px-4" />
        <span className="h-8 pala-cut-pill-sm bg-accent px-3" />
      </div>
    );
  }

  return (
    <div className="flex h-full items-center gap-4 text-foreground-primary">
      <Search size={26} />
      <Bell size={26} />
      <Star size={26} />
      <Calendar size={26} />
      <CreditCard size={26} />
      <User size={26} />
    </div>
  );
}

export default function FoundationsPage() {
  return (
    <div>
      <h1 className="font-heading text-3xl font-bold text-foreground-primary">Foundations</h1>
      <p className="mt-2 max-w-2xl text-foreground-secondary">
        The visual building blocks of PalaUI — colors, typography, spacing, shape, and icons.
        Everything here is driven by tokens, so it adapts to any theme.
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {principles.map((p) => (
          <span
            key={p}
            className="rounded-full border border-border bg-white px-3 py-1.5 text-xs font-medium text-foreground-secondary"
          >
            {p}
          </span>
        ))}
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "group flex flex-col pala-cut border border-border bg-white p-5 transition-all hover:border-primary hover:shadow-md",
              item.preview === "colors" && "sm:col-span-2"
            )}
          >
            <div className="flex h-16 items-center">
              <Preview kind={item.preview} />
            </div>
            <div className="mt-4 flex items-start justify-between gap-3 border-t border-border pt-4">
              <div>
                <h2 className="font-heading text-lg font-semibold text-foreground-primary transition-colors group-hover:text-primary">
                  {item.title}
                </h2>
                <p className="mt-1 text-sm text-foreground-secondary">{item.desc}</p>
              </div>
              <ArrowUpRight
                size={18}
                className="mt-1 shrink-0 text-foreground-secondary transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
