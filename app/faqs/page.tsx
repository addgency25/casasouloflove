import { PageHero } from "@/components/page-hero"
import { FAQAccordion } from "@/components/faq-accordion"

export const metadata = {
  title: "Preguntas Frecuentes | Casa Soul of Love",
  description:
    "Encuentra respuestas a las preguntas más comunes sobre ceremonias, meditaciones, productos y logística de Casa Soul of Love.",
}

const ceremoniasQuestions = [
  {
    question: "¿Es seguro participar en las ceremonias?",
    answer: "Absolutamente. Norge cuenta con más de 8 años de experiencia facilitando ceremonias y cada participante pasa por un proceso de evaluación previo. Tu seguridad física, emocional y espiritual es nuestra prioridad absoluta.",
  },
  {
    question: "¿Necesito tener experiencia previa?",
    answer: "No es necesario. Ofrecemos experiencias para todos los niveles, desde meditaciones suaves con microdosis hasta ceremonias profundas. Norge te guiará en elegir la experiencia más adecuada para ti.",
  },
  {
    question: "¿Cómo me preparo para una ceremonia?",
    answer: "Recibirás una guía completa de preparación que incluye recomendaciones de alimentación, prácticas de introspección y pautas para los días previos. También tendrás una conversación con Norge para establecer tu intención.",
  },
  {
    question: "¿Las ceremonias son individuales o grupales?",
    answer: "Ofrecemos ambas modalidades. Las ceremonias grupales son en grupos muy reducidos (máximo 6 personas). También ofrecemos ceremonias individuales para quienes prefieren un espacio completamente privado.",
  },
]

const meditacionesQuestions = [
  {
    question: "¿Son efectivas las meditaciones online?",
    answer: "Absolutamente. Las meditaciones online están diseñadas específicamente para el formato virtual, utilizando técnicas de guía que funcionan perfectamente a través de Zoom.",
  },
  {
    question: "¿Qué necesito para participar en una meditación online?",
    answer: "Solo necesitas una conexión estable a internet, un espacio tranquilo donde no serás interrumpido, auriculares de buena calidad, y disposición para conectar contigo mismo.",
  },
]

const mushroomQuestions = [
  {
    question: "¿Puedo comprar productos Mushroom Universe sin acompañamiento?",
    answer: "No. Todos nuestros productos ceremoniales se ofrecen exclusivamente bajo protocolo privado con acompañamiento personalizado de Norge. Creemos que la medicina merece ser tratada con respeto y responsabilidad.",
  },
  {
    question: "¿Qué incluye el acompañamiento de los productos?",
    answer: "Cada producto incluye: evaluación previa, guía de uso personalizada, sesión de orientación con Norge, y acceso a nuestra comunidad de integración.",
  },
]

const formacionesQuestions = [
  {
    question: "¿Recibo alguna certificación al completar las formaciones?",
    answer: "Sí. Al completar la formación de Facilitador de Rapé recibes un certificado de Casa Soul of Love. El workshop Descubre el Maestro en Ti incluye un certificado de participación.",
  },
]

const logisticaQuestions = [
  {
    question: "¿Dónde se realizan las experiencias presenciales?",
    answer: "Todas las experiencias presenciales se realizan en un espacio sagrado privado en Miami, Florida. La dirección exacta se comparte únicamente con participantes confirmados.",
  },
  {
    question: "¿Qué métodos de pago aceptan?",
    answer: "Aceptamos transferencias bancarias, Zelle, PayPal y efectivo. Para experiencias de mayor valor ofrecemos planes de pago flexibles.",
  },
  {
    question: "¿Cuál es la política de cancelación?",
    answer: "Las cancelaciones con más de 7 días de anticipación reciben reembolso completo. Con 3-7 días, se puede reprogramar. Menos de 3 días, se ofrece crédito para una experiencia futura.",
  },
]

export default function FAQsPage() {
  return (
    <>
      <PageHero
        label="Resolvemos tus dudas"
        title="Preguntas Frecuentes"
        height="h-[50vh]"
      />

      {/* FAQ Sections */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="max-w-2xl mx-auto px-6 lg:px-8">
          <FAQAccordion categoryTitle="Sobre las Ceremonias" items={ceremoniasQuestions} />
          <div className="mt-8">
            <FAQAccordion categoryTitle="Sobre las Meditaciones" items={meditacionesQuestions} />
          </div>
          <div className="mt-8">
            <FAQAccordion categoryTitle="Sobre Mushroom Universe" items={mushroomQuestions} />
          </div>
          <div className="mt-8">
            <FAQAccordion categoryTitle="Sobre Formaciones" items={formacionesQuestions} />
          </div>
          <div className="mt-8">
            <FAQAccordion categoryTitle="Logística & Pagos" items={logisticaQuestions} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-forest py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif font-light text-cream text-3xl mb-6">
            ¿Tienes más <em className="italic">preguntas</em>?
          </h2>
          <p className="text-cream/60 mb-10 max-w-xl mx-auto">
            Si no encontraste la respuesta que buscabas, no dudes en escribirme. Estoy aquí para acompañarte en cada paso.
          </p>
          <a
            href="https://wa.me/1234567890?text=Hola%20Norge%2C%20tengo%20una%20pregunta"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-light"
          >
            Escribirme por WhatsApp &rarr;
          </a>
        </div>
      </section>
    </>
  )
}
