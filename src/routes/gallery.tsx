import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { PageHero } from "./packages";

export const Route = createFileRoute("/gallery")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Gallery — SDB Travels" },
      { name: "description", content: "Photographs from temples, hills, waterfalls, beaches, adventures and our travel fleet." },
    ],
  }),
});

const u = (id: string, w = 800) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

const images: { src: string; alt: string; tag: string; cls?: string }[] = [
  { src: u("1518002054494-3a6f94352e9d", 1000), alt: "South Indian temple gopuram", tag: "Temples", cls: "row-span-2" },
  { src: u("1518684079-3c830dcef090"), alt: "Tropical waterfall", tag: "Waterfalls" },
  { src: u("1501785888041-af3ef285b470", 1000), alt: "Misty hill valley", tag: "Hills", cls: "row-span-2" },
  { src: u("1602216056096-3b40cc0c9944"), alt: "Tea plantation hills", tag: "Nature" },
  { src: u("1507525428034-b723cf961d3e"), alt: "Beach sunset", tag: "Beaches" },
  { src: u("1626621341517-bbf3d9990a23", 1000), alt: "Snow mountain adventure", tag: "Adventure", cls: "row-span-2" },
  { src: u("1564507592333-c60657eea523"), alt: "Dudhsagar waterfall", tag: "Waterfalls" },
  { src: u("1605649487212-47bdab064df7"), alt: "Coffee hills", tag: "Nature" },
  { src: u("1512343879784-a960bf40e7f2"), alt: "Goa beach palms", tag: "Beaches" },
  { src: u("1561361513-2d000a50f0dc"), alt: "Temple architecture", tag: "Temples" },
  { src: u("1469854523086-cc02fe5d8800"), alt: "Travel coach bus", tag: "Travel Fleet" },
  { src: u("1559128010-7c1ad6e1b6a5"), alt: "Andaman island lagoon", tag: "Beaches" },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Travel Gallery"
        title={<>Moments from our <span className="text-gradient-gold">journeys</span></>}
        description="A glimpse into the temples, hills, waterfalls and adventures we've explored with our travelers."
      />
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid auto-rows-[180px] grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {images.map((img, i) => (
              <motion.figure
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
                className={`group relative overflow-hidden rounded-2xl shadow-soft ${img.cls ?? ""}`}
              >
                <img src={img.src} alt={img.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/85 via-secondary/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                <figcaption className="absolute bottom-3 left-3">
                  <span className="rounded-full bg-gold px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-secondary">{img.tag}</span>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
