"use client"

import { useEffect, useState } from "react"
import { Wine,Music, Camera, Lightbulb, Users, PartyPopper } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Services() {
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

    const element = document.getElementById("servicios")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const services = [
    {
      icon: Wine,
      title: "Servicio de Barra",
      description:
        "Barra Movil, Bartenders,Bebidas, Decoración de Barra, Servicio de Cocteles y Bebidas Premium.",
      features: ["Producción de Barra", "Cocteles Personalizados", "Atención Profesional"],
    },
    {
      icon: PartyPopper,
      title: "Ambientaciones",
      description: "Bodas, quinceañeras, aniversarios y celebraciones familiares llenas de momentos especiales.",
      features: ["Diseño personalizado", "Coordinación total", "Atención al detalle"],
    },
    {
      icon: Music,
      title: "Espectáculos",
      description: "Conciertos, shows en vivo y presentaciones artísticas con producción de primer nivel.",
      features: ["Escenografía profesional", "Sonido e iluminación", "Gestión de artistas"],
    },
    {
      icon: Camera,
      title: "Producción Audiovisual",
      description: "Grabación, streaming en vivo y contenido multimedia para potenciar tu evento.",
      features: ["Transmisión en vivo", "Edición profesional", "Múltiples cámaras"],
    },
    {
      icon: Lightbulb,
      title: "Pantallas",
      description: "servicios de pantallas LED, proyección y visualización de contenido multimedia.",
      features: ["pantallas LED", "proyección de video", "contenido multimedia"],
    },
    {
      icon: Users,
      title: "Gestión Integral",
      description: "Coordinación completa desde la planificación hasta la ejecución de tu evento.",
      features: ["Planificación detallada", "Coordinación el día del evento", "Seguimiento post-evento"],
    },
  ]

  return (
    <section id="servicios" className="py-20 bg-grey-900">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-100 mb-4">Nuestros Servicios</h2>
            <div className="w-24 h-1 gradient-accent mx-auto mb-6"></div>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
              Ofrecemos soluciones integrales para todo tipo de eventos, adaptándonos a tus necesidades y superando tus
              expectativas.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-black rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-16 h-16 gradient-red  rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-50 mb-4">{service.title}</h3>
                <p className="text-gray-50 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-grey-50 flex items-center">
                      <div className="w-2 h-2 gradient-accent rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button size="lg" className="gradient-red text-white border-0 hover:opacity-90 px-8 py-4">
              Solicitar Cotización Personalizada
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
