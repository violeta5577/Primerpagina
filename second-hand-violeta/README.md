# Second Hand Violeta 💜

Tienda virtual de ropa second hand para mujer, hecha con Next.js.

## Cómo abrirla en tu computadora

1. Instala [Node.js](https://nodejs.org) (versión 18.18 o más nueva).
2. Abre una terminal dentro de esta carpeta y ejecuta:

```bash
npm install
npm run dev
```

3. Abre **http://localhost:3000** en tu navegador.

## Qué cambiar primero

| Qué | Dónde |
|---|---|
| Tu número de WhatsApp y horario | `data/config.js` |
| Tus prendas, precios y categorías | `data/productos.js` |
| Fotos de las prendas | Guárdalas en `public/productos/` y pon la ruta en `imagen` (ej. `"/productos/vestido.jpg"`) |
| Colores | Al inicio de `app/globals.css` |
| Textos de cada sección | En la carpeta `components/` (un archivo por sección) |

## Cómo funcionan los pedidos

- La clienta agrega prendas al carrito y presiona **Pedir** (arriba a la derecha).
- Se abre WhatsApp con la lista de prendas y el total ya escritos, listos para enviarte.
- El formulario **Vende tu ropa** también abre WhatsApp con el mensaje listo.

## Secciones

Inicio · Beneficios · Categorías · Tienda · Cómo funciona · Vende tu ropa · Nosotros · Contacto · Footer

## Publicarla en internet (gratis)

La forma más fácil es [Vercel](https://vercel.com): sube esta carpeta a GitHub e impórtala en Vercel.
