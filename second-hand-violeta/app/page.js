import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Beneficios from "@/components/Beneficios";
import Tienda from "@/components/Tienda";
import ComoFunciona from "@/components/ComoFunciona";
import VendeTuRopa from "@/components/VendeTuRopa";
import Nosotros from "@/components/Nosotros";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="barra-top">Tienda virtual · Pedidos por WhatsApp · Envíos a todo el país</div>
      <Header />
      <main>
        <Hero />
        <Beneficios />
        <Tienda />
        <ComoFunciona />
        <VendeTuRopa />
        <Nosotros />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
