"use client"

import type React from "react"

import { useRef } from "react"
import { useInView } from "framer-motion"

interface ScrollAnimatedSectionProps {
  children: React.ReactNode
  id?: string
  className?: string
}

export default function ScrollAnimatedSection({ children, id, className }: ScrollAnimatedSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section
      id={id}
      ref={ref}
      className={className}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
      }}
    >
      {children}
    </section>
  )
}
