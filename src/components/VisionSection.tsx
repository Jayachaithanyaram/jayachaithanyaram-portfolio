import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Quote } from "lucide-react";

const VisionSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="vision" className="py-24 relative gradient-bg">
      <div className="container mx-auto px-6 max-w-3xl" ref={ref}>
        <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-center mb-16">
            My <span className="text-gradient">Vision</span>
          </h2>
          <div className="glass rounded-2xl p-8 sm:p-12 neon-border text-center relative">
            <Quote className="text-primary/20 absolute top-6 left-6" size={48} />
            <p className="text-lg sm:text-xl text-secondary-foreground leading-relaxed font-display relative z-10">
              "I aim to build scalable, user-focused products and become a top full-stack engineer in leading product-based companies like{" "}
              <span className="text-primary font-semibold">FAANG</span>. I believe in continuous learning, execution, and building real-world
              impactful systems."
            </p>
            <div className="mt-6 w-16 h-0.5 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
            <p className="mt-4 text-muted-foreground text-sm">— Jaya Chaithanya Ram</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
