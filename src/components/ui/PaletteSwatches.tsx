"use client";

import { useTheme } from "pala-ui-core";

export function PaletteSwatches() {
  const { current, setPalette, available } = useTheme();

  return (
    <div className="mt-16 flex animate-slide-up flex-wrap justify-center gap-2" style={{ animationDelay: "0.2s" }}>
      {available.map((p) => (
        <button
          key={p.id}
          onClick={() => setPalette(p.id)}
          title={p.name}
          className="group relative h-10 w-10 pala-cut-sm transition-all hover:z-10 hover:scale-110 md:h-14 md:w-14"
          style={{ background: p.swatch }}
        >
          {current.id === p.id && (
            <span className="absolute inset-0 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={3} className="drop-shadow">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>
          )}
          <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-medium text-foreground-secondary opacity-0 transition-opacity group-hover:opacity-100">
            {p.name}
          </span>
        </button>
      ))}
    </div>
  );
}
