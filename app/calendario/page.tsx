"use client"

import { PageHero } from "@/components/page-hero"
import { useState } from "react"
import Link from "next/link"

const filters = ["Todos", "Ceremonias", "Meditaciones", "Formaciones", "Online"]

const events = [
  {
    day: "5",
    weekday: "Sab",
    title: "Microdosis Mushroom Meditation",
    location: "Miami, FL",
    time: "10:00 AM - 1:00 PM",
    badge: "Ceremonia",
    category: "Ceremonias",
  },
  {
    day: "12",
    weekday: "Sab",
    title: "Macrodosis Mushroom: Limpieza y Balance",
    location: "Miami, FL",
    time: "9:00 AM - 6:00 PM",
    badge: "Cupos limitados",
    category: "Ceremonias",
  },
  {
    day: "15",
    weekday: "Mar",
    title: "Codigos Divinos",
    location: "Online",
    time: "7:00 PM - 9:00 PM",
    badge: "Online",
    category: "Online",
  },
  {
    day: "19",
    weekday: "Sab",
    title: "Chakra Balance",
    location: "Miami, FL",
    time: "4:00 PM - 7:00 PM",
    badge: "Meditacion",
    category: "Meditaciones",
  },
  {
    day: "26",
    weekday: "Sab",
    title: "Awakening in Amor: Xanga DMT",
    location: "Miami, FL",
    time: "10:00 AM - 4:00 PM",
    badge: "Ceremonia",
    category: "Ceremonias",
  },
]

export default function CalendarioPage() {
  const [activeFilter, setActiveFilter] = useState("Todos")

  const filteredEvents =
    activeFilter === "Todos"
      ? events
      : events.filter((event) => event.category === activeFilter)

  return (
    <>
      <PageHero
        label="Proximas experiencias"
        title="Calendario"
        height="h-[50vh]"
      />

      {/* Filter Bar */}
      <section className="bg-cream-warm py-6 border-b border-charcoal/5">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 text-sm transition-all ${
                  activeFilter === filter
                    ? "text-charcoal border-b-2 border-charcoal font-medium"
                    : "text-charcoal/50 hover:text-charcoal"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Events List */}
      <section className="bg-cream py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          {/* Month Header */}
          <div className="flex items-center justify-between mb-12">
            <h2 className="font-serif text-3xl text-charcoal">Abril 2026</h2>
            <div className="flex items-center gap-4 text-sm text-charcoal/50">
              <button className="hover:text-charcoal transition-colors">
                &larr; Anterior
              </button>
              <button className="hover:text-charcoal transition-colors">
                Siguiente &rarr;
              </button>
            </div>
          </div>

          {/* Events - Horizontal rows with thin borders */}
          <div className="divide-y divide-charcoal/10">
            {filteredEvents.map((event, index) => (
              <article
                key={index}
                className="py-8 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-center"
              >
                {/* Date */}
                <div className="md:col-span-2 flex items-baseline gap-2">
                  <span className="font-serif text-4xl text-charcoal font-light">
                    {event.day}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-olive font-medium">
                    {event.weekday}
                  </span>
                </div>

                {/* Title + Badge */}
                <div className="md:col-span-5">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="font-serif text-xl text-charcoal">
                      {event.title}
                    </h3>
                    <span className="text-[10px] uppercase tracking-[0.15em] text-olive font-medium">
                      {event.badge}
                    </span>
                  </div>
                </div>

                {/* Location + Time */}
                <div className="md:col-span-3 text-sm text-charcoal/60">
                  {event.location} &middot; {event.time}
                </div>

                {/* Action */}
                <div className="md:col-span-2 md:text-right">
                  <Link href="https://wa.me/1234567890" className="btn-outline text-xs py-2 px-4">
                    Reservar
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-16">
              <p className="text-charcoal/50">
                No hay eventos disponibles en esta categoria este mes.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
