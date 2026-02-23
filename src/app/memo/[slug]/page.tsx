import { notFound } from "next/navigation";
import { memos, getMemoBySlug } from "@/data/memos";
import { fetchMemos, fetchMemo } from "@/lib/cms";
import MemoDetail from "@/components/MemoDetail";
import type { Memo } from "@/data/memos";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const cmsMemo = await fetchMemo(slug);
  if (cmsMemo) {
    const title = `${cmsMemo.title} — Hamad Pervaiz`;
    const description = `${cmsMemo.tag || ""} · ${cmsMemo.meta?.readTime || ""}`;
    return {
      title,
      description,
      openGraph: {
        title,
        description,
        type: "article",
        ...(cmsMemo.featuredImage && {
          images: [{ url: cmsMemo.featuredImage, alt: cmsMemo.title }],
        }),
      },
      twitter: {
        title,
        description,
        ...(cmsMemo.featuredImage && { images: [cmsMemo.featuredImage] }),
      },
    };
  }

  const memo = getMemoBySlug(slug);
  if (!memo) return { title: "Memo Not Found" };
  const title = `${memo.title} — Hamad Pervaiz`;
  const description = `${memo.tag} · ${memo.time}`;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
    },
    twitter: {
      title,
      description,
    },
  };
}

export default async function MemoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Try CMS first
  const cmsMemo = await fetchMemo(slug);
  if (cmsMemo) {
    const memo: Memo = {
      slug: cmsMemo.slug,
      date: cmsMemo.publishedAt
        ? new Date(cmsMemo.publishedAt).toISOString().slice(0, 7).replace("-", ".")
        : "",
      fullDate: cmsMemo.publishedAt
        ? new Date(cmsMemo.publishedAt).toISOString().slice(0, 10).replace(/-/g, ".")
        : "",
      title: cmsMemo.title,
      tag: cmsMemo.tag || "",
      time: cmsMemo.meta?.readTime || "",
      featuredImage: cmsMemo.featuredImage || undefined,
      sections: cmsMemo.sections.map((s) => ({
        type: s.type as Memo["sections"][number]["type"],
        content: s.content,
        caption: s.caption ?? undefined,
      })),
    };
    return <MemoDetail memo={memo} />;
  }

  // Fall back to local data
  const memo = getMemoBySlug(slug);
  if (!memo) notFound();
  return <MemoDetail memo={memo} />;
}
