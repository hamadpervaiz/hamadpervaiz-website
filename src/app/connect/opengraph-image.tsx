import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "The Gate — Hamad Pervaiz";
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
        {/* Top: label */}
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
            CONTACT
          </span>
        </div>

        {/* Middle: title + description */}
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
            The Gate.
          </h1>
          <p
            style={{
              fontSize: 22,
              fontWeight: 300,
              color: "#A1A1AA",
              lineHeight: 1.6,
              margin: 0,
              maxWidth: "700px",
            }}
          >
            State your objective clearly. Only asymmetric opportunities,
            high-leverage problems, and contrarian founders.
          </p>
        </div>

        {/* Bottom: author */}
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
            <span
              style={{
                fontSize: 14,
                fontWeight: 600,
                letterSpacing: "2px",
                color: "#FFFFFF",
              }}
            >
              HAMAD PERVAIZ
            </span>
          </div>
          <span
            style={{
              fontSize: 12,
              letterSpacing: "3px",
              color: "#333",
            }}
          >
            HAMADPERVAIZ.COM
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
