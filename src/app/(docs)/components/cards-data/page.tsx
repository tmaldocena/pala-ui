"use client";

import { ComponentPreview } from "@/components/preview/ComponentPreview";
import { ProgressBar, Divider, Avatar, Accordion, StatCard, ListingCard, ProfileCard } from "pala-ui-core";

export default function CardsDataPage() {
  return (
    <div>
      <h1 className="font-heading text-3xl font-bold text-foreground-primary">Cards & Data</h1>
      <p className="mt-2 text-foreground-secondary">
        Data display components — cards, progress, avatars, accordions, and dividers.
      </p>

      <ComponentPreview
        title="Progress Bar"
        description="Linear progress indicator for loading, scores, or completion tracking."
        code={`<div className="h-2 w-full rounded-full bg-surface-bg">
  <div className="h-2 rounded-full bg-primary" style={{width: "65%"}} />
</div>`}
      >
        <div className="w-full">
          <ProgressBar value={65} />
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Divider"
        description="Thin horizontal rule for visual separation."
      >
        <Divider />
      </ComponentPreview>

      <ComponentPreview
        title="Avatar"
        description="Circular initials avatar in three sizes."
        code={`<div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-soft font-heading text-[11px] font-bold">TM</div>
<div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent font-heading text-[15px] font-bold">JD</div>
<div className="flex h-14 w-14 items-center justify-center rounded-full bg-success-soft font-heading text-[18px] font-bold text-success">AB</div>`}
      >
        <div className="flex items-center gap-3">
          <Avatar size="sm" initials="TM" />
          <Avatar size="md" initials="JD" />
          <Avatar size="lg" initials="AB" />
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Accordion"
        description="Expandable/collapsible content sections with smooth animation."
        code={`<div className="pala-cut border border-border bg-background">
  <div className="flex items-center justify-between px-3.5 py-3">
    <span className="text-[14px] font-semibold">Overview</span>
    <ChevronUp size={16} />
  </div>
  <div className="border-t border-border bg-info-soft px-3.5 py-3">
    <p className="text-[13px]">Everything you need is organized in one place...</p>
  </div>
</div>`}
      >
        <Accordion />
      </ComponentPreview>

      <ComponentPreview
        title="Stat Card"
        description="Compact metric card for dashboards and summaries."
      >
        <div className="flex gap-3">
          <StatCard label="Total" value="24" />
          <StatCard label="Views" value="142" />
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Listing Card"
        description="Listing card with title, subtitle, badge, and metadata."
      >
        <div className="w-full max-w-sm">
          <ListingCard />
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Profile Card"
        description="Profile card with avatar, description, and status pills."
      >
        <div className="w-full max-w-sm">
          <ProfileCard />
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Tooltip"
        description="Floating labels for additional context on hover."
        code={`<div className="pala-cut-sm bg-[#000] px-3 py-2">
  <span className="text-[12px] text-white">Available weekdays</span>
</div>
<div className="pala-cut-sm border border-info bg-info-soft px-3 py-2">
  <span className="text-[12px]">Expires in 7 days</span>
</div>`}
      >
        <div className="flex gap-3">
          <div className="pala-cut-sm bg-[#000] px-3 py-2">
            <span className="text-xs text-white">Available weekdays</span>
          </div>
          <div className="pala-cut-sm border border-info bg-info-soft px-3 py-2">
            <span className="text-xs text-foreground-primary">Posting expires in 7 days</span>
          </div>
        </div>
      </ComponentPreview>
    </div>
  );
}
