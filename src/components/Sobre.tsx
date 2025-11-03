const Sobre = () => {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title text-center mb-12 fade-in-up text-foreground">
            Conheça Eliene Marçal
          </h2>
          
          <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-center">
            {/* Imagem */}
            <div className="md:col-span-2 fade-in-up delay-100">
              <div className="relative w-64 h-64 mx-auto">
                <div className="w-full h-full rounded-full overflow-hidden shadow-2xl"
                     style={{ border: '4px solid hsl(var(--earth-gold))' }}>
                  <img 
                    src="src/images/eliene.webp" 
                    alt="Eliene Marçal"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* Conteúdo */}
            <div className="md:col-span-3 space-y-6 fade-in-up delay-200">
              <p className="text-lg leading-relaxed text-foreground">
                 <strong> Eliene Marçal </strong> é fundadora e líder do Ministério Gerando Vidas nas Nações, iniciado em 2016 em Goiânia/GO. Seu encontro com Jesus aos 16 anos transformou sua vida e a levou a buscar sabedoria na Palavra, tornando-se referência em aconselhamento para mulheres.
                </p>
                <p>
                  Após viver um casamento abusivo, enfrentar divórcio, criar duas filhas sozinha e superar lutas financeiras e emocionais, Eliene aprendeu a se posicionar como edificadora do lar e hoje compartilha seus aprendizados para fortalecer outras famílias.
                </p>
                <p>
                  Com mais de 30 anos de caminhada no evangelho, participou de seminários e conferências com nomes como Dave Roberson, Mike Murdock e John C. Maxwell, além de atuar como Conselheira e Intercessora no Ministério SILC de 2017 a 2023.
                </p>
                <p>
                  Em 2019, após 20 anos de espera em Deus, viveu um recomeço ao se casar com Edson Luís Vachiano Filho. Hoje, como Apóstola, testemunha que independente do passado, Deus sempre tem um lugar de restituição e recomeço.
                </p>
              
              <div className="p-6 rounded-lg italic text-center"
                   style={{ backgroundColor: 'hsl(var(--earth-gold) / 0.1)' }}>
                <p className="text-xl font-semibold" style={{ color: 'hsl(var(--earth-dark))' }}>
                  "Deus sempre tem um lugar de restituição e recomeço."
                </p>
              </div>
              
              <p className="text-lg leading-relaxed text-foreground">
                O curso <strong>Ainda é Tempo</strong> é o resultado de anos de estudo, 
                experiência ministerial e, acima de tudo, do desejo de ver mulheres livres, 
                curadas e vivendo o propósito que Deus preparou para elas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
