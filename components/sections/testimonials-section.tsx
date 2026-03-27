"use client"

import ScrollAnimatedSection from "@/components/common/scroll-animated-section"
import SectionHeading from "@/components/ui/section-heading"
import TestimonialCard from "@/components/ui/testimonial-card"

export default function TestimonialsSection() {
  return (
    <ScrollAnimatedSection id="testimonials" className="py-24 bg-gradient-to-b from-sky-50/50 to-white">
      <div className="container mx-auto px-4">
        <SectionHeading title="Traveler Stories" subtitle="Hear what our clients have to say about their journeys" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TestimonialCard
            rating={5}
            text="Our honeymoon to Bali was absolute perfection. Voyager Escapes handled every detail with such care,
              from the private villa with infinity pool to the surprise sunset dinner on the beach."
            name="Emma & James"
            location="Bali, Indonesia"
            image="https://images.unsplash.com/photo-1522869635100-187f6605241d?q=80&w=2940&auto=format&fit=crop"
            delay={0.1}
          />

          <TestimonialCard
            rating={5}
            text="As a solo traveler, I was looking for both adventure and safety. My journey through New Zealand was
              the perfect balance. The local guides were knowledgeable, and the itinerary was flexible enough to add
              spontaneous activities."
            name="Michael T."
            location="New Zealand"
            image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop"
            delay={0.2}
          />

          <TestimonialCard
            rating={5}
            text="Our family safari in Tanzania exceeded all expectations. The kids still talk about watching lions
              from our luxury tent and having breakfast with giraffes. The 24/7 concierge service was invaluable
              when we needed to adjust plans."
            name="The Rodriguez Family"
            location="Tanzania"
            image="https://images.unsplash.com/photo-1484712401471-05c7215830eb?q=80&w=2940&auto=format&fit=crop"
            delay={0.3}
          />
        </div>
      </div>
    </ScrollAnimatedSection>
  )
}
