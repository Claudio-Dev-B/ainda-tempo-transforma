import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import aula1 from "@/images/1.webp";
import aula2 from "@/images/2.webp";
import aula3 from "@/images/3.webp";
import aula4 from "@/images/4.webp";
import aula5 from "@/images/5.webp";
import aula6 from "@/images/6.webp";
import aula7 from "@/images/7.webp";
import aula8 from "@/images/8.webp";
import aula9 from "@/images/9.webp";
import aula10 from "@/images/10.webp";
import aula11 from "@/images/11.webp";
import aula12 from "@/images/12.webp";

const Curso = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const modulos = [
    { 
      titulo: "Módulo 1: Aliança e Identidade", 
      descricao: "Descubra quem você é em Deus. Refaça sua aliança espiritual e desperte a mulher que Ele te chamou para ser.",
      imagem: aula1
    },
    { 
      titulo: "Módulo 2: Perdão", 
      descricao: "Liberte o passado. Encerre ciclos de dor e entenda o poder libertador do perdão verdadeiro.",
      imagem: aula2
    },
    { 
      titulo: "Módulo 3: Reconstrução", 
      descricao: "Aprenda a reconstruir sua vida emocional e espiritual com base em pilares firmes: fé, propósito e autocompaixão.",
      imagem: aula3
    },
    { 
      titulo: "Módulo 4: Tempo de Espera", 
      descricao: "Encontre descanso no processo. Transforme a espera em fortalecimento e confiança no tempo perfeito de Deus.",
      imagem: aula4
    },
    { 
      titulo: "Módulo 5: Posicionamento", 
      descricao: "Descubra como se colocar no centro da sua própria vida, com limites saudáveis e sabedoria emocional.",
      imagem: aula5
    },
    { 
      titulo: "Módulo 6: Autogoverno", 
      descricao: "Domine suas emoções e decisões. Desenvolva clareza mental e espiritual para guiar sua jornada com propósito.",
      imagem: aula6
    },
    { 
      titulo: "Módulo 7: Sexo e Desligamento de Alma", 
      descricao: "Restaure sua pureza emocional. Feche portas espirituais do passado e viva uma nova fase de liberdade interior.",
      imagem: aula7
    },
    { 
      titulo: "Módulo 8: Mulher Virtuosa", 
      descricao: "Compreenda o verdadeiro significado da virtude. Seja forte, sensível e plena na sua essência feminina.",
      imagem: aula8
    },
    { 
      titulo: "Módulo 9: Princípios do Casamento", 
      descricao: "Entenda o amor como extensão da sua cura. Descubra como relacionar-se de forma saudável — inclusive consigo mesma.",
      imagem: aula9
    },
    { 
      titulo: "Módulo 10: Vida Espiritual na Prática", 
      descricao: "Transforme fé em ação. Leve a presença de Deus para as decisões, rotinas e desafios do seu dia a dia.",
      imagem: aula10
    },
    { 
      titulo: "Módulo 11: Propósito", 
      descricao: "Encontre direção. Alinhe seus dons e talentos ao propósito que Deus reservou para sua vida.",
      imagem: aula11
    },
    { 
      titulo: "Módulo 12: Transformação e Continuidade", 
      descricao: "Celebre o novo tempo. Aprenda a manter sua fé, sua força e sua essência em constante evolução.",
      imagem: aula12
    },
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
            <div className="overflow-hidden rounded-xl bg-white/10 backdrop-blur-sm p-6 md:p-8">
              <div className="flex flex-col items-center">
                {/* Título acima da imagem */}
                <div className="w-full text-center text-white mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold">
                    {modulos[currentSlide].titulo}
                  </h3>
                </div>
                
                {/* Imagem do módulo - Proporcional e não cortada */}
                <div className="w-full max-w-md mx-auto mb-6">
                  <img 
                    src={modulos[currentSlide].imagem} 
                    alt={modulos[currentSlide].titulo}
                    className="w-full h-auto max-h-96 object-contain rounded-lg"
                  />
                </div>
                
                {/* Descrição abaixo da imagem */}
                <div className="w-full text-center text-white">
                  <p className="text-lg md:text-xl opacity-90 leading-relaxed max-w-2xl mx-auto">
                    {modulos[currentSlide].descricao}
                  </p>
                </div>
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