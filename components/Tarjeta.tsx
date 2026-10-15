import { Avatar } from "@/components/Avatar";
import { BarraSuperior } from "@/components/BarraSuperior";
import { BotonContacto } from "@/components/BotonContacto";
import { PieLegal } from "@/components/PieLegal";
import { Redes } from "@/components/Redes";
import { Titular } from "@/components/Titular";
import { textos, type Idioma } from "@/content/textos";
import { datosEstructurados } from "@/lib/seo";
import { numeroWhatsapp, sitio } from "@/lib/sitio";

/**
 * La web entera: una pantalla que cabe a 375 × 560 sin scroll.
 * min-h-svh y sin alturas fijas: si el texto crece (zoom, horizontal), la página hace scroll.
 */
export function Tarjeta({ idioma }: { idioma: Idioma }) {
  const t = textos[idioma];
  const whatsapp = `https://wa.me/${numeroWhatsapp()}?text=${encodeURIComponent(t.whatsapp.texto)}`;
  const email = `mailto:${sitio.email}?subject=${encodeURIComponent(t.email.asunto)}`;

  return (
    <div className="flex min-h-svh flex-col px-6 md:px-12">
      <BarraSuperior idioma={idioma} hrefEs="/" />

      <main className="mx-auto flex w-full max-w-[720px] flex-1 flex-col justify-center pt-2 pb-5 md:pt-6 md:pb-12">
        <div className="flex flex-wrap items-center gap-3.5 md:gap-[18px]">
          <Avatar alt={t.avatarAlt} />
          <div className="flex min-w-0 flex-col gap-0.5 motion-safe:animate-aparece motion-safe:[animation-delay:80ms]">
            <p className="text-[15px] leading-[1.3] font-medium md:text-base">{t.nombre}</p>
            <p className="text-sm leading-[1.3] text-tinta-suave md:text-[15px]">{t.ubicacion}</p>
          </div>
          <Redes items={sitio.redes} etiqueta={t.redes} />
        </div>

        <Titular antes={t.titular.antes} enfasis={t.titular.enfasis} />

        <p className="mt-3 max-w-[34em] text-base leading-normal text-pretty text-tinta-suave md:mt-5 md:text-[19px]">
          {t.subtitulo}
        </p>

        <div className="mt-6 flex flex-col gap-2.5 min-[560px]:flex-row md:mt-9">
          <BotonContacto variante="whatsapp" href={whatsapp}>
            {t.whatsapp.label}
          </BotonContacto>
          <BotonContacto variante="email" href={email}>
            {t.email.label}
          </BotonContacto>
        </div>

        <p className="mt-4 hidden text-[13px] text-tinta-suave md:block">
          {t.email.visible}{" "}
          <a href={`mailto:${sitio.email}`} className="text-tinta underline-offset-3 hover:underline">
            {sitio.email}
          </a>
        </p>
      </main>

      <PieLegal idioma={idioma} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(datosEstructurados()) }}
      />
    </div>
  );
}
