import { ImageResponse } from "next/og";

export const alt = "Estetica Skin & Laser Gujranwala — dermatologist-led skin, laser, hair, and aesthetic care";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "68px 76px",
          color: "white",
          background: "radial-gradient(circle at 78% 18%, #17656b 0%, #0e4a4f 25%, #082a2e 64%, #041416 100%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", fontSize: 48, fontWeight: 700, letterSpacing: 2 }}>Estetica</div>
          <div style={{ display: "flex", border: "1px solid rgba(255,255,255,.35)", borderRadius: 999, padding: "12px 22px", fontSize: 18 }}>
            Satellite Town · Gujranwala
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", maxWidth: 930 }}>
          <div style={{ display: "flex", color: "#b8d5c8", fontSize: 20, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase" }}>
            Dermatologist-led care
          </div>
          <div style={{ display: "flex", marginTop: 18, fontSize: 72, lineHeight: 1.02, fontWeight: 700 }}>
            Skin, laser & aesthetic care made personal.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 22, color: "rgba(255,255,255,.82)" }}>
          <div style={{ display: "flex" }}>22, Block A, Satellite Town</div>
          <div style={{ display: "flex", fontWeight: 700 }}>0311 1133023</div>
        </div>
      </div>
    ),
    size,
  );
}
