import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = ["Home", "About", "Skills", "Projects", "Services", "Vision", "Contact"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setOpen(false);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass-strong py-3" : "py-5"}`}>
      <div className="container mx-auto flex items-center justify-between px-6">
        <button onClick={() => scrollTo("home")} className="font-display text-xl font-bold neon-text tracking-tight">
          JCR<span className="text-foreground">.</span>
        </button>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <button key={l} onClick={() => scrollTo(l)} className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
              {l}
            </button>
          ))}
        </div>
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden glass-strong mt-2 mx-4 rounded-lg p-4 flex flex-col gap-3">
          {links.map((l) => (
            <button key={l} onClick={() => scrollTo(l)} className="text-sm text-muted-foreground hover:text-primary transition-colors py-2 text-left">
              {l}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
