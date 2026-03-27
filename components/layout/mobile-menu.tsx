"use client"

import { ChevronRight, Globe, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MobileMenuProps {
  setMobileMenuOpen: (open: boolean) => void
  scrollToSection: (id: string) => void
}

export default function MobileMenu({ setMobileMenuOpen, scrollToSection }: MobileMenuProps) {
  return (
    <div className="fixed inset-0 z-50 bg-white md:hidden">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center gap-2">
          <Globe className="h-6 w-6 text-sky-600" />
          <span className="font-serif text-xl font-semibold tracking-tight">Voyager Escapes</span>
        </div>
        <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
          <X className="h-6 w-6" />
          <span className="sr-only">Close menu</span>
        </Button>
      </div>
      <nav className="container flex flex-col gap-6 py-8">
        <button
          onClick={() => scrollToSection("destinations")}
          className="flex w-full justify-between border-b border-gray-100 py-4 text-lg font-medium"
        >
          Destinations
          <ChevronRight className="h-5 w-5 text-gray-400" />
        </button>
        <button
          onClick={() => scrollToSection("why-voyager")}
          className="flex w-full justify-between border-b border-gray-100 py-4 text-lg font-medium"
        >
          Why Voyager
          <ChevronRight className="h-5 w-5 text-gray-400" />
        </button>
        <button
          onClick={() => scrollToSection("testimonials")}
          className="flex w-full justify-between border-b border-gray-100 py-4 text-lg font-medium"
        >
          Testimonials
          <ChevronRight className="h-5 w-5 text-gray-400" />
        </button>
        <button
          onClick={() => scrollToSection("how-it-works")}
          className="flex w-full justify-between border-b border-gray-100 py-4 text-lg font-medium"
        >
          How It Works
          <ChevronRight className="h-5 w-5 text-gray-400" />
        </button>
        <button
          onClick={() => scrollToSection("contact")}
          className="flex w-full justify-between border-b border-gray-100 py-4 text-lg font-medium"
        >
          Contact
          <ChevronRight className="h-5 w-5 text-gray-400" />
        </button>
        <div className="mt-8">
          <Button className="w-full bg-sky-600 hover:bg-sky-700">Plan My Trip</Button>
        </div>
      </nav>
    </div>
  )
}
