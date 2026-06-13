import type { Metadata, Viewport } from "next"
import { Cormorant_Garamond, Montserrat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Casa Soul of Love | Ceremonias y Meditaciones en Miami",
  description:
    "Espacio sagrado de transformación, ceremonias de plantas de poder y expansión de conciencia en Miami, FL. Guiado por Norge con amor, seguridad y acompañamiento profesional.",
  keywords: [
    "ceremonias Miami",
    "plantas de poder",
    "meditación guiada",
    "expansión de conciencia",
    "medicina ancestral",
    "retiros espirituales",
  ],
  authors: [{ name: "Casa Soul of Love" }],
  openGraph: {
    title: "Casa Soul of Love | Ceremonias y Meditaciones en Miami",
    description:
      "Espacio sagrado de transformación, ceremonias de plantas de poder y expansión de conciencia en Miami, FL.",
    type: "website",
    locale: "es_ES",
  },
}

export const viewport: Viewport = {
  themeColor: "#394021",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" data-scroll-behavior="smooth" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body className="font-sans antialiased overflow-x-hidden">
        <Navbar />
        <main className="overflow-x-hidden">{children}</main>
        <Footer />
        <WhatsAppFloat />
        <Analytics />
      </body>
    </html>
  )
}
