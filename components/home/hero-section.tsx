"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen lg:h-screen flex flex-col lg:flex-row overflow-hidden">
      {/* Mobile: Image on top */}
      <div className="relative w-full h-[50vh] lg:hidden">
        <Image
          src="/images/norge-hero.jpg"
          alt="Norge - Fundadora de Casa Soul of Love"
          fill
          className="object-cover object-top"
          priority
        />
        {/* Bottom gradient fade to forest */}
        <div 
          className="absolute inset-x-0 bottom-0 h-24"
          style={{
            background: "linear-gradient(to top, #394021, transparent)"
          }}
        />
      </div>

      {/* Left half - Forest green with content */}
      <div 
        className="relative w-full lg:w-[55%] flex items-center"
        style={{ backgroundColor: "#394021" }}
      >
        {/* Content container */}
        <div 
          className={`w-full px-8 py-16 lg:py-0 lg:pl-[8%] lg:pr-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {/* Tagline - Cormorant Garamond italic */}
          <h1
            className="font-serif italic font-light leading-tight mb-6"
            style={{ 
              color: "#faf6f0", 
              fontSize: "clamp(2.5rem, 4.5vw, 3.8rem)",
              letterSpacing: "-0.02em",
              lineHeight: "1.15"
            }}
          >
            Tu refugio para recordar que ya estás completo.
          </h1>

          {/* Subtitle - Montserrat light */}
          <p
            className="font-sans font-light mb-10 max-w-md"
            style={{ 
              color: "rgba(255, 255, 255, 0.6)", 
              fontSize: "0.95rem",
              lineHeight: "1.7"
            }}
          >
            Espacio sagrado de transformación, ceremonias y expansión de conciencia en Miami.
          </p>

          {/* CTAs - Side by side */}
          <div className="flex flex-wrap items-center gap-5">
            {/* Outline button */}
            <Link 
              href="/calendario" 
              className="inline-block transition-all duration-300 hover:bg-white hover:text-[#394021]"
              style={{ 
                color: "#ffffff", 
                border: "1px solid rgba(255, 255, 255, 0.8)",
                backgroundColor: "transparent",
                padding: "1rem 2rem",
                fontSize: "0.75rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontWeight: "600"
              }}
            >
              Ver Calendario de Eventos
            </Link>
            
            {/* Text link */}
            <Link 
              href="/experiencias" 
              className="inline-block transition-all duration-300 hover:opacity-70"
              style={{ 
                color: "#ffffff",
                padding: "1rem 0",
                fontSize: "0.75rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontWeight: "600"
              }}
            >
              Explorar Experiencias →
            </Link>
          </div>
        </div>
      </div>

      {/* Right half - Norge image (desktop only) */}
      <div className="hidden lg:block relative w-[45%] h-full">
        <Image
          src="/images/norge-hero.jpg"
          alt="Norge - Fundadora de Casa Soul of Love"
          fill
          className="object-cover"
          style={{ objectPosition: "center top" }}
          priority
        />
        {/* Forest green tint overlay for color unity */}
        <div 
          className="absolute inset-0 z-10"
          style={{
            backgroundColor: "rgba(57, 64, 33, 0.2)"
          }}
        />
        {/* Wide gradient blend from forest to transparent (200px) */}
        <div 
          className="absolute inset-y-0 left-0 z-20"
          style={{
            width: "200px",
            background: "linear-gradient(to right, #394021 0%, rgba(57, 64, 33, 0.7) 40%, rgba(57, 64, 33, 0.3) 70%, transparent 100%)"
          }}
        />
      </div>

      {/* Scroll indicator - thin line (desktop only) */}
      <div
        className={`hidden lg:flex absolute bottom-8 left-[27%] flex-col items-center gap-2 transition-all duration-700 delay-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div 
          className="w-px h-12"
          style={{ background: "linear-gradient(to bottom, rgba(250, 246, 240, 0.4), transparent)" }}
        />
      </div>
    </section>
  )
}
