import { CopyButton } from "@/components/foundations/CopyButton";

const styles = [
  { name: "Display", class: "font-heading text-5xl font-bold", size: "48px", weight: "700", leading: "48px", usage: "Hero titles" },
  { name: "Heading 1", class: "font-heading text-4xl font-bold", size: "36px", weight: "700", leading: "40px", usage: "Page titles" },
  { name: "Heading 2", class: "font-heading text-2xl font-bold", size: "24px", weight: "700", leading: "32px", usage: "Section headers" },
  { name: "Heading 3", class: "font-heading text-xl font-semibold", size: "20px", weight: "600", leading: "28px", usage: "Card titles" },
  { name: "Body", class: "font-body text-base", size: "16px", weight: "400", leading: "24px", usage: "Paragraphs, descriptions" },
  { name: "Body Small", class: "font-body text-sm", size: "14px", weight: "400", leading: "20px", usage: "Dense UI, tables" },
  { name: "Caption", class: "font-body text-sm text-foreground-secondary", size: "14px", weight: "400", leading: "20px", usage: "Metadata, timestamps" },
  { name: "Overline", class: "text-xs font-semibold uppercase tracking-wider text-foreground-secondary", size: "12px", weight: "600", leading: "16px", usage: "Eyebrow labels" },
  { name: "Link", class: "font-heading text-base font-semibold text-primary underline", size: "16px", weight: "600", leading: "24px", usage: "Inline navigation" },
];

const weights = ["400", "500", "600", "700"];

export default function TypographyPage() {
  return (
    <div>
      <h1 className="font-heading text-3xl font-bold text-foreground-primary">Typography</h1>
      <p className="mt-2 max-w-2xl text-foreground-secondary">
        Funnel Sans for headings, Inter for body text. Clean, approachable, and highly readable.
      </p>

      {/* Type scale */}
      <h2 className="mt-10 font-heading text-2xl font-bold text-foreground-primary">Type scale</h2>
      <div className="mt-4 space-y-3">
        {styles.map((s) => (
          <div key={s.name} className="flex flex-col gap-3 pala-cut border border-border bg-white p-5 md:flex-row md:items-center md:justify-between">
            <div className={`${s.class} min-w-0 truncate`}>{s.name}</div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-foreground-secondary">
              <span className="font-semibold text-foreground-primary">{s.name}</span>
              <span>{s.size}</span>
              <span>W {s.weight}</span>
              <span>LH {s.leading}</span>
              <span className="hidden sm:inline">{s.usage}</span>
              <CopyButton value={s.class} label="class" />
            </div>
          </div>
        ))}
      </div>

      {/* Font pairing */}
      <h2 className="mt-12 font-heading text-2xl font-bold text-foreground-primary">Font pairing</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div className="pala-cut border border-border bg-white p-5">
          <div className="mb-2 flex items-center gap-2">
            <div className="h-6 w-6 pala-cut-sm bg-primary" />
            <span className="font-heading text-sm font-bold">Funnel Sans</span>
            <span className="ml-auto font-mono text-[11px] text-foreground-secondary">--font-heading</span>
          </div>
          <p className="font-heading text-2xl leading-relaxed">The quick brown fox jumps over the lazy dog.</p>
          <div className="mt-2 text-xs text-foreground-secondary">Used for: headings, buttons, emphasis</div>
        </div>
        <div className="pala-cut border border-border bg-white p-5">
          <div className="mb-2 flex items-center gap-2">
            <div className="h-6 w-6 pala-cut-sm bg-accent" />
            <span className="font-heading text-sm font-bold">Inter</span>
            <span className="ml-auto font-mono text-[11px] text-foreground-secondary">--font-body</span>
          </div>
          <p className="font-body text-2xl leading-relaxed">The quick brown fox jumps over the lazy dog.</p>
          <div className="mt-2 text-xs text-foreground-secondary">Used for: body text, labels, captions</div>
        </div>
      </div>

      {/* Weights */}
      <h2 className="mt-12 font-heading text-2xl font-bold text-foreground-primary">Weights</h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {["font-heading", "font-body"].map((family) => (
          <div key={family} className="pala-cut border border-border bg-white p-5">
            <div className="mb-2 font-mono text-[11px] text-foreground-secondary">{family === "font-heading" ? "Funnel Sans" : "Inter"}</div>
            <div className="space-y-1">
              {weights.map((w) => (
                <div key={w} className={`${family} text-xl`} style={{ fontWeight: Number(w) }}>
                  <span className="mr-3 text-xs text-foreground-secondary">{w}</span>
                  The quick brown fox
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Tokens */}
      <h2 className="mt-12 font-heading text-2xl font-bold text-foreground-primary">Font tokens</h2>
      <div className="mt-4 overflow-x-auto pala-cut border border-border bg-white">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="px-4 py-3 text-left font-medium text-foreground-secondary">Token</th>
              <th className="px-4 py-3 text-left font-medium text-foreground-secondary">Value</th>
              <th className="px-4 py-3 text-left font-medium text-foreground-secondary">Tailwind</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border">
              <td className="px-4 py-3 font-mono text-xs">--font-heading</td>
              <td className="px-4 py-3 text-foreground-secondary">&quot;Funnel Sans&quot;, sans-serif</td>
              <td className="px-4 py-3 font-mono text-xs">font-heading</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">--font-body</td>
              <td className="px-4 py-3 text-foreground-secondary">&quot;Inter&quot;, sans-serif</td>
              <td className="px-4 py-3 font-mono text-xs">font-body</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Hierarchy */}
      <h2 className="mt-12 font-heading text-2xl font-bold text-foreground-primary">In practice</h2>
      <div className="mt-4 max-w-md pala-cut border border-border bg-white p-6">
        <div className="text-xs font-semibold uppercase tracking-wider text-foreground-secondary">Project update</div>
        <h3 className="mt-1 font-heading text-xl font-semibold text-foreground-primary">Design review complete</h3>
        <p className="mt-2 text-base text-foreground-secondary">
          The team finished the design review and everything is on track for the next milestone.
        </p>
        <div className="mt-3 text-sm text-foreground-secondary">Updated 2 hours ago</div>
      </div>
    </div>
  );
}
