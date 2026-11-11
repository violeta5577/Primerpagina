// ✏️ Aquí agregas, editas o quitas tus prendas.
// Para usar una foto: guárdala en /public/productos/ y pon su nombre en "imagen",
// por ejemplo imagen: "/productos/vestido-floral.jpg". Si no hay foto, se muestra un color.

export const categorias = [
  { nombre: "Vestidos", color: "#D8C3B5" },
  { nombre: "Tops y chompas", color: "#E3B23C" },
  { nombre: "Pantalones y faldas", color: "#C9B3D9" },
  { nombre: "Casacas y abrigos", color: "#A9B8C9" },
  { nombre: "Accesorios", color: "#B9A6D6" },
];

export const productos = [
  { id: 1, categoria: "Vestidos", nombre: "Vestido midi floral", marca: "Zara", talla: "M", estado: "Como nuevo", precio: 45, precioOriginal: 159, color: "#D8C3B5", imagen: "" },
  { id: 2, categoria: "Casacas y abrigos", nombre: "Casaca de jean clásica", marca: "Levi's", talla: "S", estado: "Muy bueno", precio: 79, precioOriginal: 299, color: "#A9B8C9", imagen: "" },
  { id: 3, categoria: "Tops y chompas", nombre: "Blusa de seda color crema", marca: "Mango", talla: "M", estado: "Como nuevo", precio: 39, precioOriginal: 139, color: "#EDE3D1", imagen: "" },
  { id: 4, categoria: "Tops y chompas", nombre: "Chompa tejida de alpaca", marca: "Hecho en Perú", talla: "M", estado: "Como nuevo", precio: 55, precioOriginal: 180, color: "#E6D6B8", imagen: "" },
  { id: 5, categoria: "Accesorios", nombre: "Bolso de cuero marrón", marca: "Mango", talla: "Única", estado: "Muy bueno", precio: 49, precioOriginal: 199, color: "#B48A6A", imagen: "" },
  { id: 6, categoria: "Pantalones y faldas", nombre: "Falda plisada midi", marca: "H&M", talla: "S", estado: "Como nuevo", precio: 35, precioOriginal: 99, color: "#C9B3D9", imagen: "" },
  { id: 7, categoria: "Casacas y abrigos", nombre: "Blazer de lana años 90", marca: "Vintage", talla: "S", estado: "Bueno", precio: 65, precioOriginal: null, color: "#B9A68A", imagen: "" },
  { id: 8, categoria: "Vestidos", nombre: "Vestido negro de punto", marca: "Zara", talla: "M", estado: "Muy bueno", precio: 42, precioOriginal: 149, color: "#9C97A8", imagen: "" },
];
