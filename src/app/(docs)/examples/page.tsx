"use client";

import { useState } from "react";
import { ButtonGroup } from "pala-ui-core";
import { ExampleFrame } from "@/components/preview/ExampleFrame";
import { DashboardExample, dashboardCode } from "@/components/examples/DashboardExample";
import { SettingsExample, settingsCode } from "@/components/examples/SettingsExample";
import { SignInExample, signInCode } from "@/components/examples/SignInExample";
import { CheckoutExample, checkoutCode } from "@/components/examples/CheckoutExample";
import { OnboardingExample, onboardingCode } from "@/components/examples/OnboardingExample";

const examples = [
  {
    name: "Dashboard",
    url: "app.example.com/dashboard",
    description: "A workspace overview with sidebar navigation, key metrics, progress, and recent projects.",
    code: dashboardCode,
    render: () => <DashboardExample />,
  },
  {
    name: "Settings",
    url: "app.example.com/settings",
    description: "A preferences page with form fields, toggle switches, radio options, and dropdowns.",
    code: settingsCode,
    render: () => <SettingsExample />,
  },
  {
    name: "Sign in",
    url: "app.example.com/sign-in",
    description: "An authentication screen with inline validation, a checkbox, and a full-width action.",
    code: signInCode,
    render: () => <SignInExample />,
  },
  {
    name: "Checkout",
    url: "app.example.com/checkout",
    description: "A two-column checkout with payment fields, an order summary, and a confirmation action.",
    code: checkoutCode,
    render: () => <CheckoutExample />,
  },
  {
    name: "Onboarding",
    url: "app.example.com/onboarding",
    description: "A multi-step setup flow with a progress tracker, profile fields, and interest chips.",
    code: onboardingCode,
    render: () => <OnboardingExample />,
  },
];

export default function ExamplesPage() {
  const [selected, setSelected] = useState(examples[0].name);
  const current = examples.find((example) => example.name === selected) ?? examples[0];

  return (
    <div>
      <h1 className="font-heading text-3xl font-bold text-foreground-primary">UI Examples</h1>
      <p className="mt-2 text-foreground-secondary">
        Reference compositions built entirely from PalaUI components. Pick an example to preview it.
      </p>

      <div className="mt-6 overflow-x-auto pb-1">
        <div role="tablist" aria-label="UI examples" className="inline-flex min-w-full justify-start md:min-w-0 md:justify-center">
          <ButtonGroup options={examples.map((example) => example.name)} value={selected} onChange={setSelected} />
        </div>
      </div>

      <div className="mt-5">
        <div className="mb-4">
          <h2 className="font-heading text-xl font-bold text-foreground-primary">{current.name}</h2>
          <p className="mt-0.5 text-sm text-foreground-secondary">{current.description}</p>
        </div>
        <ExampleFrame url={current.url} code={current.code}>{current.render()}</ExampleFrame>
      </div>
    </div>
  );
}
