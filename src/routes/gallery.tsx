import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Reveal } from "@/components/site/Reveal";
import { gallery, galleryCategories } from "@/lib/site";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Bridal & Makeup Gallery | Makris Makeover Artistry, Avadi" },
      { name: "description", content: "Browse bridal, HD, glossy and party makeup, hairstyling, skin and academy training looks from Makris Makeover Artistry." },
      { property: "og:title", content: "Bridal & Makeup Gallery — Makris" },
      { property: "og:description", content: "A portfolio of bridal beauty and makeup artistry." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

function Gallery() {
  const [filter, setFilter] = useState<string>("All");
  const [idx, setIdx] = useState<number | null>(null);
  const items = filter === "All" ? gallery : gallery.filter((g) => g.category === filter);

  useEffect(() => {
    if (idx === null) return;
    const on = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIdx(null);
      if (e.key === "ArrowRight") setIdx((i) => (i === null ? i : (i + 1) % items.length));
      if (e.key === "ArrowLeft") setIdx((i) => (i === null ? i : (i - 1 + items.length) % items.length));
    };
    window.addEventListener("keydown", on);
    return () => window.removeEventListener("keydown", on);
  }, [idx, items.length]);

  return (
    <>
      <section className="bg-blush-gradient px-5 py-20 text-center">
        <Reveal>
          <p className="eyebrow">Portfolio</p>
          <h1 className="mt-4 text-5xl md:text-7xl">Bridal &amp; Makeup <em className="text-primary">Gallery</em></h1>
          <p className="mx-auto mt-5 max-w-xl text-muted-foreground">Sample imagery is shown while the genuine portfolio is being uploaded.</p>
        </Reveal>
      </section>

      {/* <section className="mx-auto max-w-7xl px-5 py-14">
        <div className="flex flex-wrap justify-center gap-2" role="tablist" aria-label="Gallery categories">
          {["All", ...galleryCategories].map((c) => (
            <button key={c} role="tab" aria-selected={filter === c} onClick={() => setFilter(c)}
              className={`rounded-full border px-4 py-2 text-xs uppercase tracking-wider transition ${filter === c ? "border-primary bg-primary text-primary-foreground" : "border-gold/60 text-wine hover:bg-blush"}`}>
              {c}
            </button>
          ))}
        </div>

        {items.length === 0 ? (
          <p className="mt-16 text-center text-muted-foreground">Photos for this category are coming soon.</p>
        ) : (
          <motion.div layout className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
            {items.map((g, i) => (
              <motion.button layout key={g.src + g.category} onClick={() => setIdx(i)} aria-label={`Open ${g.alt}`}
                className="group relative block w-full overflow-hidden rounded-xl break-inside-avoid">
                <img src={g.src} alt={g.alt} loading="lazy" className="w-full object-cover transition duration-700 group-hover:scale-105" />
                <span className="absolute bottom-3 left-3 rounded-full bg-ivory/90 px-3 py-1 text-[0.65rem] uppercase tracking-wider text-wine">{g.category}</span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </section> */}
      <section className="mx-auto max-w-7xl px-5 py-14">
  {items.length === 0 ? (
    <p className="mt-16 text-center text-muted-foreground">
      Photos are coming soon.
    </p>
  ) : (
    <motion.div
      layout
      className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4"
    >
      {items.map((g, i) => (
        <motion.button
          layout
          key={g.src + g.category}
          onClick={() => setIdx(i)}
          aria-label={`Open ${g.alt}`}
          className="group relative block w-full overflow-hidden rounded-xl break-inside-avoid"
        >
          <img
            src={g.src}
            alt={g.alt}
            loading="lazy"
            className="w-full rounded-xl object-cover transition duration-700 group-hover:scale-105"
          />
        </motion.button>
      ))}
    </motion.div>
  )}
</section>

      <AnimatePresence>
        {idx !== null && items[idx] && (
          <motion.div role="dialog" aria-modal="true" aria-label="Image viewer" className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/90 p-4"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIdx(null)}>
            <button aria-label="Close" className="absolute right-4 top-4 p-2 text-ivory" onClick={() => setIdx(null)}><X className="h-7 w-7" /></button>
            <button aria-label="Previous image" className="absolute left-2 p-3 text-ivory md:left-6"
              onClick={(e) => { e.stopPropagation(); setIdx((idx - 1 + items.length) % items.length); }}><ChevronLeft className="h-8 w-8" /></button>
            <motion.figure key={idx} initial={{ scale: 0.96, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} onClick={(e) => e.stopPropagation()} className="text-center">
              <img src={items[idx].src} alt={items[idx].alt} className="max-h-[80vh] max-w-full rounded-lg object-contain" />
              <figcaption className="mt-3 text-sm text-ivory/80">{items[idx].alt}</figcaption>
            </motion.figure>
            <button aria-label="Next image" className="absolute right-2 p-3 text-ivory md:right-6"
              onClick={(e) => { e.stopPropagation(); setIdx((idx + 1) % items.length); }}><ChevronRight className="h-8 w-8" /></button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
