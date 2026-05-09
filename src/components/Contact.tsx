import { Phone, Mail, MessageCircle } from "lucide-react";

const contactInfo = [
  { icon: Phone, label: "Téléphone", value: "+221 76 121 88 29", href: "tel:+221761218829" },
  { icon: MessageCircle, label: "WhatsApp", value: "+221 76 121 88 29", href: "https://wa.me/221761218829" },
  { icon: Mail, label: "Email", value: "ramatoulayediouf074@gmail.com", href: "mailto:ramatoulayediouf074@gmail.com" },
];

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-secondary font-medium uppercase tracking-widest text-xs mb-4">
            Contact
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6">
            Contactez-nous pour adhérer
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Une question ? Une volonté de rejoindre la communauté ? Notre équipe est
            à votre écoute pour vous accompagner dans votre démarche.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto mb-8">
          {contactInfo.map((c) => (
            <a
              key={c.label}
              href={c.href}
              className="flex flex-col items-center text-center gap-3 p-6 rounded-2xl bg-muted/50 hover:bg-muted border border-border hover:border-secondary/40 transition-all hover:shadow-card group"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                <c.icon className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                  {c.label}
                </p>
                <p className="font-medium text-foreground">{c.value}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="max-w-2xl mx-auto p-6 md:p-8 rounded-2xl bg-gradient-primary text-primary-foreground shadow-elegant text-center">
          <p className="font-arabic text-3xl text-secondary mb-3">السلام عليكم</p>
          <p className="text-sm md:text-base opacity-90 leading-relaxed">
            Que la paix soit sur vous. Nous serons honorés de vous accueillir
            parmi les membres de notre communauté. N'hésitez pas à nous contacter
            par téléphone, WhatsApp ou email.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
