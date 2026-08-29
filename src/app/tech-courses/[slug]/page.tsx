import type { Metadata } from "next";
import CourseDetail from "@/components/CourseDetail";

type CourseMeta = { course: { title: string; slug: string; short_description: string | null; description: string | null; meta_description: string | null; thumbnail: string | null; status?: string } };
const siteUrl = "https://www.websitedesigner.ng";

function plainText(value: string | null | undefined) {
  return (value ?? "").replace(/<[^>]*>/g, " ").replace(/&nbsp;/gi, " ").replace(/&amp;/gi, "&").replace(/&quot;/gi, '"').replace(/&#39;/gi, "'").replace(/\s+/g, " ").trim();
}

function descriptionFor(course: CourseMeta["course"]) {
  const text = plainText(course.meta_description || course.short_description || course.description);
  if (!text) return `Learn ${course.title} online with practical lessons, mentorship and a certificate from Website Designer Nigeria.`;
  return text.length <= 160 ? text : `${text.slice(0, 157).trimEnd()}...`;
}

function imageFor(path: string | null) {
  if (!path) return `${siteUrl}/images/tech-courses-hero.png`;
  if (/^https?:\/\//i.test(path)) return path;
  const mediaBase = (process.env.NEXT_PUBLIC_LEGACY_MEDIA_URL ?? `${siteUrl}/media`).replace(/\/$/, "");
  return `${mediaBase}/${path.replace(/^\/?(media\/|storage\/)?/, "")}`;
}

async function getCourse(slug: string) {
  try {
    const base = (process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000/api").replace(/\/$/, "");
    const response = await fetch(`${base}/courses/${encodeURIComponent(slug)}`, { next: { revalidate: 300 } });
    return response.ok ? ((await response.json()) as CourseMeta).course : null;
  } catch { return null; }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const course = await getCourse(slug);
  const canonical = `/course/${slug}/`;
  if (!course) {
    const name = slug.split("-").filter(Boolean).map(word => word[0]?.toUpperCase() + word.slice(1)).join(" ");
    return { title: { absolute: `${name} - Online Tech Course` }, description: `Learn ${name} online with Website Designer Nigeria.`, alternates: { canonical }, robots: { index: false, follow: true } };
  }
  const description = descriptionFor(course), image = imageFor(course.thumbnail), pageUrl = `${siteUrl}${canonical}`;
  return {
    title: { absolute: course.title }, description,
    keywords: [course.title, `${course.title} online course`, "Online Tech Courses in Nigeria"],
    alternates: { canonical }, robots: { index: course.status !== "coming_soon", follow: true },
    openGraph: { title: course.title, description, url: pageUrl, siteName: "Website Designer Nigeria", type: "website", images: [{ url: image, alt: course.title }] },
    twitter: { card: "summary_large_image", title: course.title, description, images: [image] },
  };
}

export default function Page() { return <CourseDetail/>; }
