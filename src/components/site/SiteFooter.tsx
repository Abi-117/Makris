import { Link } from "@tanstack/react-router";
import { ArrowUp, MapPin, MessageCircle, Phone, Youtube } from "lucide-react";
import { useEffect, useState } from "react";
import { business } from "@/lib/site";

export function SiteFooter() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  const linkCls = "text-sm text-primary-foreground/75 hover:text-gold transition-colors";
  return (
    <footer className="bg-ruby-gradient text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-4">
        <div>
          <p className="font-serif text-3xl">Makris</p>
          <p className="text-[0.65rem] uppercase tracking-[0.3em] text-gold">Makeover Artistry</p>
          <p className="mt-4 text-sm leading-relaxed text-primary-foreground/75">
            Bridal makeup artistry and offline Hair, Skin &amp; Makeup training in Avadi, Chennai — with over 10 years of experience.
          </p>
        </div>
        <div>
          <p className="eyebrow text-gold">Explore</p>
          <ul className="mt-4 space-y-2">
            <li><Link to="/" className={linkCls}>Home</Link></li>
            <li><Link to="/about" className={linkCls}>About the Artist</Link></li>
            <li><Link to="/bridal-makeup" className={linkCls}>Bridal Makeup</Link></li>
            <li><Link to="/gallery" className={linkCls}>Gallery</Link></li>
            <li><Link to="/contact" className={linkCls}>Contact</Link></li>
          </ul>
        </div>
        <div>
          <p className="eyebrow text-gold">Academy</p>
          <ul className="mt-4 space-y-2">
            <li><Link to="/academy" className={linkCls}>Beauty Academy</Link></li>
            <li><Link to="/courses/hair" className={linkCls}>Hair Course</Link></li>
            <li><Link to="/courses/skin" className={linkCls}>Skin Course</Link></li>
            <li><Link to="/courses/makeup" className={linkCls}>Makeup Course</Link></li>
          </ul>
        </div>
        <div>
          <p className="eyebrow text-gold">Visit &amp; Connect</p>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
            <li className="flex gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />{business.address}</li>
            <li><a href={`tel:${business.phoneIntl}`} className="flex gap-2 hover:text-gold"><Phone className="h-4 w-4 text-gold" />{business.phone}</a></li>
            <li><a href={business.whatsapp} target="_blank" rel="noopener noreferrer" className="flex gap-2 hover:text-gold"><MessageCircle className="h-4 w-4 text-gold" />WhatsApp</a></li>
            <li><a href={business.youtube} target="_blank" rel="noopener noreferrer" className="flex gap-2 hover:text-gold"><Youtube className="h-4 w-4 text-gold" />YouTube</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15 px-5 py-5 text-center text-xs text-primary-foreground/60">
        © {new Date().getFullYear()} Makris Makeover Artistry. All rights reserved.
      </div>
      {show && (
        <button aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-40 rounded-full border border-gold bg-ivory p-3 text-wine shadow-soft transition hover:-translate-y-1">
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </footer>
  );
}
