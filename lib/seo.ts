import type { Metadata } from "next";
import { textos, type Idioma } from "@/content/textos";
import { sitio } from "@/lib/sitio";

const robots = (indexable: boolean): Metadata["robots"] =>
  sitio.indexar && indexable ? { index: true, follow: true } : { index: false, follow: sitio.indexar };

/** Inicio de cada idioma: canonical propio y hreflang entre / y /en. */
export function metadatosInicio(idioma: Idioma): Metadata {
  const t = textos[idioma];
  const ruta = idioma === "en" ? "/en" : "/";
  return {
    metadataBase: new URL(sitio.url),
    title: t.meta.titulo,
    description: t.meta.descripcion,
    robots: robots(true),
    alternates: {
      canonical: ruta,
      languages: { es: "/", en: "/en", "x-default": "/" },
    },
    openGraph: {
      type: "website",
      url: ruta,
      siteName: "Andrei Leads",
      title: t.meta.titulo,
      description: t.meta.descripcion,
      locale: idioma === "en" ? "en_US" : "es_ES",
    },
  };
}

/** Legales: solo en español, noindex, follow. */
export function metadatosLegal(ruta: string, titulo: string): Metadata {
  return {
    metadataBase: new URL(sitio.url),
    title: `${titulo} · Andrei Leads`,
    robots: robots(false),
    alternates: { canonical: ruta },
  };
}

/** JSON-LD de la marca. Sin dirección completa ni valoraciones. */
export function datosEstructurados() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Andrei Leads",
    url: sitio.url,
    email: sitio.email,
    address: { "@type": "PostalAddress", addressLocality: "Valencia", addressCountry: "ES" },
    ...(sitio.redes.length > 0 && { sameAs: sitio.redes.map((r) => r.href) }),
  };
}
