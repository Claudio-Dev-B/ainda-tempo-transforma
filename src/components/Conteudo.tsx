import { Check } from "lucide-react";

const Conteudo = () => {
  const beneficios = [
    "12 módulos completos de transformação espiritual e emocional",
    "Mais de 60 aulas práticas com base bíblica sólida",
    "Materiais de apoio e exercícios práticos para cada módulo",
    "Bônus exclusivos: meditações guiadas e diário de cura",
    "Acesso completo por 1 ano para você avançar no seu ritmo",
    "Comunidade de apoio com mulheres em jornada de cura",
  ];

  return (
    <section id="conteudo" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-center mb-12 fade-in-up text-foreground">
            O que você vai receber
          </h2>
          
          <div className="grid gap-6 md:gap-8">
            {beneficios.map((beneficio, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
                     style={{ backgroundColor: 'hsl(var(--earth-gold))' }}>
                  <Check className="w-5 h-5 text-white" />
                </div>
                <p className="text-lg text-foreground pt-1">{beneficio}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 p-8 bg-white rounded-xl shadow-md text-center fade-in-up delay-500">
            <p className="text-xl md:text-2xl font-semibold mb-2" style={{ color: 'hsl(var(--earth-dark))' }}>
              + Bônus Especial
            </p>
            <p className="text-lg text-muted-foreground">
              Guia prático "Orações de Cura e Libertação" para fortalecer sua jornada diária
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conteudo;
