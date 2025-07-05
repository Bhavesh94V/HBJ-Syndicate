"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, SplitText)
}

interface TextRevealProps {
  children: string
  className?: string
  animation?: "slideUp" | "fadeIn" | "typewriter" | "wave"
  delay?: number
  stagger?: number
}

export default function TextReveal({
  children,
  className = "",
  animation = "slideUp",
  delay = 0,
  stagger = 0.02,
}: TextRevealProps) {
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!textRef.current) return

    const element = textRef.current
    const split = new SplitText(element, { type: "chars,words,lines" })

    // Animation configurations
    const animations = {
      slideUp: {
        initial: { y: 100, opacity: 0 },
        animate: { y: 0, opacity: 1 },
      },
      fadeIn: {
        initial: { opacity: 0, scale: 0.5 },
        animate: { opacity: 1, scale: 1 },
      },
      typewriter: {
        initial: { opacity: 0, x: -20 },
        animate: { opacity: 1, x: 0 },
      },
      wave: {
        initial: { y: 50, opacity: 0, rotation: 10 },
        animate: { y: 0, opacity: 1, rotation: 0 },
      },
    }

    const config = animations[animation]

    // Set initial state
    gsap.set(split.chars, config.initial)

    // Create animation
    gsap.to(split.chars, {
      ...config.animate,
      duration: 0.8,
      delay: delay,
      stagger: stagger,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    })

    return () => {
      split.revert()
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [children, animation, delay, stagger])

  return (
    <div ref={textRef} className={className}>
      {children}
    </div>
  )
}
