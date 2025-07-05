"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Send } from "lucide-react"
import HBJLogo from "./hbj-logo"
import WhatsAppWidget from "./whatsapp-widget"
import { gsap } from "gsap"

// WhatsApp Icon Component
const WhatsAppIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516z" />
  </svg>
)

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 20)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    // Enhanced header animation with stagger effect
    gsap.fromTo(".top-bar", { y: -50, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" })

    gsap.fromTo(
      ".header-nav",
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.8, ease: "power4.out", delay: 0.2 },
    )

    // Animate logo with scale and rotation
    gsap.fromTo(
      ".logo-container",
      { scale: 0, rotation: -180, opacity: 0 },
      { scale: 1, rotation: 0, opacity: 1, duration: 1.5, ease: "back.out(1.7)", delay: 0.4 },
    )

    // Animate navigation items with wave effect
    gsap.fromTo(
      ".nav-link",
      { y: -40, opacity: 0, rotationX: -90 },
      { y: 0, opacity: 1, rotationX: 0, duration: 1.2, ease: "power3.out", delay: 0.6, stagger: 0.15 },
    )

    // Animate CTA button
    gsap.fromTo(
      ".cta-button",
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, ease: "back.out(1.7)", delay: 1.2 },
    )
  }, [])

  return (
    <>
      {/* Top Mini Header */}
      <div
        className={`top-bar fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          isScrolled
            ? "transform -translate-y-full opacity-0 pointer-events-none"
            : "transform translate-y-0 opacity-100 bg-slate-900/95 backdrop-blur-xl border-b border-white/10 shadow-lg"
        }`}
        style={{
          height: isScrolled ? "0px" : "48px",
          overflow: "hidden",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-12 text-sm">
            {/* Contact Info */}
            <div className="hidden md:flex items-center space-x-8 text-white/90">
              <div className="flex items-center space-x-2 hover:text-amber-400 transition-colors duration-300">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@hbjsyndicate.com">info@hbjsyndicate.com</a>
              </div>
              <div className="flex items-center space-x-2 hover:text-amber-400 transition-colors duration-300">
                <Phone className="h-4 w-4" />
                <a href="tel:+919173922112">+91 9173922112</a>
              </div>
              <div className="flex items-center space-x-2 hover:text-green-400 transition-colors duration-300">
                <WhatsAppIcon className="h-4 w-4 text-green-400" />
                <button
                  onClick={() => setIsWhatsAppOpen(true)}
                  className="hover:text-green-400 transition-colors duration-300"
                >
                  WhatsApp
                </button>
              </div>
              <div className="flex items-center space-x-2 text-white/70">
                <MapPin className="h-4 w-4" />
                <span>Mumbai, India</span>
              </div>
            </div>

            {/* Mobile Contact Info */}
            <div className="flex md:hidden items-center space-x-4 text-white/90 text-xs">
              <div className="flex items-center space-x-1">
                <Mail className="h-3 w-3" />
                <a href="mailto:info@hbjsyndicate.com">info@hbjsyndicate.com</a>
              </div>
              <div className="flex items-center space-x-1">
                <Phone className="h-3 w-3" />
                <a href="tel:+919173922112">+91 9173922112</a>
              </div>
            </div>

            {/* Social Links & Contact Methods */}
            <div className="flex items-center space-x-6">
              <div className="hidden md:flex items-center space-x-4">
                <a
                  href="https://facebook.com/hbjsyndicate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-blue-400 transition-all duration-300 hover:scale-110"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a
                  href="https://twitter.com/hbjsyndicate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-sky-400 transition-all duration-300 hover:scale-110"
                >
                  <Twitter className="h-4 w-4" />
                </a>
                <a
                  href="https://instagram.com/hbjsyndicate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-pink-400 transition-all duration-300 hover:scale-110"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href="https://linkedin.com/company/hbjsyndicate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-blue-500 transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href="https://t.me/hbjsyndicate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-blue-400 transition-all duration-300 hover:scale-110"
                >
                  <Send className="h-4 w-4" />
                </a>
              </div>

              {/* Mobile Social Icons */}
              <div className="flex md:hidden items-center space-x-2">
                <a href="https://facebook.com/hbjsyndicate" className="text-white/70 hover:text-blue-400">
                  <Facebook className="h-3 w-3" />
                </a>
                <a href="https://twitter.com/hbjsyndicate" className="text-white/70 hover:text-sky-400">
                  <Twitter className="h-3 w-3" />
                </a>
                <a href="https://instagram.com/hbjsyndicate" className="text-white/70 hover:text-pink-400">
                  <Instagram className="h-3 w-3" />
                </a>
                <a href="https://linkedin.com/company/hbjsyndicate" className="text-white/70 hover:text-blue-500">
                  <Linkedin className="h-3 w-3" />
                </a>
              </div>

              <div className="text-white/60 text-xs font-medium hidden sm:block">Follow us for updates</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`header-nav fixed left-0 right-0 z-40 transition-all duration-500 ease-out ${
          isScrolled
            ? "top-0 bg-white/98 backdrop-blur-2xl shadow-2xl border-b border-slate-200/30"
            : "bg-white/10 backdrop-blur-2xl border-b border-white/20 shadow-2xl"
        }`}
        style={{
          top: isScrolled ? "0px" : "48px",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="logo-container flex items-center space-x-3 group">
              <div className="relative">
                <HBJLogo className="w-14 h-14 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12" />
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400/30 to-blue-500/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <span
                className={`text-2xl font-display font-bold transition-all duration-500 ${
                  isScrolled
                    ? "bg-gradient-to-r from-slate-900 via-blue-700 to-amber-600 bg-clip-text text-transparent"
                    : "text-white drop-shadow-2xl"
                }`}
              >
                HBJ Syndicate
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/services", label: "Services" },
                { href: "/projects", label: "Projects" },
                { href: "/careers", label: "Careers" },
                { href: "/contact", label: "Contact" },
              ].map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`nav-link transition-all duration-500 relative group font-semibold text-lg ${
                    isScrolled
                      ? "text-slate-800 hover:text-amber-600"
                      : "text-white hover:text-amber-300 drop-shadow-lg"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-2 left-0 w-0 h-0.5 transition-all duration-500 group-hover:w-full ${
                      isScrolled
                        ? "bg-gradient-to-r from-amber-500 to-blue-600"
                        : "bg-gradient-to-r from-amber-300 to-white"
                    }`}
                  ></span>
                  <span
                    className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 scale-110 ${
                      isScrolled ? "bg-gradient-to-r from-amber-500/10 to-blue-600/10" : "bg-white/20 backdrop-blur-sm"
                    }`}
                  ></span>
                </Link>
              ))}
            </nav>

            {/* Contact Info & CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <div
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-500 ${
                  isScrolled
                    ? "text-slate-700 bg-slate-100/80"
                    : "text-white bg-white/20 backdrop-blur-sm border border-white/30"
                }`}
              >
                <Phone className={`h-4 w-4 ${isScrolled ? "text-amber-600" : "text-amber-300"}`} />
                <span className="text-sm font-semibold">9173922112</span>
              </div>
              <Link href="/contact">
                <Button
                  className={`cta-button shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 px-6 py-3 font-semibold ${
                    isScrolled
                      ? "bg-gradient-to-r from-amber-500 via-blue-600 to-slate-800 hover:from-slate-800 hover:via-blue-600 hover:to-amber-500 text-white"
                      : "bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 hover:border-white/50"
                  }`}
                >
                  Get Quote
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`lg:hidden transition-all duration-500 hover:scale-110 p-2 rounded-lg ${
                isScrolled ? "hover:bg-slate-100 text-slate-800" : "hover:bg-white/20 text-white backdrop-blur-sm"
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div
              className={`lg:hidden py-6 border-t rounded-b-2xl shadow-2xl transition-all duration-500 ${
                isScrolled
                  ? "border-slate-200/50 bg-white/98 backdrop-blur-2xl"
                  : "border-white/20 bg-white/10 backdrop-blur-2xl"
              }`}
            >
              <nav className="flex flex-col space-y-4">
                {[
                  { href: "/", label: "Home" },
                  { href: "/about", label: "About" },
                  { href: "/services", label: "Services" },
                  { href: "/projects", label: "Projects" },
                  { href: "/careers", label: "Careers" },
                  { href: "/contact", label: "Contact" },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`transition-colors duration-500 py-3 px-4 rounded-lg text-lg font-semibold ${
                      isScrolled
                        ? "text-slate-800 hover:text-amber-600 hover:bg-slate-50"
                        : "text-white hover:text-amber-300 hover:bg-white/20"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className={`pt-4 border-t ${isScrolled ? "border-slate-200" : "border-white/20"}`}>
                  <div
                    className={`flex items-center space-x-2 px-4 mb-4 py-2 rounded-lg ${
                      isScrolled ? "text-slate-700 bg-slate-100/80" : "text-white bg-white/20 backdrop-blur-sm"
                    }`}
                  >
                    <Phone className={`h-4 w-4 ${isScrolled ? "text-amber-600" : "text-amber-300"}`} />
                    <span className="font-semibold">9173922112</span>
                  </div>
                  <div
                    className={`flex items-center space-x-2 px-4 mb-4 ${isScrolled ? "text-slate-700" : "text-white"}`}
                  >
                    <Mail className={`h-4 w-4 ${isScrolled ? "text-blue-600" : "text-blue-300"}`} />
                    <span className="font-medium">info@hbjsyndicate.com</span>
                  </div>
                  <div
                    className={`flex items-center space-x-2 px-4 mb-4 ${isScrolled ? "text-slate-700" : "text-white"}`}
                  >
                    <WhatsAppIcon className="h-4 w-4 text-green-500" />
                    <button
                      onClick={() => {
                        setIsWhatsAppOpen(true)
                        setIsMenuOpen(false)
                      }}
                      className="font-medium hover:text-green-500 transition-colors duration-300"
                    >
                      WhatsApp Chat
                    </button>
                  </div>
                  <div className="flex items-center justify-center space-x-6 mb-4">
                    <a
                      href="https://facebook.com/hbjsyndicate"
                      className={`transition-colors duration-300 ${
                        isScrolled ? "text-slate-600 hover:text-blue-600" : "text-white/80 hover:text-blue-300"
                      }`}
                    >
                      <Facebook className="h-5 w-5" />
                    </a>
                    <a
                      href="https://twitter.com/hbjsyndicate"
                      className={`transition-colors duration-300 ${
                        isScrolled ? "text-slate-600 hover:text-sky-600" : "text-white/80 hover:text-sky-300"
                      }`}
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a
                      href="https://instagram.com/hbjsyndicate"
                      className={`transition-colors duration-300 ${
                        isScrolled ? "text-slate-600 hover:text-pink-600" : "text-white/80 hover:text-pink-300"
                      }`}
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                    <a
                      href="https://linkedin.com/company/hbjsyndicate"
                      className={`transition-colors duration-300 ${
                        isScrolled ? "text-slate-600 hover:text-blue-600" : "text-white/80 hover:text-blue-300"
                      }`}
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href="https://t.me/hbjsyndicate"
                      className={`transition-colors duration-300 ${
                        isScrolled ? "text-slate-600 hover:text-blue-600" : "text-white/80 hover:text-blue-300"
                      }`}
                    >
                      <Send className="h-5 w-5" />
                    </a>
                  </div>
                  <Link href="/contact">
                    <Button
                      className={`w-full font-semibold transition-all duration-500 ${
                        isScrolled
                          ? "bg-gradient-to-r from-amber-500 to-blue-600 text-white"
                          : "bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30"
                      }`}
                    >
                      Get Quote
                    </Button>
                  </Link>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsWhatsAppOpen(true)}
          className="flex items-center justify-center w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl hover:shadow-green-500/25 transition-all duration-300 hover:scale-110 group relative"
          title="Chat with us on WhatsApp"
        >
          <WhatsAppIcon className="w-7 h-7 group-hover:scale-110 transition-transform duration-300" />
          <div className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full animate-pulse flex items-center justify-center">
            <span className="text-xs font-bold text-white">1</span>
          </div>
          {/* Ripple effect */}
          <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20"></div>
        </button>
      </div>

      {/* WhatsApp Widget */}
      <WhatsAppWidget isOpen={isWhatsAppOpen} onClose={() => setIsWhatsAppOpen(false)} />
    </>
  )
}
