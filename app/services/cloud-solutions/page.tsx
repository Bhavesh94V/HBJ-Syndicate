"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Cloud, Server, Shield, Zap, Database, CheckCircle, TrendingUp, ArrowRight, Settings } from "lucide-react"
import Link from "next/link"
import EnhancedThreeBackground from "@/components/enhanced-three-background"
import GSAPAnimations from "@/components/gsap-animations"
import { gsap } from "gsap"

export default function CloudSolutionsPage() {
  useEffect(() => {
    gsap.fromTo(".cloud-hero", { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1.5, ease: "power3.out" })
  }, [])

  const cloudServices = [
    {
      icon: Cloud,
      title: "Cloud Migration",
      description: "Seamlessly migrate your existing infrastructure to the cloud with zero downtime",
      features: ["Assessment & Planning", "Data Migration", "Application Migration", "Testing & Validation"],
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      icon: Server,
      title: "Infrastructure Setup",
      description: "Design and deploy scalable cloud infrastructure tailored to your business needs",
      features: ["Architecture Design", "Server Configuration", "Load Balancing", "Auto Scaling"],
      gradient: "from-slate-600 to-slate-800",
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Implement robust security measures and ensure compliance with industry standards",
      features: ["Security Audits", "Compliance Setup", "Access Management", "Monitoring & Alerts"],
      gradient: "from-green-500 to-emerald-600",
    },
    {
      icon: Database,
      title: "Database Solutions",
      description: "Optimize your databases for cloud performance and reliability",
      features: ["Database Migration", "Performance Tuning", "Backup Solutions", "Disaster Recovery"],
      gradient: "from-purple-500 to-pink-600",
    },
  ]

  const cloudPlatforms = [
    {
      name: "Amazon Web Services",
      logo: "AWS",
      description: "Comprehensive cloud services with global infrastructure",
      services: ["EC2", "S3", "RDS", "Lambda", "CloudFront", "Route 53"],
    },
    {
      name: "Google Cloud Platform",
      logo: "GCP",
      description: "Advanced analytics and machine learning capabilities",
      services: ["Compute Engine", "Cloud Storage", "BigQuery", "Kubernetes Engine", "Cloud Functions"],
    },
    {
      name: "Microsoft Azure",
      logo: "Azure",
      description: "Enterprise-grade cloud solutions with hybrid capabilities",
      services: ["Virtual Machines", "Blob Storage", "SQL Database", "App Service", "Azure Functions"],
    },
  ]

  const benefits = [
    {
      icon: TrendingUp,
      title: "Scalability",
      description: "Scale your resources up or down based on demand without infrastructure constraints",
    },
    {
      icon: Shield,
      title: "Security",
      description: "Enterprise-grade security with advanced threat protection and compliance features",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "High-performance infrastructure with global content delivery networks",
    },
    {
      icon: Settings,
      title: "Automation",
      description: "Automated deployment, monitoring, and maintenance for reduced operational overhead",
    },
  ]

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <EnhancedThreeBackground variant="hero" />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center pt-32 pb-16">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-slate-800/95"></div>
        <div className="cloud-hero relative container mx-auto px-4 py-20 z-10">
          <div className="max-w-5xl mx-auto text-center text-white">
            <Badge className="mb-8 bg-blue-500/20 text-blue-300 border-blue-500/30 text-lg px-6 py-3 backdrop-blur-sm font-medium">
              <Cloud className="w-5 h-5 mr-2" />
              Cloud Solutions
            </Badge>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-8 bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
              Scalable Cloud Infrastructure
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Transform your business with modern cloud solutions that provide scalability, security, and performance
              optimization
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
              <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6">Our Cloud Services</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Comprehensive cloud solutions to modernize your infrastructure and accelerate your business growth
              </p>
            </div>
          </GSAPAnimations>

          <div className="grid md:grid-cols-2 gap-8">
            {cloudServices.map((service, index) => (
              <GSAPAnimations key={index} animation="scaleIn" delay={index * 0.1}>
                <Card className="border-slate-200 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-700 group transform hover:-translate-y-4 h-full bg-white/95 backdrop-blur-sm">
                  <CardHeader>
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 shadow-lg`}
                    >
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-display font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-500">
                      {service.title}
                    </CardTitle>
                    <p className="text-slate-600 leading-relaxed">{service.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-slate-600">
                          <CheckCircle className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0" />
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

      {/* Cloud Platforms */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-white relative">
        <div className="container mx-auto px-4">
          <GSAPAnimations animation="slideInLeft" trigger=".platforms-section">
            <div className="platforms-section text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6">
                Cloud Platforms We Use
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                We work with leading cloud providers to deliver the best solutions for your needs
              </p>
            </div>
          </GSAPAnimations>

          <div className="grid md:grid-cols-3 gap-8">
            {cloudPlatforms.map((platform, index) => (
              <GSAPAnimations key={index} animation="scaleIn" delay={index * 0.2}>
                <Card className="border-slate-200 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-700 group transform hover:-translate-y-4 h-full bg-white/95 backdrop-blur-sm">
                  <CardHeader className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 shadow-lg">
                      <span className="text-2xl font-bold text-white">{platform.logo}</span>
                    </div>
                    <CardTitle className="text-xl font-display font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-500">
                      {platform.name}
                    </CardTitle>
                    <p className="text-slate-600 leading-relaxed">{platform.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-slate-900">Key Services:</h4>
                      <div className="flex flex-wrap gap-2">
                        {platform.services.map((service, idx) => (
                          <Badge
                            key={idx}
                            variant="secondary"
                            className="bg-slate-100 text-slate-900 border-blue-500/20"
                          >
                            {service}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </GSAPAnimations>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <GSAPAnimations animation="slideInRight" trigger=".benefits-section">
            <div className="benefits-section text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6">Cloud Benefits</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Discover the advantages of moving your infrastructure to the cloud
              </p>
            </div>
          </GSAPAnimations>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <GSAPAnimations key={index} animation="fadeInUp" delay={index * 0.2}>
                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-700 shadow-lg">
                    <benefit.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-500">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
                </div>
              </GSAPAnimations>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-white relative">
        <div className="container mx-auto px-4">
          <GSAPAnimations animation="fadeInUp" trigger=".process-section">
            <div className="process-section text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6">Our Cloud Process</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                A systematic approach to ensure successful cloud adoption
              </p>
            </div>
          </GSAPAnimations>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Assessment",
                description: "Analyze your current infrastructure and identify cloud migration opportunities",
              },
              {
                step: "02",
                title: "Planning",
                description: "Design a comprehensive cloud strategy tailored to your business requirements",
              },
              {
                step: "03",
                title: "Migration",
                description: "Execute the migration plan with minimal downtime and maximum efficiency",
              },
              {
                step: "04",
                title: "Optimization",
                description: "Continuously monitor and optimize your cloud infrastructure for peak performance",
              },
            ].map((step, index) => (
              <GSAPAnimations key={index} animation="fadeInUp" delay={index * 0.2}>
                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 shadow-lg">
                    <span className="text-2xl font-display font-bold text-white">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-display font-semibold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-500">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">{step.description}</p>
                </div>
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
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">Ready to Move to the Cloud?</h2>
            <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Transform your business with scalable, secure, and cost-effective cloud solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-500 text-white px-10 py-4 text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 transform hover:scale-105 font-medium"
                >
                  <div className="flex items-center">
                    Start Cloud Migration
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </div>
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400/10 px-10 py-4 text-lg bg-transparent backdrop-blur-sm hover:border-blue-300 transition-all duration-500 transform hover:scale-105 font-medium"
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
