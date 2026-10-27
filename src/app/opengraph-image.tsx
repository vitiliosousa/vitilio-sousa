import { ImageResponse } from "next/og";

export const alt = "Vitilio Sousa, Full-stack developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 90px",
          color: "#f4f1ea",
          backgroundColor: "#141414",
          backgroundImage:
            "radial-gradient(circle at 12% 10%, rgba(150,150,40,0.35), rgba(20,20,20,0) 45%), radial-gradient(circle at 95% 90%, rgba(50,130,125,0.35), rgba(20,20,20,0) 45%)",
        }}
      >
        <div style={{ display: "flex", fontSize: 40, color: "#a6d85a" }}>{"</>"}</div>
        <div style={{ display: "flex", fontSize: 108, fontWeight: 700, letterSpacing: -4, marginTop: 24 }}>
          Vitilio Sousa
        </div>
        <div style={{ display: "flex", fontSize: 46, color: "#d6e87a", marginTop: 12 }}>
          Full-stack developer
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#a3a09a", marginTop: 40 }}>
          Web · Mobile · Backend
        </div>
      </div>
    ),
    size
  );
}
