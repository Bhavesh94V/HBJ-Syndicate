"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Code,
  Smartphone,
  Globe,
  Zap,
  Users,
  Target,
  CheckCircle,
  Star,
  Rocket,
  Award,
  TrendingUp,
  Sparkles,
  Crown,
  Diamond,
  ChevronDown,
} from "lucide-react"
import Link from "next/link"
import EnhancedThreeBackground from "@/components/enhanced-three-background"
import GSAPAnimations from "@/components/gsap-animations"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function HomePage() {
  const typewriterRef = useRef<HTMLParagraphElement>(null)
  const [typewriterText, setTypewriterText] = useState("")
  const fullText =
    "Where innovation meets elegance. We transform your vision into extraordinary digital experiences that captivate, engage, and inspire."

  useEffect(() => {
    // Typewriter effect
    let index = 0
    const typewriterInterval = setInterval(() => {
      if (index < fullText.length) {
        setTypewriterText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(typewriterInterval)
      }
    }, 50)

    return () => clearInterval(typewriterInterval)
  }, [])

  useEffect(() => {
    // Premium hero animations with sophisticated timeline
    const tl = gsap.timeline()

    tl.fromTo(
      ".hero-badge",
      { scale: 0, opacity: 0, rotation: -180, filter: "blur(20px)" },
      { scale: 1, opacity: 1, rotation: 0, filter: "blur(0px)", duration: 1.8, ease: "back.out(2)" },
    )
      .fromTo(
        ".hero-title",
        { y: 150, opacity: 0, skewY: 8, filter: "blur(15px)" },
        { y: 0, opacity: 1, skewY: 0, filter: "blur(0px)", duration: 2, ease: "power4.out" },
        "-=1.2",
      )
      .fromTo(
        ".hero-subtitle",
        { y: 100, opacity: 0, scale: 0.8, filter: "blur(10px)" },
        { y: 0, opacity: 1, scale: 1, filter: "blur(0px)", duration: 1.8, ease: "power3.out" },
        "-=1.4",
      )
      .fromTo(
        ".hero-buttons",
        { y: 80, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 1.5, ease: "power3.out" },
        "-=1.2",
      )

    // Gentle floating animation only for badge (no overlap issues)
    gsap.to(".hero-badge", {
      y: -8,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
    })

    // Enhanced scroll indicator animation
    gsap.to(".scroll-indicator", {
      y: 10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
    })

    gsap.to(".scroll-dot", {
      scale: 1.2,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
    })

    // Fixed Premium scroll-triggered animations with immediate trigger
    gsap.utils.toArray(".premium-card").forEach((element: any, index) => {
      gsap.fromTo(
        element,
        {
          y: 60,
          opacity: 0,
          scale: 0.95,
          filter: "blur(4px)",
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 90%",
            end: "bottom 10%",
            toggleActions: "play none none reverse",
          },
          delay: index * 0.1,
        },
      )
    })

    // Fixed stats cards animation
    gsap.utils.toArray(".stats-card").forEach((element: any, index) => {
      gsap.fromTo(
        element,
        {
          y: 40,
          opacity: 0,
          scale: 0.9,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse",
          },
          delay: index * 0.08,
        },
      )
    })

    // Luxury parallax effects
    gsap.utils.toArray(".parallax-element").forEach((element: any) => {
      gsap.to(element, {
        yPercent: -30,
        ease: "none",
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      })
    })
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
      <EnhancedThreeBackground variant="elegant" />

      {/* Premium Hero Section - Fixed spacing */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-16">
        {/* Luxury gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95"></div>

        {/* Premium background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative container mx-auto px-4 py-20 lg:py-32 z-10">
          <div className="max-w-6xl mx-auto text-center text-white">
            {/* Badge with gentle floating */}
            <Badge className="hero-badge mb-8 md:mb-12 bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-300 border border-amber-500/30 text-lg md:text-xl px-6 md:px-8 py-3 md:py-4 backdrop-blur-xl font-medium rounded-full shadow-2xl">
              <Crown className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3" />
              Premium Digital Excellence
              <Sparkles className="w-5 h-5 md:w-6 md:h-6 ml-2 md:ml-3" />
            </Badge>

            {/* Main Title */}
            <h1 className="hero-title text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-display font-light mb-8 md:mb-12 bg-gradient-to-r from-white via-amber-100 to-amber-300 bg-clip-text text-transparent leading-tight tracking-tight">
              HBJ
              <span className="block font-bold bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent">
                Syndicate
              </span>
            </h1>

            {/* Subtitle with static positioning */}
            <div className="hero-subtitle space-y-6 md:space-y-8 mb-12 md:mb-16">
              <h2 className="text-xl md:text-2xl lg:text-4xl xl:text-5xl text-slate-200 font-light leading-relaxed tracking-wide">
                Your Vision 
                <span className="block font-medium bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
                  Our Code 
                </span>
              </h2>

              {/* Typewriter effect paragraph */}
              <p
                ref={typewriterRef}
                className="text-lg md:text-xl lg:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed font-light min-h-[3rem] md:min-h-[4rem]"
              >
                {typewriterText}
                <span className="animate-pulse">|</span>
              </p>
            </div>

            {/* Buttons with enhanced hover effects */}
            <div className="hero-buttons flex flex-col sm:flex-row gap-6 md:gap-8 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="group relative overflow-hidden bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:via-orange-600 hover:to-amber-700 text-white px-8 md:px-12 py-4 md:py-6 text-lg md:text-xl shadow-2xl hover:shadow-amber-500/25 transition-all duration-700 transform hover:scale-105 font-medium rounded-full border border-amber-400/20"
                >
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 -top-px overflow-hidden rounded-full">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>
                  <Diamond className="mr-3 md:mr-4 h-5 w-5 md:h-6 md:w-6 group-hover:rotate-12 transition-transform duration-700" />
                  Begin Your Journey
                  <ArrowRight className="ml-3 md:ml-4 h-5 w-5 md:h-6 md:w-6 group-hover:translate-x-2 transition-transform duration-700" />
                </Button>
              </Link>

              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="group relative overflow-hidden border-2 border-amber-400/50 text-amber-300 hover:bg-amber-500/10 px-8 md:px-12 py-4 md:py-6 text-lg md:text-xl bg-white/5 backdrop-blur-xl hover:border-amber-300 transition-all duration-700 transform hover:scale-105 font-medium rounded-full"
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-400/0 via-amber-400/10 to-amber-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="flex items-center relative z-10">
                    <Sparkles className="mr-3 md:mr-4 h-5 w-5 md:h-6 md:w-6 group-hover:rotate-180 transition-transform duration-700" />
                    Free Consultation
                  </div>
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Enhanced scroll indicator */}
        <div className="scroll-indicator absolute bottom-8 left-1/2 transform -translate-x-1/2 text-amber-300 cursor-pointer">
          <div className="flex flex-col items-center space-y-2">
            <div className="w-6 h-10 border-2 border-amber-400/50 rounded-full flex justify-center relative overflow-hidden">
              <div className="scroll-dot w-1 h-3 bg-amber-400 rounded-full mt-2"></div>
            </div>
            <ChevronDown className="w-5 h-5 animate-bounce" />
            <span className="text-xs font-medium">Scroll</span>
          </div>
        </div>
      </section>

      {/* Premium Services Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-white via-slate-50 to-white relative">
        <EnhancedThreeBackground variant="section" />

        {/* Luxury background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, #f59e0b 0%, transparent 50%), 
                             radial-gradient(circle at 75% 75%, #3b82f6 0%, transparent 50%)`,
              backgroundSize: "100px 100px",
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <GSAPAnimations animation="elegantFade">
            <div className="text-center mb-16 md:mb-24">
              <Badge className="mb-6 md:mb-8 bg-gradient-to-r from-slate-100 to-slate-200 text-slate-700 border border-slate-300/50 text-base md:text-lg px-4 md:px-6 py-2 md:py-3 rounded-full font-medium">
                Our Expertise
              </Badge>
              <h2 className="text-3xl md:text-5xl lg:text-7xl font-display font-light text-slate-900 mb-6 md:mb-8 tracking-tight">
                Premium
                <span className="block font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  Solutions
                </span>
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
                Meticulously crafted digital solutions that elevate your brand to extraordinary heights
              </p>
            </div>
          </GSAPAnimations>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                icon: Globe,
                title: "Web Development",
                desc: "Bespoke websites that embody sophistication and deliver exceptional user experiences",
                gradient: "from-amber-500 to-orange-600",
                delay: 0,
                accent: "amber",
                link: "/services/web-development",
              },
              {
                icon: Smartphone,
                title: "E-commerce Excellence",
                desc: "Luxury online stores that transform browsers into loyal customers with seamless experiences",
                gradient: "from-blue-500 to-indigo-600",
                delay: 0.2,
                accent: "blue",
                link: "/services/ecommerce",
              },
              {
                icon: Code,
                title: "Web Applications",
                desc: "Sophisticated applications that streamline operations with elegant functionality",
                gradient: "from-slate-600 to-slate-800",
                delay: 0.4,
                accent: "slate",
                link: "/services/web-applications",
              },
              {
                icon: Zap,
                title: "UI/UX Mastery",
                desc: "Intuitive designs that create emotional connections and drive meaningful engagement",
                gradient: "from-purple-500 to-pink-600",
                delay: 0.6,
                accent: "purple",
                link: "/services/ui-ux-design",
              },
            ].map((service, index) => (
              <div key={index}>
                <Link href={service.link}>
                  <Card className="premium-card border-0 shadow-2xl hover:shadow-3xl transition-all duration-700 group hover:-translate-y-8 h-full bg-white/80 backdrop-blur-xl rounded-3xl overflow-hidden cursor-pointer">
                    <CardContent className="p-6 md:p-10 text-center relative">
                      {/* Premium background gradient */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-700 rounded-3xl`}
                      ></div>

                      {/* Luxury icon container */}
                      <div className="relative mb-6 md:mb-8">
                        <div
                          className={`w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 shadow-2xl relative z-10`}
                        >
                          <service.icon className="h-10 w-10 md:h-12 md:w-12 text-white" />
                        </div>
                        {/* Glow effect */}
                        <div
                          className={`absolute inset-0 w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br ${service.gradient} rounded-2xl mx-auto blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-700`}
                        ></div>
                      </div>

                      <h3 className="text-xl md:text-2xl font-display font-semibold text-slate-900 mb-4 md:mb-6 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-amber-600 group-hover:to-orange-600 group-hover:bg-clip-text transition-all duration-700">
                        {service.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed text-base md:text-lg font-light">{service.desc}</p>

                      {/* Premium accent line */}
                      <div
                        className={`w-0 h-1 bg-gradient-to-r ${service.gradient} mx-auto mt-4 md:mt-6 group-hover:w-16 transition-all duration-700 rounded-full`}
                      ></div>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Luxury Why Choose Us */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        <EnhancedThreeBackground variant="elegant" />

        {/* Premium background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-amber-500/20 to-orange-500/20"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <GSAPAnimations animation="slideInLeft">
            <div className="text-center mb-16 md:mb-24">
              <Badge className="mb-6 md:mb-8 bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-300 border border-amber-500/30 text-base md:text-lg px-4 md:px-6 py-2 md:py-3 rounded-full font-medium backdrop-blur-xl">
                <Award className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                The HBJ Advantage
              </Badge>
              <h2 className="text-3xl md:text-5xl lg:text-7xl font-display font-light mb-6 md:mb-8 tracking-tight">
                Why Choose
                <span className="block font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                  Excellence?
                </span>
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed font-light">
                Experience the difference of working with artisans who craft digital perfection
              </p>
            </div>
          </GSAPAnimations>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                icon: Users,
                title: "Master Craftsmen",
                desc: "Work with seasoned artisans who bring decades of combined expertise to every project",
                delay: 0,
              },
              {
                icon: Target,
                title: "Results Obsessed",
                desc: "We don't just deliver projects; we deliver transformational business outcomes",
                delay: 0.2,
              },
              {
                icon: CheckCircle,
                title: "Perfection Standard",
                desc: "Every pixel, every interaction, every detail is meticulously crafted to perfection",
                delay: 0.4,
              },
              {
                icon: Crown,
                title: "Luxury Support",
                desc: "White-glove service with dedicated support that exceeds your highest expectations",
                delay: 0.6,
              },
            ].map((feature, index) => (
              <GSAPAnimations key={index} animation="fadeInUp" delay={feature.delay}>
                <div className="premium-card text-center group cursor-pointer">
                  <div className="relative mb-6 md:mb-8">
                    <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-125 group-hover:rotate-12 transition-all duration-700 shadow-2xl">
                      <feature.icon className="h-10 w-10 md:h-12 md:w-12 text-white" />
                    </div>
                    {/* Luxury glow effect */}
                    <div className="absolute inset-0 w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full mx-auto blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-700"></div>
                  </div>
                  <h3 className="text-xl md:text-2xl font-display font-semibold mb-4 md:mb-6 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-amber-400 group-hover:to-orange-400 group-hover:bg-clip-text transition-all duration-700">
                    {feature.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed text-base md:text-lg font-light">{feature.desc}</p>
                </div>
              </GSAPAnimations>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Stats Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-white via-slate-50 to-white relative">
        <div className="container mx-auto px-4">
          <GSAPAnimations animation="elegantFade">
            <div className="text-center mb-16 md:mb-24">
              <h2 className="text-3xl md:text-5xl lg:text-7xl font-display font-light text-slate-900 mb-6 md:mb-8 tracking-tight">
                Delivering
                <span className="block font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  Excellence
                </span>
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
                Our commitment to perfection speaks through measurable achievements
              </p>
            </div>
          </GSAPAnimations>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: TrendingUp, number: "150+", label: "Masterpieces Created", color: "amber" },
              { icon: Users, number: "100+", label: "Delighted Clients", color: "blue" },
              { icon: Award, number: "200%", label: "Average ROI Growth", color: "green" },
              { icon: Star, number: "24/7", label: "Premium Support", color: "purple" },
            ].map((stat, index) => (
              <div key={index}>
                <Card className="stats-card border-0 text-center shadow-2xl hover:shadow-3xl transition-all duration-700 group bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-10">
                  <div className="relative mb-6 md:mb-8">
                    <div
                      className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-${stat.color}-500 to-${stat.color}-600 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-700 shadow-xl`}
                    >
                      <stat.icon className="h-8 w-8 md:h-10 md:w-10 text-white" />
                    </div>
                    <div
                      className={`absolute inset-0 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-${stat.color}-500 to-${stat.color}-600 rounded-2xl mx-auto blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-700`}
                    ></div>
                  </div>
                  <div className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-700">
                    {stat.number}
                  </div>
                  <p className="text-slate-600 font-medium text-base md:text-lg">{stat.label}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Luxury CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        <EnhancedThreeBackground variant="minimal" />

        {/* Premium background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <GSAPAnimations animation="elegantFade">
            <Badge className="mb-8 md:mb-12 bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-300 border border-amber-500/30 text-lg md:text-xl px-6 md:px-8 py-3 md:py-4 rounded-full font-medium backdrop-blur-xl">
              <Rocket className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3" />
              Ready to Begin?
              <Sparkles className="w-5 h-5 md:w-6 md:h-6 ml-2 md:ml-3" />
            </Badge>

            <h2 className="text-3xl md:text-5xl lg:text-7xl font-display font-light mb-8 md:mb-12 tracking-tight">
              Transform Your
              <span className="block font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                Digital Vision
              </span>
            </h2>

            <p className="text-lg md:text-xl lg:text-2xl text-slate-300 mb-12 md:mb-16 max-w-4xl mx-auto leading-relaxed font-light">
              Let's collaborate to create something extraordinary that transcends expectations and drives unprecedented
              success
            </p>

            <div className="flex flex-col sm:flex-row gap-6 md:gap-8 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="group relative overflow-hidden bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:via-orange-600 hover:to-amber-700 text-white px-8 md:px-12 py-4 md:py-6 text-lg md:text-xl shadow-2xl hover:shadow-amber-500/25 transition-all duration-700 transform hover:scale-110 font-medium rounded-full border border-amber-400/20"
                >
                  <div className="absolute inset-0 -top-px overflow-hidden rounded-full">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>
                  <div className="flex items-center relative z-10">
                    <Diamond className="mr-3 md:mr-4 h-5 w-5 md:h-6 md:w-6 group-hover:rotate-12 transition-transform duration-700" />
                    Start Your Journey
                  </div>
                </Button>
              </Link>

              <Link href="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="group relative overflow-hidden border-2 border-amber-400/50 text-amber-300 hover:bg-amber-500/10 px-8 md:px-12 py-4 md:py-6 text-lg md:text-xl bg-white/5 backdrop-blur-xl hover:border-amber-300 transition-all duration-700 transform hover:scale-105 font-medium rounded-full"
                >
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-400/0 via-amber-400/10 to-amber-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="flex items-center relative z-10">
                    <Crown className="mr-3 md:mr-4 h-5 w-5 md:h-6 md:w-6 group-hover:rotate-12 transition-transform duration-700" />
                    Discover Our Story
                  </div>
                </Button>
              </Link>
            </div>
          </GSAPAnimations>
        </div>
      </section>
    </div>
  )
}
