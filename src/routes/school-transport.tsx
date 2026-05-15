import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { PageHero } from "./packages";
import { Bus, GraduationCap, MapPin, MessageCircle, ShieldCheck, Wrench, UserCheck, Clock } from "lucide-react";
import { waUrl } from "@/lib/wa";
import bus from "@/assets/school-bus.jpg";

export const Route = createFileRoute("/school-transport")({
  component: Page,
  head: () => ({
    meta: [
      { title: "School Transport Services — SDB Travels" },
      { name: "description", content: "Safe, GPS-tracked school and college transport with experienced drivers and well-maintained buses." },
    ],
  }),
});

const features = [
  { Icon: MapPin, t: "Live GPS Tracking", d: "Parents can track the bus in real time on their phone." },
  { Icon: UserCheck, t: "Experienced Drivers", d: "Background-verified, trained for child safety on every route." },
  { Icon: ShieldCheck, t: "Safe Pickup & Drop", d: "Door-to-door pickup with female attendants on board." },
  { Icon: Wrench, t: "Well-Maintained Fleet", d: "Daily inspection, periodic servicing and full insurance coverage." },
  { Icon: GraduationCap, t: "Schools & Colleges", d: "Reliable contracts for schools, colleges and coaching institutes." },
  { Icon: Clock, t: "On-Time, Every Day", d: "Punctual schedules tracked centrally — no missed mornings." },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="School Transport"
        title={<>Safe rides. <span className="text-gradient-gold">Happy parents.</span></>}
        description="A premium, dependable transport service designed around child safety, punctuality and parent peace of mind."
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 grid gap-10 lg:grid-cols-2 lg:items-center">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="overflow-hidden rounded-3xl shadow-elegant">
            <img src={bus} alt="SDB Travels school bus" loading="lazy" className="h-full w-full object-cover aspect-[4/3]" />
          </motion.div>
          <div>
            <h2 className="font-display text-4xl font-bold text-secondary md:text-5xl">A service built on <span className="text-primary">trust</span>.</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our school transport program partners with schools and colleges across the region to deliver safe, comfortable
              and reliable daily transport. From route optimization to driver training, every detail is handled by us so
              parents can have one less thing to worry about.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={waUrl("Hi SDB Travels, I want to enquire about school transport services.")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[var(--whatsapp)] px-6 py-3 text-sm font-semibold text-white shadow-soft hover:scale-105 transition-transform">
                <MessageCircle className="h-4 w-4" /> Enquire on WhatsApp
              </a>
              <a href="tel:+91" className="inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-white shadow-soft hover:scale-105 transition-transform">
                <Bus className="h-4 w-4" /> Request a Demo Route
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-accent/30">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map(({ Icon, t, d }, i) => (
              <motion.div
                key={t}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.07 }}
                className="rounded-3xl bg-card p-7 shadow-soft hover:shadow-elegant transition-shadow"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-soft">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-xl font-bold text-secondary">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
