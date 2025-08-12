"use client"

import { useEffect, useState } from "react"
import { Phone, Mail, MapPin, Instagram, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Contact() {
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

    const element = document.getElementById("contacto")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const contactInfo = [
    {
      icon: Phone,
      title: "Sebastián Lo Forte",
      info: "+54 11 4039 8356",
      action: "https://wa.me/541140398356?text=Hola%20Sebastián,%20me%20gustaría%20contactarme%20contigo.",
    },
    {
      icon: Mail,
      title: "Email",
      info: "slproduccionesinfo@gmail.com",
      action: "mailto:slproduccionesinfo@gmail.com",
    },
    {
      icon: MapPin,
      title: "Ubicación",
      info: "Buenos Aires, Argentina",
      action: "https://www.google.com/maps?ll=-34.397491,-58.648017&z=16&t=m&hl=es&gl=AR&mapclient=embed&q=Av.+del+Puerto+215+B1670+Rinc%C3%B3n+de+Milberg+Provincia+de+Buenos+Aires",
    },
    {
      icon: Instagram,
      title: "Instagram",
      info: "@sl.producciones",
      action: "https://www.instagram.com/sl.producciones/",
    },
  ]

  return (
    <section id="contacto" className="py-20 gradient-purple">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Hablemos de Tu Evento</h2>
            <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              ¿Tienes una idea? Nos encantaría escucharla y ayudarte a convertirla en realidad. Contáctanos para una
              consulta gratuita.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Solicita tu Cotización</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Nombre completo"
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:border-white/50"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:border-white/50"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="tel"
                      placeholder="Teléfono"
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:border-white/50"
                    />
                  </div>
                  <div>
                    <select className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-red-400">
                      <option className="bg-black" value="">Tipo de evento</option>
                      <option className="bg-black" value="corporativo">Corporativo</option>
                      <option className="bg-black" value="social">Social</option>
                      <option className="bg-black" value="espectaculo">Espectáculo</option>
                      <option className="bg-black" value="otro">Otro</option>
                    </select>
                  </div>
                </div>
                <div>
                  <textarea
                    rows={4}
                    placeholder="Cuéntanos sobre tu evento..."
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:border-white/50 resize-none"
                  ></textarea>
                </div>
                <Button className="w-full gradient-accent text-white border-0 hover:opacity-90 py-3">
                  <Send className="mr-2" size={20} />
                  Enviar Solicitud
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="glass rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Información de Contacto</h3>
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <a
                      key={index}
                      href={item.action}
                      target={item.action.startsWith("http") ? "_blank" : undefined}
                      rel={item.action.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-center space-x-4 text-white hover:text-pink-300 transition-colors group"
                    >
                      <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors">
                        <item.icon size={20} />
                      </div>
                      <div>
                        <div className="font-medium">{item.title}</div>
                        <div className="text-white/80">{item.info}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="glass rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-4">¿Por qué elegirnos?</h3>
                <ul className="space-y-3 text-white/90">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-pink-300 rounded-full mr-3"></div>
                    Consulta inicial gratuita
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-pink-300 rounded-full mr-3"></div>
                    Cotización personalizada en 24h
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-pink-300 rounded-full mr-3"></div>
                    Seguimiento completo del proyecto
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-pink-300 rounded-full mr-3"></div>
                    Garantía de satisfacción 100%
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
