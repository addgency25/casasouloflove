import { PageHero } from "@/components/page-hero"
import Link from "next/link"

export const metadata = {
  title: "Casa Soul of Love | Nuestro Propósito, Norge y Equipo",
  description:
    "Conoce el corazón de Casa Soul of Love, nuestra fundadora Norge, y el equipo de facilitadores dedicados a tu transformación.",
}

const teamMembers = [
  { name: "Norge", role: "Guía · Fundadora", initial: "N" },
  { name: "Reiki Master", role: "Sanación Energética", initial: "R" },
  { name: "Astrólogo", role: "Carta Natal · Tránsitos", initial: "A" },
  { name: "Kambo", role: "Medicina Ancestral", initial: "K" },
]

const values = [
  { star: true, title: "Tradiciones ancestrales" },
  { star: true, title: "Máxima seguridad" },
  { star: true, title: "Acompañamiento profesional" },
]

export default function CasaPage() {
  return (
    <>
      <PageHero
        label="El corazón del sitio"
        title="Casa Soul of Love"
        subtitle="Bienvenido a un espacio donde cada alma es recibida con amor incondicional."
        height="h-[50vh]"
      />

      {/* Nuestro Propósito */}
      <section id="proposito" className="bg-cream py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Asymmetric layout with overlapping images */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left: Overlapping images */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[3/4] bg-sage w-[80%]">
                <span className="absolute inset-0 flex items-center justify-center text-cream/40 text-xs uppercase tracking-widest">
                  Sacred Space
                </span>
              </div>
              <div className="absolute -bottom-8 -right-4 lg:right-0 w-[50%] aspect-square bg-olive">
                <span className="absolute inset-0 flex items-center justify-center text-cream/40 text-xs uppercase tracking-widest">
                  Detail
                </span>
              </div>
            </div>

            {/* Right: Content */}
            <div className="lg:col-span-7 lg:pl-8 pt-8 lg:pt-12">
              <span className="section-label mb-4 block">Nuestro Propósito</span>
              <h2 className="font-serif font-light text-charcoal mb-8">
                ¿Qué es Casa Soul of <em className="italic">Love</em>? &mdash;
              </h2>
              <div className="space-y-5 text-charcoal/70 leading-[1.8] mb-10 max-w-xl">
                <p>
                  Casa Soul of Love es más que un espacio físico; es un santuario donde las almas vienen a recordar su verdadera naturaleza. Aquí, creemos que la sanación no es un destino, sino un viaje de regreso a ti mismo.
                </p>
                <p>
                  Nuestra filosofía se basa en la integración de tradiciones ancestrales con enfoques contemporáneos de bienestar. Cada ceremonia, cada meditación, cada encuentro está diseñado para crear un puente entre la sabiduría antigua y tu vida moderna.
                </p>
                <p>
                  En este espacio sagrado, el amor es la medicina principal. Te acompañamos con profesionalismo, seguridad y una profunda comprensión de que cada ser humano lleva dentro la capacidad de transformarse.
                </p>
              </div>

              {/* Values as text blocks with stars */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 pt-8 border-t border-charcoal/10">
                {values.map((value) => (
                  <div key={value.title} className="flex items-center gap-2">
                    <span className="text-gold text-sm">&#10038;</span>
                    <span className="text-[11px] uppercase tracking-[0.2em] text-charcoal font-medium">
                      {value.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Soy Norge */}
      <section id="norge" className="bg-cream-warm py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            {/* Content */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <span className="section-label mb-4 block">La Guía</span>
              <h2 className="font-serif font-light text-charcoal mb-8">
                Soy <em className="italic">Norge</em> &mdash;
              </h2>
              
              {/* Quote with thin left border */}
              <blockquote className="border-l border-olive pl-6 mb-10">
                <p className="font-serif text-xl lg:text-2xl text-charcoal italic leading-relaxed">
                  &ldquo;Mi propósito es crear un espacio donde puedas sentirte lo suficientemente seguro para soltar, lo suficientemente amado para abrirte y lo suficientemente acompañado para transformarte.&rdquo;
                </p>
              </blockquote>

              <div className="space-y-5 text-charcoal/70 leading-[1.8] mb-10 max-w-xl">
                <p>
                  Mi camino hacia la facilitación de ceremonias comenzó hace más de 8 años, cuando experimenté mi propia transformación profunda. Desde entonces, he dedicado mi vida a crear espacios seguros donde otros puedan vivir su propia sanación.
                </p>
                <p>
                  Hasta ahora, he tenido el honor de acompañar a más de 500 almas en su proceso de transformación. Cada una me ha enseñado algo nuevo sobre la profundidad del ser humano.
                </p>
              </div>
              
              <Link href="/calendario" className="btn-outline">
                Agendar una experiencia &rarr;
              </Link>
            </div>

            {/* Portrait image - bleeding to edge */}
            <div className="lg:col-span-5 order-1 lg:order-2">
              <div className="aspect-[3/4] bg-terracotta lg:-mr-8">
                <span className="h-full flex items-center justify-center text-cream/40 text-xs uppercase tracking-widest">
                  Portrait of Norge
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CSL Friends */}
      <section id="friends" className="bg-forest py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-label-gold mb-4 block">El Equipo</span>
            <h2 className="font-serif font-light text-cream">
              Casa Soul of Love <em className="italic">Friends</em> &mdash;
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {teamMembers.map((member) => (
              <div key={member.name} className="text-center">
                {/* Circular avatar */}
                <div className="w-20 h-20 mx-auto rounded-full bg-cream/10 border border-cream/20 flex items-center justify-center mb-4">
                  <span className="text-cream text-2xl font-serif font-light">
                    {member.initial}
                  </span>
                </div>
                <h3 className="font-serif text-xl text-cream mb-1">
                  {member.name}
                </h3>
                <p className="text-[10px] uppercase tracking-[0.2em] text-cream/50 font-medium mb-5">
                  {member.role}
                </p>
                <Link href="/calendario" className="btn-outline-light text-xs py-2 px-4">
                  Saber más
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
