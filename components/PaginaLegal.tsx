import Link from "next/link";
import { BarraSuperior } from "@/components/BarraSuperior";
import { PieLegal } from "@/components/PieLegal";
import { textos } from "@/content/textos";

type Props = {
  ruta: string;
  titulo: string;
  /** Fecha fija en texto: nada de new Date() en el render. */
  actualizado: string;
  children: React.ReactNode;
};

/** Layout de lectura de las legales (solo en español). Estas sí hacen scroll. */
export function PaginaLegal({ ruta, titulo, actualizado, children }: Props) {
  const t = textos.es;
  return (
    <div className="flex min-h-svh flex-col px-6 md:px-12">
      <BarraSuperior idioma="es" hrefEs={ruta} />
      <main className="mx-auto w-full max-w-[68ch] flex-1 pt-2 pb-16 md:pt-8">
        <Link
          href="/"
          className="inline-flex min-h-11 items-center text-sm text-tinta-suave hover:text-tinta hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tinta"
        >
          {t.volver}
        </Link>
        <h1 className="mt-4 mb-2 font-serif text-[44px] leading-[1.05] tracking-[-0.02em] text-balance md:text-[64px]">
          {titulo}
        </h1>
        <p className="mb-10 text-sm text-tinta-suave">Última actualización: {actualizado}</p>
        <div className="flex flex-col gap-8 text-base leading-[1.65] [&_a]:underline-offset-3 [&_a]:underline [&_p]:text-pretty [&_ul]:list-disc [&_ul]:pl-5">
          {children}
        </div>
      </main>
      <PieLegal idioma="es" actual={ruta} />
    </div>
  );
}

export function Seccion({ titulo, children }: { titulo: string; children: React.ReactNode }) {
  return (
    <section className="flex flex-col gap-2.5">
      <h2 className="text-[17px] font-semibold">{titulo}</h2>
      {children}
    </section>
  );
}
