"use client";

import { Alert, ButtonPrimary, InputField, ListingCard } from "pala-ui-core";

const cutScale = [
  { name: "Cut Small", utility: "pala-cut-sm", radius: "8px 0 8px 0", role: "Nested surfaces: checkbox, tabs, pagination cells, nav sub-items" },
  { name: "Cut", utility: "pala-cut", radius: "12px 0 12px 0", role: "Default surfaces: cards, inputs, alerts, toasts, dropdowns" },
  { name: "Cut Large", utility: "pala-cut-lg", radius: "16px 0 16px 0", role: "Large surfaces: hero cards, modals" },
  { name: "Cut Pill", utility: "pala-cut-pill", radius: "9999px 12px 9999px 12px", role: "Buttons and CTAs" },
  { name: "Cut Pill Small", utility: "pala-cut-pill-sm", radius: "9999px 8px 9999px 8px", role: "Small badges and pills" },
];

const anatomy = [
  { corner: "Top-left", rounded: true },
  { corner: "Top-right", rounded: false },
  { corner: "Bottom-right", rounded: true },
  { corner: "Bottom-left", rounded: false },
];

export default function ShapePage() {
  return (
    <div>
      <h1 className="font-heading text-3xl font-bold text-foreground-primary">The Pala cut</h1>
      <p className="mt-2 max-w-2xl text-foreground-secondary">
        Every PalaUI surface is cut on two diagonal corners and left sharp on the other two.
        That single rule is what makes the library feel like PalaUI.
      </p>

      {/* Anatomy + comparison */}
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <div className="pala-cut border border-border bg-white p-5">
          <h2 className="font-heading text-sm font-bold text-foreground-primary">Anatomy</h2>
          <div className="mt-4 flex items-center gap-6">
            <div className="flex h-32 w-32 shrink-0 items-center justify-center pala-cut border-2 border-primary bg-primary/10 text-xs font-semibold text-foreground-secondary">
              Surface
            </div>
            <ul className="space-y-2 text-sm">
              {anatomy.map((a) => (
                <li key={a.corner} className="flex items-center gap-2">
                  <span
                    className={`h-3 w-3 ${a.rounded ? "rounded-full bg-primary" : "pala-cut-sm border border-border bg-transparent"}`}
                  />
                  <span className="text-foreground-secondary">
                    {a.corner} —{" "}
                    <span className={a.rounded ? "font-semibold text-foreground-primary" : ""}>
                      {a.rounded ? "rounded" : "sharp (0)"}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pala-cut border border-border bg-white p-5">
          <h2 className="font-heading text-sm font-bold text-foreground-primary">Pala cut vs symmetric</h2>
          <div className="mt-4 flex items-center gap-6">
            <div className="flex flex-col items-center gap-2">
              <div className="h-28 w-28 pala-cut border-2 border-primary bg-primary/10" />
              <span className="text-xs font-semibold text-primary">Pala cut</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="h-28 w-28 rounded-2xl border-2 border-border bg-surface-bg" />
              <span className="text-xs text-foreground-secondary">Symmetric radius</span>
            </div>
          </div>
          <p className="mt-3 text-xs text-foreground-secondary">
            The cut is directional and memorable; symmetric radii are generic. Pick one and stay consistent.
          </p>
        </div>
      </div>

      {/* Applied */}
      <h2 className="mt-12 font-heading text-2xl font-bold text-foreground-primary">Applied</h2>
      <p className="mt-1 text-sm text-foreground-secondary">The same corner set, worn by real components.</p>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="pala-cut border border-border bg-white p-5">
          <div className="font-mono text-[11px] text-foreground-secondary">pala-cut-pill</div>
          <div className="mt-3">
            <ButtonPrimary>Get started</ButtonPrimary>
          </div>
        </div>
        <div className="pala-cut border border-border bg-white p-5">
          <div className="font-mono text-[11px] text-foreground-secondary">pala-cut</div>
          <div className="mt-3">
            <InputField label="Email" icon={false} variant="default" placeholder="you@company.com" />
          </div>
        </div>
        <div className="pala-cut border border-border bg-white p-5">
          <div className="font-mono text-[11px] text-foreground-secondary">pala-cut-pill-sm</div>
          <div className="mt-3 flex gap-2">
            <span className="pala-cut-pill-sm bg-accent px-2.5 py-1 text-xs font-bold text-[#1A1A1A]">New</span>
            <span className="pala-cut-pill-sm bg-success-soft px-2.5 py-1 text-xs font-semibold text-success">Active</span>
          </div>
        </div>
        <div className="sm:col-span-2">
          <ListingCard
            title="Card surface"
            subtitle="pala-cut"
            badge="Beta"
            description="Cards, alerts, and inputs all share the default cut."
          />
        </div>
        <div className="flex flex-col justify-center gap-2 pala-cut border border-border bg-white p-5">
          <div className="font-mono text-[11px] text-foreground-secondary">pala-cut</div>
          <Alert type="info" message="Alerts are cut too." />
        </div>
      </div>

      {/* Scale */}
      <h2 className="mt-12 font-heading text-2xl font-bold text-foreground-primary">Scale</h2>
      <p className="mt-1 text-sm text-foreground-secondary">
        One closed set of radii covers the whole library, so the cut stays consistent everywhere.
      </p>
      <div className="mt-4 flex flex-wrap items-end gap-4">
        <div className="pala-cut-sm flex h-20 w-20 items-center justify-center bg-primary/20 text-xs font-semibold text-foreground-secondary">sm</div>
        <div className="pala-cut flex h-24 w-24 items-center justify-center bg-primary/30 text-xs font-semibold text-foreground-secondary">base</div>
        <div className="pala-cut-lg flex h-28 w-28 items-center justify-center bg-primary/40 text-xs font-semibold text-foreground-secondary">lg</div>
        <div className="pala-cut-pill flex h-14 items-center justify-center bg-primary px-8 font-heading text-sm font-bold text-[#1A1A1A]">Pill</div>
        <div className="pala-cut-pill-sm flex h-9 items-center justify-center bg-accent px-4 font-heading text-xs font-bold text-[#1A1A1A]">Badge</div>
      </div>
      <div className="mt-4 overflow-x-auto pala-cut border border-border bg-white">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="px-4 py-3 text-left font-medium text-foreground-secondary">Name</th>
              <th className="px-4 py-3 text-left font-medium text-foreground-secondary">Utility</th>
              <th className="px-4 py-3 text-left font-medium text-foreground-secondary">Radius</th>
              <th className="px-4 py-3 text-left font-medium text-foreground-secondary">Use for</th>
            </tr>
          </thead>
          <tbody>
            {cutScale.map((row) => (
              <tr key={row.utility} className="border-b border-border last:border-0">
                <td className="px-4 py-3 font-medium text-foreground-primary">{row.name}</td>
                <td className="px-4 py-3 font-mono text-xs text-foreground-secondary">.{row.utility}</td>
                <td className="px-4 py-3 font-mono text-xs text-foreground-secondary">{row.radius}</td>
                <td className="px-4 py-3 text-foreground-secondary">{row.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Rules */}
      <h2 className="mt-12 font-heading text-2xl font-bold text-foreground-primary">Rules</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div className="pala-cut border border-success bg-success-soft p-5">
          <h3 className="font-heading text-sm font-bold text-success">Do</h3>
          <ul className="mt-2 space-y-1.5 text-sm text-foreground-secondary">
            <li>Round the top-left and bottom-right corners, leave the rest at 0.</li>
            <li>Use <code className="font-mono text-xs">pala-cut-pill</code> for every button and CTA.</li>
            <li>Keep circles (avatars, toggles, progress) fully round.</li>
          </ul>
        </div>
        <div className="pala-cut border border-error bg-error-soft p-5">
          <h3 className="font-heading text-sm font-bold text-error">Don&apos;t</h3>
          <ul className="mt-2 space-y-1.5 text-sm text-foreground-secondary">
            <li>Mix symmetric radii like <code className="font-mono text-xs">rounded-lg</code> into surfaces.</li>
            <li>Invent new corner sizes — stick to the scale above.</li>
            <li>Apply the cut to decorative circles or pills.</li>
          </ul>
        </div>
      </div>

      {/* Theming */}
      <h2 className="mt-12 font-heading text-2xl font-bold text-foreground-primary">Theming</h2>
      <p className="mt-2 text-foreground-secondary">
        The cut reads from CSS custom properties, so you can tune it without touching components:
      </p>
      <pre className="mt-4 overflow-x-auto pala-cut border border-border bg-foreground-primary p-4 text-sm text-background">
        <code>{`:root {
  --palaui-cut-sm: 8px;
  --palaui-cut: 12px;
  --palaui-cut-lg: 16px;
  --palaui-cut-pill-tail: 12px;
  --palaui-cut-pill-sm-tail: 8px;
}`}</code>
      </pre>
    </div>
  );
}
