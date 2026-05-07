import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "Accueil", href: "#accueil" },
  { label: "À propos", href: "#apropos" },
  { label: "Activités", href: "#activites" },
  { label: "Galerie", href: "#galerie" },
  { label: "Adhésion", href: "#adhesion" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/90 backdrop-blur-md shadow-card border-b border-border"
          : "bg-transparent"
      )}
    >
      <nav className="container-custom flex items-center justify-between h-16 md:h-20">
        <a href="#accueil" className="flex items-center gap-2 group">
          <div className="w-11 h-11 md:w-12 md:h-12 rounded-full overflow-hidden ring-2 ring-secondary/40 shadow-elegant">
            <img src={logo} alt="Logo C.O.K.S.B.S.A" className="w-full h-full object-cover" />
          </div>
          <div className="leading-tight">
            <div className="font-display font-bold text-base md:text-lg text-primary">
              C.O.K.S.B.S.A
            </div>
            <div className="text-[10px] md:text-xs text-muted-foreground tracking-wide">
              Keur Serigne Babacar Sy Abdou
            </div>
          </div>
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-secondary after:transition-all hover:after:w-full"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button asChild variant="hero" size="default">
            <a href="#adhesion">Rejoindre maintenant</a>
          </Button>
        </div>

        <button
          className="lg:hidden p-2 text-primary"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-background border-t border-border shadow-card">
          <ul className="container-custom py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-3 rounded-md text-sm font-medium text-foreground/80 hover:bg-muted hover:text-primary"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <Button asChild variant="hero" className="w-full">
                <a href="#adhesion" onClick={() => setOpen(false)}>
                  Rejoindre maintenant
                </a>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
