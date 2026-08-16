
import Hero from "@/components/Home/Hero"
import ExperienceSection from "@/components/Home/ExperienceSection"
import ExpertiseStripSection from "@/components/Home/ExpertiseStripSection"
import StepsSection from "@/components/Home/StepsSection"
import ProcessFaqSection from "@/components/Home/ProcessFaqSection"
import TestimonialsSection from "@/components/Home/TestimonialsSection"
import GallerySection from "@/components/Home/GallerySection"
import ServicesSection from "@/components/Home/ServicesSection"
import CarePathwaysSection from "@/components/Home/CarePathwaysSection"
import Header from "@/components/Layout/Header"
import Footer from "@/components/Layout/Footer"
import WhatsAppFloat from "@/components/Layout/WhatsAppFloat"

const clinicSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: "Estetica Skin & Laser Gujranwala",
  description: "Dermatologist-led skin, hair, laser, facial, and aesthetic treatments in Satellite Town, Gujranwala.",
  image: "/assets/og-image.png",
  telephone: "+92 311 1133023",
  medicalSpecialty: "Dermatology",
  address: {
    "@type": "PostalAddress",
    streetAddress: "22, Block A, Satellite Town",
    addressLocality: "Gujranwala",
    addressRegion: "Punjab",
    addressCountry: "PK",
  },
  sameAs: [
    "https://www.instagram.com/estetica.pakistan_gujranwala/?hl=en",
    "https://www.google.com/maps/place/Estetica+Skin+%26+Laser+Gujranwala/data=!4m2!3m1!1s0x0:0xc61cb9dd2020f450",
  ],
  availableService: [
    "Dermatology consultation",
    "Acne and acne scar treatment",
    "Pigmentation and melasma care",
    "Laser hair removal",
    "HydraFacial",
    "Hair loss and PRP treatment",
    "Microneedling",
    "Mole and skin tag removal",
  ],
};


function page() {
  return (
    <div className="atelier-shell min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }}
      />
      <Header />
      <main>
        <Hero />
        <ExpertiseStripSection />
        <CarePathwaysSection />
        <ExperienceSection />
        <ServicesSection />
        <GallerySection />
        <StepsSection />
        <ProcessFaqSection />
        <TestimonialsSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}

export default page
