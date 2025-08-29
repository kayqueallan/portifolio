import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
  <footer className="bg-background border-t border-border/20 hidden md:block">
      <div className="container mx-auto px-4 py-4">
        <div className="grid grid-cols-3 gap-8 items-center">
          {/* Perfil */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">Kayque Allan</h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              Estudante de Engenharia de Software especializado em desenvolvimento full-stack, construindo soluções end-to-end.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://www.linkedin.com/in/kayqueallan/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://github.com/kayqueallan" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-4 h-4" />
              </a>
              <a href="https://wa.me/5531000000000" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <MessageCircle className="w-4 h-4" />
              </a>
              <a href="mailto:kayque@email.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navegação */}
            <div className="flex flex-col space-y-3">
            <h4 className="text-base font-medium text-foreground">Navegação</h4>
              <div className="flex flex-col space-y-2">
              <Link to="/" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Home</Link>
              <Link to="/skills" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Skills</Link>
              <Link to="/curriculo" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Currículo</Link>
              <Link to="/projetos" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Projetos</Link>
              <Link to="/contato" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Contato</Link>
            </div>
          </div>

          {/* Contato */}
            <div className="flex flex-col space-y-3 md:col-start-3 md:col-end-4">
            <h4 className="text-base font-medium text-foreground">Contato</h4>
              <div className="flex flex-col space-y-2">
              <a href="https://www.linkedin.com/in/kayqueallan/" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-3 h-3" />
                LinkedIn
              </a>
              <a href="https://github.com/kayqueallan" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-3 h-3" />
                GitHub
              </a>
              <a href="https://wa.me/5531000000000" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <MessageCircle className="w-3 h-3" />
                WhatsApp
              </a>
              <a href="mailto:kayque@email.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-3 h-3" />
                Gmail
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border/20 pt-4">
          <p className="text-xs text-muted-foreground/60 text-center">
            © 2025 Kayque Allan. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;