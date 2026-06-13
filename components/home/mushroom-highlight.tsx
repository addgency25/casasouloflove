"use client"

import Image from "next/image"
import Link from "next/link"
import { useInView } from "@/hooks/use-in-view"

const products = [
  {
    name: "Elixir de Amor",
    description: "Tintura sagrada",
    image: "/images/products/chocolove.png",
    href: "/mushroom#elixir"
  },
  {
    name: "ChocoLove",
    description: "Chocolate ceremonial",
    image: "/images/products/chocolove.png",
    href: "/mushroom#chocolove"
  },
  {
    name: "Ama-Té",
    description: "Té con adaptógenos",
    image: "/images/products/amate.png",
    href: "/shop#amate"
  }
]

export function MushroomHighlight() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section 
      ref={ref}
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ 
        backgroundColor: "#1a1412",
        borderTop: "1px solid rgba(235, 204, 147, 0.2)",
        borderBottom: "1px solid rgba(235, 204, 147, 0.2)"
      }}
    >
      {/* Atmospheric background images */}
      <div 
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/3 w-[400px] h-[500px] pointer-events-none"
        style={{ opacity: 0.15, filter: "blur(8px)" }}
      >
        <Image
          src="/images/products/chocolove.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>
      <div 
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 w-[400px] h-[500px] pointer-events-none"
        style={{ opacity: 0.15, filter: "blur(8px)" }}
      >
        <Image
          src="/images/products/amate.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div 
          className={`text-center mb-16 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p 
            className="uppercase font-semibold mb-6"
            style={{ 
              fontSize: "0.7rem", 
              color: "#ebcc93",
              letterSpacing: "0.3em"
            }}
          >
            Mushroom Universe
          </p>
          <h2 
            className="font-serif font-light"
            style={{ 
              fontSize: "clamp(2.4rem, 5vw, 4rem)",
              color: "#faf6f0",
              lineHeight: 1.15
            }}
          >
            Lleva la experiencia de la Casa a tu hogar —
          </h2>
        </div>

        {/* Three Products */}
        <div 
          className={`max-w-3xl mx-auto transition-all duration-700 delay-100 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex justify-center items-start gap-8 lg:gap-12">
            {products.map((product, index) => (
              <Link 
                key={product.name}
                href={product.href}
                className="group flex flex-col items-center text-center"
                style={{ 
                  transitionDelay: `${(index + 1) * 100}ms`
                }}
              >
                {/* Product Image with glow */}
                <div 
                  className="relative mb-4 rounded-sm overflow-hidden transition-transform duration-300 group-hover:scale-105"
                  style={{ 
                    width: "150px",
                    height: "150px",
                    boxShadow: "0 8px 40px rgba(206, 133, 78, 0.25)"
                  }}
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Product Name */}
                <h3 
                  className="font-serif font-light mb-1 transition-colors group-hover:text-[#ebcc93]"
                  style={{ fontSize: "1.25rem", color: "#faf6f0" }}
                >
                  {product.name}
                </h3>
                {/* Product Description */}
                <p style={{ fontSize: "0.75rem", color: "rgba(250, 246, 240, 0.6)" }}>
                  {product.description}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Button - Solid Gold */}
        <div 
          className={`text-center mt-16 transition-all duration-700 delay-300 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Link
            href="/mushroom"
            className="inline-block px-10 py-4 font-medium uppercase tracking-wider transition-all duration-300 hover:bg-white"
            style={{ 
              fontSize: "0.75rem",
              backgroundColor: "#ebcc93",
              color: "#1a1412",
              letterSpacing: "0.15em"
            }}
          >
            Explorar Mushroom Universe &rarr;
          </Link>
        </div>
      </div>
    </section>
  )
}
