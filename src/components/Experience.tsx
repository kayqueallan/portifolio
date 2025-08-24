import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const experiences = [
    {
      title: "Projeto: PettEmCasa - Sistema de Gerenciamento para Hotel Pet",
      company: "PUC Minas",
      period: "2025",
      description: "Desenvolvimento de sistema completo para gerenciamento de um hotel pet. Funcionalidades incluem cadastro de clientes e pets, reservas, login e painel administrativo. Interface responsiva e intuitiva para administradores e clientes.",
      technologies: ["HTML", "CSS", "JavaScript", "Node.js", "MySQL"],
      link: "https://github.com/kayqueallan"
    },
    {
      title: "Projeto: Kallyer Transporte – Sistema de Gestão Empresarial",
      company: "Kallyer Transporte",
      period: "2025 (em desenvolvimento)",
      description: "Sistema para empresa de transporte, com foco em controle interno e acesso facilitado aos serviços. Funcionalidades em desenvolvimento: controle de viagens, gestão financeira por KM rodado e integração com painel administrativo.",
      technologies: ["React", "CSS", "Tailwind CSS", "Node.js", "PostgreSQL", "API de rotas"]
    },
    {
      title: "Sócio de Empreendimento – Autônomo",
      company: "PUC Minas",
      period: "2022 – 2023",
      description: "Criação de artes visuais e gestão de tráfego pago para pequenas empresas. Atendimento ao cliente, estratégias de marketing digital e branding. Desenvolvimento de habilidades em design gráfico, comunicação e organização.",
      technologies: ["Photoshop", "Illustrator", "Meta Ads","Google Ads" , "Canva"]
    }
  ];

  return (
    <section id="experience" className="py-10 sm:py-16 md:py-20 bg-section-bg">
      <div className="container mx-auto px-2 sm:px-4 md:px-8 lg:px-10 max-w-3xl md:max-w-4xl xl:max-w-5xl">
        <div className="text-center mb-10 sm:mb-14 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Experiência Profissional
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl mx-auto">
            Minha jornada no desenvolvimento de software
          </p>
        </div>
        <div className="space-y-6 sm:space-y-8 max-w-full">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-4 sm:p-6 md:p-8 hover:shadow-medium transition-all duration-300 border-l-4 border-l-primary w-full">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2 sm:mb-4">
                <div className="mb-2 md:mb-0">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-1 sm:mb-2">{exp.title}</h3>
                  <p className="text-base sm:text-lg text-primary font-medium">{exp.company}</p>
                </div>
                <Badge variant="secondary" className="text-xs sm:text-sm px-2 sm:px-4 py-1 sm:py-2">
                  {exp.period}
                </Badge>
              </div>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="outline" className="border-primary/30 text-primary text-xs sm:text-sm">
                    {tech}
                  </Badge>
                ))}
              </div>  
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;