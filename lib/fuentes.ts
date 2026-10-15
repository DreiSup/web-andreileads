import { Geist, Instrument_Serif } from "next/font/google";

// next/font descarga las fuentes al compilar y las sirve desde la propia web:
// ninguna petición a Google desde el navegador del visitante.
export const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
});

export const clasesFuentes = `${geist.variable} ${instrumentSerif.variable}`;
