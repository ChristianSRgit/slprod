"use client"

import { useEffect, useState } from "react"
import { ExternalLink } from "lucide-react"

export default function Portfolio() {
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

    const element = document.getElementById("portfolio")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      title: "Eventos Sociales",
      category: "Eventos Sociales",
      image: "/event1.png?height=400&width=600",
      description: "Evento de lanzamiento para empresa tecnológica con más de 500 asistentes.",
    },
    {
      title: "Ambientacion Fluo",
      category: "Evento Social",
      image: "/ambientacion2.jpg?height=400&width=600",
      description: "Celebración íntima en jardín con decoración floral y iluminación fluo.",
    },
    {
      title: "Festivales",
      category: "Espectáculo",
      image: "/festival1.jpg?height=400&width=600",
      description: "Show privado con producción audiovisual completa y efectos especiales.",
    },
    {
      title: "Festeja tus 15 Años",
      category: "Evento Social",
      image: "/quinceanios.jpg?height=400&width=600",
      description: "Celebración de 15 años con temática personalizada y efectos especiales.",
    },
    {
      title: "Convención Empresarial",
      category: "Evento Corporativo",
      image: "/empresa1.png?height=400&width=600",
      description: "Convención anual con múltiples salas y tecnología de punta.",
    },
    {
      title: "Casamientos",
      category: "Evento Social",
      image: "/casamiento1.jpg?height=400&width=600",
      description: "Festival al aire libre con múltiples escenarios",
    },
  ]

  return (
    <section id="portfolio" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-10 mb-4">Nuestro Portfolio</h2>
            <div className="w-24 h-1 gradient-accent mx-auto mb-6"></div>
            <p className="text-xl text-gray-10 max-w-3xl mx-auto leading-relaxed">
              Cada proyecto es único y refleja nuestra pasión por crear experiencias extraordinarias. Descubre algunos
              de nuestros trabajos más destacados.
            </p>
          </div>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-sm bg-white/20 px-2 py-1 rounded-full">{project.category}</span>
                        </div>
                        <ExternalLink size={20} className="opacity-80" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pt-6">
                  <h3 className="text-xl font-bold text-gray-10 mb-2 group-hover:text-red-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{project.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">¿Quieres ver más de nuestro trabajo?</p>
            <a
              href="https://www.instagram.com/sl.producciones/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 gradient-accent text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              Ver en Instagram
              <ExternalLink className="ml-2" size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
