import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";

export const Route = createFileRoute("/honoraires")({
  head: () => ({
    meta: [
      { title: "Honoraires & Forfaits — C3F Conseils Toulon" },
      { name: "description", content: "Tarifs transparents et forfaits sur-mesure pour les missions d'expertise comptable du cabinet C3F Conseils à Toulon." },
      { property: "og:title", content: "Honoraires — C3F Conseils" },
      { property: "og:description", content: "Forfaits comptables clairs et transparents à Toulon." },
      { property: "og:url", content: "/honoraires" },
    ],
    links: [{ rel: "canonical", href: "/honoraires" }],
  }),
  component: HonorairesPage,
});

const offers = [
  {
    name: "Essentiel",
    price: "à partir de 89€",
    suffix: "/mois HT",
    target: "Micro-entrepreneurs & professions libérales en début d'activité",
    items: ["Déclarations fiscales", "Assistance comptable", "Hotline illimitée", "Outil de facturation"],
  },
  {
    name: "Performance",
    price: "à partir de 189€",
    suffix: "/mois HT",
    target: "TPE, artisans, commerçants et indépendants",
    items: ["Tenue comptable complète", "Bilan et liasse fiscale", "Déclarations TVA mensuelles", "Tableau de bord trimestriel", "Rendez-vous bilan annuel"],
    featured: true,
  },
  {
    name: "Sur-mesure",
    price: "sur devis",
    suffix: "",
    target: "PME, holdings et groupes",
    items: ["Mission complète & paie", "Reporting mensuel détaillé", "Conseil fiscal & juridique", "Accompagnement stratégique", "Audit & missions spécifiques"],
  },
];

function HonorairesPage() {
  return (
    <>
      <section className="container-page pt-20 pb-12 max-w-4xl">
        <p className="eyebrow"><span className="gold-rule mr-3" />Honoraires</p>
        <h1 className="mt-6 font-display text-5xl md:text-6xl text-primary leading-[1.05]">
          Des tarifs <span className="italic text-accent">clairs et forfaitaires.</span>
        </h1>
        <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
          Pas de mauvaise surprise en fin d'année : nos honoraires sont fixés à l'avance, sous forme
          de forfait mensuel adapté à votre activité, votre volume et vos besoins.
        </p>
      </section>

      <section className="container-page pb-24">
        <div className="grid md:grid-cols-3 gap-6">
          {offers.map((o) => (
            <article
              key={o.name}
              className={`border p-8 flex flex-col ${o.featured ? "border-accent bg-primary text-primary-foreground" : "border-border bg-background"}`}
            >
              {o.featured && <p className="eyebrow text-accent mb-4">Le plus choisi</p>}
              <h2 className={`font-display text-3xl ${o.featured ? "text-primary-foreground" : "text-primary"}`}>{o.name}</h2>
              <p className={`mt-2 text-sm ${o.featured ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{o.target}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-display text-3xl">{o.price}</span>
                <span className={`text-sm ${o.featured ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{o.suffix}</span>
              </div>
              <ul className="mt-8 space-y-3 flex-1">
                {o.items.map((i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <Check size={16} className="mt-0.5 shrink-0 text-accent" />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`mt-8 inline-flex items-center justify-center gap-2 rounded-sm px-5 py-3 text-sm font-medium transition-opacity hover:opacity-90 ${o.featured ? "bg-accent text-accent-foreground" : "bg-primary text-primary-foreground"}`}
              >
                Demander un devis <ArrowRight size={16} />
              </Link>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          Tous nos forfaits incluent un interlocuteur dédié et l'accès à notre plateforme numérique.
        </p>
      </section>
    </>
  );
}
