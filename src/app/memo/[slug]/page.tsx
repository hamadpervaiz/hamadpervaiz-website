import { notFound } from "next/navigation";
import { memos, getMemoBySlug } from "@/data/memos";
import { fetchMemos, fetchMemo } from "@/lib/cms";
import MemoDetail from "@/components/MemoDetail";
import type { Memo } from "@/data/memos";

export async function generateStaticParams() {
  const cmsMemos = await fetchMemos();
  if (cmsMemos) {
    return cmsMemos.map((memo) => ({ slug: memo.slug }));
  }
  return memos.map((memo) => ({ slug: memo.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const cmsMemo = await fetchMemo(slug);
  if (cmsMemo) {
    return {
      title: `${cmsMemo.title} — Hamad Pervaiz`,
      description: `${cmsMemo.tag || ""} · ${cmsMemo.meta?.readTime || ""}`,
    };
  }

  const memo = getMemoBySlug(slug);
  if (!memo) return { title: "Memo Not Found" };
  return {
    title: `${memo.title} — Hamad Pervaiz`,
    description: `${memo.tag} · ${memo.time}`,
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
