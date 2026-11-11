"use client";

import { useState } from "react";
import { IconoWhatsApp, IconoReloj } from "./Iconos";
import { linkWhatsApp, WHATSAPP, HORARIO, NOMBRE_TIENDA } from "@/data/config";

export default function Contacto() {
  const [listo, setListo] = useState(false);

  const unirse = (e) => {
    e.preventDefault();
    window.open(linkWhatsApp(`¡Hola ${NOMBRE_TIENDA}! Quiero recibir avisos de las nuevas prendas.`), "_blank");
    setListo(true);
  };

  const numeroBonito = `+${WHATSAPP.slice(0, 2)} ${WHATSAPP.slice(2).replace(/(\d{3})(?=\d)/g, "$1 ")}`;

  return (
    <section id="contacto" className="contenedor seccion dos-columnas">
      <div className="columna">
        <span className="sobretitulo">Contacto</span>
        <h2>Hablemos</h2>
        <p className="lead">
          Somos una tienda 100% virtual. Escríbenos por WhatsApp para consultar tallas, separar una prenda o
          coordinar tu envío.
        </p>
        <div className="datos">
          <div><IconoWhatsApp className="violeta" />WhatsApp: {numeroBonito}</div>
          <div><IconoReloj className="violeta" />Atención: {HORARIO}</div>
        </div>
        <a href={linkWhatsApp(`¡Hola ${NOMBRE_TIENDA}!`)} target="_blank" rel="noopener noreferrer"
          className="btn btn-primario alinear-inicio">
          <IconoWhatsApp />Escríbenos por WhatsApp
        </a>
      </div>
      <form className="caja-oscura columna" onSubmit={unirse}>
        <h3>Entérate primero de las nuevas prendas</h3>
        <p>Como cada pieza es única, las mejores vuelan. Escríbenos y te avisamos por WhatsApp cuando subamos nuevos ingresos.</p>
        {listo && <div className="aviso-amarillo">¡Gracias! Envíanos el mensaje y quedas en la lista.</div>}
        <button type="submit" className="btn btn-amarillo alinear-inicio">Quiero recibir avisos</button>
      </form>
    </section>
  );
}
