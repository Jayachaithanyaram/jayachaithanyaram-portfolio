import profileImg from "@/assets/profile.png";
import TypeWriter from "./TypeWriter";
import { ArrowDown, Download, Mail } from "lucide-react";

const HeroSection = () => {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-bg">
      {/* Animated bg orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl float-animation" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl float-animation" style={{ animationDelay: "3s" }} />

      <div className="container mx-auto px-6 pt-24 pb-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4 opacity-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Welcome to my portfolio
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4 opacity-0 animate-fade-up" style={{ animationDelay: "0.4s" }}>
              Hi, I'm{" "}
              <span className="text-gradient shine-effect">
                Mirappalli Jaya Chaithanya Ram
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-2 opacity-0 animate-fade-up" style={{ animationDelay: "0.6s" }}>
              Full Stack MERN Developer | UI-Focused Engineer | Problem Solver
            </p>
            <div className="text-xl sm:text-2xl h-10 mb-8 opacity-0 animate-fade-up" style={{ animationDelay: "0.8s" }}>
              <TypeWriter />
            </div>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start opacity-0 animate-fade-up" style={{ animationDelay: "1s" }}>
              <button onClick={() => scrollTo("projects")} className="glass neon-border px-6 py-3 rounded-lg font-medium text-primary hover:bg-primary/10 transition-all duration-300 flex items-center gap-2">
                <ArrowDown size={18} /> View Projects
              </button>
              <a href="#" className="glass px-6 py-3 rounded-lg font-medium text-foreground hover:bg-card/80 transition-all duration-300 flex items-center gap-2">
                <Download size={18} /> Download Resume
              </a>
              <button onClick={() => scrollTo("contact")} className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-all duration-300 neon-glow flex items-center gap-2">
                <Mail size={18} /> Contact Me
              </button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-shrink-0 order-1 lg:order-2 opacity-0 animate-fade-up" style={{ animationDelay: "0.6s" }}>
            <div className="relative float-animation">
              <div className="w-56 h-56 sm:w-72 sm:h-72 rounded-full overflow-hidden neon-border border-2 pulse-glow">
                <img src={profileImg} alt="Jaya Chaithanya Ram" className="w-full h-full object-cover" />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/10 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
