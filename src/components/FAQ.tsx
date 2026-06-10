import { useState } from "react";
import { Plus } from "lucide-react";

export const faqs = [
  {
    q: "Quels sont vos honoraires pour un cabinet d'expertise comptable à Toulon ?",
    a: "Nos honoraires sont forfaitaires et adaptés à votre activité : à partir de 89€/mois HT pour les micro-entrepreneurs, 189€/mois HT pour les TPE, et sur-devis pour les PME. Aucune mauvaise surprise en fin d'exercice.",
  },
  {
    q: "Le premier rendez-vous est-il payant ?",
    a: "Non, le premier rendez-vous est entièrement gratuit et sans engagement. Il a lieu dans nos bureaux à Toulon ou en visioconférence, selon votre préférence.",
  },
  {
    q: "Accompagnez-vous la création d'entreprise dans le Var ?",
    a: "Oui, nous accompagnons les créateurs d'entreprise de A à Z : choix du statut juridique (SAS, SARL, micro-entreprise, EI), rédaction des statuts, business plan, formalités d'immatriculation et conseil post-création.",
  },
  {
    q: "Travaillez-vous avec les professions libérales ?",
    a: "Absolument. Médecins, kinésithérapeutes, avocats, architectes, consultants : nous maîtrisons la fiscalité BNC et les spécificités déclaratives (2035, déclarations URSSAF, etc.).",
  },
  {
    q: "Votre cabinet est-il 100% dématérialisé ?",
    a: "Oui. Nous mettons à disposition une plateforme sécurisée pour le dépôt de vos pièces, la signature électronique des documents, et un tableau de bord en temps réel sur votre activité.",
  },
  {
    q: "Intervenez-vous au-delà de Toulon ?",
    a: "Bien sûr. Nous intervenons dans tout le Var (La Seyne-sur-Mer, Hyères, La Garde, La Valette, Six-Fours, Sanary) et à distance partout en France grâce à nos outils digitaux.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="container-page py-24">
      <div className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <p className="eyebrow"><span className="gold-rule mr-3" />Questions fréquentes</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl text-primary leading-[1.05]">
            Vos questions, <span className="italic text-accent">nos réponses.</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-sm leading-relaxed">
            Une autre question ? Notre assistant virtuel répond instantanément, ou contactez-nous directement.
          </p>
        </div>

        <div className="lg:col-span-8 divide-y divide-border border-y border-border">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-start justify-between gap-6 py-6 text-left group"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-xl text-foreground group-hover:text-primary transition-colors">
                    {f.q}
                  </span>
                  <Plus
                    size={20}
                    className={`mt-1 shrink-0 text-accent transition-transform ${isOpen ? "rotate-45" : ""}`}
                  />
                </button>
                {isOpen && (
                  <p className="pb-6 pr-10 text-muted-foreground text-sm leading-relaxed animate-fade-up">
                    {f.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
