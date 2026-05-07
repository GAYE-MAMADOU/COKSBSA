import { CreditCard, Wallet, CalendarCheck, Users, Shirt, Ban } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const conditions = [
  {
    icon: CreditCard,
    title: "Carte de membre",
    price: "2 000 FCFA",
    label: "Achat unique",
    description: "Acquisition obligatoire de la carte officielle de membre pour formaliser votre adhésion.",
  },
  {
    icon: Wallet,
    title: "Cotisation mensuelle",
    price: "1 000 FCFA",
    label: "Par mois",
    description: "Contribution mensuelle qui finance les activités et événements de la communauté.",
  },
  {
    icon: CalendarCheck,
    title: "Participation aux événements",
    price: "Engagement",
    label: "Religieux",
    description: "Présence obligatoire aux événements majeurs : Ziar, Gamou et autres célébrations.",
  },
  {
    icon: Users,
    title: "Réunions mensuelles",
    price: "Présence",
    label: "Requise",
    description: "Participation aux réunions mensuelles de la communauté pour rester engagé.",
  },
  {
    icon: Shirt,
    title: "Achat de tenue",
    price: "10 000 FCFA",
    label: "Achat unique",
    description: "Acquisition de la tenue officielle portée lors des événements de la communauté.",
  },
  {
    icon: Ban,
    title: "Exclusivité d'engagement",
    price: "Aucun cumul",
    label: "Règle",
    description: "Pas de cumul d'organisation ou de comité afin de garantir un engagement entier.",
  },
];

const Membership = () => {
  return (
    <section id="adhesion" className="section-padding bg-gradient-primary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />

      <div className="container-custom relative">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-secondary font-medium uppercase tracking-widest text-xs mb-4">
            Adhésion
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Rejoignez notre communauté
          </h2>
          <p className="text-primary-foreground/80 text-lg leading-relaxed">
            Pour faire partie de la C.O.K.S.B.S.A, voici les conditions à respecter.
            Une démarche simple, un engagement spirituel fort.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {conditions.map((c) => (
            <div
              key={c.title}
              className="bg-background/95 backdrop-blur rounded-2xl p-6 shadow-elegant border border-secondary/20 hover:border-secondary/50 transition-all hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center mb-5 shadow-gold">
                <c.icon className="w-6 h-6 text-secondary-foreground" />
              </div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                {c.label}
              </p>
              <p className="font-display text-2xl font-bold text-primary mb-2">
                {c.price}
              </p>
              <h3 className="font-semibold text-foreground mb-2">{c.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {c.description}
              </p>
            </div>
          ))}
        </div>

        {/* Checklist récapitulative */}
        <div className="max-w-3xl mx-auto bg-background/95 backdrop-blur rounded-2xl p-8 md:p-10 shadow-elegant border border-secondary/30">
          <h3 className="font-display text-2xl font-bold text-primary mb-6 text-center">
            Récapitulatif des engagements
          </h3>
          <ul className="space-y-4 mb-8">
            {[
              "Achat de la carte de membre : 2 000 FCFA",
              "Cotisation mensuelle de 1 000 FCFA",
              "Achat de la tenue officielle : 10 000 FCFA",
              "Participation obligatoire aux événements religieux (Ziar, Gamou, etc.)",
              "Présence obligatoire aux réunions mensuelles de la communauté",
              "Pas de cumul d'organisation ou de comité",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-gold flex items-center justify-center mt-0.5">
                  <Check className="w-3.5 h-3.5 text-secondary-foreground" strokeWidth={3} />
                </span>
                <span className="text-foreground">{item}</span>
              </li>
            ))}
          </ul>
          <div className="text-center">
            <Button asChild variant="hero" size="xl">
              <a href="#contact">Nous contacter pour adhérer</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Membership;
