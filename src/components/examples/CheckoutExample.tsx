"use client";

import { Alert, ButtonPrimary, Divider, DropdownTrigger, InputField, ListingCard } from "pala-ui-core";

export const checkoutCode = `<div className="grid gap-4 md:grid-cols-5">
  <div className="space-y-4 md:col-span-3">
    <InputField label="Cardholder name" icon={false} variant="default" placeholder="Jordan Blake" />
    <InputField label="Card number" icon={false} variant="default" placeholder="4242 4242 4242 4242" />
    <div className="grid grid-cols-2 gap-3">
      <InputField label="Expiry" icon={false} variant="default" />
      <InputField label="CVC" icon={false} variant="default" />
    </div>
    <Alert type="info" message="Test mode — no real payment will be processed." />
  </div>

  <div className="space-y-4 md:col-span-2">
    <ListingCard title="Studio plan" subtitle="Billed monthly" badge="Pro" />
    <Divider />
    <div className="flex justify-between font-heading font-bold">
      <span>Total</span>
      <span>$31.32</span>
    </div>
    <ButtonPrimary className="w-full">Pay $31.32</ButtonPrimary>
  </div>
</div>`;

export function CheckoutExample() {
  return (
    <div className="mx-auto max-w-3xl">
      <div>
        <h2 className="font-heading text-xl font-bold text-foreground-primary">Checkout</h2>
        <p className="text-sm text-foreground-secondary">Review your order and complete payment.</p>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-5">
        <div className="space-y-4 md:col-span-3">
          <div className="pala-cut border border-border bg-white p-5">
            <h3 className="font-heading text-sm font-bold text-foreground-primary">Payment details</h3>
            <div className="mt-4 space-y-4">
              <InputField label="Cardholder name" icon={false} variant="default" placeholder="Jordan Blake" />
              <InputField label="Card number" icon={false} variant="default" placeholder="4242 4242 4242 4242" />
              <div className="grid grid-cols-2 gap-3">
                <InputField label="Expiry" icon={false} variant="default" placeholder="MM / YY" />
                <InputField label="CVC" icon={false} variant="default" placeholder="123" />
              </div>
              <div>
                <label className="mb-1.5 block font-body text-[13px] font-semibold text-foreground-primary">
                  Country
                </label>
                <DropdownTrigger placeholder="United States" />
              </div>
            </div>
          </div>
          <Alert type="info" message="Test mode — no real payment will be processed." />
        </div>

        <div className="md:col-span-2">
          <div className="space-y-4 pala-cut border border-border bg-white p-5">
            <ListingCard
              title="Studio plan"
              subtitle="Billed monthly"
              badge="Pro"
              description="Unlimited projects and priority support."
            />
            <Divider />
            <div className="space-y-2 text-sm text-foreground-secondary">
              <div className="flex items-center justify-between">
                <span>Subtotal</span>
                <span className="text-foreground-primary">$29.00</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Tax</span>
                <span className="text-foreground-primary">$2.32</span>
              </div>
              <div className="flex items-center justify-between border-t border-border pt-2 font-heading text-base font-bold text-foreground-primary">
                <span>Total</span>
                <span>$31.32</span>
              </div>
            </div>
            <ButtonPrimary className="w-full">Pay $31.32</ButtonPrimary>
          </div>
        </div>
      </div>
    </div>
  );
}
