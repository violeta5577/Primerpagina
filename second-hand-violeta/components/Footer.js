import { NOMBRE_TIENDA } from "@/data/config";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="contenedor">
        <div className="footer-grid">
          <div className="footer-col">
            <span className="footer-logo">{NOMBRE_TIENDA}</span>
            <span>Ropa second hand para mujer, con estilo y conciencia.</span>
          </div>
          <div className="footer-col">
            <span className="footer-titulo">Tienda</span>
            <a href="#tienda">Recién llegadas</a>
            <a href="#categorias">Categorías</a>
            <a href="#vender">Vende tu ropa</a>
          </div>
          <div className="footer-col">
            <span className="footer-titulo">Ayuda</span>
            <a href="#como-funciona">Cómo funciona</a>
            <a href="#contacto">Envíos y cambios</a>
            <a href="#contacto">Guía de tallas</a>
          </div>
          <div className="footer-col">
            <span className="footer-titulo">Tienda virtual</span>
            <a href="#nosotros">Nosotros</a>
            <a href="#contacto">Contacto por WhatsApp</a>
          </div>
        </div>
        <div className="footer-base">
          <span>© {new Date().getFullYear()} {NOMBRE_TIENDA}</span>
          <span>Hecho con prendas que merecen otra vuelta</span>
        </div>
      </div>
    </footer>
  );
}
