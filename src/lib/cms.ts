const CMS_API_URL = process.env.CMS_API_URL || "https://cms.oduscloud.com/api/v1";
const CMS_API_KEY = process.env.CMS_API_KEY || "";

interface CMSContentItem {
  id: string;
  page: string;
  key: string;
  label: string;
  value: string;
  type: string;
}

interface CMSCollectionItem {
  id: string;
  title: string;
  slug: string;
  featuredImage: string | null;
  tag: string | null;
  status: string;
  meta: Record<string, string>;
  publishedAt: string | null;
}

interface CMSCollectionItemDetail extends CMSCollectionItem {
  sections: {
    type: string;
    content: string;
    caption: string | null;
    sortOrder: number;
  }[];
}

async function cmsGet<T>(path: string): Promise<T | null> {
  if (!CMS_API_KEY) return null;
  try {
    const res = await fetch(`${CMS_API_URL}${path}`, {
      headers: { Authorization: `Bearer ${CMS_API_KEY}` },
      next: { revalidate: 60 },
    });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export async function fetchContent(page?: string): Promise<Record<string, string> | null> {
  const query = page ? `?page=${page}` : "";
  const items = await cmsGet<CMSContentItem[]>(`/content${query}`);
  if (!items) return null;
  const map: Record<string, string> = {};
  for (const item of items) {
    map[`${item.page}.${item.key}`] = item.value;
  }
  return map;
}

export async function fetchMemos(): Promise<CMSCollectionItem[] | null> {
  const data = await cmsGet<{ items: CMSCollectionItem[] }>("/collections/memos");
  return data?.items ?? null;
}

export async function fetchMemo(slug: string): Promise<CMSCollectionItemDetail | null> {
  return cmsGet<CMSCollectionItemDetail>(`/collections/memos/${slug}`);
}
