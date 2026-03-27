"use client"

import ScrollAnimatedSection from "@/components/common/scroll-animated-section"
import SectionHeading from "@/components/ui/section-heading"
import ProcessCard from "@/components/ui/process-card"

export default function HowItWorksSection() {
  return (
    <ScrollAnimatedSection id="how-it-works" className="py-24">
      <div className="container mx-auto px-4">
        <SectionHeading title="How It Works" subtitle="Our simple three-step process to create your perfect journey" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-sky-100 -translate-y-1/2 hidden md:block" />

          <ProcessCard
            number="1"
            title="Discover"
            description="We learn about your travel dreams, preferences, and must-see destinations through a personalized consultation."
            delay={0.1}
          />

          <ProcessCard
            number="2"
            title="Design"
            description="Our travel experts craft a tailored itinerary with handpicked accommodations, activities, and insider experiences."
            delay={0.3}
          />

          <ProcessCard
            number="3"
            title="Depart"
            description="You just pack and go! We handle all the details while you enjoy a seamless, stress-free travel experience."
            delay={0.5}
          />
        </div>
      </div>
    </ScrollAnimatedSection>
  )
}
