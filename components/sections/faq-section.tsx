"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import ScrollAnimatedSection from "@/components/common/scroll-animated-section"
import SectionHeading from "@/components/ui/section-heading"

export default function FaqSection() {
  return (
    <ScrollAnimatedSection className="py-24 bg-gradient-to-b from-sky-50/50 to-white">
      <div className="container mx-auto px-4">
        <SectionHeading title="Frequently Asked Questions" subtitle="Everything you need to know about our services" />

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-b border-sky-100">
                <AccordionTrigger className="text-left hover:text-sky-700 py-6">
                  Do you handle visas and travel insurance?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Yes, we provide comprehensive assistance with visa applications and recommend appropriate travel
                  insurance options based on your destination and activities. Our team stays updated on the latest entry
                  requirements for all countries.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-b border-sky-100">
                <AccordionTrigger className="text-left hover:text-sky-700 py-6">
                  Can I customize every part of the trip?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Our itineraries are fully customizable to match your preferences, interests, and travel style. From
                  accommodations and activities to dining experiences and transportation, every aspect can be tailored
                  to your desires.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-b border-sky-100">
                <AccordionTrigger className="text-left hover:text-sky-700 py-6">
                  What's included in your packages?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Our packages typically include accommodations, guided experiences, selected meals, private transfers,
                  and 24/7 concierge support. We offer different tiers of service, from premium to ultra-luxury, each
                  with transparent pricing and no hidden fees.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-b border-sky-100">
                <AccordionTrigger className="text-left hover:text-sky-700 py-6">
                  How far in advance should I book my trip?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  For optimal availability and planning, we recommend booking 3-6 months in advance for most
                  destinations. However, we also specialize in creating exceptional last-minute getaways when needed.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-b border-sky-100">
                <AccordionTrigger className="text-left hover:text-sky-700 py-6">
                  What if I need to cancel or reschedule?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  We understand plans can change. We offer flexible booking policies and will work with you to
                  reschedule when possible. Our cancellation terms vary by destination and service providers, and we'll
                  clearly outline these before you confirm your booking.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </div>
      </div>
    </ScrollAnimatedSection>
  )
}
