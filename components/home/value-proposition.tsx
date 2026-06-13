"use client"

import Link from "next/link"
import Image from "next/image"
import { useInView } from "@/hooks/use-in-view"

export function ValueProposition() {
  const { ref, isInView } = useInView()

  return (
    <section ref={ref} className="bg-cream py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Asymmetric layout */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left: Ceremony image */}
          <div
            className={`lg:col-span-5 relative transition-all duration-700 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/ceremony-outdoor.jpg"
                alt="Ceremonia al aire libre con cuencos tibetanos y cojines de meditación"
                fill
                className="object-cover"
                style={{ objectPosition: "center bottom" }}
              />
              {/* Subtle warm overlay for brand palette */}
              <div 
                className="absolute inset-0"
                style={{ backgroundColor: "rgba(57, 64, 33, 0.08)" }}
              />
            </div>
          </div>

          {/* Right: Content */}
          <div
            className={`lg:col-span-7 lg:pl-8 pt-4 lg:pt-8 transition-all duration-700 delay-100 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <span 
              className="block mb-4 uppercase tracking-[0.25em] font-medium"
              style={{ fontSize: "0.7rem", color: "#918551" }}
            >
              Casa Soul of Love
            </span>
            <h2 
              className="font-serif font-light mb-8"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "#2a2a25", lineHeight: 1.2 }}
            >
              Un espacio sagrado donde el amor es la{" "}
              <em className="italic">medicina</em> &mdash;
            </h2>
            <div className="space-y-5 leading-[1.8] mb-10 max-w-xl" style={{ color: "rgba(42, 42, 37, 0.7)" }}>
              <p>
                Casa Soul of Love es un espacio sagrado de encuentro, transformación y cuidado, creado para acompañar procesos de autoconocimiento, sanación y expansión de conciencia. Es un refugio donde la meditación, las ceremonias y las experiencias grupales se integran en un entorno amoroso y contenido.
              </p>
              <p>
                Es también un espacio seguro y respetuoso para el trabajo con plantas de poder, entendidas como medicina natural y herramientas ancestrales de conciencia, siempre abordadas con intención, cuidado y guía profesional.
              </p>
            </div>
            <Link 
              href="/casa#norge" 
              className="inline-block uppercase tracking-[0.15em] font-medium transition-all duration-300 hover:bg-[#394021] hover:text-white"
              style={{ 
                fontSize: "0.75rem", 
                padding: "0.875rem 2rem",
                border: "1px solid #394021",
                color: "#394021"
              }}
            >
              Conoce a Norge &rarr;
            </Link>
          </div>
        </div>

        {/* Trust badges - separated by thin vertical lines */}
        <div
          className={`mt-24 pt-12 border-t transition-all duration-700 delay-300 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ borderColor: "rgba(42, 42, 37, 0.1)" }}
        >
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="text-center py-6 md:py-0 md:px-12 border-b md:border-b-0 md:border-r" style={{ borderColor: "rgba(42, 42, 37, 0.1)" }}>
              <span className="font-serif font-light" style={{ fontSize: "2rem", color: "#2a2a25" }}>
                500+
              </span>
              <p 
                className="uppercase tracking-[0.25em] font-medium mt-2"
                style={{ fontSize: "0.6rem", color: "#918551" }}
              >
                Almas acompañadas
              </p>
            </div>
            <div className="text-center py-6 md:py-0 md:px-12 border-b md:border-b-0 md:border-r" style={{ borderColor: "rgba(42, 42, 37, 0.1)" }}>
              <span className="font-serif font-light" style={{ fontSize: "2rem", color: "#2a2a25" }}>
                8+
              </span>
              <p 
                className="uppercase tracking-[0.25em] font-medium mt-2"
                style={{ fontSize: "0.6rem", color: "#918551" }}
              >
                Años de experiencia
              </p>
            </div>
            <div className="text-center py-6 md:py-0 md:px-12">
              <span className="font-serif font-light" style={{ fontSize: "2rem", color: "#2a2a25" }}>
                100%
              </span>
              <p 
                className="uppercase tracking-[0.25em] font-medium mt-2"
                style={{ fontSize: "0.6rem", color: "#918551" }}
              >
                Espacio seguro
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
