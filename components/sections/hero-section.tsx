"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=2568&auto=format&fit=crop"
          alt="Aerial view of a beautiful coastline"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      </div>
      <div className="container relative z-10 mx-auto px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-6">
            Your Journey,{" "}
            <span className="bg-gradient-to-r from-sky-300 to-teal-200 bg-clip-text text-transparent">
              Tailored to Perfection
            </span>
          </h1>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-white/90"
        >
          Experience the world like never before — bespoke travel planning with a personal touch.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            size="lg"
            className="bg-sky-600 hover:bg-sky-500 text-white border-0 shadow-lg shadow-sky-700/30 transition-all duration-300 hover:shadow-xl hover:shadow-sky-700/40 hover:-translate-y-1"
          >
            Plan My Trip
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-white border-white hover:bg-white/20 transition-all duration-300 hover:-translate-y-1"
          >
            Explore Destinations
          </Button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-4 rounded-full"
        >
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-current text-yellow-400" />
            ))}
          </div>
          <p className="text-sm font-medium">
            "The trip of a lifetime, perfectly planned" — <span className="font-semibold">Sarah T.</span>
          </p>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}
