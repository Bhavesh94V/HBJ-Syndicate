"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export default function AppexLogo({ className = "w-10 h-10" }: { className?: string }) {
  const logoRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (logoRef.current) {
      const tl = gsap.timeline({ repeat: -1, yoyo: true, duration: 3 })

      tl.to(".logo-core", {
        scale: 1.05,
        rotation: 2,
        duration: 1.5,
        ease: "power2.inOut",
      }).to(
        ".logo-glow",
        {
          opacity: 0.9,
          scale: 1.1,
          duration: 1.5,
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
          <feGaussianBlur stdDeviation="4" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e94560" />
          <stop offset="50%" stopColor="#0f3460" />
          <stop offset="100%" stopColor="#1a1a2e" />
        </linearGradient>
        <radialGradient id="radialGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#e94560" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#1a1a2e" stopOpacity="0.2" />
        </radialGradient>
      </defs>

      {/* Background glow */}
      <circle
        className="logo-glow"
        cx="50"
        cy="50"
        r="45"
        fill="url(#radialGradient)"
        opacity="0.3"
        filter="url(#glow)"
      />

      {/* Main logo shape - Stylized "A" for Appex */}
      <g className="logo-core" transform="translate(15, 10)">
        {/* Main A structure */}
        <path d="M35 10 L50 45 L65 10 L70 10 L52 50 L48 50 L30 10 Z" fill="url(#gradient)" stroke="none" />

        {/* Crossbar of A */}
        <rect x="40" y="30" width="20" height="4" fill="url(#gradient)" rx="2" />

        {/* Innovation dots */}
        <circle cx="25" cy="15" r="3" fill="#e94560" opacity="0.8" />
        <circle cx="75" cy="15" r="2.5" fill="#0f3460" opacity="0.7" />
        <circle cx="50" cy="5" r="2" fill="#1a1a2e" opacity="0.6" />

        {/* Geometric accent */}
        <polygon points="20,55 30,55 25,65" fill="#e94560" opacity="0.6" />
        <polygon points="70,55 80,55 75,65" fill="#0f3460" opacity="0.6" />

        {/* Tech lines */}
        <line x1="10" y1="25" x2="20" y2="25" stroke="#e94560" strokeWidth="2" opacity="0.5" />
        <line x1="80" y1="25" x2="90" y2="25" stroke="#0f3460" strokeWidth="2" opacity="0.5" />
        <line x1="10" y1="35" x2="15" y2="35" stroke="#1a1a2e" strokeWidth="2" opacity="0.4" />
        <line x1="85" y1="35" x2="90" y2="35" stroke="#1a1a2e" strokeWidth="2" opacity="0.4" />
      </g>
    </svg>
  )
}
