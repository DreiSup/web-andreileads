import { PaginaLegal, Seccion } from "@/components/PaginaLegal";
import { metadatosLegal } from "@/lib/seo";

const ruta = "/cookies";
const titulo = "Política de cookies";

export const metadata = metadatosLegal(ruta, titulo);

export default function Page() {
  return (
    <PaginaLegal ruta={ruta} titulo={titulo} actualizado="15 de octubre de 2026">
      <Seccion titulo="1. Esta web no usa cookies">
        <p>
          Esta web no instala cookies ni guarda nada en tu navegador, ni propio ni de terceros. Tampoco usa
          herramientas de analítica, publicidad ni redes sociales. Por eso no ves ningún aviso de cookies.
        </p>
      </Seccion>
      <Seccion titulo="2. Enlaces a otros servicios">
        <p>
          Los botones de WhatsApp y de email abren servicios externos. Desde ese momento se aplican sus propias
          políticas de privacidad y de cookies.
        </p>
      </Seccion>
      <Seccion titulo="3. Cambios">
        <p>
          Si en el futuro se añade alguna herramienta que use cookies, se te pedirá el consentimiento antes de
          activarla y se actualizará esta página.
        </p>
      </Seccion>
    </PaginaLegal>
  );
}
