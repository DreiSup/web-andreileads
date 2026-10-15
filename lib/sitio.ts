export type Red = {
  nombre: string;
  href: string;
  icono: "substack" | "x" | "linkedin";
};

export const sitio = {
  url: "https://andreileads.com",
  email: "andrei@andreileads.com",
  /**
   * false: noindex en todas las páginas, robots cerrado y sitemap vacío.
   * Pasar a true solo cuando las legales tengan los datos reales del titular.
   */
  indexar: false,
  /** Datos del aviso legal (LSSI). Se rellenan antes de publicar. */
  titular: {
    nombre: "[NOMBRE_LEGAL]",
    nif: "[NIF]",
    domicilio: "[DOMICILIO]",
  },
  /** Vacío: el hueco de redes no se pinta. Máximo 3 para que quepa en una pantalla. */
  redes: [] as Red[],
};

/**
 * Número de WhatsApp desde la variable de entorno WHATSAPP (solo dígitos, con prefijo de país).
 * Si falta o está mal, la compilación falla: nunca se publica la web sin su botón principal.
 */
export function numeroWhatsapp(): string {
  const numero = process.env.WHATSAPP?.trim();
  if (!numero || !/^\d{11,15}$/.test(numero)) {
    throw new Error(
      "Falta WHATSAPP o tiene mal formato. Ponlo en .env.local (y en Vercel) como solo dígitos con prefijo, p. ej. WHATSAPP=34600000000",
    );
  }
  return numero;
}
