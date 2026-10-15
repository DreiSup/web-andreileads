import { Tarjeta } from "@/components/Tarjeta";
import { metadatosInicio } from "@/lib/seo";

export const metadata = metadatosInicio("es");

export default function Page() {
  return <Tarjeta idioma="es" />;
}
