import type { MetadataRoute } from "next";
import { sitio } from "@/lib/sitio";

// Solo los dos inicios; las legales llevan noindex y no van al sitemap.
export default function sitemap(): MetadataRoute.Sitemap {
  if (!sitio.indexar) return [];
  const idiomas = { es: `${sitio.url}/`, en: `${sitio.url}/en` };
  return [
    { url: idiomas.es, alternates: { languages: idiomas } },
    { url: idiomas.en, alternates: { languages: idiomas } },
  ];
}
