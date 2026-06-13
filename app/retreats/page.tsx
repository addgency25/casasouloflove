"use client"

import { PageHero } from "@/components/page-hero"
import { useState } from "react"

const includes = [
  { title: "Ceremonias", description: "Experiencias profundas con plantas de poder guiadas por Norge" },
  { title: "Meditaciones", description: "Prácticas diarias para aquietar la mente y conectar con el ser" },
  { title: "Integración", description: "Sesiones de procesamiento y acompañamiento personalizado" },
  { title: "Alimentación consciente", description: "Comida nutritiva y preparada con intención sagrada" },
  { title: "Naturaleza", description: "Inmersión total en espacios naturales y sagrados" },
  { title: "Comunidad íntima", description: "Conexión profunda con un grupo reducido de almas afines" },
]

export default function RetreatsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
    setFormData({ name: "", email: "" })
  }

  return (
    <>
      <PageHero
        label="Próximamente"
        title={<><em>Retreats</em> &mdash;</>}
        subtitle="Inmersiones de transformación profunda en contacto con la naturaleza."
        height="h-[60vh]"
      />

      {/* Main Content */}
      <section style={{ backgroundColor: "#faf6f0" }} className="py-24 lg:py-32">
        <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-lg leading-relaxed mb-6" style={{ color: "rgba(42, 42, 37, 0.7)" }}>
            Estamos preparando algo muy especial: retiros inmersivos de varios días en la naturaleza donde podrás desconectar completamente del mundo exterior y reconectar con tu esencia más profunda.
          </p>
          <p className="text-lg leading-relaxed mb-6" style={{ color: "rgba(42, 42, 37, 0.7)" }}>
            Estos retreats combinan ceremonias con plantas de poder, meditaciones guiadas, momentos de silencio, trabajo corporal, alimentación consciente y tiempo en comunidad con almas afines.
          </p>
          <p className="text-lg leading-relaxed" style={{ color: "rgba(42, 42, 37, 0.7)" }}>
            Norge y el equipo de CSL Friends guían todo el proceso con amor, seguridad y profesionalismo, creando un contenedor sagrado para tu transformación.
          </p>
        </div>
      </section>

      {/* Waitlist Form */}
      <section style={{ backgroundColor: "#f5efe5" }} className="py-20">
        <div className="max-w-md mx-auto px-6 lg:px-8 text-center">
          <h3 className="font-serif text-2xl font-light mb-3" style={{ color: "#2a2a25" }}>
            Lista de espera
          </h3>
          <p className="text-sm mb-8" style={{ color: "rgba(42, 42, 37, 0.6)" }}>
            Sé el primero en enterarte cuando abramos inscripciones.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Tu nombre"
              required
              style={{
                backgroundColor: "#faf6f0",
                border: "1px solid rgba(57, 64, 33, 0.2)",
                color: "#2a2a25",
              }}
              className="w-full px-4 py-3 text-sm placeholder:text-[#7a7a70] focus:outline-none focus:border-[#394021]"
            />
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="Tu email"
              required
              style={{
                backgroundColor: "#faf6f0",
                border: "1px solid rgba(57, 64, 33, 0.2)",
                color: "#2a2a25",
              }}
              className="w-full px-4 py-3 text-sm placeholder:text-[#7a7a70] focus:outline-none focus:border-[#394021]"
            />
            <button 
              type="submit" 
              className="w-full px-6 py-3 text-xs uppercase tracking-[0.15em] font-medium border transition-all mt-4"
              style={{
                borderColor: "#2a2a25",
                color: "#2a2a25",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#2a2a25"
                e.currentTarget.style.color = "#faf6f0"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent"
                e.currentTarget.style.color = "#2a2a25"
              }}
            >
              Unirme a la lista de espera &rarr;
            </button>
          </form>
        </div>
      </section>

      {/* What's Included */}
      <section style={{ backgroundColor: "#faf6f0" }} className="py-24 lg:py-32">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-3xl lg:text-4xl font-light text-center mb-16" style={{ color: "#2a2a25" }}>
            ¿Qué incluye un <em>retreat</em>? &mdash;
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
            {includes.map((item) => (
              <div key={item.title} className="text-center">
                <span className="text-sm mb-4 block" style={{ color: "#ebcc93" }}>&#10038;</span>
                <h4 className="font-serif text-xl mb-2" style={{ color: "#2a2a25" }}>{item.title}</h4>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(42, 42, 37, 0.5)" }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
