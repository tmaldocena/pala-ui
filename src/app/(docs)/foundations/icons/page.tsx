"use client";

import { useMemo, useState } from "react";
import {
  Home, Search, Bell, SlidersHorizontal, Check, X, Pencil, Trash2, Briefcase, Wrench,
  HardHat, MessageSquare, Phone, Mail, Clock, Calendar, MapPin, Wallet, CreditCard,
  CircleDollarSign, ArrowRight, ChevronDown, ChevronUp, ChevronLeft, ChevronRight,
  Plus, Upload, Star, LoaderCircle, User, Settings, LayoutDashboard, TriangleAlert,
  CheckCircle, CircleAlert, Filter, Download,
} from "lucide-react";
import { DynamicIcon, iconNames } from "lucide-react/dynamic";
import type { IconName } from "lucide-react/dynamic";
import { cn } from "pala-ui-core";

const iconGroups = [
  {
    name: "Work",
    icons: [
      { name: "Briefcase", icon: Briefcase },
      { name: "Wrench", icon: Wrench },
      { name: "HardHat", icon: HardHat },
    ],
  },
  {
    name: "Communications",
    icons: [
      { name: "MessageSquare", icon: MessageSquare },
      { name: "Phone", icon: Phone },
      { name: "Mail", icon: Mail },
    ],
  },
  {
    name: "Alerts & Status",
    icons: [
      { name: "Bell", icon: Bell },
      { name: "TriangleAlert", icon: TriangleAlert },
      { name: "CheckCircle", icon: CheckCircle },
      { name: "CircleAlert", icon: CircleAlert },
    ],
  },
  {
    name: "Meta",
    icons: [
      { name: "Clock", icon: Clock },
      { name: "Calendar", icon: Calendar },
      { name: "MapPin", icon: MapPin },
    ],
  },
  {
    name: "Money",
    icons: [
      { name: "Wallet", icon: Wallet },
      { name: "CreditCard", icon: CreditCard },
      { name: "CircleDollarSign", icon: CircleDollarSign },
    ],
  },
  {
    name: "Navigation",
    icons: [
      { name: "Home", icon: Home },
      { name: "Search", icon: Search },
      { name: "ChevronDown", icon: ChevronDown },
      { name: "ChevronUp", icon: ChevronUp },
      { name: "ChevronLeft", icon: ChevronLeft },
      { name: "ChevronRight", icon: ChevronRight },
      { name: "ArrowRight", icon: ArrowRight },
    ],
  },
  {
    name: "Actions",
    icons: [
      { name: "Plus", icon: Plus },
      { name: "X", icon: X },
      { name: "Check", icon: Check },
      { name: "Pencil", icon: Pencil },
      { name: "Trash2", icon: Trash2 },
      { name: "Upload", icon: Upload },
      { name: "Download", icon: Download },
    ],
  },
  {
    name: "UI",
    icons: [
      { name: "SlidersHorizontal", icon: SlidersHorizontal },
      { name: "Filter", icon: Filter },
      { name: "User", icon: User },
      { name: "Settings", icon: Settings },
      { name: "LayoutDashboard", icon: LayoutDashboard },
      { name: "Star", icon: Star },
      { name: "LoaderCircle", icon: LoaderCircle },
    ],
  },
];

const sizes = [16, 20, 24];
const PAGE = 96;

function toPascal(name: string) {
  return name
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
}

function CatalogTile({ name, copied, onCopy }: { name: IconName; copied: boolean; onCopy: (name: IconName) => void }) {
  return (
    <button
      onClick={() => onCopy(name)}
      title={`Copy "${toPascal(name)}"`}
      className="flex flex-col items-center gap-2 pala-cut border border-border bg-white px-3 py-4 transition-all hover:border-primary hover:shadow-sm"
    >
      <span className={cn("flex h-5 items-center justify-center", copied ? "text-success" : "text-foreground-primary")}>
        <DynamicIcon name={name} size={20} />
      </span>
      <span
        className={cn(
          "w-full truncate text-center text-xs",
          copied ? "font-semibold text-success" : "text-foreground-secondary"
        )}
      >
        {copied ? "Copied!" : toPascal(name)}
      </span>
    </button>
  );
}

export default function IconsPage() {
  const [query, setQuery] = useState("");
  const [copied, setCopied] = useState<string | null>(null);
  const [page, setPage] = useState(1);

  const q = query.trim().toLowerCase();
  const searching = q.length > 0;

  const all = useMemo(
    () => [...iconNames].sort((a, b) => toPascal(a).localeCompare(toPascal(b))),
    []
  );

  const filtered = useMemo(() => {
    if (!searching) return all;
    return all.filter(
      (name) => name.toLowerCase().includes(q) || toPascal(name).toLowerCase().includes(q)
    );
  }, [all, q, searching]);

  const visible = filtered.slice(0, page * PAGE);
  const remaining = filtered.length - visible.length;

  const copy = async (name: string) => {
    try {
      await navigator.clipboard.writeText(name);
    } catch {}
    setCopied(toPascal(name));
    window.setTimeout(() => setCopied((c) => (c === toPascal(name) ? null : c)), 1300);
  };

  return (
    <div>
      <h1 className="font-heading text-3xl font-bold text-foreground-primary">Icons</h1>
      <p className="mt-2 max-w-2xl text-foreground-secondary">
        PalaUI uses Lucide icons — a clean, consistent open-source set. Click any icon to copy its
        import name.
      </p>
      <a
        href="https://lucide.dev/icons"
        target="_blank"
        rel="noreferrer"
        className="mt-2 inline-block text-sm font-semibold text-primary underline"
      >
        Browse all icons on lucide.dev →
      </a>

      {/* Search */}
      <div className="mt-6 flex max-w-sm items-center gap-2 pala-cut border border-border bg-white px-3 py-2.5">
        <Search size={16} className="text-foreground-secondary" />
        <input
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setPage(1);
          }}
          placeholder="Search all icons..."
          className="w-full bg-transparent text-sm text-foreground-primary outline-none placeholder:text-foreground-secondary/60"
        />
        {query && (
          <button
            onClick={() => {
              setQuery("");
              setPage(1);
            }}
            className="text-foreground-secondary hover:text-foreground-primary"
          >
            <X size={14} />
          </button>
        )}
      </div>

      {/* Sizes */}
      <h2 className="mt-10 font-heading text-2xl font-bold text-foreground-primary">Sizes</h2>
      <p className="mt-1 text-sm text-foreground-secondary">
        Stick to 16px for inline use, 20px for buttons, and 24px for standalone actions.
      </p>
      <div className="mt-4 flex flex-wrap gap-4">
        {sizes.map((size) => (
          <div key={size} className="flex flex-col items-center gap-2 pala-cut border border-border bg-white px-6 py-5">
            <Star size={size} className="text-foreground-primary" />
            <span className="font-mono text-xs text-foreground-secondary">{size}px</span>
          </div>
        ))}
      </div>

      {/* Curated groups (hidden while searching) */}
      {!searching && (
        <div className="mt-10 space-y-8">
          <h2 className="font-heading text-2xl font-bold text-foreground-primary">Common in PalaUI</h2>
          {iconGroups.map((group) => (
            <div key={group.name}>
              <h3 className="mb-3 font-heading text-lg font-semibold text-foreground-primary">{group.name}</h3>
              <div className="grid grid-cols-4 gap-3 sm:grid-cols-6 md:grid-cols-8">
                {group.icons.map(({ name, icon: Icon }) => (
                  <button
                    key={name}
                    onClick={() => copy(name)}
                    title={`Copy "${name}"`}
                    className="flex flex-col items-center gap-2 pala-cut border border-border bg-white px-3 py-4 transition-all hover:border-primary hover:shadow-sm"
                  >
                    <span className={cn("flex h-5 items-center justify-center", copied === name ? "text-success" : "text-foreground-primary")}>
                      <Icon size={20} />
                    </span>
                    <span
                      className={cn(
                        "w-full truncate text-center text-xs",
                        copied === name ? "font-semibold text-success" : "text-foreground-secondary"
                      )}
                    >
                      {copied === name ? "Copied!" : name}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Full catalog */}
      <h2 className="mt-12 font-heading text-2xl font-bold text-foreground-primary">
        {searching ? "Search results" : "All icons"}
      </h2>
      <p className="mt-1 text-sm text-foreground-secondary">
        {searching
          ? `${filtered.length} result${filtered.length === 1 ? "" : "s"} for "${query.trim()}"`
          : `Showing ${visible.length} of ${all.length} icons.`}
      </p>

      <div className="mt-4 grid grid-cols-4 gap-3 sm:grid-cols-6 md:grid-cols-8">
        {visible.map((name) => (
          <CatalogTile key={name} name={name} copied={copied === toPascal(name)} onCopy={copy} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-4 text-sm text-foreground-secondary">No icons match &ldquo;{query.trim()}&rdquo;.</p>
      )}

      {remaining > 0 && (
        <div className="mt-6 flex justify-center">
          <button
            onClick={() => setPage((p) => p + 1)}
            className="pala-cut-pill bg-primary px-6 py-2.5 font-heading text-sm font-bold text-[#1A1A1A] transition-opacity hover:opacity-90"
          >
            Load {Math.min(remaining, PAGE)} more
          </button>
        </div>
      )}

      {/* Usage */}
      <h2 className="mt-12 font-heading text-2xl font-bold text-foreground-primary">Usage</h2>
      <pre className="mt-4 overflow-x-auto pala-cut border border-border bg-foreground-primary p-4 text-sm text-background">
        <code>npm install lucide-react</code>
      </pre>
      <pre className="mt-3 overflow-x-auto pala-cut border border-border bg-foreground-primary p-4 text-sm text-background">
        <code>{`import { Search, Bell } from "lucide-react";

<Search size={16} />
<Bell size={20} />`}</code>
      </pre>
    </div>
  );
}
