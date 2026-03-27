"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronRight, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

interface DestinationCardProps {
  image: string
  location: string
  title: string
  description: string
  reverse?: boolean
}

export default function DestinationCard({
  image,
  location,
  title,
  description,
  reverse = false,
}: DestinationCardProps) {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24 items-center`}>
      <motion.div
        initial={{ opacity: 0, x: reverse ? 20 : -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className={`${reverse ? "order-1" : "lg:order-2"} rounded-2xl overflow-hidden h-[500px] relative shadow-xl`}
      >
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: reverse ? -20 : 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className={`${reverse ? "order-2" : "lg:order-1"}`}
      >
        <div className="inline-flex items-center gap-2 bg-sky-100 px-3 py-1 rounded-full text-sky-700 text-sm font-medium mb-4">
          <MapPin className="h-4 w-4" />
          <span>{location}</span>
        </div>
        <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">{title}</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button className="bg-sky-600 hover:bg-sky-500 shadow-md shadow-sky-600/20 transition-all duration-300">
            Plan This Trip <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </motion.div>
    </div>
  )
}
