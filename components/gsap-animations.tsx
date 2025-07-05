"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

interface GSAPAnimationsProps {
  children: React.ReactNode
  animation?: "fadeInUp" | "slideInLeft" | "slideInRight" | "scaleIn" | "rotateIn" | "elegantFade" | "slideInUp"
  delay?: number
  duration?: number
  trigger?: string
  stagger?: number
}

export default function GSAPAnimations({
  children,
  animation = "fadeInUp",
  delay = 0,
  duration = 1.2,
  trigger,
  stagger = 0,
}: GSAPAnimationsProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!elementRef.current) return

    const element = elementRef.current

    // Enhanced animation configurations
    const animations = {
      fadeInUp: {
        initial: { opacity: 0, y: 80, scale: 0.95 },
        animate: { opacity: 1, y: 0, scale: 1 },
      },
      slideInLeft: {
        initial: { opacity: 0, x: -100, rotationY: -15 },
        animate: { opacity: 1, x: 0, rotationY: 0 },
      },
      slideInRight: {
        initial: { opacity: 0, x: 100, rotationY: 15 },
        animate: { opacity: 1, x: 0, rotationY: 0 },
      },
      slideInUp: {
        initial: { opacity: 0, y: 100, scale: 0.95 },
        animate: { opacity: 1, y: 0, scale: 1 },
      },
      scaleIn: {
        initial: { opacity: 0, scale: 0.8, rotation: -5 },
        animate: { opacity: 1, scale: 1, rotation: 0 },
      },
      rotateIn: {
        initial: { opacity: 0, rotation: -45, scale: 0.8 },
        animate: { opacity: 1, rotation: 0, scale: 1 },
      },
      elegantFade: {
        initial: { opacity: 0, y: 40, filter: "blur(10px)" },
        animate: { opacity: 1, y: 0, filter: "blur(0px)" },
      },
    }

    // Get animation config with fallback
    const config = animations[animation] || animations.fadeInUp

    // Set initial state
    gsap.set(element, config.initial)

    // Create timeline
    const tl = gsap.timeline({
      scrollTrigger: trigger
        ? {
            trigger: trigger,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse",
          }
        : {
            trigger: element,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse",
          },
    })

    // Add animation to timeline
    if (stagger > 0) {
      const children = element.children
      if (children.length > 0) {
        gsap.set(children, config.initial)
        tl.to(children, {
          ...config.animate,
          duration: duration,
          delay: delay,
          stagger: stagger,
          ease: "power3.out",
        })
      } else {
        // Fallback if no children
        tl.to(element, {
          ...config.animate,
          duration: duration,
          delay: delay,
          ease: "power3.out",
        })
      }
    } else {
      tl.to(element, {
        ...config.animate,
        duration: duration,
        delay: delay,
        ease: "power3.out",
      })
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [animation, delay, duration, trigger, stagger])

  return <div ref={elementRef}>{children}</div>
}
