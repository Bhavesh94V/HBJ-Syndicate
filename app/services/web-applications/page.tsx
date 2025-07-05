"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, CheckCircle, Database, Cloud, Shield, Zap, Users, BarChart3, Settings, Clock } from "lucide-react"
import Link from "next/link"
import EnhancedThreeBackground from "@/components/enhanced-three-background"
import GSAPAnimations from "@/components/gsap-animations"
import { gsap } from "gsap"

export default function WebApplicationsPage() {
  const [selectedPackage, setSelectedPackage] = useState("basic")
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([])

  useEffect(() => {
    gsap.fromTo(".service-hero", { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1.5, ease: "power3.out" })
  }, [])

  const packages = {
    basic: {
      name: "Basic Web App",
      price: 85000,
      duration: "4-6 weeks",
      users: "Up to 100 users",
      features: [
        "Custom Development",
        "User Authentication",
        "Database Integration",
        "Responsive Design",
        "Basic Admin Panel",
        "API Development",
        "3 Months Support",
      ],
      ideal: "Small businesses, simple applications",
    },
    advanced: {
      name: "Advanced Web App",
      price: 150000,
      duration: "6-8 weeks",
      users: "Up to 1000 users",
      features: [
        "Everything in Basic",
        "Advanced Features",
        "Real-time Updates",
        "File Management",
        "Advanced Analytics",
        "Third-party Integrations",
        "Performance Optimization",
        "6 Months Support",
      ],
      ideal: "Growing businesses, complex workflows",
    },
    enterprise: {
      name: "Enterprise Web App",
      price: 250000,
      duration: "8-12 weeks",
      users: "Unlimited users",
      features: [
        "Everything in Advanced",
        "Custom Architecture",
        "Microservices",
        "Advanced Security",
        "Load Balancing",
        "Multi-tenant Support",
        "Custom Integrations",
        "1 Year Support",
      ],
      ideal: "Large enterprises, complex systems",
    },
    custom: {
      name: "Custom Solution",
      price: 350000,
      duration: "12+ weeks",
      users: "Unlimited users",
      features: [
        "Everything in Enterprise",
        "Fully Custom Development",
        "AI/ML Integration",
        "Advanced Analytics",
        "Custom Workflows",
        "Dedicated Team",
        "Priority Support",
        "Lifetime Updates",
      ],
      ideal: "Complex enterprise solutions, AI-powered apps",
    },
  }

  const additionalFeatures = [
    { name: "AI/ML Integration", price: 75000 },
    { name: "Real-time Chat System", price: 40000 },
    { name: "Advanced Reporting", price: 35000 },
    { name: "Mobile App Integration", price: 60000 },
    { name: "Third-party API Integration", price: 25000 },
    { name: "Advanced Security Package", price: 30000 },
    { name: "Performance Optimization", price: 20000 },
    { name: "Custom Workflow Builder", price: 50000 },
  ]

  const calculateTotalPrice = () => {
    const basePrice = packages[selectedPackage as keyof typeof packages].price
    const featuresPrice = selectedFeatures.reduce((total, featureName) => {
      const feature = additionalFeatures.find((f) => f.name === featureName)
      return total + (feature?.price || 0)
    }, 0)
    return basePrice + featuresPrice
  }

  const toggleFeature = (featureName: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(featureName) ? prev.filter((f) => f !== featureName) : [...prev, featureName],
    )
  }

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <EnhancedThreeBackground variant="hero" />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-appex-navy/95 via-appex-blue/90 to-appex-accent/85"></div>
        <div className="service-hero relative container mx-auto px-4 py-20 z-10">
          <div className="max-w-5xl mx-auto text-center text-white">
            <Badge className="mb-8 bg-appex-gold/20 text-appex-gold border-appex-gold/30 text-lg px-6 py-3 backdrop-blur-sm font-medium">
              <Code className="w-5 h-5 mr-2" />
              Web Applications
            </Badge>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-8 bg-gradient-to-r from-white to-appex-gold bg-clip-text text-transparent">
              Custom Web Applications
            </h1>
            <p className="text-xl text-appex-silver max-w-4xl mx-auto leading-relaxed">
              Sophisticated web applications to streamline your business processes with custom features, database
              design, and API integration
            </p>
          </div>
        </div>
      </section>

      {/* Package Selection */}
      <section className="py-24 bg-white relative">
        <EnhancedThreeBackground variant="section" />
        <div className="container mx-auto px-4 relative z-10">
          <GSAPAnimations animation="fadeInUp" trigger=".packages-section">
            <div className="packages-section text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-appex-navy mb-6">
                Web Application Packages
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Choose the perfect web application solution for your business needs
              </p>
            </div>
          </GSAPAnimations>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {Object.entries(packages).map(([key, pkg], index) => (
              <GSAPAnimations key={key} animation="scaleIn" delay={index * 0.1}>
                <Card
                  className={`border-2 cursor-pointer transition-all duration-500 hover:shadow-2xl hover:shadow-appex-gold/20 transform hover:-translate-y-2 ${
                    selectedPackage === key
                      ? "border-appex-gold bg-appex-gold/5"
                      : "border-slate-200 hover:border-appex-gold/50"
                  }`}
                  onClick={() => setSelectedPackage(key)}
                >
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-appex-gold to-appex-blue rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Code className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-display font-bold text-appex-navy">{pkg.name}</CardTitle>
                    <div className="text-3xl font-display font-bold text-appex-gold">₹{pkg.price.toLocaleString()}</div>
                    <p className="text-sm text-slate-600">{pkg.ideal}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-sm text-slate-600">
                        <Clock className="h-4 w-4 text-appex-gold mr-2" />
                        {pkg.duration}
                      </div>
                      <div className="flex items-center text-sm text-slate-600">
                        <Users className="h-4 w-4 text-appex-gold mr-2" />
                        {pkg.users}
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-slate-600">
                          <CheckCircle className="h-4 w-4 text-appex-gold mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </GSAPAnimations>
            ))}
          </div>

          {/* Additional Features */}
          <GSAPAnimations animation="slideInUp">
            <Card className="border-slate-200 shadow-lg bg-white/95 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-display font-bold text-appex-navy text-center">
                  Additional Features
                </CardTitle>
                <p className="text-slate-600 text-center">Enhance your web application with advanced features</p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {additionalFeatures.map((feature, index) => (
                    <div
                      key={index}
                      className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-300 ${
                        selectedFeatures.includes(feature.name)
                          ? "border-appex-gold bg-appex-gold/5"
                          : "border-slate-200 hover:border-appex-gold/50"
                      }`}
                      onClick={() => toggleFeature(feature.name)}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-appex-navy text-sm">{feature.name}</h4>
                          <p className="text-appex-gold font-semibold">+₹{feature.price.toLocaleString()}</p>
                        </div>
                        <CheckCircle
                          className={`h-5 w-5 ${
                            selectedFeatures.includes(feature.name) ? "text-appex-gold" : "text-slate-300"
                          }`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </GSAPAnimations>

          {/* Price Summary */}
          <GSAPAnimations animation="fadeInUp" delay={0.3}>
            <Card className="mt-8 border-appex-gold/30 bg-gradient-to-br from-appex-light to-slate-50 shadow-xl">
              <CardContent className="p-8">
                <div className="text-center">
                  <h3 className="text-2xl font-display font-bold text-appex-navy mb-4">Total Investment</h3>
                  <div className="text-5xl font-display font-bold text-appex-gold mb-4">
                    ₹{calculateTotalPrice().toLocaleString()}
                  </div>
                  <p className="text-slate-600 mb-6">
                    {packages[selectedPackage as keyof typeof packages].name}
                    {selectedFeatures.length > 0 && ` + ${selectedFeatures.length} additional features`}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-appex-gold to-appex-blue hover:from-appex-blue hover:to-appex-navy text-white px-10 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 font-medium"
                    >
                      <Link href="/contact">Get Started Now</Link>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-appex-navy text-appex-navy hover:bg-appex-navy/10 px-10 py-4 text-lg bg-transparent hover:border-appex-gold transition-all duration-500 transform hover:scale-105 font-medium"
                    >
                      Schedule Consultation
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </GSAPAnimations>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-br from-appex-light to-slate-50 relative">
        <div className="container mx-auto px-4">
          <GSAPAnimations animation="slideInLeft" trigger=".features-section">
            <div className="features-section text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-appex-navy mb-6">Application Features</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Powerful features to streamline your business operations
              </p>
            </div>
          </GSAPAnimations>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Database,
                title: "Database Design",
                desc: "Custom database architecture optimized for your business needs",
              },
              {
                icon: Cloud,
                title: "API Development",
                desc: "RESTful APIs for seamless integration with other systems",
              },
              {
                icon: Shield,
                title: "Security Features",
                desc: "Enterprise-grade security with authentication and authorization",
              },
              {
                icon: Zap,
                title: "Real-time Updates",
                desc: "Live data synchronization and real-time notifications",
              },
              {
                icon: BarChart3,
                title: "Analytics Dashboard",
                desc: "Comprehensive reporting and business intelligence features",
              },
              {
                icon: Settings,
                title: "Admin Panel",
                desc: "Powerful admin interface for complete system management",
              },
            ].map((feature, index) => (
              <GSAPAnimations key={index} animation="scaleIn" delay={index * 0.1}>
                <Card className="border-slate-200 hover:shadow-lg hover:shadow-appex-gold/20 transition-all duration-500 group bg-white/95 backdrop-blur-sm">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-appex-gold to-appex-blue rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-display font-semibold text-appex-navy mb-3 group-hover:text-appex-gold transition-colors duration-500">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                  </CardContent>
                </Card>
              </GSAPAnimations>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-appex-navy to-appex-blue text-white relative overflow-hidden">
        <EnhancedThreeBackground variant="minimal" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <GSAPAnimations animation="fadeInUp">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">Ready to Build Your Application?</h2>
            <p className="text-xl text-appex-silver mb-12 max-w-3xl mx-auto leading-relaxed">
              Let's create a powerful web application that transforms your business operations
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-appex-gold to-appex-silver hover:from-appex-silver hover:to-appex-gold text-appex-navy px-10 py-4 text-lg shadow-2xl hover:shadow-appex-gold/25 transition-all duration-500 transform hover:scale-105 font-medium"
              >
                <Link href="/contact">Start Your Project</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-appex-gold text-appex-gold hover:bg-appex-gold/10 px-10 py-4 text-lg bg-transparent backdrop-blur-sm hover:border-appex-silver transition-all duration-500 transform hover:scale-105 font-medium"
              >
                <Link href="/projects">View Applications</Link>
              </Button>
            </div>
          </GSAPAnimations>
        </div>
      </section>
    </div>
  )
}
