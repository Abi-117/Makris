import { createFileRoute } from "@tanstack/react-router";
import { MapPin, MessageCircle, Navigation, Phone, Youtube } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { EnquiryForm, generalFields } from "@/components/site/EnquiryForm";
import { business } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Makris Makeover Artistry | Makeup Artist in Avadi Chennai" },
      { name: "description", content: "Call 7904155935 or WhatsApp to book bridal makeup or enquire about beauty courses. Studio on OCF Road, Avadi, Tamil Nadu." },
      { property: "og:title", content: "Contact & Enquiries — Makris Makeover Artistry" },
      { property: "og:description", content: "Book bridal makeup or enquire about courses in Avadi, Chennai." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const actions = [
    { href: `tel:${business.phoneIntl}`, label: "Call Now", icon: Phone, ext: false },
    { href: business.whatsapp, label: "Chat on WhatsApp", icon: MessageCircle, ext: true },
    { href: business.maps, label: "Get Directions", icon: Navigation, ext: true },
    { href: business.youtube, label: "Watch on YouTube", icon: Youtube, ext: true },
  ];
  return (
    <>
      <section className="bg-blush-gradient px-5 py-20 text-center">
        <Reveal>
          <p className="eyebrow">Contact &amp; Enquiries</p>
          <h1 className="mt-4 text-5xl md:text-7xl">Let's Create Something <em className="text-primary">Beautiful</em></h1>
          <p className="mx-auto mt-5 max-w-xl text-muted-foreground">Bridal bookings, course enquiries or a quick question — we'd love to hear from you.</p>
        </Reveal>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-[0.85fr_1.15fr]">
        <div>
          <h2 className="text-4xl">{business.name}</h2>
          <span className="gold-rule mt-4" />
          <p className="mt-6 flex gap-3 leading-relaxed"><MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />{business.address}</p>
          <p className="mt-4 flex gap-3"><Phone className="mt-0.5 h-5 w-5 text-primary" /><a href={`tel:${business.phoneIntl}`} className="hover:text-primary">{business.phone}</a></p>
          <div className="mt-8 grid grid-cols-2 gap-3">
            {actions.map(({ href, label, icon: Icon, ext }) => (
              <a key={label} href={href} {...(ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="flex flex-col items-start gap-3 rounded-xl border border-gold/50 bg-card p-5 transition hover:-translate-y-1 hover:border-primary">
                <Icon className="h-5 w-5 text-primary" /><span className="text-sm font-medium">{label}</span>
              </a>
            ))}
          </div>
          <div className="mt-8 overflow-hidden rounded-2xl border border-gold/40">
            <iframe title="Map to Makris Makeover Artistry" loading="lazy" className="h-64 w-full"
              src={`https://www.google.com/maps?q=${encodeURIComponent(business.address)}&output=embed`} />
          </div>
        </div>
        <EnquiryForm fields={generalFields()} title="Send an Enquiry" intro="Fill in your details and we'll continue the conversation on WhatsApp." />
      </section>
    </>
  );
}
