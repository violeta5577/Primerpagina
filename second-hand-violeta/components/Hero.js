export default function Hero() {
  return (
    <section id="inicio" className="contenedor hero">
      <div className="hero-texto">
        <span className="pastilla">Moda circular · Solo mujer</span>
        <h1>Ropa de mujer con historia, lista para su segunda vuelta.</h1>
        <p className="lead">
          Prendas second hand para mujer, seleccionadas, lavadas y revisadas una por una. Viste con estilo,
          ahorra y dale una vida más larga a la ropa.
        </p>
        <div className="botones">
          <a href="#tienda" className="btn btn-primario">Ver la tienda</a>
          <a href="#vender" className="btn btn-borde">Quiero vender mi ropa</a>
        </div>
      </div>
      <div className="hero-collage">
        {/* Reemplaza estos bloques por fotos: <img src="/productos/mi-foto.jpg" alt="..." /> */}
        <div className="bloque bloque-alto" style={{ background: "#C7B3DE" }}>
          <span className="etiqueta">Foto: look principal</span>
          <span className="bloque-titulo">Colección de temporada</span>
        </div>
        <div className="bloque" style={{ background: "#B9A6D6" }}>
          <span className="etiqueta">Foto: detalle</span>
        </div>
        <div className="bloque bloque-amarillo">
          <span className="bloque-grande">Piezas únicas</span>
          <span>Solo hay una de cada una</span>
        </div>
      </div>
    </section>
  );
}
