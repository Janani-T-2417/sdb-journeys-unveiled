import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";
import { waUrl } from "@/lib/wa";
import { AnimatePresence, motion } from "motion/react";

export function FloatingButtons() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a
        href={waUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-[var(--whatsapp)] text-white shadow-elegant hover:scale-110 transition-transform"
      >
        <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--whatsapp)] opacity-50 animate-ping" />
        <MessageCircle className="relative h-6 w-6" />
      </a>

      <AnimatePresence>
        {show && (
          <motion.button
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Scroll to top"
            className="fixed bottom-24 right-6 z-40 grid h-12 w-12 place-items-center rounded-full bg-secondary text-white shadow-soft hover:scale-110 transition-transform"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
