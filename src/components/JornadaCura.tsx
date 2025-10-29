import { X, Check } from "lucide-react";

const JornadaCura = () => {
  const problemas = [
    "Dor, culpa e vazio que parecem não ter fim",
    "Repetir os mesmos ciclos de sofrimento",
    "Sentir-se presa ao passado e suas feridas",
  ];

  const solucoes = [
    "Cura emocional genuína à luz da Palavra",
    "Reconstrução espiritual e emocional profunda",
    "Liberdade para viver o amor que Deus sonhou",
  ];

  return (
    <section id="jornada" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title text-center mb-12 fade-in-up text-foreground">
            Você merece viver plena em Deus
          </h2>
          
          <p className="text-center text-lg md:text-xl mb-16 max-w-3xl mx-auto text-muted-foreground fade-in-up delay-100">
            Por tempo demais, você acreditou que a dor fazia parte de quem você é. 
            Mas Deus não criou você para viver assim. Ele preparou um caminho de cura, 
            restauração e plenitude — e é hora de percorrê-lo.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Problemas */}
            <div className="space-y-6 fade-in-up delay-200">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Você não precisa mais:</h3>
              {problemas.map((problema, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                    <X className="w-5 h-5 text-accent" />
                  </div>
                  <p className="text-foreground">{problema}</p>
                </div>
              ))}
            </div>
            
            {/* Soluções */}
            <div className="space-y-6 fade-in-up delay-300">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Você vai conquistar:</h3>
              {solucoes.map((solucao, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-foreground">{solucao}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JornadaCura;
