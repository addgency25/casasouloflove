"use client"

import { useState, useEffect } from "react"

export function LeadPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem("csl-popup-seen")
    if (hasSeenPopup) return

    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 6000)

    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => {
    setIsVisible(false)
    sessionStorage.setItem("csl-popup-seen", "true")
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ name, email })
    handleClose()
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Overlay - black at 50% with blur */}
      <div
        className="absolute inset-0 backdrop-blur-sm"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        onClick={handleClose}
      />

      {/* Modal - white background, sharp corners */}
      <div 
        className="relative shadow-2xl max-w-sm w-full overflow-hidden rounded-sm"
        style={{ backgroundColor: "#fefdfb" }}
      >
        {/* Close button - positioned over forest section, white color */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center text-white/80 hover:text-white transition-colors text-2xl font-light"
          aria-label="Cerrar"
        >
          &times;
        </button>

        {/* Header - Forest green background */}
        <div 
          className="relative px-8 py-12 text-center"
          style={{ backgroundColor: "#394021" }}
        >
          {/* Large 15% in gold */}
          <span 
            className="font-serif text-7xl font-light block"
            style={{ color: "#ebcc93" }}
          >
            15%
          </span>
          {/* Main text in white */}
          <p className="text-white text-lg mt-3 font-light">
            de descuento en tu primera experiencia
          </p>
          {/* Subtitle in white at 60% opacity */}
          <p className="text-sm mt-2" style={{ color: "rgba(255, 255, 255, 0.6)" }}>
            Ceremonias · Meditaciones · Mushroom Universe
          </p>
        </div>

        {/* Form section - white background */}
        <div className="px-8 py-8" style={{ backgroundColor: "#fefdfb" }}>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name input */}
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Tu nombre"
              required
              className="w-full px-4 py-3 text-sm outline-none transition-all focus:ring-1"
              style={{ 
                backgroundColor: "#faf6f0",
                border: "1px solid rgba(57, 64, 33, 0.2)",
                color: "#2a2a25",
              }}
            />
            {/* Email input */}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Tu email"
              required
              className="w-full px-4 py-3 text-sm outline-none transition-all focus:ring-1"
              style={{ 
                backgroundColor: "#faf6f0",
                border: "1px solid rgba(57, 64, 33, 0.2)",
                color: "#2a2a25",
              }}
            />
            {/* Submit button - solid forest background, white text */}
            <button
              type="submit"
              className="w-full py-3.5 text-sm font-medium tracking-wide uppercase transition-all hover:opacity-90"
              style={{
                backgroundColor: "#394021",
                color: "#ffffff",
              }}
            >
              Quiero mi descuento
            </button>
          </form>
          {/* No thanks link - muted gray */}
          <button
            onClick={handleClose}
            className="w-full text-center mt-5 text-sm hover:opacity-70 transition-opacity"
            style={{ color: "#7a7a70" }}
          >
            No, gracias
          </button>
        </div>
      </div>
    </div>
  )
}
