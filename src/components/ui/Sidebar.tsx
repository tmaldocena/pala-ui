"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "pala-ui-core";
import { navigation } from "@/lib/navigation";
import { useState } from "react";

export function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed top-4 left-4 z-50 flex h-10 w-10 items-center justify-center pala-cut bg-background stroke-[1.5] shadow-md md:hidden"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          {open ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
        </svg>
      </button>

      <aside className={cn(
        "fixed inset-y-0 left-0 z-40 w-64 transform border-r border-border bg-background transition-transform duration-200 md:relative md:translate-x-0",
        open ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex h-16 items-center gap-3 border-b border-border px-6">
          <Image
            src="/pala-ui-logo.png"
            alt="PalaUI logo"
            width={32}
            height={32}
            className="h-8 w-8"
            priority
          />
          <span className="font-heading text-lg font-bold text-foreground-primary">PalaUI</span>
        </div>

        <nav className="overflow-y-auto px-4 py-6 h-[calc(100vh-4rem)]">
          {navigation.map((section) => (
            <div key={section.title} className="mb-6">
              <div className="mb-2 px-2">
                {section.href ? (
                  <Link
                    href={section.href}
                    className={cn(
                      "text-xs font-semibold uppercase tracking-wider text-foreground-secondary transition-colors hover:text-foreground-primary",
                      pathname === section.href && "text-primary"
                    )}
                  >
                    {section.title}
                  </Link>
                ) : (
                  <span className="text-xs font-semibold uppercase tracking-wider text-foreground-secondary">
                    {section.title}
                  </span>
                )}
              </div>
              <div className="space-y-0.5">
                {section.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "group flex items-center gap-2 pala-cut-sm px-3 py-2 text-sm font-medium transition-all",
                      pathname === item.href
                        ? "bg-primary/15 text-primary"
                        : "text-foreground-secondary hover:bg-primary/5 hover:text-foreground-primary"
                    )}
                  >
                    <span className={cn(
                      "h-1.5 w-1.5 rounded-full transition-colors",
                      pathname === item.href ? "bg-primary" : "bg-border group-hover:bg-foreground-secondary"
                    )} />
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </aside>

      {open && (
        <div className="fixed inset-0 z-30 bg-[#000]/20 md:hidden" onClick={() => setOpen(false)} />
      )}
    </>
  );
}
