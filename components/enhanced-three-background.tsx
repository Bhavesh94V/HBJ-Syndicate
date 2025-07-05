"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"
import { gsap } from "gsap"

interface EnhancedThreeBackgroundProps {
  variant?: "hero" | "section" | "minimal" | "elegant"
  className?: string
}

export default function EnhancedThreeBackground({ variant = "hero", className = "" }: EnhancedThreeBackgroundProps) {
  const mountRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<THREE.Scene>()
  const rendererRef = useRef<THREE.WebGLRenderer>()
  const particlesRef = useRef<THREE.Points>()
  const geometryRef = useRef<THREE.Mesh[]>([])

  useEffect(() => {
    if (!mountRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })

    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0x000000, 0)
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    mountRef.current.appendChild(renderer.domElement)

    // Premium Particles with luxury colors
    const particlesGeometry = new THREE.BufferGeometry()
    const particlesCount = variant === "hero" ? 3000 : variant === "elegant" ? 2000 : 1000
    const posArray = new Float32Array(particlesCount * 3)
    const colorArray = new Float32Array(particlesCount * 3)

    for (let i = 0; i < particlesCount * 3; i += 3) {
      // Position
      posArray[i] = (Math.random() - 0.5) * 200
      posArray[i + 1] = (Math.random() - 0.5) * 200
      posArray[i + 2] = (Math.random() - 0.5) * 200

      // Luxury color palette - Gold, Amber, Platinum
      const colorVariant = Math.random()
      if (colorVariant < 0.4) {
        // Gold/Amber
        colorArray[i] = 1.0 // R
        colorArray[i + 1] = 0.84 // G
        colorArray[i + 2] = 0.0 // B
      } else if (colorVariant < 0.7) {
        // Platinum/Silver
        colorArray[i] = 0.9 // R
        colorArray[i + 1] = 0.9 // G
        colorArray[i + 2] = 0.95 // B
      } else {
        // Soft Blue
        colorArray[i] = 0.6 // R
        colorArray[i + 1] = 0.8 // G
        colorArray[i + 2] = 1.0 // B
      }
    }

    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3))
    particlesGeometry.setAttribute("color", new THREE.BufferAttribute(colorArray, 3))

    // Premium particle material
    const particlesMaterial = new THREE.PointsMaterial({
      size: variant === "hero" ? 0.008 : 0.005,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    })

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particlesMesh)

    // Luxury geometric shapes
    const geometries: THREE.Mesh[] = []

    if (variant === "hero" || variant === "elegant") {
      // Elegant floating rings with luxury materials
      for (let i = 0; i < 3; i++) {
        const ringGeometry = new THREE.RingGeometry(8 + i * 4, 12 + i * 4, 32)
        const ringMaterial = new THREE.MeshBasicMaterial({
          color: i === 0 ? 0xfbbf24 : i === 1 ? 0x60a5fa : 0xe5e7eb,
          transparent: true,
          opacity: 0.1,
          side: THREE.DoubleSide,
        })
        const ring = new THREE.Mesh(ringGeometry, ringMaterial)
        ring.position.set((Math.random() - 0.5) * 100, (Math.random() - 0.5) * 100, (Math.random() - 0.5) * 100)
        ring.rotation.x = Math.random() * Math.PI
        ring.rotation.y = Math.random() * Math.PI
        scene.add(ring)
        geometries.push(ring)
      }

      // Sophisticated wireframe spheres
      for (let i = 0; i < 4; i++) {
        const sphereGeometry = new THREE.SphereGeometry(3 + i, 16, 16)
        const sphereMaterial = new THREE.MeshBasicMaterial({
          color: i % 2 === 0 ? 0xfbbf24 : 0x60a5fa,
          wireframe: true,
          transparent: true,
          opacity: 0.12,
        })
        const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
        sphere.position.set((Math.random() - 0.5) * 120, (Math.random() - 0.5) * 120, (Math.random() - 0.5) * 120)
        scene.add(sphere)
        geometries.push(sphere)
      }

      // Luxury dodecahedrons
      for (let i = 0; i < 2; i++) {
        const dodecaGeometry = new THREE.DodecahedronGeometry(5)
        const dodecaMaterial = new THREE.MeshBasicMaterial({
          color: 0xe5e7eb,
          wireframe: true,
          transparent: true,
          opacity: 0.15,
        })
        const dodeca = new THREE.Mesh(dodecaGeometry, dodecaMaterial)
        dodeca.position.set((Math.random() - 0.5) * 100, (Math.random() - 0.5) * 100, (Math.random() - 0.5) * 100)
        scene.add(dodeca)
        geometries.push(dodeca)
      }
    }

    camera.position.z = 80
    sceneRef.current = scene
    rendererRef.current = renderer
    particlesRef.current = particlesMesh
    geometryRef.current = geometries

    // Smooth luxury animations
    const animate = () => {
      requestAnimationFrame(animate)

      if (particlesRef.current) {
        particlesRef.current.rotation.x += 0.0001
        particlesRef.current.rotation.y += 0.0002
      }

      // Elegant geometric animations
      geometries.forEach((geometry, index) => {
        geometry.rotation.x += 0.002 + index * 0.0003
        geometry.rotation.y += 0.001 + index * 0.0002
        geometry.position.y += Math.sin(Date.now() * 0.0005 + index) * 0.008
      })

      renderer.render(scene, camera)
    }
    animate()

    // Smooth luxury mouse interaction
    const handleMouseMove = (event: MouseEvent) => {
      if (particlesRef.current) {
        const mouseX = (event.clientX / window.innerWidth) * 2 - 1
        const mouseY = -(event.clientY / window.innerHeight) * 2 + 1

        gsap.to(particlesRef.current.rotation, {
          duration: 6,
          x: mouseY * 0.05,
          y: mouseX * 0.05,
          ease: "power2.out",
        })

        // Smooth geometric shape interactions
        geometries.forEach((geometry, index) => {
          gsap.to(geometry.rotation, {
            duration: 4,
            x: mouseY * 0.03 * (index + 1),
            y: mouseX * 0.03 * (index + 1),
            ease: "power2.out",
          })
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
