import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useTilt } from "@/hooks/useTilt";
import { ExternalLink, Github, Heart, Search, ShoppingCart } from "lucide-react";

const projects = [
  {
    title: "Health & Medication Suggestion App",
    desc: "AI-based symptom analysis logic with full frontend + backend structure for health recommendations.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    icon: Heart,
    github: "https://github.com/Jayachaithanyaram",
  },
  {
    title: "GitHub Search Application",
    desc: "Search GitHub profiles and display profile image, name, repo count, and followers in real-time.",
    tech: ["React", "GitHub API", "CSS"],
    icon: Search,
    github: "https://github.com/Jayachaithanyaram",
  },
  {
    title: "Full Stack E-Commerce (Learning)",
    desc: "An attempted full-stack e-commerce platform built during the learning phase to understand complex architectures.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    icon: ShoppingCart,
    github: "https://github.com/Jayachaithanyaram",
  },
];

const ProjectCard = ({ project, delay }: { project: typeof projects[0]; delay: number }) => {
  const tilt = useTilt(6);
  return (
    <div
      ref={tilt.ref}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      className="glass rounded-2xl p-6 neon-border group hover:bg-card/60 transition-all duration-300"
      style={{ transition: "transform 0.15s ease-out" }}
    >
      <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4">
        <project.icon size={24} />
      </div>
      <h3 className="font-display text-lg font-semibold text-foreground mb-2">{project.title}</h3>
      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.desc}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((t) => (
          <span key={t} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
            {t}
          </span>
        ))}
      </div>
      <div className="flex gap-3">
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors">
          <Github size={16} /> GitHub
        </a>
        <a href="#" className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors">
          <ExternalLink size={16} /> Live Demo
        </a>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="projects" className="py-24 relative gradient-bg">
      <div className="container mx-auto px-6" ref={ref}>
        <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-center mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-xl mx-auto mb-16">
            Real-world applications I've built to solve problems and learn new technologies.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((p, i) => (
              <ProjectCard key={p.title} project={p} delay={i * 150} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
