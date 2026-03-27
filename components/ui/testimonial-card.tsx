"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Star } from "lucide-react"

interface TestimonialCardProps {
  rating: number
  text: string
  name: string
  location: string
  image: string
  delay?: number
}

export default function TestimonialCard({ rating, text, name, location, image, delay = 0 }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
    >
      <div className="flex items-center gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="h-5 w-5 fill-current text-yellow-400" />
        ))}
      </div>
      <p className="text-gray-600 mb-6 leading-relaxed">{text}</p>
      <div className="flex items-center gap-4">
        <div className="h-12 w-12 rounded-full overflow-hidden relative">
          <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
        </div>
        <div>
          <p className="font-medium">{name}</p>
          <p className="text-sm text-gray-500">{location}</p>
        </div>
      </div>
    </motion.div>
  )
}
