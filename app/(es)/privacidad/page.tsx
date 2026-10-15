import { PaginaLegal, Seccion } from "@/components/PaginaLegal";
import { metadatosLegal } from "@/lib/seo";
import { sitio } from "@/lib/sitio";

const ruta = "/privacidad";
const titulo = "Política de privacidad";

export const metadata = metadatosLegal(ruta, titulo);

export default function Page() {
  const { nombre, nif, domicilio } = sitio.titular;
  const email = <a href={`mailto:${sitio.email}`}>{sitio.email}</a>;
  return (
    <PaginaLegal ruta={ruta} titulo={titulo} actualizado="15 de octubre de 2026">
      <Seccion titulo="1. Responsable">
        <p>
          {nombre}, con NIF {nif} y domicilio en {domicilio}. Contacto: {email}.
        </p>
      </Seccion>
      <Seccion titulo="2. Qué datos trato">
        <p>
          Esta web no tiene formularios ni registro. Solo trato los datos que tú me envías si me escribes por
          email o por WhatsApp: tu nombre, tu email o tu teléfono y lo que me cuentes en el mensaje.
        </p>
      </Seccion>
      <Seccion titulo="3. Para qué y con qué base legal">
        <p>
          Para responder a tu consulta y, si me lo pides, preparar una propuesta de trabajo. La base legal es la
          aplicación de medidas precontractuales a petición tuya (art. 6.1.b del RGPD).
        </p>
      </Seccion>
      <Seccion titulo="4. Cuánto tiempo los conservo">
        <p>
          Mientras dure la conversación. Si llegamos a trabajar juntos, durante la relación y los plazos que
          exijan las obligaciones legales, fiscales y mercantiles.
        </p>
      </Seccion>
      <Seccion titulo="5. Quién más puede acceder">
        <p>No cedo tus datos a nadie, salvo obligación legal. Intervienen estos proveedores:</p>
        <ul>
          <li>
            <strong>Vercel Inc.</strong>, que aloja la web. Sus servidores registran datos técnicos de la visita,
            como la dirección IP, para servir la página y protegerla.
          </li>
          <li>
            <strong>WhatsApp Ireland Ltd.</strong> (grupo Meta), si eliges escribirme por WhatsApp, con sus
            propias condiciones.
          </li>
          <li>
            El proveedor de correo electrónico de andreileads.com, [PROVEEDOR_EMAIL], si me escribes por email.
          </li>
        </ul>
        <p>
          Algunos de estos proveedores pueden tratar datos fuera del Espacio Económico Europeo (por ejemplo, en
          EE. UU.). Esas transferencias se amparan en el Marco de Privacidad de Datos UE-EE. UU. o en cláusulas
          contractuales tipo aprobadas por la Comisión Europea.
        </p>
      </Seccion>
      <Seccion titulo="6. Tus derechos">
        <p>
          Puedes pedir el acceso, la rectificación o la supresión de tus datos, oponerte a su tratamiento, pedir
          su limitación o su portabilidad escribiendo a {email}. Si crees que no he atendido bien tu petición,
          puedes reclamar ante la Agencia Española de Protección de Datos (
          <a href="https://www.aepd.es" rel="noopener">
            aepd.es
          </a>
          ).
        </p>
      </Seccion>
    </PaginaLegal>
  );
}
