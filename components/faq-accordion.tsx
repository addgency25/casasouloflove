"use client"

import { useState } from "react"

interface FAQItem {
  question: string
  answer: string
}

interface FAQAccordionProps {
  items: FAQItem[]
  categoryTitle?: string
}

export function FAQAccordion({ items, categoryTitle }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div>
      {categoryTitle && (
        <h3 className="font-serif text-xl text-charcoal mb-6 pt-8 first:pt-0">
          {categoryTitle}
        </h3>
      )}
      <div className="divide-y divide-charcoal/10">
        {items.map((item, index) => (
          <div key={index}>
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full py-5 flex items-center justify-between text-left group"
            >
              <span className="font-serif text-lg text-charcoal pr-8 group-hover:text-forest transition-colors">
                {item.question}
              </span>
              <span className="flex-shrink-0 text-charcoal/40 text-xl font-light transition-transform">
                {openIndex === index ? "\u2212" : "+"}
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? "max-h-96 pb-6" : "max-h-0"
              }`}
            >
              <p className="text-charcoal/60 leading-relaxed pr-12">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
