"use client";

import { useState } from "react";
import { IconoCheck } from "./Iconos";
import { linkWhatsApp, NOMBRE_TIENDA } from "@/data/config";

export default function VendeTuRopa() {
  const [nombre, setNombre] = useState("");
  const [prendas, setPrendas] = useState("");

  const enviar = (e) => {
    e.preventDefault();
    const mensaje = `¡Hola ${NOMBRE_TIENDA}! Soy ${nombre || "[tu nombre]"} y quiero vender estas prendas:\n${prendas || "[describe tus prendas]"}\nTe envío las fotos por aquí.`;
    window.open(linkWhatsApp(mensaje), "_blank");
  };

  return (
    <section id="vender" className="contenedor seccion dos-columnas">
      <div className="columna">
        <span className="sobretitulo">Vende tu ropa</span>
        <h2>¿Tu clóset está lleno? Dale una segunda vuelta.</h2>
        <p className="lead">
          Envíanos fotos de la ropa de mujer que ya no usas. Si las aceptamos, te pagamos o te damos crédito
          para comprar en la tienda.
        </p>
        <ul className="lista-check">
          <li><IconoCheck className="violeta" />Prendas en buen estado, limpias y sin roturas</li>
          <li><IconoCheck className="violeta" />Respuesta en pocos días</li>
          <li><IconoCheck className="violeta" />Pago en efectivo o crédito en tienda</li>
        </ul>
      </div>
      <form className="formulario columna" onSubmit={enviar}>
        <h3>Solicitud de venta</h3>
        <label>Nombre
          <input type="text" placeholder="Tu nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </label>
        <label>¿Qué prendas quieres vender?
          <textarea rows={4} placeholder="Ej.: 2 vestidos talla M, 1 casaca de jean…" value={prendas}
            onChange={(e) => setPrendas(e.target.value)} />
        </label>
        <p className="suave">Al enviar se abrirá WhatsApp con tu mensaje listo. Ahí podrás adjuntar las fotos.</p>
        <button type="submit" className="btn btn-primario">Enviar por WhatsApp</button>
      </form>
    </section>
  );
}
