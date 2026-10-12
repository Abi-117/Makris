import { createFileRoute } from "@tanstack/react-router";
import { CoursePage } from "@/components/site/CoursePage";
import { courses } from "@/lib/site";

export const Route = createFileRoute("/courses/makeup")({
  head: () => ({
    meta: [
      { title: "Professional Makeup Course in Chennai (Avadi) | Makris Academy" },
      { name: "description", content: "Basic to advanced makeup artistry course: bridal, HD, Ultra HD, glossy, airbrush, saree draping and makeup business development." },
      { property: "og:title", content: "Professional Makeup Artistry Course — Makris" },
      { property: "og:description", content: "Professional makeup training, basic to advanced, in Avadi, Chennai." },
      { property: "og:url", content: "/courses/makeup" },
    ],
    links: [{ rel: "canonical", href: "/courses/makeup" }],
  }),
  component: () => (
    <CoursePage course={courses[2]!} heading="Professional Makeup Artistry — Basic to Advanced" interest="Makeup Course" ctaLabel="Enquire About Makeup Training" />
  ),
});
