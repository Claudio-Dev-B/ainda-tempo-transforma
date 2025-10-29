import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToInvestimento = () => {
    const investimentoSection = document.getElementById('investimento');
    investimentoSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" 
             style={{ background: 'var(--gradient-hero)' }}>
      <div className="absolute inset-0 bg-black/10"></div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="section-title text-5xl md:text-6xl lg:text-7xl mb-6 fade-in-up">
            É hora de se reconstruir
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 opacity-90 fade-in-up delay-200 leading-relaxed max-w-2xl mx-auto">
            Você não precisa carregar sozinha o peso da dor, da culpa e do vazio. 
            Deus preparou um caminho de cura e restauração para você.
          </p>
          
          <button 
            onClick={scrollToInvestimento}
            className="btn-hero fade-in-up delay-300 inline-flex items-center gap-2"
          >
            Quero começar minha transformação
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-white/60" />
      </div>
    </section>
  );
};

export default Hero;
