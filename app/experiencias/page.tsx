import { PageHero } from "@/components/page-hero"
import Link from "next/link"

export const metadata = {
  title: "Experiencias | Ceremonias y Meditaciones en Casa Soul of Love",
  description:
    "Descubre nuestras ceremonias con plantas de poder y meditaciones presenciales y online guiadas por Norge en Miami, FL.",
}

const WHATSAPP_LINK = "https://wa.me/1XXXXXXXXXX"

type Ceremony = {
  label: string
  title: string
  subtitle: string | null
  image?: string
  imageRotate?: boolean
  queEs: string
  queEsExtra?: { text: string; italic?: boolean }[]
  incluye?: string[]
  esperar: string[]
  esperarIntro?: string
  note?: string
  idealPara?: string[]
  accentLine?: string | string[]
  finalNote?: string
  details: string
}

const plantasDePoder: Ceremony[] = [
  {
    label: "Microdosis",
    title: "Microdosis Mushroom Meditation",
    subtitle: null,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/b1fe8f02-e187-47f5-bd5a-50a6f25b8c4c%20%282%29-Bq2aw0AbF2Jj8dPORslUEW8Ag57ZMj.jpg",
    queEs:
      "Una meditación guiada con dosis suaves, enfocada en la presencia, la sensibilidad y la conexión consciente. Su enfoque se basa en abrir la percepción de manera sutil, mejorar la conexión emocional y el bienestar sin alterar el estado.",
    incluye: [
      "0.5 g de psilocibina — se escoge el tipo de hongo dependiendo de la necesidad de la persona",
      "Ritual de rapé para centrar, calmar y bajar la bulla de los pensamientos",
      "Meditación guiada",
      "Sonidos terapéuticos",
      "Acompañamiento cercano de Norge",
    ],
    esperar: [
      "Relajación profunda, presencia, alivio",
      "Claridad mental",
      "Respuestas internas sutiles",
      "Sensación de conexión nunca antes experimentada",
      "Calma emocional",
    ],
    note: "No es una ceremonia expansiva. Es un espacio contenido y consciente para acercarte con suavidad.",
    idealPara: [
      'Personas con curiosidad pero con miedo a "ir muy profundo"',
      "Quienes buscan relajarse, reconectar y sentir estas herramientas naturales de poder con suavidad",
      "Quienes desean comenzar su camino con suavidad",
    ],
    details: "2-3 horas · Presencial Miami · Grupal o individual",
  },
  {
    label: "Macrodosis",
    title: "Macrodosis Mushroom Meditation",
    subtitle: null,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4531%20%281%29-Gw7mirHRfQskzW9SX1NpefUaJejd3t.jpg",
    queEs:
      "Una experiencia meditativa profunda, guiada y contenida, diseñada para explorar estados expandidos de conciencia en ceremonia de larga duración. Apunta a la introspección, la apertura emocional, la percepción ampliada y el contacto con capas más profundas del sentir.",
    incluye: [
      "Dosis personalizada de psilocibina, desde 2 gramos hasta 10 gramos",
      "Ritual de rapé para abrir el espacio y recibir en calma este viaje a tu interior",
      "Preparación e intención consciente",
      "Meditación guiada",
      "Sonido terapéutico",
      "Acompañamiento cercano durante todo el proceso",
      "Integración y cierre consciente",
    ],
    esperar: [
      "Expansión emocional",
      "Liberación profunda",
      "Comprensiones claras y cambios de percepción de vida",
      "Reconexión con tu esencia, visiones de otras dimensiones o espacios",
      "Apertura del corazón",
    ],
    note: "Cada viaje es único. Yo sostengo el espacio para que puedas entregarte con confianza, sintiéndote protegido y amado.",
    idealPara: [
      "Personas que estén listas para ir bien profundo y sostener una gran expansión de conciencia — esto es un antes y un después",
      "Procesos de transición por pérdidas, o búsqueda de superar traumas de esta vida, ancestrales o de vidas pasadas",
      "Quienes desean transformación real, no solo relajación — aquí no es para escapar, es recordar, sentir y sanar",
    ],
    accentLine: "Si estás lista/o para cruzar el umbral, este es el portal.",
    details: "5-8 horas · Presencial Miami · Entrevista previa requerida",
  },
  {
    label: "Limpieza Energética",
    title: "Limpieza y Balance —",
    subtitle: null,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC00271.JPG-BC01b6qlIXqOnf4BjU7rkdnKyn9TSd.jpeg",
    queEs:
      "Una experiencia integral de renovación e higiene espiritual. Es equilibrio interno — muchas personas describen la sensación como si se quitaran kilos de emociones acumuladas. Sin llevarte tan lejos, te trae de vuelta a la presencia, y desde ese silencio, vuelves a tomar tu fuerza.",
    incluye: [
      "Rapé (abuelo tabaco y otras plantas pulverizadas)",
      "Meditación guiada",
      "Sound Healing con cuencos de cristal y sonidos chamánicos",
    ],
    esperar: [
      "Presencia real de tu cuerpo, mente y alma",
      "Silencio mental profundo",
      "Enraizamiento",
      "Claridad emocional",
      "Sensación de empoderamiento",
      "Alivio físico y energético",
    ],
    accentLine: [
      "Entras con ruido, sales con claridad. Entras preocupado, sales más liviano.",
      "No hay visiones como en otras medicinas. Si llegan, son un regalo, no la intención. A esta planta la llaman la mensajera, por abrir canales al calmar la mente y conectar con la sabiduría universal creadora.",
    ],
    idealPara: [
      "Personas con ansiedad o exceso de pensamientos",
      "Momentos de decisión",
      "Antes de un cambio importante",
      "Como preparación para otras ceremonias",
    ],
    details: "2-3 horas · Presencial Miami · Grupal o individual",
  },
  {
    label: "Ceremonia Sagrada",
    title: "Awakening in Amor: Sacred Plants Xanga DMT",
    subtitle: null,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC_0302-qoEURKMeSHa5lmLeRMrpWqbDnAB6u5.jpg",
    imageRotate: true,
    queEs:
      "Una ceremonia guiada con plantas sagradas utilizadas como herramientas de conexión con el astral y nuevas dimensiones. Un viaje de apertura del corazón, expansión de conciencia y conexión espiritual. Apertura profunda del 3er ojo para ver y sentir más allá de esta realidad.",
    queEsExtra: [
      {
        text: "Xanga es una medicina de viaje corto, pero de profundidad inmensa. Es femenina. Amorosa. Envolvente. Trabaja a través de la glándula pineal, activando tu propio DMT de forma inmediata — por eso el viaje es directo y concentrado. Esta molécula y ese estado de alivio quedará activa en ti de 20 a 30 días dependiendo de tus hábitos.",
        italic: true,
      },
      {
        text: "Aunque activa el tercer ojo y te expande la visión y el propósito de vida, su verdadera fuerza está en el corazón y en hacerte sentir con certeza que lo más importante es el amor propio.",
      },
    ],
    incluye: [
      "Ritual de rapé para balancear las energías y entrar con más valentía al encuentro con la grandeza de la existencia y de tu alma",
      "Meditación guiada para tener más claridad sobre tu intención",
      "Acompañamiento constante de Norge durante el viaje",
    ],
    esperarIntro: "Es una experiencia intensa, pero sostenida con cuidado, respeto y Amor.",
    esperar: [
      "Apertura profunda del corazón",
      "Amor propio",
      "Bienestar físico, emocional y mental",
      "Visiones de ancestros, ángeles o dimensiones internas",
      "Reconocimiento de otras versiones de ti",
    ],
    idealPara: [
      "Personas que están pasando por procesos emocionales profundos",
      "Tránsitos de duelos",
      "Respuestas a las preguntas del alma que no se encuentran en libros",
      "Baja autoestima",
      "Quienes buscan propósito de vida",
      "Si quieres cambios de perspectiva de la vida",
    ],
    details: "2-3 horas · Presencial Miami · Entrevista previa requerida",
  },
  {
    label: "Experiencia Avanzada",
    label: "Experiencia Avanzada",
    title: "Samadhi (La Aya Mexicana) DMT & IMAO",
    subtitle: "Medicina Visionaria de Profundidad",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0205-X5HhHl67JLC4LcBOZsURdlTvuHhy4K.jpg",
    queEs:
      "Samadhi es una experiencia ceremonial de larga duración. Se recibe en cápsulas y el viaje puede extenderse por horas. Contiene moléculas similares a la Ayahuasca.",
    queEsExtra: [
      {
        text: "Es una medicina de presencia constante: silenciosa, contemplativa y profundamente reveladora. Es un proceso sostenido entre conciencia, mente, corazón y espíritu. Samadhi trabaja en capas internas, permitiendo que emerjan comprensiones que antes parecían confusas o difíciles.",
      },
    ],
    incluye: [
      "Día completo de ceremonia",
      "Ritual de rapé para limpieza y centrado",
      "Meditación de intención",
      "Acompañamiento continuo durante todo el proceso",
      "Espacio seguro y contención",
    ],
    esperar: [
      "Conexión espiritual profunda",
      "Sensación de guía o presencia sutil de entidades celestiales",
      "Visiones reveladoras",
      "Silencio interno claro",
      "Entendimientos que continúan días después",
      "Nueva perspectiva sobre situaciones personales",
    ],
    idealPara: [
      "Personas que buscan respuestas profundas en situaciones emocionales",
      "Procesos de transformación interna significativa",
      "Quienes están listas/os para una expansión de conciencia sostenida",
      "Momentos de transición o búsqueda espiritual seria",
    ],
    finalNote: "Requiere preparación y entrevista previa.",
    details: "6-10 horas · Presencial Miami · Entrevista previa requerida",
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
                        {ceremony.image ? (
                          ceremony.imageRotate ? (
                            <img
                              src={ceremony.image || "/placeholder.svg"}
                              alt={ceremony.title}
                              className="absolute top-1/2 left-1/2 object-cover"
                              style={{
                                width: "75%",
                                height: "133.333%",
                                objectPosition: "center center",
                                transform: "translate(-50%, -50%) rotate(-90deg)",
                              }}
                            />
                          ) : (
                            <img
                              src={ceremony.image || "/placeholder.svg"}
                              alt={ceremony.title}
                              className="absolute inset-0 w-full h-full object-cover"
                              style={{ objectPosition: "center center" }}
                            />
                          )
                        ) : (
                          <span className="font-serif italic text-cream/10 text-3xl lg:text-4xl text-center text-balance leading-tight">
                            {ceremony.title}
                          </span>
                        )}
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
                        <p className="font-serif italic text-olive text-lg mt-1">
                          {ceremony.subtitle}
                        </p>
                      )}

                      <div className="mt-6">
                        <h4 className="text-xs uppercase tracking-[0.15em] text-charcoal/40 mb-2">¿Qué es?</h4>
                        <p className="text-charcoal/70 leading-relaxed">{ceremony.queEs}</p>
                        {ceremony.queEsExtra?.map((para) => (
                          <p
                            key={para.text}
                            className={
                              para.italic
                                ? "font-serif italic text-charcoal/60 leading-relaxed mt-4"
                                : "text-charcoal/70 leading-relaxed mt-4"
                            }
                          >
                            {para.text}
                          </p>
                        ))}
                      </div>

                      {ceremony.incluye && (
                        <div className="mb-6 mt-6">
                          <h4 className="font-serif italic text-olive text-[1.1rem] mb-3">¿Qué incluye?</h4>
                          <ul className="flex flex-col gap-2">
                            {ceremony.incluye.map((item) => (
                              <li key={item} className="flex gap-3 text-charcoal/70 leading-relaxed">
                                <span className="text-olive shrink-0">&rarr;</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <div className="mb-6 mt-6">
                        <h4 className={ceremony.incluye ? "font-serif italic text-olive text-[1.1rem] mb-3" : "text-xs uppercase tracking-[0.15em] text-charcoal/40 mb-3"}>
                          {ceremony.incluye ? "¿Qué puedes experimentar?" : "¿Qué puedes esperar?"}
                        </h4>
                        {ceremony.esperarIntro && (
                          <p className="font-serif italic text-charcoal/60 leading-relaxed mb-3">
                            {ceremony.esperarIntro}
                          </p>
                        )}
                        <ul className="flex flex-col gap-2">
                          {ceremony.esperar.map((item) => (
                            <li key={item} className="flex gap-3 text-charcoal/70 leading-relaxed">
                              <span className="text-olive shrink-0">&rarr;</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {ceremony.note && (
                        <p className="font-serif italic text-charcoal/50 text-sm leading-relaxed mb-6">
                          {ceremony.note}
                        </p>
                      )}

                      {ceremony.idealPara && (
                        <div className="mb-6">
                          <h4 className="font-serif italic text-olive text-[1.1rem] mb-3">Ideal para:</h4>
                          <ul className="flex flex-col gap-2">
                            {ceremony.idealPara.map((item) => (
                              <li key={item} className="flex gap-3 text-charcoal/70 leading-relaxed">
                                <span className="text-olive shrink-0">&rarr;</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {ceremony.accentLine &&
                        (Array.isArray(ceremony.accentLine) ? ceremony.accentLine : [ceremony.accentLine]).map(
                          (line) => (
                            <p
                              key={line}
                              className="font-serif italic text-olive text-[1.1rem] leading-relaxed mb-6"
                            >
                              {line}
                            </p>
                          ),
                        )}

                      {ceremony.finalNote && (
                        <p className="font-serif italic text-charcoal/60 leading-relaxed mb-6">
                          {ceremony.finalNote}
                        </p>
                      )}

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
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
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
