import { IconoRevisado, IconoEnvio, IconoCambio, IconoHoja } from "./Iconos";

const items = [
  { Icono: IconoRevisado, titulo: "Revisadas a mano", texto: "Calidad garantizada" },
  { Icono: IconoEnvio, titulo: "Envíos a todo el país", texto: "Rápidos y seguros" },
  { Icono: IconoCambio, titulo: "Cambios fáciles", texto: "Si no te queda, lo cambiamos" },
  { Icono: IconoHoja, titulo: "Moda sostenible", texto: "Menos residuos textiles" },
];

export default function Beneficios() {
  return (
    <section aria-label="Beneficios" className="beneficios">
      <div className="contenedor beneficios-grid">
        {items.map(({ Icono, titulo, texto }) => (
          <div key={titulo} className="beneficio">
            <Icono className="violeta" />
            <div>
              <div className="negrita">{titulo}</div>
              <div className="suave">{texto}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
