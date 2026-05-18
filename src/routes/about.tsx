import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "./packages";
import { motion } from "motion/react";
import { Award, Users, Map, Heart, Car, Navigation, UsersRound, Hotel } from "lucide-react";

export const Route = createFileRoute("/about")({
  component: Page,
  head: () => ({
    meta: [
      { title: "About SDB Travels" },
      { name: "description", content: "SDB Travels is a trusted tours and travels service based in Visakhapatnam, offering taxi services, travel planning, family tours and hotel reservations." },
    ],
  }),
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={<>Trusted journeys, <span className="text-gradient-gold">memorable experiences</span></>}
        description="Reliable, affordable and comfortable travel solutions for individuals, families and groups."
      />
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4">
          <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-lg leading-relaxed text-foreground/85">
            <span className="font-display text-2xl text-secondary">SDB Travels</span> is a trusted tours and travels service based in Visakhapatnam, Andhra Pradesh. We provide reliable, affordable, and comfortable travel solutions for individuals, families, and groups.
          </motion.p>
          <p className="mt-6 text-foreground/75 leading-relaxed">
            Whether you need a local taxi, a family vacation, or help planning your next trip, our team is here to make travel simple and stress-free. With well-maintained vehicles, experienced drivers, and a commitment to customer satisfaction, SDB Travels is your go-to partner for all travel needs in and around Visakhapatnam.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-7xl px-4">
          <h3 className="text-center font-display text-2xl font-bold text-secondary mb-10">Our Services</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { Icon: Car, k: "Taxi Service", v: "Local & outstation cabs with professional drivers" },
              { Icon: Navigation, k: "Travel Planning", v: "Custom itineraries tailored to your needs" },
              { Icon: UsersRound, k: "Family & Group Tours", v: "Comfortable trips for families and large groups" },
              { Icon: Hotel, k: "Hotel Reservations", v: "Best stays at affordable prices" },
            ].map(({ Icon, k, v }, i) => (
              <motion.div key={k} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="rounded-3xl bg-gradient-primary p-7 text-primary-foreground shadow-soft">
                <Icon className="h-7 w-7 text-gold" />
                <p className="mt-3 font-display text-xl font-bold">{k}</p>
                <p className="text-sm text-primary-foreground/85">{v}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
