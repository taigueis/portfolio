import { ImageResponse } from "next/og";

export const alt = "Tiago Costa — Software Engineer & Fullstack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          gap: 28,
          padding: "80px 96px",
          backgroundColor: "#09090b",
          backgroundImage:
            "radial-gradient(circle at 15% 15%, rgba(124,108,255,0.22), transparent 55%)",
          border: "1px solid rgba(255,255,255,0.12)",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "10px 20px",
            borderRadius: 999,
            border: "1px solid rgba(255,255,255,0.14)",
            color: "#a3a3ab",
            fontSize: 24,
          }}
        >
          <span style={{ display: "flex" }}>🟢</span>
          <span style={{ display: "flex" }}>Disponível para Novos Projetos</span>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 96,
            fontWeight: 600,
            color: "#f7f7f5",
            letterSpacing: -2,
          }}
        >
          Tiago Costa
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 34,
            color: "#a3a3ab",
          }}
        >
          Software Engineer / Fullstack Web &amp; Mobile Developer
        </div>
      </div>
    ),
    { ...size }
  );
}
