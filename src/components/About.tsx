import { Target, Users, Sparkles } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Notre Mission",
    text: "Organiser et promouvoir des événements religieux significatifs pour renforcer la foi et la solidarité au sein de la Oumma du HADARA Malikia.",
  },
  {
    icon: Users,
    title: "Nos Valeurs",
    text: "Fraternité, respect, entraide et engagement spirituel. Nous bâtissons une communauté unie autour des enseignements de Serigne Babacar Sy Abdou.",
  },
  {
    icon: Sparkles,
    title: "Nos Objectifs",
    text: "Perpétuer un héritage spirituel, accompagner les fidèles et œuvrer pour le développement social et religieux de notre communauté.",
  },
];

const About = () => {
  return (
    <section id="apropos" className="section-padding bg-gradient-soft">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-secondary font-medium uppercase tracking-widest text-xs mb-4">
            À propos de nous
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6">
            Une communauté guidée par la foi
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            La <strong className="text-foreground">Communauté d'Organisation Keur Serigne
            Babacar Sy Abdou</strong> rassemble des fidèles déterminés à œuvrer
            ensemble pour la pratique, la transmission et la célébration des
            enseignements religieux. Nous incarnons un engagement à la fois spirituel
            et social, au service de tous nos membres et de la communauté musulmane.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {values.map((v) => (
            <div
              key={v.title}
              className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-elegant border border-border/60 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 shadow-elegant group-hover:scale-110 transition-transform">
                <v.icon className="w-7 h-7 text-secondary" strokeWidth={2} />
              </div>
              <h3 className="font-display text-2xl font-semibold text-primary mb-3">
                {v.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
