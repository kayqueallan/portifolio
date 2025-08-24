import { useState } from "react";
import profilePhoto from "@/assets/profile-photo.jpg";
import codingGif from "@/assets/coding-background.gif";
import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter, MapPin, Code, Palette, Server, Database, Instagram, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const Home = () => {
  const [language, setLanguage] = useState<'pt' | 'en'>('pt');
  
  const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/kayqueallan/" },
    { name: "GitHub", icon: Github, url: "https://github.com/kayqueallan" },
    { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/rkayque_/" },
  ];

  const content = {
    pt: {
      title: "Estudante de Engenharia de Software.",
      greeting: "Olá! Sou Kayque Allan, estudante do 4º período de Engenharia de Software na PUC Minas, com grande interesse em programação e design digital. Participo de projetos, cursos e hackathons para desenvolver minhas habilidades e buscar soluções criativas e funcionais.",
      about: "Atualmente, também estudo inglês e espanhol para ampliar minhas oportunidades de colaboração no mercado global. Aqui você encontra alguns dos meus projetos e experiências sinta-se à vontade para conhecer!",
      location: "Minas Gerais, Brasil",
      specialties: "Especialidades",
      languageButton: "EN"
    },
    en: {
      title: "Software Engineering Student.",
      greeting: "Hello! I'm Kayque Allan, a 4th semester Software Engineering student at PUC Minas, with great interest in programming and digital design. I participate in projects, courses and hackathons to develop my skills and seek creative and functional solutions.",
      about: "Currently, I also study English and Spanish to expand my global collaboration opportunities in the market. Here you can find some of my projects and experiences, feel free to explore!",
      location: "Minas Gerais, Brazil",
      specialties: "Specialties",
      languageButton: "PT"
    }
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated GIF Background */}
      <div 
        className="absolute inset-0 opacity-5 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${codingGif})`,
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/90" />
      
      {/* Main Content */}
      <div className="relative z-10 min-h-screen pt-24">
        <div className="container mx-auto px-6 sm:px-12 md:px-24 lg:px-32 xl:px-48 max-w-[1600px]">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center min-h-screen">
            
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-4">
                  Kayque Allan
                </h1>
                <h2 className="text-2xl lg:text-3xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-semibold mb-4">
                  {content[language].title}
                </h2>
                
                {/* Language Toggle Button */}
                <Button
                  onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')}
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2 hover:scale-105 transition-all duration-300"
                >
                  <Globe className="w-4 h-4" />
                  {content[language].languageButton}
                </Button>
              </div>
              
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  {content[language].greeting}
                </p>
                
                <p>
                  {content[language].about}
                </p>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>{content[language].location}</span>
              </div>

              {/* Social Links */}
              <div className="flex flex-wrap gap-6 w-full md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl mb-8">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    to={social.url}
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105"
                  >
                    <social.icon className="w-5 h-5" />
                    <span className="text-sm font-medium">{social.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Right Column - Profile Image */}
            <div className="flex justify-center lg:justify-end w-full">
              <div className="relative w-full max-w-[280px] sm:max-w-xs md:max-w-md lg:max-w-lg">
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-accent/20 to-primary/10 rounded-2xl blur-xl transform rotate-6"></div>
                
                {/* Profile Photo Container */}
                <div className="relative w-full h-44 sm:h-60 md:h-80 lg:w-96 lg:h-[480px] rounded-2xl overflow-hidden border border-border/20 bg-gradient-to-br from-primary/20 to-accent/20 animate-float shadow-strong">
                  <img 
                    src={profilePhoto} 
                    alt="Foto de perfil profissional" 
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Specialties Section */}
          <div className="-mt-32 space-y-1">
            <div className="text-center">
                           
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto py-12 mt-32 md:mt-40 lg:mt-48 xl:mt-56">
              <div className="bg-card/30 backdrop-blur-sm rounded-xl p-8 border border-border/20 hover:shadow-soft transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-3 mb-4">
                  <Code className="w-7 h-7 text-primary" />
                  <h4 className="text-xl font-medium text-primary">Frontend</h4>
                </div>
                <p className="text-muted-foreground text-base">React, TypeScript, JavaScript, Tailwind CSS, HTML, CSS</p>
              </div>
              
              <div className="bg-card/30 backdrop-blur-sm rounded-xl p-8 border border-border/20 hover:shadow-soft transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-3 mb-4">
                  <Server className="w-7 h-7 text-accent" />
                  <h4 className="text-xl font-medium text-accent">Backend</h4>
                </div>
                <p className="text-muted-foreground text-base">Java, SpringBoot, Node.js, Python, APIs REST</p>
              </div>
              
              <div className="bg-card/30 backdrop-blur-sm rounded-xl p-8 border border-border/20 hover:shadow-soft transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-3 mb-4">
                  <Database className="w-7 h-7 text-primary" />
                  <h4 className="text-xl font-medium text-primary">Database</h4>
                </div>
                <p className="text-muted-foreground text-base">PostgreSQL, MySQL, Redis</p>
              </div>
              
              <div className="bg-card/30 backdrop-blur-sm rounded-xl p-8 border border-border/20 hover:shadow-soft transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-3 mb-4">
                  <Palette className="w-7 h-7 text-accent" />
                  <h4 className="text-xl font-medium text-accent">Design</h4>
                </div>
                <p className="text-muted-foreground text-base">UI/UX, Figma, Design Systems</p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

