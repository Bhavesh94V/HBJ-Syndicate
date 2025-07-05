"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import Image from "next/image"

export default function HBJLogo({ className = "w-12 h-12" }: { className?: string }) {
  const logoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (logoRef.current) {
      const tl = gsap.timeline({ repeat: -1, yoyo: true, duration: 4 })

      tl.to(".logo-glow", {
        opacity: 0.8,
        scale: 1.05,
        duration: 2,
        ease: "power2.inOut",
      })
    }
  }, [])

  return (
    <div ref={logoRef} className={`relative ${className}`}>
      {/* Glow effect */}
      <div className="logo-glow absolute inset-0 bg-gradient-to-r from-amber-400/20 to-blue-500/20 rounded-lg blur-md opacity-0"></div>

      {/* Logo Image */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <Image
          src="/images/hbj-logo.png"
          alt="HBJ Syndicate Logo"
          width={48}
          height={48}
          className="w-full h-full object-contain"
          priority
        />
      </div>
    </div>
  )
}
