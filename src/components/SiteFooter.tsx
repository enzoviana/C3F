import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-primary text-primary-foreground">
      <div className="container-page py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-baseline gap-2 font-display text-2xl">
            <span>C3F</span>
            <span className="text-sm font-sans tracking-[0.2em] uppercase opacity-70">Conseils</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed opacity-80 max-w-md">
            Cabinet d'expertise comptable à Toulon. Conseil, accompagnement et expertise au service
            des dirigeants, professions libérales et entreprises du Var.
          </p>
        </div>

        <div>
          <h4 className="font-display text-lg mb-4">Navigation</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li><Link to="/cabinet" className="hover:opacity-100">Le Cabinet</Link></li>
            <li><Link to="/services" className="hover:opacity-100">Expertises</Link></li>
            <li><Link to="/honoraires" className="hover:opacity-100">Honoraires</Link></li>
            <li><Link to="/contact" className="hover:opacity-100">Contact</Link></li>
            <li><Link to="/mentions-legales" className="hover:opacity-100">Mentions légales</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg mb-4">Contact</h4>
          <ul className="space-y-3 text-sm opacity-80">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0" />
              <span>Toulon, Var (83)</span>
            </li>
            <li className="flex items-start gap-2">
              <Phone size={16} className="mt-0.5 shrink-0" />
              <a href="tel:+33400000000" className="hover:opacity-100">04 00 00 00 00</a>
            </li>
            <li className="flex items-start gap-2">
              <Mail size={16} className="mt-0.5 shrink-0" />
              <a href="mailto:contact@c3f-conseils.fr" className="hover:opacity-100 break-all">
                contact@c3f-conseils.fr
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="container-page py-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs opacity-70">
          <p>© {new Date().getFullYear()} C3F Conseils — Tous droits réservés.</p>
          <p>Expert-comptable inscrit à l'Ordre des Experts-Comptables PACA</p>
        </div>
      </div>
    </footer>
  );
}
