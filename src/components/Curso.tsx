import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Curso = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const modulos = [
    { titulo: "Módulo 1: Fundamentos da Cura", descricao: "Compreenda o plano de Deus para sua restauração" },
    { titulo: "Módulo 2: Identificando Feridas", descricao: "Reconheça as raízes da dor emocional" },
    { titulo: "Módulo 3: O Poder do Perdão", descricao: "Liberte-se através do perdão genuíno" },
    { titulo: "Módulo 4: Quebrando Ciclos", descricao: "Rompa padrões que aprisionam sua vida" },
    { titulo: "Módulo 5: Reconstruindo a Identidade", descricao: "Descubra quem você é em Cristo" },
    { titulo: "Módulo 6: Cura das Emoções", descricao: "Restaure seu mundo emocional" },
    { titulo: "Módulo 7: Relacionamentos Saudáveis", descricao: "Construa vínculos baseados na verdade" },
    { titulo: "Módulo 8: Liberdade Interior", descricao: "Experimente a verdadeira liberdade" },
    { titulo: "Módulo 9: Propósito Restaurado", descricao: "Redescubra seu chamado e destino" },
    { titulo: "Módulo 10: Vivendo em Plenitude", descricao: "Caminhe na plenitude que Deus preparou" },
    { titulo: "Módulo 11: Mantendo a Cura", descricao: "Estabeleça fundamentos duradouros" },
    { titulo: "Módulo 12: Seu Novo Começo", descricao: "Celebre sua transformação e viva renovada" },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % modulos.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + modulos.length) % modulos.length);
  };

  return (
    <section id="curso" className="py-16 md:py-24 relative overflow-hidden" 
             style={{ background: 'var(--gradient-section)' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title text-center mb-8 text-white fade-in-up">
            O caminho da restauração começa aqui
          </h2>
          
          <p className="text-center text-lg md:text-xl mb-16 max-w-3xl mx-auto text-white/90 fade-in-up delay-100">
            12 módulos cuidadosamente estruturados para guiar você em uma jornada de cura profunda, 
            fundamentada na Palavra de Deus e em princípios de transformação emocional e espiritual.
          </p>
          
          {/* Carrossel */}
          <div className="relative fade-in-up delay-200">
            <div className="overflow-hidden rounded-xl bg-white/10 backdrop-blur-sm p-8 md:p-12">
              <div className="text-center text-white min-h-[200px] flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  {modulos[currentSlide].titulo}
                </h3>
                <p className="text-lg md:text-xl opacity-90">
                  {modulos[currentSlide].descricao}
                </p>
              </div>
            </div>
            
            {/* Navegação */}
            <button 
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
              aria-label="Módulo anterior"
            >
              <ChevronLeft className="w-6 h-6 text-primary" />
            </button>
            
            <button 
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
              aria-label="Próximo módulo"
            >
              <ChevronRight className="w-6 h-6 text-primary" />
            </button>
            
            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {modulos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentSlide 
                      ? 'bg-white w-8' 
                      : 'bg-white/40 hover:bg-white/60'
                  }`}
                  aria-label={`Ir para módulo ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Curso;
