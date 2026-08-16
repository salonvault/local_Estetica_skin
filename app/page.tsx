
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
  name: "Dermotique Skin & Laser Clinic",
  description: "Dermatologist-led skin, hair, laser, and aesthetic treatments in Gujranwala.",
  image: "/assets/logo.png",
  telephone: "+92 321 4089006",
  medicalSpecialty: "Dermatology",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Hospital Road, Highway Officers Colony, Civil Lines",
    addressLocality: "Gujranwala",
    addressRegion: "Punjab",
    addressCountry: "PK",
  },
  sameAs: ["https://www.instagram.com/dermotique_skin_laser_centre/?hl=en"],
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
