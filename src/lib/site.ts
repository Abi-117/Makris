import heroBride from "@/assets/hero-bride.jpg";
import glossyBride from "@/assets/glossy-bride.jpg";
import makeupApplication from "@/assets/makeup-application.jpg";
import bridalHair from "@/assets/bridal-hair.jpg";
import academyClass from "@/assets/academy-class.jpg";
import hairCourse from "@/assets/hair-course.jpg";
import skinCourse from "@/assets/skin-course.jpg";
import partyMakeup from "@/assets/party-makeup.jpg";
import artistAsset from "@/assets/artist.png.asset.json";
import logoAsset from "@/assets/makris-logo.png.asset.json";

export const images = {
  heroBride, glossyBride, makeupApplication, bridalHair, academyClass,
  hairCourse, skinCourse, partyMakeup,
  artist: artistAsset.url,
  logo: logoAsset.url,
};

export const business = {
  name: "Makris Makeover Artistry",
  phone: "7904155935",
  phoneIntl: "+917904155935",
  address: "Adithanar Street, Opp. Meenashi Theater, OCF Road, Bhaktavatsala Puram, Avadi, Tamil Nadu 600054",
  youtube: "https://www.youtube.com/channel/UCC0N6rgTqQ3-vYjtjfsa0QQ",
  whatsapp: "https://wa.me/917904155935",
  maps: "https://www.google.com/maps/dir/?api=1&destination=" +
    encodeURIComponent("Adithanar Street, Opp. Meenashi Theater, OCF Road, Bhaktavatsala Puram, Avadi, Tamil Nadu 600054"),
};

export function whatsappLink(message: string) {
  return `${business.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const bridalWhatsApp = whatsappLink(
  "Hello Makris Makeover Artistry, I would like to enquire about bridal makeup availability.",
);
export const academyWhatsApp = whatsappLink(
  "Hello Makris Makeover Artistry, I would like to know more about your beauty courses.",
);

export type Course = {
  slug: "hair" | "skin" | "makeup";
  title: string;
  short: string;
  image: string;
  intro: string;
  modules: { title: string; detail: string }[];
};

const m = (title: string, detail: string) => ({ title, detail });

export const courses: Course[] = [
  {
    slug: "hair",
    title: "Hair Course",
    short: "Basic to Advanced",
    image: hairCourse,
    intro: "From hair analysis and consultation to colouring, keratin and bridal hair dressing — practical salon skills taught step by step.",
    modules: [
      m("Hair Anatomy and Analysis", "Understand hair structure, types and condition to plan the right service."),
      m("Client Consultation", "Learn to listen, assess and recommend services with confidence."),
      m("Shampooing and Conditioning", "Correct techniques and product choices for every hair type."),
      m("Basic and Advanced Haircuts", "Foundational cuts through to layered and creative styles."),
      m("Head Massage", "Relaxing massage techniques that elevate the client experience."),
      m("Hair Spa", "Nourishing spa rituals and product knowledge."),
      m("Basic and Advanced Hair Colouring", "Colour theory, application, highlights and global colour."),
      m("Hair Setting and Hair Dressing", "Setting, curling and dressing hair for occasions and brides."),
      m("Henna Conditioning", "Traditional henna application for colour and conditioning."),
      m("Health and Safety Measures", "Hygiene, tool care and safe salon practice."),
      m("Personal Effectiveness", "Professional conduct, communication and time management."),
      m("Salon Planning and Home Remedies", "Planning a salon space and simple natural care remedies."),
      m("Hair Straightening", "Straightening techniques and aftercare guidance."),
      m("Hair Botox", "Understanding and performing smoothing hair treatments."),
      m("Keratin Treatment", "Step-by-step keratin application and client aftercare."),
    ],
  },
  {
    slug: "skin",
    title: "Skin Course",
    short: "Basic to Advanced",
    image: skinCourse,
    intro: "A professional beauty course covering facials, grooming services, beauty machines and salon treatments in a calm studio setting.",
    modules: [
      m("Skin Anatomy", "Layers of the skin, skin types and how to assess them."),
      m("Eyebrow Enhancement", "Shaping and threading for natural, balanced brows."),
      m("Facial Treatments and Product Knowledge", "Facial routines and choosing the right products."),
      m("Pedicure and Manicure", "Hand and foot care services with a professional finish."),
      m("Waxing", "Waxing techniques, hygiene and client comfort."),
      m("Health and Safety Measures", "Sanitation, patch tests and safe practice."),
      m("Personal Effectiveness", "Professional conduct and client communication."),
      m("Beauty Machine Technologies", "Introduction to commonly used salon beauty machines."),
      m("Common Skin Concerns and Advanced Salon Treatments", "Recognising everyday skin concerns and suitable salon services."),
      m("Salon Planning and Home Remedies", "Setting up a beauty service space and simple home care."),
    ],
  },
  {
    slug: "makeup",
    title: "Professional Makeup Course",
    short: "Basic to Advanced",
    image: makeupApplication,
    intro: "The complete makeup artistry journey — colour theory, bridal, HD, glossy and airbrush techniques, plus saree draping, grooming and business skills.",
    modules: [
      m("Responsibilities of a Makeup Artist", "Professional standards, hygiene and client care."),
      m("History of Makeup", "How makeup has evolved and why it matters today."),
      m("Skin Anatomy and Facial Anatomy", "Understanding skin and face shapes for flattering makeup."),
      m("Makeup Problems and Colour Theory", "Correcting, concealing and choosing harmonious colours."),
      m("Makeup Tools and Product Knowledge", "Brushes, sponges, bases and how to use them."),
      m("Hair Dressing and Hair Setting", "Preparing and setting hair to complete a look."),
      m("Basic to Advanced Hairstyles", "Buns, braids, curls and bridal hairstyles."),
      m("Saree Draping and Saree Pleating", "Neat, secure draping styles for every occasion."),
      m("Box Folding", "Pre-pleating and box folding sarees for quick draping."),
      m("Personal Grooming", "Presenting yourself professionally as an artist."),
      m("Party Makeup", "Soft glam and occasion looks."),
      m("Bridal Makeup", "Traditional and contemporary bridal looks."),
      m("Skin Finish Makeup", "Natural, skin-like finishes."),
      m("Single-Layer Makeup", "Lightweight, breathable application."),
      m("Glossy Makeup", "Dewy, luminous glossy finishes."),
      m("HD Makeup", "Camera-ready HD techniques."),
      m("Ultra HD Makeup", "Refined Ultra HD application for close-up photography."),
      m("Sweat-Resistant Makeup Techniques", "Long-wear methods for warm weather and long events."),
      m("Airbrush Makeup", "Introduction to airbrush application."),
      m("Personality Development", "Confidence, communication and presentation."),
      m("Makeup Business Development", "Building clients, portfolio and pricing your work."),
    ],
  },
];

export const academyBenefits = [
  "Complimentary products provided during training",
  "Free basic-to-advanced hairstyle classes",
  "Free saree draping",
  "Saree pre-pleating",
  "Box folding",
  "Full theory and practical knowledge",
  "Portfolio shoots",
  "Certificates provided upon course completion",
  "Personality development",
  "Makeup business development",
];

export type GalleryItem = { src: string; alt: string; category: string };
export const galleryCategories = [
  "Bridal Makeup", "HD Makeup", "Glossy Makeup", "Party Makeup", "Hairstyling", "Skin & Beauty", "Academy Training",
] as const;

// Placeholder images — replace with genuine portfolio photographs.
export const gallery: GalleryItem[] = [
  { src: heroBride, alt: "South Indian bride in red silk saree with gold temple jewellery", category: "Bridal Makeup" },
  { src: glossyBride, alt: "Close-up of glossy bridal makeup with ruby red lips", category: "Glossy Makeup" },
  { src: makeupApplication, alt: "HD bridal makeup being applied with a brush", category: "HD Makeup" },
  { src: bridalHair, alt: "Bridal bun decorated with jasmine and gold hair jewellery", category: "Hairstyling" },
  { src: partyMakeup, alt: "Soft glam party makeup with pink lehenga", category: "Party Makeup" },
  { src: skinCourse, alt: "Relaxing facial treatment in a beauty studio", category: "Skin & Beauty" },
  { src: academyClass, alt: "Students practising makeup at mirrored stations", category: "Academy Training" },
  { src: hairCourse, alt: "Stylist curling long dark hair", category: "Hairstyling" },
];
