"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, CheckCircle, CreditCard, Package, BarChart3, Shield, Truck, Users, Clock } from "lucide-react"
import Link from "next/link"
import EnhancedThreeBackground from "@/components/enhanced-three-background"
import GSAPAnimations from "@/components/gsap-animations"
import { gsap } from "gsap"

export default function EcommercePage() {
  const [selectedPackage, setSelectedPackage] = useState("starter")
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([])

  useEffect(() => {
    gsap.fromTo(".service-hero", { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1.5, ease: "power3.out" })
  }, [])

  const packages = {
    starter: {
      name: "Starter Store",
      price: 65000,
      duration: "3-4 weeks",
      products: "Up to 100 products",
      features: [
        "Responsive Design",
        "Product Catalog",
        "Shopping Cart",
        "Payment Gateway",
        "Order Management",
        "Basic Analytics",
        "3 Months Support",
      ],
      ideal: "Small businesses, startups",
    },
    professional: {
      name: "Professional Store",
      price: 95000,
      duration: "4-6 weeks",
      products: "Up to 500 products",
      features: [
        "Everything in Starter",
        "Advanced Search & Filters",
        "Inventory Management",
        "Customer Accounts",
        "Wishlist & Reviews",
        "Email Marketing",
        "SEO Optimization",
        "6 Months Support",
      ],
      ideal: "Growing businesses, multiple products",
    },
    enterprise: {
      name: "Enterprise Store",
      price: 150000,
      duration: "6-8 weeks",
      products: "Unlimited products",
      features: [
        "Everything in Professional",
        "Multi-vendor Support",
        "Advanced Analytics",
        "Custom Integrations",
        "Mobile App",
        "Multi-currency",
        "Advanced Security",
        "1 Year Support",
      ],
      ideal: "Large businesses, complex requirements",
    },
    marketplace: {
      name: "Marketplace Platform",
      price: 250000,
      duration: "8-12 weeks",
      products: "Unlimited products & vendors",
      features: [
        "Everything in Enterprise",
        "Vendor Management",
        "Commission System",
        "Advanced Reporting",
        "API Development",
        "Custom Features",
        "Dedicated Support",
        "Lifetime Updates",
      ],
      ideal: "Marketplace businesses, multi-vendor platforms",
    },
  }

  const additionalFeatures = [
    { name: "Mobile App Development", price: 80000 },
    { name: "Advanced Analytics Dashboard", price: 25000 },
    { name: "Multi-language Support", price: 30000 },
    { name: "Advanced SEO Package", price: 20000 },
    { name: "Social Media Integration", price: 15000 },
    { name: "Live Chat Support", price: 18000 },
    { name: "Subscription Management", price: 35000 },
    { name: "Advanced Security Features", price: 25000 },
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
              <ShoppingCart className="w-5 h-5 mr-2" />
              E-commerce Solutions
            </Badge>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-8 bg-gradient-to-r from-white to-appex-gold bg-clip-text text-transparent">
              Complete E-commerce Solutions
            </h1>
            <p className="text-xl text-appex-silver max-w-4xl mx-auto leading-relaxed">
              Powerful online stores with payment gateways, inventory management, and advanced analytics to drive your
              business growth
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
              <h2 className="text-3xl md:text-5xl font-display font-bold text-appex-navy mb-6">E-commerce Packages</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Choose the perfect e-commerce solution for your business
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
                      <ShoppingCart className="h-8 w-8 text-white" />
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
                        <Package className="h-4 w-4 text-appex-gold mr-2" />
                        {pkg.products}
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
                <p className="text-slate-600 text-center">Enhance your e-commerce store with additional features</p>
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
              <h2 className="text-3xl md:text-5xl font-display font-bold text-appex-navy mb-6">E-commerce Features</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Everything you need to run a successful online store
              </p>
            </div>
          </GSAPAnimations>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: CreditCard,
                title: "Payment Gateway",
                desc: "Secure payment processing with multiple payment options",
              },
              {
                icon: Package,
                title: "Inventory Management",
                desc: "Real-time inventory tracking and automated stock alerts",
              },
              {
                icon: BarChart3,
                title: "Analytics Dashboard",
                desc: "Comprehensive sales analytics and business insights",
              },
              {
                icon: Shield,
                title: "Security Features",
                desc: "SSL certificates, secure checkout, and data protection",
              },
              {
                icon: Truck,
                title: "Order Management",
                desc: "Complete order processing and shipping management",
              },
              {
                icon: Users,
                title: "Customer Management",
                desc: "Customer accounts, profiles, and order history",
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
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">Ready to Launch Your Store?</h2>
            <p className="text-xl text-appex-silver mb-12 max-w-3xl mx-auto leading-relaxed">
              Let's build a powerful e-commerce platform that drives sales and grows your business
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-appex-gold to-appex-silver hover:from-appex-silver hover:to-appex-gold text-appex-navy px-10 py-4 text-lg shadow-2xl hover:shadow-appex-gold/25 transition-all duration-500 transform hover:scale-105 font-medium"
              >
                <Link href="/contact">Start Your Store</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-appex-gold text-appex-gold hover:bg-appex-gold/10 px-10 py-4 text-lg bg-transparent backdrop-blur-sm hover:border-appex-silver transition-all duration-500 transform hover:scale-105 font-medium"
              >
                <Link href="/projects">View E-commerce Examples</Link>
              </Button>
            </div>
          </GSAPAnimations>
        </div>
      </section>
    </div>
  )
}
