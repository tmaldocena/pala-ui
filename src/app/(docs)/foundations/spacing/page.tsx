import Link from "next/link";

const spaces = [
  { name: "space-1", px: 4, rem: "0.25rem" },
  { name: "space-2", px: 8, rem: "0.5rem" },
  { name: "space-3", px: 12, rem: "0.75rem" },
  { name: "space-4", px: 16, rem: "1rem" },
  { name: "space-5", px: 20, rem: "1.25rem" },
  { name: "space-6", px: 24, rem: "1.5rem" },
  { name: "space-8", px: 32, rem: "2rem" },
  { name: "space-10", px: 40, rem: "2.5rem" },
  { name: "space-12", px: 48, rem: "3rem" },
  { name: "space-16", px: 64, rem: "4rem" },
  { name: "space-20", px: 80, rem: "5rem" },
  { name: "space-24", px: 96, rem: "6rem" },
];

export default function SpacingPage() {
  return (
    <div>
      <h1 className="font-heading text-3xl font-bold text-foreground-primary">Spacing</h1>
      <p className="mt-2 max-w-2xl text-foreground-secondary">
        A consistent 4px rhythm used for padding, gaps, and layout. Sticking to the scale keeps
        screens calm and predictable.
      </p>

      <h2 className="mt-10 font-heading text-2xl font-bold text-foreground-primary">Scale</h2>
      <div className="mt-4 overflow-hidden pala-cut border border-border bg-white">
        {spaces.map((s, i) => (
          <div
            key={s.name}
            className={`flex items-center gap-4 px-4 py-3 ${i > 0 ? "border-t border-border" : ""}`}
          >
            <div className="w-24 font-mono text-xs font-medium text-foreground-primary">{s.name}</div>
            <div className="w-20 font-mono text-xs text-foreground-secondary">{s.px}px</div>
            <div className="w-20 font-mono text-xs text-foreground-secondary">{s.rem}</div>
            <div className="flex flex-1 items-center">
              <div className="h-3.5 pala-cut-sm bg-primary" style={{ width: `${s.px}px` }} />
            </div>
          </div>
        ))}
      </div>

      {/* Rhythm example */}
      <h2 className="mt-12 font-heading text-2xl font-bold text-foreground-primary">Layout rhythm</h2>
      <p className="mt-1 text-sm text-foreground-secondary">
        Most interfaces only need a handful of steps — 8, 12, 16, and 24 cover the majority.
      </p>
      <div className="mt-4 max-w-md pala-cut border border-border bg-white p-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-soft font-heading text-[13px] font-bold text-foreground-primary">
            AR
          </div>
          <div>
            <div className="font-heading text-[15px] font-semibold text-foreground-primary">Design review</div>
            <div className="text-xs text-foreground-secondary">Updated 2h ago</div>
          </div>
        </div>
        <p className="mt-4 text-sm text-foreground-secondary">
          Padding sets the breathing room inside the card; gaps keep related items together.
        </p>
        <div className="mt-4 flex gap-2">
          <span className="rounded-full bg-info-soft px-2.5 py-1 text-[11px] font-medium text-info">Design</span>
          <span className="rounded-full bg-success-soft px-2.5 py-1 text-[11px] font-semibold text-success">On track</span>
        </div>
        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 border-t border-border pt-3 text-[11px] text-foreground-secondary">
          <span className="font-mono">p-6 · 24px</span>
          <span className="font-mono">gap-3 · 12px</span>
          <span className="font-mono">mt-4 · 16px</span>
          <span className="font-mono">gap-2 · 8px</span>
        </div>
      </div>

      {/* Radius pointer */}
      <h2 className="mt-12 font-heading text-2xl font-bold text-foreground-primary">Corner radius</h2>
      <p className="mt-1 text-foreground-secondary">
        PalaUI uses one signature shape instead of a generic radius scale.
      </p>
      <Link
        href="/foundations/shape"
        className="group mt-4 flex items-center gap-4 pala-cut border border-border bg-white p-5 transition-all hover:border-primary hover:shadow-md"
      >
        <span className="h-12 w-12 shrink-0 pala-cut bg-primary/40" />
        <div>
          <h3 className="font-heading text-lg font-semibold text-foreground-primary transition-colors group-hover:text-primary">
            The Pala cut
          </h3>
          <p className="mt-1 text-sm text-foreground-secondary">
            Two diagonal corners rounded, two sharp — see the full scale and rules.
          </p>
        </div>
      </Link>
    </div>
  );
}
