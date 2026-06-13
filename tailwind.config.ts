import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "forest-deep": "#394021",
        "forest-dark": "#2d3319",
        "olive-warm": "#918551",
        "sage-green": "#62755f",
        "sand-warm": "#c19f7c",
        "terracotta": "#ce854e",
        "burgundy": "#92483b",
        "gold-soft": "#ebcc93",
        "teal-mist": "#9fc6c5",
        "cream": "#faf6f0",
        "cream-warm": "#f5efe5",
        "white-soft": "#fefdfb",
        "charcoal": "#2a2a25",
        "text-dark": "#3a3a35",
        "text-muted": "#7a7a70",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Cormorant Garamond", "serif"],
        sans: ["var(--font-montserrat)", "Montserrat", "sans-serif"],
      },
      fontSize: {
        "h1": "clamp(2.5rem, 5vw, 4.5rem)",
        "h2": "clamp(2rem, 4vw, 3.2rem)",
      },
      lineHeight: {
        "tight": "1.1",
        "body": "1.75",
      },
      letterSpacing: {
        "label": "0.25em",
      },
      borderRadius: {
        "2xl": "16px",
        "full": "50px",
      },
      boxShadow: {
        "card": "0 1px 3px rgba(0,0,0,0.08)",
        "card-hover": "0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "pulse-line": "pulseLine 2s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(25px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseLine: {
          "0%, 100%": { opacity: "0.3", transform: "scaleY(1)" },
          "50%": { opacity: "1", transform: "scaleY(1.2)" },
        },
      },
    },
  },
  plugins: [],
}

export default config
