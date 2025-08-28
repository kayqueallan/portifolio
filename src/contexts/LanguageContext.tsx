
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  pt: {
    // Navigation
    home: 'Home',
    skills: 'Skills',
    resume: 'Currículo',
    experience: 'Experiência',
    projects: 'Projetos',
    contact: 'Contato',
    
    // Home page
    homeTitle: 'Estudante de Engenharia de Software.',
    homeDescription1: 'Olá! Sou Kayque Allan, estudante do 4º período de Engenharia de Software na PUC Minas, com grande interesse em programação e design digital. Participo de projetos, cursos e hackathons para desenvolver minhas habilidades e buscar soluções criativas e funcionais.',
    homeDescription2: 'Atualmente, também estudo inglês e espanhol para ampliar minhas oportunidades de colaboração no mercado global. Aqui você encontra alguns dos meus projetos e experiências sinta-se à vontade para conhecer!',
    homeLocation: 'Minas Gerais, Brasil',
    
    // Skills page
    skillsTitle: 'Minhas',
    skillsTitleHighlight: 'Skills',
    skillsSubtitle: 'Conheça algumas das minhas habilidades técnicas aqui.',
    
    // Projects page
    projectsTitle: 'Projetos',
    projectsSubtitle: 'Desenvolvo soluções tecnológicas eficientes que transformam desafios complexos em resultados concretos e escaláveis.',
    codeButton: 'Código',
    demoButton: 'Demo',
    project1Title: 'Pet Em Casa (Hotel para Pet)',
    project1Description: 'Pet em Casa é um sistema web para gerenciar hospedagens de pets, registrar dados, controlar pertences e automatizar atendimentos, trazendo mais organização e confiança para tutores e equipe.',
    project2Title: 'Dropfleet',
    project2Description: 'A Dropfleet é uma plataforma para gestão e rastreamento de pedidos em tempo real, feita para donos de e-commerce e dropshipping. Com interface intuitiva e integração global, facilita o acompanhamento de entregas do pedido até o cliente final.',
    project3Title: 'Hotel Descansar',
    project3Description: 'Um projeto desenvolvido em C para o Hotel, como parte de um trabalho acadêmico. Automatiza o cadastro de clientes, funcionários e estadias, simplificando a gestão manual com planilhas e garantindo integridade de dados.',
    
    // Contact page
    contactTitle: 'Vamos Conversar?',
    contactSubtitle: 'Estou sempre aberto a novas oportunidades, projetos interessantes e colaborações. Entre em contato comigo através do formulário ou pelos canais abaixo.',
    contactInfo: 'Informações de Contato',
    contactEmail: 'Email',
    contactPhone: 'Telefone',
    contactLocation: 'Localização',
    contactSocialMedia: 'Redes Sociais',
    contactFormTitle: 'Enviar Mensagem',
    contactFormName: 'Nome',
    contactFormNamePlaceholder: 'Seu nome completo',
    contactFormEmail: 'Email',
    contactFormEmailPlaceholder: 'seu@email.com',
    contactFormSubject: 'Assunto',
    contactFormSubjectPlaceholder: 'Assunto da sua mensagem',
    contactFormMessage: 'Mensagem',
    contactFormMessagePlaceholder: 'Descreva seu projeto ou dúvida...',
    contactFormSending: 'Enviando...',
    contactFormSend: 'Enviar Mensagem',
    contactSuccessTitle: 'Mensagem enviada com sucesso!',
    contactSuccessDescription: 'Obrigado pelo contato. Responderei em breve!',
    contactErrorTitle: 'Erro ao enviar mensagem',
    contactErrorDescription: 'Ocorreu um erro. Tente novamente ou entre em contato diretamente pelo email.',
    
    // Experience page
    experiences: 'Experiências',
    experiencesSubtitle: 'Veja um pouco sobre minha jornada.',
    work: 'Trabalho',
    exp1Title: 'Fullstack Developer - Experimental Agency',
    exp1Company: 'Puc Minas',
    exp1Period: 'Agosto de 2025 — Atual',
    exp1Description: 'Trabalho como Desenvolvedor FullStack na Agência Experimental da Puc Minas, participando ativamente dos projetos Grade Inteligente e Landing Page, onde ganhei experiência prática em iniciativas sem fins lucrativos. Desenvolvo usando Java com SpringBoot e TypeScript no frontend.',
    exp2Title: 'FullStack Development Intern',
    exp2Company: '4mti',
    exp2Period: 'Fevereiro de 2025 — Atual',
    exp2Description: 'Trabalho no desenvolvimento de soluções automatizadas e manipulação de grandes volumes de dados usando PHP, Python, HTML e PostgreSQL. Crio bots e automações para otimizar processos, além de contribuir para o frontend de aplicações e gerenciamento de banco de dados.',
    exp3Title: 'Freelancer - Web Development',
    exp3Company: 'Voogle',
    exp3Period: 'Dezembro de 2024 — Janeiro de 2025',
    exp3Description: 'Desenvolvi uma página web personalizada para um cliente, atendendo às suas necessidades específicas de design e funcionalidade. Para o projeto, usei React, TypeScript e outras tecnologias modernas para criar uma interface intuitiva.'
  },
  en: {
    // Navigation
    home: 'Home',
    skills: 'Skills',
    resume: 'Resume',
    experience: 'Experience',
    projects: 'Projects',
    contact: 'Contact',
    
    // Home page
    homeTitle: 'Software Engineering Student.',
    homeDescription1: 'Hello! I\'m Kayque Allan, a 4th semester Software Engineering student at PUC Minas, with great interest in programming and digital design. I participate in projects, courses, and hackathons to develop my skills and seek creative and functional solutions.',
    homeDescription2: 'Currently, I also study English and Spanish to expand my opportunities for collaboration in the global market. Here you can find some of my projects and experiences - feel free to explore!',
    homeLocation: 'Minas Gerais, Brazil',
    
    // Skills page
    skillsTitle: 'My',
    skillsTitleHighlight: 'Skills',
    skillsSubtitle: 'Learn about some of my technical skills here.',
    
    // Projects page
    projectsTitle: 'Projects',
    projectsSubtitle: 'I develop efficient technological solutions that transform complex challenges into concrete and scalable results.',
    codeButton: 'Code',
    demoButton: 'Demo',
    project1Title: 'Pet Em Casa (Pet Hotel)',
    project1Description: 'Pet em Casa is a web system to manage pet accommodations, register data, control belongings and automate services, bringing more organization and trust for pet owners and staff.',
    project2Title: 'Dropfleet',
    project2Description: 'Dropfleet is a platform for real-time order management and tracking, made for e-commerce and dropshipping owners. With intuitive interface and global integration, it facilitates delivery tracking from order to final customer.',
    project3Title: 'Hotel Descansar',
    project3Description: 'A project developed in C for the Hotel, as part of an academic work. Automates customer, employee and stay registration, simplifying manual management with spreadsheets and ensuring data integrity.',
    
    // Contact page
    contactTitle: 'Let\'s Talk?',
    contactSubtitle: 'I\'m always open to new opportunities, interesting projects, and collaborations. Contact me through the form below or through the channels listed.',
    contactInfo: 'Contact Information',
    contactEmail: 'Email',
    contactPhone: 'Phone',
    contactLocation: 'Location',
    contactSocialMedia: 'Social Media',
    contactFormTitle: 'Send Message',
    contactFormName: 'Name',
    contactFormNamePlaceholder: 'Your full name',
    contactFormEmail: 'Email',
    contactFormEmailPlaceholder: 'your@email.com',
    contactFormSubject: 'Subject',
    contactFormSubjectPlaceholder: 'Subject of your message',
    contactFormMessage: 'Message',
    contactFormMessagePlaceholder: 'Describe your project or question...',
    contactFormSending: 'Sending...',
    contactFormSend: 'Send Message',
    contactSuccessTitle: 'Message sent successfully!',
    contactSuccessDescription: 'Thank you for contacting me. I will reply shortly!',
    contactErrorTitle: 'Error sending message',
    contactErrorDescription: 'An error occurred. Try again or contact me directly by email.',
    
    // Experience page
    experiences: 'Experiences',
    experiencesSubtitle: 'See here a little about my journey.',
    work: 'Work',
    exp1Title: 'Fullstack Developer - Experimental Agency',
    exp1Company: 'Puc Minas',
    exp1Period: 'August 2025 — Current',
    exp1Description: 'I work as a FullStack Developer at Puc Minas\' Experimental Agency, actively participating in the Grade Inteligente and Landing Page projects, where I gained practical experience in non-profit initiatives. I develop using Java with SpringBoot, and TypeScript on the frontend.',
    exp2Title: 'FullStack Development Intern',
    exp2Company: '4mti',
    exp2Period: 'February 2025 — Current',
    exp2Description: 'I work on the development of automated solutions and handling large volumes of data using PHP, Python, HTML, and PostgreSQL. I create bots and automations to optimize processes, as well as contribute to the frontend of applications and database management.',
    exp3Title: 'Freelancer - Web Development',
    exp3Company: 'Voogle',
    exp3Period: 'December 2024 — January 2025',
    exp3Description: 'I developed a personalized web page for a client, meeting their specific design and functionality needs. For the project, I used React, TypeScript, and other modern technologies to create an intuitive interface.'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['pt']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
