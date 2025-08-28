
import { Briefcase } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ExperiencePage = () => {
  const { t } = useLanguage();

  const experiences = [
    {
      key: 'exp1',
      title: "Sócio de Empreendimento – Autônomo",
      company: "KD Digital",
      period: "2022 — 2023",
      description: "Criação de artes visuais e gestão de tráfego pago para pequenas empresas. Atendimento ao cliente, estratégias de marketing digital e branding. Desenvolvimento de habilidades em design gráfico, comunicação e organização.",
      technologies: ["Photoshop" ,"Illustrator","Meta Ads","Google Ads","Canva"],
      isWork: true
    },
    {
      key: 'exp2',
      title: "Projeto: PettEmCasa - Sistema de Gerenciamento para Hotel Pet",
      company: "Puc Minas", 
      period: "2025",
      description: "Desenvolvimento de sistema completo para gerenciamento de um hotel pet. Funcionalidades incluem cadastro de clientes e pets, reservas, login e painel administrativo. Interface responsiva e intuitiva para administradores e clientes.",
      technologies: ["HTML", "CSS", "JavaScript", "Node.js", "MySQL"],
      isWork: true
    },
    {
      key: 'exp3',
      title: "Projeto: Kallyer Transporte – Sistema de Gestão Empresarial",
      company: "Kallyer Transporte",
      period: "2025 — Atual", 
      description: "Trabalho no desenvolvimento de soluções automatizadas e manipulação de grandes volumes de dados usando PHP, Python, HTML e PostgreSQL. Crio bots e automações para otimizar processos, além de contribuir para o frontend de aplicações e gerenciamento de banco de dados.",
      technologies: ["PHP", "Python", "PostgreSQL", "HTML", "CSS"],
      isWork: true
    },
    {
      key: 'exp4',
      title: "Projeto: ConttareContabilidade",
      company: "Conttare Contabilidade",
      period: "2022 — 2023",
      description: "Sistema de gestão para escritórios de contabilidade, centralizando processos administrativos e oferecendo recursos como agenda tributária, relatórios e chatbot, visando eficiência, segurança e melhor interação com clientes.",
      technologies: ["React","Node.js","PostgreSQL", "Gemini/Chatgpt"],
      isWork: true
    }
    
  ];

  return (
    <div className="min-h-screen bg-background pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t('experiences')}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('experiencesSubtitle')}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 top-0 bottom-0 w-0.5 bg-border/50"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center mb-16 ${
                index % 2 === 0 ? 'justify-start' : 'justify-end'
              }`}>
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-card/50 border border-border/50 rounded-full flex items-center justify-center z-10">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                
                {/* Experience card */}
                <div className={`w-5/12 ${
                  index % 2 === 0 ? 'pr-8' : 'pl-8'
                }`}>
                  <div className={`bg-card/30 backdrop-blur-sm rounded-xl p-6 border border-border/20 hover:shadow-lg hover:scale-105 transition-all duration-500 hover:bg-card/50 ${
                    index % 2 === 0 ? 'animate-fade-in' : 'animate-fade-in'
                  }`}>
                    <div className="flex flex-col mb-3">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-xl font-semibold text-foreground">{exp.title}</h4>
                        {exp.isWork && (
                          <span className="inline-flex items-center px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full">
                            {t('work')}
                          </span>
                        )}
                      </div>
                      <div className="text-accent font-medium mb-2">{exp.company}</div>
                      <div className="text-sm text-muted-foreground mb-3">{exp.period}</div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="inline-flex items-center px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-md border border-primary/20">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
