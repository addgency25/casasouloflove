interface PageHeroProps {
  label?: string
  title: string
  titleItalic?: string
  subtitle?: string
  height?: string
}

export function PageHero({
  label,
  title,
  titleItalic,
  subtitle,
  height = "h-[50vh]",
}: PageHeroProps) {
  return (
    <section className={`relative ${height} flex items-center justify-center bg-forest overflow-hidden`}>
      {/* Image placeholder - solid forest color representing where photo would go */}
      <div className="absolute inset-0 bg-gradient-to-b from-forest-dark/50 to-forest" />

      <div className="relative z-10 text-center px-6 py-32 md:py-40 max-w-4xl mx-auto">
        {label && (
          <span className="section-label-gold mb-4 block">
            {label}
          </span>
        )}
        <h1 className="font-serif font-light text-cream text-balance">
          {title}
          {titleItalic && <em className="italic"> {titleItalic}</em>}
          {" "}&mdash;
        </h1>
        {subtitle && (
          <p className="text-cream/60 text-lg max-w-2xl mx-auto leading-relaxed mt-6">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
