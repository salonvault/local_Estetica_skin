import type { Metadata } from "next";

export const BASE_URL = "https://dermotique.vercel.app";

const title = "Dermotique Skin & Laser Clinic | Dermatologist in Gujranwala";
const description =
  "Dermotique Skin & Laser Clinic provides dermatologist-led skin, hair, laser, and aesthetic treatments in Civil Lines, Gujranwala. Call or WhatsApp 0321 4089006.";
const ogImage = "/assets/og-image.png";

export const seoMetadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: title,
    template: "%s | Dermotique Skin & Laser Clinic",
  },
  description,
  applicationName: "Dermotique Skin & Laser Clinic",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  category: "Dermatology Clinic",
  keywords: [
    "Dermotique Skin and Laser Clinic Gujranwala",
    "dermatologist Gujranwala",
    "skin clinic Gujranwala",
    "acne treatment Gujranwala",
    "pigmentation treatment Gujranwala",
    "laser hair removal Gujranwala",
    "hair PRP Gujranwala",
    "aesthetic clinic Gujranwala",
  ],
  authors: [{ name: "Dermotique Skin & Laser Clinic" }],
  creator: "Dermotique Skin & Laser Clinic",
  publisher: "Dermotique Skin & Laser Clinic",
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
    siteName: "Dermotique Skin & Laser Clinic",
    title,
    description,
    images: [
      {
        url: ogImage,
        width: 1536,
        height: 1024,
        alt: "Dermotique Skin and Laser Clinic in Gujranwala",
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
