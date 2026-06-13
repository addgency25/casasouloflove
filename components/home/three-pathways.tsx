"use client"

import Link from "next/link"
import Image from "next/image"
import { useInView } from "@/hooks/use-in-view"

const pathways = [
  {
    title: "Ceremonias & Meditaciones",
    description:
      "Experiencias guiadas de expansión de conciencia con plantas de poder y meditaciones profundas en un espacio seguro y amoroso.",
    image: "/images/pathway-ceremonies.jpg",
    href: "/experiencias",
  },
  {
    title: "Mushroom Universe",
    description:
      "Lleva la experiencia a tu hogar con productos ceremoniales de alta calidad y acompañamiento personalizado de Norge.",
    image: "/images/pathway-mushroom.png",
    href: "/mushroom",
  },
  {
    title: "Formaciones",
    description:
      "Conviértete en facilitador y aprende a sostener espacios sagrados con profesionalismo, sabiduría y amor.",
    image: "/images/pathway-formaciones.png",
    href: "/formaciones",
  },
]

export function ThreePathways() {
  const { ref, isInView } = useInView()

  return (
    <section ref={ref} style={{ backgroundColor: "#394021" }} className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-20 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span 
            className="block mb-4"
            style={{ 
              fontSize: "0.7rem", 
              letterSpacing: "0.25em", 
              textTransform: "uppercase",
              fontWeight: 600,
              color: "#ebcc93"
            }}
          >
            Elige tu camino
          </span>
          <h2 
            className="font-serif font-light"
            style={{ color: "#faf6f0" }}
          >
            Tres vías de <em className="italic">transformación</em> &mdash;
          </h2>
        </div>

        {/* Three columns with thin vertical separators */}
        <div 
          className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x"
          style={{ borderColor: "rgba(250, 246, 240, 0.15)" }}
        >
          {pathways.map((pathway, index) => (
            <div
              key={pathway.title}
              className={`px-6 lg:px-10 py-10 md:py-0 flex flex-col transition-all duration-700 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ 
                transitionDelay: `${(index + 1) * 100}ms`,
                borderColor: "rgba(250, 246, 240, 0.15)"
              }}
            >
              {/* Image with forest tint overlay */}
              <div className="relative w-full mb-8 rounded-sm overflow-hidden" style={{ aspectRatio: "16/10" }}>
                <Image
                  src={pathway.image}
                  alt={pathway.title}
                  fill
                  className="object-cover"
                />
                {/* Subtle forest green tint overlay */}
                <div 
                  className="absolute inset-0"
                  style={{ backgroundColor: "rgba(57, 64, 33, 0.1)" }}
                />
              </div>

              {/* Star decorator */}
              <span style={{ color: "#ebcc93", fontSize: "0.875rem" }} className="mb-6 block">&#10038;</span>

              {/* Title */}
              <h3 
                className="font-serif text-2xl mb-4"
                style={{ color: "#faf6f0" }}
              >
                {pathway.title}
              </h3>

              {/* Description */}
              <p 
                className="leading-relaxed mb-8"
                style={{ color: "rgba(250, 246, 240, 0.6)", fontSize: "0.95rem" }}
              >
                {pathway.description}
              </p>

              {/* Spacer to push link to bottom */}
              <div className="flex-grow" />

              {/* Link */}
              <Link
                href={pathway.href}
                className="inline-flex items-center gap-2 transition-colors"
                style={{ color: "#ebcc93", fontSize: "0.875rem" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#faf6f0")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#ebcc93")}
              >
                Explorar <span>&rarr;</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
