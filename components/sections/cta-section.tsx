"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function CtaSection() {
  return (
    <section id="contact" className="py-24 bg-sky-600 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center opacity-10" />
      <div className="container relative mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Let's Make Your Dream Trip Happen
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-white/90">
            Our travel experts are ready to craft your perfect journey. Take the first step toward your next
            unforgettable adventure.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-sky-600 transition-all duration-300"
            >
              Get a Free Travel Consultation
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
