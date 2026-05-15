import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Hero } from "@/components/Hero";
import { PackageCard } from "@/components/PackageCard";
import { SectionHeading } from "@/components/SectionHeading";
import { featured, packages } from "@/data/packages";
import { Bus, Compass, HeartHandshake, MapPinned, MessageCircle, ShieldCheck, Sparkles, Star } from "lucide-react";
import { waUrl } from "@/lib/wa";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "SDB Travels — Premium Tour, Pilgrimage & Nature Trips Across India" },
      { name: "description", content: "Discover India with SDB Travels. Premium tour packages, pilgrimage, nature escapes, waterfalls, beaches and trusted school transport." },
    ],
  }),
});

const categories = [
  { to: "/nature-trips", title: "Hill Stations", desc: "Misty escapes & cool retreats", Icon: MapPinned, count: "10+ destinations" },
  { to: "/packages", title: "Waterfalls & Adventure", desc: "Roaring falls and bold trails", Icon: Sparkles, count: "5+ trips" },
  { to: "/packages", title: "Beach Getaways", desc: "Sun, sand and serenity", Icon: Compass, count: "5+ coastlines" },
  { to: "/pilgrimage", title: "Pilgrimage Tours", desc: "Sacred journeys, peaceful hearts", Icon: HeartHandshake, count: "10+ shrines" },
];

const testimonials = [
  { name: "Ananya Reddy", role: "Hyderabad", text: "Our Araku trip was perfectly planned — clean stays, friendly guide and on-time pickups. Will book again!", rating: 5, img: "https://i.pravatar.cc/120?img=47" },
  { name: "Rahul Sharma", role: "Bengaluru", text: "Did the Kashmir tour with family. SDB handled every detail — Shikara, Gulmarg, food. Truly premium service.", rating: 5, img: "https://i.pravatar.cc/120?img=12" },
  { name: "Priya Venkatesh", role: "Chennai", text: "Tirupati darshan was so smooth thanks to their team. Highly recommend for pilgrimage trips.", rating: 5, img: "https://i.pravatar.cc/120?img=32" },
  { name: "Mohan Rao", role: "Vizag", text: "Their school bus service has been a blessing — punctual, safe and the drivers are gentle with kids.", rating: 5, img: "https://i.pravatar.cc/120?img=68" },
  { name: "Lakshmi Iyer", role: "Coimbatore", text: "Kerala backwater houseboat was magical. Loved the small touches — fresh fruits, sunset cruise.", rating: 5, img: "https://i.pravatar.cc/120?img=45" },
  { name: "Vikram Singh", role: "Delhi", text: "Lambasingi at 4am with the frost… unforgettable! SDB's local knowledge is unmatched.", rating: 5, img: "https://i.pravatar.cc/120?img=15" },
];

function Index() {
  const featuredSlugs = ["araku-valley", "lambasingi", "tirupati", "goa", "kashmir", "kerala-backwaters"];
  const featuredCards = featuredSlugs.map(s => packages.find(p => p.slug === s)!).filter(Boolean);

  return (
    <>
      <Hero />

      {/* Categories strip */}
      <section className="relative -mt-16 z-10">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
              >
                <Link to={c.to} className="group block rounded-3xl bg-card p-6 shadow-soft hover:shadow-elegant transition-all hover:-translate-y-1">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-soft">
                    <c.Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-xl font-bold text-secondary">{c.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{c.desc}</p>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-primary">{c.count} →</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured packages */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            eyebrow="Featured Journeys"
            title={<>Handpicked <span className="text-gradient-gold">premium escapes</span></>}
            description="Our most-loved getaways across hills, shrines, beaches and valleys — curated end-to-end for unforgettable memories."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredCards.map((p, i) => <PackageCard key={p.slug} p={p} index={i} />)}
          </div>
          <div className="mt-12 text-center">
            <Link to="/packages" className="inline-flex items-center gap-2 rounded-full bg-secondary px-7 py-3.5 text-sm font-semibold text-white shadow-soft hover:scale-105 transition-transform">
              View all packages →
            </Link>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-24 bg-gradient-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 [background:radial-gradient(700px_400px_at_20%_30%,oklch(0.42_0.12_162/0.4),transparent),radial-gradient(700px_400px_at_80%_80%,oklch(0.78_0.14_82/0.25),transparent)]" />
        <div className="relative mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-gold">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" /> Why SDB Travels
              </span>
              <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">
                Travel that feels <span className="text-gradient-gold">effortless</span>.
              </h2>
              <p className="mt-4 text-white/75 leading-relaxed">
                From your first enquiry to the last sunset, we handle every detail — vetted hotels, comfortable transport,
                experienced guides and 24×7 support. So all you need to do is enjoy the journey.
              </p>
              <a href={waUrl()} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-3.5 text-sm font-semibold text-secondary shadow-gold hover:scale-105 transition-transform">
                <MessageCircle className="h-4 w-4" /> Plan my trip on WhatsApp
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { Icon: ShieldCheck, t: "100% Safe", d: "Verified partners & trained drivers" },
                { Icon: Star, t: "4.9 Rated", d: "Loved by 12,000+ travelers" },
                { Icon: HeartHandshake, t: "Personal Care", d: "Dedicated trip manager" },
                { Icon: Bus, t: "Comfortable Fleet", d: "Premium, well-maintained vehicles" },
              ].map(({ Icon, t, d }) => (
                <div key={t} className="glass-dark rounded-2xl p-5">
                  <Icon className="h-6 w-6 text-gold" />
                  <p className="mt-3 font-display text-lg font-bold">{t}</p>
                  <p className="text-xs text-white/70">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* School transport teaser */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center rounded-3xl bg-card p-6 lg:p-12 shadow-soft">
            <div className="overflow-hidden rounded-2xl">
              <img src={new URL("../assets/school-bus.jpg", import.meta.url).href} alt="SDB Travels school bus" loading="lazy" className="h-full w-full object-cover aspect-[4/3]" />
            </div>
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-primary">School Transport</span>
              <h2 className="mt-4 font-display text-4xl font-bold text-secondary">Safe rides. <span className="text-primary">Happy parents.</span></h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Trusted school & college transport with GPS-tracked buses, trained drivers and on-time pickup &amp; drop.
                Every journey monitored, every child cared for.
              </p>
              <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm">
                {["GPS live tracking", "Verified drivers", "Female attendants", "Routine maintenance", "On-time service", "Safety-first policy"].map(t => (
                  <li key={t} className="flex items-center gap-2 text-foreground/80"><span className="grid h-5 w-5 place-items-center rounded-full bg-primary/10 text-primary">✓</span>{t}</li>
                ))}
              </ul>
              <Link to="/school-transport" className="mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft hover:scale-105 transition-transform">
                Learn more →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-accent/30">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            eyebrow="Voices of Our Travelers"
            title={<>Stories that <span className="text-gradient-gold">stay with us</span></>}
            description="Real reviews from families, friends and pilgrims who chose SDB Travels for their journey."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.08 }}
                className="rounded-3xl bg-card p-6 shadow-soft hover:shadow-elegant transition-shadow"
              >
                <div className="flex items-center gap-1 text-gold">
                  {Array.from({ length: t.rating }).map((_, j) => <Star key={j} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="mt-4 text-sm text-foreground/85 leading-relaxed">"{t.text}"</p>
                <div className="mt-5 flex items-center gap-3">
                  <img src={t.img} alt={t.name} loading="lazy" className="h-11 w-11 rounded-full object-cover ring-2 ring-gold/40" />
                  <div>
                    <p className="font-semibold text-secondary">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-primary p-10 md:p-16 text-primary-foreground shadow-elegant">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gold/30 blur-3xl" />
            <div className="absolute -left-20 -bottom-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
            <div className="relative grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h3 className="font-display text-3xl font-bold md:text-4xl">Ready for your next adventure?</h3>
                <p className="mt-3 text-primary-foreground/85 max-w-xl">
                  Tell us where you'd like to go — we'll craft a personalized itinerary within minutes.
                </p>
              </div>
              <a href={waUrl()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-secondary shadow-gold hover:scale-105 transition-transform">
                <MessageCircle className="h-4 w-4" /> Chat with us now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
