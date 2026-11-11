"use client";

import { categorias, productos } from "@/data/productos";
import { useCarrito } from "./CarritoContext";
import { IconoGancho, IconoCorazon } from "./Iconos";

export default function Tienda() {
  const { filtro, setFiltro, enCarrito, alternarCarrito, esFavorito, alternarFavorito } = useCarrito();
  const visibles = productos.filter((p) => filtro === "Todo" || p.categoria === filtro);

  const elegirCategoria = (nombre) => {
    setFiltro(nombre);
    document.getElementById("tienda")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Categorías */}
      <section id="categorias" className="contenedor seccion seccion-categorias">
        <div className="seccion-cabecera">
          <div>
            <span className="sobretitulo">Categorías</span>
            <h2>Encuentra tu estilo</h2>
          </div>
          <a href="#tienda" className="link-fuerte" onClick={() => setFiltro("Todo")}>Ver todo →</a>
        </div>
        <div className="grid-categorias">
          {categorias.map((c) => (
            <button key={c.nombre} type="button" className="tarjeta-categoria" style={{ background: c.color }}
              onClick={() => elegirCategoria(c.nombre)}>
              <span className="etiqueta">{productos.filter((p) => p.categoria === c.nombre).length} prendas</span>
              <span className="tarjeta-categoria-nombre">{c.nombre}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Tienda */}
      <section id="tienda" className="contenedor seccion seccion-tienda">
        <div>
          <span className="sobretitulo">Tienda</span>
          <h2>Recién llegadas</h2>
        </div>
        <div role="group" aria-label="Filtrar por categoría" className="filtros">
          {["Todo", ...categorias.map((c) => c.nombre)].map((f) => (
            <button key={f} type="button" aria-pressed={filtro === f}
              className={`filtro ${filtro === f ? "activo" : ""}`} onClick={() => setFiltro(f)}>
              {f}
            </button>
          ))}
        </div>
        <div className="grid-productos">
          {visibles.map((p) => {
            const agregado = enCarrito(p.id);
            const fav = esFavorito(p.id);
            return (
              <article key={p.id} className="producto">
                <div className="producto-foto" style={{ background: p.color }}>
                  {p.imagen ? <img src={p.imagen} alt={p.nombre} /> : <IconoGancho className="gancho" />}
                  <span className="etiqueta producto-estado">{p.estado}</span>
                  <button type="button" className="producto-fav" onClick={() => alternarFavorito(p.id)}
                    aria-pressed={fav} aria-label={fav ? "Quitar de favoritos" : "Agregar a favoritos"}>
                    <IconoCorazon lleno={fav} />
                  </button>
                </div>
                <div className="producto-info">
                  <div className="suave">{p.marca} · Talla {p.talla}</div>
                  <h3>{p.nombre}</h3>
                  <div className="precios">
                    <span className="precio">S/ {p.precio}</span>
                    {p.precioOriginal && <span className="precio-antes">S/ {p.precioOriginal}</span>}
                  </div>
                  <button type="button" className={`btn-agregar ${agregado ? "agregado" : ""}`}
                    onClick={() => alternarCarrito(p)}>
                    {agregado ? "En el carrito ✓" : "Agregar al carrito"}
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
