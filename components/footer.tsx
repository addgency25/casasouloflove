"use client"

import Link from "next/link"
import { useState } from "react"

const experienciasLinks = [
  { label: "Plantas de Poder", href: "/experiencias#plantas" },
  { label: "Meditaciones Presenciales", href: "/experiencias#presenciales" },
  { label: "Meditaciones Online", href: "/experiencias#online" },
  { label: "Retreats", href: "/retreats" },
  { label: "Calendario de Eventos", href: "/calendario" },
]

const casaLinks = [
  { label: "Nuestro Propósito", href: "/casa#proposito" },
  { label: "Soy Norge", href: "/casa#norge" },
  { label: "CSL Friends", href: "/casa#friends" },
  { label: "Preguntas Frecuentes", href: "/faqs" },
]

const shopLinks = [
  { label: "Ama-Te", href: "/shop#amate" },
  { label: "Gift Cards", href: "/shop#giftcards" },
  { label: "Mushroom Universe", href: "/mushroom" },
]

export function Footer() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setEmail("")
  }

  return (
    <footer className="bg-charcoal text-cream/80 border-t border-cream/8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-12 border-b border-cream/8">
          {/* Brand & Newsletter */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <img
                src="/images/logo-white.png"
                alt="Casa Soul of Love"
                width="107"
                height="32"
                style={{ height: "32px", width: "auto" }}
                className="opacity-70 hover:opacity-100 transition-opacity"
              />
            </Link>
            <p className="text-sm text-cream/40 mb-8 leading-relaxed">
              Espacio sagrado de transformacion y expansion de conciencia en Miami, FL.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-[0.65rem] uppercase tracking-[0.25em] font-medium text-gold">
                Newsletter
              </p>
              <div className="flex items-center gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@email.com"
                  className="input-minimal flex-1 text-cream placeholder:text-cream/30 border-cream/30 focus:border-gold"
                />
                <button
                  type="submit"
                  className="text-cream/60 hover:text-gold transition-colors text-lg"
                  aria-label="Enviar"
                >
                  &rarr;
                </button>
              </div>
            </form>
          </div>

          {/* Experiencias Links */}
          <div>
            <h4 className="text-[0.65rem] uppercase tracking-[0.25em] font-medium text-gold mb-6">
              Experiencias
            </h4>
            <ul className="space-y-3">
              {experienciasLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/40 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Casa Soul of Love Links */}
          <div>
            <h4 className="text-[0.65rem] uppercase tracking-[0.25em] font-medium text-gold mb-6">
              Casa Soul of Love
            </h4>
            <ul className="space-y-3">
              {casaLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/40 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Shop & Contact */}
          <div>
            <h4 className="text-[0.65rem] uppercase tracking-[0.25em] font-medium text-gold mb-6">
              Shop & Contacto
            </h4>
            <ul className="space-y-3 mb-8">
              {shopLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/40 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="pt-6 border-t border-cream/8">
              <p className="text-sm text-cream/40 mb-2">Miami, Florida</p>
              <a
                href="mailto:hola@casasouloflove.com"
                className="text-sm text-gold hover:text-gold/80 transition-colors"
              >
                hola@casasouloflove.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream/30">
            &copy; 2026 Casa Soul of Love. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6 text-sm text-cream/40">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
              Instagram
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
              Facebook
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
              YouTube
            </a>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
