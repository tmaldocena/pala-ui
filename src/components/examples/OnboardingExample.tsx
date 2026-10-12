"use client";

import {
  ButtonGhost,
  ButtonPrimary,
  InputField,
  ProgressBar,
  RadioGroup,
  StepTracker,
  TagChips,
} from "pala-ui-core";

export const onboardingCode = `<div className="mx-auto max-w-lg space-y-5">
  <ProgressBar value={50} />

  <div className="grid gap-5 md:grid-cols-2">
    <StepTracker
      steps={[
        { label: "Create account", detail: "Completed", status: "complete" },
        { label: "Set up profile", detail: "In progress", status: "current" },
        { label: "Invite team", status: "pending" },
        { label: "Done", status: "pending" },
      ]}
    />

    <div className="space-y-4">
      <InputField label="Full name" icon={false} variant="default" placeholder="Jordan Blake" />
      <RadioGroup options={[{ value: "personal", label: "Personal" }, { value: "work", label: "Work" }]} />
      <TagChips chips={[{ label: "Design", variant: "active" }, { label: "Engineering" }]} />
    </div>
  </div>

  <div className="flex justify-between">
    <ButtonGhost>Back</ButtonGhost>
    <ButtonPrimary>Continue</ButtonPrimary>
  </div>
</div>`;

export function OnboardingExample() {
  return (
    <div className="mx-auto max-w-lg space-y-5">
      <div>
        <h2 className="font-heading text-xl font-bold text-foreground-primary">Get started</h2>
        <p className="text-sm text-foreground-secondary">Tell us a bit about yourself to set up your workspace.</p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <StepTracker
          steps={[
            { label: "Create account", detail: "Completed", status: "complete" },
            { label: "Set up profile", detail: "In progress", status: "current" },
            { label: "Invite team", status: "pending" },
            { label: "Done", status: "pending" },
          ]}
        />

        <div className="space-y-4">
          <div>
            <div className="flex items-center justify-between text-xs text-foreground-secondary">
              <span>Step 2 of 4</span>
              <span>50%</span>
            </div>
            <div className="mt-2">
              <ProgressBar value={50} />
            </div>
          </div>

          <InputField label="Full name" icon={false} variant="default" placeholder="Jordan Blake" />

          <div>
            <span className="mb-1.5 block font-body text-[13px] font-semibold text-foreground-primary">
              Account type
            </span>
            <RadioGroup
              options={[
                { value: "personal", label: "Personal" },
                { value: "work", label: "Work" },
              ]}
            />
          </div>

          <div>
            <span className="mb-2 block font-body text-[13px] font-semibold text-foreground-primary">Interests</span>
            <TagChips
              chips={[
                { label: "Design", variant: "active" },
                { label: "Engineering", variant: "default" },
                { label: "Marketing", variant: "outline" },
              ]}
            />
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <ButtonGhost>Back</ButtonGhost>
        <ButtonPrimary>Continue</ButtonPrimary>
      </div>
    </div>
  );
}
