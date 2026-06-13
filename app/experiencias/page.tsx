import { PageHero } from "@/components/page-hero"
import Link from "next/link"

export const metadata = {
  title: "Experiencias | Ceremonias y Meditaciones en Casa Soul of Love",
  description:
    "Descubre nuestras ceremonias con plantas de poder y meditaciones presenciales y online guiadas por Norge en Miami, FL.",
}

const WHATSAPP_LINK = "https://wa.me/1XXXXXXXXXX"

const plantasDePoder = [
  {
    label: "Microdosis",
    title: "Microdosis Mushroom Meditation",
    subtitle: null,
    queEs:
      "Sesiones de meditación guiada potenciadas con microdosis de psilocibina. Una experiencia sutil pero profunda que te permite acceder a estados expandidos de conciencia mientras mantienes total claridad y presencia.",
    esperar: [
      "Claridad mental y conexión profunda contigo mismo",
      "Meditación guiada por Norge en un espacio íntimo y seguro",
      "Integración y reflexión al cierre de la sesión",
      "Un estado de apertura suave, sin perder el control",
    ],
    details: "2-3 horas · Presencial Miami · Máx. 8 personas",
  },
  {
    label: "Macrodosis",
    title: "Macrodosis Mushroom: Limpieza y Balance",
    subtitle: null,
    queEs:
      "Ceremonia de sanación profunda con dosis completas de psilocibina. Un viaje interior de limpieza emocional y reequilibrio energético, facilitado por Norge en un ambiente seguro, sagrado y completamente sostenido.",
    esperar: [
      "Una experiencia transformadora de soltar lo que ya no sirve",
      "Acompañamiento profesional durante todo el proceso",
      "Música ceremonial, aromaterapia y contención amorosa",
      "Sesión de integración posterior incluida",
    ],
    details: "5-6 horas · Presencial Miami · Evaluación previa requerida",
  },
  {
    label: "Ceremonia Sagrada",
    title: "Awakening in Amor: Xanga DMT",
    subtitle: null,
    queEs:
      "Ceremonia de apertura del corazón con Xanga (Rapé + DMT). Una experiencia intensa y breve que te conecta con el amor incondicional y la conciencia expandida. El viaje dura minutos pero su impacto resuena por semanas.",
    esperar: [
      "Una apertura profunda del centro del corazón",
      "Visiones, claridad y conexión con tu esencia más pura",
      "Acompañamiento total de Norge durante todo el proceso",
      "Un antes y un después en tu camino espiritual",
    ],
    details: "2-3 horas · Presencial Miami · Evaluación previa requerida",
  },
  {
    label: "Experiencia Avanzada",
    title: "Samadhi DMT",
    subtitle: "Aya Mexicana",
    queEs:
      "La experiencia más profunda de Casa Soul of Love. Samadhi utiliza DMT en formato de Ayahuasca Mexicana, ofreciendo un viaje de disolución del ego y reconexión con la fuente. Reservada para quienes ya han transitado experiencias previas con plantas de poder.",
    esperar: [
      "Disolución temporal del ego y expansión total de conciencia",
      "Encuentro profundo con tu ser esencial",
      "Espacio ceremonial sagrado con música y guía constante",
      "Integración extendida con Norge post-ceremonia",
    ],
    details: "6-8 horas · Presencial Miami · Experiencia previa requerida",
  },
]

const meditacionesPresenciales = [
  { title: "Awakening in Evolution", subtitle: "inHarmony", description: "Experiencia multisensorial que combina vibraciones sonoras con meditación guiada." },
  { title: "Spiritual Festivities", subtitle: "Celebración", description: "Ceremonias especiales para fechas significativas: solsticios, equinoccios y lunas llenas." },
  { title: "Energy Bodies Balance", subtitle: "Equilibrio", description: "Meditación enfocada en limpiar y equilibrar tus cuerpos sutiles y campo áurico." },
  { title: "Chakra Balance", subtitle: "Alineación", description: "Trabajo profundo con los 7 chakras principales para restaurar el flujo de energía vital." },
]

const meditacionesOnline = [
  { title: "Códigos Divinos", description: "Activa frecuencias de luz y expande tu conciencia desde la comodidad de tu hogar." },
  { title: "Energy Bodies Balance", description: "Versión online de nuestra popular meditación de equilibrio energético." },
  { title: "Chakra Balance", description: "Trabaja tus centros energéticos desde casa con guía en tiempo real." },
]

export default function ExperienciasPage() {
  return (
    <>
      <PageHero
        label="Transformación guiada"
        title="Experiencias"
        height="h-[50vh]"
      />

      {/* Plantas de Poder - Immersive alternating sections */}
      <section id="plantas" className="bg-cream py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-20 text-center max-w-2xl mx-auto">
            <span className="section-label mb-4 block">Ceremonias</span>
            <h2 className="font-serif font-light text-charcoal">
              Plantas de <em className="italic">Poder</em> &mdash;
            </h2>
            <p className="text-charcoal/60 mt-6 leading-relaxed">
              Cada ceremonia es un viaje único de sanación y expansión, sostenido con amor y profesionalismo por Norge en un espacio sagrado y seguro.
            </p>
          </div>

          <div className="space-y-20 lg:space-y-28">
            {plantasDePoder.map((ceremony, index) => {
              const imageLeft = index % 2 === 0
              return (
                <div key={ceremony.title}>
                  <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    {/* Image area */}
                    <div className={imageLeft ? "lg:order-1" : "lg:order-2"}>
                      <div className="relative aspect-[4/3] rounded-sm overflow-hidden bg-forest flex items-center justify-center p-8">
                        <span className="font-serif italic text-cream/10 text-3xl lg:text-4xl text-center text-balance leading-tight">
                          {ceremony.title}
                        </span>
                      </div>
                    </div>

                    {/* Text area */}
                    <div className={imageLeft ? "lg:order-2" : "lg:order-1"}>
                      <span className="text-[11px] uppercase tracking-[0.25em] text-olive font-medium mb-4 block">
                        {ceremony.label}
                      </span>
                      <h3 className="font-serif font-light text-charcoal text-3xl lg:text-4xl leading-tight">
                        {ceremony.title} &mdash;
                      </h3>
                      {ceremony.subtitle && (
                        <p className="font-serif italic text-charcoal/50 text-lg mt-1">
                          {ceremony.subtitle}
                        </p>
                      )}

                      <div className="mt-6">
                        <h4 className="text-xs uppercase tracking-[0.15em] text-charcoal/40 mb-2">¿Qué es?</h4>
                        <p className="text-charcoal/70 leading-relaxed">{ceremony.queEs}</p>
                      </div>

                      <div className="mt-6">
                        <h4 className="text-xs uppercase tracking-[0.15em] text-charcoal/40 mb-3">¿Qué puedes esperar?</h4>
                        <ul className="flex flex-col gap-2">
                          {ceremony.esperar.map((item) => (
                            <li key={item} className="flex gap-3 text-charcoal/70 leading-relaxed">
                              <span className="text-olive shrink-0">&rarr;</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <p className="mt-6 text-sm text-charcoal/50">{ceremony.details}</p>

                      <div className="mt-6">
                        <a
                          href={WHATSAPP_LINK}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-outline"
                        >
                          Reservar por WhatsApp &rarr;
                        </a>
                        <p className="text-[0.7rem] text-charcoal/40 mt-2">Disponible grupal o individual</p>
                      </div>
                    </div>
                  </div>

                  {/* Divider between ceremonies */}
                  {index < plantasDePoder.length - 1 && (
                    <div className="mx-auto max-w-xs h-px mt-20 lg:mt-28" style={{ backgroundColor: "rgba(57, 64, 33, 0.1)" }} />
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Meditaciones Presenciales - Forest background with list layout */}
      <section id="presenciales" className="bg-forest py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-label-gold mb-4 block">En persona</span>
            <h2 className="font-serif font-light text-cream">
              Meditaciones <em className="italic">Presenciales</em> &mdash;
            </h2>
          </div>

          {/* Simple list layout */}
          <div className="space-y-8">
            {meditacionesPresenciales.map((meditation) => (
              <div key={meditation.title} className="flex items-start gap-4">
                <span className="text-gold text-sm mt-1">&#10038;</span>
                <div className="flex-1">
                  <h3 className="font-serif text-xl text-cream mb-1">
                    {meditation.title}
                  </h3>
                  <p className="text-cream/50 text-sm mb-3">
                    {meditation.description}
                  </p>
                  <Link href="/calendario" className="text-gold text-sm hover:text-cream transition-colors">
                    Ver fechas &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meditaciones Online */}
      <section id="online" className="bg-cream-warm py-24 lg:py-32">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <span className="section-label mb-4 block">Desde cualquier lugar</span>
            <h2 className="font-serif font-light text-charcoal">
              Meditaciones <em className="italic">Online</em> &mdash;
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {meditacionesOnline.map((meditation) => (
              <div key={meditation.title}>
                <span className="text-[10px] uppercase tracking-[0.15em] text-olive font-medium mb-3 block">
                  Online · Zoom
                </span>
                <h3 className="font-serif text-xl text-charcoal mb-3">
                  {meditation.title}
                </h3>
                <p className="text-charcoal/60 text-sm leading-relaxed mb-4">
                  {meditation.description}
                </p>
                <Link href="/calendario" className="btn-outline text-xs py-2 px-4">
                  Reservar &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-forest">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif font-light text-cream text-3xl lg:text-4xl mb-6">
            ¿No sabes cuál es la <em className="italic">experiencia</em> para ti?
          </h2>
          <p className="text-cream/60 mb-10 max-w-xl mx-auto">
            Cada persona y cada momento son únicos. Norge te guiará para encontrar la ceremonia perfecta según donde estés en tu camino.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-light"
          >
            Hablar con Norge por WhatsApp &rarr;
          </a>
        </div>
      </section>
    </>
  )
}
