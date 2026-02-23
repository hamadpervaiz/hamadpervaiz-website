import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Hamad Pervaiz — Architect · Investor · Strategist";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
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
        {/* Top: role line */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div style={{ width: 40, height: 1, background: "#6AABBF" }} />
          <span
            style={{
              fontSize: 14,
              letterSpacing: "3px",
              color: "#6AABBF",
            }}
          >
            ARCHITECT · INVESTOR · STRATEGIST
          </span>
        </div>

        {/* Middle: name + tagline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "28px",
            flex: 1,
            justifyContent: "center",
          }}
        >
          <h1
            style={{
              fontSize: 64,
              fontWeight: 400,
              color: "#FFFFFF",
              lineHeight: 1.05,
              letterSpacing: "-2px",
              margin: 0,
            }}
          >
            Hamad Pervaiz
          </h1>
          <p
            style={{
              fontSize: 24,
              fontWeight: 300,
              color: "#A1A1AA",
              lineHeight: 1.5,
              margin: 0,
              maxWidth: "700px",
            }}
          >
            Hype is a temporary tactic. Architecture is a permanent advantage.
          </p>
        </div>

        {/* Bottom: ventures + locations */}
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
              gap: "24px",
            }}
          >
            <span
              style={{
                fontSize: 12,
                letterSpacing: "2px",
                color: "#555",
              }}
            >
              BEARPLEX
            </span>
            <span style={{ fontSize: 12, color: "#333" }}>·</span>
            <span
              style={{
                fontSize: 12,
                letterSpacing: "2px",
                color: "#555",
              }}
            >
              TURING VC
            </span>
            <span style={{ fontSize: 12, color: "#333" }}>·</span>
            <span
              style={{
                fontSize: 12,
                letterSpacing: "2px",
                color: "#555",
              }}
            >
              PEOPLE+
            </span>
            <span style={{ fontSize: 12, color: "#333" }}>·</span>
            <span
              style={{
                fontSize: 12,
                letterSpacing: "2px",
                color: "#555",
              }}
            >
              ODUS GROUP
            </span>
          </div>
          <span
            style={{
              fontSize: 12,
              letterSpacing: "3px",
              color: "#333",
            }}
          >
            LAHORE · SAN FRANCISCO · DUBAI
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
