import { Check, Shield } from "lucide-react";

const Investimento = () => {
  const scrollToCheckout = () => {
    // Aqui você pode integrar com sua plataforma de pagamento
    window.open('https://pay.hotmart.com/seu-link', '_blank');
  };

  return (
    <section id="investimento" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-center mb-8 fade-in-up text-foreground">
            Seu investimento na transformação
          </h2>
          
          <p className="text-center text-lg md:text-xl mb-12 max-w-2xl mx-auto text-muted-foreground fade-in-up delay-100">
            Quanto vale viver livre da dor, da culpa e do vazio? 
            Quanto vale reconstruir sua vida em Deus?
          </p>
          
          {/* Card Único */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="rounded-xl shadow-2xl border-2 relative overflow-hidden fade-in-up delay-200"
                 style={{ 
                   backgroundColor: 'hsl(var(--earth-gold))', 
                   borderColor: 'hsl(var(--earth-dark))' 
                 }}>
              
              {/* Faixa Superior - VAGAS LIMITADAS */}
              <div className="bg-green-600 text-white py-3 text-center">
                <p className="text-lg font-bold uppercase tracking-wide">
                  VAGAS LIMITADAS
                </p>
              </div>
              
              <div className="p-8">
                <div className="absolute top-20 right-4 bg-white text-green-600 px-4 py-1 rounded-full text-sm font-semibold transform -translate-y-2 md:translate-y-0">
                  Melhor Oferta
                </div>
                
                <div className="text-center mb-8 text-white pt-4 md:pt-0">
                  <div className="mb-6">
                    <span className="text-4xl font-bold block">
                      12x de R$ 40,34
                    </span>
                    <span className="text-xl opacity-90">
                      ou R$ 397 à vista
                    </span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8 max-w-md mx-auto">
                  {[
                    "Mais de 12 Módulos Completos",
                    "Mais de 65 Aulas Gravadas", 
                    "Metodologia Bíblica",
                    "Aulas com Eliene Marçal",
                    "Materiais Complementares",
                    "Bônus Exclusivos: Mapa da Cura Emocional",
                    "Acesso por 365 dias"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-white">
                      <Check className="w-5 h-5 flex-shrink-0" />
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Botão com cor verde */}
                <div className="text-center mb-6">
                  <button 
                    onClick={scrollToCheckout}
                    className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 w-full max-w-md"
                  >
                    Quero começar minha transformação
                  </button>
                </div>
                
                {/* Garantia dentro do card */}
                <div className="flex items-center justify-center gap-2 text-white/90 mb-4">
                  <Shield className="w-5 h-5" />
                  <p className="text-sm text-center">
                    Garantia incondicional de 7 dias — Se não for para você, devolvemos 100% do valor
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mensagem de atenção */}
          <div className="text-center fade-in-up delay-400">
            <div className="max-w-2xl mx-auto p-6 bg-secondary rounded-lg">
              <p className="text-center text-foreground">
                <strong>Atenção:</strong> Este é um investimento em você, em sua cura e em seu futuro. 
                Não deixe o medo ou a dúvida te impedirem de viver a plenitude que Deus preparou.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Investimento;