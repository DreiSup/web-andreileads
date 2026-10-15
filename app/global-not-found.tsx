import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import { clasesFuentes } from "@/lib/fuentes";

// 404 común a los dos idiomas: con dos layouts raíz no hay uno solo del que colgarla.
export const metadata: Metadata = {
  title: "404 · Andrei Leads",
  robots: { index: false, follow: false },
};

export default function GlobalNotFound() {
  return (
    <html lang="es" className={clasesFuentes}>
      <body className="bg-papel font-sans text-tinta antialiased">
        <main className="flex min-h-svh flex-col items-start justify-center gap-4 px-6 md:px-12">
          <h1 className="font-serif text-[42px] leading-[1.02] tracking-[-0.02em] md:text-[84px]">
            Página no encontrada
          </h1>
          <p className="text-tinta-suave" lang="en">
            Page not found.
          </p>
          <p className="flex gap-4">
            <Link href="/" className="underline underline-offset-3">
              Ir al inicio
            </Link>
            <Link href="/en" lang="en" className="underline underline-offset-3">
              Go home
            </Link>
          </p>
        </main>
      </body>
    </html>
  );
}
