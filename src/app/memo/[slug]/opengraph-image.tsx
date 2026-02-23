import { ImageResponse } from "next/og";
import { getMemoBySlug } from "@/data/memos";

export const runtime = "edge";
export const alt = "Memo";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const memo = getMemoBySlug(slug);

  if (!memo) {
    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#000",
            color: "#fff",
            fontSize: 32,
            fontFamily: "sans-serif",
          }}
        >
          Memo Not Found
        </div>
      ),
      { ...size }
    );
  }

  const firstParagraph = memo.sections.find((s) => s.type === "paragraph");
  const excerpt = firstParagraph
    ? firstParagraph.content.slice(0, 120) +
      (firstParagraph.content.length > 120 ? "..." : "")
    : "";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#050505",
          padding: "60px 70px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top: tag + read time */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div
            style={{
              width: 40,
              height: 1,
              background: "#6AABBF",
            }}
          />
          <span
            style={{
              fontSize: 14,
              letterSpacing: "3px",
              color: "#6AABBF",
              textTransform: "uppercase" as const,
            }}
          >
            {memo.tag} · {memo.time}
          </span>
        </div>

        {/* Middle: title + excerpt */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            flex: 1,
            justifyContent: "center",
          }}
        >
          <h1
            style={{
              fontSize: 52,
              fontWeight: 400,
              color: "#FFFFFF",
              lineHeight: 1.1,
              letterSpacing: "-1.5px",
              margin: 0,
            }}
          >
            {memo.title}
          </h1>
          {excerpt && (
            <p
              style={{
                fontSize: 18,
                fontWeight: 300,
                color: "#A1A1AA",
                lineHeight: 1.6,
                margin: 0,
                maxWidth: "800px",
              }}
            >
              {excerpt}
            </p>
          )}
        </div>

        {/* Bottom: author + date + branding */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            {/* Author square */}
            <div
              style={{
                width: 40,
                height: 40,
                border: "1.5px solid #FFFFFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 18,
                fontWeight: 500,
                color: "#FFFFFF",
              }}
            >
              H
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "4px",
              }}
            >
              <span
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  letterSpacing: "2px",
                  color: "#FFFFFF",
                  textTransform: "uppercase" as const,
                }}
              >
                HAMAD PERVAIZ
              </span>
              <span
                style={{
                  fontSize: 12,
                  letterSpacing: "2px",
                  color: "#555",
                }}
              >
                {memo.fullDate}
              </span>
            </div>
          </div>

          <span
            style={{
              fontSize: 12,
              letterSpacing: "3px",
              color: "#333",
              textTransform: "uppercase" as const,
            }}
          >
            THE ARCHITECTURE MEMOS
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
