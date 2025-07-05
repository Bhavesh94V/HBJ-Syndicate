"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export default function AnimatedLogo({ className = "w-10 h-10" }: { className?: string }) {
  const logoRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (logoRef.current) {
      const tl = gsap.timeline({ repeat: -1, yoyo: true, duration: 2 })

      tl.to(".logo-pixel", {
        scale: 1.1,
        rotation: 5,
        duration: 1,
        ease: "power2.inOut",
      }).to(
        ".logo-glow",
        {
          opacity: 0.8,
          scale: 1.2,
          duration: 1,
          ease: "power2.inOut",
        },
        0,
      )
    }
  }, [])

  return (
    <svg ref={logoRef} className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Glow effect */}
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00AEEF" />
          <stop offset="50%" stopColor="#00CED1" />
          <stop offset="100%" stopColor="#004D40" />
        </linearGradient>
      </defs>

      {/* Background glow */}
      <circle className="logo-glow" cx="50" cy="50" r="45" fill="url(#gradient)" opacity="0.2" filter="url(#glow)" />

      {/* Main logo shape - Abstract P */}
      <g className="logo-pixel" transform="translate(20, 15)">
        {/* Vertical line of P */}
        <rect x="5" y="0" width="8" height="70" fill="url(#gradient)" rx="4" />

        {/* Top horizontal part of P */}
        <rect x="5" y="0" width="35" height="8" fill="url(#gradient)" rx="4" />
        <rect x="5" y="25" width="30" height="8" fill="url(#gradient)" rx="4" />

        {/* Vertical part of P's top section */}
        <rect x="32" y="0" width="8" height="33" fill="url(#gradient)" rx="4" />

        {/* Pixel dots for "Pioneers" concept */}
        <circle cx="50" cy="45" r="4" fill="#00AEEF" />
        <circle cx="50" cy="55" r="3" fill="#00CED1" />
        <circle cx="50" cy="65" r="2" fill="#004D40" />

        {/* Additional geometric elements */}
        <polygon points="45,15 55,15 50,25" fill="#00AEEF" opacity="0.7" />
      </g>
    </svg>
  )
}
