import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Estetica Skin & Laser Gujranwala",
    short_name: "Estetica",
    description: "Dermatologist-led skin, hair, laser, facial, and aesthetic care in Satellite Town, Gujranwala.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#F4F7F8",
    theme_color: "#082A2E",
  };
}
