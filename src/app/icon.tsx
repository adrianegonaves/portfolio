import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/** Favicon da aba — &lt;adriane/&gt; (syntax highlight) */
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
          background: "#0b0c10",
          borderRadius: 7,
          fontFamily: "monospace",
          fontSize: 6,
          fontWeight: 700,
          letterSpacing: -0.3,
          whiteSpace: "nowrap",
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
