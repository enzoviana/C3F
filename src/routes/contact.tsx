import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — C3F Conseils Expert-comptable Toulon" },
      { name: "description", content: "Contactez C3F Conseils, cabinet d'expertise comptable à Toulon. Premier rendez-vous gratuit en cabinet ou en visioconférence." },
      { property: "og:title", content: "Contact — C3F Conseils" },
      { property: "og:description", content: "Prenez rendez-vous avec un expert-comptable à Toulon." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="container-page pt-20 pb-16 max-w-4xl">
        <p className="eyebrow"><span className="gold-rule mr-3" />Contact</p>
        <h1 className="mt-6 font-display text-5xl md:text-6xl text-primary leading-[1.05]">
          Parlons de votre projet <span className="italic text-accent">autour d'un café.</span>
        </h1>
        <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
          Que vous soyez en création d'activité, en recherche d'un nouveau cabinet ou simplement
          curieux d'échanger, notre équipe vous répond sous 24h.
        </p>
      </section>

      <section className="container-page pb-24 grid lg:grid-cols-5 gap-12">
        {/* Coordonnées */}
        <div className="lg:col-span-2 space-y-8">
          <div>
            <div className="flex items-center gap-3 text-accent">
              <MapPin size={20} strokeWidth={1.5} />
              <h2 className="font-display text-xl text-primary">Adresse</h2>
            </div>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              C3F Conseils<br />
              Toulon, Var (83)<br />
              Sur rendez-vous
            </p>
          </div>

          <div>
            <div className="flex items-center gap-3 text-accent">
              <Phone size={20} strokeWidth={1.5} />
              <h2 className="font-display text-xl text-primary">Téléphone</h2>
            </div>
            <a href="tel:+33400000000" className="mt-2 block text-sm text-muted-foreground hover:text-primary">
              04 00 00 00 00
            </a>
          </div>

          <div>
            <div className="flex items-center gap-3 text-accent">
              <Mail size={20} strokeWidth={1.5} />
              <h2 className="font-display text-xl text-primary">Email</h2>
            </div>
            <a href="mailto:contact@c3f-conseils.fr" className="mt-2 block text-sm text-muted-foreground hover:text-primary break-all">
              contact@c3f-conseils.fr
            </a>
          </div>

          <div>
            <div className="flex items-center gap-3 text-accent">
              <Clock size={20} strokeWidth={1.5} />
              <h2 className="font-display text-xl text-primary">Horaires</h2>
            </div>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Lundi – Vendredi<br />
              9h00 – 12h30 · 14h00 – 18h00
            </p>
          </div>
        </div>

        {/* Formulaire */}
        <div className="lg:col-span-3 border border-border bg-card p-8 md:p-10">
          {sent ? (
            <div className="py-16 text-center">
              <h2 className="font-display text-3xl text-primary">Message envoyé</h2>
              <p className="mt-4 text-sm text-muted-foreground">
                Merci pour votre message. Nous revenons vers vous sous 24h ouvrées.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="space-y-5"
            >
              <h2 className="font-display text-2xl text-primary">Demande de rendez-vous</h2>

              <div className="grid md:grid-cols-2 gap-4">
                <Field label="Nom" name="nom" required />
                <Field label="Prénom" name="prenom" required />
              </div>
              <Field label="Email" name="email" type="email" required />
              <Field label="Téléphone" name="tel" type="tel" />
              <Field label="Société" name="societe" />

              <div>
                <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  Votre message
                </label>
                <textarea
                  required
                  rows={5}
                  className="w-full border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors"
                  placeholder="Parlez-nous de votre activité et de vos besoins…"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Envoyer ma demande <Send size={16} />
              </button>

              <p className="text-xs text-muted-foreground">
                Vos données sont traitées dans le respect du RGPD et uniquement à des fins de prise de contact.
              </p>
            </form>
          )}
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
        {label}{required && <span className="text-accent"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors"
      />
    </div>
  );
}
