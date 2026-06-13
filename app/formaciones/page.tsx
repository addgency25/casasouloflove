import { PageHero } from "@/components/page-hero"
import Link from "next/link"

export const metadata = {
  title: "Formaciones | Conviértete en Facilitador - Casa Soul of Love",
  description:
    "Workshops y formaciones para quienes desean profundizar en su práctica espiritual o convertirse en facilitadores.",
}

const workshops = [
  {
    id: "maestro",
    label: "Workshop Intensivo",
    name: "Descubre el Maestro que hay en Ti",
    description: "Un workshop intensivo diseñado para despertar tu poder interior y conectar con la sabiduría que ya habita en ti. A través de meditaciones guiadas, ejercicios de autoindagación y dinámicas grupales, explorarás las dimensiones más profundas de tu ser.",
    details: "4 horas · Presencial/Online · Abierto a todos",
    buttonText: "Reservar mi lugar",
    buttonHref: "/calendario",
  },
  {
    id: "rape",
    label: "Workshop Presencial",
    name: "Sacred Rapé Facilitator Training",
    description: "El Rapé es una medicina sagrada de la tradición amazónica que ha sido utilizada por pueblos indígenas durante milenios. En esta formación aprenderás a sostener este espacio sagrado con respeto y profesionalismo. Incluye certificación y primer kit de medicina.",
    details: "3 horas · Presencial · Material + Medicina incluido",
    buttonText: "Más información",
    buttonHref: "https://wa.me/1234567890?text=Hola%2C%20me%20interesa%20la%20formaci%C3%B3n%20de%20Facilitador%20de%20Rap%C3%A9",
  },
]

export default function FormacionesPage() {
  return (
    <>
      <PageHero
        label="Aprende y comparte"
        title="Formaciones"
        height="h-[50vh]"
      />

      {/* Workshops - Alternating layout */}
      {workshops.map((workshop, index) => (
        <section
          key={workshop.id}
          id={workshop.id}
          className={index % 2 === 0 ? "bg-cream py-24 lg:py-32" : "bg-cream-warm py-24 lg:py-32"}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Visual Header - alternating sides */}
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className={`aspect-[4/3] ${index === 0 ? "bg-sage" : "bg-burgundy"} p-8 lg:p-12 flex flex-col justify-end`}>
                  <span className="text-cream/60 text-[10px] uppercase tracking-[0.2em] mb-2">
                    {workshop.label}
                  </span>
                  <h3 className="font-serif text-2xl lg:text-3xl text-cream leading-tight">
                    {workshop.name}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <span className="section-label mb-4 block">{workshop.label}</span>
                <h2 className="font-serif font-light text-charcoal mb-6">
                  {workshop.name.split(" ").slice(0, -1).join(" ")}{" "}
                  <em className="italic">{workshop.name.split(" ").slice(-1)}</em> &mdash;
                </h2>
                <p className="text-charcoal/70 leading-relaxed mb-8">
                  {workshop.description}
                </p>

                {/* Details */}
                <div className="mb-10 text-sm text-charcoal/60">
                  {workshop.details}
                </div>

                <Link
                  href={workshop.buttonHref}
                  className="btn-outline"
                  {...(workshop.buttonHref.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  {workshop.buttonText} &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="bg-forest py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif font-light text-cream text-3xl mb-6">
            ¿Tienes preguntas sobre las <em className="italic">formaciones</em>?
          </h2>
          <p className="text-cream/60 mb-10 max-w-xl mx-auto">
            Cada camino de formación es único. Si sientes el llamado pero tienes dudas sobre cuál es el paso correcto para ti, escríbeme y lo exploramos juntos.
          </p>
          <a
            href="https://wa.me/1234567890?text=Hola%2C%20tengo%20preguntas%20sobre%20las%20formaciones"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-light"
          >
            Hablar con Norge &rarr;
          </a>
        </div>
      </section>
    </>
  )
}
