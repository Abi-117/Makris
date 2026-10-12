import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({ eyebrow, title, intro, center }: { eyebrow?: string; title: ReactNode; intro?: ReactNode; center?: boolean }) {
  return (
    <Reveal className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="mt-3 text-4xl leading-[1.08] text-foreground md:text-5xl">{title}</h2>
      <span className={`gold-rule mt-5 ${center ? "mx-auto" : ""}`} />
      {intro && <p className="mt-5 text-base leading-relaxed text-muted-foreground">{intro}</p>}
    </Reveal>
  );
}

export function PageHero({ eyebrow, title, text, image, children }: { eyebrow: string; title: ReactNode; text?: string; image: string; children?: ReactNode }) {
  return (
    <section className="bg-blush-gradient relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 md:grid-cols-[1.1fr_0.9fr] md:py-24">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-4 text-5xl leading-[1.02] md:text-7xl">{title}</h1>
          {text && <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">{text}</p>}
          {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
        </Reveal>
        <Reveal delay={0.15} className="relative">
          <div className="absolute -inset-3 rounded-t-full border border-gold/60" aria-hidden />
          <img src={image} alt="" className="relative aspect-[4/5] w-full rounded-t-full object-cover shadow-soft" />
        </Reveal>
      </div>
    </section>
  );
}
