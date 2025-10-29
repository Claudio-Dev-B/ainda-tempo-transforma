import Hero from "@/components/Hero";
import JornadaCura from "@/components/JornadaCura";
import Curso from "@/components/Curso";
import Conteudo from "@/components/Conteudo";
import Depoimentos from "@/components/Depoimentos";
import Investimento from "@/components/Investimento";
import Sobre from "@/components/Sobre";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <JornadaCura />
      <Curso />
      <Conteudo />
      <Depoimentos />
      <Investimento />
      <Sobre />
      <Footer />
    </main>
  );
};

export default Index;
