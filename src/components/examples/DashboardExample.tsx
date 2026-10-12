"use client";

import {
  Breadcrumbs,
  ButtonPrimary,
  ListingCard,
  ProgressBar,
  ScheduleCard,
  SidebarNav,
  StatCard,
  StepTracker,
} from "pala-ui-core";

export const dashboardCode = `<div className="flex gap-5">
  <SidebarNav />

  <div className="flex-1 space-y-5">
    <div className="flex items-center justify-between">
      <div>
        <Breadcrumbs items={[{ label: "Home" }, { label: "Workspace", active: true }]} />
        <h2 className="mt-2 font-heading text-xl font-bold">Dashboard</h2>
      </div>
      <ButtonPrimary>New project</ButtonPrimary>
    </div>

    <div className="grid grid-cols-4 gap-3">
      <StatCard label="Projects" value="24" />
      <StatCard label="Team" value="8" />
      <StatCard label="Reviews" value="12" />
      <StatCard label="On track" value="92%" />
    </div>

    <div className="pala-cut border border-border bg-white p-4">
      <ProgressBar value={68} />
    </div>

    <ListingCard
      title="Website redesign"
      subtitle="Northwind Co."
      badge="In review"
      description="Refreshing the marketing site with a new visual system."
      meta={[{ label: "Updated 2d ago" }, { label: "4 members" }]}
    />

    <div className="grid gap-3 md:grid-cols-2">
      <StepTracker
        steps={[
          { label: "Kickoff complete", detail: "Yesterday", status: "complete" },
          { label: "Design review", detail: "Today", status: "current" },
          { label: "Handoff", status: "pending" },
        ]}
      />
      <ScheduleCard name="Team sync" initials="TS" status="Today" date="Thu, Jun 20 — 2:00 PM" />
    </div>
  </div>
</div>`;

export function DashboardExample() {
  return (
    <div className="flex flex-col gap-5 md:flex-row">
      <div className="hidden shrink-0 md:block">
        <SidebarNav />
      </div>

      <div className="flex-1 space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <Breadcrumbs items={[{ label: "Home" }, { label: "Workspace", active: true }]} />
            <h2 className="mt-2 font-heading text-xl font-bold text-foreground-primary">Dashboard</h2>
          </div>
          <ButtonPrimary>New project</ButtonPrimary>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          <StatCard label="Projects" value="24" className="max-w-none" />
          <StatCard label="Team" value="8" className="max-w-none" />
          <StatCard label="Reviews" value="12" className="max-w-none" />
          <StatCard label="On track" value="92%" className="max-w-none" />
        </div>

        <div className="pala-cut border border-border bg-white p-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-foreground-primary">Sprint progress</span>
            <span className="text-xs font-medium text-foreground-secondary">68%</span>
          </div>
          <div className="mt-3">
            <ProgressBar value={68} />
          </div>
        </div>

        <div>
          <h3 className="mb-3 font-heading text-base font-bold text-foreground-primary">Recent projects</h3>
          <div className="grid gap-3 md:grid-cols-2">
            <ListingCard
              title="Website redesign"
              subtitle="Northwind Co."
              badge="In review"
              description="Refreshing the marketing site with a new visual system."
              meta={[{ label: "Updated 2d ago" }, { label: "4 members" }]}
            />
            <ListingCard
              title="Mobile app"
              subtitle="Acme Studio"
              badge="New"
              description="A companion app for the desktop experience."
              meta={[{ label: "Updated 5d ago" }, { label: "3 members" }]}
            />
          </div>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          <div>
            <h3 className="mb-3 font-heading text-base font-bold text-foreground-primary">Activity</h3>
            <StepTracker
              steps={[
                { label: "Kickoff complete", detail: "Yesterday", status: "complete" },
                { label: "Design review", detail: "Today", status: "current" },
                { label: "Handoff", status: "pending" },
              ]}
            />
          </div>
          <div>
            <h3 className="mb-3 font-heading text-base font-bold text-foreground-primary">Upcoming</h3>
            <ScheduleCard
              name="Team sync"
              initials="TS"
              status="Today"
              date="Thu, Jun 20 — 2:00 PM"
              location="Meeting Room 2, Level 3"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
