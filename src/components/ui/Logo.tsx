import { cn } from "pala-ui-core/server";

export function Logo({ className }: { className?: string }) {
  return (
    <span
      role="img"
      aria-label="PalaUI"
      className={cn("inline-block shrink-0 bg-current", className)}
      style={{
        maskImage: "url(/pala-ui-logo.png)",
        WebkitMaskImage: "url(/pala-ui-logo.png)",
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
        maskPosition: "center",
        WebkitMaskPosition: "center",
        maskSize: "contain",
        WebkitMaskSize: "contain",
      }}
    />
  );
}
