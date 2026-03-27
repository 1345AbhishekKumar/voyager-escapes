"use client"

import { useState } from "react"
import { useScroll, useTransform } from "framer-motion"

import Header from "@/components/layout/header"
import MobileMenu from "@/components/layout/mobile-menu"
import Footer from "@/components/layout/footer"
import HeroSection from "@/components/sections/hero-section"
import FeaturesSection from "@/components/sections/features-section"
import DestinationsSection from "@/components/sections/destinations-section"
import TestimonialsSection from "@/components/sections/testimonials-section"
import VideoSection from "@/components/sections/video-section"
import HowItWorksSection from "@/components/sections/how-it-works-section"
import FaqSection from "@/components/sections/faq-section"
import CtaSection from "@/components/sections/cta-section"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const headerOpacity = useTransform(scrollYProgress, [0, 0.05], [0, 1])

  // Scroll to section functionality
  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      const offset = 80 // Header height + some padding
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Header/Navigation */}
      <Header headerOpacity={headerOpacity} scrollToSection={scrollToSection} setMobileMenuOpen={setMobileMenuOpen} />

      {/* Mobile menu */}
      {mobileMenuOpen && <MobileMenu setMobileMenuOpen={setMobileMenuOpen} scrollToSection={scrollToSection} />}

      <main className="flex-1 pt-20">
        <HeroSection />
        <FeaturesSection />
        <DestinationsSection />
        <TestimonialsSection />
        <VideoSection />
        <HowItWorksSection />
        <FaqSection />
        <CtaSection />
      </main>

      <Footer />
    </div>
  )
}
