import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "./packages";
import { motion } from "motion/react";
import { Award, Users, Map, Heart } from "lucide-react";

export const Route = createFileRoute("/about")({
  component: Page,
  head: () => ({
    meta: [
      { title: "About SDB Travels" },
      { name: "description", content: "SDB Travels offers premium tour packages, pilgrimage tours, hill station trips and trusted school transport services across India." },
    ],
  }),
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={<>Crafting journeys, <span className="text-gradient-gold">building memories</span></>}
        description="Where every traveler is treated like family, and every route is planned like our own holiday."
      />
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4">
          <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-lg leading-relaxed text-foreground/85">
            <span className="font-display text-2xl text-secondary">SDB Travels</span> offers premium travel experiences across India
            with comfortable tour packages, pilgrimage tours, hill station trips and family vacations. We also provide
            trusted school transport services with safety and reliability at the heart of everything we do.
          </motion.p>
          <p className="mt-6 text-foreground/75 leading-relaxed">
            Founded with a simple belief — that travel should feel effortless and personal — we curate end-to-end journeys
            for individuals, families, pilgrims and schools. Our local knowledge, vetted partners and 24×7 support team
            make sure every trip is smooth, safe and full of moments worth remembering.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-7xl px-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { Icon: Users, k: "12,000+", v: "Travelers Hosted" },
            { Icon: Map, k: "40+", v: "Destinations Covered" },
            { Icon: Award, k: "4.9/5", v: "Average Rating" },
            { Icon: Heart, k: "100%", v: "Care & Safety" },
          ].map(({ Icon, k, v }, i) => (
            <motion.div key={v} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="rounded-3xl bg-gradient-primary p-7 text-primary-foreground shadow-soft">
              <Icon className="h-7 w-7 text-gold" />
              <p className="mt-3 font-display text-3xl font-bold">{k}</p>
              <p className="text-sm text-primary-foreground/85">{v}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
