import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, MessageCircle, X } from "lucide-react";
import { useEffect, useState } from "react";
import { bridalWhatsApp, images } from "@/lib/site";
import logo from "@/assets/logo.png";

type NavItem = { to: string; label: string; children?: { to: string; label: string }[] };
const nav: NavItem[] = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/bridal-makeup", label: "Bridal Makeup", children: [
    { to: "/bridal-makeup", label: "Bridal Services" },
    { to: "/gallery", label: "Bridal Gallery" },
  ] },
  { to: "/academy", label: "Academy", children: [
    { to: "/academy", label: "Academy Overview" },
    { to: "/courses/hair", label: "Hair Course" },
    { to: "/courses/skin", label: "Skin Course" },
    { to: "/courses/makeup", label: "Makeup Course" },
  ] },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

export function Wordmark() {
  return (
    <Link to="/" className="flex items-center gap-3" aria-label="Makris Makeover Artistry home">
      <img src={logo} alt="" className="h-11 w-11 rounded-full border border-gold object-cover" />
      <span className="leading-none">
        <span className="block font-serif text-xl text-wine md:text-2xl">Makris</span>
        <span className="block text-[0.6rem] uppercase tracking-[0.3em] text-muted-foreground">Makeover Artistry</span>
      </span>
    </Link>
  );
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState<string | null>(null);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on(); window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <>
      <div className="bg-ruby-gradient px-4 py-2 text-center text-[0.7rem] uppercase tracking-[0.25em] text-primary-foreground">
        Bridal Makeup <span className="text-gold">|</span> Professional Beauty Courses <span className="text-gold">|</span> Avadi, Chennai
      </div>
      <header className={`sticky top-0 z-40 transition-all duration-300 ${scrolled ? "bg-ivory/95 shadow-nav backdrop-blur" : "bg-ivory"}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
          <Wordmark />
          <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => (
              <div key={item.label} className="relative"
                onMouseEnter={() => item.children && setMenu(item.label)}
                onMouseLeave={() => setMenu(null)}
                onFocus={() => item.children && setMenu(item.label)}
                onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget as Node)) setMenu(null); }}>
                <Link to={item.to} activeOptions={{ exact: item.to === "/" }}
                  className="flex items-center gap-1 px-3 py-2 text-sm text-foreground transition-colors hover:text-primary data-[status=active]:text-primary"
                  aria-haspopup={item.children ? "true" : undefined} aria-expanded={item.children ? menu === item.label : undefined}>
                  {item.label}{item.children && <ChevronDown className="h-3.5 w-3.5" />}
                </Link>
                <AnimatePresence>
                  {item.children && menu === item.label && (
                    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} transition={{ duration: 0.18 }}
                      className="absolute left-0 top-full w-56 rounded-xl border border-gold/40 bg-card p-2 shadow-soft">
                      {item.children.map((c) => (
                        <Link key={c.label} to={c.to} className="block rounded-lg px-3 py-2 text-sm hover:bg-blush hover:text-wine">{c.label}</Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Link to="/bridal-makeup" hash="book" className="btn-ruby hidden sm:inline-flex">Book Your Look</Link>
            <button className="rounded-full p-2 text-wine lg:hidden" aria-label="Open menu" onClick={() => setOpen(true)}>
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div className="fixed inset-0 z-50 bg-foreground/30" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(false)} />
            <motion.aside role="dialog" aria-label="Menu" className="fixed right-0 top-0 z-50 flex h-full w-[85%] max-w-sm flex-col overflow-y-auto bg-ivory p-6"
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "tween", duration: 0.3 }}>
              <div className="flex items-center justify-between">
                <Wordmark />
                <button aria-label="Close menu" className="p-2 text-wine" onClick={() => setOpen(false)}><X className="h-6 w-6" /></button>
              </div>
              <nav className="mt-8 flex flex-col" aria-label="Mobile">
                {nav.map((item) => (
                  <div key={item.label} className="border-b border-border py-3">
                    <Link to={item.to} onClick={() => setOpen(false)} className="font-serif text-2xl text-foreground">{item.label}</Link>
                    {item.children && (
                      <div className="mt-2 flex flex-col gap-1 pl-3">
                        {item.children.slice(1).map((c) => (
                          <Link key={c.label} to={c.to} onClick={() => setOpen(false)} className="text-sm text-muted-foreground">{c.label}</Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
              <a href={bridalWhatsApp} target="_blank" rel="noopener noreferrer" className="btn-ruby mt-8"><MessageCircle className="h-4 w-4" /> Enquire on WhatsApp</a>
              <Link to="/bridal-makeup" hash="book" onClick={() => setOpen(false)} className="btn-outline mt-3">Book Your Look</Link>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
