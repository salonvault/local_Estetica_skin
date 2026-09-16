import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Estetica Skin & Laser Lahore",
    short_name: "Estetica",
    description: "Dermatologist-led skin, hair, laser, facial, and aesthetic care in Gulshan-e-Ravi, Lahore.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#F4F7F8",
    theme_color: "#003E6D",
  };
}
