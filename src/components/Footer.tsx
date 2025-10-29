import { Instagram, Facebook, Youtube, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12" style={{ backgroundColor: 'hsl(var(--earth-dark))' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo/Nome */}
          <h3 className="text-2xl font-bold mb-6 text-white">
            Eliene Marçal
          </h3>
          
          {/* Redes Sociais */}
          <div className="flex justify-center gap-6 mb-8">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-white" />
            </a>
            
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all hover:scale-110"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5 text-white" />
            </a>
            
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all hover:scale-110"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5 text-white" />
            </a>
            
            <a 
              href="mailto:contato@elinemarcal.com.br"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all hover:scale-110"
              aria-label="E-mail"
            >
              <Mail className="w-5 h-5 text-white" />
            </a>
          </div>
          
          {/* Links Úteis */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8 text-sm text-white/70">
            <a href="#curso" className="hover:text-white transition-colors">
              O Curso
            </a>
            <a href="#sobre" className="hover:text-white transition-colors">
              Sobre
            </a>
            <a href="#investimento" className="hover:text-white transition-colors">
              Investimento
            </a>
            <a href="/privacidade" className="hover:text-white transition-colors">
              Política de Privacidade
            </a>
            <a href="/termos" className="hover:text-white transition-colors">
              Termos de Uso
            </a>
          </div>
          
          {/* Direitos */}
          <div className="border-t border-white/10 pt-8">
            <p className="text-white/60 text-sm">
              © 2025 Eliene Marçal | Todos os direitos reservados
            </p>
            <p className="text-white/40 text-xs mt-2">
              CNPJ: 00.000.000/0000-00 | Este site não faz parte do Facebook ou Instagram. 
              Não somos afiliados ao Facebook ou Instagram de nenhuma forma.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
