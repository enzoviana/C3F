import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/cabinet")({
  head: () => ({
    meta: [
      { title: "Le Cabinet — C3F Conseils Expert-comptable Toulon" },
      { name: "description", content: "Découvrez C3F Conseils, cabinet d'expertise comptable à Toulon : valeurs, équipe et engagement auprès des entreprises du Var." },
      { property: "og:title", content: "Le Cabinet — C3F Conseils" },
      { property: "og:description", content: "Cabinet d'expertise comptable indépendant à Toulon, au service des dirigeants du Var." },
      { property: "og:url", content: "/cabinet" },
    ],
    links: [{ rel: "canonical", href: "/cabinet" }],
  }),
  component: CabinetPage,
});

function CabinetPage() {
  return (
    <>
      <section className="container-page pt-20 pb-16 max-w-4xl">
        <p className="eyebrow"><span className="gold-rule mr-3" />Le cabinet</p>
        <h1 className="mt-6 font-display text-5xl md:text-6xl text-primary leading-[1.05]">
          Un cabinet à taille humaine, <span className="italic text-accent">ancré à Toulon.</span>
        </h1>
        <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
          C3F Conseils est un cabinet d'expertise comptable indépendant implanté au cœur de Toulon.
          Depuis plus de quinze ans, nous accompagnons les entrepreneurs, artisans, commerçants,
          professions libérales et PME du Var avec une conviction simple : la comptabilité est un
          outil de pilotage, pas une contrainte administrative.
        </p>
      </section>

      <section className="border-y border-border bg-secondary/30">
        <div className="container-page py-20 grid md:grid-cols-3 gap-12">
          {[
            ["Indépendance", "Cabinet à taille humaine, sans appartenance à un réseau national. Vos décisions restent vos décisions."],
            ["Engagement", "Un interlocuteur unique qui connaît votre dossier, vos objectifs et votre activité dans le détail."],
            ["Modernité", "Outils numériques, dématérialisation et reporting en temps réel pour gagner du temps au quotidien."],
          ].map(([t, d]) => (
            <div key={t}>
              <h2 className="font-display text-3xl text-primary">{t}</h2>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page py-24 grid lg:grid-cols-2 gap-16">
        <div>
          <p className="eyebrow"><span className="gold-rule mr-3" />Notre vision</p>
          <h2 className="mt-4 font-display text-4xl text-primary">Faire de la comptabilité un levier de croissance.</h2>
        </div>
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>
            La comptabilité ne se résume pas à produire une liasse fiscale en fin d'exercice.
            Bien exploitée, elle devient un véritable outil d'aide à la décision : marges,
            trésorerie, rentabilité par activité, fiscalité du dirigeant.
          </p>
          <p>
            Chez C3F Conseils, nous prenons le temps d'expliquer, d'anticiper et de conseiller.
            Notre rôle : vous donner les clés pour piloter sereinement votre entreprise et faire
            les bons choix au bon moment.
          </p>
          <Link to="/services" className="inline-flex items-center gap-2 text-sm font-medium text-primary border-b border-accent pb-1 hover:gap-3 transition-all">
            Découvrir nos expertises <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
