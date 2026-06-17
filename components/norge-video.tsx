"use client"

import { useState } from "react"
import { Volume2 } from "lucide-react"

export function NorgeVideo() {
  const [withSound, setWithSound] = useState(false)

  const mutedSrc =
    "https://player.vimeo.com/video/1202007848?autoplay=1&loop=1&muted=1&background=1&quality=720p"
  const soundSrc =
    "https://player.vimeo.com/video/1202007848?autoplay=1&loop=1&quality=720p"

  return (
    <div className="relative overflow-hidden rounded-sm bg-terracotta lg:-mr-8 aspect-[9/16] max-h-[400px] mx-auto w-full lg:aspect-[3/4] lg:max-h-none">
      <iframe
        src={withSound ? soundSrc : mutedSrc}
        title="Norge"
        frameBorder="0"
        allow="autoplay; fullscreen"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {!withSound && (
        <button
          type="button"
          onClick={() => setWithSound(true)}
          aria-label="Escuchar con sonido"
          className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-full px-4 py-2 text-xs uppercase tracking-widest text-cream transition-opacity hover:opacity-90"
          style={{ backgroundColor: "rgba(57,64,33,0.8)" }}
        >
          <Volume2 className="h-4 w-4" />
          Escuchar
        </button>
      )}
    </div>
  )
}
