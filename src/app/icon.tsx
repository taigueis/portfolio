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
          backgroundColor: "#09090b",
          border: "1px solid #27272a",
          borderRadius: 7,
        }}
      >
        <span
          style={{
            fontFamily: "Arial, sans-serif",
            fontSize: 16,
            fontWeight: 700,
            color: "#f4f4f5",
            letterSpacing: -0.5,
          }}
        >
          TC
        </span>
      </div>
    ),
    { ...size }
  );
}
