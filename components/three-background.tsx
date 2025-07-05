"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"
import { gsap } from "gsap"

interface ThreeBackgroundProps {
  variant?: "hero" | "section" | "minimal"
  className?: string
}

export default function ThreeBackground({ variant = "hero", className = "" }: ThreeBackgroundProps) {
  const mountRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<THREE.Scene>()
  const rendererRef = useRef<THREE.WebGLRenderer>()
  const particlesRef = useRef<THREE.Points>()

  useEffect(() => {
    if (!mountRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })

    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0x000000, 0)
    mountRef.current.appendChild(renderer.domElement)

    // Particles
    const particlesGeometry = new THREE.BufferGeometry()
    const particlesCount = variant === "hero" ? 2000 : variant === "section" ? 1000 : 500
    const posArray = new Float32Array(particlesCount * 3)

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * (Math.random() * 100)
    }

    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3))

    // Material
    const particlesMaterial = new THREE.PointsMaterial({
      size: variant === "hero" ? 0.005 : 0.003,
      color: variant === "hero" ? 0x00aeef : 0x00ced1,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    })

    // Mesh
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particlesMesh)

    // Geometric shapes for hero variant
    if (variant === "hero") {
      const geometry = new THREE.TorusGeometry(10, 3, 16, 100)
      const material = new THREE.MeshBasicMaterial({
        color: 0x004d40,
        wireframe: true,
        transparent: true,
        opacity: 0.1,
      })
      const torus = new THREE.Mesh(geometry, material)
      scene.add(torus)

      // Animate torus
      gsap.to(torus.rotation, {
        duration: 20,
        x: Math.PI * 2,
        y: Math.PI * 2,
        repeat: -1,
        ease: "none",
      })
    }

    camera.position.z = 30
    sceneRef.current = scene
    rendererRef.current = renderer
    particlesRef.current = particlesMesh

    // Animation
    const animate = () => {
      requestAnimationFrame(animate)

      if (particlesRef.current) {
        particlesRef.current.rotation.x += 0.0005
        particlesRef.current.rotation.y += 0.0005
      }

      renderer.render(scene, camera)
    }
    animate()

    // Mouse interaction
    const handleMouseMove = (event: MouseEvent) => {
      if (particlesRef.current) {
        const mouseX = (event.clientX / window.innerWidth) * 2 - 1
        const mouseY = -(event.clientY / window.innerHeight) * 2 + 1

        gsap.to(particlesRef.current.rotation, {
          duration: 2,
          x: mouseY * 0.1,
          y: mouseX * 0.1,
        })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)

    // Resize handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", handleResize)
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement)
      }
      renderer.dispose()
    }
  }, [variant])

  return <div ref={mountRef} className={`fixed inset-0 pointer-events-none ${className}`} />
}
