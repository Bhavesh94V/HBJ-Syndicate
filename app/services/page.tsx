"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Globe,
  ShoppingCart,
  Code,
  Palette,
  Settings,
  Cloud,
  ArrowRight,
  CheckCircle,
  Shield,
  Database,
} from "lucide-react"
import Link from "next/link"
import EnhancedThreeBackground from "@/components/enhanced-three-background"
import GSAPAnimations from "@/components/gsap-animations"
import { gsap } from "gsap"

export default function ServicesPage() {
  useEffect(() => {
    gsap.fromTo(".services-hero", { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1.5, ease: "power3.out" })
  }, [])

  const services = [
    {
      icon: Globe,
      title: "Custom Website Development",
      description: "Bespoke websites tailored to your brand identity and business objectives",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "CMS Integration"],
      price: "Starting from ₹35,000",
      gradient: "from-amber-500 to-orange-600",
      popular: false,
      link: "/services/web-development",
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description: "Complete online stores with payment gateways and inventory management",
      features: ["Payment Integration", "Inventory Management", "Order Tracking", "Analytics Dashboard"],
      price: "Starting from ₹65,000",
      gradient: "from-blue-500 to-indigo-600",
      popular: true,
      link: "/services/ecommerce",
    },
    {
      icon: Code,
      title: "Web Application Development",
      description: "Custom web applications to streamline your business processes",
      features: ["Custom Features", "Database Design", "API Integration", "Real-time Updates"],
      price: "Starting from ₹85,000",
      gradient: "from-slate-600 to-slate-800",
      popular: false,
      link: "/services/web-applications",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "User-centered design that enhances engagement and conversions",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      price: "Starting from ₹25,000",
      gradient: "from-purple-500 to-pink-600",
      popular: false,
      link: "/services/ui-ux-design",
    },
    {
      icon: Settings,
      title: "Website Maintenance",
      description: "Ongoing support to keep your website secure and up-to-date",
      features: ["Security Updates", "Performance Monitoring", "Content Updates", "24/7 Support"],
      price: "Starting from ₹8,000/month",
      gradient: "from-green-500 to-emerald-600",
      popular: false,
      link: "/services/maintenance",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment services",
      features: ["AWS/Azure Setup", "Auto Scaling", "Backup Solutions", "Performance Optimization"],
      price: "Starting from ₹20,000",
      gradient: "from-blue-500 to-indigo-600",
      popular: false,
      link: "/services/cloud-solutions",
    },
  ]

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Planning",
      description:
        "We understand your requirements, goals, and target audience to create a comprehensive project roadmap.",
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description: "Our team creates wireframes and prototypes to visualize the final product before development.",
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "We build your solution using cutting-edge technologies and conduct thorough testing.",
    },
    {
      step: "04",
      title: "Launch & Support",
      description: "We deploy your project and provide ongoing support to ensure optimal performance.",
    },
  ]

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <EnhancedThreeBackground variant="hero" />

      {/* Hero Section - Fixed spacing */}
      <section className="relative min-h-[80vh] flex items-center justify-center pt-32 pb-16">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-slate-800/95"></div>
        <div className="services-hero relative container mx-auto px-4 py-20 z-10">
          <div className="max-w-5xl mx-auto text-center text-white">
            <Badge className="mb-8 bg-amber-500/20 text-amber-300 border-amber-500/30 text-lg px-6 py-3 backdrop-blur-sm font-medium">
              Our Services
            </Badge>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-8 bg-gradient-to-r from-white to-amber-300 bg-clip-text text-transparent">
              Premium Digital Solutions for Every Need
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              From concept to deployment, we provide comprehensive digital solutions that drive growth and innovation
              for your business
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white relative">
        <EnhancedThreeBackground variant="section" />
        <div className="container mx-auto px-4 relative z-10">
          <GSAPAnimations animation="fadeInUp" trigger=".services-grid">
            <div className="services-grid text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6">Our Services</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Comprehensive solutions designed to elevate your digital presence and drive business success
              </p>
            </div>
          </GSAPAnimations>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <GSAPAnimations key={index} animation="scaleIn" delay={index * 0.1}>
                <Link href={service.link}>
                  <Card className="border-slate-200 hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-700 group transform hover:-translate-y-4 h-full relative overflow-hidden bg-white/90 backdrop-blur-sm cursor-pointer">
                    {service.popular && (
                      <div className="absolute top-4 right-4 z-20">
                        <Badge className="bg-amber-500 text-white font-medium">Most Popular</Badge>
                      </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                    <CardHeader className="pb-4 relative z-10">
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 shadow-lg`}
                      >
                        <service.icon className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-xl font-display font-semibold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors duration-500">
                        {service.title}
                      </CardTitle>
                      <p className="text-slate-600 leading-relaxed">{service.description}</p>
                    </CardHeader>
                    <CardContent className="pt-0 relative z-10">
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-slate-600">
                            <CheckCircle className="h-4 w-4 text-amber-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center justify-between">
                        {/* <span className="text-lg font-display font-semibold text-slate-900">{service.price}</span> */}
                        <Button
                          size="sm"
                          className="bg-gradient-to-r mx-auto from-amber-500 to-orange-600 hover:from-orange-600 hover:to-amber-500 text-white shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105"
                        >
                          <div className="flex items-center">
                            Learn More
                            <ArrowRight className="ml-1 h-4 w-4" />
                          </div>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </GSAPAnimations>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-white relative">
        <div className="container mx-auto px-4">
          <GSAPAnimations animation="slideInLeft" trigger=".process-section">
            <div className="process-section text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6">Our Process</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                A proven methodology that ensures successful project delivery and exceptional results
              </p>
            </div>
          </GSAPAnimations>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <GSAPAnimations key={index} animation="fadeInUp" delay={index * 0.2}>
                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 shadow-lg">
                    <span className="text-2xl font-display font-bold text-white">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-display font-semibold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors duration-500">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">{step.description}</p>
                </div>
              </GSAPAnimations>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <GSAPAnimations animation="slideInRight" trigger=".tech-section">
            <div className="tech-section text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6">Technologies We Use</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Cutting-edge tools and frameworks for modern digital solutions
              </p>
            </div>
          </GSAPAnimations>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Code, title: "Frontend", techs: ["React.js", "Vue.js", "Next.js", "TypeScript"] },
              { icon: Database, title: "Backend", techs: ["Node.js", "Python", "Django", "Express.js"] },
              { icon: Shield, title: "Database", techs: ["PostgreSQL", "MongoDB", "MySQL", "Redis"] },
              { icon: Cloud, title: "Cloud", techs: ["AWS", "Google Cloud", "Azure", "Docker"] },
            ].map((category, index) => (
              <GSAPAnimations key={index} animation="scaleIn" delay={index * 0.1}>
                <Card className="border-slate-200 hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-500 group bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-slate-600 to-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <category.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-display font-semibold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors duration-500">
                      {category.title}
                    </h3>
                    <ul className="space-y-1">
                      {category.techs.map((tech, idx) => (
                        <li key={idx} className="text-sm text-slate-600">
                          {tech}
                        </li>
                      ))}
                    </ul>
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
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">Ready to Start Your Project?</h2>
            <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Let's discuss your requirements and create a solution that exceeds your expectations
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-orange-600 hover:to-amber-500 text-white px-10 py-4 text-lg shadow-2xl hover:shadow-amber-500/25 transition-all duration-500 transform hover:scale-105 font-medium"
                >
                  Get Free Quote
                </Button>
              </Link>
              <Link href="/projects">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400/10 px-10 py-4 text-lg bg-transparent backdrop-blur-sm hover:border-amber-300 transition-all duration-500 transform hover:scale-105 font-medium"
                >
                  View Our Work
                </Button>
              </Link>
            </div>
          </GSAPAnimations>
        </div>
      </section>
    </div>
  )
}
