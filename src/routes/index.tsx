import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck, Building2, Calculator, FileText, Scale, Users } from "lucide-react";
import { Testimonials } from "@/components/Testimonials";
import { FAQ, faqs } from "@/components/FAQ";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "C3F Conseils — Expert-comptable à Toulon (Var) | Cabinet d'expertise comptable" },
      { name: "description", content: "Cabinet d'expertise comptable à Toulon : comptabilité, fiscalité, paie, création d'entreprise et conseil pour TPE, PME et professions libérales du Var. ⭐ 4.9/5 · Premier RDV offert." },
      { property: "og:title", content: "C3F Conseils — Expert-comptable à Toulon" },
      { property: "og:description", content: "Cabinet d'expertise comptable à Toulon : comptabilité, fiscalité, paie, création d'entreprise et conseil sur-mesure." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: HomePage,
});

const expertises = [
  { icon: Calculator, title: "Expertise comptable", text: "Tenue, révision et établissement des comptes annuels avec rigueur et transparence." },
  { icon: Scale, title: "Fiscalité", text: "Optimisation fiscale, déclarations et accompagnement en cas de contrôle." },
  { icon: Users, title: "Paie & social", text: "Gestion complète de la paie, contrats de travail et déclarations sociales." },
  { icon: Building2, title: "Création d'entreprise", text: "Choix du statut, business plan et formalités juridiques de A à Z." },
  { icon: FileText, title: "Conseil en gestion", text: "Tableaux de bord, prévisionnels et accompagnement stratégique du dirigeant." },
  { icon: BadgeCheck, title: "Audit & commissariat", text: "Missions d'audit contractuel et accompagnement à la transformation." },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="container-page grid lg:grid-cols-12 gap-12 pt-16 pb-24 lg:pt-24 lg:pb-32 items-center">
          <div className="lg:col-span-7 animate-fade-up">
            <p className="eyebrow"><span className="gold-rule mr-3" />Cabinet d'expertise comptable · Toulon</p>
            <h1 className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-primary">
              L'expertise comptable
              <span className="block italic text-accent">au service de votre ambition.</span>
            </h1>
            <p className="mt-8 text-lg text-muted-foreground max-w-xl leading-relaxed">
              Basé à Toulon, C3F Conseils accompagne entrepreneurs, professions libérales et PME du Var avec une approche
              moderne, humaine et rigoureuse de la comptabilité et du conseil.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90">
                Premier rendez-vous offert <ArrowRight size={16} />
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2 rounded-sm border border-primary/20 px-6 py-3.5 text-sm font-medium text-primary transition-colors hover:bg-secondary">
                Découvrir nos expertises
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative animate-fade-up">
            <div className="aspect-[4/5] overflow-hidden rounded-sm">
              <img
                src="https://c1.wallpaperflare.com/preview/132/951/707/france-photos-harbour-landscape.jpg"
                alt="Vue du port de Toulon, ville d'implantation du cabinet C3F Conseils"
                width={1600}
                height={2000}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden md:block bg-card border border-border px-6 py-5 max-w-[240px]">
              <p className="font-display text-3xl text-primary">15+</p>
              <p className="text-xs text-muted-foreground mt-1 leading-snug">années d'expérience au service des entreprises varoises</p>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-y border-border bg-secondary/40">
        <div className="container-page py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            ["200+", "clients accompagnés"],
            ["4.9/5", "note moyenne"],
            ["24h", "délai de réponse"],
            ["100%", "dématérialisé"],
          ].map(([k, v]) => (
            <div key={v}>
              <p className="font-display text-4xl text-primary">{k}</p>
              <p className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERTISES */}
      <section className="container-page py-24">
        <div className="max-w-2xl">
          <p className="eyebrow"><span className="gold-rule mr-3" />Nos expertises</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl text-primary">Un accompagnement global pour piloter sereinement votre activité.</h2>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {expertises.map(({ icon: Icon, title, text }) => (
            <article key={title} className="bg-background p-8 transition-colors hover:bg-secondary/40 group">
              <Icon className="text-accent" size={28} strokeWidth={1.5} />
              <h3 className="mt-6 font-display text-2xl text-primary">{title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{text}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/services" className="inline-flex items-center gap-2 text-sm font-medium text-primary border-b border-accent pb-1 hover:gap-3 transition-all">
            Voir toutes nos prestations <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* APPROCHE */}
      <section className="bg-primary text-primary-foreground">
        <div className="container-page py-24 grid lg:grid-cols-2 gap-16">
          <div>
            <p className="eyebrow text-primary-foreground/60"><span className="gold-rule mr-3" />Notre approche</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">Plus qu'un comptable, un véritable partenaire.</h2>
          </div>
          <div className="space-y-8">
            {[
              ["Proximité", "Un interlocuteur dédié, disponible et à l'écoute de vos enjeux."],
              ["Transparence", "Honoraires clairs et forfaitaires, sans surprise en fin d'année."],
              ["Digital", "Outils en ligne, signature électronique et tableau de bord temps réel."],
              ["Conseil", "Anticipation fiscale et stratégique pour faire grandir votre activité."],
            ].map(([t, d]) => (
              <div key={t} className="border-l border-accent pl-6">
                <h3 className="font-display text-2xl">{t}</h3>
                <p className="mt-2 text-sm text-primary-foreground/75 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ />

      {/* CTA */}
      <section className="container-page py-24 text-center">
        <p className="eyebrow"><span className="gold-rule mr-3" />Contact</p>
        <h2 className="mt-4 font-display text-4xl md:text-5xl text-primary max-w-3xl mx-auto">
          Échangeons sur votre projet autour d'un café à Toulon.
        </h2>
        <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
          Premier rendez-vous gratuit et sans engagement, en cabinet ou en visioconférence.
        </p>
        <div className="mt-10">
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-sm bg-primary px-8 py-4 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90">
            Prendre rendez-vous <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
