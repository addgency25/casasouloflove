"use client"

import Link from "next/link"
import { useInView } from "@/hooks/use-in-view"

const events = [
  {
    day: "12",
    month: "Abril",
    title: "Macrodosis Mushroom: Limpieza y Balance",
    location: "Miami, FL",
    time: "9:00 AM - 6:00 PM",
    badge: "Cupos limitados",
  },
  {
    day: "19",
    month: "Abril",
    title: "Meditacion: Codigos Divinos",
    location: "Online",
    time: "7:00 PM - 9:00 PM",
    badge: "Online",
  },
  {
    day: "26",
    month: "Abril",
    title: "Awakening in Amor: Xanga DMT",
    location: "Miami, FL",
    time: "10:00 AM - 4:00 PM",
    badge: null,
  },
]

export function CalendarPreview() {
  const { ref, isInView } = useInView()

  return (
    <section ref={ref} className="bg-cream-warm py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          className={`mb-16 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="section-label mb-4 block">Proximas experiencias</span>
          <h2 className="font-serif font-light text-charcoal">
            Ritual del <em className="italic">mes</em> &mdash;
          </h2>
        </div>

        {/* Events as horizontal rows separated by thin lines */}
        <div className="divide-y divide-charcoal/10">
          {events.map((event, index) => (
            <article
              key={event.title}
              className={`py-8 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-center transition-all duration-700 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              {/* Date */}
              <div className="md:col-span-2 flex items-baseline gap-2">
                <span className="font-serif text-4xl text-charcoal font-light">
                  {event.day}
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-olive font-medium">
                  {event.month}
                </span>
              </div>

              {/* Title + Badge */}
              <div className="md:col-span-5">
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="font-serif text-xl text-charcoal">
                    {event.title}
                  </h3>
                  {event.badge && (
                    <span className="text-[10px] uppercase tracking-[0.15em] text-olive font-medium">
                      {event.badge}
                    </span>
                  )}
                </div>
              </div>

              {/* Location + Time */}
              <div className="md:col-span-3 text-sm text-charcoal/60">
                {event.location} &middot; {event.time}
              </div>

              {/* Action */}
              <div className="md:col-span-2 md:text-right">
                <Link href="/calendario" className="btn-outline text-xs py-2 px-4">
                  Reservar
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div
          className={`mt-16 transition-all duration-700 delay-400 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Link href="/calendario" className="btn-outline">
            Ver calendario completo &rarr;
          </Link>
        </div>
      </div>
    </section>
  )
}
