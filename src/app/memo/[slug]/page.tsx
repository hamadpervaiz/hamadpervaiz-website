import { notFound } from "next/navigation";
import { getMemoBySlug } from "@/data/memos";
import MemoDetail from "@/components/MemoDetail";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const memo = getMemoBySlug(slug);
  if (!memo) return { title: "Memo Not Found" };
  const title = `${memo.title} — Hamad Pervaiz`;
  const firstParagraph = memo.sections.find((s) => s.type === "paragraph");
  const description = firstParagraph
    ? firstParagraph.content.slice(0, 200) + (firstParagraph.content.length > 200 ? "..." : "")
    : `${memo.tag} · ${memo.time}`;
  const ogImage = memo.featuredImage || "/images/hero-portrait.jpg";
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article" as const,
      url: `/memo/${memo.slug}`,
      images: [{ url: ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image" as const,
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function MemoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const memo = getMemoBySlug(slug);
  if (!memo) notFound();
  return <MemoDetail memo={memo} />;
}
