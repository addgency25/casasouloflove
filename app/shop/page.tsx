import { PageHero } from "@/components/page-hero"
import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "Shop | Ama-Té y Gift Cards - Casa Soul of Love",
  description:
    "Descubre nuestra línea de tés ceremoniales Ama-Té y regala experiencias transformadoras con nuestras Gift Cards.",
}

const giftCardAmounts = ["$50", "$100", "$150", "$200"]

export default function ShopPage() {
  return (
    <>
      <PageHero
        label="Productos conscientes"
        title="Shop"
        height="h-[50vh]"
      />

      {/* Ama-Té Hero Intro */}
      <section id="amate" className="bg-cream py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <span 
            className="text-[11px] uppercase tracking-[0.25em] mb-4 block"
            style={{ color: "#918551" }}
          >
            AMA-TÉ
          </span>
          <h2 
            className="font-serif font-light text-3xl lg:text-4xl mb-6"
            style={{ color: "#394021" }}
          >
            Infusionado con amor, creado para volver al corazón —
          </h2>
          <p className="text-charcoal/70 leading-relaxed max-w-2xl mx-auto mb-12">
            Un ritual suave que envuelve, calma y recuerda que eres amor, eres suficiente, eres hogar. Elaborado con intención en Casa Soul of Love.
          </p>

          {/* Norge Banner Image - Fixed height and positioning */}
          <div className="relative w-full rounded-sm overflow-hidden" style={{ height: "400px" }}>
            <Image
              src="/images/shop/amate-norge-tent.jpg"
              alt="Norge meditando frente a la tienda ceremonial"
              fill
              className="object-cover"
              style={{ objectPosition: "center 30%" }}
            />
            {/* Subtle warm overlay */}
            <div 
              className="absolute inset-0"
              style={{ backgroundColor: "rgba(57, 64, 33, 0.05)" }}
            />
          </div>
        </div>
      </section>

      {/* Ingredients Section - Clean, no floating images */}
      <section className="bg-cream-warm py-20">
        <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center">
          <span 
            className="font-serif italic block mb-6"
            style={{ fontSize: "1.2rem", color: "#918551" }}
          >
            Ingredientes
          </span>
          <p 
            className="text-charcoal/60 leading-relaxed"
            style={{ fontSize: "0.88rem" }}
          >
            Té verde Sencha japonés · Rooibos verde sudafricano · Hierba limón (lemongrass) · Jazmín · Pétalos de rosa · Lavanda · Flor de guisante azul (Butterfly Pea Flower) · Lichee · Escaramujo (rose hips) · Hoja de stevia orgánica
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="bg-cream py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 space-y-24">
          
          {/* Ama-Té Box - Image Left, Text Right */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div className="relative aspect-square rounded-sm overflow-hidden">
              <Image
                src="/images/shop/amate-hands.jpg"
                alt="Ama-Té Box sostenido en manos"
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div>
              <h3 
                className="font-serif text-2xl lg:text-3xl mb-2"
                style={{ color: "#394021" }}
              >
                Ama-Té Box — Ritual Completo
              </h3>
              <p 
                className="text-sm mb-8"
                style={{ color: "#918551" }}
              >
                Rinde 15 tazas
              </p>

              {/* Items list with small images inline */}
              <div className="mb-10 space-y-3">
                <div 
                  className="py-3 flex items-center justify-between"
                  style={{ borderBottom: "1px solid rgba(57, 64, 33, 0.1)" }}
                >
                  <span className="text-charcoal/70 text-sm">Ama-Té Box | Rinde 15 tazas</span>
                </div>
                <div 
                  className="py-3 flex items-center justify-between gap-4"
                  style={{ borderBottom: "1px solid rgba(57, 64, 33, 0.1)" }}
                >
                  <span className="text-charcoal/70 text-sm">Taza infusor exclusiva Ama-Té</span>
                  <div className="relative w-[60px] h-[60px] rounded-sm overflow-hidden flex-shrink-0">
                    <Image
                      src="/images/shop/amate-teacup.jpg"
                      alt="Taza infusor"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div 
                  className="py-3 flex items-center justify-between gap-4"
                  style={{ borderBottom: "1px solid rgba(57, 64, 33, 0.1)" }}
                >
                  <span className="text-charcoal/70 text-sm">Incienso aromático</span>
                  <div className="relative w-[60px] h-[60px] rounded-sm overflow-hidden flex-shrink-0">
                    <Image
                      src="/images/shop/amate-incense.jpg"
                      alt="Incienso aromático"
                      fill
                      className="object-cover"
                      style={{ objectPosition: "center bottom" }}
                    />
                  </div>
                </div>
                <div className="py-3">
                  <span className="text-charcoal/70 text-sm">Meditación guiada para hacer en casa</span>
                </div>
              </div>

              <a
                href="https://wa.me/1234567890?text=Hola%2C%20me%20gustar%C3%ADa%20comprar%20el%20Ama-T%C3%A9%20Box"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 border text-sm uppercase tracking-widest transition-all hover:bg-forest hover:text-cream hover:border-forest"
                style={{ borderColor: "#394021", color: "#394021" }}
              >
                Comprar →
              </a>
            </div>
          </div>

          {/* Refill Pack - Text Left, Image Right */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <div className="order-2 lg:order-1">
              <h3 
                className="font-serif text-2xl lg:text-3xl mb-4"
                style={{ color: "#394021" }}
              >
                Refill Pack
              </h3>
              <p className="text-charcoal/70 leading-relaxed mb-8">
                Recarga perfecta para tu box. Rinde 15 tazas.
              </p>

              <a
                href="https://wa.me/1234567890?text=Hola%2C%20me%20gustar%C3%ADa%20comprar%20el%20Refill%20Pack"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 border text-sm uppercase tracking-widest transition-all hover:bg-forest hover:text-cream hover:border-forest"
                style={{ borderColor: "#394021", color: "#394021" }}
              >
                Comprar →
              </a>
            </div>

            {/* Image - Same aspect ratio as Ama-Té Box for balance */}
            <div className="relative aspect-square rounded-sm overflow-hidden order-1 lg:order-2">
              <Image
                src="/images/shop/amate-refill.jpg"
                alt="Refill Pack de Ama-Té con té a granel"
                fill
                className="object-cover"
                style={{ objectPosition: "center center" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gift Cards Section */}
      <section id="giftcards" className="bg-cream-warm py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Designed Gift Card Visual */}
            <div className="flex items-center justify-center">
              <div 
                className="relative rounded-md shadow-xl overflow-hidden"
                style={{
                  aspectRatio: "16 / 10",
                  width: "100%",
                  maxWidth: "360px",
                  background: "linear-gradient(135deg, #394021 0%, #4a5530 100%)",
                  border: "1px solid rgba(235, 204, 147, 0.2)",
                }}
              >
                {/* Gold glow effect in top-right */}
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: "radial-gradient(circle at 90% 10%, rgba(235, 204, 147, 0.08) 0%, transparent 50%)",
                  }}
                />
                
                {/* Horizontal decorative line at 60% */}
                <div 
                  className="absolute left-0 right-0 h-px"
                  style={{
                    top: "60%",
                    backgroundColor: "rgba(235, 204, 147, 0.15)",
                  }}
                />
                
                {/* Top-left: Logo */}
                <div className="absolute top-4 left-4">
                  <img
                    src="/images/logo-white.png"
                    alt="Casa Soul of Love"
                    style={{ width: "100px", height: "auto" }}
                  />
                </div>
                
                {/* Bottom-left: GIFT CARD text */}
                <div 
                  className="absolute bottom-4 left-4 uppercase"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "0.7rem",
                    letterSpacing: "0.25em",
                    color: "#ebcc93",
                  }}
                >
                  Gift Card
                </div>
                
                {/* Bottom-right: Amount */}
                <div 
                  className="absolute bottom-4 right-4 font-serif italic"
                  style={{
                    fontSize: "2rem",
                    color: "#ebcc93",
                  }}
                >
                  $100
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="section-label mb-4 block">Regala transformación</span>
              <h2 className="font-serif font-light text-charcoal mb-6">
                Gift <em className="italic">Cards</em> —
              </h2>
              <p className="text-charcoal/70 leading-relaxed mb-4">
                ¿Conoces a alguien que se beneficiaría de una experiencia en Casa Soul of Love? Nuestras Gift Cards son el regalo perfecto para quienes amas.
              </p>
              <p className="text-charcoal/70 leading-relaxed mb-8">
                Cada Gift Card es personalizable y puede usarse para cualquier experiencia, producto o formación.
              </p>

              {/* Available Amounts */}
              <div className="mb-10">
                <p className="text-[11px] uppercase tracking-[0.2em] text-charcoal font-medium mb-4">
                  Montos disponibles:
                </p>
                <div className="flex flex-wrap gap-3">
                  {giftCardAmounts.map((amount) => (
                    <span key={amount} className="px-4 py-2 border border-charcoal/20 text-sm text-charcoal">
                      {amount}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href="https://wa.me/1234567890?text=Hola%2C%20me%20gustar%C3%ADa%20comprar%20una%20Gift%20Card"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                Personalizar mi Gift Card →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-forest py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif font-light text-cream text-3xl mb-6">
            ¿Buscas los productos Mushroom <em className="italic">Universe</em>?
          </h2>
          <p className="text-cream/60 mb-10 max-w-xl mx-auto">
            Nuestros productos ceremoniales con psilocibina requieren una evaluación previa y acompañamiento personalizado.
          </p>
          <Link href="/mushroom" className="btn-outline-light">
            Ir a Mushroom Universe →
          </Link>
        </div>
      </section>
    </>
  )
}
