import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";
import { Mail, Linkedin, Github, Send } from "lucide-react";

const ContactSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:jayachaithanyaram@gmail.com?subject=Portfolio Contact from ${form.name}&body=${form.message}`;
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6" ref={ref}>
        <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-center mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-xl mx-auto mb-16">
            Have a project in mind or just want to say hello? Reach out!
          </p>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Info */}
            <div className="space-y-6">
              <div className="glass rounded-2xl p-6 neon-border">
                <h3 className="font-display font-semibold text-foreground mb-4">Get in Touch</h3>
                <div className="space-y-4">
                  <a href="mailto:jayachaithanyaram@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                    <Mail size={18} className="text-primary" /> jayachaithanyaram@gmail.com
                  </a>
                  <a href="https://www.linkedin.com/in/jaya-chaithanya-ram-m-1a1b35360" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                    <Linkedin size={18} className="text-primary" /> LinkedIn Profile
                  </a>
                  <a href="https://github.com/Jayachaithanyaram" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                    <Github size={18} className="text-primary" /> GitHub Profile
                  </a>
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 neon-border space-y-5">
              {[
                { key: "name" as const, label: "Your Name", type: "text" },
                { key: "email" as const, label: "Your Email", type: "email" },
              ].map((field) => (
                <div key={field.key} className="relative">
                  <input
                    type={field.type}
                    required
                    value={form[field.key]}
                    onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                    placeholder={field.label}
                    className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all"
                  />
                </div>
              ))}
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Your Message"
                className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all resize-none"
              />
              <button type="submit" className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-medium hover:opacity-90 transition-all neon-glow flex items-center justify-center gap-2">
                <Send size={18} /> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
