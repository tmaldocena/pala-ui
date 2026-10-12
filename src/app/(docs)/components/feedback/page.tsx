"use client";

import { ComponentPreview } from "@/components/preview/ComponentPreview";
import { Alert, ToastSuccess, SnackbarDefault, SnackbarAction, ModalDialog, LoaderDots, LoaderSpinner, SkeletonBlock } from "pala-ui-core";
import { EmptyState } from "pala-ui-core";
import { useState } from "react";

export default function FeedbackPage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <h1 className="font-heading text-3xl font-bold text-foreground-primary">Feedback</h1>
      <p className="mt-2 text-foreground-secondary">
        Alerts, toasts, snackbars, modals, dialogs, loaders, and empty states.
      </p>

      <ComponentPreview
        title="Alerts"
        description="Contextual banners for info, success, error, and warning messages."
        code={`<div className="pala-cut border border-info bg-info-soft px-4 py-3">
  <span className="text-sm font-semibold">New updates available</span>
</div>
<div className="pala-cut border border-success bg-success-soft px-4 py-3">
  <span className="text-sm font-semibold text-success">Saved successfully!</span>
</div>
<div className="pala-cut border border-error bg-error-soft px-4 py-3">
  <span className="text-sm font-semibold text-error">Something went wrong</span>
</div>`}
      >
        <div className="flex w-full flex-col gap-2">
          <Alert type="info" message="New updates available" />
          <Alert type="success" message="Saved successfully!" />
          <Alert type="error" message="Something went wrong" />
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Toast / Snackbar"
        description="Brief notifications with optional action button."
        code={`<!-- Success Toast -->
<div className="pala-cut bg-success px-4 py-3">
  <span className="text-sm font-semibold text-white">Saved successfully!</span>
</div>

<!-- Dark Snackbar -->
<div className="flex items-center justify-between pala-cut bg-[#000] px-3.5 py-3">
  <span className="text-sm text-white">Changes published!</span>
  <button className="font-heading text-sm font-bold text-accent">View</button>
</div>`}
      >
        <div className="flex w-full flex-col gap-2">
          <ToastSuccess />
          <SnackbarDefault />
          <SnackbarAction />
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Modal / Dialog"
        description="Overlay dialogs for confirmations and success states."
        code={`<div className="fixed inset-0 z-50 flex items-center justify-center bg-[#000]/30">
  <div className="w-80 pala-cut-lg border border-border bg-background p-6">
    <div className="flex flex-col items-center gap-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-error-soft">
        <TriangleAlert size={24} className="text-error" />
      </div>
      <h2 className="text-xl font-bold">Delete item?</h2>
      <p className="text-center text-sm text-foreground-secondary">This will permanently remove...</p>
    </div>
  </div>
</div>`}
      >
        <div className="flex gap-3">
          <button
            onClick={() => setShowModal(true)}
            className="pala-cut bg-primary px-4 py-2.5 text-sm font-semibold transition-all hover:bg-primary-soft"
          >
            Show Confirm Dialog
          </button>
        </div>
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#000]/30 animate-scale-in" onClick={() => setShowModal(false)}>
            <div className="w-80 pala-cut-lg border border-border bg-background p-6 shadow-xl" onClick={(e) => e.stopPropagation()}>
              <ModalDialog type="confirm" onClose={() => setShowModal(false)} />
            </div>
          </div>
        )}
      </ComponentPreview>

      <ComponentPreview
        title="Empty State"
        description="Placeholder when no data is available, with illustration and CTA."
      >
        <div className="w-full max-w-xs">
          <EmptyState />
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Loading States"
        description="Spinners, dots, and skeleton loaders for async content."
        code={`<LoaderCircle size={28} className="animate-spin-slow text-primary" />

<div className="flex gap-1.5">
  <div className="h-2 w-2 animate-bounce rounded-full bg-primary" />
  <div className="h-2 w-2 animate-bounce rounded-full bg-primary [animation-delay:0.15s]" />
  <div className="h-2 w-2 animate-bounce rounded-full bg-primary [animation-delay:0.3s]" />
</div>

<div className="h-4 w-full rounded-full bg-surface-bg">
  <div className="h-4 w-3/5 rounded-full bg-primary-soft animate-pulse-soft" />
</div>`}
      >
        <div className="flex flex-wrap items-center gap-6">
          <LoaderSpinner />
          <LoaderDots />
          <SkeletonBlock />
        </div>
      </ComponentPreview>
    </div>
  );
}
