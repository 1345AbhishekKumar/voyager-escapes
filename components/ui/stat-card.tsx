"use client"

import { motion } from "framer-motion"

interface StatCardProps {
  number: string
  label: string
  delay?: number
}

export default function StatCard({ number, label, delay = 0 }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="p-6"
    >
      <p className="text-4xl font-bold text-sky-600 mb-2">{number}</p>
      <p className="text-gray-600">{label}</p>
    </motion.div>
  )
}
