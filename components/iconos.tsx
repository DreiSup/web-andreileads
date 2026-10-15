// Iconos SVG propios (el de WhatsApp es una burbuja, no el logo oficial).
const trazo = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  "aria-hidden": true,
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  className: "shrink-0",
} as const;

export function IconoWhatsapp() {
  return (
    <svg {...trazo}>
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2.5 21.5z" />
      <path d="M9 9.5c0 3 2.5 5.5 5.5 5.5" />
    </svg>
  );
}

export function IconoEmail() {
  return (
    <svg {...trazo}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3.5 7l8.5 6 8.5-6" />
    </svg>
  );
}

export function IconoSubstack() {
  return (
    <svg width={20} height={20} viewBox="0 0 24 24" aria-hidden fill="currentColor">
      <rect x="4" y="3.5" width="16" height="2.2" />
      <rect x="4" y="7.7" width="16" height="2.2" />
      <path d="M4 11.9h16v9l-8-4.4-8 4.4z" />
    </svg>
  );
}

export function IconoX() {
  return (
    <svg {...trazo}>
      <path d="M5 4l14 16M19 4L5 20" />
    </svg>
  );
}

export function IconoLinkedin() {
  return (
    <svg {...trazo}>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M8 10.5V17M8 7.5v.01M12 17v-6.5M12 13.5a2.5 2.5 0 0 1 5 0V17" />
    </svg>
  );
}
