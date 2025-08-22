import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, Globe, Mail, Phone, MapPin, Github, Linkedin, Loader2 } from "lucide-react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const ResumeDocument = () => {
  const [language, setLanguage] = useState<'pt' | 'en'>('pt');
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const resumeRef = useRef<HTMLDivElement>(null);

    const resumeData = {
      pt: {
        name: "Kayque Allan",
        title: "Estudante de Engenharia de Software",
        contact: {
          email: "kayqueallanf@gmail.com",
          phone: "+55 (31) 99108-2537",
          location: "Minas Gerais, SP",
          github: "https://github.com/kayqueallan",
          linkedin: "linkedin.com/in/kayqueallan"
        },
        summary: "Sou estudante de Engenharia de Software na PUC Minas, apaixonado por tecnologia e desenvolvimento. Tenho experiência em projetos acadêmicos e reais, atuando no front-end e back-end, com integração de banco de dados e APIs. Destaco-me pela facilidade de aprendizado, comprometimento, organização e trabalho em equipe, buscando sempre evoluir e criar soluções eficientes.",
        
        experience: [
          {
            title: "Sócio de Empreendimento – Autônomo",
            company: "",
            period: "2022 – 2023",
            description: [
              "Criação de artes visuais e gestão de tráfego pago para pequenas empresas.",
              "Atendimento ao cliente, estratégias de marketing digital e branding.",
              "Desenvolvimento de habilidades em design gráfico, comunicação e organização."
            ]
          }
        ],

        projects: [
          {
            name: "PettEmCasa - Sistema de Gerenciamento para Hotel Pet",
            link: "https://github.com/kayqueallan",
            year: 2025,
            status: "Finalizado",
            description: [
              "Desenvolvimento de sistema completo para gerenciamento de um hotel pet.",
              "Funcionalidades: cadastro de clientes e pets, reservas, login e painel administrativo.",
              "Interface responsiva e intuitiva para administradores e clientes."
            ],
            technologies: ["HTML", "CSS", "JavaScript", "Node.js", "MySQL"]
          },
          {
            name: "Kallyer Transporte – Sistema de Gestão Empresarial",
            link: "",
            year: 2025,
            status: "Em desenvolvimento",
            description: [
              "Sistema para empresa de transporte, com foco em controle interno e acesso facilitado aos serviços.",
              "Funcionalidades em desenvolvimento: controle de viagens, gestão financeira por KM rodado e integração com painel administrativo."
            ],
            technologies: ["React", "CSS", "Tailwind CSS", "Node.js", "PostgreSQL", "API de rotas"]
          }
        ],
    
        education: [
          {
            degree: "Bacharelado em Engenharia de Software",
            school: "Pontifícia Universidade Católica de Minas Gerais (PUC MINAS)",
            period: "2023 - Atual",
            details: "Foco em desenvolvimento de software com base sólida em programação, modelagem, testes, bancos de dados e computação em nuvem."
          }
        ],
    
        skills: {
          frontend: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
          backend: ["Java", "Node.js", "Python", "Spring Boot", "SQL", "PostgreSQL"],
          tools: ["Git", "Docker", "AWS", "Figma"]
        },
    
        languages: [
          { language: "Português", level: "Nativo" },
          { language: "Inglês", level: "Intermediario" },
          { language: "Espanhol", level: "Básico" }
        ],
    
        complementaryCourses: [
          { name: "Desenvolvimento Web: HTML & CSS", provider: "B7Web", status: "Concluído" },
          { name: "JavaScript", provider: "B7Web", status: "Concluído" },
          { name: "React / TypeScript / Node.js", provider: "B7Web", status: "Em andamento" },
          { name: "Java e Banco de Dados", provider: "DevDojo", status: "Concluído" },
          { name: "Linux", provider: "Udemy", status: "Concluído" },
          { name: "Inglês / Espanhol", provider: "Fluency Academy", status: "Em andamento" }
        ],
      },
    
      en: {
        name: "Kayque Allan",
        title: "Software Engineering Student",
        contact: {
          email: "kayqueallanf@gmail.com",
          phone: "+55 (31) 99108-2537",
          location: "Minas Gerais, Brazil",
          github: "https://github.com/kayqueallan",
          linkedin: "linkedin.com/in/kayqueallan"
        },
        summary: "I am a Software Engineering student at PUC Minas, passionate about technology and development. I have experience in academic and real-world projects, working in both front-end and back-end, with database and API integration. I stand out for my quick learning, commitment, organization, and teamwork, always seeking to evolve and create efficient solutions.",
        
        experience: [
          {
            title: "Business Partner – Freelancer",
            company: "",
            period: "2022 – 2023",
            description: [
              "Creation of visual designs and paid traffic management for small businesses.",
              "Customer service, digital marketing strategies, and branding.",
              "Development of skills in graphic design, communication, and organization."
            ]
          }
        ],

        projects: [
          {
            name: "PettEmCasa - Pet Hotel Management System",
            link: "https://github.com/kayqueallan",
            year: 2025,
            status: "Completed",
            description: [
              "Full system development for pet hotel management.",
              "Features: client and pet registration, bookings, login, and admin dashboard.",
              "Responsive and intuitive interface for admins and customers."
            ],
            technologies: ["HTML", "CSS", "JavaScript", "Node.js", "MySQL"]
          },
          {
            name: "Kallyer Transporte – Business Management System",
            link: "",
            year: 2025,
            status: "In progress",
            description: [
              "System for a transport company focused on internal control and easy access to services.",
              "Features in development: trip control, financial management by mileage, and admin dashboard integration."
            ],
            technologies: ["React", "CSS", "Tailwind CSS", "Node.js", "PostgreSQL", "Route API"]
          }
        ],
    
        education: [
          {
            degree: "Bachelor's Degree in Software Engineering",
            school: "Pontifical Catholic University of Minas Gerais (PUC MINAS)",
            period: "2023 - Present",
            details: "Focus on software development with a solid foundation in programming, modeling, testing, databases, and cloud computing."
          }
        ],
    
        skills: {
          frontend: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
          backend: ["Java", "Node.js", "Python", "Spring Boot", "SQL", "PostgreSQL"],
          tools: ["Git", "Docker", "AWS", "Figma"]
        },
    
        languages: [
          { language: "Portuguese", level: "Native" },
          { language: "English", level: "Intermediate" },
          { language: "Spanish", level: "Basic" }
        ],
    
        complementaryCourses: [
          { name: "Web Development: HTML & CSS", provider: "B7Web", status: "Completed" },
          { name: "JavaScript", provider: "B7Web", status: "Completed" },
          { name: "React / TypeScript / Node.js", provider: "B7Web", status: "In progress" },
          { name: "Java and Databases", provider: "DevDojo", status: "Completed" },
          { name: "Linux", provider: "Udemy", status: "Completed" },
          { name: "English / Spanish", provider: "Fluency Academy", status: "In progress" }
        ],
    
      }
    };
    
  

  const currentData = resumeData[language];

  const generatePDF = async () => {
    if (!resumeRef.current) return;
    
    setIsGeneratingPDF(true);
    
    try {
      // Configurações otimizadas para melhor qualidade e formatação
      const canvas = await html2canvas(resumeRef.current, {
        scale: 1.5, // Escala otimizada para qualidade vs performance
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff', // Fundo branco para melhor legibilidade
        width: 800, // Largura fixa para melhor controle
        height: undefined, // Altura automática
        logging: false,
        removeContainer: true,
        foreignObjectRendering: false,
        imageTimeout: 15000,
        scrollX: 0,
        scrollY: 0,
        windowWidth: 800,
        windowHeight: resumeRef.current.scrollHeight,
        onclone: (clonedDoc) => {
          // Aplicar estilos específicos para PDF com texto preto para melhor legibilidade
          const clonedElement = clonedDoc.querySelector('[data-resume-content]') as HTMLElement;
          if (clonedElement) {
            clonedElement.style.width = '800px';
            clonedElement.style.maxWidth = '800px';
            clonedElement.style.margin = '0';
            clonedElement.style.padding = '40px';
            // Aplicar fundo branco e texto preto para melhor legibilidade
            clonedElement.style.backgroundColor = '#ffffff';
            clonedElement.style.color = '#000000';
            clonedElement.style.fontFamily = 'Arial, sans-serif';
            clonedElement.style.fontSize = '14px';
            clonedElement.style.lineHeight = '1.6';
            
            // Garantir que todo o conteúdo seja visível
            clonedElement.style.overflow = 'visible';
            clonedElement.style.height = 'auto';
            clonedElement.style.minHeight = 'auto';
            
            // Aplicar texto preto a todos os elementos para garantir legibilidade
            const allTextElements = clonedElement.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span, div, li');
            allTextElements.forEach((el) => {
              const element = el as HTMLElement;
              element.style.color = '#000000';
              element.style.fontWeight = element.tagName.match(/^h[1-6]$/) ? 'bold' : 'normal';
            });
            
            // Manter títulos com destaque mas legíveis
            const titles = clonedElement.querySelectorAll('h1, h2, h3, h4, h5, h6');
            titles.forEach((title) => {
              const titleElement = title as HTMLElement;
              titleElement.style.color = '#1e40af'; // Azul escuro para títulos
              titleElement.style.fontWeight = 'bold';
              titleElement.style.borderBottom = '2px solid #1e40af';
              titleElement.style.paddingBottom = '8px';
              titleElement.style.marginBottom = '16px';
            });
          }
        }
      });

      // Criar PDF
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgData = canvas.toDataURL('image/png', 1.0);
      
      // Dimensões do PDF A4
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      
      // Calcular dimensões da imagem para caber no PDF
      const imgWidth = pdfWidth - 20; // Margem de 10mm em cada lado
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      // Adicionar fundo branco à primeira página
      pdf.setFillColor(255, 255, 255);
      pdf.rect(0, 0, pdfWidth, pdfHeight, 'F');
      
      // Adicionar primeira página
      pdf.addImage(imgData, 'PNG', 10, 10, imgWidth, imgHeight);
      
      // Se a altura da imagem for maior que uma página, adicionar novas páginas
      let heightLeft = imgHeight;
      let position = 0;
      let pageCount = 1;
      
      while (heightLeft > (pdfHeight - 20)) { // Mudança para > para incluir todo o conteúdo
        position = heightLeft - (pdfHeight - 20);
        pdf.addPage();
        pageCount++;
        
        // Adicionar fundo branco à nova página
        pdf.setFillColor(255, 255, 255);
        pdf.rect(0, 0, pdfWidth, pdfHeight, 'F');
        
        // Ajustar posição para evitar cortes
        const adjustedPosition = Math.max(0, -position + 10);
        pdf.addImage(imgData, 'PNG', 10, adjustedPosition, imgWidth, imgHeight);
        heightLeft -= (pdfHeight - 20);
      }
      
      console.log(`PDF gerado com ${pageCount} páginas`);
      
      // Baixar o PDF
      const timestamp = new Date().toISOString().split('T')[0];
      const fileName = `Kayque_Allan_Resume_${language.toUpperCase()}_${timestamp}.pdf`;
      pdf.save(fileName);
      
    } catch (error) {
      console.error('Erro ao gerar PDF:', error);
      alert('Erro ao gerar o PDF. Tente novamente.');
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  return (
    <section id="resume" className="py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {language === 'pt' ? 'Currículo' : 'Resume'}
          </h2>
          
          <div className="flex justify-center gap-4 mb-8">
            <Button 
              variant={language === 'pt' ? 'default' : 'outline'}
              onClick={() => setLanguage('pt')}
              className="gap-2"
            >
              <Globe className="w-4 h-4" />
              Português
            </Button>
            <Button 
              variant={language === 'en' ? 'default' : 'outline'}
              onClick={() => setLanguage('en')}
              className="gap-2"
            >
              <Globe className="w-4 h-4" />
              English
            </Button>
          </div>
        </div>

        {/* Resume Document */}
        <div className="max-w-4xl mx-auto">
          <Card ref={resumeRef} data-resume-content className="p-8 md:p-12 bg-card/80 backdrop-blur-sm border-border/50 shadow-glow animate-fade-in">
            {/* Header */}
            <div className="border-b border-border pb-6 mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                {currentData.name}
              </h1>
              <p className="text-xl text-primary font-medium mb-4">
                {currentData.title}
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>{currentData.contact.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>{currentData.contact.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{currentData.contact.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Github className="w-4 h-4" />
                  <span className="story-link">{currentData.contact.github}</span>
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-primary mb-3">
                {language === 'pt' ? 'Resumo Profissional' : 'Professional Summary'}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {currentData.summary}
              </p>
            </div>

            {/* Experience */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-primary mb-6">
                {language === 'pt' ? 'Experiência Profissional' : 'Professional Experience'}
              </h3>
              <div className="space-y-6">
                {currentData.experience.map((exp, index) => (
                  <div key={index} className="border-l-2 border-primary pl-6 hover-scale">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                      <h4 className="text-lg font-bold text-foreground">{exp.title}</h4>
                      <span className="text-sm text-accent font-medium">{exp.period}</span>
                    </div>
                    <p className="text-primary font-medium mb-3">{exp.company}</p>
                    <ul className="space-y-1 text-muted-foreground">
                      {exp.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2">
                          <span className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects */}
            {currentData.projects && currentData.projects.length > 0 && (
              <div className="mb-8">
                <h3 className="text-xl font-bold text-primary mb-6">
                  {language === 'pt' ? 'Projetos (selecionados)' : 'Selected Projects'}
                </h3>
                <div className="space-y-6">
                  {currentData.projects.map((project, index) => (
                    <div key={index} className="border-l-2 border-purple-600 pl-6 hover-scale">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                        <h4 className="text-lg font-bold text-foreground">
                          {project.name}
                          {project.link && (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="ml-2 text-accent text-sm underline"
                            >
                              [GitHub]
                            </a>
                          )}
                        </h4>
                        <span className="text-sm text-accent font-medium">
                          {project.year} ({project.status})
                        </span>
                      </div>
                      <ul className="space-y-1 text-muted-foreground mb-2">
                        {project.description.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-2">
                            <span className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="text-muted-foreground text-sm">
                        <strong className="text-foreground">Tecnologias:</strong> {project.technologies.join(', ')}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Education */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-primary mb-4">
                {language === 'pt' ? 'Formação Acadêmica' : 'Education'}
              </h3>
              {currentData.education.map((edu, index) => (
                <div key={index} className="hover-scale">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <h4 className="text-lg font-bold text-foreground">{edu.degree}</h4>
                    <span className="text-sm text-accent font-medium">{edu.period}</span>
                  </div>
                  <p className="text-primary font-medium mb-2">{edu.school}</p>
                  <p className="text-muted-foreground">{edu.details}</p>
                </div>
              ))}
            </div>


            {/* Complementary Courses */}
              <div className="mt-8">
                <h3 className="text-xl font-bold text-primary mb-4">
                  {language === 'pt' ? 'Cursos Complementares' : 'Complementary Courses'}
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  {currentData.complementaryCourses.map((course, index) => (
                    <li key={index} className="border-l-2 border-purple-600 pl-6 hover-scale">
                      <p className="font-semibold text-foreground">{course.name}</p>
                      <p className="text-sm">
                        {course.provider} — <span className="italic">{course.status}</span>
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              <br />


            {/* Skills */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-primary mb-4">
                {language === 'pt' ? 'Habilidades Técnicas' : 'Technical Skills'}
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Front-end</h4>
                  <div className="flex flex-wrap gap-2">
                    {currentData.skills.frontend.map((skill, index) => (
                      <span key={index} className="px-2 py-1 bg-primary/20 text-primary text-xs rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Back-end</h4>
                  <div className="flex flex-wrap gap-2">
                    {currentData.skills.backend.map((skill, index) => (
                      <span key={index} className="px-2 py-1 bg-accent/20 text-accent text-xs rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    {language === 'pt' ? 'Ferramentas' : 'Tools'}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {currentData.skills.tools.map((skill, index) => (
                      <span key={index} className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            

            {/* Languages */}
            <div>
              <h3 className="text-xl font-bold text-primary mb-4">
                {language === 'pt' ? 'Idiomas' : 'Languages'}
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                {currentData.languages.map((lang, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-muted/30 rounded">
                    <span className="text-foreground">{lang.language}</span>
                    <span className="text-primary text-sm font-medium">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          

          
          <div className="text-center mt-8">
            <Button 
              onClick={generatePDF}
              disabled={isGeneratingPDF}
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:shadow-glow transition-all duration-300 gap-2 animate-glow disabled:opacity-50"
            >
              {isGeneratingPDF ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  {language === 'pt' ? 'Gerando PDF...' : 'Generating PDF...'}
                </>
              ) : (
                <>
                  <Download className="w-5 h-5" />
                  {language === 'pt' ? 'Baixar PDF' : 'Download PDF'}
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};



export default ResumeDocument;