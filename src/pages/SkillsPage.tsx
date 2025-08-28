import { useState } from "react";
import { Code, Server, Database, Palette } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const SkillsPage = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Frontend", "Backend", "Database", "Design", "Tools"];

  const skills = [
    { name: "React", category: "Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "bg-blue-500" },
    { name: "TypeScript", category: "Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", color: "bg-blue-600" },
    { name: "JavaScript", category: "Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", color: "bg-yellow-500" },
    { name: "Tailwind CSS", category: "Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", color: "bg-cyan-500" },
    { name: "Java", category: "Backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", color: "bg-orange-600" },
    { name: "Spring Boot", category: "Backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg", color: "bg-green-600" },
    { name: "Node.js", category: "Backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", color: "bg-green-500" },
    { name: "PostgreSQL", category: "Database", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", color: "bg-blue-700" },
    { name: "MySQL", category: "Database", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", color: "bg-orange-500" },
    { name: "Figma", category: "Design", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", color: "bg-purple-600" },
    { name: "HTML", category: "Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", color: "bg-orange-500" },
    { name: "CSS", category: "Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", color: "bg-blue-500" },
    { name: "Git", category: "Tools", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", color: "bg-orange-600" },
    { name: "Docker", category: "Tools", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", color: "bg-blue-600" },
  ];

  const filteredSkills = activeCategory === "All" 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <div className="min-h-screen bg-background pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t('skillsTitle')} <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{t('skillsTitleHighlight')}</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('skillsSubtitle')}
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-glow"
                  : "bg-card/50 text-muted-foreground hover:bg-card hover:text-foreground border border-border/50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 max-w-7xl mx-auto">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="group bg-card/30 backdrop-blur-sm rounded-xl p-6 border border-border/20 hover:shadow-soft transition-all duration-300 hover:scale-105 text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
              </div>
              <h3 className="text-sm font-medium text-foreground mb-1">{skill.name}</h3>
              <p className="text-xs text-muted-foreground">{skill.category}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;