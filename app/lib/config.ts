import type { Metadata } from "next";

export const BASE_URL = "https://estetica-skin.vercel.app";

const title = "Estetica Skin & Laser Gujranwala | Dermatologist & Aesthetic Clinic";
const description =
  "Visit Estetica Skin & Laser in Satellite Town, Gujranwala for dermatologist-led skin, hair, laser, facial, and aesthetic treatments. Call or WhatsApp 0311 1133023.";

export const seoMetadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: title,
    template: "%s | Estetica Skin & Laser Gujranwala",
  },
  description,
  applicationName: "Estetica Skin & Laser Gujranwala",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  category: "Dermatology Clinic",
  keywords: [
    "Estetica Skin and Laser Gujranwala",
    "Estetica Gujranwala",
    "dermatologist Gujranwala",
    "skin clinic Gujranwala",
    "acne treatment Gujranwala",
    "pigmentation treatment Gujranwala",
    "laser hair removal Gujranwala",
    "hair PRP Gujranwala",
    "aesthetic clinic Gujranwala",
  ],
  authors: [{ name: "Estetica Skin & Laser Gujranwala" }],
  creator: "Estetica Skin & Laser Gujranwala",
  publisher: "Estetica Skin & Laser Gujranwala",
  alternates: {
    canonical: BASE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  ...(process.env.GOOGLE_SITE_VERIFICATION
    ? {
        verification: {
          google: process.env.GOOGLE_SITE_VERIFICATION,
        },
      }
    : {}),
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: BASE_URL,
    siteName: "Estetica Skin & Laser Gujranwala",
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};
