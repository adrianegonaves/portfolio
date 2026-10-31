import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Ícone Apple / atalhos — texto completo &lt;adriane/&gt; */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0b0c10",
          borderRadius: 40,
          border: "2px solid rgba(157, 149, 255, 0.25)",
          fontFamily: "monospace",
          fontSize: 26,
          fontWeight: 700,
        }}
      >
        <span style={{ color: "#9d95ff" }}>&lt;</span>
        <span style={{ color: "#0ae448" }}>adriane</span>
        <span style={{ color: "#9d95ff" }}>{"/>"}</span>
      </div>
    ),
    { ...size }
  );
}
