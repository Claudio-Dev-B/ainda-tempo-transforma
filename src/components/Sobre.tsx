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
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop" 
                    alt="Eliene Marçal"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* Conteúdo */}
            <div className="md:col-span-3 space-y-6 fade-in-up delay-200">
              <p className="text-lg leading-relaxed text-foreground">
                <strong>Eliene Marçal</strong> é professora, palestrante e mentora espiritual 
                dedicada a ajudar mulheres a encontrarem cura emocional e restauração em Deus.
              </p>
              
              <p className="text-lg leading-relaxed text-foreground">
                Com mais de 15 anos de experiência em aconselhamento pastoral e desenvolvimento 
                pessoal, ela já impactou milhares de vidas através de seus cursos, palestras e 
                mentorias.
              </p>
              
              <p className="text-lg leading-relaxed text-foreground">
                Seu trabalho combina profundidade bíblica com sabedoria prática, criando 
                um caminho seguro para mulheres que desejam superar traumas, quebrar ciclos 
                de dor e viver em plenitude.
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
