"use client";

import { Alert, ButtonBlock, ButtonLink, CheckboxInput, Divider, InputField } from "pala-ui-core";

export const signInCode = `<div className="mx-auto max-w-sm pala-cut border border-border bg-white p-6">
  <h2 className="text-center font-heading text-xl font-bold">Welcome back</h2>

  <div className="mt-5 space-y-4">
    <Alert type="error" message="Incorrect email or password." />
    <InputField label="Email" type="email" icon={false} variant="default" placeholder="you@company.com" />
    <InputField label="Password" type="password" icon={false} variant="default" />

    <div className="flex items-center justify-between">
      <CheckboxInput label="Remember me" />
      <ButtonLink>Forgot password?</ButtonLink>
    </div>

    <ButtonBlock>Sign in</ButtonBlock>
  </div>
</div>`;

export function SignInExample() {
  return (
    <div className="mx-auto max-w-sm">
      <div className="pala-cut border border-border bg-white p-6">
        <div className="flex flex-col items-center text-center">
          <div className="flex h-11 w-11 items-center justify-center pala-cut-sm bg-primary font-heading text-lg font-bold text-[#1A1A1A]">
            P
          </div>
          <h2 className="mt-3 font-heading text-xl font-bold text-foreground-primary">Welcome back</h2>
          <p className="mt-1 text-sm text-foreground-secondary">Sign in to continue to your account.</p>
        </div>

        <div className="mt-5 space-y-4">
          <Alert type="error" message="Incorrect email or password." />
          <InputField label="Email" type="email" icon={false} variant="default" placeholder="you@company.com" />
          <InputField label="Password" type="password" icon={false} variant="default" placeholder="Enter your password" />
          <div className="flex items-center justify-between">
            <CheckboxInput label="Remember me" />
            <ButtonLink className="text-[13px]">Forgot password?</ButtonLink>
          </div>
          <ButtonBlock>Sign in</ButtonBlock>
        </div>

        <div className="my-5">
          <Divider />
        </div>
        <p className="text-center text-sm text-foreground-secondary">
          Don&apos;t have an account? <ButtonLink className="text-[13px]">Create one</ButtonLink>
        </p>
      </div>
    </div>
  );
}
