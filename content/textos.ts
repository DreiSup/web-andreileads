export type Idioma = "es" | "en";

export type Textos = {
  meta: { titulo: string; descripcion: string };
  titular: { antes: string; enfasis: string };
  subtitulo: string;
  nombre: string;
  ubicacion: string;
  whatsapp: { label: string; texto: string };
  email: { label: string; asunto: string; visible: string };
  idioma: string;
  redes: string;
  avatarAlt: string;
  pie: { avisoLegal: string; privacidad: string; cookies: string };
  volver: string;
};

export const textos: Record<Idioma, Textos> = {
  es: {
    meta: {
      titulo: "Andrei Leads · Consigo clientes que pagan",
      descripcion:
        "Webs, SEO y anuncios en Google y Meta para negocios que quieren más clientes. Desde Valencia, en español e inglés.",
    },
    titular: { antes: "Consigo clientes que pagan.", enfasis: "Con SEO y con anuncios" },
    subtitulo: "Webs, SEO y anuncios en Google y Meta para negocios que quieren más clientes.",
    nombre: "Andrei Leads",
    ubicacion: "Valencia, España",
    whatsapp: {
      label: "Escríbeme por WhatsApp",
      texto: "Hola Andrei, vengo de tu web. Quiero más clientes para mi negocio: ",
    },
    email: { label: "Envíame un email", asunto: "Quiero más clientes", visible: "O directamente a" },
    idioma: "Idioma",
    redes: "Redes",
    avatarAlt: "Andrei, de Andrei Leads",
    pie: { avisoLegal: "Aviso legal", privacidad: "Privacidad", cookies: "Cookies" },
    volver: "← Volver",
  },
  en: {
    meta: {
      titulo: "Andrei Leads · I get you paying customers",
      descripcion:
        "Websites, SEO and Google & Meta ads for businesses that want more customers. Based in Valencia, Spain.",
    },
    titular: { antes: "I get you paying customers.", enfasis: "Through search and ads" },
    subtitulo: "Websites, SEO and Google & Meta ads for businesses that want more customers.",
    nombre: "Andrei Leads",
    ubicacion: "Valencia, Spain",
    whatsapp: {
      label: "Message me on WhatsApp",
      texto: "Hi Andrei, I found you through your website. I'd like more customers for my business: ",
    },
    email: { label: "Send me an email", asunto: "I want more customers", visible: "Or write to" },
    idioma: "Language",
    redes: "Social",
    avatarAlt: "Andrei, of Andrei Leads",
    pie: { avisoLegal: "Legal notice", privacidad: "Privacy", cookies: "Cookies" },
    volver: "← Back",
  },
};
