import { ImageResponse } from "next/og";
import { CANDIDATE_INFO } from "@/data/portfolio";

export const runtime = "edge";
export const alt = `${CANDIDATE_INFO.name} — Full Stack & Backend Engineer`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          background: "linear-gradient(135deg, #070B14 0%, #0F172A 60%, #1E1B4B 100%)",
          color: "#F8FAFC",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            fontSize: "22px",
            color: "#34D399",
          }}
        >
          <span>●</span>
          <span>{CANDIDATE_INFO.statusBadge}</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div style={{ fontSize: "72px", fontWeight: 800, letterSpacing: "-0.03em" }}>
            {CANDIDATE_INFO.name}
          </div>
          <div style={{ fontSize: "34px", fontWeight: 600, color: "#93C5FD", lineHeight: 1.3 }}>
            {CANDIDATE_INFO.subHeadline}
          </div>
        </div>

        <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
          {CANDIDATE_INFO.coreStackList.map((tech) => (
            <div
              key={tech}
              style={{
                padding: "10px 18px",
                borderRadius: "10px",
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.16)",
                fontSize: "20px",
                color: "#E2E8F0",
              }}
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    ),
    size
  );
}
