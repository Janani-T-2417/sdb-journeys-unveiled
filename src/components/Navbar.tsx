import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { waUrl } from "@/lib/wa";
import { motion, AnimatePresence } from "motion/react";
import logoIcon from "@/assets/logo-icon.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/packages", label: "Packages" },
  { to: "/pilgrimage", label: "Pilgrimage" },
  { to: "/nature-trips", label: "Nature Trips" },
  { to: "/gallery", label: "Gallery" },
  { to: "/school-transport", label: "School Transport" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 ${
            scrolled ? "glass shadow-soft" : "bg-transparent"
          }`}
        >
          <Link to="/" className="flex items-center gap-2.5 group">
            <span className={`grid h-11 w-11 place-items-center rounded-xl transition-colors ${scrolled ? "bg-secondary" : "bg-white/10 ring-1 ring-white/20"}`}>
              <img src={logoIcon} alt="SDB Travels" width={44} height={44} className="h-8 w-8 object-contain" />
            </span>
            <span className="flex flex-col leading-none">
              <span className={`font-display text-xl font-bold tracking-tight ${scrolled ? "text-secondary" : "text-white"}`}>
                SDB <span className="text-gradient-gold">Travels</span>
              </span>
              <span className={`mt-1 text-[10px] uppercase tracking-[0.28em] ${scrolled ? "text-muted-foreground" : "text-white/70"}`}>
                Tours & Travels
              </span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                  scrolled ? "text-foreground/80 hover:text-primary hover:bg-accent/60" : "text-white/85 hover:text-white hover:bg-white/10"
                }`}
                activeProps={{ className: "rounded-full px-3.5 py-2 text-sm font-semibold text-primary bg-accent/70" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={waUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-[var(--whatsapp)] px-4 py-2 text-sm font-semibold text-white shadow-soft transition-transform hover:scale-105"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
            <button
              onClick={() => setOpen(v => !v)}
              className={`lg:hidden grid h-10 w-10 place-items-center rounded-xl ${scrolled ? "bg-accent text-secondary" : "bg-white/15 text-white"}`}
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="lg:hidden mt-2 rounded-2xl glass p-3 shadow-elegant"
            >
              <nav className="flex flex-col">
                {links.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-4 py-3 text-sm font-medium text-foreground/80 hover:bg-accent/60 hover:text-primary"
                    activeProps={{ className: "rounded-xl px-4 py-3 text-sm font-semibold text-primary bg-accent" }}
                    activeOptions={{ exact: l.to === "/" }}
                  >
                    {l.label}
                  </Link>
                ))}
                <a
                  href={waUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--whatsapp)] px-4 py-3 text-sm font-semibold text-white"
                >
                  <MessageCircle className="h-4 w-4" /> Enquire on WhatsApp
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
