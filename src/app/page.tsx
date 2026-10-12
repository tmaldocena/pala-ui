import Link from "next/link";
import { Funnel_Sans, Inter } from "next/font/google";
import { PaletteSwatches } from "@/components/ui/PaletteSwatches";
import { NpmInstallSnippet } from "@/components/ui/NpmInstallSnippet";
import { ExampleFrame } from "@/components/preview/ExampleFrame";
import { DashboardExample } from "@/components/examples/DashboardExample";
import { SignInExample } from "@/components/examples/SignInExample";
import { CheckoutExample } from "@/components/examples/CheckoutExample";

const funnelSans = Funnel_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

export default function LandingPage() {
  return (
    <div className={`${funnelSans.variable} ${inter.variable} font-body text-foreground-primary`}>
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between border-b border-white/10 bg-[#000]/40 px-6 py-4 backdrop-blur-md md:px-10">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center pala-cut-sm bg-primary text-sm font-bold text-[#1A1A1A] font-heading">
            P
          </div>
          <span className="font-heading text-lg font-bold text-white">PalaUI</span>
        </div>
        <Link
          href="/getting-started"
          className="pala-cut-pill bg-primary px-5 py-2.5 font-heading text-sm font-bold text-[#1A1A1A] transition-all hover:bg-primary-soft"
        >
          View Docs
        </Link>
      </nav>

      {/* Hero */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24 text-center">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/bg-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#000]/60 via-[#000]/40 to-[#000]/75" />

        <div className="relative z-10 animate-slide-up max-w-3xl">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center pala-cut-lg bg-primary text-2xl font-bold text-[#1A1A1A] font-heading">
            P
          </div>
          <h1 className="font-heading text-5xl font-bold leading-tight text-white md:text-7xl">
            A warm UI kit
            <span className="text-primary block">for any project</span>
          </h1>
          <p className="mt-6 text-lg text-white/70 md:text-xl">
            PalaUI is a themable React component library built around one signature shape —
            the Pala cut. Drop it into any product and it feels like home.
          </p>

          <NpmInstallSnippet />

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/getting-started"
              className="pala-cut-pill bg-primary px-8 py-4 font-heading text-base font-bold text-[#1A1A1A] transition-all hover:bg-primary-soft hover:shadow-lg active:scale-[0.97]"
            >
              Browse Documentation
            </Link>
            <Link
              href="/components"
              className="pala-cut-pill border border-white/20 bg-white/10 px-8 py-4 font-heading text-base font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20 active:scale-[0.97]"
            >
              Explore Components
            </Link>
          </div>
        </div>

        <div className="relative z-10">
          <PaletteSwatches />
        </div>
      </section>

      {/* Design Philosophy */}
      <section id="features" className="border-t border-border px-6 py-24 md:px-10">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-heading text-3xl font-bold md:text-4xl">
            One shape, endless products
          </h2>
          <p className="mt-4 text-center text-foreground-secondary">
            Every component shares the same DNA, so the whole kit feels consistent by default.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "The Pala cut",
                desc: "Two diagonal corners rounded, two sharp — a single rule that gives every screen a recognizable, friendly rhythm.",
                gradient: "from-primary/20 to-primary/5",
              },
              {
                title: "Themable by design",
                desc: "Nine ready-made palettes and full token overrides. Rebrand the whole kit in minutes, not days.",
                gradient: "from-accent/20 to-accent/5",
              },
              {
                title: "Mobile first",
                desc: "Touch-friendly sizes, compact layouts, and components that scale cleanly from phone to desktop.",
                gradient: "from-success/20 to-success/5",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group pala-cut-lg border border-border bg-card p-8 transition-all hover:shadow-xl"
              >
                <div className={`mb-4 h-2 w-12 rounded-full bg-gradient-to-r ${item.gradient}`} />
                <h3 className="font-heading text-xl font-bold text-foreground-primary group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground-secondary">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-t border-border bg-card px-6 py-20 md:px-10">
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { number: "55", label: "Components" },
              { number: "20", label: "Color Tokens" },
              { number: "7", label: "Font Styles" },
              { number: "9", label: "Themes" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-heading text-4xl font-bold text-foreground-primary md:text-5xl">
                  {stat.number}
                </div>
                <div className="mt-1 text-sm text-foreground-secondary">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Component Preview */}
      <section className="border-t border-border px-6 py-24 md:px-10">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-heading text-3xl font-bold md:text-4xl">
            Components that work together
          </h2>
          <p className="mt-4 text-center text-foreground-secondary">
            From buttons to step trackers — every component is built on the same design language.
          </p>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {/* Buttons */}
            <div className="pala-cut border border-border bg-card p-6 transition-all hover:shadow-lg">
              <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-foreground-secondary">Buttons</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                <div className="pala-cut-pill-sm bg-primary px-4 py-2.5 text-sm font-bold font-heading text-[#1A1A1A]">Primary</div>
                <div className="pala-cut-pill-sm border border-info bg-surface-primary px-4 py-2.5 text-sm font-bold font-heading">Ghost</div>
                <div className="flex h-10 w-10 items-center justify-center pala-cut border border-border">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14"/></svg>
                </div>
              </div>
            </div>
            {/* Forms */}
            <div className="pala-cut border border-border bg-card p-6 transition-all hover:shadow-lg">
              <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-foreground-secondary">Forms</h3>
              <div className="mt-4 space-y-2">
                <div className="pala-cut border border-border px-3 py-2 text-sm text-foreground-secondary">Full name</div>
                <div className="flex gap-2">
                  <div className="h-6 w-[44px] rounded-full bg-primary p-0.5">
                    <div className="h-[22px] w-[22px] translate-x-5 rounded-full bg-white" />
                  </div>
                  <div className="flex h-[22px] w-[22px] items-center justify-center rounded-full border-2 border-primary bg-primary">
                    <div className="h-[10px] w-[10px] rounded-full bg-white" />
                  </div>
                </div>
              </div>
            </div>
            {/* Cards */}
            <div className="pala-cut border border-border bg-card p-6 transition-all hover:shadow-lg">
              <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-foreground-secondary">Cards</h3>
              <div className="mt-4 space-y-1.5">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-primary-soft flex items-center justify-center font-heading text-[10px] font-bold">AR</div>
                  <div>
                    <div className="text-xs font-semibold">Design audit</div>
                    <div className="text-[10px] text-foreground-secondary">Acme Studio</div>
                  </div>
                  <div className="ml-auto pala-cut-pill-sm bg-accent px-2 py-1 text-[10px] font-bold">New</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/components"
              className="inline-flex items-center gap-2 pala-cut-pill bg-foreground-primary px-8 py-4 font-heading text-base font-bold text-background transition-all hover:bg-foreground-primary/80 active:scale-[0.97]"
            >
              View All Components
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Examples */}
      <section className="border-t border-border px-6 py-24 md:px-10">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-heading text-3xl font-bold md:text-4xl">
            Real screens, ready to use
          </h2>
          <p className="mt-4 text-center text-foreground-secondary">
            Full layouts and flows composed entirely from PalaUI components.
          </p>

          <div className="mt-12 space-y-8">
            <div>
              <div className="mb-3 flex items-center justify-between">
                <h3 className="font-heading text-lg font-bold text-foreground-primary">Dashboard</h3>
                <span className="text-xs font-medium text-foreground-secondary">Workspace overview</span>
              </div>
              <ExampleFrame url="app.example.com/dashboard">
                <DashboardExample />
              </ExampleFrame>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="font-heading text-lg font-bold text-foreground-primary">Sign in</h3>
                  <span className="text-xs font-medium text-foreground-secondary">Authentication</span>
                </div>
                <ExampleFrame url="app.example.com/sign-in">
                  <SignInExample />
                </ExampleFrame>
              </div>
              <div>
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="font-heading text-lg font-bold text-foreground-primary">Checkout</h3>
                  <span className="text-xs font-medium text-foreground-secondary">Payment flow</span>
                </div>
                <ExampleFrame url="app.example.com/checkout">
                  <CheckoutExample />
                </ExampleFrame>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/examples"
              className="inline-flex items-center gap-2 pala-cut-pill border border-border bg-background px-8 py-4 font-heading text-base font-bold text-foreground-primary transition-all hover:bg-surface-primary active:scale-[0.97]"
            >
              Explore all examples
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Palette Section */}
      <section className="border-t border-border px-6 py-20 md:px-10 bg-card">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-heading text-3xl font-bold">Color palette</h2>
          <p className="mt-4 text-center text-foreground-secondary">
            Every palette comes with a full set of semantic tokens.
          </p>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 md:grid-cols-4">
            {[
              { name: "Primary", token: "primary" },
              { name: "Primary Soft", token: "primary-soft" },
              { name: "Accent", token: "accent" },
              { name: "Success", token: "success" },
              { name: "Error", token: "error" },
              { name: "Info", token: "info" },
              { name: "Foreground", token: "foreground-primary" },
              { name: "Background", token: "background" },
            ].map((color) => (
              <div
                key={color.token}
                className="flex flex-col pala-cut border border-border overflow-hidden"
              >
                <div className="h-20" style={{ background: `var(--palaui-${color.token}, transparent)` }} />
                <div className="flex items-center justify-between px-3 py-2 bg-card">
                  <span className="text-xs font-medium text-foreground-primary">{color.name}</span>
                  <span className="font-mono text-[10px] text-foreground-secondary">{color.token}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border px-6 py-24 md:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-4xl font-bold md:text-5xl">
            Ready to build?
          </h2>
          <p className="mt-4 text-lg text-foreground-secondary">
            Dive into the documentation to explore every component with live previews, code snippets, and usage guides.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/getting-started"
              className="pala-cut-pill bg-primary px-10 py-4 font-heading text-base font-bold text-[#1A1A1A] transition-all hover:bg-primary-soft hover:shadow-lg active:scale-[0.97]"
            >
              Go to Documentation
            </Link>
            <Link
              href="/examples"
              className="pala-cut-pill border border-border bg-background px-10 py-4 font-heading text-base font-bold text-foreground-primary transition-all hover:bg-surface-primary active:scale-[0.97]"
            >
              View Examples
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-8 md:px-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 text-center text-sm text-foreground-secondary md:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center pala-cut-sm bg-primary text-[10px] font-bold text-[#1A1A1A] font-heading">P</div>
            <span>PalaUI UI Library</span>
          </div>
          <div className="flex gap-6">
            <Link href="/foundations" className="hover:text-foreground-primary transition-colors">Foundations</Link>
            <Link href="/components" className="hover:text-foreground-primary transition-colors">Components</Link>
            <Link href="/examples" className="hover:text-foreground-primary transition-colors">Examples</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
