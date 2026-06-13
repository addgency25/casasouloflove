"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const menuItems = [
  { label: "Home", href: "/" },
  {
    label: "La Casa",
    href: "/casa",
    dropdown: [
      { label: "Nuestro Proposito", href: "/casa#proposito" },
      { label: "Soy Norge", href: "/casa#norge" },
      { label: "CSL Friends", href: "/casa#friends" },
    ],
  },
  {
    label: "Experiencias",
    href: "/experiencias",
    dropdown: [
      { type: "label", label: "Ceremonias" },
      { label: "Plantas de Poder", href: "/experiencias#plantas" },
      { type: "separator" },
      { type: "label", label: "Meditaciones" },
      { label: "Presenciales", href: "/experiencias#presenciales" },
      { label: "Online", href: "/experiencias#online" },
      { type: "separator" },
      { label: "Retreats", href: "/retreats", labelStyle: true },
    ],
  },
  {
    label: "Mushroom",
    href: "/mushroom",
    dropdown: [
      { label: "Elixir de Amor", href: "/mushroom#elixir" },
      { label: "Protocolo At Home", href: "/mushroom#protocolo" },
      { label: "ChocoLove", href: "/mushroom#chocolove" },
    ],
  },
  {
    label: "Formaciones",
    href: "/formaciones",
    dropdown: [
      { label: "Descubre el Maestro en Ti", href: "/formaciones#maestro" },
      { label: "Facilitador de Rape", href: "/formaciones#rape" },
    ],
  },
  {
    label: "Shop",
    href: "/shop",
    dropdown: [
      { label: "Ama-Te", href: "/shop#amate" },
      { label: "Gift Cards", href: "/shop#giftcards" },
    ],
  },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const pathname = usePathname()
  const isHome = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Only show transparent nav on home page when not scrolled
  const isTransparent = isHome && !isScrolled

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={
        isTransparent 
          ? { 
              backgroundColor: "rgba(57, 64, 33, 0.95)", 
              backdropFilter: "blur(4px)",
              borderBottom: "1px solid rgba(235, 204, 147, 0.1)"
            } 
          : { 
              backgroundColor: "#faf6f0", 
              backdropFilter: "blur(4px)",
              borderBottom: "1px solid rgba(57, 64, 33, 0.08)"
            }
      }
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="relative block flex-shrink-0">
            <img
              src={isTransparent ? "/images/logo-white.png" : "/images/logo-black.png"}
              alt="Casa Soul of Love"
              width="160"
              height="48"
              style={{ height: "48px", width: "auto" }}
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center" style={{ gap: "2rem" }}>
            {menuItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.dropdown && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`whitespace-nowrap inline-flex items-center gap-0.5 font-medium transition-opacity hover:opacity-60 ${
                    isTransparent ? "text-white" : "text-[#2a2a25]"
                  }`}
                  style={{ fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase" }}
                >
                  {item.label}
                  {item.dropdown && (
                    <span style={{ fontSize: "8px", marginLeft: "2px" }}>&#9662;</span>
                  )}
                </Link>

                {/* Dropdown */}
                {item.dropdown && openDropdown === item.label && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
                    <div className="bg-[#fefdfb] border border-[rgba(57,64,33,0.1)] py-3 min-w-[180px] shadow-lg">
                      {item.dropdown.map((subItem, idx) => {
                        if (subItem.type === "label") {
                          return (
                            <div
                              key={idx}
                              className="px-4 py-1.5 font-medium text-[#918551]"
                              style={{ fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase" }}
                            >
                              {subItem.label}
                            </div>
                          )
                        }
                        if (subItem.type === "separator") {
                          return (
                            <div
                              key={idx}
                              className="my-2 mx-4 border-t border-[rgba(57,64,33,0.05)]"
                            />
                          )
                        }
                        return (
                          <Link
                            key={idx}
                            href={subItem.href || "#"}
                            className={
                              subItem.labelStyle
                                ? "block px-4 py-2 font-medium text-[#918551] hover:bg-[#f5efe5] transition-colors"
                                : "block px-4 py-2 text-[#2a2a25] hover:text-[#394021] hover:bg-[#f5efe5] transition-colors"
                            }
                            style={
                              subItem.labelStyle
                                ? { fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase" }
                                : { fontSize: "0.8rem" }
                            }
                          >
                            {subItem.label}
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* CTA Button */}
            <Link
              href="/calendario"
              className={`whitespace-nowrap px-4 py-1.5 font-medium border transition-all ${
                isTransparent 
                  ? "border-white text-white hover:bg-white hover:text-[#394021]" 
                  : "border-[#2a2a25] text-[#2a2a25] hover:bg-[#2a2a25] hover:text-[#faf6f0]"
              }`}
              style={{ fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase" }}
            >
              Calendario
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 ${isTransparent ? "text-white" : "text-[#2a2a25]"}`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="6" y1="18" x2="18" y2="6" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <line x1="4" y1="9" x2="20" y2="9" />
                <line x1="4" y1="15" x2="20" y2="15" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-[#fefdfb] border border-[rgba(57,64,33,0.1)] mt-2 p-6">
            {menuItems.map((item) => (
              <div key={item.label} className="py-2">
                <Link
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2 font-medium text-[#2a2a25] hover:text-[#394021]"
                  style={{ fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase" }}
                >
                  {item.label}
                </Link>
                {item.dropdown && (
                  <div className="pl-4 mt-1 space-y-1">
                    {item.dropdown.map((subItem, idx) => {
                      if (subItem.type === "label") {
                        return (
                          <div
                            key={idx}
                            className="py-1 font-medium text-[#918551]"
                            style={{ fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase" }}
                          >
                            {subItem.label}
                          </div>
                        )
                      }
                      if (subItem.type === "separator") {
                        return (
                          <div
                            key={idx}
                            className="my-1 border-t border-[rgba(57,64,33,0.05)]"
                          />
                        )
                      }
                      return (
                        <Link
                          key={idx}
                          href={subItem.href || "#"}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={
                            subItem.labelStyle
                              ? "block py-1.5 font-medium text-[#918551] hover:text-[#394021]"
                              : "block py-1.5 text-sm text-[#7a7a70] hover:text-[#394021]"
                          }
                          style={
                            subItem.labelStyle
                              ? { fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase" }
                              : undefined
                          }
                        >
                          {subItem.label}
                        </Link>
                      )
                    })}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/calendario"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block mt-4 text-center px-5 py-3 font-medium border border-[#2a2a25] text-[#2a2a25] hover:bg-[#2a2a25] hover:text-[#faf6f0] transition-all w-full"
              style={{ fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase" }}
            >
              Calendario
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
