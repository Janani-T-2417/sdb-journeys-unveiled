import { createFileRoute } from "@tanstack/react-router";
import { PackageCard } from "@/components/PackageCard";
import { packages } from "@/data/packages";
import { PageHero } from "./packages";

export const Route = createFileRoute("/nature-trips")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Nature & Hill Station Trips — SDB Travels" },
      { name: "description", content: "Hill stations, waterfalls and nature escapes — Araku, Lambasingi, Ooty, Munnar, Coorg and more." },
    ],
  }),
});

function Page() {
  const list = packages.filter(p => p.category === "hill" || p.category === "waterfall");
  return (
    <>
      <PageHero
        eyebrow="Nature & Hill Stations"
        title={<>Misty hills, roaring <span className="text-gradient-gold">waterfalls</span></>}
        description="Cool retreats, scenic drives and breathtaking cascades across India's most loved nature destinations."
      />
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {list.map((p, i) => <PackageCard key={p.slug} p={p} index={i} />)}
        </div>
      </section>
    </>
  );
}
