"use client";

import { ComponentPreview } from "@/components/preview/ComponentPreview";
import { TagChips, Rating, StepTracker, ScheduleCard, EmptyState } from "pala-ui-core";

export default function PatternsPage() {
  return (
    <div>
      <h1 className="font-heading text-3xl font-bold text-foreground-primary">Patterns</h1>
      <p className="mt-2 text-foreground-secondary">
        Composable interface patterns — tag chips, ratings, step trackers, schedule cards, and empty states.
      </p>

      <ComponentPreview
        title="Tag Chips"
        description="Compact tags for labels, categories, or filters. Three variants: default (soft), active (filled), and outline (with remove)."
        code={`<!-- Default -->
<div className="rounded-full bg-info-soft px-2.5 py-1.5 text-xs font-medium text-info">Design</div>

<!-- Active -->
<div className="rounded-full bg-primary px-2.5 py-1.5 text-xs font-medium text-[#1A1A1A]">Engineering</div>

<!-- Outline with remove -->
<div className="flex items-center gap-1.5 rounded-full border border-border px-2.5 py-1.5 text-xs text-foreground-secondary">
  <X size={12} /> Marketing
</div>`}
      >
        <TagChips />
      </ComponentPreview>

      <ComponentPreview
        title="Rating"
        description="Star rating display with numeric score. Stars use accent color for filled positions."
        code={`<div className="flex items-center gap-1.5">
  {[1,2,3,4,5].map(i => (
    <Star key={i} size={18} className={i <= 4 ? "fill-accent text-accent" : "text-surface-bg"} />
  ))}
  <span className="ml-1 text-[13px] font-semibold">4.0</span>
</div>`}
      >
        <Rating value={4} />
      </ComponentPreview>

      <ComponentPreview
        title="Step Tracker"
        description="Multi-step progress indicator showing completed, current, and pending stages."
        code={`<div className="pala-cut border border-border bg-background">
  <div className="flex items-center gap-3 px-3.5 py-3">
    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-success">
      <Check size={14} className="text-white" />
    </div>
    <div>
      <div className="text-sm font-semibold text-success">Draft created</div>
      <div className="text-xs text-foreground-secondary">2 days ago</div>
    </div>
  </div>
  <div className="border-t border-border flex items-center gap-3 px-3.5 py-3">
    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary">
      <span className="text-xs font-bold text-white">2</span>
    </div>
    <div>
      <div className="text-sm font-semibold">In review</div>
      <div className="text-xs text-foreground-secondary">Updated today</div>
    </div>
  </div>
</div>`}
      >
        <div className="w-full max-w-sm">
          <StepTracker />
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Schedule Card"
        description="Schedule detail card with avatar, confirmation status, date, and location."
      >
        <div className="w-full max-w-sm">
          <ScheduleCard />
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Empty State"
        description="Placeholder view when a list or search returns no results, with a CTA."
      >
        <div className="w-full max-w-xs">
          <EmptyState />
        </div>
      </ComponentPreview>
    </div>
  );
}
