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
  const memo = getMemoBySlug(slug);
  if (!memo) notFound();
  return <MemoDetail memo={memo} />;
}
