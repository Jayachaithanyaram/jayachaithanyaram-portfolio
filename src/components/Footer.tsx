import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="py-8 border-t border-border">
    <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-muted-foreground text-sm">
        © 2025 <span className="text-primary font-medium">Jaya Chaithanya Ram</span>. All rights reserved.
      </p>
      <div className="flex gap-4">
        {[
          { icon: Github, href: "https://github.com/Jayachaithanyaram" },
          { icon: Linkedin, href: "https://www.linkedin.com/in/jaya-chaithanya-ram-m-1a1b35360" },
          { icon: Mail, href: "mailto:jayachaithanyaram@gmail.com" },
        ].map(({ icon: Icon, href }) => (
          <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary hover:neon-border transition-all">
            <Icon size={16} />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
