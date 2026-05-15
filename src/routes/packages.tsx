import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { PackageCard } from "@/components/PackageCard";
import { SectionHeading } from "@/components/SectionHeading";
import { packages, type Package } from "@/data/packages";

export const Route = createFileRoute("/packages")({
  component: PackagesPage,
  head: () => ({
    meta: [
      { title: "Tour Packages — SDB Travels" },
      { name: "description", content: "Browse all SDB Travels tour packages: hill stations, waterfalls, beaches, pilgrimage and adventure trips across India." },
    ],
  }),
});

const filters: { key: "all" | Package["category"]; label: string }[] = [
  { key: "all", label: "All Packages" },
  { key: "hill", label: "Hill Stations" },
  { key: "waterfall", label: "Waterfalls" },
  { key: "beach", label: "Beaches" },
  { key: "pilgrimage", label: "Pilgrimage" },
  { key: "adventure", label: "Adventure" },
];

function PackagesPage() {
  const [filter, setFilter] = useState<"all" | Package["category"]>("all");
  const list = useMemo(() => filter === "all" ? packages : packages.filter(p => p.category === filter), [filter]);

  return (
    <>
      <PageHero eyebrow="All Tour Packages" title={<>Curated trips across <span className="text-gradient-gold">India</span></>} description="From misty hill stations to sacred shrines and wild adventures — find your next journey." />
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {filters.map(f => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
                  filter === f.key
                    ? "bg-gradient-primary text-primary-foreground shadow-soft"
                    : "bg-accent/50 text-foreground/70 hover:bg-accent"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
          <motion.div layout className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {list.map((p, i) => <PackageCard key={p.slug} p={p} index={i} />)}
          </motion.div>
        </div>
      </section>
    </>
  );
}

export function PageHero({ eyebrow, title, description }: { eyebrow: string; title: React.ReactNode; description: string }) {
  return (
    <section className="relative isolate overflow-hidden pt-40 pb-20 bg-gradient-navy text-white">
      <div className="absolute inset-0 opacity-40 [background:radial-gradient(700px_400px_at_20%_20%,oklch(0.42_0.12_162/0.55),transparent),radial-gradient(700px_400px_at_80%_80%,oklch(0.78_0.14_82/0.3),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4">
        <SectionHeading eyebrow={eyebrow} title={<span className="text-white">{title}</span>} description={description} />
      </div>
    </section>
  );
}
