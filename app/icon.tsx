import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "8px",
          background: "linear-gradient(135deg, #4F46E5 0%, #0EA5E9 100%)",
          color: "#FFFFFF",
          fontSize: "16px",
          fontWeight: 800,
          fontFamily: "sans-serif",
        }}
      >
        SK
      </div>
    ),
    { ...size }
  );
}
