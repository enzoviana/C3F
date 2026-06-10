import { createFileRoute } from "@tanstack/react-router";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/mentions-legales")({
  head: () => ({
    meta: [
      { title: "Mentions légales — C3F Conseils" },
      { name: "description", content: "Mentions légales du site C3F Conseils, cabinet d'expertise comptable à Toulon." },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/mentions-legales" }],
  }),
  component: MentionsPage,
});

function MentionsPage() {
  return (
    <section className="container-page py-20 max-w-3xl">
      <p className="eyebrow"><span className="gold-rule mr-3" />Informations</p>
      <h1 className="mt-6 font-display text-5xl text-primary">Mentions légales</h1>

      <div className="mt-12 space-y-10 text-sm text-muted-foreground leading-relaxed">
        <div>
          <h2 className="font-display text-2xl text-primary mb-3">Éditeur du site</h2>
          <p>C3F Conseils — Cabinet d'expertise comptable<br />Toulon, Var (83)<br />Email : contact@c3f-conseils.fr</p>
        </div>
        <div>
          <h2 className="font-display text-2xl text-primary mb-3">Directeur de la publication</h2>
          <p>Le représentant légal du cabinet C3F Conseils.</p>
        </div>
        <div>
          <h2 className="font-display text-2xl text-primary mb-3">Hébergement</h2>
          <p>Le site est hébergé sur une infrastructure conforme aux normes en vigueur.</p>
        </div>
        <div>
          <h2 className="font-display text-2xl text-primary mb-3">Ordre des Experts-Comptables</h2>
          <p>C3F Conseils est inscrit au tableau de l'Ordre des Experts-Comptables de la région PACA et soumis à ses règles déontologiques.</p>
        </div>
        <div>
          <h2 className="font-display text-2xl text-primary mb-3">Données personnelles</h2>
          <p>Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour toute demande : contact@c3f-conseils.fr.</p>
        </div>
        <div>
          <h2 className="font-display text-2xl text-primary mb-3">Propriété intellectuelle</h2>
          <p>L'ensemble du contenu du site (textes, images, logos) est protégé. Toute reproduction sans autorisation est interdite.</p>
        </div>
        <div>
          <h2 className="font-display text-2xl text-primary mb-3">Code source</h2>
          <p className="mb-4">Vous pouvez télécharger l'intégralité du code source de ce site au format ZIP.</p>
          <Button asChild variant="outline" className="gap-2">
            <a href="/api/public/download-source" download="c3f-conseils-source.zip">
              <Download size={16} />
              Télécharger le code source
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
