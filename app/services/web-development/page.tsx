"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Globe, CheckCircle, Smartphone, Zap, Shield, Search, Palette, Database, Clock } from "lucide-react"
import Link from "next/link"
import EnhancedThreeBackground from "@/components/enhanced-three-background"
import GSAPAnimations from "@/components/gsap-animations"
import { gsap } from "gsap"

export default function WebDevelopmentPage() {
  const [selectedPackage, setSelectedPackage] = useState("basic")
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([])

  useEffect(() => {
    gsap.fromTo(".service-hero", { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1.5, ease: "power3.out" })
  }, [])

  const packages = {
    basic: {
      name: "Basic Website",
      price: 35000,
      duration: "2-3 weeks",
      pages: "Up to 5 pages",
      features: [
        "Responsive Design",
        "Basic SEO Setup",
        "Contact Form",
        "Social Media Integration",
        "Mobile Optimization",
        "1 Month Support",
      ],
      ideal: "Small businesses, portfolios, landing pages",
    },
    standard: {
      name: "Standard Website",
      price: 65000,
      duration: "3-4 weeks",
      pages: "Up to 10 pages",
      features: [
        "Everything in Basic",
        "Advanced SEO",
        "Blog/News Section",
        "Google Analytics",
        "Live Chat Integration",
        "3 Months Support",
        "Admin Panel",
      ],
      ideal: "Growing businesses, service companies",
    },
    premium: {
      name: "Premium Website",
      price: 95000,
      duration: "4-6 weeks",
      pages: "Up to 20 pages",
      features: [
        "Everything in Standard",
        "Custom CMS",
        "Advanced Animations",
        "Multi-language Support",
        "Payment Gateway",
        "6 Months Support",
        "Performance Optimization",
        "Security Features",
      ],
      ideal: "Large businesses, complex requirements",
    },
    enterprise: {
      name: "Enterprise Website",
      price: 150000,
      duration: "6-8 weeks",
      pages: "Unlimited pages",
      features: [
        "Everything in Premium",
        "Custom Development",
        "API Integrations",
        "Advanced Security",
        "Load Balancing",
        "1 Year Support",
        "Dedicated Account Manager",
        "Priority Support",
      ],
      ideal: "Large enterprises, complex systems",
    },
  }

  const additionalFeatures = [
    { name: "E-commerce Integration", price: 25000 },
    { name: "Advanced Analytics", price: 15000 },
    { name: "Custom API Development", price: 35000 },
    { name: "Third-party Integrations", price: 20000 },
    { name: "Advanced Security", price: 18000 },
    { name: "Performance Optimization", price: 12000 },
    { name: "Multi-language Support", price: 22000 },
    { name: "Custom Admin Panel", price: 30000 },
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
              <Globe className="w-5 h-5 mr-2" />
              Web Development
            </Badge>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-8 bg-gradient-to-r from-white to-appex-gold bg-clip-text text-transparent">
              Custom Website Development
            </h1>
            <p className="text-xl text-appex-silver max-w-4xl mx-auto leading-relaxed">
              Professional, responsive websites that captivate your audience and drive business growth with modern
              design and flawless functionality
            </p>
          </div>
        </div>
      </section>

      {/* Package Selection */}
      <section className="py-24 bg-white relative">
        <EnhancedThreeBackground variant="section" />
        <div className="container mx-auto px-4 relative z-10">
          <GSAPAnimations animation="fadeInUp">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-appex-navy mb-6">Choose Your Package</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Select the perfect package for your business needs
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
                      <Globe className="h-8 w-8 text-white" />
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
                        <Globe className="h-4 w-4 text-appex-gold mr-2" />
                        {pkg.pages}
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
                <p className="text-slate-600 text-center">Customize your package with additional features</p>
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
          <GSAPAnimations animation="slideInLeft">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-appex-navy mb-6">What You Get</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Comprehensive web development services with modern technologies
              </p>
            </div>
          </GSAPAnimations>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Smartphone,
                title: "Responsive Design",
                desc: "Perfect display on all devices - desktop, tablet, and mobile",
              },
              {
                icon: Search,
                title: "SEO Optimized",
                desc: "Built-in SEO best practices to improve search engine rankings",
              },
              {
                icon: Zap,
                title: "Fast Loading",
                desc: "Optimized for speed with modern performance techniques",
              },
              {
                icon: Shield,
                title: "Secure & Reliable",
                desc: "Enterprise-grade security and reliable hosting solutions",
              },
              {
                icon: Palette,
                title: "Custom Design",
                desc: "Unique designs tailored to your brand and business needs",
              },
              {
                icon: Database,
                title: "CMS Integration",
                desc: "Easy content management system for effortless updates",
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

      {/* Process Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <GSAPAnimations animation="fadeInUp">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-appex-navy mb-6">
                Our Development Process
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                A proven methodology that ensures successful project delivery
              </p>
            </div>
          </GSAPAnimations>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your requirements and goals" },
              { step: "02", title: "Design", desc: "Creating wireframes and visual designs" },
              { step: "03", title: "Development", desc: "Building your website with modern technologies" },
              { step: "04", title: "Launch", desc: "Testing, deployment, and ongoing support" },
            ].map((step, index) => (
              <GSAPAnimations key={index} animation="fadeInUp" delay={index * 0.2}>
                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-appex-gold to-appex-blue rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                    <span className="text-2xl font-display font-bold text-white">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-display font-semibold text-appex-navy mb-3 group-hover:text-appex-gold transition-colors duration-500">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
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
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">Ready to Build Your Website?</h2>
            <p className="text-xl text-appex-silver mb-12 max-w-3xl mx-auto leading-relaxed">
              Let's create a stunning website that drives your business forward
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
                <Link href="/projects">View Our Work</Link>
              </Button>
            </div>
          </GSAPAnimations>
        </div>
      </section>
    </div>
  )
}
