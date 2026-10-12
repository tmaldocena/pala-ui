"use client";

import { ComponentPreview } from "@/components/preview/ComponentPreview";
import { NavItem, NavItemActive, TabBar, Breadcrumbs, Pagination, SidebarNav } from "pala-ui-core";

export default function NavigationPage() {
  return (
    <div>
      <h1 className="font-heading text-3xl font-bold text-foreground-primary">Navigation</h1>
      <p className="mt-2 text-foreground-secondary">
        Navigational components — nav items, tab bars, breadcrumbs, pagination, and sidebar.
      </p>

      <ComponentPreview
        title="Nav Item"
        description="Default navigation item with icon and label."
      >
        <div className="w-64 space-y-2">
          <NavItem />
          <NavItemActive />
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Tab Bar"
        description="Segmented tab bar with active state highlighting."
        code={`<div className="flex pala-cut border border-border bg-background p-1 gap-1">
  <div className="flex-1 pala-cut-sm bg-primary px-3 py-2 text-center text-[13px] font-semibold">All</div>
  <div className="flex-1 pala-cut-sm px-3 py-2 text-center text-[13px] font-medium text-foreground-secondary">Active</div>
  <div className="flex-1 pala-cut-sm px-3 py-2 text-center text-[13px] font-medium text-foreground-secondary">Archived</div>
</div>`}
      >
        <TabBar />
      </ComponentPreview>

      <ComponentPreview
        title="Breadcrumbs"
        description="Hierarchical navigation trail with chevron separators."
      >
        <Breadcrumbs />
      </ComponentPreview>

      <ComponentPreview
        title="Pagination"
        description="Numbered page navigation with previous/next controls."
        code={`<div className="flex items-center justify-center gap-1.5">
  <div className="flex h-9 w-9 items-center justify-center pala-cut-sm">
    <ChevronLeft size={16} />
  </div>
  <div className="flex h-9 w-9 items-center justify-center pala-cut-sm bg-primary text-sm font-semibold">1</div>
  <div className="flex h-9 w-9 items-center justify-center pala-cut-sm text-sm text-foreground-secondary">2</div>
  <div className="flex h-9 w-9 items-center justify-center pala-cut-sm text-sm text-foreground-secondary">3</div>
  <div className="flex h-9 w-9 items-center justify-center pala-cut-sm">
    <ChevronRight size={16} />
  </div>
</div>`}
      >
        <Pagination />
      </ComponentPreview>

      <ComponentPreview
        title="Sidebar"
        description="Vertical navigation sidebar with active state and icon labels."
      >
        <SidebarNav />
      </ComponentPreview>

      <ComponentPreview
        title="Segment Control"
        description="Compact view switcher — Week, Month, Year."
        code={`<div className="flex pala-cut-sm border border-border bg-background p-[3px] gap-0.5">
  <div className="flex-1 pala-cut-sm bg-primary px-3 py-2 text-center text-[13px] font-semibold">Week</div>
  <div className="flex-1 pala-cut-sm px-3 py-2 text-center text-[13px] font-medium text-foreground-secondary">Month</div>
  <div className="flex-1 pala-cut-sm px-3 py-2 text-center text-[13px] font-medium text-foreground-secondary">Year</div>
</div>`}
      >
        <div className="flex w-full max-w-xs pala-cut-sm border border-border bg-background p-[3px]">
          {["Week", "Month", "Year"].map((label, i) => (
            <button
              key={label}
              className={`flex-1 pala-cut-sm px-3 py-2 text-center text-[13px] transition-colors ${
                i === 0
                  ? "bg-primary font-semibold text-[#1A1A1A]"
                  : "font-medium text-foreground-secondary hover:text-foreground-primary"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </ComponentPreview>
    </div>
  );
}
