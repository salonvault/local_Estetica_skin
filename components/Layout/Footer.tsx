import Image from "next/image";
import { ArrowUpRight, MapPin, MessageCircle, Phone } from "lucide-react";
import footerBackground from "../../public/assets/bg-zink.png";
import { FaInstagram } from "react-icons/fa6";

const links = [
  { label: "Home", href: "#hero" },
  { label: "Results", href: "#services" },
  { label: "Clinic", href: "#studio" },
  { label: "Services", href: "#treatments" },
  { label: "Reviews", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

const services = ["Dermatology", "Acne & Pigmentation", "Laser Hair Removal", "Facials & Peels", "Hair & PRP", "Aesthetic Treatments"];

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/estetica.pakistan_gujranwala/?hl=en", icon: FaInstagram },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--warm-cream)] px-4 py-6 text-white md:px-7">
      <div className="relative mx-auto max-w-[1320px] overflow-hidden rounded-[8px] border border-[#082A2E]/30 bg-zinc-950 shadow-[var(--shadow-soft)]">
        <Image
          src={footerBackground}
          alt=""
          fill
          sizes="(max-width: 1320px) 100vw, 1320px"
          className="object-cover"
          placeholder="blur"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,20,22,0.9),rgba(8,42,46,0.58)),linear-gradient(180deg,rgba(4,20,22,0.22),rgba(4,20,22,0.9))]" />

        <div className="relative z-10 grid gap-10 px-5 py-8 md:px-8 lg:grid-cols-[1.45fr_0.8fr_0.8fr_1fr] lg:py-10">
          <div>
            <a href="#hero" className="brand-logo inline-block text-white" aria-label="Estetica Skin and Laser Gujranwala home">
              Estetica
            </a>
            <p className="mt-5 max-w-[380px] text-[13px] leading-[1.8] text-white/72">
              Dermatologist-led skin, hair, laser, facial, and aesthetic care in Satellite Town, Gujranwala.
            </p>
            <div className="mt-6 flex items-center gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="grid h-9 w-9 place-items-center rounded-full border border-white/18 bg-white/10 text-white/78 transition hover:border-[#B8D5C8]/60 hover:bg-[#082A2E] hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-[11px] font-extrabold uppercase tracking-[0.08em] text-[#B8D5C8]">Explore</h3>
            <nav className="mt-5 grid gap-3 text-[13px] text-white/72">
              {links.map((link) => (
                <a key={link.label} href={link.href} className="transition-colors hover:text-[#B8D5C8]">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-[11px] font-extrabold uppercase tracking-[0.08em] text-[#B8D5C8]">Services</h3>
            <div className="mt-5 grid gap-3 text-[13px] text-white/72">
              {services.map((service) => (
                <span key={service}>{service}</span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[11px] font-extrabold uppercase tracking-[0.08em] text-[#B8D5C8]">Book</h3>
            <p className="mt-5 max-w-[280px] text-[13px] leading-[1.75] text-white/72">
              Have a skin, hair, laser, or aesthetic concern? Start with a focused consultation at Estetica.
            </p>
            <a
              href="https://wa.me/923111133023"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex min-h-10 items-center justify-center gap-2 rounded-[7px] bg-[var(--color-primary-1)] px-5 text-[12px] font-bold text-white transition hover:bg-[#0E4A4F]"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp the clinic
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="relative z-10 flex flex-col gap-3 border-t border-white/14 bg-black/10 px-5 py-5 text-[12px] text-white/62 md:flex-row md:items-center md:justify-between md:px-8">
          <p>&copy; 2026 Estetica Skin &amp; Laser Gujranwala. All rights reserved.</p>
          <div className="flex flex-col gap-2 sm:flex-row sm:gap-5">
            <a href="tel:+923111133023" className="inline-flex items-center gap-2 hover:text-white"><Phone className="h-3.5 w-3.5" /> 0311 1133023</a>
            <a href="https://www.google.com/maps/place/Estetica+Skin+%26+Laser+Gujranwala/data=!4m2!3m1!1s0x0:0xc61cb9dd2020f450" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-white"><MapPin className="h-3.5 w-3.5" /> 22, Block A, Satellite Town, Gujranwala</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
