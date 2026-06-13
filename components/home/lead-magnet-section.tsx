"use client"

import { useState } from "react"
import { useInView } from "@/hooks/use-in-view"

export function LeadMagnetSection() {
  const { ref, isInView } = useInView()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ name, email })
    setName("")
    setEmail("")
  }

  return (
    <section ref={ref} className="bg-forest py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="section-label-gold mb-4 block">Regalo para tu despertar</span>
          <h2 className="font-serif font-light text-cream mb-8">
            Lleva la paz de Casa Soul of Love a tu{" "}
            <em className="italic">día a día</em> &mdash;
          </h2>
          <p className="text-cream/60 text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
            He preparado 10 rituales en video para ayudarte a enraizar, calmar la mente y abrir el corazón desde casa. Es mi regalo para tu despertar.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-200 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Tu nombre"
            required
            className="input-minimal w-full sm:w-48 text-cream placeholder:text-cream/40 border-cream/30"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu@email.com"
            required
            className="input-minimal w-full sm:w-56 text-cream placeholder:text-cream/40 border-cream/30"
          />
          <button type="submit" className="btn-outline-light whitespace-nowrap">
            Quiero mis Rituales
          </button>
        </form>
      </div>
    </section>
  )
}
