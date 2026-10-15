import Link from "next/link";
import { textos, type Idioma } from "@/content/textos";

const enlaceIdioma =
  "inline-flex min-h-11 min-w-11 items-center justify-center rounded-full decoration-1 underline-offset-[6px] focus-visible:outline-2 focus-visible:-outline-offset-6 focus-visible:outline-tinta active:opacity-70";

type Props = {
  idioma: Idioma;
  /** Ruta de esta misma página en español (en las legales, la propia legal). */
  hrefEs: string;
};

export function BarraSuperior({ idioma, hrefEs }: Props) {
  const t = textos[idioma];
  return (
    <header className="flex min-h-14 flex-wrap items-center justify-between gap-4 md:min-h-[76px]">
      <Link
        href={idioma === "en" ? "/en" : "/"}
        className="inline-flex min-h-11 items-center rounded font-serif text-xl tracking-[-0.01em] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tinta md:text-2xl"
      >
        Andrei Leads
      </Link>
      <nav
        aria-label={t.idioma}
        className="-mr-3 flex items-center text-xs font-medium tracking-[0.12em] md:text-[13px]"
      >
        {/* <a> y no <Link>: cada idioma tiene su propio layout raíz (recarga completa) */}
        <a
          href={hrefEs}
          hrefLang="es"
          lang="es"
          aria-label="Español"
          aria-current={idioma === "es" ? "page" : undefined}
          className={`${enlaceIdioma} ${idioma === "es" ? "text-tinta underline" : "text-tinta-suave hover:text-tinta"}`}
        >
          ES
        </a>
        <span aria-hidden className="text-tinta-suave">
          ·
        </span>
        <a
          href="/en"
          hrefLang="en"
          lang="en"
          aria-label="English"
          aria-current={idioma === "en" ? "page" : undefined}
          className={`${enlaceIdioma} ${idioma === "en" ? "text-tinta underline" : "text-tinta-suave hover:text-tinta"}`}
        >
          EN
        </a>
      </nav>
    </header>
  );
}
