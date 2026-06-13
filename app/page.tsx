import { LeadPopup } from "@/components/lead-popup"
import { HeroSection } from "@/components/home/hero-section"
import { ValueProposition } from "@/components/home/value-proposition"
import { ThreePathways } from "@/components/home/three-pathways"
import { CalendarPreview } from "@/components/home/calendar-preview"
import { LeadMagnetSection } from "@/components/home/lead-magnet-section"
import { TestimonialsPreview } from "@/components/home/testimonials-preview"
import { MushroomHighlight } from "@/components/home/mushroom-highlight"
import { AmateHighlight } from "@/components/home/amate-highlight"
import { QuickFAQ } from "@/components/home/quick-faq"

export default function HomePage() {
  return (
    <>
      <LeadPopup />
      <HeroSection />
      <ValueProposition />
      <ThreePathways />
      <CalendarPreview />
      <LeadMagnetSection />
      <AmateHighlight />
      <MushroomHighlight />
      <TestimonialsPreview />
      <QuickFAQ />
    </>
  )
}
