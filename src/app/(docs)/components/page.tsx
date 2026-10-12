import Link from "next/link";

const categories = [
  { title: "Buttons", href: "/components/buttons", count: 20, desc: "Primary, Secondary, Accent, Outline, Ghost, sizes, loading and grouped actions" },
  { title: "Forms", href: "/components/forms", count: 9, desc: "Inputs, Textarea, Select, Checkbox, Radio, Toggle, DatePicker, File upload" },
  { title: "Navigation", href: "/components/navigation", count: 6, desc: "Nav items, Tab bars, Breadcrumbs, Pagination, Sidebar" },
  { title: "Cards & Data", href: "/components/cards-data", count: 7, desc: "Listing card, Profile card, Stat card, Accordion, Progress, Avatar" },
  { title: "Feedback", href: "/components/feedback", count: 8, desc: "Alerts, Toast, Snackbar, Modal, Empty state, Skeleton, Loader" },
  { title: "Patterns", href: "/components/patterns", count: 5, desc: "Step tracker, Schedule card, Tag chips, Rating, Empty state" },
];

export default function ComponentsPage() {
  return (
    <div>
      <h1 className="font-heading text-3xl font-bold text-foreground-primary">Components</h1>
      <p className="mt-2 text-foreground-secondary">
        A growing set of reusable components organized into categories. Each component includes live previews, variant tables, and code snippets.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {categories.map((cat) => (
          <Link
            key={cat.href}
            href={cat.href}
            className="group pala-cut border border-border bg-white p-5 transition-all hover:border-primary hover:shadow-md"
          >
            <div className="flex items-center justify-between">
              <h2 className="font-heading text-lg font-semibold text-foreground-primary group-hover:text-primary transition-colors">
                {cat.title}
              </h2>
              <span className="rounded-full bg-primary-soft px-2.5 py-0.5 text-xs font-semibold text-foreground-primary">
                {cat.count}
              </span>
            </div>
            <p className="mt-1 text-sm text-foreground-secondary">{cat.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
