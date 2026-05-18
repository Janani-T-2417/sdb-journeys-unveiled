import { Link } from "@tanstack/react-router";
import { Compass, Facebook, Instagram, Linkedin, MessageCircle, Mail, Phone, MapPin } from "lucide-react";
import { ADDRESS, EMAIL, PHONE_NUMBERS, waUrl } from "@/lib/wa";

export function Footer() {
  return (
    <footer className="bg-gradient-navy text-white relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-30 [background:radial-gradient(800px_400px_at_10%_0%,oklch(0.42_0.12_162/0.5),transparent),radial-gradient(600px_400px_at_100%_100%,oklch(0.78_0.14_82/0.25),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-10 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-gold text-secondary">
                <Compass className="h-5 w-5" strokeWidth={2.5} />
              </span>
              <span className="font-display text-2xl font-bold">
                SDB <span className="text-gradient-gold">Travels</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-white/70 leading-relaxed">
              Trusted tours and travels service based in Visakhapatnam. Taxi service, travel planning, family & group tours, and hotel reservations.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {[
                { Icon: Facebook, href: "#" },
                { Icon: Instagram, href: "#" },
                { Icon: Linkedin, href: "#" },
              ].map(({ Icon, href }, i) => (
                <a key={i} href={href} className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-gold hover:text-secondary transition-colors">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-gold">Quick Links</h4>
            <ul className="mt-5 space-y-2 text-sm text-white/75">
              {[
                ["/", "Home"],
                ["/about", "About Us"],
                ["/gallery", "Gallery"],
                ["/contact", "Contact"],
                ["/school-transport", "School Transport"],
              ].map(([to, label]) => (
                <li key={to}><Link to={to} className="hover:text-gold transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-gold">Packages</h4>
            <ul className="mt-5 space-y-2 text-sm text-white/75">
              {[
                ["/packages", "All Tour Packages"],
                ["/pilgrimage", "Pilgrimage Tours"],
                ["/nature-trips", "Nature & Hill Stations"],
                ["/packages", "Waterfalls & Adventure"],
                ["/packages", "Beach Escapes"],
              ].map(([to, label], i) => (
                <li key={i}><Link to={to} className="hover:text-gold transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-gold">Get in Touch</h4>
            <ul className="mt-5 space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 text-gold" />{ADDRESS}</li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-gold shrink-0" />
                <div className="flex flex-col">
                  {PHONE_NUMBERS.map((num) => (
                    <a key={num} href={`tel:+91${num}`} className="hover:text-gold transition-colors">
                      +91 {num.slice(0, 5)} {num.slice(5)}
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex items-center gap-3"><Mail className="h-4 w-4 text-gold" />{EMAIL}</li>
            </ul>
            <a
              href={waUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-[var(--whatsapp)] px-5 py-2.5 text-sm font-semibold shadow-soft hover:scale-105 transition-transform"
            >
              <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/60 md:flex-row">
          <p>&copy; {new Date().getFullYear()} SDB Travels. All rights reserved.</p>
          <p>Pendurthi, Gopalapatnam, Visakhapatnam</p>
        </div>
      </div>
    </footer>
  );
}
