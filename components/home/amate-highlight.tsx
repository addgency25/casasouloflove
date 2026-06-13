"use client"

import Image from "next/image"
import Link from "next/link"
import { useInView } from "@/hooks/use-in-view"

const ingredients = "Té verde Sencha · Rooibos · Jazmín · Pétalos de rosa · Lavanda · Butterfly Pea Flower..."

const presentations = [
  { name: "Ama-Té Box — Ritual Completo", note: "Rinde 15 tazas" },
  { name: "Refill Pack", note: "Recarga para tu box" },
]

export function AmateHighlight() {
  const { ref, isInView } = useInView()

  return (
    <section ref={ref} className="bg-cream py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[45%_55%] gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div
            className={`transition-all duration-700 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="relative h-[300px] lg:h-[500px] rounded-sm overflow-hidden">
              <Image
                src="/images/shop/amate-hands.jpg"
                alt="Norge sosteniendo el té Ama-Té entre sus manos"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
          </div>

          {/* Content */}
          <div
            className={`relative flex flex-col justify-center pl-6 lg:pl-10 transition-all duration-700 delay-200 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            {/* Decorative vertical line */}
            <div
              className="absolute left-0 top-1/2 -translate-y-1/2"
              style={{
                width: "2px",
                height: "60%",
                backgroundColor: "rgba(235, 204, 147, 0.15)",
              }}
            />

            <span className="section-label-gold mb-4 block">Ama-Té</span>
            <h2 className="font-serif font-light text-charcoal text-balance">
              Un ritual en cada taza &mdash;
            </h2>
            <p className="text-charcoal/70 leading-relaxed mt-6">
              Té de hierbas infusionado con amor, creado para volver al corazón. Un ritual suave que envuelve, calma y recuerda que eres amor, eres suficiente, eres hogar. Elaborado con intención en Casa Soul of Love.
            </p>

            <p className="font-serif italic text-charcoal/40 text-sm mt-4">{ingredients}</p>

            {/* Presentations */}
            <ul className="mt-8 border-t border-charcoal/10">
              {presentations.map((item) => (
                <li
                  key={item.name}
                  className="flex items-center justify-between gap-4 py-3 border-b border-charcoal/10"
                >
                  <span className="text-charcoal text-sm">{item.name}</span>
                  <span className="text-charcoal/50 text-sm shrink-0">{item.note}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Link
                href="/shop#amate"
                className="inline-block bg-forest text-cream px-7 py-3 text-[0.7rem] uppercase tracking-[0.2em] hover:bg-forest/90 transition-colors"
              >
                Ver presentaciones en Shop &rarr;
              </Link>
            </div>

            <Link
              href="/shop#giftcards"
              className="text-olive hover:text-forest transition-colors mt-4"
              style={{ fontSize: "0.78rem" }}
            >
              ¿Quieres regalar Ama-Té? Ver Gift Cards &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
