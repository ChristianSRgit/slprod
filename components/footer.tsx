export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 gradient-purple rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl font-serif">SL</span>
              </div>
              <span className="text-white font-bold text-xl">Producciones</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Creamos experiencias extraordinarias que conectan, inspiran y perduran en la memoria.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {["Inicio", "Nosotros", "Servicios", "Portfolio", "Contacto"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-gray-400 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Servicios</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Eventos Corporativos</li>
              <li>Eventos Sociales</li>
              <li>Espectáculos</li>
              <li>Producción Audiovisual</li>
              <li>Conceptualización</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">© 2025 SL Producciones. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
