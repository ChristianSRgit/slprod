"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Inicio", href: "#inicio" },
    { name: "Nosotros", href: "#nosotros" },
    { name: "Servicios", href: "#servicios" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contacto", href: "#contacto" },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/95 backdrop-blur-md shadow-lg border-b border-red-300/20" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Updated to coral gradient matching brand identity */}
          <div className="flex items-center space-x-2">
            <div className="w-20 h-20 flex items-center justify-center">
              <span className="text-white font-bold text-xl font-serif">
                <img src="/logopeque.png" alt="" />
              </span>
            </div>
            <span className="text-white font-bold text-xl">Producciones</span>
          </div>

          {/* Desktop Navigation - Updated hover colors to coral */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white hover:text-red-300 transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
            <Button className="bg-gradient-to-r gradient-red text-white border-0 hover:opacity-80">
              Cotizar Evento
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation - Updated mobile menu styling */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-black/95 backdrop-blur-md rounded-lg p-4 border border-red-300/20">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-white hover:text-red-400 py-3 transition-colors duration-200 border-b border-red-300/20 last:border-b-0"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <Button className="w-full mt-4 bg-gradient-to-r gradient-red to-white-300 text-white border-0">
              Cotizar Evento
            </Button>
          </div>
        )}
      </nav>
    </header>
  )
}
