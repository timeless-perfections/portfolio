import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Hikmet Karsen — Flutter Developer & AI Builder";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#080808",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Glow */}
        <div
          style={{
            position: "absolute",
            top: -100,
            right: -100,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(204,31,31,0.15) 0%, transparent 70%)",
          }}
        />

        {/* HK badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#CC1F1F",
            }}
          />
          <span
            style={{
              fontSize: 18,
              fontWeight: 800,
              color: "rgba(224,224,224,0.4)",
              letterSpacing: 2,
            }}
          >
            HK
          </span>
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            color: "#E0E0E0",
            letterSpacing: "-3px",
            lineHeight: 1.0,
            marginBottom: 20,
          }}
        >
          Hikmet Karsen
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 26,
            fontWeight: 300,
            color: "rgba(224,224,224,0.45)",
            letterSpacing: "-0.5px",
            marginBottom: 48,
          }}
        >
          Flutter Developer · AI Builder · Founder of Elpis Software
        </div>

        {/* Divider */}
        <div
          style={{
            width: 60,
            height: 2,
            background: "#CC1F1F",
            marginBottom: 32,
          }}
        />

        {/* URL */}
        <div
          style={{
            fontSize: 18,
            color: "rgba(224,224,224,0.25)",
            letterSpacing: 1,
          }}
        >
          hikmetkarsen.com
        </div>
      </div>
    ),
    { ...size }
  );
}
