import heroBride from "@/assets/hero-bride.jpg";
import glossyBride from "@/assets/glossy-bride.jpg";
import makeupApplication from "@/assets/makeup-application.jpg";
import bridalHair from "@/assets/bridal-hair.jpg";
import academyClass from "@/assets/academy-class.jpg";
import hairCourse from "@/assets/hair-course.jpg";
import skinCourse from "@/assets/skin-course.jpg";
import partyMakeup from "@/assets/party-makeup.jpg";
import artistAsset from "@/assets/artist.png.asset.json";
import  hdMakeup from "@/assets/makeup.png";
import logoAsset from "@/assets/makris-logo.png.asset.json";

import redSatinBeauty from "@/assets/red.png";
import redsaree from "@/assets/redsaree.png";
import heroBride1 from "@/assets/heroBride.png";
import redGlamSaree from "@/assets/redGlamSaree.png";
import redFlowyGown from "@/assets/redFlowyGown.png";
import redSatinElegance from "@/assets/redSatinElegance.png";
import traditionalBrideLook from "@/assets/traditionalBrideLook.png";
import royalBlueBride from "@/assets/royalBlueBride.png";
import blueGoldBridalGlam from "@/assets/blueGoldBridalGlam.png";
import blackRoyalBridal from "@/assets/blackRoyalBridal.png";
import kaliTraditionalLook from "@/assets/kaliTraditionalLook.png";
import goldenBridalGlow from "@/assets/goldenBridalGlow.png";
import blackGlamPortrait from "@/assets/blackGlamPortrait.png";
import tealFloralGown from "@/assets/tealFloralGown.png";
import floralFestiveLook from "@/assets/floralFestiveLook.png";
import magentaBlueBridal from "@/assets/magentaBlueBridal.png";
import blueSilkElegance from "@/assets/blueSilkElegance.png";
import greenRedBridalLook from "@/assets/greenRedBridalLook.png";
import purpleSilkBride from "@/assets/purpleSilkBride.png";
import floralWhiteGown from "@/assets/floralWhiteGown.png";

export const images = {
  heroBride, glossyBride, makeupApplication, bridalHair, academyClass,
  hairCourse, skinCourse, partyMakeup,hdMakeup,redSatinBeauty,redsaree,heroBride1,redGlamSaree,redFlowyGown,redSatinElegance,traditionalBrideLook,
  artist: artistAsset.url,royalBlueBride,blueGoldBridalGlam,blackRoyalBridal,kaliTraditionalLook, goldenBridalGlow,blackGlamPortrait,tealFloralGown,floralFestiveLook,magentaBlueBridal,blueSilkElegance,greenRedBridalLook,
  logo: logoAsset.url, purpleSilkBride,floralWhiteGown,
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
  // { src: heroBride, alt: "South Indian bride in red silk saree with gold temple jewellery", category: "Bridal Makeup" },
  // { src: glossyBride, alt: "Close-up of glossy bridal makeup with ruby red lips", category: "Glossy Makeup" },
  // { src: makeupApplication, alt: "HD bridal makeup being applied with a brush", category: "HD Makeup" },
  // { src: bridalHair, alt: "Bridal bun decorated with jasmine and gold hair jewellery", category: "Hairstyling" },
  // { src: partyMakeup, alt: "Soft glam party makeup with pink lehenga", category: "Party Makeup" },
  // { src: skinCourse, alt: "Relaxing facial treatment in a beauty studio", category: "Skin & Beauty" },
  // { src: academyClass, alt: "Students practising makeup at mirrored stations", category: "Academy Training" },
  // { src: hairCourse, alt: "Stylist curling long dark hair", category: "Hairstyling" },
{
  src: redSatinBeauty,
  alt: "Woman in a luxurious red satin outfit and matching headwrap against a red background",
  category: "Glossy Makeup"
},
 { src: redsaree, alt: "South Indian bride in red silk saree with gold temple jewellery", category: "Bridal Makeup" },
  {
  src: heroBride1,
  alt: "Woman in a flowing red gown posing against a blue-grey background",
  category: "Bridal Makeup"
},
{
  src: redGlamSaree,
  alt: "Woman wearing a glamorous deep red sequined saree with a matching lace blouse in a dramatic studio setting",
  category: "Party Makeup"
},
{
  src: redFlowyGown,
  alt: "Woman wearing a flowing red gown with long wavy hair in a rustic outdoor studio setting",
  category: "Party Makeup"
},
{
  src: redSatinElegance,
  alt: "Woman wearing a glossy red satin dress and matching headwrap against a red studio background",
  category: "Glossy Makeup"
},
{
  src: blueGoldBridalGlam,
  alt: "South Indian bride in a royal blue and gold silk saree with traditional gold jewellery, jasmine flowers, and elegant bridal makeup",
  category: "Bridal Makeup"
},
{
  src: traditionalBrideLook,
  alt: "South Indian bride in a red and gold silk saree with traditional gold jewellery, a decorated jasmine and rose braid, and elegant bridal makeup",
  category: "Bridal Makeup"
},
{
  src: royalBlueBride,
  alt: "Woman wearing a royal blue and gold silk saree with traditional gold jewellery, jasmine-adorned braid, sunglasses, and elegant makeup",
  category: "Bridal Makeup"
},
{
  src: blackRoyalBridal,
  alt: "Woman wearing a black traditional outfit with elaborate gold temple jewellery, voluminous curly hair, and elegant bridal makeup",
  category: "Bridal Makeup"
},
{
  src: kaliTraditionalLook,
  alt: "Woman dressed as Goddess Kali in an ornate traditional crown, red and gold costume, temple jewellery, and dramatic devotional makeup",
  category: "Traditional Makeup"
},
{
  src: goldenBridalGlow,
  alt: "South Indian bride wearing a golden yellow silk saree, richly embroidered red blouse, traditional gold temple jewellery, and elegant bridal makeup",
  category: "Bridal Makeup"
},
{
  src: blackGlamPortrait,
  alt: "Woman wearing a black sequin crop top with voluminous side-swept hair and elegant soft glam makeup against a warm red studio background",
  category: "Party Makeup"
},
{
  src: tealFloralGown,
  alt: "Woman wearing a teal blue patterned layered gown with long wavy hair and soft glam makeup against a natural studio background",
  category: "Party Makeup"
},
{
  src: floralFestiveLook,
  alt: "Woman wearing a red saree with a gold border, black blouse, floral jewellery, and elegant festive makeup against a decorated backdrop",
  category: "Party Makeup"
},
{
  src: magentaBlueBridal,
  alt: "South Indian bride wearing a magenta and royal blue silk saree with a gold border, traditional temple jewellery, bridal mehndi, and elegant eye makeup",
  category: "Bridal Makeup"
},
{
  src: blueSilkElegance,
  alt: "Woman wearing a royal blue silk saree with a gold border, traditional gold jewellery, red bindi, and classic South Indian makeup",
  category: "Traditional Makeup"
},

{
  src: greenRedBridalLook,
  alt: "South Indian bride wearing a red silk saree with a green blouse, traditional gold temple jewellery, jasmine flowers, and elegant bridal makeup",
  category: "Bridal Makeup"
},
{
  src: purpleSilkBride,
  alt: "South Indian bride wearing a purple silk saree with a gold border, traditional gold temple jewellery, jasmine flowers, and elegant bridal makeup in an outdoor setting",
  category: "Bridal Makeup"
},
{
  src: floralWhiteGown,
  alt: "Woman wearing a white floral halter-neck gown with pink rose prints, a silver necklace, and elegant soft glam makeup",
  category: "Party Makeup"
},
];
