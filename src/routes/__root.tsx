import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { Chatbot } from "../components/Chatbot";
import { ThemeProvider } from "../components/ThemeProvider";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow">Erreur 404</p>
        <h1 className="mt-3 font-display text-5xl text-foreground">Page introuvable</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          La page que vous cherchez n'existe pas ou a été déplacée.
        </p>
        <div className="mt-8">
          <Link to="/" className="inline-flex items-center justify-center rounded-sm bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90">
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-3xl text-foreground">Une erreur est survenue</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          La page n'a pas pu se charger. Vous pouvez réessayer ou revenir à l'accueil.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="inline-flex items-center justify-center rounded-sm bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground">
            Réessayer
          </button>
          <a href="/" className="inline-flex items-center justify-center rounded-sm border border-input bg-background px-5 py-2.5 text-sm font-medium">
            Accueil
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "C3F Conseils — Expert-comptable à Toulon (Var)" },
      { name: "description", content: "Cabinet d'expertise comptable à Toulon. Comptabilité, fiscalité, paie, création d'entreprise et conseil pour TPE, PME et professions libérales du Var. Premier rendez-vous offert." },
      { name: "author", content: "C3F Conseils" },
      { name: "keywords", content: "expert-comptable Toulon, cabinet comptable Var, expertise comptable Toulon, comptable Toulon, fiscalité PME Var, création entreprise Toulon, paie Toulon" },
      { name: "theme-color", content: "#0f1b3d" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
      { name: "geo.region", content: "FR-83" },
      { name: "geo.placename", content: "Toulon" },
      { property: "og:site_name", content: "C3F Conseils" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "fr_FR" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Inter:wght@300;400;500;600&display=swap" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AccountingService",
          "@id": "https://c3f-conseils.fr/#organization",
          name: "C3F Conseils",
          description: "Cabinet d'expertise comptable à Toulon. Accompagnement comptable, fiscal et social des entreprises et professions libérales du Var.",
          url: "https://c3f-conseils.fr",
          telephone: "+33-4-00-00-00-00",
          email: "contact@c3f-conseils.fr",
          image: "https://c3f-conseils.fr/og-image.jpg",
          priceRange: "€€",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Toulon",
            postalCode: "83000",
            addressRegion: "Provence-Alpes-Côte d'Azur",
            addressCountry: "FR",
          },
          geo: { "@type": "GeoCoordinates", latitude: 43.1242, longitude: 5.928 },
          areaServed: [
            { "@type": "City", name: "Toulon" },
            { "@type": "City", name: "La Seyne-sur-Mer" },
            { "@type": "City", name: "Hyères" },
            { "@type": "City", name: "La Garde" },
            { "@type": "AdministrativeArea", name: "Var" },
          ],
          openingHoursSpecification: [{
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"],
            opens: "09:00", closes: "18:00",
          }],
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "87",
          },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">
            <Outlet />
          </main>
          <SiteFooter />
          <Chatbot />
        </div>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
