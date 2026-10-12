# PalaUI Docs

Documentation website for **PalaUI** — a warm, mobile-first React component library built around a single signature shape, the *Pala cut*, and a soft, themeable palette.

This site documents the foundations (colors, typography, spacing, shape, icons), the component catalog, and interactive tools like the palette maker.

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router)
- [React 19](https://react.dev)
- [Tailwind CSS v4](https://tailwindcss.com)
- [`pala-ui-core`](https://www.npmjs.com/package/pala-ui-core) — the component library itself
- [framer-motion](https://motion.dev) and [lucide-react](https://lucide.dev) for motion and icons

## Requirements

- Node.js 20.9 or newer
- npm (or your package manager of choice)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site. The page hot-reloads as you edit files under `src/`.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create an optimized production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Project structure

```
src/
├── app/
│   ├── layout.tsx            # Root layout + ThemeProvider
│   ├── page.tsx              # Landing page
│   └── (docs)/               # Documentation routes
│       ├── getting-started/  # Install, setup, theming
│       ├── foundations/      # Colors, typography, spacing, shape, icons
│       ├── components/       # Component catalog
│       ├── palette-maker/    # Interactive theme editor
│       └── examples/         # Full-page examples
├── components/               # Shared UI and foundations components
└── lib/                      # Helpers and shared data
```

## Deployment

The site is deployed on [Vercel](https://vercel.com). Push to the default branch and Vercel builds and publishes it automatically — the framework (Next.js) is detected with zero configuration.

## License

MIT
