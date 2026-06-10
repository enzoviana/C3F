import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Expertises & Services — C3F Conseils Toulon" },
      { name: "description", content: "Comptabilité, fiscalité, paie, création d'entreprise et conseil en gestion. Toutes les expertises d'un cabinet comptable moderne à Toulon." },
      { property: "og:title", content: "Nos expertises — C3F Conseils" },
      { property: "og:description", content: "Comptabilité, fiscalité, paie, création d'entreprise et conseil en gestion à Toulon." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const services = [
  {
    title: "Expertise comptable",
    items: ["Tenue comptable", "Révision des comptes", "Bilans et liasse fiscale", "Comptes annuels", "Reporting mensuel"],
  },
  {
    title: "Fiscalité",
    items: ["Déclarations fiscales", "Optimisation fiscale", "TVA et CFE", "IS, IR et BNC/BIC", "Assistance au contrôle fiscal"],
  },
  {
    title: "Social & paie",
    items: ["Bulletins de paie", "Contrats de travail", "DSN et déclarations sociales", "Gestion des congés", "Rupture conventionnelle"],
  },
  {
    title: "Création d'entreprise",
    items: ["Choix du statut juridique", "Business plan & prévisionnel", "Formalités d'immatriculation", "Rédaction des statuts", "Accompagnement post-création"],
  },
  {
    title: "Conseil en gestion",
    items: ["Tableaux de bord", "Prévisionnels de trésorerie", "Analyse de rentabilité", "Stratégie de rémunération", "Aide à la décision"],
  },
  {
    title: "Audit & accompagnement",
    items: ["Audit contractuel", "Évaluation d'entreprise", "Accompagnement à la cession", "Transmission familiale", "Restructuration"],
  },
];

export function ServicesPage() {
  return (
    <>
      <section className="container-page pt-20 pb-12 max-w-4xl">
        <p className="eyebrow"><span className="gold-rule mr-3" />Expertises</p>
        <h1 className="mt-6 font-display text-5xl md:text-6xl text-primary leading-[1.05]">
          Tous les métiers du chiffre, <span className="italic text-accent">sous un même toit.</span>
        </h1>
        <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
          De la création de votre entreprise à sa transmission, C3F Conseils vous accompagne sur
          l'ensemble des problématiques comptables, fiscales, sociales et stratégiques.
        </p>
      </section>

      <section className="container-page pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
          {services.map((s) => (
            <article key={s.title} className="bg-background p-8">
              <h2 className="font-display text-2xl text-primary">{s.title}</h2>
              <ul className="mt-6 space-y-3">
                {s.items.map((i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-foreground/85">
                    <Check size={16} className="mt-0.5 shrink-0 text-accent" />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="container-page py-20 text-center">
          <h2 className="font-display text-4xl md:text-5xl max-w-3xl mx-auto">
            Une question sur l'une de nos expertises ?
          </h2>
          <p className="mt-6 opacity-80 max-w-xl mx-auto">
            Échangeons sur votre situation lors d'un premier rendez-vous gratuit.
          </p>
          <Link to="/contact" className="mt-10 inline-flex items-center gap-2 rounded-sm bg-accent px-8 py-4 text-sm font-medium text-accent-foreground hover:opacity-90 transition-opacity">
            Nous contacter <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
