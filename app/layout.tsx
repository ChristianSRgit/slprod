import type React from "react"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

export const metadata = {
  title: "SL Producciones - Eventos Únicos e Inolvidables",
  description:
    "Creamos experiencias extraordinarias. Especialistas en producción de eventos corporativos, sociales y espectáculos.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable} dark antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
