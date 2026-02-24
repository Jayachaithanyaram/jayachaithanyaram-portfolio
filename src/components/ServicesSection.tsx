import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useTilt } from "@/hooks/useTilt";
import { Layout, Server, Plug, Smartphone, User } from "lucide-react";

const services = [
  { icon: Layout, title: "Frontend Web Development", desc: "React-based modern UIs with clean, responsive design." },
  { icon: Server, title: "MERN Stack Applications", desc: "Full-stack web apps with MongoDB, Express, React, Node." },
  { icon: Plug, title: "API Integration", desc: "Seamless third-party API integrations and RESTful services." },
  { icon: Smartphone, title: "Responsive Design", desc: "Mobile-first websites that look great on every device." },
  { icon: User, title: "Portfolio Development", desc: "Stunning personal portfolio websites for professionals." },
];

const ServiceCard = ({ service }: { service: typeof services[0] }) => {
  const tilt = useTilt(6);
  return (
    <div
      ref={tilt.ref}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      className="glass rounded-2xl p-6 neon-border text-center hover:bg-card/60 transition-all duration-300"
      style={{ transition: "transform 0.15s ease-out" }}
    >
      <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mx-auto mb-4">
        <service.icon size={24} />
      </div>
      <h3 className="font-display font-semibold text-foreground mb-2">{service.title}</h3>
      <p className="text-muted-foreground text-sm">{service.desc}</p>
    </div>
  );
};

const ServicesSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-6" ref={ref}>
        <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-center mb-4">
            What I <span className="text-gradient">Offer</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-xl mx-auto mb-16">
            Services I provide to help bring your ideas to life.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <ServiceCard key={s.title} service={s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
