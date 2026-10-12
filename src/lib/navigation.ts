export interface NavSection {
  title: string
  href?: string
  items: { title: string; href: string; description?: string }[]
}

export const navigation: NavSection[] = [
  {
    title: "Getting Started",
    items: [
      { title: "Overview", href: "/getting-started", description: "Design philosophy and quick start" },
      { title: "Home", href: "/", description: "Back to landing page" },
    ],
  },
  {
    title: "Foundations",
    href: "/foundations",
    items: [
      { title: "Colors", href: "/foundations/colors", description: "Full color palette" },
      { title: "Typography", href: "/foundations/typography", description: "Funnel Sans & Inter" },
      { title: "Spacing", href: "/foundations/spacing", description: "Spacing scale & layout" },
      { title: "Shape", href: "/foundations/shape", description: "The Pala cut" },
      { title: "Icons", href: "/foundations/icons", description: "Lucide icon library" },
    ],
  },
  {
    title: "Components",
    href: "/components",
    items: [
      { title: "Buttons", href: "/components/buttons", description: "Primary, Secondary, Icon, sizes" },
      { title: "Forms", href: "/components/forms", description: "Inputs, Toggle, Select, DatePicker" },
      { title: "Navigation", href: "/components/navigation", description: "Tabs, Breadcrumbs, Pagination" },
      { title: "Cards & Data", href: "/components/cards-data", description: "Cards, Accordion, Progress" },
      { title: "Feedback", href: "/components/feedback", description: "Alerts, Toast, Modal, Snackbar" },
      { title: "Patterns", href: "/components/patterns", description: "Step tracker, Schedule, Chips, Rating" },
    ],
  },
  {
    title: "Playground",
    items: [
      { title: "Palette Maker", href: "/palette-maker", description: "Customize PalaUI colors in real time" },
    ],
  },
  {
    title: "Examples",
    href: "/examples",
    items: [
      { title: "UI Examples", href: "/examples", description: "Composed interface examples" },
    ],
  },
]
