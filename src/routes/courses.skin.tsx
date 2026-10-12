import { createFileRoute } from "@tanstack/react-router";
import { CoursePage } from "@/components/site/CoursePage";
import { courses } from "@/lib/site";

export const Route = createFileRoute("/courses/skin")({
  head: () => ({
    meta: [
      { title: "Skin and Beauty Course in Avadi, Chennai | Makris Academy" },
      { name: "description", content: "Professional skin & beauty course: facials, eyebrow enhancement, manicure, pedicure, waxing and salon treatments in Avadi." },
      { property: "og:title", content: "Professional Skin & Beauty Course — Makris" },
      { property: "og:description", content: "Offline skin and beauty training in Avadi, Chennai." },
      { property: "og:url", content: "/courses/skin" },
    ],
    links: [{ rel: "canonical", href: "/courses/skin" }],
  }),
  component: () => (
    <CoursePage course={courses[1]!} heading="Professional Skin & Beauty Course" interest="Skin Course" ctaLabel="Enquire About Skin Training" />
  ),
});
