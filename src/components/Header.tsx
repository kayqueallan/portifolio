import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Moon, Sun, Code2 } from "lucide-react";
import { useTheme } from "next-themes";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { setTheme, theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/90 backdrop-blur-md shadow-glow border-b border-border/50' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="p-2 rounded-lg bg-gradient-to-r from-primary to-accent group-hover:shadow-glow transition-all duration-300">
              <Code2 className="w-6 h-6 text-white" />
            </div>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link 
              to="/"
              className={`transition-colors story-link ${
                location.pathname === '/' 
                  ? 'text-primary' 
                  : 'text-foreground/80 hover:text-primary'
              }`}
            >
              Sobre mim
            </Link>
            <Link 
              to="/curriculo"
              className={`transition-colors story-link ${
                location.pathname === '/curriculo' 
                  ? 'text-primary' 
                  : 'text-foreground/80 hover:text-primary'
              }`}
            >
              Currículo
            </Link>
            <Link 
              to="/experiencias"
              className={`transition-colors story-link ${
                location.pathname === '/experiencias' 
                  ? 'text-primary' 
                  : 'text-foreground/80 hover:text-primary'
              }`}
            >
              Experiência
            </Link>
            <Link 
              to="/projetos"
              className={`transition-colors story-link ${
                location.pathname === '/projetos' 
                  ? 'text-primary' 
                  : 'text-foreground/80 hover:text-primary'
              }`}
            >
              Projetos
            </Link>
          </div>

          <div className="flex-1" />
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="hover:bg-muted"
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            
            <Link to="/contato">
              <Button 
                className="bg-gradient-to-r from-primary to-accent hover:shadow-glow transition-all duration-300 hover:scale-105"
              >
                Contato
              </Button>
            </Link>
          </div>

          {/* Botão de menu hambúrguer para telas menores que 770px */}
          <div className="md:hidden flex items-center">
            <Button variant="ghost" size="icon" className="mr-1" aria-label="Abrir menu" onClick={() => setMenuOpen(true)}>
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="18" x2="20" y2="18"/></svg>
            </Button>
          </div>
        </nav>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur flex flex-col items-center justify-center gap-8">
          <Button variant="ghost" size="icon" className="absolute top-4 right-4" aria-label="Fechar menu" onClick={() => setMenuOpen(false)}>
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </Button>
          <Link to="/" onClick={() => setMenuOpen(false)} className="text-xl font-bold text-primary">Sobre mim</Link>
          <Link to="/curriculo" onClick={() => setMenuOpen(false)} className="text-xl font-bold text-primary">Currículo</Link>
          <Link to="/experiencias" onClick={() => setMenuOpen(false)} className="text-xl font-bold text-primary">Experiência</Link>
          <Link to="/projetos" onClick={() => setMenuOpen(false)} className="text-xl font-bold text-primary">Projetos</Link>
          <Link to="/contato" onClick={() => setMenuOpen(false)}>
            <Button className="bg-gradient-to-r from-primary to-accent hover:shadow-glow transition-all duration-300 hover:scale-105 mt-2">
              Contato
            </Button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;