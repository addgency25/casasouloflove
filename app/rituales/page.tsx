"use client"

import { PageHero } from "@/components/page-hero"
import { useState } from "react"

const rituals = [
  {
    number: "01",
    timeOfDay: "Mañana",
    title: "Ritual del Amanecer",
    description: "Comienza tu día con una práctica de respiración consciente y gratitud. Antes de revisar el teléfono, dedica 5 minutos a respirar profundamente, agradecer por 3 cosas de tu vida, y establecer una intención para el día.",
  },
  {
    number: "02",
    timeOfDay: "Mediodía",
    title: "Pausa de Reconexión",
    description: "A mitad del día, regálate 5 minutos de silencio completo. Apaga todas las distracciones, coloca ambas manos sobre tu corazón, y simplemente respira. Esta pausa te ayuda a volver a tu centro.",
  },
  {
    number: "03",
    timeOfDay: "Tarde",
    title: "Conexión con la Tierra",
    description: "Si es posible, camina descalzo sobre la tierra, el césped o la arena. La práctica de grounding te ayuda a descargar el exceso de energía mental y reconectar con la frecuencia natural de la Tierra.",
  },
  {
    number: "04",
    timeOfDay: "Tarde",
    title: "Baño de Sonido Personal",
    description: "Dedica 15-20 minutos a escuchar frecuencias sanadoras como 432Hz o 528Hz con auriculares de calidad. Acuéstate en un lugar cómodo, cierra los ojos, y permite que las frecuencias hagan su trabajo.",
  },
  {
    number: "05",
    timeOfDay: "Noche",
    title: "Ritual del Atardecer",
    description: "Antes de dormir, limpia tu espacio y tu energía con salvia o palo santo. Escribe en un diario las lecciones del día y libera cualquier energía que ya no te sirva. Agradece por el día vivido.",
  },
]

export default function RitualesPage() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ email })
    setEmail("")
  }

  return (
    <>
      <PageHero
        label="Prácticas diarias"
        title="Rituales Cotidianos"
        height="h-[50vh]"
      />

      {/* Intro */}
      <section className="bg-cream py-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-charcoal/70 leading-relaxed text-lg">
            La transformación más profunda ocurre en los pequeños momentos cotidianos. Estos rituales están diseñados para ayudarte a crear pausas sagradas a lo largo del día.
          </p>
        </div>
      </section>

      {/* Rituals List - Editorial vertical layout */}
      <section className="bg-cream-warm py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="divide-y divide-charcoal/10">
            {rituals.map((ritual) => (
              <article key={ritual.number} className="py-12 first:pt-0 last:pb-0">
                <div className="flex items-start gap-8">
                  {/* Number */}
                  <span className="font-serif text-4xl lg:text-5xl text-gold font-light flex-shrink-0">
                    {ritual.number}
                  </span>

                  {/* Content */}
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-olive font-medium mb-2 block">
                      {ritual.timeOfDay}
                    </span>
                    <h3 className="font-serif text-2xl text-charcoal mb-4">
                      {ritual.title}
                    </h3>
                    <p className="text-charcoal/60 leading-relaxed">
                      {ritual.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Magnet CTA */}
      <section className="bg-forest py-24 lg:py-32">
        <div className="max-w-xl mx-auto px-6 lg:px-8 text-center">
          <span className="section-label-gold mb-4 block">Regalo para ti</span>
          <h2 className="font-serif font-light text-cream mb-6">
            Recibe los 10 rituales en <em className="italic">video</em>
          </h2>
          <p className="text-cream/60 mb-10">
            He preparado una serie de videos donde te guío paso a paso en cada uno de estos rituales y 5 prácticas adicionales.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              required
              className="input-minimal w-full sm:w-64 text-cream placeholder:text-cream/40 border-cream/30"
            />
            <button type="submit" className="btn-outline-light whitespace-nowrap">
              Quiero los videos
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
