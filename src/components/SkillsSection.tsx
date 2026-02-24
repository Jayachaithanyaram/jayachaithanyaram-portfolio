import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useTilt } from "@/hooks/useTilt";

const categories = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "HTML & CSS", level: 90 },
      { name: "Tailwind CSS", level: 85 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 70 },
      { name: "Express.js", level: 70 },
      { name: "MongoDB", level: 65 },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git & GitHub", level: 80 },
      { name: "API Integration", level: 75 },
      { name: "Deployment", level: 70 },
      { name: "Basic DSA", level: 55 },
    ],
  },
];

const SkillCard = ({ category, delay }: { category: typeof categories[0]; delay: number }) => {
  const tilt = useTilt(8);
  return (
    <div
      ref={tilt.ref}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      className="glass rounded-2xl p-6 neon-border transition-all duration-300 hover:bg-card/60"
      style={{ transitionDelay: `${delay}ms`, transition: "transform 0.15s ease-out" }}
    >
      <h3 className="font-display text-xl font-semibold text-primary mb-6">{category.title}</h3>
      <div className="space-y-4">
        {category.skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-foreground">{skill.name}</span>
              <span className="text-muted-foreground">{skill.level}%</span>
            </div>
            <div className="h-2 rounded-full bg-muted overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-out"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-center mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-xl mx-auto mb-16">
            Technologies I work with to build modern web applications.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((cat, i) => (
              <SkillCard key={cat.title} category={cat} delay={i * 150} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
