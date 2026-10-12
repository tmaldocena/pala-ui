"use client";

import { Alert } from "pala-ui-core";
import { CopyButton } from "@/components/foundations/CopyButton";
import { PalettePicker } from "@/components/foundations/PalettePicker";
import { useTheme } from "pala-ui-core";

const NEUTRAL_DEFAULTS: Record<string, string> = {
  background: "#F1F2ED",
  "surface-bg": "#DDDCE1",
  card: "#FFFFFF",
  border: "#CFCED4",
  "foreground-primary": "#2E2E2E",
  "foreground-secondary": "#6B7280",
  "foreground-inverse": "#F1F2ED",
};

const GROUPS: { name: string; description: string; keys: string[] }[] = [
  {
    name: "Brand",
    description: "Core identity colors.",
    keys: ["primary", "primary-soft", "accent"],
  },
  {
    name: "Status",
    description: "Feedback and semantic states.",
    keys: [
      "success",
      "success-soft",
      "error",
      "error-soft",
      "info",
      "info-soft",
      "warning",
      "warning-soft",
    ],
  },
  {
    name: "Neutrals & Surfaces",
    description: "Backgrounds, borders, and text.",
    keys: [
      "background",
      "surface-bg",
      "card",
      "border",
      "foreground-primary",
      "foreground-secondary",
      "foreground-inverse",
    ],
  },
];

function labelize(key: string) {
  return key.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

function hexToRgb(hex: string): [number, number, number] | null {
  const clean = hex.replace("#", "").trim();
  const full = clean.length === 3 ? clean.split("").map((c) => c + c).join("") : clean;
  if (full.length !== 6 || /[^0-9a-fA-F]/.test(full)) return null;
  return [0, 2, 4].map((i) => parseInt(full.slice(i, i + 2), 16)) as [number, number, number];
}

function readableText(hex: string) {
  const rgb = hexToRgb(hex);
  if (!rgb) return "#1A1A1A";
  const [r, g, b] = rgb.map((v) => {
    const c = v / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  }) as [number, number, number];
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return luminance > 0.5 ? "#1A1A1A" : "#FFFFFF";
}

export default function ColorsPage() {
  const { current } = useTheme();

  const valueFor = (key: string) => current.tokens[key] ?? NEUTRAL_DEFAULTS[key] ?? "#000000";

  return (
    <div>
      <h1 className="font-heading text-3xl font-bold text-foreground-primary">Colors</h1>
      <p className="mt-2 max-w-2xl text-foreground-secondary">
        A warm, friendly palette built for accessibility and personality. Every value is a token —
        switch the theme below and the whole page updates live.
      </p>

      <div className="mt-5">
        <PalettePicker />
        <p className="mt-2 text-xs text-foreground-secondary">
          Active theme: <span className="font-semibold text-foreground-primary">{current.name}</span> — {current.description}
        </p>
      </div>

      <div className="mt-8 space-y-10">
        {GROUPS.map((group) => (
          <section key={group.name}>
            <div className="flex items-baseline justify-between">
              <h2 className="font-heading text-xl font-bold text-foreground-primary">{group.name}</h2>
              <span className="text-xs text-foreground-secondary">{group.description}</span>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {group.keys.map((key) => {
                const value = valueFor(key);
                return (
                  <div key={key} className="overflow-hidden pala-cut border border-border bg-white">
                    <div
                      className="flex h-16 items-center justify-center font-heading text-lg font-bold"
                      style={{ background: value, color: readableText(value) }}
                    >
                      Aa
                    </div>
                    <div className="p-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-foreground-primary">{labelize(key)}</span>
                        <CopyButton value={value} label={value} />
                      </div>
                      <div className="mt-2 space-y-0.5 font-mono text-[11px] text-foreground-secondary">
                        <div>--palaui-{key}</div>
                        <div>--color-{key}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      <h2 className="mt-12 font-heading text-2xl font-bold text-foreground-primary">In context</h2>
      <p className="mt-1 text-sm text-foreground-secondary">
        Components read these tokens through Tailwind classes, so they recolor with the theme.
      </p>
      <div className="mt-4 flex max-w-lg flex-col gap-2">
        <Alert type="success" message="Saved successfully!" />
        <Alert type="error" message="Something went wrong." />
        <Alert type="info" message="New updates available." />
      </div>
    </div>
  );
}
