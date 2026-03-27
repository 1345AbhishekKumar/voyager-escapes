"use client"

interface SectionHeadingProps {
  title: string
  subtitle?: string
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="text-center mb-16">
      <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{title}</h2>
      {subtitle && <p className="text-gray-600 max-w-2xl mx-auto text-lg">{subtitle}</p>}
    </div>
  )
}
