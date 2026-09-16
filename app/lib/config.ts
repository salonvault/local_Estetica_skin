import type { Metadata } from "next";

export const BASE_URL = "https://estetica-skin.vercel.app";

const title = "Estetica Skin & Laser Lahore | Dermatologist & Aesthetic Clinic";
const description =
  "Visit Estetica Skin & Laser in Gulshan-e-Ravi, Lahore for dermatologist-led skin, hair, laser, facial, and aesthetic treatments. Call or WhatsApp +92 310 0111156.";
const ogImage = "/assets/og-image.png";

export const seoMetadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: title,
    template: "%s | Estetica Skin & Laser Lahore",
  },
  description,
  applicationName: "Estetica Skin & Laser Lahore",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  category: "Dermatology Clinic",
  keywords: [
    "Estetica Skin and Laser Lahore",
    "Estetica Lahore",
    "dermatologist Lahore",
    "skin clinic Lahore",
    "acne treatment Lahore",
    "pigmentation treatment Lahore",
    "laser hair removal Lahore",
    "hair PRP Lahore",
    "aesthetic clinic Lahore",
  ],
  authors: [{ name: "Estetica Skin & Laser Lahore" }],
  creator: "Estetica Skin & Laser Lahore",
  publisher: "Estetica Skin & Laser Lahore",
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
    siteName: "Estetica Skin & Laser Lahore",
    title,
    description,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Estetica Skin and Laser Lahore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage],
  },
};
