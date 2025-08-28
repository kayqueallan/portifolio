import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Projects = () => {
  const { t } = useLanguage();
  
  const projects = [
    {
      title: t('project1Title'),
      description: t('project1Description'),
      image: "/pettemcasa.png",
      technologies: ["JavaScript", "Node.js", "PostgreSQL", "HTML", "CSS"],
      github: "https://github.com/kayqueallan/PettEmCasa?tab=readme-ov-file",
      demo: "https://pettemcasa.vercel.app/",
      featured: true
    },
    
    
    {
      title: t('project2Title'),
      description: t('project2Description'),
      image: "/dropfleet.png",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/kayqueallan/DropFleet",
      demo: "#",
      featured: true
    },

    {
      title: t('project3Title'),
      description: t('project3Description'),
      image: "/hotel.jpg",
      technologies: ["C"],
      github: "https://github.com/kayqueallan/project-in-C-Hotel",
      demo: "#",
      featured: true
    },


  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {t('projectsTitle')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('projectsSubtitle')}
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-strong transition-all duration-300 hover:-translate-y-2 group">
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-3 text-foreground">{project.title}</h4>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" asChild className="gap-2 flex-1">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                        {t('codeButton')}
                      </a>
                    </Button>
                    <Button size="sm" asChild className="gap-2 flex-1 bg-gradient-to-r from-primary to-accent">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                        {t('demoButton')}
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
