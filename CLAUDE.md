# BearPlex CMS — Client Website Integration Context

> This website is connected to **BearPlex CMS** (https://cms.oduscloud.com).
> Read this file before modifying any CMS-related code.

---

## How It Works

This website fetches content from a headless CMS via a read-only REST API.

```
CMS Admin Panel (editors log in, edit content)
    ↓ writes to database
CMS API (https://cms.oduscloud.com/api/v1)
    ↓ reads via API key
This Website (fetches content at request time)
```

**The website only needs TWO environment variables:**
```
CMS_API_URL=https://cms.oduscloud.com/api/v1
CMS_API_KEY=bpcms_sk_XXXXXXXXXX
```

---

## CMS Client Library

**File:** `src/lib/cms.ts`

Core functions:
- `fetchContent(page?)` — Returns key-value content fields as `Record<string, string>`. Keys are formatted `"page.key"` (e.g., `"home.hero_title"`)
- `fetchCollection(slug)` — Returns all published items in a collection (e.g., `fetchCollection("memos")`)
- `fetchCollectionItem(collectionSlug, itemSlug)` — Returns a single item with full sections
- `fetchVerdicts()` — Shorthand for `fetchCollection("verdicts")`
- `fetchMemos()` — Shorthand for `fetchCollection("memos")`
- `fetchMemo(slug)` — Shorthand for `fetchCollectionItem("memos", slug)`

All functions return `null` if the CMS is unavailable. **Always provide fallback defaults.**

---

## Content Types

### 1. Key-Value Content (text, images, links)

Individual fields organized by page section. Used for headings, descriptions, stats, CTAs.

```typescript
const content = await fetchContent("home");
const title = content?.["home.hero_title"] || "Fallback Title";
```

### 2. Collections (memos, verdicts, blogs)

Structured content types with items and sections. Each item has:
- `title`, `slug`, `tag`, `featuredImage`, `status`, `publishedAt`
- `meta` — JSONB with flexible fields (`readTime`, `role`, `description`, `eventMeta`, `youtubeId`)
- `sections` — Ordered blocks: `heading`, `paragraph`, `blockquote`, `callout`, `image`

```typescript
const items = await fetchCollection("memos");
const detail = await fetchCollectionItem("memos", "my-post-slug");
// detail = { ...itemFields, sections: [...] }
```

---

## API Response Shapes

### GET /content?page=home
```json
[{ "page": "home", "key": "hero_title", "value": "Welcome", "type": "text" }]
```

### GET /collections/{slug}
```json
{
  "collection": { "name": "memos", "slug": "memos", "label": "Architecture Memos" },
  "items": [{ "id": "uuid", "title": "Post", "slug": "post", "tag": "SYSTEMS", "meta": { "readTime": "8 MIN READ" }, "publishedAt": "2025-02-20T..." }]
}
```

### GET /collections/{slug}/{itemSlug}
```json
{
  "item": { "id": "uuid", "title": "Post", "slug": "post", ... },
  "sections": [
    { "type": "heading", "content": "Intro", "caption": null, "sortOrder": 0 },
    { "type": "paragraph", "content": "Body text...", "caption": null, "sortOrder": 1 }
  ]
}
```

**IMPORTANT:** The detail endpoint returns `{ item, sections }` — NOT a flat object. You must unpack: `{ ...data.item, sections: data.sections || [] }`.

---

## Patterns Used in This Codebase

### Fallback Pattern
```typescript
// Content fields
const title = content?.["home.hero_title"] || "Default Title";

// Collections
const items = cmsItems ?? fallbackItems;
```

### Collection Role Pattern (Verdicts)
Items use `meta.role` to control layout position:
```typescript
const featured = items.find((i) => i.meta?.role === "featured");
const side = items.find((i) => i.meta?.role === "side");
const bottom = items.filter((i) => i.meta?.role === "bottom");
```

### Date Formatting
```typescript
// ISO → YYYY.MM
new Date(item.publishedAt).toISOString().slice(0, 7).replace("-", ".")
// ISO → YYYY.MM.DD
new Date(item.publishedAt).toISOString().slice(0, 10).replace(/-/g, ".")
```

---

## Critical Rules

1. **Always trim env vars** — `(process.env.CMS_API_KEY || "").trim()` — Vercel env vars often have trailing newlines
2. **Always provide fallback defaults** — If CMS is down, the site should still render
3. **Use `cache: "no-store"`** in fetch calls — Prevents stale content from Next.js Data Cache
4. **Use `export const dynamic = "force-dynamic"`** on dynamic pages — Prevents static pre-rendering
5. **Do NOT use `generateStaticParams`** for CMS-driven pages — Pages won't update between builds
6. **S3 image domain** must be in `next.config.ts` remotePatterns: `oduscloud-cms.s3.ap-southeast-2.amazonaws.com`
7. **Only published items** appear in the API — Check item status if content seems missing

---

## Meta JSONB Conventions

| Key | Used For | Example |
|-----|----------|---------|
| `readTime` | Article read time | `"8 MIN READ"` |
| `role` | Layout positioning | `"featured"`, `"side"`, `"bottom"` |
| `description` | Short description | `"A panel on systems thinking..."` |
| `eventMeta` | Event/location info | `"Dubai · 2025"` |
| `youtubeId` | YouTube video ID | `"hGSXbTNFXcE"` |

---

## Section Types

| Type | Renders As | Notes |
|------|-----------|-------|
| `heading` | `<h2>` | Section headings within articles |
| `paragraph` | `<p>` | Body text |
| `blockquote` | `<blockquote>` | Quoted text, styled italic |
| `callout` | Bordered box | Highlighted info |
| `image` | `<img>` + caption | `content` = URL, `caption` = optional text |

---

## File Structure

```
src/
├── lib/cms.ts              # CMS client library (all fetch functions)
├── app/
│   ├── page.tsx             # Homepage (fetches content + collections)
│   └── memo/[slug]/page.tsx # Memo detail page (force-dynamic)
├── components/
│   ├── Hero.tsx             # Uses cms prop for content fields
│   ├── Stats.tsx            # Uses cms prop for stat values
│   ├── Verdicts.tsx         # Uses items prop from verdicts collection
│   ├── TheMemos.tsx         # Uses cmsMemos prop from memos collection
│   └── MemoDetail.tsx       # Renders full memo with sections
└── data/memos.ts            # Local fallback data
```

---

## Adding New CMS-Managed Content

1. **Content fields:** Add the field in the CMS admin UI (Content tab → Add Field), then use `content?.["page.key"] || "fallback"` in your component
2. **New collection:** Create in CMS admin (Settings → Create Collection), then add `fetchCollection("slug")` to your page and a component to render items
3. **New collection detail page:** Create `app/[collection]/[slug]/page.tsx` with `force-dynamic`, use `fetchCollectionItem(collection, slug)`

---

## Vercel Deployment

- **Project:** `website` (team: `odus-x-bp`)
- **Deploy hook:** Configured in CMS settings — auto-deploys on content save
- **Manual deploy:** `npx vercel --prod --yes`
- **Link to project:** `npx vercel link --project website --scope odus-x-bp`
