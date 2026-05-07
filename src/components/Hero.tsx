import { Button } from "@/components/ui/button";
import { ArrowRight, Heart } from "lucide-react";
import heroImage from "@/assets/hero-mosque.jpg";

const Hero = () => {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Silhouette de mosquée au coucher du soleil"
          width={1920}
          height={1280}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 text-center pt-20 pb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/15 border border-secondary/30 backdrop-blur-sm mb-8">
          <Heart className="w-3.5 h-3.5 text-secondary" />
          <span className="text-xs md:text-sm text-secondary font-medium tracking-wide">
            Communauté religieuse & sociale
          </span>
        </div>

        <p className="font-arabic text-secondary/90 text-2xl md:text-3xl mb-4">
          بسم الله الرحمن الرحيم
        </p>

        <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary-foreground mb-6 leading-tight">
          C.O.K.S.B.S.A
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-primary-foreground/90 font-display italic mb-4 max-w-3xl mx-auto">
          Communauté d'Organisation Keur Serigne Babacar Sy Abdou
        </p>

        <p className="text-base md:text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          Une communauté unie autour de la foi, de la fraternité et de l'engagement
          spirituel. Ensemble, perpétuons l'héritage et l'organisation
          d'événements religieux significatifs.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="hero" size="xl">
            <a href="#adhesion">
              Rejoindre la communauté
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
          <Button asChild variant="outlineLight" size="xl">
            <a href="#apropos">En savoir plus</a>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
        <div className="w-6 h-10 border-2 border-secondary/60 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-secondary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
