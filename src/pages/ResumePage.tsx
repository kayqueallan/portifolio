import ResumeDocument from "@/components/ResumeDocument";
import codingGif from "@/assets/coding-background.gif";

const ResumePage = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated GIF Background */}
      <div 
        className="absolute inset-0 opacity-10 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${codingGif})`,
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/90" />
      
      <div className="relative z-10 py-20">
        <ResumeDocument />
      </div>
    </div>
  );
};

export default ResumePage;