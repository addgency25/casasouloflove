"use client"

import Link from "next/link"
import { FAQAccordion } from "@/components/faq-accordion"
import { useInView } from "@/hooks/use-in-view"

const faqItems = [
  {
    question: "Es seguro participar en las ceremonias?",
    answer:
      "Absolutamente. Norge cuenta con mas de 8 años de experiencia y cada participante pasa por un proceso de evaluacion previo. Tu seguridad fisica, emocional y espiritual es nuestra prioridad absoluta.",
  },
  {
    question: "Necesito tener experiencia previa?",
    answer:
      "No es necesario. Ofrecemos experiencias para todos los niveles, desde meditaciones suaves hasta ceremonias profundas. Norge te guiara en elegir la experiencia mas adecuada para ti.",
  },
  {
    question: "Las experiencias son presenciales u online?",
    answer:
      "Ambas. Las ceremonias con plantas de poder son exclusivamente presenciales en Miami, FL. Las meditaciones guiadas estan disponibles tanto presenciales como online a traves de Zoom.",
  },
  {
    question: "Que incluyen los productos Mushroom Universe?",
    answer:
      "Cada producto incluye la medicina de alta calidad, una guia detallada de uso, una sesion de orientacion personalizada con Norge y acceso a nuestra comunidad de integracion.",
  },
  {
    question: "Como puedo reservar?",
    answer:
      "Puedes reservar directamente desde nuestro calendario de eventos o contactarnos por WhatsApp para una consulta personalizada.",
  },
]

export function QuickFAQ() {
  const { ref, isInView } = useInView()

  return (
    <section ref={ref} className="bg-cream-warm py-24 lg:py-32">
      <div className="max-w-2xl mx-auto px-6 lg:px-8">
        <div
          className={`mb-12 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-serif font-light text-charcoal text-center">
            Preguntas <em className="italic">frecuentes</em> &mdash;
          </h2>
        </div>

        <div
          className={`transition-all duration-700 delay-200 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <FAQAccordion items={faqItems} />
        </div>

        <div
          className={`text-center mt-12 transition-all duration-700 delay-400 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Link href="/faqs" className="btn-outline">
            Ver todas las preguntas &rarr;
          </Link>
        </div>
      </div>
    </section>
  )
}
