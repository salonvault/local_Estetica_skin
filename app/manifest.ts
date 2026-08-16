import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Dermotique Skin & Laser Clinic",
    short_name: "Dermotique",
    description: "Dermatologist-led skin, hair, laser, and aesthetic care in Gujranwala.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#F4F7F8",
    theme_color: "#009EC8",
    icons: [{ src: "/assets/logo-2.png", sizes: "1536x1024", type: "image/png" }],
  };
}
