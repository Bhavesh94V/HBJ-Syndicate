"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Zap, Clock, TrendingUp, CheckCircle, AlertTriangle, Settings, Monitor, ArrowRight } from "lucide-react"
import Link from "next/link"
import EnhancedThreeBackground from "@/components/enhanced-three-background"
import GSAPAnimations from "@/components/gsap-animations"
import { gsap } from "gsap"

export default function MaintenancePage() {
  useEffect(() => {
    gsap.fromTo(".maintenance-hero", { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1.5, ease: "power3.out" })
  }, [])

  const maintenancePlans = [
    {
      name: "Basic Care",
      price: "₹8,000",
      period: "/month",
      description: "Essential maintenance for small websites",
      features: [
        "Security updates & patches",
        "Weekly backups",
        "Uptime monitoring",
        "Basic performance optimization",
        "Email support",
        "Monthly reports",
      ],
      gradient: "from-green-500 to-emerald-600",
      popular: false,
    },
    {
      name: "Professional",
      price: "₹15,000",
      period: "/month",
      description: "Comprehensive care for business websites",
      features: [
        "Everything in Basic Care",
        "Daily backups",
        "Advanced security monitoring",
        "Performance optimization",
        "Content updates (2 hours/month)",
        "Priority support",
        "SEO monitoring",
        "Analytics reports",
      ],
      gradient: "from-blue-500 to-indigo-600",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "₹25,000",
      period: "/month",
      description: "Premium maintenance for large-scale websites",
      features: [
        "Everything in Professional",
        "Real-time monitoring",
        "Advanced security suite",
        "Database optimization",
        "Content updates (5 hours/month)",
        "24/7 phone support",
        "Custom development (2 hours/month)",
        "Dedicated account manager",
      ],
      gradient: "from-purple-500 to-pink-600",
      popular: false,
    },
  ]

  const services = [
    {
      icon: Shield,
      title: "Security Management",
      description: "Comprehensive security monitoring, malware scanning, and vulnerability assessments",
      features: ["Malware scanning", "Security patches", "Firewall management", "SSL certificate management"],
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Keep your website fast and responsive with regular performance tuning",
      features: ["Speed optimization", "Image compression", "Cache management", "Database optimization"],
    },
    {
      icon: Monitor,
      title: "Uptime Monitoring",
      description: "24/7 monitoring to ensure your website is always accessible to your customers",
      features: ["Real-time monitoring", "Instant alerts", "Downtime reports", "Performance metrics"],
    },
    {
      icon: Settings,
      title: "Content Updates",
      description: "Regular content updates and modifications to keep your website fresh and current",
      features: ["Text updates", "Image updates", "New page creation", "Menu modifications"],
    },
  ]

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <EnhancedThreeBackground variant="hero" />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center pt-32 pb-16">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-green-900/90 to-slate-800/95"></div>
        <div className="maintenance-hero relative container mx-auto px-4 py-20 z-10">
          <div className="max-w-5xl mx-auto text-center text-white">
            <Badge className="mb-8 bg-green-500/20 text-green-300 border-green-500/30 text-lg px-6 py-3 backdrop-blur-sm font-medium">
              <Shield className="w-5 h-5 mr-2" />
              Website Maintenance
            </Badge>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-8 bg-gradient-to-r from-white to-green-300 bg-clip-text text-transparent">
              Keep Your Website Running Smoothly
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Professional website maintenance services to ensure your site stays secure, fast, and up-to-date
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-white relative">
        <EnhancedThreeBackground variant="section" />
        <div className="container mx-auto px-4 relative z-10">
          <GSAPAnimations animation="fadeInUp" trigger=".services-section">
            <div className="services-section text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6">
                Comprehensive Maintenance Services
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Everything you need to keep your website secure, fast, and performing at its best
              </p>
            </div>
          </GSAPAnimations>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <GSAPAnimations key={index} animation="scaleIn" delay={index * 0.1}>
                <Card className="border-slate-200 hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-700 group transform hover:-translate-y-4 h-full bg-white/95 backdrop-blur-sm">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 shadow-lg">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-display font-semibold text-slate-900 mb-2 group-hover:text-green-600 transition-colors duration-500">
                      {service.title}
                    </CardTitle>
                    <p className="text-slate-600 leading-relaxed">{service.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-slate-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
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

      {/* Pricing Plans */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-white relative">
        <div className="container mx-auto px-4">
          <GSAPAnimations animation="slideInLeft" trigger=".pricing-section">
            <div className="pricing-section text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6">Maintenance Plans</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Choose the perfect maintenance plan for your website's needs
              </p>
            </div>
          </GSAPAnimations>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {maintenancePlans.map((plan, index) => (
              <GSAPAnimations key={index} animation="scaleIn" delay={index * 0.2}>
                <Card
                  className={`border-slate-200 hover:shadow-2xl transition-all duration-700 group transform hover:-translate-y-4 h-full relative overflow-hidden bg-white/95 backdrop-blur-sm ${
                    plan.popular ? "ring-2 ring-green-500 shadow-green-500/20" : ""
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute top-4 right-4 z-20">
                      <Badge className="bg-green-500 text-white font-medium">Most Popular</Badge>
                    </div>
                  )}

                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-700`}
                  ></div>

                  <CardHeader className="text-center relative z-10">
                    <div
                      className={`w-20 h-20 bg-gradient-to-br ${plan.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 shadow-lg`}
                    >
                      <Settings className="h-10 w-10 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-display font-bold text-slate-900 mb-2 group-hover:text-green-600 transition-colors duration-500">
                      {plan.name}
                    </CardTitle>
                    <div className="mb-4">
                      {/* <span className="text-4xl font-display font-bold text-slate-900">{plan.price}</span> */}
                      <span className="text-slate-600">{plan.period}</span>
                    </div>
                    <p className="text-slate-600 leading-relaxed">{plan.description}</p>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-slate-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact">
                      <Button
                        className={`w-full shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 font-medium ${
                          plan.popular
                            ? "bg-gradient-to-r from-green-500 to-emerald-600 hover:from-emerald-600 hover:to-green-500 text-white"
                            : "bg-gradient-to-r from-slate-600 to-slate-800 hover:from-slate-800 hover:to-slate-600 text-white"
                        }`}
                      >
                        Get Started
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </GSAPAnimations>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Maintenance */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <GSAPAnimations animation="slideInRight" trigger=".why-choose-section">
            <div className="why-choose-section text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6">
                Why Choose Our Maintenance?
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Professional maintenance that keeps your website running at peak performance
              </p>
            </div>
          </GSAPAnimations>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Clock,
                title: "24/7 Monitoring",
                description: "Round-the-clock monitoring to catch issues before they affect your visitors",
              },
              {
                icon: Shield,
                title: "Security First",
                description: "Advanced security measures to protect your website from threats and vulnerabilities",
              },
              {
                icon: TrendingUp,
                title: "Performance Focus",
                description: "Continuous optimization to ensure your website loads fast and performs well",
              },
              {
                icon: AlertTriangle,
                title: "Proactive Support",
                description: "We identify and fix issues before they become problems for your business",
              },
            ].map((benefit, index) => (
              <GSAPAnimations key={index} animation="fadeInUp" delay={index * 0.2}>
                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-700 shadow-lg">
                    <benefit.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-slate-900 mb-3 group-hover:text-green-600 transition-colors duration-500">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
                </div>
              </GSAPAnimations>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 to-green-900 text-white relative overflow-hidden">
        <EnhancedThreeBackground variant="minimal" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <GSAPAnimations animation="fadeInUp">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">Ready to Secure Your Website's Future?</h2>
            <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Don't wait for problems to occur. Start protecting your website today with our professional maintenance
              services.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-emerald-600 hover:to-green-500 text-white px-10 py-4 text-lg shadow-2xl hover:shadow-green-500/25 transition-all duration-500 transform hover:scale-105 font-medium"
                >
                  <div className="flex items-center">
                    Start Maintenance Plan
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </div>
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-green-400 text-green-400 hover:bg-green-400/10 px-10 py-4 text-lg bg-transparent backdrop-blur-sm hover:border-green-300 transition-all duration-500 transform hover:scale-105 font-medium"
                >
                  View All Services
                </Button>
              </Link>
            </div>
          </GSAPAnimations>
        </div>
      </section>
    </div>
  )
}
