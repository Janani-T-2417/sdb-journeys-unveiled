import { createFileRoute } from "@tanstack/react-router";
import { PackageCard } from "@/components/PackageCard";
import { getByCategory } from "@/data/packages";
import { PageHero } from "./packages";

export const Route = createFileRoute("/pilgrimage")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Pilgrimage Tours — SDB Travels" },
      { name: "description", content: "Sacred journeys to Tirupati, Srisailam, Varanasi, Char Dham, Vaishno Devi and more with SDB Travels." },
    ],
  }),
});

function Page() {
  const list = getByCategory("pilgrimage");
  return (
    <>
      <PageHero
        eyebrow="Pilgrimage Tours"
        title={<>Sacred <span className="text-gradient-gold">journeys</span> for the soul</>}
        description="Comfortable, well-organized darshan tours led by experienced teams — from South Indian temples to the Himalayan Char Dham."
      />
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {list.map((p, i) => <PackageCard key={p.slug} p={p} index={i} />)}
        </div>
      </section>
    </>
  );
}
