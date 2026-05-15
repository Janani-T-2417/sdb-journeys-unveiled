import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { PageHero } from "./packages";
import { Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { ADDRESS, EMAIL, PHONE_DISPLAY, waUrl } from "@/lib/wa";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Contact SDB Travels" },
      { name: "description", content: "Get in touch with SDB Travels for tour packages, pilgrimage trips and school transport services." },
    ],
  }),
});

function Page() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title={<>Let's plan your <span className="text-gradient-gold">next journey</span></>}
        description="Tell us about your trip — we'll respond within minutes on WhatsApp."
      />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-6">
            {[
              { Icon: Phone, t: "Call us", d: PHONE_DISPLAY, href: "tel:+91" },
              { Icon: Mail, t: "Email", d: EMAIL, href: `mailto:${EMAIL}` },
              { Icon: MapPin, t: "Visit us", d: ADDRESS },
            ].map(({ Icon, t, d, href }) => {
              const Wrap: any = href ? "a" : "div";
              return (
                <Wrap key={t} href={href} className="flex items-start gap-4 rounded-3xl bg-card p-6 shadow-soft hover:shadow-elegant transition-shadow">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-soft">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-display text-lg font-bold text-secondary">{t}</p>
                    <p className="text-sm text-muted-foreground mt-1">{d}</p>
                  </div>
                </Wrap>
              );
            })}
            <a href={waUrl()} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 rounded-3xl bg-[var(--whatsapp)] p-6 text-white shadow-elegant hover:scale-[1.02] transition-transform">
              <MessageCircle className="h-6 w-6" />
              <span className="font-display text-lg font-bold">Chat on WhatsApp — Instant Reply</span>
            </a>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="rounded-3xl bg-card p-8 shadow-elegant"
          >
            <h3 className="font-display text-2xl font-bold text-secondary">Send us a message</h3>
            <p className="mt-1 text-sm text-muted-foreground">We usually reply within an hour.</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Field label="Full name" type="text" required />
              <Field label="Phone" type="tel" required />
              <Field label="Email" type="email" className="sm:col-span-2" />
              <Field label="Destination of interest" type="text" className="sm:col-span-2" />
              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground">Message</label>
                <textarea rows={4} className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40" placeholder="Tell us about your trip…" />
              </div>
            </div>
            <button type="submit" className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft hover:scale-105 transition-transform">
              <Send className="h-4 w-4" /> Send enquiry
            </button>
            {sent && <p className="mt-4 text-sm text-primary">Thanks! We'll be in touch shortly.</p>}
          </motion.form>
        </div>
      </section>
    </>
  );
}

function Field({ label, className = "", ...rest }: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <div className={className}>
      <label className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground">{label}</label>
      <input {...rest} className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40" />
    </div>
  );
}
