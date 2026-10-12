import { createFileRoute } from "@tanstack/react-router";
import { CoursePage } from "@/components/site/CoursePage";
import { courses } from "@/lib/site";

export const Route = createFileRoute("/courses/hair")({
  head: () => ({
    meta: [
      { title: "Hair Course in Avadi, Chennai — Basic to Advanced | Makris" },
      { name: "description", content: "Professional hair course in Avadi: haircuts, colouring, hair spa, keratin, botox, straightening and bridal hair dressing." },
      { property: "og:title", content: "Professional Hair Course — Makris Beauty Academy" },
      { property: "og:description", content: "Basic to advanced hair training, offline in Avadi, Chennai." },
      { property: "og:url", content: "/courses/hair" },
    ],
    links: [{ rel: "canonical", href: "/courses/hair" }],
  }),
  component: () => (
    <CoursePage course={courses[0]!} heading="Professional Hair Course — Basic to Advanced" interest="Hair Course" ctaLabel="Enquire About Hair Training" />
  ),
});
