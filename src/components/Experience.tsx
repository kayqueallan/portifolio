import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const experiences = [
    {
      title: "Desenvolvedor Full Stack Senior",
      company: "Tech Company",
      period: "2022 - Presente",
      description: "Desenvolvimento de aplicações web modernas usando React, Node.js e TypeScript. Liderança técnica de equipe de 5 desenvolvedores.",
      technologies: ["React", "Node.js", "TypeScript", "PostgreSQL", "AWS"]
    },
    {
      title: "Desenvolvedor Front-end",
      company: "Digital Agency",
      period: "2020 - 2022",
      description: "Criação de interfaces responsivas e performáticas para diversos clientes. Foco em experiência do usuário e otimização de performance.",
      technologies: ["React", "Vue.js", "JavaScript", "SCSS", "Figma"]
    },
    {
      title: "Desenvolvedor Junior",
      company: "Startup Tech",
      period: "2019 - 2020",
      description: "Desenvolvimento de features para plataforma SaaS. Aprendizado rápido de tecnologias modernas e metodologias ágeis.",
      technologies: ["JavaScript", "HTML", "CSS", "MySQL", "Git"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Experiência Profissional
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Minha jornada no desenvolvimento de software
          </p>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-8 hover:shadow-medium transition-all duration-300 border-l-4 border-l-primary">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{exp.title}</h3>
                  <p className="text-lg text-primary font-medium">{exp.company}</p>
                </div>
                <Badge variant="secondary" className="text-sm px-4 py-2">
                  {exp.period}
                </Badge>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {exp.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="outline" className="border-primary/30 text-primary">
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