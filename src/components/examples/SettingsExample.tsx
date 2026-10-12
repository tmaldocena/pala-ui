"use client";

import {
  ButtonGhost,
  ButtonPrimary,
  CheckboxInput,
  DropdownMenu,
  DropdownTrigger,
  InputField,
  RadioGroup,
  TextareaField,
  ToggleSwitch,
} from "pala-ui-core";

function Section({ title, description, children }: { title: string; description?: string; children: React.ReactNode }) {
  return (
    <section className="pala-cut border border-border bg-white p-5">
      <h3 className="font-heading text-sm font-bold text-foreground-primary">{title}</h3>
      {description && <p className="mt-0.5 text-xs text-foreground-secondary">{description}</p>}
      <div className="mt-4">{children}</div>
    </section>
  );
}

function ToggleRow({ title, description, defaultOn }: { title: string; description: string; defaultOn?: boolean }) {
  return (
    <div className="flex items-center justify-between gap-4 border-t border-border py-3 first:border-t-0 first:pt-0 last:pb-0">
      <div>
        <div className="text-sm font-semibold text-foreground-primary">{title}</div>
        <div className="text-xs text-foreground-secondary">{description}</div>
      </div>
      <ToggleSwitch defaultOn={defaultOn} />
    </div>
  );
}

export const settingsCode = `<div className="mx-auto max-w-xl space-y-4">
  <InputField label="Display name" icon={false} variant="default" placeholder="Jordan Blake" />
  <InputField label="Email" type="email" icon={false} variant="default" placeholder="jordan@acme.com" />
  <TextareaField label="Bio" placeholder="Tell us a little about yourself..." />

  <ToggleSwitch defaultOn />

  <RadioGroup
    options={[
      { value: "free", label: "Free" },
      { value: "pro", label: "Pro" },
      { value: "team", label: "Team" },
    ]}
    defaultValue="pro"
  />

  <DropdownTrigger placeholder="Select a team" />
  <DropdownMenu options={["Design", "Engineering", "Marketing"]} />

  <CheckboxInput label="Sync settings across devices" />

  <div className="flex justify-end gap-3">
    <ButtonGhost>Cancel</ButtonGhost>
    <ButtonPrimary>Save changes</ButtonPrimary>
  </div>
</div>`;

export function SettingsExample() {
  return (
    <div className="mx-auto max-w-xl space-y-4">
      <div>
        <h2 className="font-heading text-xl font-bold text-foreground-primary">Settings</h2>
        <p className="text-sm text-foreground-secondary">Manage your profile and preferences.</p>
      </div>

      <Section title="Profile">
        <div className="grid gap-3 sm:grid-cols-2">
          <InputField label="Display name" icon={false} variant="default" placeholder="Jordan Blake" />
          <InputField label="Email" type="email" icon={false} variant="default" placeholder="jordan@acme.com" />
        </div>
      </Section>

      <Section title="About" description="Shown on your public profile.">
        <TextareaField label="Bio" rows={3} placeholder="Tell us a little about yourself..." />
      </Section>

      <Section title="Notifications">
        <ToggleRow title="Email notifications" description="Weekly summary and mentions." defaultOn />
        <ToggleRow title="Product updates" description="News about new features." />
        <ToggleRow title="Public profile" description="Let others find and follow you." defaultOn />
      </Section>

      <Section title="Plan">
        <RadioGroup
          options={[
            { value: "free", label: "Free" },
            { value: "pro", label: "Pro" },
            { value: "team", label: "Team" },
          ]}
          defaultValue="pro"
        />
      </Section>

      <Section title="Workspace">
        <div className="flex flex-wrap items-start gap-3">
          <DropdownTrigger placeholder="Select a team" />
          <DropdownMenu options={["Design", "Engineering", "Marketing"]} />
        </div>
      </Section>

      <div className="px-1">
        <CheckboxInput label="Sync settings across devices" />
      </div>

      <div className="flex justify-end gap-3">
        <ButtonGhost>Cancel</ButtonGhost>
        <ButtonPrimary>Save changes</ButtonPrimary>
      </div>
    </div>
  );
}
