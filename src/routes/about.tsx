import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal, SectionHeading } from "@/components/site/Reveal";
import { images } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About the Artist | Makris Makeover Artistry, Avadi Chennai" },
      { name: "description", content: "A decade of makeup artistry in Avadi, Chennai — bridal beauty services and structured offline beauty education." },
      { property: "og:title", content: "About Makris Makeover Artistry" },
      { property: "og:description", content: "Passion for beauty. A decade of artistry in Avadi, Chennai." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="bg-blush-gradient">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <p className="eyebrow">About the Artist</p>
            <h1 className="mt-4 text-5xl leading-[1.02] md:text-7xl">Passion for Beauty. <em className="text-primary">A Decade of Artistry.</em></h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Makris Makeover Artistry brings together professional makeup artistry, bridal beauty services and practical beauty education. With over 10 years of experience, the artist is committed to helping clients feel confident and helping aspiring beauty professionals develop their skills through structured offline training.
            </p>
          </Reveal>
          <Reveal delay={0.15} className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-3 rounded-t-full border border-gold/60" aria-hidden />
            <img src={images.artist} alt="Portrait of the artist behind Makris Makeover Artistry" className="relative aspect-[3/4] w-full rounded-t-full object-cover shadow-soft" />
          </Reveal>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-14 px-5 py-24 md:grid-cols-2">
        <div>
          <SectionHeading eyebrow="The Journey" title="Built One Look at a Time"
            intro="What began as a passion for makeup grew into a studio trusted for bridal and occasion looks, and an academy where that craft is shared. Every look is designed around the client — her features, her outfit and the feeling she wants to carry through her day." />
        </div>
        <div>
          <SectionHeading eyebrow="Philosophy" title={<em className="text-primary">Enhance, Never Mask</em>}
            intro="Great makeup should feel like you on your most radiant day. The focus is on skin preparation, balanced colour and long-wear techniques suited to Chennai's climate, so every bride looks and feels beautiful from ceremony to reception." />
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[images.glossyBride, images.bridalHair, images.makeupApplication, images.partyMakeup].map((src, i) => (
              <Reveal key={i} delay={i * 0.06} className={i % 2 ? "md:mt-10" : ""}>
                <img src={src} alt="Beauty artistry sample" loading="lazy" className="aspect-[3/4] w-full rounded-xl object-cover" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-24 md:grid-cols-[1fr_auto]">
        <SectionHeading eyebrow="Training Philosophy" title="Teach the Why, Practise the How"
          intro="Every course balances full theory with hands-on practice. Students learn product knowledge, hygiene and technique — then refine their skills on real looks, portfolio shoots and saree draping sessions, with guidance on grooming and building a beauty business." />
        <Reveal className="rounded-2xl border border-gold bg-card px-10 py-8 text-center shadow-soft">
          <p className="font-serif text-7xl text-primary">10+</p>
          <p className="eyebrow mt-2">Years of Experience</p>
        </Reveal>
      </section>

      <section className="bg-ruby-gradient px-5 py-20 text-center text-primary-foreground">
        <h2 className="text-4xl md:text-5xl">Ready to Begin?</h2>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/bridal-makeup" hash="book" className="btn-outline border-gold text-primary-foreground hover:text-wine">Book Bridal Makeup</Link>
          <Link to="/academy" className="btn-outline border-gold text-primary-foreground hover:text-wine">Explore Courses</Link>
        </div>
      </section>
    </>
  );
}
