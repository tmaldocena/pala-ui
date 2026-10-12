"use client";

import { useTheme } from "pala-ui-core";

const hueMap: Record<string, string> = {
  primary: "Primary",
  "primary-soft": "Primary Soft",
  accent: "Accent",
  background: "Background",
  "surface-bg": "Surface BG",
  card: "Card",
  border: "Border",
  "foreground-primary": "Foreground",
  "foreground-secondary": "Foreground Muted",
  success: "Success",
  "success-soft": "Success Soft",
  error: "Error",
  "error-soft": "Error Soft",
  info: "Info",
  "info-soft": "Info Soft",
  warning: "Warning",
  "warning-soft": "Warning Soft",
};

export default function PaletteMakerPage() {
  const { current, setPalette, updateToken, resetPalette, available } = useTheme();

  return (
    <div>
      <h1 className="font-heading text-3xl font-bold text-foreground-primary">Palette Maker</h1>
      <p className="mt-2 text-foreground-secondary">
        Choose a pre-built palette or customize each color token. Changes apply instantly across the entire site.
      </p>

      {/* Pre-built palettes */}
      <section className="mt-8">
        <h2 className="font-heading text-lg font-semibold text-foreground-primary">Pre-built Palettes</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {available.map((p) => {
            const active = current.id === p.id;
            return (
              <button
                key={p.id}
                onClick={() => setPalette(p.id)}
                className={`group relative overflow-hidden pala-cut border-2 p-5 text-left transition-all hover:shadow-md ${
                  active ? "border-primary shadow-md" : "border-border hover:border-primary/40"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 flex-shrink-0 pala-cut-sm" style={{ background: p.swatch }} />
                  <div>
                    <div className="font-heading text-sm font-bold text-foreground-primary">{p.name}</div>
                    <div className="text-xs text-foreground-secondary">{p.description}</div>
                  </div>
                  {active && (
                    <svg className="ml-auto h-5 w-5 flex-shrink-0 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  )}
                </div>
                {/* Mini palette preview */}
                <div className="mt-3 flex gap-1">
                  {["background", "primary", "primary-soft", "accent", "success"].map((token) => (
                    <div
                      key={token}
                      className="h-3 flex-1 rounded-sm"
                      style={{ background: p.tokens[token] }}
                    />
                  ))}
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* Customize tokens */}
      <section className="mt-10">
        <div className="flex items-center justify-between">
          <h2 className="font-heading text-lg font-semibold text-foreground-primary">Customize Tokens</h2>
          <button
            onClick={resetPalette}
            className="pala-cut-pill-sm border border-border px-4 py-2 text-xs font-semibold text-foreground-secondary transition-all hover:border-error hover:text-error"
          >
            Reset to default
          </button>
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(hueMap).map(([token, label]) => {
            const value = current.tokens[token] || "#000000";
            return (
              <div
                key={token}
                className="flex items-center gap-3 pala-cut border border-border bg-card px-4 py-3"
              >
                <label className="min-w-0 flex-1">
                  <span className="block truncate text-sm font-medium text-foreground-primary">{label}</span>
                  <span className="font-mono text-xs text-foreground-secondary">{value}</span>
                </label>
                <div className="relative">
                  <input
                    type="color"
                    value={value}
                    onChange={(e) => updateToken(token, e.target.value)}
                    className="h-8 w-10 cursor-pointer rounded border border-border bg-transparent p-0.5"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Live preview */}
      <section className="mt-10">
        <h2 className="font-heading text-lg font-semibold text-foreground-primary">Live Preview</h2>
        <div className="mt-4 pala-cut-lg border border-border bg-card p-8">
          <div className="flex flex-wrap gap-3">
            <button className="pala-cut-pill bg-primary px-6 py-3 text-sm font-bold text-[#1A1A1A] font-heading transition-all hover:bg-primary-soft active:scale-[0.97]">
              Primary
            </button>
            <button className="pala-cut-pill border border-info bg-surface-primary px-6 py-3 text-sm font-bold text-foreground-primary font-heading transition-all hover:bg-info-soft active:scale-[0.97]">
              Ghost
            </button>
            <button className="pala-cut-pill bg-accent px-6 py-3 text-sm font-bold text-[#1A1A1A] font-heading transition-all hover:bg-warning-soft active:scale-[0.97]">
              Accent
            </button>
            <button className="flex h-[46px] w-[46px] items-center justify-center pala-cut border border-border text-foreground-primary transition-all hover:bg-primary-soft">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M12 5v14M5 12h14"/></svg>
            </button>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="h-6 w-[44px] rounded-full bg-primary p-0.5">
                <div className="h-[22px] w-[22px] translate-x-5 rounded-full bg-white shadow-sm" />
              </div>
              <span className="text-sm text-foreground-secondary">Toggle</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex h-[22px] w-[22px] items-center justify-center rounded-full border-2 border-primary bg-primary">
                <div className="h-[10px] w-[10px] rounded-full bg-white" />
              </div>
              <span className="text-sm text-foreground-secondary">Radio</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex h-[22px] w-[22px] items-center justify-center rounded border-2 border-primary bg-primary">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={3}><path d="M20 6L9 17l-5-5" /></svg>
              </div>
              <span className="text-sm text-foreground-secondary">Checked</span>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="pala-cut-pill-sm bg-success-soft px-3 py-1.5 text-xs font-bold text-success">Active</span>
            <span className="pala-cut-pill-sm bg-error-soft px-3 py-1.5 text-xs font-bold text-error">Inactive</span>
            <span className="pala-cut-pill-sm bg-info-soft px-3 py-1.5 text-xs font-bold text-info">Info</span>
            <span className="pala-cut-pill-sm bg-warning-soft px-3 py-1.5 text-xs font-bold text-warning">Warning</span>
            <span className="pala-cut-pill-sm bg-primary-soft px-3 py-1.5 text-xs font-bold text-primary">Primary</span>
          </div>
          <div className="mt-6">
            <div className="pala-cut border border-border px-4 py-3 text-sm text-foreground-secondary transition-all focus-within:border-primary">
              <span className="text-xs font-medium text-primary">Email</span>
              <div className="mt-1 text-foreground-primary">hello@palaui.design</div>
            </div>
          </div>
          <div className="mt-6 flex gap-2">
            <div className="animate-spin-slow h-5 w-5 rounded-full border-2 border-primary border-t-transparent" />
            <div className="h-2 w-16 rounded-full bg-primary-soft">
              <div className="h-full w-3/5 rounded-full bg-primary" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
