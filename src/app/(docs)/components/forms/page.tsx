"use client";

import { ComponentPreview } from "@/components/preview/ComponentPreview";
import { InputField, TextareaField, ToggleSwitch, RadioGroup, CheckboxInput, DropdownTrigger, DropdownMenu, FileUpload, DatePickerTrigger } from "pala-ui-core";

export default function FormsPage() {
  return (
    <div>
      <h1 className="font-heading text-3xl font-bold text-foreground-primary">Forms</h1>
      <p className="mt-2 text-foreground-secondary">
        Inputs, textareas, toggles, radios, checkboxes, dropdowns, file uploads, and date pickers.
      </p>

      <ComponentPreview
        title="Text Input"
        description="Standard text input with label and icon adornment."
        code={`<label className="mb-1.5 block text-[13px] font-semibold">Full name</label>
<div className="flex items-center justify-between pala-cut border border-primary-soft bg-info-soft px-3 py-2.5">
  <input className="w-full bg-transparent text-sm outline-none" placeholder="Enter your name" />
  <Search size={16} className="text-foreground-secondary" />
</div>`}
      >
        <div className="w-60">
          <InputField />
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Textarea"
        description="Multi-line text input for messages, descriptions, or notes."
      >
        <div className="w-60">
          <TextareaField />
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Toggle"
        description="On/off switch for binary settings."
        code={`<button className="relative h-7 w-[52px] rounded-full p-1 transition-colors bg-primary">
  <div className="h-[22px] w-[22px] rounded-full bg-white translate-x-6" />
</button>`}
      >
        <ToggleSwitch />
      </ComponentPreview>

      <ComponentPreview
        title="Radio Button"
        description="Single-selection from a set of options."
        code={`<button className="flex items-center gap-2">
  <div className="flex h-[22px] w-[22px] items-center justify-center rounded-full border-2 border-primary bg-primary">
    <div className="h-[10px] w-[10px] rounded-full bg-white" />
  </div>
  Personal
</button>`}
      >
        <RadioGroup />
      </ComponentPreview>

      <ComponentPreview
        title="Checkbox"
        description="Multi-selection control with asymmetric corners."
      >
        <CheckboxInput />
      </ComponentPreview>

      <ComponentPreview
        title="Dropdown"
        description="Menu trigger and dropdown list with selection state."
        code={`<!-- Trigger -->
<div className="flex w-40 items-center justify-between pala-cut border border-border bg-background px-3.5 py-2.5">
  <span className="text-sm text-foreground-secondary">Select category</span>
  <ChevronDown size={16} />
</div>

<!-- Menu -->
<div className="w-40 pala-cut border border-border bg-background">
  <button className="w-full px-3.5 py-2.5 text-left text-sm bg-info-soft">Design</button>
  <button className="w-full px-3.5 py-2.5 text-left text-sm">Engineering</button>
  <button className="w-full px-3.5 py-2.5 text-left text-sm">Marketing</button>
  <div className="border-t"><button className="w-full px-3.5 py-2.5 text-left text-sm font-semibold text-primary">+ Add new</button></div>
</div>`}
      >
        <div className="flex gap-4">
          <DropdownTrigger />
          <DropdownMenu />
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="File Upload"
        description="Dropzone area for file uploads with visual feedback."
      >
        <FileUpload />
      </ComponentPreview>

      <ComponentPreview
        title="Date Picker"
        description="Trigger button for date selection with calendar overlay."
      >
        <DatePickerTrigger />
      </ComponentPreview>

      <ComponentPreview
        title="Inline Error"
        description="Error state with message for validation feedback."
        code={`<div className="pala-cut border border-error bg-background px-3.5 py-2.5 flex items-center justify-between">
  <span className="text-sm">john@example</span>
  <CircleAlert size={16} className="text-error" />
</div>
<div className="flex items-center gap-1.5 mt-1.5">
  <CircleAlert size={12} className="text-error" />
  <span className="text-xs text-error">Please enter a valid email address</span>
</div>`}
      >
        <div className="w-60 space-y-1.5">
          <div className="flex items-center justify-between pala-cut border border-error bg-background px-3.5 py-2.5">
            <span className="text-sm text-foreground-primary">john@example</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E26D5C" strokeWidth="2">
              <circle cx="12" cy="12" r="10" /><path d="M12 8v4M12 16h.01" />
            </svg>
          </div>
          <div className="flex items-center gap-1.5">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#E26D5C" strokeWidth="2">
              <circle cx="12" cy="12" r="10" /><path d="M12 8v4M12 16h.01" />
            </svg>
            <span className="text-xs text-error">Please enter a valid email address</span>
          </div>
        </div>
      </ComponentPreview>
    </div>
  );
}
