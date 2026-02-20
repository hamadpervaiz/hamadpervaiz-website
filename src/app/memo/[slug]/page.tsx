import { notFound } from "next/navigation";
import { memos, getMemoBySlug } from "@/data/memos";
import MemoDetail from "@/components/MemoDetail";

export function generateStaticParams() {
  return memos.map((memo) => ({ slug: memo.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
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
  const memo = getMemoBySlug(slug);
  if (!memo) notFound();
  return <MemoDetail memo={memo} />;
}
