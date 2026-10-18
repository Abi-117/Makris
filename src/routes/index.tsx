import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Award, BookOpen, Camera, GraduationCap, Gift, Scissors, Shirt, Sparkles, Briefcase, MessageCircle } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/site/Reveal";
import { academyWhatsApp, courses, images } from "@/lib/site";
import artist from "@/assets/artist.png";
import logo from "@/assets/logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bridal Makeup Artist in Avadi, Chennai | Makris Makeover Artistry" },
      { name: "description", content: "Luxury bridal makeup and offline Hair, Skin & Makeup courses in Avadi, Chennai. 10+ years of experience. Book your bridal look today." },
      { property: "og:title", content: "Makris Makeover Artistry — Bridal Makeup & Beauty Academy" },
      { property: "og:description", content: "Luxury bridal makeup and professional beauty training in Avadi, Chennai." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const services = [
  { title: "Traditional Bridal Makeup", img: images.heroBride },
  { title: "HD & Ultra HD Makeup", img: images.makeupApplication },
  { title: "Glossy Bridal Makeup", img: images.glossyBride },
  { title: "Party & Occasion Makeup", img: images.partyMakeup },
];

const why = [
  { icon: Award, t: "10+ Years of Experience" },
  { icon: BookOpen, t: "Full Theory & Practical Training" },
  { icon: Gift, t: "Complimentary Training Products" },
  { icon: Scissors, t: "Free Hairstyle Classes" },
  { icon: Shirt, t: "Saree Draping & Pre-Pleating Training" },
  { icon: Camera, t: "Portfolio Shoot Opportunities" },
  { icon: GraduationCap, t: "Certificates on Course Completion" },
  { icon: Briefcase, t: "Personal Grooming & Business Guidance" },
];

const courseLink = { hair: "/courses/hair", skin: "/courses/skin", makeup: "/courses/makeup" } as const;

function Home() {
  const reduce = useReducedMotion();
  return (
    <>
      {/* Hero */}
      <section className="bg-blush-gradient relative overflow-hidden">
        <motion.span aria-hidden className="absolute -left-24 top-20 h-72 w-72 rounded-full border border-gold/40"
          animate={reduce ? {} : { rotate: 360 }} transition={{ duration: 80, repeat: Infinity, ease: "linear" }} />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 md:grid-cols-[1fr_1fr] md:py-20">
          <div className="order-2 md:order-1">
            <motion.p className="eyebrow" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              Luxury Bridal Beauty &amp; Professional Artistry
            </motion.p>
            <motion.h1 className="mt-5 text-5xl leading-[1.02] md:text-7xl lg:text-[5.5rem]"
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }}>
              Your Dream Bridal Look, <em className="text-primary">Beautifully Crafted.</em>
            </motion.h1>
            <motion.p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground"
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}>
              From timeless bridal elegance to modern makeup artistry, discover beauty services and professional training designed to celebrate your unique style.
            </motion.p>
            <motion.div className="mt-8 flex flex-wrap gap-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
              <Link to="/bridal-makeup" hash="book" className="btn-ruby">Book Bridal Makeup <ArrowRight className="h-4 w-4" /></Link>
              <Link to="/academy" className="btn-outline">Explore Our Academy</Link>
            </motion.div>
          </div>
          <div className="relative order-1 md:order-2">
            <div className="absolute -inset-4 rounded-t-full border border-gold/60" aria-hidden />
            <motion.div className="overflow-hidden rounded-t-full shadow-soft"
              initial={reduce ? false : { clipPath: "inset(100% 0 0 0)" }} animate={{ clipPath: "inset(0% 0 0 0)" }} transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}>
              <img src={images.heroBride} alt="South Indian bride in red silk saree and gold temple jewellery" width={1024} height={1344} className="aspect-[4/5] w-full object-cover" />
            </motion.div>
            <motion.div className="absolute -bottom-5 left-4 rounded-2xl border border-gold bg-card px-5 py-4 shadow-soft md:-left-8"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}>
              <p className="font-serif text-4xl text-primary">10+</p>
              <p className="text-[0.65rem] uppercase tracking-[0.2em] text-wine">Years of Experience</p>
            </motion.div>
          </div>
        </div>
        <div className="relative border-t border-gold/30 bg-ivory/70">
          <ul className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-5 py-5 text-center text-xs uppercase tracking-[0.18em] text-wine md:grid-cols-4">
            {["10+ Years of Experience", "Bridal Makeup Artistry", "Hair, Skin & Makeup Courses", "Offline Training in Avadi"].map((t) => (
              <li key={t} className="flex items-center justify-center gap-2"><Sparkles className="h-3.5 w-3.5 text-gold" />{t}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Welcome */}
      <section className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-24 md:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="relative mx-auto w-full max-w-sm">
          <img src={artist} alt="The artist behind Makris Makeover Artistry" loading="lazy" className="aspect-[3/4] w-full rounded-2xl object-cover shadow-soft" />
          <img src={logo} alt="" loading="lazy" className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full border-4 border-ivory object-cover shadow-soft" />
        </Reveal>
        <div>
          <SectionHeading eyebrow="Welcome to Makris" title={<>Beauty Is Personal. <em className="text-primary">Artistry Makes It Unforgettable.</em></>}
            intro="Makris Makeover Artistry is a professional makeup artistry studio with over 10 years of experience — creating bridal and occasion looks for clients, and training the next generation of beauty professionals through hands-on offline courses in Avadi." />
          <Reveal delay={0.1}><Link to="/about" className="btn-outline mt-8">Meet the Artist <ArrowRight className="h-4 w-4" /></Link></Reveal>
        </div>
      </section>

      {/* Services */}
      <section className="bg-cream py-24">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading center eyebrow="Signature Bridal Services" title="Find Your Perfect Bridal Look" />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08} className={i % 2 ? "lg:mt-12" : ""}>
                <Link to="/bridal-makeup" className="group block overflow-hidden rounded-2xl">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img src={s.img} alt={s.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-wine/85 to-transparent p-5 pt-20">
                      <h3 className="text-2xl text-primary-foreground">{s.title}</h3>
                      <span className="mt-1 inline-flex items-center gap-1 text-xs uppercase tracking-[0.2em] text-gold">Discover <ArrowRight className="h-3 w-3" /></span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Academy */}
      <section className="mx-auto max-w-7xl px-5 py-24">
        <SectionHeading eyebrow="Makris Beauty Academy" title={<>Turn Your Passion for Beauty into <em className="text-primary">Professional Skills</em></>} />
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {courses.map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.1}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gold/40 bg-card">
                <div className="aspect-[4/3] overflow-hidden"><img src={c.image} alt={c.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" /></div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="eyebrow">{c.short}</p>
                  <h3 className="mt-2 text-3xl">{c.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{c.intro}</p>
                  <div className="mt-6 flex items-center justify-between">
                    <Link to={courseLink[c.slug]} className="text-sm font-medium text-primary hover:underline">View Curriculum →</Link>
                    <Link to={courseLink[c.slug]} hash="enquire" className="text-xs uppercase tracking-wider text-wine">Enquire</Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Why */}
      <section className="bg-blush-gradient py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionHeading eyebrow="Why Choose Us?" title={<>Learn &amp; Glow with <em className="text-primary">a Decade of Artistry</em></>}
              intro="Every booking and every batch is guided personally, with practical techniques refined over 10+ years." />
            <Reveal delay={0.1}><img src={images.bridalHair} alt="Bridal bun with jasmine flowers" loading="lazy" className="mt-10 hidden aspect-[4/5] w-full max-w-xs rounded-t-full object-cover shadow-soft md:block" /></Reveal>
          </div>
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-gold/40 bg-gold/30 sm:grid-cols-2">
            {why.map(({ icon: Icon, t }, i) => (
              <Reveal key={t} delay={i * 0.04} className={`p-7 ${i === 0 || i === 7 ? "bg-ruby-gradient text-primary-foreground" : "bg-ivory"}`}>
                <Icon className={`h-6 w-6 ${i === 0 || i === 7 ? "text-gold" : "text-primary"}`} />
                <p className="mt-4 font-serif text-2xl leading-tight">{t}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="mx-auto max-w-7xl px-5 py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Bridal Portfolio" title="Moments of Bridal Radiance" />
          <Link to="/gallery" className="btn-outline">Explore Our Gallery <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="mt-12 columns-2 gap-4 md:columns-3 [&>*]:mb-4">
          {[images.floralFestiveLook, images.redGlamSaree, images.royalBlueBride, images.redSatinElegance, images.goldenBridalGlow, images.blackRoyalBridal].map((src, i) => (
            <Reveal key={i} delay={i * 0.05}><img src={src} alt="Bridal and beauty portfolio sample" loading="lazy" className="w-full break-inside-avoid rounded-xl object-cover transition duration-500 hover:opacity-90" /></Reveal>
          ))}
        </div>
        <p className="mt-4 text-xs text-muted-foreground">Sample imagery shown — genuine portfolio photographs coming soon.</p>
      </section>

      {/* Student experience */}
      <section className="bg-cream">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 md:grid-cols-2">
          <Reveal><img src={images.academyClass} alt="Academy training session" loading="lazy" className="rounded-2xl shadow-soft" /></Reveal>
          <div>
            <SectionHeading eyebrow="Student Learning Experience" title="Practice Under Real Studio Conditions"
              intro="Students learn through live makeup practice, hairstyle demonstrations, saree draping sessions and portfolio shoot opportunities — building the confidence to work with real clients." />
            <ul className="mt-6 space-y-2 text-sm">
              {["Makeup practice on models", "Hairstyle demonstrations", "Saree draping & pre-pleating", "Portfolio shoots"].map((t) => (
                <li key={t} className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-gold" />{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-ruby-gradient px-5 py-24 text-center text-primary-foreground">
        <Reveal>
          <p className="eyebrow text-gold">Begin Today</p>
          <h2 className="mx-auto mt-4 max-w-3xl text-5xl md:text-6xl">Your Beauty Journey <em>Starts Here.</em></h2>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a href={academyWhatsApp} target="_blank" rel="noopener noreferrer" className="btn-outline border-gold text-primary-foreground hover:text-wine"><MessageCircle className="h-4 w-4" /> Enquire on WhatsApp</a>
            <Link to="/academy" className="btn-outline border-gold text-primary-foreground hover:text-wine">Explore Our Courses</Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
