import { Bricolage_Grotesque, Inter } from "next/font/google";
import { CarritoProvider } from "@/components/CarritoContext";
import "./globals.css";

const titulos = Bricolage_Grotesque({ subsets: ["latin"], weight: ["500", "700", "800"], variable: "--font-titulos" });
const texto = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-texto" });

export const metadata = {
  title: "Second Hand Violeta — Ropa second hand para mujer",
  description: "Tienda virtual de ropa second hand para mujer. Prendas únicas, revisadas a mano. Pedidos por WhatsApp y envíos a todo el país.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${titulos.variable} ${texto.variable}`}>
      <body>
        <CarritoProvider>{children}</CarritoProvider>
      </body>
    </html>
  );
}
