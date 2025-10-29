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
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Opção Parcelada */}
            <div className="bg-secondary p-8 rounded-xl shadow-lg border-2 border-transparent hover:border-primary transition-all fade-in-up delay-200">
              <div className="text-center mb-6">
                <p className="text-sm uppercase tracking-wide mb-2 text-muted-foreground">
                  Parcelado
                </p>
                <div className="mb-4">
                  <span className="text-5xl font-bold" style={{ color: 'hsl(var(--accent-red))' }}>
                    12x
                  </span>
                  <br />
                  <span className="text-4xl font-bold" style={{ color: 'hsl(var(--accent-red))' }}>
                    R$ 97
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  ou R$ 997,00 à vista
                </p>
              </div>
              
              <ul className="space-y-3 mb-8">
                {[
                  "Acesso imediato a todo conteúdo",
                  "12 módulos completos",
                  "60+ aulas práticas",
                  "Materiais de apoio",
                  "Bônus exclusivos",
                  "1 ano de acesso"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 flex-shrink-0" style={{ color: 'hsl(var(--earth-gold))' }} />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Opção à Vista */}
            <div className="p-8 rounded-xl shadow-lg border-2 relative overflow-hidden fade-in-up delay-300"
                 style={{ 
                   backgroundColor: 'hsl(var(--earth-gold))', 
                   borderColor: 'hsl(var(--earth-dark))' 
                 }}>
              <div className="absolute top-4 right-4 bg-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
                Melhor Oferta
              </div>
              
              <div className="text-center mb-6 text-white">
                <p className="text-sm uppercase tracking-wide mb-2 opacity-90">
                  À Vista
                </p>
                <div className="mb-2">
                  <span className="text-5xl font-bold">
                    R$ 897
                  </span>
                </div>
                <p className="text-lg font-semibold bg-white/20 inline-block px-4 py-1 rounded-full">
                  Economize R$ 100
                </p>
              </div>
              
              <ul className="space-y-3 mb-8">
                {[
                  "Tudo do plano parcelado",
                  "Desconto especial à vista",
                  "Sem juros ou taxas",
                  "Economia garantida"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-white">
                    <Check className="w-5 h-5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* CTA Principal */}
          <div className="text-center fade-in-up delay-400">
            <button 
              onClick={scrollToCheckout}
              className="btn-hero mb-6"
            >
              Quero começar minha transformação
            </button>
            
            <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8">
              <Shield className="w-5 h-5" />
              <p className="text-sm">
                Garantia incondicional de 7 dias — Se não for para você, devolvemos 100% do valor
              </p>
            </div>
            
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
