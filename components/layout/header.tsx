"use client"

import { motion } from "framer-motion"
import { Globe, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeaderProps {
  headerOpacity: any
  scrollToSection: (id: string) => void
  setMobileMenuOpen: (open: boolean) => void
}

export default function Header({ headerOpacity, scrollToSection, setMobileMenuOpen }: HeaderProps) {
  return (
    <motion.header
      // style={{ opacity: headerOpacity ?? 1 }}
      className="fixed top-0 z-50 w-full border-b border-white/10 backdrop-blur-md bg-white/50"
    >
      <div className="container flex h-20 items-center justify-between text-black">
        <div className="flex items-center gap-2">
          <Globe className="h-6 w-6 text-sky-600" />
          <span className="font-serif text-xl font-semibold tracking-tight">Voyager Escapes</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("destinations")}
            className="text-sm font-medium hover:text-sky-600 transition-colors"
          >
            Destinations
          </button>
          <button
            onClick={() => scrollToSection("why-voyager")}
            className="text-sm font-medium hover:text-sky-600 transition-colors"
          >
            Why Voyager
          </button>
          <button
            onClick={() => scrollToSection("testimonials")}
            className="text-sm font-medium hover:text-sky-600 transition-colors"
          >
            Testimonials
          </button>
          <button
            onClick={() => scrollToSection("how-it-works")}
            className="text-sm font-medium hover:text-sky-600 transition-colors"
          >
            How It Works
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-sm font-medium hover:text-sky-600 transition-colors"
          >
            Contact
          </button>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hidden sm:flex hover:bg-sky-50 hover:text-black text-sky-700 ">
            Log In
          </Button>
          <Button className="bg-sky-600 hover:bg-sky-700 shadow-md shadow-sky-600/20">Plan My Trip</Button>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(true)}>
            <Menu className="h-6 w-6" />
            <span className="sr-only">Open menu</span>
          </Button>
        </div>
      </div>
    </motion.header>
  )
}
