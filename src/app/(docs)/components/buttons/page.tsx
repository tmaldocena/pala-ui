"use client";

import { useState } from "react";
import { ComponentPreview } from "@/components/preview/ComponentPreview";
import {
  ButtonPrimary,
  ButtonSecondary,
  ButtonAccent,
  ButtonSuccess,
  ButtonDestructive,
  ButtonWarning,
  ButtonOutline,
  ButtonGhost,
  ButtonLink,
  ButtonWithIconLeft,
  ButtonWithIconRight,
  ButtonBlock,
  ButtonSplit,
  ButtonIcon,
  ButtonLoading,
  ButtonDisabledPrimary,
  ButtonSmall,
  ButtonLarge,
  ButtonGroup,
  disabledVariants,
} from "pala-ui-core";
import { cn } from "pala-ui-core";

const variants = [
  { comp: ButtonPrimary, label: "Primary" },
  { comp: ButtonSecondary, label: "Secondary" },
  { comp: ButtonAccent, label: "Accent" },
  { comp: ButtonSuccess, label: "Success" },
  { comp: ButtonDestructive, label: "Destructive" },
  { comp: ButtonWarning, label: "Warning" },
  { comp: ButtonOutline, label: "Outline" },
  { comp: ButtonGhost, label: "Ghost" },
] as const;

const semCode = `<button className="pala-cut-pill bg-primary px-4 py-3 font-heading text-[15px] font-bold text-[#1A1A1A] transition-all hover:bg-primary-soft active:scale-[0.98]">
  Get started
</button>`;

const secCode = `<button className="pala-cut-pill border border-border bg-card px-4 py-3 font-heading text-[15px] font-bold text-foreground-primary transition-all hover:bg-surface-bg active:scale-[0.98]">
  Cancel
</button>`;

const accCode = `<button className="pala-cut-pill bg-accent px-4 py-3 font-heading text-[15px] font-bold text-[#1A1A1A] transition-all hover:bg-warning-soft active:scale-[0.98]">
  Highlight
</button>`;

const sucCode = `<button className="pala-cut-pill bg-success px-4 py-3 font-heading text-[15px] font-bold text-white transition-all hover:brightness-95 active:scale-[0.98]">
  Complete
</button>`;

const desCode = `<button className="pala-cut-pill bg-error px-4 py-3 font-heading text-[15px] font-bold text-white transition-all hover:brightness-95 active:scale-[0.98]">
  Delete
</button>`;

const warCode = `<button className="pala-cut-pill bg-warning px-4 py-3 font-heading text-[15px] font-bold text-[#1A1A1A] transition-all hover:brightness-95 active:scale-[0.98]">
  Archive
</button>`;

const outCode = `<button className="pala-cut-pill border-2 border-primary px-4 py-3 font-heading text-[15px] font-bold text-primary transition-all hover:bg-primary/10 active:scale-[0.98]">
  Outline
</button>`;

const ghoCode = `<button className="pala-cut-pill bg-transparent px-4 py-3 font-heading text-[15px] font-bold text-foreground-primary transition-all hover:bg-primary/5 active:scale-[0.98]">
  Ghost
</button>`;

const linCode = `<button className="font-heading text-[15px] font-bold text-primary transition-colors hover:text-primary-soft active:scale-[0.98]">
  Text link
</button>`;

export default function ButtonsPage() {
  const [groupVal, setGroupVal] = useState("Week");

  return (
    <div>
      <h1 className="font-heading text-3xl font-bold text-foreground-primary">Buttons</h1>
      <p className="mt-2 text-foreground-secondary">
        Buttons communicate actions and guide users through flows. PalaUI offers a rich set of
        semantic, style, and layout variants — all sharing the signature asymmetric pill radius.
      </p>

      {/* ───────── All Variants Overview ───────── */}
      <ComponentPreview
        title="All Variants"
        description="Nine button styles — Primary, Secondary, Accent, Success, Destructive, Warning, Outline, Ghost, and Link."
      >
        <div className="flex w-full flex-wrap items-start gap-3">
          {variants.map(({ comp: Comp, label }) => (
            <Comp key={label} />
          ))}
          <ButtonLink />
        </div>
      </ComponentPreview>

      {/* ───────── Semantic: Primary ───────── */}
      <ComponentPreview title="Primary" description="Main call-to-action. Use for primary actions like Get started, Submit, or Save." code={semCode}>
        <ButtonPrimary />
      </ComponentPreview>

      {/* ───────── Semantic: Secondary ───────── */}
      <ComponentPreview title="Secondary" description="Alternative action. Use for Cancel, Back, or Skip alongside a primary button." code={secCode}>
        <ButtonSecondary />
      </ComponentPreview>

      {/* ───────── Semantic: Accent ───────── */}
      <ComponentPreview title="Accent" description="High-emphasis CTA that stands out. Use for upgrades, highlights, or premium actions." code={accCode}>
        <ButtonAccent />
      </ComponentPreview>

      {/* ───────── Semantic: Success ───────── */}
      <ComponentPreview title="Success" description="Confirms a positive outcome. Use for Complete, Approve, or Confirm." code={sucCode}>
        <ButtonSuccess />
      </ComponentPreview>

      {/* ───────── Semantic: Destructive ───────── */}
      <ComponentPreview title="Destructive" description="Irreversible action. Use for Delete, Remove, or Cancel subscription." code={desCode}>
        <ButtonDestructive />
      </ComponentPreview>

      {/* ───────── Semantic: Warning ───────── */}
      <ComponentPreview title="Warning" description="Non-blocking caution. Use for Archive, Suspend, or Dismiss." code={warCode}>
        <ButtonWarning />
      </ComponentPreview>

      {/* ───────── Style: Outline ───────── */}
      <ComponentPreview title="Outline" description="Bordered button for secondary actions that still need emphasis. Works on any background." code={outCode}>
        <ButtonOutline />
      </ComponentPreview>

      {/* ───────── Style: Ghost ───────── */}
      <ComponentPreview title="Ghost" description="Minimal button with no border or fill. Use in tight spaces or toolbars." code={ghoCode}>
        <ButtonGhost />
      </ComponentPreview>

      {/* ───────── Style: Link ───────── */}
      <ComponentPreview title="Link" description="Text-only button that looks like a link. Use for inline actions or navigation." code={linCode}>
        <ButtonLink />
      </ComponentPreview>

      {/* ───────── With Icons ───────── */}
      <ComponentPreview
        title="With Icons"
        description="Buttons with leading or trailing icons for enhanced clarity."
        code={`<button className="flex items-center gap-2 pala-cut-pill bg-primary px-4 py-3 font-heading text-[15px] font-bold text-[#1A1A1A] transition-all hover:bg-primary-soft active:scale-[0.98]">
  <Search size={16} />
  Search
</button>

<button className="flex items-center gap-2 pala-cut-pill bg-primary px-4 py-3 font-heading text-[15px] font-bold text-[#1A1A1A] transition-all hover:bg-primary-soft active:scale-[0.98]">
  Upload
  <Plus size={16} />
</button>`}
      >
        <ButtonWithIconLeft />
        <ButtonWithIconRight />
      </ComponentPreview>

      {/* ───────── Icon Only ───────── */}
      <ComponentPreview
        title="Icon Only"
        description="Compact icon-only button for toolbars, search, or dismiss actions."
        code={`<button className="flex h-11 w-11 items-center justify-center pala-cut border border-border bg-card text-foreground-primary transition-all hover:bg-primary-soft active:scale-[0.95]">
  <Plus size={20} />
</button>`}
      >
        <ButtonIcon />
      </ComponentPreview>

      {/* ───────── Split Button ───────── */}
      <ComponentPreview
        title="Split Button"
        description="Primary action with a companion dropdown for related options."
        code={`<div className="inline-flex overflow-hidden pala-cut-pill">
  <button className="flex items-center gap-2 bg-primary px-4 py-3 text-[15px] font-bold font-heading text-[#1A1A1A] transition-all hover:bg-primary-soft active:scale-[0.98]">
    Publish
  </button>
  <button className="bg-primary px-3 text-[#1A1A1A] transition-all hover:bg-primary-soft active:scale-[0.98]">
    <ChevronDown size={16} />
  </button>
</div>`}
      >
        <ButtonSplit />
      </ComponentPreview>

      {/* ───────── Block / Full Width ───────── */}
      <ComponentPreview
        title="Block / Full Width"
        description="Stretches across the container. Use in mobile layouts, forms, or hero sections."
        code={`<button className="w-full pala-cut-pill bg-primary px-4 py-3 font-heading text-[15px] font-bold text-[#1A1A1A] transition-all hover:bg-primary-soft active:scale-[0.98]">
  Full Width
</button>`}
      >
        <div className="w-full max-w-sm">
          <ButtonBlock />
        </div>
      </ComponentPreview>

      {/* ───────── Loading State ───────── */}
      <ComponentPreview
        title="Loading State"
        description="Disabled state with animated spinner. Use during async operations."
        code={`<button disabled className="flex cursor-not-allowed items-center gap-2 pala-cut-pill bg-primary/60 px-4 py-3 font-heading text-[15px] font-bold text-[#1A1A1A]">
  <LoaderCircle size={16} className="animate-spin-slow" />
  Loading
</button>`}
      >
        <ButtonLoading />
      </ComponentPreview>

      {/* ───────── Disabled States ───────── */}
      <ComponentPreview
        title="Disabled States"
        description="All variants in disabled state. Use `disabled` attribute and reduced opacity."
      >
        <div className="flex w-full flex-wrap items-start gap-3">
          {disabledVariants.map((d) => (
            <button
              key={d.label}
              disabled
              className={cn(
                "cursor-not-allowed pala-cut-pill px-4 py-3 font-heading text-[15px] font-bold",
                d.cls
              )}
            >
              {d.label}
            </button>
          ))}
        </div>
      </ComponentPreview>

      {/* ───────── Sizes ───────── */}
      <ComponentPreview
        title="Sizes"
        description="Three size variants: Small (32px), Default (44px), and Large (56px)."
        code={`<button className="h-8 pala-cut-pill-sm bg-primary px-3 text-[13px]">Small</button>

<button className="pala-cut-pill bg-primary px-4 py-3 text-[15px]">Default</button>

<button className="h-14 pala-cut-pill bg-primary px-5 text-[17px]">Large</button>`}
      >
        <div className="flex items-end gap-3">
          <div>
            <div className="mb-1.5 text-xs text-foreground-secondary">Small</div>
            <ButtonSmall />
          </div>
          <div>
            <div className="mb-1.5 text-xs text-foreground-secondary">Default</div>
            <ButtonPrimary />
          </div>
          <div>
            <div className="mb-1.5 text-xs text-foreground-secondary">Large</div>
            <ButtonLarge />
          </div>
        </div>
      </ComponentPreview>

      {/* ───────── Button Group ───────── */}
      <ComponentPreview
        title="Button Group"
        description="Segmented control for toggling between related options."
        code={`<div className="inline-flex overflow-hidden pala-cut border border-border">
  <button className="bg-primary px-4 py-2 text-[13px] font-bold text-[#1A1A1A]">Week</button>
  <button className="bg-card px-4 py-2 text-[13px] font-bold text-foreground-primary">Month</button>
  <button className="bg-card px-4 py-2 text-[13px] font-bold text-foreground-primary">Year</button>
</div>`}
      >
        <ButtonGroup options={["Week", "Month", "Year"]} value={groupVal} onChange={setGroupVal} />
      </ComponentPreview>

      {/* ───────── Disabled (single) ───────── */}
      <ComponentPreview
        title="Disabled"
        description="A disabled primary button for reference."
        code={`<button disabled className="cursor-not-allowed pala-cut-pill bg-primary/60 px-4 py-3 font-heading text-[15px] font-bold text-[#1A1A1A]">
  Disabled
</button>`}
      >
        <ButtonDisabledPrimary />
      </ComponentPreview>
    </div>
  );
}
