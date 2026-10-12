import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, MessageCircle } from "lucide-react";
import { PageHero, Reveal, SectionHeading } from "@/components/site/Reveal";
import { EnquiryForm, generalFields } from "@/components/site/EnquiryForm";
import { academyBenefits, academyWhatsApp, courses, images } from "@/lib/site";

export const Route = createFileRoute("/academy")({
  head: () => ({
    meta: [
      { title: "Makeup Academy in Avadi, Chennai | Hair, Skin & Makeup Courses" },
      { name: "description", content: "Offline Hair, Skin and Professional Makeup courses in Avadi — basic to advanced, with complimentary products, portfolio shoots and certificates." },
      { property: "og:title", content: "Makris Beauty Academy — Avadi, Chennai" },
      { property: "og:description", content: "Learn the art. Master the technique. Build your future." },
      { property: "og:url", content: "/academy" },
    ],
    links: [{ rel: "canonical", href: "/academy" }],
  }),
  component: Academy,
});

const links = { hair: "/courses/hair", skin: "/courses/skin", makeup: "/courses/makeup" } as const;

function Academy() {
  return (
    <>
      <PageHero eyebrow="Makris Beauty Academy" title={<>Learn the Art. Master the Technique. <em className="text-primary">Build Your Future.</em></>}
        text="Offline professional training in Hair, Skin and Makeup, from basic foundations to advanced techniques, with product knowledge and practical learning." image={images.academyClass}>
        <a href="#enquire" className="btn-ruby">Course Enquiry</a>
        <a href={academyWhatsApp} target="_blank" rel="noopener noreferrer" className="btn-outline"><MessageCircle className="h-4 w-4" /> WhatsApp Us</a>
      </PageHero>

      <section className="mx-auto max-w-7xl px-5 py-24">
        <SectionHeading center eyebrow="Academy Benefits" title="More Than a Course" />
        <ul className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-gold/40 bg-gold/30 sm:grid-cols-2 lg:grid-cols-5">
          {academyBenefits.map((b, i) => (
            <li key={b} className={`flex flex-col gap-3 p-6 ${i % 3 === 0 ? "bg-blush" : "bg-ivory"}`}>
              <Check className="h-5 w-5 text-primary" />
              <span className="font-serif text-xl leading-tight">{b}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-cream py-24">
        <div className="mx-auto max-w-7xl space-y-16 px-5">
          {courses.map((c, i) => (
            <Reveal key={c.slug}>
              <div className={`grid items-center gap-10 md:grid-cols-2 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
                <img src={c.image} alt={c.title} loading="lazy" className="aspect-[4/3] w-full rounded-2xl object-cover shadow-soft" />
                <div>
                  <p className="eyebrow">{c.short} · {c.modules.length} modules</p>
                  <h2 className="mt-2 text-4xl md:text-5xl">{c.title}</h2>
                  <p className="mt-4 leading-relaxed text-muted-foreground">{c.intro}</p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link to={links[c.slug]} className="btn-ruby">View Curriculum</Link>
                    <Link to={links[c.slug]} hash="enquire" className="btn-outline">Enquire</Link>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="enquire" className="mx-auto max-w-4xl scroll-mt-28 px-5 py-24">
        <EnquiryForm fields={generalFields()} title="Course Enquiry" intro="Ask us about fees, duration and upcoming batches." />
      </section>
    </>
  );
}
