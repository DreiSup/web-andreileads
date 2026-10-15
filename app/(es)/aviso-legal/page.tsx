import { PaginaLegal, Seccion } from "@/components/PaginaLegal";
import { metadatosLegal } from "@/lib/seo";
import { sitio } from "@/lib/sitio";

const ruta = "/aviso-legal";
const titulo = "Aviso legal";

export const metadata = metadatosLegal(ruta, titulo);

export default function Page() {
  const { nombre, nif, domicilio } = sitio.titular;
  return (
    <PaginaLegal ruta={ruta} titulo={titulo} actualizado="15 de octubre de 2026">
      <Seccion titulo="1. Datos identificativos">
        <p>
          En cumplimiento de la Ley 34/2002, de Servicios de la Sociedad de la Información y de Comercio
          Electrónico (LSSI), se informa de que este sitio web, andreileads.com, es titularidad de {nombre}, con
          NIF {nif} y domicilio en {domicilio}.
        </p>
        <p>
          Contacto: <a href={`mailto:${sitio.email}`}>{sitio.email}</a>
        </p>
      </Seccion>
      <Seccion titulo="2. Objeto">
        <p>
          Este sitio presenta los servicios profesionales de {nombre} bajo la marca Andrei Leads y ofrece medios
          de contacto. El acceso es gratuito y no requiere registro.
        </p>
      </Seccion>
      <Seccion titulo="3. Propiedad intelectual">
        <p>
          Los textos, el diseño y la marca de este sitio pertenecen a {nombre}. No se permite su reproducción sin
          autorización previa por escrito.
        </p>
      </Seccion>
      <Seccion titulo="4. Responsabilidad">
        <p>
          {nombre} no se hace responsable de los daños derivados de un uso indebido del sitio ni del contenido de
          los sitios de terceros enlazados, como WhatsApp.
        </p>
      </Seccion>
      <Seccion titulo="5. Legislación aplicable">
        <p>
          Este aviso se rige por la legislación española. Para cualquier controversia, las partes se someten a los
          juzgados y tribunales de Valencia, salvo que la ley disponga otra cosa.
        </p>
      </Seccion>
    </PaginaLegal>
  );
}
