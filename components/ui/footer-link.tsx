"use client"

import type React from "react"

import { motion } from "framer-motion"

interface FooterLinkProps {
  href: string
  children: React.ReactNode
}

export default function FooterLink({ href, children }: FooterLinkProps) {
  return (
    <li>
      <motion.a
        href={href}
        className="text-gray-400 hover:text-white transition-colors inline-block"
        whileHover={{ x: 3 }}
      >
        {children}
      </motion.a>
    </li>
  )
}
