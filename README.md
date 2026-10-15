# web-andreileads

Web de Andrei Leads (`andreileads.com`): una sola pantalla, en español (`/`) e inglés (`/en`), con contacto por WhatsApp y email. Diseño «Remitente» (Claude Design; entrega en `mis_datos/designs/andreileads/`).

Next.js 16 (App Router, `cacheComponents`), Tailwind CSS 4 y `next/font`. Sin `@andrei-leads/core`, sin JavaScript de cliente propio y sin terceros (ni cookies, ni analítica, ni fuentes remotas).

## Arrancar en local

Desde `mis_datos/web-andreileads/` (comandos de terminal):

```bash
cp .env.example .env.local   # y edita WHATSAPP con nano
pnpm install
pnpm build && pnpm start -p 3005
```

`WHATSAPP` es obligatoria (solo dígitos, con prefijo de país, sin `+`). Si falta, el build falla. En Vercel se pone como variable de entorno del proyecto.

## Dónde se cambia cada cosa

| Qué | Archivo |
|---|---|
| Textos ES/EN | `content/textos.ts` |
| Email, datos del titular, redes, `indexar` | `lib/sitio.ts` |
| Colores, fuentes, animaciones (tokens) | `app/globals.css` (`@theme`) y `lib/fuentes.ts` |
| Pantalla | `components/Tarjeta.tsx` y sus piezas en `components/` |
| Legales (solo en español) | `app/(es)/aviso-legal`, `privacidad`, `cookies` |
| Metadatos, hreflang y JSON-LD | `lib/seo.ts` |

Cada idioma tiene su layout raíz (`app/(es)/layout.tsx`, `app/(en)/layout.tsx`) para llevar su propio `<html lang>`. La 404 común está en `app/global-not-found.tsx`.

## Antes de publicar

- [ ] `lib/sitio.ts` → `titular`: nombre, NIF y domicilio reales (los exige la LSSI).
- [ ] Privacidad: sustituir `[PROVEEDOR_EMAIL]` por el proveedor del correo de andreileads.com.
- [ ] `WHATSAPP` en Vercel (Production y Preview).
- [ ] `indexar: true` en `lib/sitio.ts` (activa index, robots y sitemap).
- [ ] Vercel Pro si el repo es privado de la organización (Hobby no admite uso comercial).
