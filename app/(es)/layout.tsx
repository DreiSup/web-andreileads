import "../globals.css";
import { clasesFuentes } from "@/lib/fuentes";

// Layout raíz del español: cada idioma tiene el suyo para llevar su propio <html lang>.
export default function LayoutEs({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={clasesFuentes}>
      <body className="bg-papel font-sans text-tinta antialiased">{children}</body>
    </html>
  );
}
