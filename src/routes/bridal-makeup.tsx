import { createFileRoute } from "@tanstack/react-router";
import { Home, MessageCircle } from "lucide-react";
import { PageHero, Reveal, SectionHeading } from "@/components/site/Reveal";
import { EnquiryForm, bridalFields } from "@/components/site/EnquiryForm";
import { bridalWhatsApp, images } from "@/lib/site";

export const Route = createFileRoute("/bridal-makeup")({
  head: () => ({
    meta: [
      { title: "Bridal Makeup Services in Avadi, Chennai | Makris Makeover Artistry" },
      { name: "description", content: "Bridal, HD, Ultra HD, glossy and party makeup plus bridal hair styling in Avadi, Chennai. Check availability on WhatsApp." },
      { property: "og:title", content: "Bridal Makeup Services — Makris Makeover Artistry" },
      { property: "og:description", content: "Walk into your wedding day with confidence. Bridal makeup artistry in Avadi, Chennai." },
      { property: "og:url", content: "/bridal-makeup" },
    ],
    links: [{ rel: "canonical", href: "/bridal-makeup" }],
  }),
  component: Bridal,
});

const services = [
  { t: "Bridal Makeup", d: "Traditional and contemporary bridal looks designed around your features, saree and jewellery.", img: images.heroBride },
  { t: "HD Makeup", d: "Soft-focus, camera-ready finish that looks refined in photographs and in person.", img: images.makeupApplication },
  { t: "Ultra HD Makeup", d: "A lightweight, seamless finish for close-up photography and long celebrations.", img: images.glossyBride },
  { t: "Glossy Makeup", d: "Luminous, dewy skin with a fresh, radiant glow.", img: images.glossyBride },
  { t: "Party Makeup", d: "Elegant looks for receptions, engagements, functions and celebrations.", img: images.partyMakeup },
  { t: "Bridal Hair Styling", d: "Classic buns, braids and flower arrangements to complete your look.", img: images.bridalHair },
  { t: "Makeup Consultation", d: "Discuss your outfit, skin and preferences to plan the right look.", img: images.skinCourse },
];

function Bridal() {
  return (
    <>
      <PageHero eyebrow="Bridal Makeup Artistry" title={<>Walk Into Your Wedding Day <em className="text-primary">with Confidence.</em></>}
        text="Professional bridal makeup artistry to complement your look, your outfit and your special occasion." image={images.glossyBride}>
        <a href="#book" className="btn-ruby">Book Your Look</a>
        <a href={bridalWhatsApp} target="_blank" rel="noopener noreferrer" className="btn-outline"><MessageCircle className="h-4 w-4" /> Check Availability on WhatsApp</a>
      </PageHero>

      <section className="mx-auto max-w-7xl px-5 py-24">
        <SectionHeading center eyebrow="Services" title="Artistry for Every Celebration"
          intro="Styles and techniques are discussed during your enquiry so we can recommend what suits your event best." />
        <div className="mt-16 space-y-20">
          {services.map((s, i) => (
            <Reveal key={s.t}>
              <div className={`grid items-center gap-10 md:grid-cols-2 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
                <div className="overflow-hidden rounded-2xl">
                  <img src={s.img} alt={s.t} loading="lazy" className="aspect-[5/4] w-full object-cover transition duration-700 hover:scale-105" />
                </div>
                <div className="max-w-md">
                  <p className="font-sans text-sm text-gold">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="mt-2 text-4xl">{s.t}</h3>
                  <span className="gold-rule mt-4" />
                  <p className="mt-4 leading-relaxed text-muted-foreground">{s.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-blush-gradient">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-5 py-16 text-center md:flex-row md:text-left">
          <Home className="h-10 w-10 shrink-0 text-primary" />
          <p className="text-lg leading-relaxed">
            <span className="font-serif text-2xl text-wine">Home service requests welcome.</span><br />
            Home-service requests can be discussed directly with the artist. Travel availability, charges and booking dates are confirmed through direct enquiry.
          </p>
        </div>
      </section>

      <section id="book" className="mx-auto max-w-4xl scroll-mt-28 px-5 py-24">
        <EnquiryForm fields={bridalFields} title="Bridal Booking Enquiry" intro="Tell us about your event and we'll confirm availability." />
        <div className="mt-6 text-center">
          <a href={bridalWhatsApp} target="_blank" rel="noopener noreferrer" className="btn-outline"><MessageCircle className="h-4 w-4" /> Check Availability on WhatsApp</a>
        </div>
      </section>
    </>
  );
}
