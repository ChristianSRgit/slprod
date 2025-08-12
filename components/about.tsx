"use client"

import { useEffect, useState } from "react"
import { Award, Users, Calendar, Sparkles } from "lucide-react"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("nosotros")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const stats = [
    { icon: Calendar, number: "200+", label: "Eventos Realizados"} ,
    { icon: Users, number: "50K+", label: "Invitados Felices" },
    { icon: Award, number: "8", label: "Años de Experiencia" },
    { icon: Sparkles, number: "100%", label: "Satisfacción" },
  ]

  return (
    <section id="nosotros" className="py-20 bg-grey-900">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">¿Quiénes Somos?</h2>
            <div className="w-24 h-1 gradient-accent mx-auto mb-6"></div>
            <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
              Somos un equipo apasionado de creativos y profesionales dedicados a transformar tus ideas en experiencias
              inolvidables. Cada evento es una oportunidad única para crear momentos mágicos.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 gradient-red rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="text-white" size={24} />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Mission Statement */}
          <div className="bg-black rounded-2xl p-8 md:p-12">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-6">Nuestra Misión</h3>
              <p className="text-lg text-white leading-relaxed mb-6">
                Crear experiencias extraordinarias que superen las expectativas de nuestros clientes. Nos especializamos
                en la producción integral de eventos corporativos, sociales y espectáculos, cuidando cada detalle desde
                la conceptualización hasta la ejecución.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {["Creatividad", "Profesionalismo", "Innovación", "Excelencia"].map((value) => (
                  <span key={value} className="px-4 py-2 gradient-red rounded-full text-black font-medium shadow-sm">
                    {value}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
