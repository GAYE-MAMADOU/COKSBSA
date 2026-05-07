import { useState } from "react";
import { z } from "zod";
import { Phone, Mail, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Le nom doit contenir au moins 2 caractères").max(100, "Nom trop long"),
  phone: z
    .string()
    .trim()
    .min(7, "Numéro invalide")
    .max(20, "Numéro trop long")
    .regex(/^[0-9+\s().-]+$/, "Numéro de téléphone invalide"),
  message: z.string().trim().min(5, "Message trop court").max(1000, "Message trop long (max 1000)"),
});

const contactInfo = [
  { icon: Phone, label: "Téléphone", value: "+221 76 121 88 29", href: "tel:+221761218829" },
  { icon: MessageCircle, label: "WhatsApp", value: "+221 76 121 88 29", href: "https://wa.me/221761218829" },
  { icon: Mail, label: "Email", value: "ramatoulayediouf074@gmail.com", href: "mailto:ramatoulayediouf074@gmail.com" },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.issues.forEach((i) => {
        if (i.path[0]) errs[i.path[0] as string] = i.message;
      });
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitting(true);
    // Simulation d'envoi
    setTimeout(() => {
      toast({
        title: "Message envoyé",
        description: "Nous vous recontacterons très prochainement, in shaa Allah.",
      });
      setForm({ name: "", phone: "", message: "" });
      setSubmitting(false);
    }, 600);
  };

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

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Coordonnées */}
          <div className="lg:col-span-2 space-y-4">
            {contactInfo.map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="flex items-center gap-4 p-5 rounded-2xl bg-muted/50 hover:bg-muted border border-border hover:border-secondary/40 transition-all hover:shadow-card group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <c.icon className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">
                    {c.label}
                  </p>
                  <p className="font-medium text-foreground">{c.value}</p>
                </div>
              </a>
            ))}

            <div className="p-6 rounded-2xl bg-gradient-primary text-primary-foreground shadow-elegant">
              <p className="font-arabic text-2xl text-secondary mb-2">السلام عليكم</p>
              <p className="text-sm opacity-90 leading-relaxed">
                Que la paix soit sur vous. Nous serons honorés de vous accueillir
                parmi les membres de notre communauté.
              </p>
            </div>
          </div>

          {/* Formulaire */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-3 bg-card rounded-2xl p-6 md:p-8 shadow-elegant border border-border space-y-5"
            noValidate
          >
            <div>
              <Label htmlFor="name">Nom complet</Label>
              <Input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder="Votre nom"
                maxLength={100}
                className="mt-2"
                aria-invalid={!!errors.name}
              />
              {errors.name && (
                <p className="text-xs text-destructive mt-1.5">{errors.name}</p>
              )}
            </div>

            <div>
              <Label htmlFor="phone">Téléphone</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                placeholder="+221 XX XXX XX XX"
                maxLength={20}
                className="mt-2"
                aria-invalid={!!errors.phone}
              />
              {errors.phone && (
                <p className="text-xs text-destructive mt-1.5">{errors.phone}</p>
              )}
            </div>

            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Votre message ou question..."
                rows={5}
                maxLength={1000}
                className="mt-2 resize-none"
                aria-invalid={!!errors.message}
              />
              {errors.message && (
                <p className="text-xs text-destructive mt-1.5">{errors.message}</p>
              )}
              <p className="text-xs text-muted-foreground mt-1.5 text-right">
                {form.message.length}/1000
              </p>
            </div>

            <Button type="submit" variant="hero" size="lg" disabled={submitting} className="w-full">
              {submitting ? "Envoi en cours..." : "Envoyer le message"}
              <Send className="w-4 h-4" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
