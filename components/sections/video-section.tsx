"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function VideoSection() {
  return (
    <section className="relative flex h-[80vh] items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=2940&auto=format&fit=crop"
          alt="Aerial view of a beautiful beach"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      </div>
      <div className="container relative z-10 mx-auto px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Immersive Travel Experiences</h2>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto italic mb-10">
            "It wasn't a trip—it was a transformation."
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-white/20 backdrop-blur-md cursor-pointer"
          >
            <div className="h-16 w-16 rounded-full bg-sky-600 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-8 w-8 text-white ml-1"
              >
                <path
                  fillRule="evenodd"
                  d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
