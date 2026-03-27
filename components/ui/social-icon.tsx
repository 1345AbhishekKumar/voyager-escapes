"use client"

import type React from "react"

import { motion } from "framer-motion"

interface SocialIconProps {
  children: React.ReactNode
}

export default function SocialIcon({ children }: SocialIconProps) {
  return (
    <motion.a
      href="#"
      whileHover={{ scale: 1.1, y: -3 }}
      className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-400 hover:bg-sky-600 hover:text-white transition-colors"
    >
      {children}
    </motion.a>
  )
}
