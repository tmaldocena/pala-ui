import Link from "next/link";

export default function GettingStarted() {
  return (
    <div>
      <h1 className="font-heading text-3xl font-bold text-foreground-primary">Getting Started</h1>
      <p className="mt-2 text-foreground-secondary">
        Everything you need to start building with PalaUI in any project.
      </p>

      {/* Philosophy */}
      <section className="mt-10">
        <h2 className="font-heading text-xl font-bold text-foreground-primary">Design philosophy</h2>
        <p className="mt-2 text-foreground-secondary">
          PalaUI is a general-purpose React component library. It is built around a single
          signature shape — the Pala cut — and a soft, themeable palette, so it can drop into
          almost any product and still feel like itself.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            { title: "The Pala cut", desc: "Two diagonal corners rounded, two sharp — a recognizable, friendly rhythm." },
            { title: "Themable by design", desc: "Nine palettes and full token overrides for instant rebranding." },
            { title: "Mobile first", desc: "Touch-friendly targets and compact layouts that scale up cleanly." },
          ].map((item) => (
            <div key={item.title} className="pala-cut border border-border bg-white p-5">
              <h3 className="font-heading text-sm font-bold text-foreground-primary">{item.title}</h3>
              <p className="mt-1 text-sm text-foreground-secondary">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Prerequisites */}
      <section className="mt-10">
        <h2 className="font-heading text-xl font-bold text-foreground-primary">Prerequisites</h2>
        <p className="mt-2 text-foreground-secondary">
          PalaUI relies on these, so make sure they&apos;re installed in your app:
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {[
            { name: "React 18 or 19", desc: "React and React DOM" },
            { name: "Tailwind CSS v4", desc: "Components are styled with Tailwind utilities" },
            { name: "lucide-react ^1.20", desc: "Icons used across components" },
          ].map((item) => (
            <div key={item.name} className="pala-cut border border-border bg-white p-4">
              <div className="font-heading text-sm font-bold text-foreground-primary">{item.name}</div>
              <p className="mt-1 text-xs text-foreground-secondary">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Start */}
      <section className="mt-10">
        <h2 className="font-heading text-xl font-bold text-foreground-primary">Quick start</h2>
        <pre className="mt-4 overflow-x-auto pala-cut border border-border bg-foreground-primary p-4 text-sm text-background">
          <code>{`npm install pala-ui-core lucide-react`}</code>
        </pre>

        <h3 className="mt-6 font-heading text-lg font-bold text-foreground-primary">1. Import the CSS</h3>
        <p className="mt-1 text-sm text-foreground-secondary">
          Add these to your global stylesheet, after Tailwind.
        </p>
        <pre className="mt-4 overflow-x-auto pala-cut border border-border bg-foreground-primary p-4 text-sm text-background">
          <code>{`@import "tailwindcss";
@import "pala-ui-core/tokens.css";`}</code>
        </pre>
        <p className="mt-2 text-sm text-foreground-secondary">
          <code className="text-xs">tokens.css</code> provides the color and font tokens plus the{" "}
          <code className="text-xs">.pala-cut</code> utilities. Add{" "}
          <code className="text-xs">pala-ui-core/styles.css</code> too for variable defaults,
          animations, and the theme-transition helper.
        </p>

        <h3 className="mt-6 font-heading text-lg font-bold text-foreground-primary">2. Use a component</h3>
        <p className="mt-1 text-sm text-foreground-secondary">
          Components are client components — render them from a Client Component or add{" "}
          <code className="text-xs">&quot;use client&quot;</code>.
        </p>
        <pre className="mt-4 overflow-x-auto pala-cut border border-border bg-foreground-primary p-4 text-sm text-background">
          <code>{`"use client";

import { ButtonPrimary, Alert } from "pala-ui-core";

export function MyPage() {
  return (
    <div>
      <Alert type="success" message="Saved successfully!" />
      <ButtonPrimary>Get started</ButtonPrimary>
    </div>
  );
}`}</code>
        </pre>
        <p className="mt-2 text-sm text-foreground-secondary">
          Need a server-safe import? Use{" "}
          <code className="text-xs">pala-ui-core/server</code> for{" "}
          <code className="text-xs">cn</code>, <code className="text-xs">palettes</code>, and the{" "}
          <code className="text-xs">Palette</code> type.
        </p>
      </section>

      {/* Theming */}
      <section className="mt-10">
        <h2 className="font-heading text-xl font-bold text-foreground-primary">Theming</h2>
        <p className="mt-2 text-foreground-secondary">
          Every color is a CSS custom property, so you can override anything. To rebrand quickly,
          set your own tokens:
        </p>
        <pre className="mt-4 overflow-x-auto pala-cut border border-border bg-foreground-primary p-4 text-sm text-background">
          <code>{`:root {
  --palaui-primary: #6C63FF;
  --palaui-accent: #FF6B6B;
}`}</code>
        </pre>

        <h3 className="mt-6 font-heading text-lg font-bold text-foreground-primary">Runtime palettes</h3>
        <p className="mt-1 text-sm text-foreground-secondary">
          Switch between the nine built-in palettes with <code className="text-xs">ThemeProvider</code>{" "}
          and <code className="text-xs">useTheme</code>.
        </p>
        <pre className="mt-4 overflow-x-auto pala-cut border border-border bg-foreground-primary p-4 text-sm text-background">
          <code>{`"use client";

import { ThemeProvider, useTheme } from "pala-ui-core";

export function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider defaultPalette="ocean">
      {children}
    </ThemeProvider>
  );
}

function PaletteSwitcher() {
  const { current, setPalette, available } = useTheme();
  return (
    <div>
      {available.map((p) => (
        <button key={p.id} onClick={() => setPalette(p.id)}>
          {p.name}
        </button>
      ))}
    </div>
  );
}`}</code>
        </pre>
        <div className="mt-4 overflow-x-auto pala-cut border border-border bg-white">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="px-4 py-3 text-left font-medium text-foreground-secondary">Field</th>
                <th className="px-4 py-3 text-left font-medium text-foreground-secondary">Description</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "current", desc: "The active palette" },
                { name: "available", desc: "All nine palettes" },
                { name: "setPalette(id)", desc: "Switch to a palette" },
                { name: "updateToken(token, value)", desc: "Override a single token" },
                { name: "resetPalette()", desc: "Restore the default palette" },
              ].map((row) => (
                <tr key={row.name} className="border-b border-border last:border-0">
                  <td className="px-4 py-3 font-mono text-xs text-foreground-primary">{row.name}</td>
                  <td className="px-4 py-3 text-foreground-secondary">{row.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Next steps */}
      <section className="mt-12 pala-cut-lg border border-border bg-white p-8">
        <h2 className="font-heading text-xl font-bold text-foreground-primary">Next steps</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <Link href="/foundations" className="pala-cut border border-border bg-background px-4 py-3 transition-all hover:border-primary hover:shadow-sm">
            <span className="font-heading text-sm font-bold text-foreground-primary">Foundations</span>
            <p className="mt-1 text-xs text-foreground-secondary">Colors, type, spacing, shape</p>
          </Link>
          <Link href="/components" className="pala-cut border border-border bg-background px-4 py-3 transition-all hover:border-primary hover:shadow-sm">
            <span className="font-heading text-sm font-bold text-foreground-primary">Components</span>
            <p className="mt-1 text-xs text-foreground-secondary">Interactive live demos</p>
          </Link>
          <Link href="/examples" className="pala-cut border border-border bg-background px-4 py-3 transition-all hover:border-primary hover:shadow-sm">
            <span className="font-heading text-sm font-bold text-foreground-primary">Examples</span>
            <p className="mt-1 text-xs text-foreground-secondary">Composed layouts & flows</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
