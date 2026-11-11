// ✏️ Cambia aquí los datos de tu tienda

// Número de WhatsApp con código de país, sin "+" ni espacios (Perú = 51)
export const WHATSAPP = "51999999999";

export const NOMBRE_TIENDA = "Second Hand Violeta";
export const HORARIO = "Lunes a sábado, 9:00 a. m. – 7:00 p. m.";

export function linkWhatsApp(mensaje = "") {
  const texto = mensaje ? `?text=${encodeURIComponent(mensaje)}` : "";
  return `https://wa.me/${WHATSAPP}${texto}`;
}
