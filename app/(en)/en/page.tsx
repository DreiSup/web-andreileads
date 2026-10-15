import { Tarjeta } from "@/components/Tarjeta";
import { metadatosInicio } from "@/lib/seo";

export const metadata = metadatosInicio("en");

export default function Page() {
  return <Tarjeta idioma="en" />;
}
