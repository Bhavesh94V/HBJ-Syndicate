"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Code,
  Database,
  Cloud,
  Smartphone,
  Palette,
  Shield,
  Zap,
  Globe,
  Server,
  GitBranch,
  Monitor,
  Layers,
} from "lucide-react"
import Link from "next/link"
import EnhancedThreeBackground from "@/components/enhanced-three-background"
import GSAPAnimations from "@/components/gsap-animations"
import SEOHead from "@/components/seo-head"
import { gsap } from "gsap"

export default function TechnologiesPage() {
  useEffect(() => {
    gsap.fromTo(".tech-hero", { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" })
  }, [])

  const techCategories = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "Modern, responsive user interfaces that engage and convert",
      technologies: [
        { name: "React.js", level: 95, color: "bg-blue-500" },
        { name: "Next.js", level: 90, color: "bg-black" },
        { name: "Vue.js", level: 85, color: "bg-green-500" },
        { name: "TypeScript", level: 92, color: "bg-blue-600" },
        { name: "Tailwind CSS", level: 95, color: "bg-cyan-500" },
        { name: "GSAP", level: 88, color: "bg-green-600" },
      ],
      gradient: "from-blue-500 to-cyan-600",
    },
    {
      icon: Server,
      title: "Backend Development",
      description: "Scalable server-side solutions and robust APIs",
      technologies: [
        { name: "Node.js", level: 93, color: "bg-green-600" },
        { name: "Python", level: 90, color: "bg-yellow-500" },
        { name: "Django", level: 87, color: "bg-green-700" },
        { name: "Express.js", level: 91, color: "bg-gray-700" },
        { name: "FastAPI", level: 85, color: "bg-teal-600" },
        { name: "GraphQL", level: 82, color: "bg-pink-500" },
      ],
      gradient: "from-green-500 to-teal-600",
    },
    {
      icon: Database,
      title: "Database & Storage",
      description: "Efficient data management and storage solutions",
      technologies: [
        { name: "PostgreSQL", level: 92, color: "bg-blue-700" },
        { name: "MongoDB", level: 88, color: "bg-green-700" },
        { name: "Redis", level: 85, color: "bg-red-600" },
        { name: "MySQL", level: 90, color: "bg-orange-500" },
        { name: "Firebase", level: 83, color: "bg-yellow-600" },
        { name: "Supabase", level: 87, color: "bg-green-600" },
      ],
      gradient: "from-purple-500 to-blue-600",
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Scalable cloud infrastructure and deployment",
      technologies: [
        { name: "AWS", level: 88, color: "bg-orange-500" },
        { name: "Google Cloud", level: 85, color: "bg-blue-500" },
        { name: "Docker", level: 90, color: "bg-blue-600" },
        { name: "Kubernetes", level: 82, color: "bg-blue-700" },
        { name: "Vercel", level: 95, color: "bg-black" },
        { name: "Netlify", level: 88, color: "bg-teal-500" },
      ],
      gradient: "from-orange-500 to-red-600",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Cross-platform mobile applications",
      technologies: [
        { name: "React Native", level: 87, color: "bg-blue-500" },
        { name: "Flutter", level: 83, color: "bg-blue-400" },
        { name: "Expo", level: 90, color: "bg-black" },
        { name: "PWA", level: 92, color: "bg-purple-600" },
        { name: "Ionic", level: 80, color: "bg-blue-600" },
        { name: "Capacitor", level: 85, color: "bg-blue-500" },
      ],
      gradient: "from-indigo-500 to-purple-600",
    },
    {
      icon: Palette,
      title: "Design & UI/UX",
      description: "User-centered design and visual excellence",
      technologies: [
        { name: "Figma", level: 92, color: "bg-purple-500" },
        { name: "Adobe XD", level: 85, color: "bg-pink-500" },
        { name: "Sketch", level: 80, color: "bg-orange-500" },
        { name: "Framer", level: 88, color: "bg-blue-600" },
        { name: "Principle", level: 83, color: "bg-green-500" },
        { name: "InVision", level: 87, color: "bg-pink-600" },
      ],
      gradient: "from-pink-500 to-purple-600",
    },
  ]

  const tools = [
    { icon: GitBranch, name: "Git & GitHub", category: "Version Control" },
    { icon: Monitor, name: "VS Code", category: "IDE" },
    { icon: Layers, name: "Postman", category: "API Testing" },
    { icon: Shield, name: "Jest", category: "Testing" },
    { icon: Zap, name: "Webpack", category: "Build Tools" },
    { icon: Globe, name: "Nginx", category: "Web Server" },
  ]

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "Technologies We Use - Pixel Pioneers",
    description:
      "Comprehensive overview of cutting-edge technologies used by Pixel Pioneers for web development, mobile apps, and digital solutions.",
    author: {
      "@type": "Organization",
      name: "Pixel Pioneers",
    },
    publisher: {
      "@type": "Organization",
      name: "Pixel Pioneers",
    },
  }

  return (
    <>
      <SEOHead
        title="Technologies We Use - Modern Web Development Stack"
        description="Explore the cutting-edge technologies and tools Pixel Pioneers uses for web development, mobile apps, and digital solutions. React, Node.js, Python, AWS, and more."
        keywords="React.js, Node.js, Python, Django, AWS, MongoDB, PostgreSQL, web development technologies, full-stack development, modern web stack"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-white relative overflow-hidden">
        <EnhancedThreeBackground variant="tech" />

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-teal-900/80 to-slate-800/90"></div>
          <div className="tech-hero relative container mx-auto px-4 py-20 z-10">
            <div className="max-w-4xl mx-auto text-center text-white">
              <Badge className="mb-6 bg-cyan-500/20 text-cyan-300 border-cyan-500/30 text-lg px-4 py-2">
                Our Tech Stack
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-300 to-teal-300 bg-clip-text text-transparent">
                Cutting-Edge Technologies
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                We leverage the latest technologies and frameworks to build scalable, performant, and future-ready
                digital solutions
              </p>
            </div>
          </div>
        </section>

        {/* Technologies Grid */}
        <section className="py-20 bg-white relative">
          <EnhancedThreeBackground variant="section" />
          <div className="container mx-auto px-4 relative z-10">
            <GSAPAnimations animation="fadeInUp" trigger=".tech-grid">
              <div className="tech-grid text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Technology Arsenal</h2>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                  Comprehensive expertise across the full technology stack
                </p>
              </div>
            </GSAPAnimations>

            <div className="grid lg:grid-cols-2 gap-12">
              {techCategories.map((category, index) => (
                <GSAPAnimations key={index} animation="slideInLeft" delay={index * 0.1}>
                  <Card className="border-slate-200 hover:shadow-2xl transition-all duration-500 group transform hover:-translate-y-2 h-full">
                    <CardHeader className="pb-4">
                      <div className="flex items-center space-x-4 mb-4">
                        <div
                          className={`w-16 h-16 bg-gradient-to-br ${category.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                        >
                          <category.icon className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl text-slate-900">{category.title}</CardTitle>
                          <p className="text-slate-600 mt-1">{category.description}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {category.technologies.map((tech, techIndex) => (
                          <div key={techIndex} className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="font-medium text-slate-900">{tech.name}</span>
                              <span className="text-sm text-slate-600">{tech.level}%</span>
                            </div>
                            <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                              <div
                                className={`h-2 ${tech.color} rounded-full transition-all duration-1000 ease-out`}
                                style={{ width: `${tech.level}%` }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </GSAPAnimations>
              ))}
            </div>
          </div>
        </section>

        {/* Tools & Workflow */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-cyan-50 relative">
          <div className="container mx-auto px-4">
            <GSAPAnimations animation="slideInRight" trigger=".tools-section">
              <div className="tools-section text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Development Tools & Workflow</h2>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                  Professional tools that enhance our development process and ensure quality delivery
                </p>
              </div>
            </GSAPAnimations>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tools.map((tool, index) => (
                <GSAPAnimations key={index} animation="scaleIn" delay={index * 0.1}>
                  <Card className="border-slate-200 hover:shadow-lg transition-all duration-300 group text-center">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-gradient-to-br from-slate-800 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <tool.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">{tool.name}</h3>
                      <p className="text-slate-600 text-sm">{tool.category}</p>
                    </CardContent>
                  </Card>
                </GSAPAnimations>
              ))}
            </div>
          </div>
        </section>

        {/* Why These Technologies */}
        <section className="py-20 bg-white relative">
          <div className="container mx-auto px-4">
            <GSAPAnimations animation="fadeInUp" trigger=".why-tech-section">
              <div className="why-tech-section text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Why These Technologies?</h2>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                  Strategic technology choices that deliver superior results
                </p>
              </div>
            </GSAPAnimations>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Zap,
                  title: "Performance",
                  description: "Lightning-fast applications with optimized code and efficient architectures",
                },
                {
                  icon: Shield,
                  title: "Security",
                  description: "Enterprise-grade security with best practices and regular updates",
                },
                {
                  icon: Layers,
                  title: "Scalability",
                  description: "Solutions that grow with your business without compromising performance",
                },
                {
                  icon: Globe,
                  title: "Future-Ready",
                  description: "Modern technologies that ensure longevity and easy maintenance",
                },
              ].map((benefit, index) => (
                <GSAPAnimations key={index} animation="fadeInUp" delay={index * 0.2}>
                  <div className="text-center group">
                    <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <benefit.icon className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">{benefit.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </GSAPAnimations>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 to-teal-900 text-white relative overflow-hidden">
          <EnhancedThreeBackground variant="minimal" />
          <div className="container mx-auto px-4 text-center relative z-10">
            <GSAPAnimations animation="fadeInUp">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Leverage These Technologies?</h2>
              <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
                Let's discuss how our technology expertise can transform your digital presence
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-teal-600 hover:from-cyan-600 hover:to-teal-700 text-white px-8 py-4 text-lg shadow-2xl hover:shadow-cyan-500/25 transition-all transform hover:scale-105"
                >
                  <Link href="/contact">Start Your Project</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-cyan-500 text-cyan-300 hover:bg-cyan-500/10 px-8 py-4 text-lg bg-transparent backdrop-blur-sm hover:border-cyan-400 transition-all transform hover:scale-105"
                >
                  <Link href="/projects">View Our Work</Link>
                </Button>
              </div>
            </GSAPAnimations>
          </div>
        </section>
      </div>
    </>
  )
}
