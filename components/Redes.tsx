import type { Red } from "@/lib/sitio";
import { IconoLinkedin, IconoSubstack, IconoX } from "@/components/iconos";

const iconos = { substack: IconoSubstack, x: IconoX, linkedin: IconoLinkedin };

export function Redes({ items, etiqueta }: { items: Red[]; etiqueta: string }) {
  if (items.length === 0) return null;
  return (
    <ul
      aria-label={etiqueta}
      className="-mr-2.5 ml-auto flex motion-safe:animate-aparece motion-safe:[animation-delay:160ms]"
    >
      {items.map(({ nombre, href, icono }) => {
        const Icono = iconos[icono];
        return (
          <li key={href}>
            <a
              href={href}
              aria-label={nombre}
              rel="me noopener"
              className="flex size-11 items-center justify-center rounded-full text-tinta-suave transition-transform duration-150 ease-salida hover:bg-hueco hover:text-tinta focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-tinta active:bg-hueco-activo motion-safe:active:scale-95"
            >
              <Icono />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
