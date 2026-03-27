"use client"

import { Globe, Hotel, Phone, Users } from "lucide-react"
import ScrollAnimatedSection from "@/components/common/scroll-animated-section"
import SectionHeading from "@/components/ui/section-heading"
import FeatureCard from "@/components/ui/feature-card"
import StatCard from "@/components/ui/stat-card"

export default function FeaturesSection() {
  return (
    <ScrollAnimatedSection id="why-voyager" className="py-24 bg-gradient-to-b from-white to-sky-50/50">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Why Voyager?"
          subtitle="We create unforgettable experiences with attention to every detail"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <FeatureCard
            icon={<Globe className="h-6 w-6 text-sky-600" />}
            title="Handpicked Itineraries"
            description="Curated by travel experts who know each destination intimately."
            delay={0.1}
          />
          <FeatureCard
            icon={<Hotel className="h-6 w-6 text-sky-600" />}
            title="5-Star Stays"
            description="Luxurious accommodations in hidden gems around the world."
            delay={0.2}
          />
          <FeatureCard
            icon={<Phone className="h-6 w-6 text-sky-600" />}
            title="24/7 Concierge"
            description="Personalized support throughout your entire journey."
            delay={0.3}
          />
          <FeatureCard
            icon={<Users className="h-6 w-6 text-sky-600" />}
            title="Travel Like a Local"
            description="Authentic experiences beyond typical tourist attractions."
            delay={0.4}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <StatCard number="1,200+" label="Trips Planned" delay={0.1} />
          <StatCard number="98%" label="5-Star Reviews" delay={0.2} />
          <StatCard number="60+" label="Countries Covered" delay={0.3} />
        </div>
      </div>
    </ScrollAnimatedSection>
  )
}
