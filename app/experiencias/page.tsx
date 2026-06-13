import { PageHero } from "@/components/page-hero"
import Link from "next/link"

export const metadata = {
  title: "Experiencias | Ceremonias y Meditaciones en Casa Soul of Love",
  description:
    "Descubre nuestras ceremonias con plantas de poder y meditaciones presenciales y online guiadas por Norge en Miami, FL.",
}

const plantasDePoder = [
  {
    title: "Microdosis Mushroom Meditation",
    description: "Sesión de meditación profunda con microdosis de psilocibina. Perfecta para principiantes.",
    details: "3 horas · Presencial · Grupal",
  },
  {
    title: "Macrodosis Mushroom: Limpieza y Balance",
    description: "Ceremonia completa de sanación profunda con hongos sagrados. Incluye preparación e integración.",
    details: "8 horas · Presencial · Grupos reducidos",
  },
  {
    title: "Awakening in Amor: Xanga DMT",
    description: "Experiencia sagrada de apertura del corazón con la medicina del sapo.",
    details: "6 horas · Presencial · Individual/Grupal",
  },
  {
    title: "Samadhi DMT — Aya Mexicana",
    description: "Viaje profundo hacia estados expandidos de conciencia. Requiere evaluación previa.",
    details: "10 horas · Presencial · Evaluación requerida",
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

      {/* Plantas de Poder - Asymmetric editorial layout */}
      <section id="plantas" className="bg-cream py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <span className="section-label mb-4 block">Ceremonias</span>
            <h2 className="font-serif font-light text-charcoal">
              Plantas de <em className="italic">Poder</em> &mdash;
            </h2>
          </div>

          {/* Asymmetric grid - one large, two medium, one medium */}
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
            {/* Large feature card */}
            <div className="lg:col-span-7 lg:row-span-2">
              <div className="h-full bg-sage p-8 lg:p-12 flex flex-col justify-end min-h-[400px]">
                <span className="section-label-gold mb-4 block">{plantasDePoder[0].details}</span>
                <h3 className="font-serif text-3xl text-cream mb-4">{plantasDePoder[0].title}</h3>
                <p className="text-cream/60 mb-6 max-w-md">{plantasDePoder[0].description}</p>
                <Link href="/calendario" className="btn-outline-light self-start">Reservar &rarr;</Link>
              </div>
            </div>
            
            {/* Two smaller cards */}
            <div className="lg:col-span-5">
              <div className="bg-forest p-8 min-h-[200px] flex flex-col justify-end">
                <span className="text-[10px] uppercase tracking-[0.2em] text-cream/50 mb-2">{plantasDePoder[1].details}</span>
                <h3 className="font-serif text-xl text-cream mb-2">{plantasDePoder[1].title}</h3>
                <p className="text-cream/50 text-sm mb-4">{plantasDePoder[1].description}</p>
                <Link href="/calendario" className="text-gold text-sm hover:text-cream transition-colors">Reservar &rarr;</Link>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="bg-burgundy p-8 min-h-[200px] flex flex-col justify-end">
                <span className="text-[10px] uppercase tracking-[0.2em] text-cream/50 mb-2">{plantasDePoder[2].details}</span>
                <h3 className="font-serif text-xl text-cream mb-2">{plantasDePoder[2].title}</h3>
                <p className="text-cream/50 text-sm mb-4">{plantasDePoder[2].description}</p>
                <Link href="/calendario" className="text-gold text-sm hover:text-cream transition-colors">Reservar &rarr;</Link>
              </div>
            </div>
            
            {/* Fourth card - full width on mobile, partial on desktop */}
            <div className="lg:col-span-6">
              <div className="bg-olive p-8 min-h-[180px] flex flex-col justify-end">
                <span className="text-[10px] uppercase tracking-[0.2em] text-cream/50 mb-2">{plantasDePoder[3].details}</span>
                <h3 className="font-serif text-xl text-cream mb-2">{plantasDePoder[3].title}</h3>
                <p className="text-cream/50 text-sm mb-4">{plantasDePoder[3].description}</p>
                <Link href="/calendario" className="text-gold text-sm hover:text-cream transition-colors">Reservar &rarr;</Link>
              </div>
            </div>
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
            ¿No sabes cuál <em className="italic">elegir</em>?
          </h2>
          <p className="text-cream/60 mb-10 max-w-xl mx-auto">
            Cada persona es única y cada momento pide una experiencia diferente. Escríbeme y juntos encontraremos la experiencia perfecta para ti.
          </p>
          <a
            href="https://wa.me/1234567890?text=Hola%20Norge%2C%20necesito%20ayuda%20para%20elegir%20una%20experiencia"
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
