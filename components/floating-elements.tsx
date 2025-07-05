"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

interface FloatingElementsProps {
  count?: number
  className?: string
}

export default function FloatingElements({ count = 6, className = "" }: FloatingElementsProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const elements: HTMLDivElement[] = []

    // Create floating elements
    for (let i = 0; i < count; i++) {
      const element = document.createElement("div")
      element.className = `absolute w-4 h-4 bg-gradient-to-r from-cyan-400 to-teal-500 rounded-full opacity-20`
      element.style.left = `${Math.random() * 100}%`
      element.style.top = `${Math.random() * 100}%`
      container.appendChild(element)
      elements.push(element)

      // Animate each element
      gsap.to(element, {
        y: -100 - Math.random() * 200,
        x: -50 + Math.random() * 100,
        rotation: 360,
        duration: 10 + Math.random() * 10,
        repeat: -1,
        ease: "none",
        delay: Math.random() * 5,
      })

      // Scale animation
      gsap.to(element, {
        scale: 0.5 + Math.random() * 1.5,
        duration: 3 + Math.random() * 3,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        delay: Math.random() * 2,
      })
    }

    return () => {
      elements.forEach((element) => {
        if (element.parentNode) {
          element.parentNode.removeChild(element)
        }
      })
    }
  }, [count])

  return <div ref={containerRef} className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} />
}
