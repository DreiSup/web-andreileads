import { IconoEmail, IconoWhatsapp } from "@/components/iconos";

// Solo transform tiene transición; los cambios de color son instantáneos (Specs §3).
const base =
  "flex min-h-[52px] items-center justify-center gap-2.5 rounded-full px-[26px] py-3 text-center text-base leading-tight font-medium transition-transform duration-150 ease-salida focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-tinta motion-safe:hover:-translate-y-px motion-safe:active:scale-[.98]";

const variantes = {
  whatsapp: {
    clases:
      "bg-acento text-sobre-acento hover:bg-acento-hover hover:shadow-acento active:bg-acento-activo active:shadow-none",
    Icono: IconoWhatsapp,
  },
  email: {
    clases: "border-[1.5px] border-tinta text-tinta hover:bg-hueco active:bg-hueco-activo",
    Icono: IconoEmail,
  },
};

type Props = {
  variante: keyof typeof variantes;
  href: string;
  children: React.ReactNode;
};

export function BotonContacto({ variante, href, children }: Props) {
  const { clases, Icono } = variantes[variante];
  return (
    <a href={href} className={`${base} ${clases}`}>
      <Icono />
      <span>{children}</span>
    </a>
  );
}
