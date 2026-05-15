import { motion } from "motion/react";
import { Clock, MapPin, MessageCircle, ArrowRight, Check } from "lucide-react";
import type { Package } from "@/data/packages";
import { waUrl } from "@/lib/wa";

export function PackageCard({ p, index = 0 }: { p: Package; index?: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.05 }}
      className="group relative flex flex-col overflow-hidden rounded-3xl bg-card shadow-soft hover:shadow-elegant transition-all duration-500 hover:-translate-y-1"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={p.image}
          alt={p.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/10 to-transparent" />
        <div className="absolute left-4 top-4 flex items-center gap-2">
          <span className="inline-flex items-center gap-1 rounded-full bg-gradient-gold px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-secondary shadow-gold">
            <MapPin className="h-3 w-3" /> {p.region}
          </span>
        </div>
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
          <h3 className="font-display text-2xl font-bold text-white drop-shadow-lg">{p.title}</h3>
          <span className="glass rounded-full px-3 py-1 text-xs font-semibold text-secondary inline-flex items-center gap-1">
            <Clock className="h-3 w-3" />{p.duration}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
        <ul className="mt-4 grid grid-cols-1 gap-1.5">
          {p.highlights.slice(0, 4).map((h) => (
            <li key={h} className="flex items-center gap-2 text-sm text-foreground/80">
              <Check className="h-4 w-4 text-primary" /> {h}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex items-end justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-widest text-muted-foreground">Starting from</p>
            <p className="font-display text-2xl font-bold text-secondary">{p.price}<span className="text-xs font-medium text-muted-foreground"> /person</span></p>
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-2 sm:flex-row">
          <button className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-[1.02]">
            View Details <ArrowRight className="h-4 w-4" />
          </button>
          <a
            href={waUrl(`Hi SDB Travels, I want to enquire about the ${p.title} package.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[var(--whatsapp)] px-4 py-2.5 text-sm font-semibold text-white shadow-soft transition-transform hover:scale-[1.02]"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
        </div>
      </div>
    </motion.article>
  );
}
