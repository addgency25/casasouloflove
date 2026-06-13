"use client"

import { useInView } from "@/hooks/use-in-view"

// All WhatsApp screenshots
const allScreenshots = [
  { src: "/images/testimonials/testimonial-01.jpg", alt: "Testimonio: Super tranquila, en paz, inspirada y enfocada" },
  { src: "/images/testimonials/testimonial-02.jpg", alt: "Testimonio: Hello Norgesita, aquí tienes una amiga" },
  { src: "/images/testimonials/testimonial-03.jpg", alt: "Testimonio: Ceremonia de Xanga en el Pacífico" },
  { src: "/images/testimonials/testimonial-04.png", alt: "Testimonio: Ni siquiera sé cómo empezar a agradecerte" },
  { src: "/images/testimonials/testimonial-05.jpg", alt: "Testimonio: Gracias por todo ayer, qué rico me siento hoy" },
  { src: "/images/testimonials/testimonial-06.jpg", alt: "Testimonio: Me ayudó mucho más a entender y liberar" },
  { src: "/images/testimonials/testimonial-07.jpg", alt: "Testimonio: Gracias por ayudarme a conectar conmigo de nuevo" },
  { src: "/images/testimonials/testimonial-08.jpg", alt: "Testimonio: Gracias por el granito de arena" },
  { src: "/images/testimonials/testimonial-09.jpg", alt: "Testimonio: Gracias por anoche, lo necesitaba tanto" },
  { src: "/images/testimonials/testimonial-10.jpg", alt: "Testimonio: Amor que lindo día he tenido" },
]

export function TestimonialsPreview() {
  const { ref, isInView } = useInView()
  
  // Duplicate images for seamless infinite scroll
  const duplicatedScreenshots = [...allScreenshots, ...allScreenshots]

  return (
    <section ref={ref} style={{ backgroundColor: "#faf6f0" }} className="py-24 lg:py-32 overflow-hidden">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span 
            className="block mb-4 text-[11px] uppercase tracking-[0.2em] font-semibold"
            style={{ color: "#918551" }}
          >
            Testimonios
          </span>
          <h2 
            className="font-serif font-light text-3xl md:text-4xl"
            style={{ color: "#2a2a25" }}
          >
            Voces del <em className="italic">alma</em> &mdash;
          </h2>
        </div>
      </div>

      {/* Infinite scrolling carousel */}
      <div 
        className={`relative transition-all duration-700 delay-200 ${
          isInView ? "opacity-100" : "opacity-0"
        }`}
      >
        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .carousel-track {
            animation: scroll 60s linear infinite;
          }
          .carousel-track:hover {
            animation-play-state: paused;
          }
        `}</style>
        
        <div 
          className="carousel-track flex items-center"
          style={{ gap: "1.5rem" }}
        >
          {duplicatedScreenshots.map((screenshot, index) => (
            <div
              key={`${screenshot.src}-${index}`}
              className="flex-shrink-0 rounded-xl overflow-hidden shadow-md"
              style={{ 
                height: "300px",
                border: "1px solid rgba(57, 64, 33, 0.08)"
              }}
            >
              <img
                src={screenshot.src}
                alt={screenshot.alt}
                style={{ 
                  height: "300px", 
                  width: "auto",
                  objectFit: "contain"
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Footer note */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <p 
          className={`text-center mt-10 transition-all duration-700 delay-300 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ fontSize: "0.7rem", color: "#7a7a70" }}
        >
          Testimonios reales compartidos con autorización.
        </p>
      </div>
    </section>
  )
}
