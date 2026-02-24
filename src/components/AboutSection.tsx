import { useScrollReveal } from "@/hooks/useScrollReveal";
import { GraduationCap, Code2, Rocket } from "lucide-react";

const AboutSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="py-24 relative gradient-bg">
      <div className="container mx-auto px-6" ref={ref}>
        <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-center mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-xl mx-auto mb-16">
            A passionate developer on a mission to build impactful technology.
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Bio */}
            <div className="glass rounded-2xl p-8 neon-border">
              <p className="text-secondary-foreground leading-relaxed mb-6">
                I'm a <span className="text-primary font-medium">B.Tech 3rd Year</span> student (Graduating 2027) and a passionate self-taught developer.
                With freelancer experience in web development, I'm focused on{" "}
                <span className="text-primary font-medium">MERN stack mastery</span> and building real-world scalable applications.
              </p>
              <p className="text-secondary-foreground leading-relaxed">
                Currently deepening my knowledge in DSA, aptitude, and system-level thinking. My mission is to build impactful tech and grow into a
                top product engineer at leading companies.
              </p>
            </div>

            {/* Timeline */}
            <div className="space-y-8">
              {[
                { icon: GraduationCap, title: "B.Tech (Expected 2027)", sub: "Siddharth Institute of Engineering and Technology", desc: "Pursuing Computer Science with focus on software engineering" },
                { icon: Code2, title: "Self-Taught Developer", sub: "Continuous Learning", desc: "MERN Stack, React, Node.js, and modern web technologies" },
                { icon: Rocket, title: "Freelance Experience", sub: "Real-world Projects", desc: "Building web applications for clients and personal projects" },
              ].map((item, i) => (
                <div key={i} className="flex gap-4" style={{ transitionDelay: `${i * 150}ms` }}>
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary">
                      <item.icon size={18} />
                    </div>
                    {i < 2 && <div className="w-px h-full bg-gradient-to-b from-primary/30 to-transparent mt-2" />}
                  </div>
                  <div className="glass rounded-xl p-4 flex-1">
                    <h4 className="font-display font-semibold text-foreground">{item.title}</h4>
                    <p className="text-primary text-sm">{item.sub}</p>
                    <p className="text-muted-foreground text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
