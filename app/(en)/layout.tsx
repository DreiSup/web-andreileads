import "../globals.css";
import { clasesFuentes } from "@/lib/fuentes";

// Layout raíz del inglés (/en).
export default function LayoutEn({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={clasesFuentes}>
      <body className="bg-papel font-sans text-tinta antialiased">{children}</body>
    </html>
  );
}
