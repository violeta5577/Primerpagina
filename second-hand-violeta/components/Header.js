"use client";

import { useCarrito } from "./CarritoContext";
import { IconoLogo, IconoBolsa } from "./Iconos";
import { linkWhatsApp, NOMBRE_TIENDA } from "@/data/config";

const enlaces = [
  { href: "#tienda", texto: "Tienda" },
  { href: "#categorias", texto: "Categorías" },
  { href: "#como-funciona", texto: "Cómo funciona" },
  { href: "#vender", texto: "Vende tu ropa" },
  { href: "#nosotros", texto: "Nosotros" },
  { href: "#contacto", texto: "Contacto" },
];

export default function Header() {
  const { carrito } = useCarrito();

  const pedir = () => {
    if (carrito.length === 0) {
      document.getElementById("tienda")?.scrollIntoView({ behavior: "smooth" });
      return;
    }
    const lista = carrito.map((p) => `• ${p.nombre} (talla ${p.talla}) – S/ ${p.precio}`).join("\n");
    const total = carrito.reduce((t, p) => t + p.precio, 0);
    const mensaje = `¡Hola ${NOMBRE_TIENDA}! Quiero pedir estas prendas:\n${lista}\nTotal: S/ ${total}`;
    window.open(linkWhatsApp(mensaje), "_blank");
  };

  return (
    <header className="header">
      <div className="contenedor header-fila">
        <a href="#inicio" className="logo">
          <IconoLogo className="violeta" />
          <span>{NOMBRE_TIENDA}</span>
        </a>
        <nav aria-label="Principal" className="nav">
          {enlaces.map((e) => (
            <a key={e.href} href={e.href}>{e.texto}</a>
          ))}
        </nav>
        <button type="button" className="btn btn-primario btn-chico" onClick={pedir}
          aria-label={carrito.length ? `Pedir por WhatsApp (${carrito.length} prendas)` : "Carrito vacío"}>
          <IconoBolsa />
          <span>{carrito.length ? `Pedir (${carrito.length})` : "Carrito (0)"}</span>
        </button>
      </div>
    </header>
  );
}
