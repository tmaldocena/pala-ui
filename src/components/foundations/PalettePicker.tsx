"use client";

import { cn } from "pala-ui-core";
import { useTheme } from "pala-ui-core";

export function PalettePicker() {
  const { current, setPalette, available } = useTheme();

  return (
    <div className="flex flex-wrap gap-2">
      {available.map((palette) => (
        <button
          key={palette.id}
          onClick={() => setPalette(palette.id)}
          title={palette.description}
          className={cn(
            "flex items-center gap-2 pala-cut-sm border px-3 py-2 text-xs font-medium transition-all",
            current.id === palette.id
              ? "border-primary bg-primary-soft text-foreground-primary"
              : "border-border bg-white text-foreground-secondary hover:border-primary hover:text-foreground-primary"
          )}
        >
          <span className="h-4 w-4 rounded-full border border-black/10" style={{ background: palette.swatch }} />
          {palette.name}
        </button>
      ))}
    </div>
  );
}
