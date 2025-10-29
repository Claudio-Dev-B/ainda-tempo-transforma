import { Quote } from "lucide-react";

const Depoimentos = () => {
  const depoimentos = [
    {
      texto: "Eu achava que nunca superaria as mágoas do passado. O curso me mostrou que a cura é possível e real. Hoje vivo livre e plena em Deus.",
      nome: "Maria Silva",
      cidade: "São Paulo, SP"
    },
    {
      texto: "Cada módulo foi uma revelação. Aprendi a perdoar, a me libertar e a viver o propósito que Deus preparou para mim. Sou outra mulher.",
      nome: "Ana Costa",
      cidade: "Belo Horizonte, MG"
    },
  ];

  return (
    <section id="depoimentos" className="py-16 md:py-24" 
             style={{ backgroundColor: 'hsl(var(--earth-gold))' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title text-center mb-16 text-white fade-in-up">
            Histórias de transformação
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {depoimentos.map((depoimento, index) => (
              <div 
                key={index}
                className="bg-white/95 backdrop-blur-sm p-8 rounded-xl shadow-lg fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <Quote className="w-12 h-12 mb-6 opacity-20" style={{ color: 'hsl(var(--earth-gold))' }} />
                
                <p className="text-lg italic mb-6 leading-relaxed" 
                   style={{ color: 'hsl(var(--earth-dark))' }}>
                  "{depoimento.texto}"
                </p>
                
                <div className="border-t pt-4" style={{ borderColor: 'hsl(var(--earth-gold) / 0.2)' }}>
                  <p className="font-semibold" style={{ color: 'hsl(var(--earth-dark))' }}>
                    {depoimento.nome}
                  </p>
                  <p className="text-sm opacity-70" style={{ color: 'hsl(var(--earth-dark))' }}>
                    {depoimento.cidade}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <p className="text-center mt-12 text-white/90 text-lg fade-in-up delay-400">
            Milhares de mulheres já iniciaram sua jornada de cura. Sua história pode ser a próxima.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Depoimentos;
