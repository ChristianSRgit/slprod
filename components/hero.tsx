"use client"

import { useState, useEffect } from "react"
import { Play, ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full animate-float"></div>
        <div
          className="absolute top-40 right-20 w-24 h-24 bg-red-500/10 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-32 left-1/4 w-16 h-16 bg-white/5 rounded-full animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          {/* Logo - Updated to match SL Producciones coral brand colors */}
          <div className="mb-8">
            <div className="w-80 h-80 sm:w-80 sm:h-80 mx-auto rounded-2xl flex items-center justify-center mb-4 shadow-2xl">
              <img src="/placeholder-logo.png" alt="logo" />
            </div>
            <h1 className="text-white text-4xl sm:text-6xl md:text-8xl font-serif font-bold tracking-wider">
              PRODUCCIONES
            </h1>
          </div>

          {/* Tagline */}
          <p className="text-white/90 text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed px-4">
            Creamos experiencias extraordinarias que conectan, inspiran y perduran en la memoria
          </p>

          {/* CTA Buttons - Updated to coral gradient matching brand */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 px-4">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-red-500 via-red-400 to-pink-500 text-white border-0 hover:opacity-90 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg"
            >
              <Play className="mr-2" size={18} />
              Ver Nuestro Trabajo
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto text-white border-red-300 hover:bg-red-300 hover:text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg bg-transparent"
            >
              Cotizar Evento
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ArrowDown className="text-white/70 mx-auto" size={28} />
          </div>
        </div>
      </div>
    </section>
  )
}
