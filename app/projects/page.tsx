"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Globe, ShoppingCart, Code, ArrowRight, ExternalLink, Calendar, Users, TrendingUp, Zap } from "lucide-react"
import Link from "next/link"
import GSAPAnimations from "@/components/gsap-animations"
import { gsap } from "gsap"
import EnhancedThreeBackground from "@/components/enhanced-three-background"

export default function ProjectsPage() {
  useEffect(() => {
    gsap.fromTo(".projects-hero", { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1.5, ease: "power3.out" })
  }, [])

  const projects = [
    {
      id: 1,
      title: "Modern Corporate Website",
      category: "Corporate Website",
      description:
        "A sophisticated corporate website with advanced CMS integration, multi-language support, and performance optimization for enhanced user experience.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React.js", "Next.js", "Tailwind CSS", "Strapi CMS"],
      features: ["Responsive Design", "SEO Optimized", "Multi-language", "Admin Dashboard"],
      challenge:
        "Create a professional online presence that reflects the company's values while ensuring optimal performance and user experience across all devices.",
      solution:
        "Developed a modern, responsive website with custom CMS integration, advanced SEO optimization, and seamless user experience with elegant animations.",
      results: [
        "40% increase in organic traffic",
        "60% improvement in page load speed",
        "25% increase in lead generation",
      ],
      gradient: "from-amber-500 to-orange-600",
      link: "/projects/corporate-website",
    },
    {
      id: 2,
      title: "E-commerce Platform",
      category: "E-commerce",
      description:
        "A full-featured online store with payment integration, inventory management, and advanced analytics dashboard for comprehensive business insights.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Vue.js", "Node.js", "MongoDB", "Stripe API"],
      features: ["Payment Gateway", "Inventory Management", "Order Tracking", "Analytics"],
      challenge:
        "Build a scalable e-commerce platform that can handle high traffic while providing seamless shopping experience and robust backend management.",
      solution:
        "Created a robust e-commerce solution with microservices architecture, real-time inventory updates, and comprehensive admin panel with advanced analytics.",
      results: ["300% increase in online sales", "50% reduction in cart abandonment", "99.9% uptime achieved"],
      gradient: "from-blue-500 to-indigo-600",
      link: "/projects/ecommerce-platform",
    },
    {
      id: 3,
      title: "Custom Booking System",
      category: "Web Application",
      description:
        "A comprehensive booking system with real-time availability, automated notifications, and detailed analytics for optimal business management.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React.js", "Django", "PostgreSQL", "Redis"],
      features: ["Real-time Booking", "Automated Notifications", "Payment Processing", "Analytics Dashboard"],
      challenge:
        "Develop a booking system that handles complex scheduling requirements while maintaining real-time accuracy and providing excellent user experience.",
      solution:
        "Built a sophisticated booking platform with real-time synchronization, automated workflows, comprehensive reporting, and intuitive user interface.",
      results: [
        "80% reduction in booking conflicts",
        "45% increase in booking efficiency",
        "90% customer satisfaction rate",
      ],
      gradient: "from-slate-600 to-slate-800",
      link: "/projects/booking-system",
    },
  ]

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <EnhancedThreeBackground variant="hero" />

      {/* Hero Section - Fixed spacing */}
      <section className="relative min-h-[80vh] flex items-center justify-center pt-32 pb-16">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-slate-800/95"></div>
        <div className="projects-hero relative container mx-auto px-4 py-20 z-10">
          <div className="max-w-5xl mx-auto text-center text-white">
            <Badge className="mb-8 bg-amber-500/20 text-amber-300 border-amber-500/30 text-lg px-6 py-3 backdrop-blur-sm font-medium">
              Our Portfolio
            </Badge>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-8 bg-gradient-to-r from-white to-amber-300 bg-clip-text text-transparent">
              Showcasing Innovation
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Explore our portfolio of innovative projects that demonstrate the diverse range of exceptional solutions
              HBJ Syndicate delivers
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-white relative">
        <EnhancedThreeBackground variant="section" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="space-y-24">
            {projects.map((project, index) => (
              <GSAPAnimations key={project.id} animation="fadeInUp" delay={index * 0.2}>
                <div
                  className={`grid lg:grid-cols-2 gap-16 items-center ${
                    index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  {/* Project Image */}
                  <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <Card className="overflow-hidden border-slate-200 shadow-2xl hover:shadow-3xl transition-all duration-700 group bg-white/95 backdrop-blur-sm">
                      <div
                        className={`aspect-video bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}
                      >
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>
                        <div className="relative z-10 text-center text-white">
                          <div className="w-24 h-24 mx-auto mb-4 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-500">
                            {project.category === "Corporate Website" && <Globe className="h-12 w-12" />}
                            {project.category === "E-commerce" && <ShoppingCart className="h-12 w-12" />}
                            {project.category === "Web Application" && <Code className="h-12 w-12" />}
                          </div>
                          <h3 className="text-2xl font-display font-bold">{project.title}</h3>
                        </div>
                      </div>
                    </Card>
                  </div>

                  {/* Project Details */}
                  <div className={`${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                    <div className="space-y-6">
                      <div>
                        <Badge className="mb-4 bg-amber-500/10 text-amber-600 border-amber-500/20 font-medium">
                          {project.category}
                        </Badge>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
                          {project.title}
                        </h2>
                        <p className="text-lg text-slate-600 leading-relaxed">{project.description}</p>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h3 className="text-lg font-display font-semibold text-slate-900 mb-3">Technologies Used</h3>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, idx) => (
                            <Badge
                              key={idx}
                              variant="secondary"
                              className="bg-slate-100 text-slate-900 border-amber-500/20"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Key Features */}
                      <div>
                        <h3 className="text-lg font-display font-semibold text-slate-900 mb-3">Key Features</h3>
                        <div className="grid grid-cols-2 gap-2">
                          {project.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center text-slate-600">
                              <Zap className="h-4 w-4 text-amber-500 mr-2 flex-shrink-0" />
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Results */}
                      <div>
                        <h3 className="text-lg font-display font-semibold text-slate-900 mb-3">Projected Results</h3>
                        <div className="space-y-2">
                          {project.results.map((result, idx) => (
                            <div key={idx} className="flex items-center text-slate-600">
                              <TrendingUp className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                              <span className="text-sm">{result}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <Link href={project.link}>
                          <Button className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-orange-600 hover:to-amber-500 text-white shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 font-medium">
                            <div className="flex items-center">
                              View Case Study
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </div>
                          </Button>
                        </Link>
                        <Button
                          variant="outline"
                          className="border-amber-500 text-amber-600 hover:bg-amber-500/10 bg-transparent border-2 hover:border-orange-500 transition-all duration-500 font-medium"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Preview
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </GSAPAnimations>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-white relative">
        <div className="container mx-auto px-4">
          <GSAPAnimations animation="fadeInUp" trigger=".stats-section">
            <div className="stats-section text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6">Project Impact</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                The measurable results we aim to deliver for every client
              </p>
            </div>
          </GSAPAnimations>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Users, number: "100+", label: "Happy Clients", color: "text-amber-500" },
              { icon: Code, number: "150+", label: "Projects Completed", color: "text-blue-500" },
              { icon: TrendingUp, number: "200%", label: "Average ROI Increase", color: "text-green-600" },
              { icon: Calendar, number: "24/7", label: "Support Available", color: "text-slate-900" },
            ].map((stat, index) => (
              <GSAPAnimations key={index} animation="scaleIn" delay={index * 0.1}>
                <Card className="border-slate-200 text-center hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-500 group bg-white/95 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <stat.icon className={`h-8 w-8 ${stat.color}`} />
                    </div>
                    <div className={`text-4xl font-display font-bold ${stat.color} mb-2`}>{stat.number}</div>
                    <p className="text-slate-600 font-medium">{stat.label}</p>
                  </CardContent>
                </Card>
              </GSAPAnimations>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 to-blue-900 text-white relative overflow-hidden">
        <EnhancedThreeBackground variant="minimal" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <GSAPAnimations animation="fadeInUp">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">Ready to Create Your Success Story?</h2>
            <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Let's discuss how we can bring similar innovation and results to your project
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-orange-600 hover:to-amber-500 text-white px-10 py-4 text-lg shadow-2xl hover:shadow-amber-500/25 transition-all duration-500 transform hover:scale-105 font-medium"
                >
                  Start Your Project
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400/10 px-10 py-4 text-lg bg-transparent backdrop-blur-sm hover:border-amber-300 transition-all duration-500 transform hover:scale-105 font-medium"
                >
                  View Our Services
                </Button>
              </Link>
            </div>
          </GSAPAnimations>
        </div>
      </section>
    </div>
  )
}
