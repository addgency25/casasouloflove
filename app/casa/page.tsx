import { PageHero } from "@/components/page-hero"
import Link from "next/link"

export const metadata = {
  title: "Casa Soul of Love | Nuestro Propósito, Norge y Equipo",
  description:
    "Conoce el corazón de Casa Soul of Love, nuestra fundadora Norge, y el equipo de facilitadores dedicados a tu transformación.",
}

const WHATSAPP_LINK = "https://wa.me/1XXXXXXXXXX"

const friends = [
  {
    image: "/images/friends/reiki.png",
    imageAlt: "Cuerpo de chakras con cristales de sanación dispuestos sobre una figura dibujada",
    label: "Reiki · Terapia Energética",
    name: "Carolina Roland",
    subtitle: null,
    title: "Terapeuta Holística",
    description:
      "Acompaño a personas en su camino de bienestar, creando un espacio seguro para reconectar con su esencia, liberar bloqueos y abrirse a procesos de transformación consciente. A través de terapias energéticas que integran mente, cuerpo y espíritu, facilito experiencias orientadas a restaurar el equilibrio y la armonía interior. En mis sesiones también utilizo códigos y símbolos canalizados, con frecuencias sutiles destinadas a apoyar procesos de sanación, alineación y expansión de la conciencia.",
    services: [
      "Reiki",
      "Terapia Aykana (sanación cuántica integrativa)",
      "Sanación Tameana",
      "Barras de Access",
    ],
    format: "Sesiones por Zoom y presencial en Casa Soul of Love",
  },
  {
    image: "/images/friends/carta-astral.png",
    imageAlt: "Carta astral natal con dados zodiacales, cristales y una pluma fuente",
    label: "Astrología · Carta Natal",
    name: "Marianela Bornacelli",
    subtitle: null,
    title: "Acompañamiento Astrológico",
    description:
      "La luz y la guía de la Astrología para una mayor comprensión e integración de tus movimientos, de tu camino, de tu historia de vida y de tu momento presente.",
    services: [
      "Sesión de Carta Natal — 2 horas donde honramos la totalidad de tu Ser. Incluye guía del oráculo en apertura y cierre.",
      "Sesión de Tránsitos — 90 minutos para informar, potenciar y enraizar tu momento presente.",
    ],
    format: "Sesiones por Zoom",
  },
  {
    image: "/images/friends/tarot.png",
    imageAlt: "Manos sosteniendo un mazo de cartas de tarot sobre una mesa con amatista",
    label: "Tarot · Constelaciones Familiares",
    name: "Tatiana Arroyave",
    subtitle: "Magia Amarilla",
    title:
      "Tarotista y Terapeuta Holística · Especialista en Constelaciones Familiares Sistémicas",
    description:
      "Acompaño procesos de sanación profunda para liberar patrones, memorias y heridas que impactan tu presente. Mi trabajo integra lo terapéutico y lo energético para ayudarte a reconectar con tu poder personal y transformar tu historia desde la raíz.",
    services: [
      "Constelaciones Familiares Sistémicas — Sesión de 2.5 horas para sanar conflictos repetitivos, traumas de infancia, patrones en relaciones, dinero o trabajo, duelos y posible origen emocional de enfermedades.",
      "Lectura de Tarot Espiritual — Visión general de tu presente (espiritual, emocional, romántico, físico, financiero) + 1 hora de preguntas libres.",
    ],
    format: "Sesiones por Zoom y presencial en Casa Soul of Love",
  },
  {
    image: "/images/friends/amazonas.png",
    imageAlt: "Vista aérea de un río serpenteante en la selva amazónica",
    label: "Kambo · Medicina Amazónica",
    name: "Rox",
    subtitle: null,
    title: "Facilitadora de Kambo",
    description:
      "Ritual ancestral amazónico que utiliza la secreción del sapo Phyllomedusa bicolor aplicada en pequeños puntos sobre la piel. Una experiencia de purificación profunda del cuerpo físico y energético, guiada con respeto por la tradición.",
    services: ["Ceremonia de Kambo"],
    format: "Presencial",
  },
  {
    image: "/images/friends/bufo.png",
    imageAlt: "Dos sapos del desierto de Sonora (Bufo Alvarius) junto a una roca",
    label: "Bufo Alvarius · 5-MeO-DMT",
    name: "Mily",
    subtitle: null,
    title: "Facilitadora de Bufo Alvarius",
    description:
      "Secreción del sapo del desierto de Sonora que contiene 5-MeO-DMT. Una de las experiencias más intensas y breves de expansión de conciencia, facilitada en un espacio seguro y ceremonial.",
    services: ["Ceremonia de Bufo Alvarius"],
    format: "Presencial",
  },
  {
    image: "/images/friends/ayahuasca.png",
    imageAlt: "Manos sosteniendo corteza de ayahuasca con una hoja verde y una taza de medicina",
    label: "Ayahuasca · Tradición Shipibo",
    name: "María Camila Betancur",
    subtitle: null,
    title: "Fundadora y Ministra de The Hive Entheogenic Church, Texas",
    description:
      "Nacida y criada en Colombia, su camino ha sido profundamente influenciado por las tradiciones espirituales de la Amazonía. Su relación con la Ayahuasca se ha cultivado a lo largo de años de práctica ceremonial y aprendizaje dentro de la tradición Shipibo, donde fue adoptada por una familia que la acogió en sus enseñanzas, guiándola en las formas de la ceremonia, la oración y el respeto profundo por la medicina.",
    services: ["Ceremonia de Ayahuasca"],
    format: "Presencial en Texas o Casa Soul of Love",
  },
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
                  Guía de experiencias visionarias y expansión de conciencia, camino conscientemente en este sendero espiritual desde el año 2008. He guiado a más de 3.000 personas en experiencias que requieren presencia, responsabilidad y sostén real, creando espacios sagrados donde el estado del SER se vuelve posible.
                </p>
                <p>
                  Mi trabajo integra rituales, meditación y la sabiduría de plantas ancestrales de poder, siempre enraizado en la presencia, el amor, la sutileza y el respeto por cada proceso.
                </p>
                <p>
                  Creo profundamente que la verdadera sanación comienza cuando regresamos al cuerpo, cuando abrimos el corazón, sentimos y recordamos que ya somos completos.
                </p>
                <p>
                  No guío para que dependan de mí. Guío para que vuelvan a su propia verdad, autenticidad y amor propio.
                </p>
                <p>
                  Sostengo espacios donde la suavidad es fuerza y la claridad es poder. Y esto nace de la experiencia, la práctica y el respeto por cada experiencia que comparto.
                </p>
              </div>
              
              <Link href="/experiencias" className="btn-outline">
                Explorar experiencias &rarr;
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
          {/* Header */}
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <span className="section-label-gold mb-4 block">CSL Friends</span>
            <h2 className="font-serif font-light text-cream">
              Casa Soul of Love <em className="italic">Friends</em> &mdash;
            </h2>
            <p className="text-cream/60 leading-relaxed mt-6">
              Nuestros Friends son terapeutas y facilitadores independientes que comparten la visión de Casa Soul of Love. No forman parte del equipo &mdash; son aliados de confianza a quienes puedes acceder por referencia directa de Norge. Cada uno ha sido cuidadosamente seleccionado por su integridad, profesionalismo y amor por el servicio.
            </p>
          </div>

          {/* Decorative cactus accent */}
          <div className="flex justify-center mb-16 lg:mb-20">
            <img
              src="/images/friends/cactus.png"
              alt="Cactus de San Pedro en flor"
              className="w-[150px] h-[150px] object-cover rounded-full opacity-85"
            />
          </div>

          {/* Practitioner profiles */}
          <div className="flex flex-col">
            {friends.map((friend, index) => {
              const imageLeft = index % 2 === 0
              return (
                <div key={friend.name}>
                  {index > 0 && (
                    <div className="h-px bg-cream/10 my-14 lg:my-20" />
                  )}
                  <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    {/* Image */}
                    <div
                      className={`lg:col-span-5 ${imageLeft ? "lg:order-1" : "lg:order-2"}`}
                    >
                      <div className="aspect-[3/4] rounded-sm overflow-hidden bg-sage">
                        <img
                          src={friend.image || "/placeholder.svg"}
                          alt={friend.imageAlt}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Text */}
                    <div
                      className={`lg:col-span-7 ${imageLeft ? "lg:order-2" : "lg:order-1"}`}
                    >
                      <span className="text-[10px] uppercase tracking-[0.2em] text-gold font-medium mb-4 block">
                        {friend.label}
                      </span>
                      <h3 className="font-serif font-light text-cream text-3xl lg:text-4xl leading-tight">
                        {friend.name}
                      </h3>
                      {friend.subtitle && (
                        <p className="font-serif italic text-gold/80 text-lg mt-1">
                          {friend.subtitle}
                        </p>
                      )}
                      <p className="text-cream/50 italic mt-3 leading-relaxed">
                        {friend.title}
                      </p>

                      <p className="text-cream/70 leading-[1.8] mt-6 max-w-xl">
                        {friend.description}
                      </p>

                      <ul className="flex flex-col gap-3 mt-6 max-w-xl">
                        {friend.services.map((service) => (
                          <li key={service} className="flex gap-3 text-cream/70 leading-relaxed">
                            <span className="text-gold shrink-0">&rarr;</span>
                            <span>{service}</span>
                          </li>
                        ))}
                      </ul>

                      <p className="text-[11px] uppercase tracking-[0.15em] text-cream/40 mt-6">
                        {friend.format}
                      </p>

                      <div className="mt-7">
                        <a
                          href={WHATSAPP_LINK}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-outline-light"
                        >
                          Agendar sesión &rarr;
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Important note */}
          <div className="mt-20 lg:mt-24 max-w-2xl mx-auto">
            <div className="border border-cream/15 rounded-sm px-6 py-6 text-center">
              <p className="text-cream/50 text-sm leading-relaxed">
                Los CSL Friends son profesionales independientes. Casa Soul of Love facilita la conexión y el espacio, pero cada terapeuta es responsable de su propia práctica. Para agendar, Norge te referirá personalmente.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
