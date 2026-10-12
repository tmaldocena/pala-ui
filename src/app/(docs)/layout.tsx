import { Sidebar } from "@/components/ui/Sidebar";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <div className="mx-auto max-w-4xl px-6 py-10 md:px-10 md:py-12">
          {children}
        </div>
      </main>
    </div>
  );
}
