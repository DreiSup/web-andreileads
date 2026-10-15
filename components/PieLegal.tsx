import Link from "next/link";
import { textos, type Idioma } from "@/content/textos";
import { sitio } from "@/lib/sitio";

type Props = {
  idioma: Idioma;
  /** Ruta de la legal abierta, para marcarla. */
  actual?: string;
};

export function PieLegal({ idioma, actual }: Props) {
  const t = textos[idioma];
  // Legales solo en español por ahora: el pie en inglés enlaza a las mismas rutas.
  const enlaces = [
    { href: "/aviso-legal", texto: t.pie.avisoLegal },
    { href: "/privacidad", texto: t.pie.privacidad },
    { href: "/cookies", texto: t.pie.cookies },
  ];
  return (
    <footer className="flex flex-col items-start justify-between gap-x-6 border-t border-linea pb-2.5 text-[13px] text-tinta-suave motion-safe:animate-funde motion-safe:[animation-delay:240ms] md:flex-row md:items-center md:pb-2">
      <ul className="flex flex-wrap items-center gap-x-2 md:order-1">
        {enlaces.map(({ href, texto }, i) => (
          <li key={href} className="flex items-center gap-x-2">
            {i > 0 && <span aria-hidden>·</span>}
            <Link
              href={href}
              aria-current={actual === href ? "page" : undefined}
              className={`inline-flex min-h-11 items-center rounded-xs underline-offset-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tinta active:opacity-70 ${
                actual === href ? "text-tinta underline" : "hover:text-tinta hover:underline"
              }`}
            >
              {texto}
            </Link>
          </li>
        ))}
      </ul>
      <p className="leading-[1.3]">© Andrei Leads · {sitio.titular.nombre}</p>
    </footer>
  );
}
