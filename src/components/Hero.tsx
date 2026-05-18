import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, MessageCircle, Star, Shield, Users, Car, Route, UsersRound, Hotel } from "lucide-react";
import hero from "@/assets/hero.jpg";
import { waUrl } from "@/lib/wa";

export function Hero() {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden">
      <img
        src={hero}
        alt="Beautiful travel destination in India"
        width={1920}
        height={1080}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-hero" />
      <div className="absolute inset-0 -z-10 bg-secondary/30" />

      <div className="mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-4 pt-32 pb-24">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex w-fit items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.3em] text-white"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          Reliable Travel · Trusted in Visakhapatnam
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mt-6 max-w-4xl font-display text-5xl font-bold leading-[1.05] text-white md:text-7xl lg:text-[5.5rem]"
        >
          Your Journey, <span className="text-gradient-gold">Our Priority</span>
          <br className="hidden md:block" /> SDB Travels
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-2xl text-lg text-white/85 md:text-xl"
        >
          Taxi Service · Travel Planning · Family & Group Tours · Hotel Reservations.
          Reliable, affordable and comfortable travel solutions in Visakhapatnam.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <Link
            to="/packages"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-3.5 text-sm font-semibold text-secondary shadow-gold transition-transform hover:scale-105"
          >
            Explore Packages <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href={waUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--whatsapp)] px-7 py-3.5 text-sm font-semibold text-white shadow-soft transition-transform hover:scale-105"
          >
            <MessageCircle className="h-4 w-4" /> Enquire on WhatsApp
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-16 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3"
        >
          {[
            { Icon: Users, k: "12,000+", v: "Happy Travelers" },
            { Icon: Star, k: "4.9/5", v: "Customer Rating" },
            { Icon: Shield, k: "100%", v: "Safe & Trusted" },
          ].map(({ Icon, k, v }) => (
            <div key={v} className="glass-dark rounded-2xl px-5 py-4 text-white">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-gold/20 text-gold">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-display text-xl font-bold">{k}</p>
                  <p className="text-xs text-white/70">{v}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="h-10 w-6 rounded-full border-2 border-white/40 p-1"
        >
          <span className="block h-2 w-1 mx-auto rounded-full bg-white/80" />
        </motion.div>
      </div>
    </section>
  );
}
