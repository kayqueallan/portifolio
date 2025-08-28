import { useState } from "react";
import profilePhoto from "@/assets/profile-photo.jpg";
import codingGif from "@/assets/coding-background.gif";
import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter, MapPin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const Home = () => {
  const { t } = useLanguage();
  
  const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/kayqueallan/" },
    { name: "GitHub", icon: Github, url: "https://github.com/kayqueallan" },
    { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/rkayque_/" },
  ];

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
                  {t('homeTitle')}
                </h2>
              </div>
              
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  {t('homeDescription1')}
                </p>
                
                <p>
                  {t('homeDescription2')}
                </p>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>{t('homeLocation')}</span>
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
        </div>
      </div>
    </div>
  );
};

export default Home;

