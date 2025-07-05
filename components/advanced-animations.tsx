"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { TextPlugin } from "gsap/TextPlugin"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, TextPlugin)
}

interface AdvancedAnimationsProps {
  children: React.ReactNode
  animation?:
    | "fadeInUp"
    | "slideInLeft"
    | "slideInRight"
    | "scaleIn"
    | "rotateIn"
    | "textReveal"
    | "parallax"
    | "morphing"
  delay?: number
  duration?: number
  trigger?: string
  scrub?: boolean
  parallaxSpeed?: number
}

export default function AdvancedAnimations({
  children,
  animation = "fadeInUp",
  delay = 0,
  duration = 1,
  trigger,
  scrub = false,
  parallaxSpeed = 0.5,
}: AdvancedAnimationsProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!elementRef.current) return

    const element = elementRef.current

    // Advanced animation configurations
    const animations = {
      fadeInUp: {
        initial: { opacity: 0, y: 100, scale: 0.8 },
        animate: { opacity: 1, y: 0, scale: 1 },
      },
      slideInLeft: {
        initial: { opacity: 0, x: -100, rotationY: -45 },
        animate: { opacity: 1, x: 0, rotationY: 0 },
      },
      slideInRight: {
        initial: { opacity: 0, x: 100, rotationY: 45 },
        animate: { opacity: 1, x: 0, rotationY: 0 },
      },
      scaleIn: {
        initial: { opacity: 0, scale: 0, rotation: -180 },
        animate: { opacity: 1, scale: 1, rotation: 0 },
      },
      rotateIn: {
        initial: { opacity: 0, rotation: -90, scale: 0.5 },
        animate: { opacity: 1, rotation: 0, scale: 1 },
      },
      textReveal: {
        initial: { opacity: 0, y: 50, skewY: 10 },
        animate: { opacity: 1, y: 0, skewY: 0 },
      },
      parallax: {
        initial: { y: 0 },
        animate: { y: -100 * parallaxSpeed },
      },
      morphing: {
        initial: { opacity: 0, scale: 0.5, borderRadius: "50%" },
        animate: { opacity: 1, scale: 1, borderRadius: "0%" },
      },
    }

    const config = animations[animation]

    // Set initial state
    gsap.set(element, config.initial)

    // Create timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: trigger || element,
        start: "top 85%",
        end: "bottom 15%",
        toggleActions: "play none none reverse",
        scrub: scrub,
        markers: false,
      },
    })

    // Add animation to timeline
    tl.to(element, {
      ...config.animate,
      duration: duration,
      delay: delay,
      ease: "power3.out",
    })

    // Add floating animation for certain elements
    if (animation === "scaleIn" || animation === "morphing") {
      gsap.to(element, {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        delay: delay + duration,
      })
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [animation, delay, duration, trigger, scrub, parallaxSpeed])

  return <div ref={elementRef}>{children}</div>
}
