import { Facebook, Instagram, Youtube, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom py-14">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-secondary/40 shadow-gold">
                <img src={logo} alt="Logo C.O.K.S.B.S.A" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="font-display font-bold text-lg">C.O.K.S.B.S.A</p>
                <p className="text-xs text-primary-foreground/70">
                  Keur Serigne Babacar Sy Abdou
                </p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              Une communauté unie autour de la foi, de la fraternité et de
              l'engagement spirituel au service de la Oumma du HADARA Malikia.
            </p>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="font-display text-secondary font-semibold mb-4 text-base">
              Liens rapides
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                ["Accueil", "#accueil"],
                ["À propos", "#apropos"],
                ["Activités", "#activites"],
                ["Adhésion", "#adhesion"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-primary-foreground/70 hover:text-secondary transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Réseaux */}
          <div>
            <h3 className="font-display text-secondary font-semibold mb-4 text-base">
              Restez en contact
            </h3>
            <ul className="space-y-3 text-sm mb-5">
              <li className="flex items-center gap-2 text-primary-foreground/70">
                <Phone className="w-4 h-4 text-secondary" />
                <span>+221 77 154 72 67</span>
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/70">
                <Mail className="w-4 h-4 text-secondary" />
                <span>ramatoulayediouf074@gmail.com</span>
              </li>
            </ul>
            <div className="flex gap-3">
              {[Facebook, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Réseau social"
                  className="w-9 h-9 rounded-full bg-primary-foreground/10 hover:bg-secondary hover:text-secondary-foreground flex items-center justify-center transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/15 mt-10 pt-6 text-center">
          <p className="text-xs text-primary-foreground/60">
            © {year} C.O.K.S.B.S.A — Communauté d'Organisation Keur Serigne Babacar Sy Abdou. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
