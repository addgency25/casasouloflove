"use client"

import { PageHero } from "@/components/page-hero"
import { useState } from "react"
import Link from "next/link"

const products = [
  {
    id: "elixir",
    name: "Elixir de Amor",
    label: "Tintura sagrada",
    description: "Nuestra tintura artesanal de psilocibina está diseñada para un micro-ritual diario que te conecta con tu corazón. Cada gota contiene la intención de amor y transformación.",
    includes: [
      "Tintura de 30ml (suministro para 30 días)",
      "Guía de microdosificación personalizada",
      "Sesión de orientación con Norge",
      "Acceso a comunidad de integración",
    ],
  },
  {
    id: "protocolo",
    name: "Protocolo At Home",
    label: "Microdosis calibradas",
    description: "30 cápsulas calibradas con precisión para tu protocolo de microdosis personal. Cada cápsula está preparada con amor y la intención de apoyar tu proceso de expansión.",
    includes: [
      "30 cápsulas de microdosis calibradas",
      "Diario de seguimiento del protocolo",
      "2 sesiones de seguimiento con Norge",
      "Acceso a comunidad de integración",
    ],
  },
  {
    id: "chocolove",
    name: "ChocoLove",
    label: "Chocolate ceremonial",
    description: "Chocolate artesanal con psilocibina elaborado con cacao ceremonial de alta calidad. Una forma deliciosa y sagrada de conectar con la medicina.",
    includes: [
      "Tableta de chocolate ceremonial",
      "Guía de ceremonia personal",
      "Playlist curada para la experiencia",
      "Sesión de integración post-ceremonia",
    ],
  },
]

export default function MushroomPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
    setFormData({ name: "", email: "", whatsapp: "" })
  }

  return (
    <>
      <PageHero
        label="Productos ceremoniales"
        title="Mushroom Universe"
        height="h-[50vh]"
      />

      {/* Disclaimer */}
      <section className="bg-cream py-8">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="border-l-2 border-terracotta pl-6 py-2">
            <p className="text-charcoal/70 text-sm leading-relaxed">
              <strong className="text-charcoal">Importante:</strong> Todos los productos de Mushroom Universe se ofrecen bajo protocolo privado con acompañamiento personalizado de Norge. No se venden sin evaluación previa. Tu seguridad es nuestra prioridad.
            </p>
          </div>
        </div>
      </section>

      {/* Products - Alternating layout */}
      {products.map((product, index) => (
        <section
          key={product.id}
          id={product.id}
          className={index % 2 === 0 ? "bg-cream py-24 lg:py-32" : "bg-cream-warm py-24 lg:py-32"}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
              index % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}>
              {/* Image - alternating sides */}
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className={`aspect-square ${
                  index === 0 ? "bg-burgundy" : index === 1 ? "bg-sage" : "bg-olive"
                }`}>
                  <span className="h-full flex items-center justify-center text-cream/40 text-xs uppercase tracking-widest">
                    Product Photo
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <span className="section-label mb-4 block">{product.label}</span>
                <h2 className="font-serif font-light text-charcoal mb-6">
                  {product.name.split(" ")[0]}{" "}
                  <em className="italic">{product.name.split(" ").slice(1).join(" ")}</em> &mdash;
                </h2>
                <p className="text-charcoal/70 leading-relaxed mb-8">
                  {product.description}
                </p>

                {/* Includes */}
                <div className="mb-10">
                  <h4 className="text-[11px] uppercase tracking-[0.2em] text-charcoal font-medium mb-4">Incluye:</h4>
                  <ul className="space-y-3">
                    {product.includes.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-charcoal/70 text-sm">
                        <span className="w-1 h-1 rounded-full bg-gold mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link href="#solicitar" className="btn-outline">
                  Solicitar acompañamiento &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Solicitar Acompañamiento CTA */}
      <section id="solicitar" className="bg-forest py-24 lg:py-32">
        <div className="max-w-xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif font-light text-cream mb-4">
            Solicita tu <em className="italic">acompañamiento</em>
          </h2>
          <p className="text-cream/60 mb-10">
            Todos nuestros productos requieren una entrevista previa para asegurar que sea el momento adecuado para ti.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Tu nombre"
              required
              className="w-full input-minimal text-cream placeholder:text-cream/40 border-cream/30"
            />
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="tu@email.com"
              required
              className="w-full input-minimal text-cream placeholder:text-cream/40 border-cream/30"
            />
            <input
              type="tel"
              value={formData.whatsapp}
              onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
              placeholder="WhatsApp (con código de país)"
              required
              className="w-full input-minimal text-cream placeholder:text-cream/40 border-cream/30"
            />
            <button type="submit" className="btn-solid w-full mt-8">
              Solicitar entrevista &rarr;
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
