"use client"

import { motion } from "framer-motion"

interface ProcessCardProps {
  number: string
  title: string
  description: string
  delay?: number
}

export default function ProcessCard({ number, title, description, delay = 0 }: ProcessCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="text-center p-8 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 relative z-10"
    >
      <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-sky-100 mb-6">
        <span className="text-2xl font-bold text-sky-600">{number}</span>
      </div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
  )
}
