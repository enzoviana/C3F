import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Marie L.",
    role: "Architecte d'intérieur · Toulon",
    rating: 5,
    text: "Une équipe disponible et pédagogue. J'ai enfin un interlocuteur qui prend le temps d'expliquer ma situation fiscale. Je recommande vivement.",
  },
  {
    name: "Jean-Philippe R.",
    role: "Dirigeant SAS · La Seyne-sur-Mer",
    rating: 5,
    text: "Accompagnement irréprochable depuis la création de ma société. Les conseils stratégiques de C3F m'ont permis d'optimiser ma rémunération dès la première année.",
  },
  {
    name: "Sophie M.",
    role: "Kinésithérapeute · Hyères",
    rating: 5,
    text: "Cabinet moderne, 100% dématérialisé. Plus de papiers, plus de stress. Le forfait mensuel est très clair et les réponses arrivent toujours dans la journée.",
  },
  {
    name: "Karim B.",
    role: "Restaurateur · Toulon",
    rating: 5,
    text: "Après deux cabinets décevants, j'ai enfin trouvé un expert-comptable à l'écoute. Suivi mensuel, anticipation des échéances, vraie relation de confiance.",
  },
];

export function Testimonials() {
  return (
    <section id="avis" className="bg-secondary/40 border-y border-border">
      <div className="container-page py-24">
        <div className="max-w-2xl">
          <p className="eyebrow"><span className="gold-rule mr-3" />Avis & témoignages</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl text-primary">
            La parole est <span className="italic text-accent">à nos clients.</span>
          </h2>
          <div className="mt-6 flex items-center gap-3">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="fill-accent text-accent" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">4.9/5</span> sur la base de 87 avis clients
            </p>
          </div>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <article key={t.name} className="bg-card border border-border p-8 flex flex-col">
              <div className="flex gap-0.5 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={14} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="font-display text-xl text-foreground leading-snug flex-1">« {t.text} »</p>
              <footer className="mt-6 pt-6 border-t border-border">
                <p className="text-sm font-medium text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{t.role}</p>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
