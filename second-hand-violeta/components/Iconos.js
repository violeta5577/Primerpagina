const base = { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true };

export const IconoLogo = (p) => (
  <svg width="34" height="34" viewBox="0 0 34 34" strokeWidth="2.2" {...base} {...p}>
    <path d="M27 17a10 10 0 1 1-3-7.1" /><path d="M27 6v5h-5" /><path d="M12 19l3-5 2 3 2-2 3 4" />
  </svg>
);
export const IconoBolsa = (p) => (
  <svg width="18" height="18" viewBox="0 0 24 24" strokeWidth="2" {...base} {...p}>
    <path d="M6 7h12l-1 13H7L6 7z" /><path d="M9 7a3 3 0 0 1 6 0" />
  </svg>
);
export const IconoWhatsApp = (p) => (
  <svg width="20" height="20" viewBox="0 0 24 24" strokeWidth="2" {...base} {...p}>
    <path d="M5 19l1.3-3.9A8 8 0 1 1 9 18.4L5 19z" />
  </svg>
);
export const IconoCheck = (p) => (
  <svg width="20" height="20" viewBox="0 0 24 24" strokeWidth="2.2" {...base} {...p}>
    <path d="M5 12l5 5 9-10" />
  </svg>
);
export const IconoReloj = (p) => (
  <svg width="22" height="22" viewBox="0 0 24 24" strokeWidth="1.8" {...base} {...p}>
    <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" />
  </svg>
);
export const IconoGancho = (p) => (
  <svg width="56" height="56" viewBox="0 0 24 24" strokeWidth="1.4" {...base} {...p}>
    <path d="M12 6a2 2 0 1 1 2 2c-1 0-2 .7-2 1.6V10l9 6v2H3v-2l9-6" />
  </svg>
);
export const IconoCorazon = ({ lleno, ...p }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" strokeWidth="2" {...base} fill={lleno ? "currentColor" : "none"} {...p}>
    <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z" />
  </svg>
);
export const IconoRevisado = (p) => (
  <svg width="28" height="28" viewBox="0 0 24 24" strokeWidth="1.8" {...base} {...p}>
    <path d="M9 12l2 2 4-4" /><circle cx="12" cy="12" r="9" />
  </svg>
);
export const IconoEnvio = (p) => (
  <svg width="28" height="28" viewBox="0 0 24 24" strokeWidth="1.8" {...base} {...p}>
    <path d="M3 7h11v9H3z" /><path d="M14 10h4l3 3v3h-7" /><circle cx="7" cy="17.5" r="1.5" /><circle cx="17" cy="17.5" r="1.5" />
  </svg>
);
export const IconoCambio = (p) => (
  <svg width="28" height="28" viewBox="0 0 24 24" strokeWidth="1.8" {...base} {...p}>
    <path d="M4 12a8 8 0 0 1 14-5.3L20 9" /><path d="M20 4v5h-5" /><path d="M20 12a8 8 0 0 1-14 5.3L4 15" /><path d="M4 20v-5h5" />
  </svg>
);
export const IconoHoja = (p) => (
  <svg width="28" height="28" viewBox="0 0 24 24" strokeWidth="1.8" {...base} {...p}>
    <path d="M5 19c0-8 6-13 14-14-1 8-6 14-14 14z" /><path d="M5 19l7-7" />
  </svg>
);
