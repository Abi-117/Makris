import { Link } from "@tanstack/react-router";
import { Check, MessageCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PageHero, Reveal, SectionHeading } from "./Reveal";
import { EnquiryForm, generalFields } from "./EnquiryForm";
import { academyBenefits, courses, images, whatsappLink, type Course } from "@/lib/site";

export function CoursePage({ course, heading, interest, ctaLabel }: { course: Course; heading: string; interest: string; ctaLabel: string }) {
  const wa = whatsappLink(`Hello Makris Makeover Artistry, I would like to enquire about the ${course.title}.`);
  const others = courses.filter((c) => c.slug !== course.slug);
  return (
    <>
      <PageHero eyebrow="Makris Beauty Academy · Offline in Avadi" title={heading} text={course.intro} image={course.image}>
        <a href="#enquire" className="btn-ruby">{ctaLabel}</a>
        <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-outline"><MessageCircle className="h-4 w-4" /> Ask on WhatsApp</a>
      </PageHero>

      <section className="mx-auto grid max-w-7xl gap-14 px-5 py-20 md:grid-cols-[0.8fr_1.2fr]">
        <div className="md:sticky md:top-28 md:self-start">
          <SectionHeading eyebrow="Curriculum" title={<>What You'll <em className="text-primary">Learn</em></>}
            intro={`${course.modules.length} modules taught with full theory and hands-on practice. Contact us for current fees, duration and batch timings.`} />
        </div>
        <Reveal>
          <Accordion type="single" collapsible defaultValue="m-0" className="rounded-2xl border border-gold/40 bg-card px-6">
            {course.modules.map((mod, i) => (
              <AccordionItem key={mod.title} value={`m-${i}`}>
                <AccordionTrigger className="font-serif text-xl hover:no-underline">
                  <span className="flex items-baseline gap-4"><span className="text-sm font-sans text-gold">{String(i + 1).padStart(2, "0")}</span>{mod.title}</span>
                </AccordionTrigger>
                <AccordionContent className="pl-10 text-muted-foreground">{mod.detail}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </section>

      <section className="bg-blush-gradient">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-2">
          <Reveal><img src={images.academyClass} alt="Students practising in the academy studio" loading="lazy" width={1152} height={896} className="rounded-2xl object-cover shadow-soft" /></Reveal>
          <div>
            <SectionHeading eyebrow="Practical Learning" title="Included With Your Training" />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {academyBenefits.map((b) => (
                <li key={b} className="flex gap-3 text-sm"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{b}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="enquire" className="mx-auto max-w-4xl scroll-mt-28 px-5 py-20">
        <EnquiryForm fields={generalFields(interest)} title={ctaLabel} intro="Share your details and we'll reply with fees, duration and upcoming batch information." />
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24">
        <p className="eyebrow">Explore other courses</p>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {others.map((c) => (
            <Link key={c.slug} to={c.slug === "hair" ? "/courses/hair" : c.slug === "skin" ? "/courses/skin" : "/courses/makeup"}
              className="group flex items-center gap-5 rounded-2xl border border-border bg-card p-4 transition hover:border-gold">
              <img src={c.image} alt="" loading="lazy" className="h-24 w-20 rounded-lg object-cover" />
              <div><p className="font-serif text-2xl group-hover:text-primary">{c.title}</p><p className="text-sm text-muted-foreground">{c.short} · View curriculum →</p></div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
