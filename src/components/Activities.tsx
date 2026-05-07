import { Star, BookOpen, Moon, Sun } from "lucide-react";

const activities = [
  {
    icon: Star,
    name: "Gamou",
    description:
      "Célébration annuelle marquant la naissance du Prophète Mouhammad (PSL), avec récitations, chants religieux et enseignements spirituels.",
  },
  {
    icon: Sun,
    name: "Ziar général",
    description:
      "Visite pieuse dédiée à Serigne Babacar Sy, pour renouveler nos engagements spirituels et honorer son héritage.",
  },
  {
    icon: Sun,
    name: "Ziar du COKSBSA",
    description:
      "Ziar organisé par la communauté en l'honneur de Serigne Babacar Sy Abdou, moment fort de recueillement et de fraternité.",
  },
  {
    icon: Moon,
    name: "Programmes de Ramadan",
    description:
      "Organisation des programmes du mois sacré sous la direction de Mame Ousmane Diop : ruptures collectives, prières et études.",
  },
  {
    icon: BookOpen,
    name: "Hadara Jummah Malikia",
    description:
      "Cercles d'enseignement et de récitation tenus chaque vendredi, dédiés au rappel et à l'approfondissement des connaissances religieuses.",
  },
];

const Activities = () => {
  return (
    <section id="activites" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-secondary font-medium uppercase tracking-widest text-xs mb-4">
            Nos activités
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6">
            Événements & Programmes religieux
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Tout au long de l'année, la communauté organise et anime des événements
            spirituels pour rassembler ses membres et célébrer notre foi.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((a, i) => (
            <article
              key={a.name}
              className="group relative bg-card rounded-2xl p-8 border border-border/60 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-gold opacity-5 rounded-full -translate-y-8 translate-x-8 group-hover:opacity-10 transition-opacity" />
              <div className="flex items-center gap-4 mb-5 relative">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-gradient-primary group-hover:text-secondary transition-all">
                  <a.icon className="w-6 h-6" />
                </div>
                <span className="font-display text-secondary font-bold text-sm">
                  0{i + 1}
                </span>
              </div>
              <h3 className="font-display text-xl font-semibold text-primary mb-3">
                {a.name}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {a.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
