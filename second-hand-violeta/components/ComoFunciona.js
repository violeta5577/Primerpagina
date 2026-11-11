const pasos = [
  { n: "01", titulo: "Elige tu prenda", texto: "Explora la tienda por categoría, talla o estado. Cada foto muestra la prenda real." },
  { n: "02", titulo: "Pide por WhatsApp", texto: "Agrega tus prendas al carrito y envíanos tu pedido por WhatsApp. Te confirmamos al instante." },
  { n: "03", titulo: "Recíbela en casa", texto: "Lavada, planchada y empacada con material reutilizable, lista para usar." },
];

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="como-funciona">
      <div className="contenedor seccion">
        <div className="angosto">
          <span className="sobretitulo amarillo">Cómo funciona</span>
          <h2>Comprar second hand es así de simple</h2>
        </div>
        <div className="grid-pasos">
          {pasos.map((p) => (
            <div key={p.n} className="paso">
              <span className="paso-numero">{p.n}</span>
              <h3>{p.titulo}</h3>
              <p>{p.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
