"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle, Star, Zap, AlertCircle } from "lucide-react"
import EnhancedThreeBackground from "@/components/enhanced-three-background"
import GSAPAnimations from "@/components/gsap-animations"
import { gsap } from "gsap"
import { useAppDispatch, useAppSelector } from "@/store/hooks"
import { submitContactForm, resetContactForm, clearError, type ContactFormData } from "@/store/slices/contactSlice"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function ContactPage() {
  const dispatch = useAppDispatch()
  const { isLoading, isSubmitted, error, successMessage } = useAppSelector((state) => state.contact)

  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    timeline: "",
    message: "",
    newsletter: false,
  })

  useEffect(() => {
    gsap.fromTo(".contact-hero", { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1.5, ease: "power3.out" })
  }, [])

  const handleInputChange = (name: string, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Clear error when user starts typing
    if (error) {
      dispatch(clearError())
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message || !formData.service) {
      return
    }

    dispatch(submitContactForm(formData))
  }

  const handleReset = () => {
    dispatch(resetContactForm())
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      budget: "",
      timeline: "",
      message: "",
      newsletter: false,
    })
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 9173922112", "Available 24/7"],
      action: "tel:+919173922112",
      gradient: "from-green-500 to-emerald-600",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["hbjsyndicate21@gmail.com", "Quick response guaranteed"],
      action: "mailto:hbjsyndicate21@gmail.com",
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      details: ["Chat with us instantly", "Quick support available"],
      action: "https://wa.me/919173922112",
      gradient: "from-green-500 to-green-600",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["Mumbai, India", "By appointment only"],
      action: "#",
      gradient: "from-amber-500 to-orange-600",
    },
  ]

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white relative overflow-hidden flex items-center justify-center">
        <EnhancedThreeBackground variant="elegant" />
        <div className="relative z-10 text-center max-w-2xl mx-auto px-4">
          <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-6">Thank You!</h1>
          <p className="text-xl text-slate-600 mb-4 leading-relaxed">
            {successMessage || "Your message has been sent successfully. We'll get back to you within 24 hours."}
          </p>
          <p className="text-lg text-slate-500 mb-8">Check your email for a confirmation message with next steps.</p>
          <Button
            onClick={handleReset}
            className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-orange-600 hover:to-amber-500 text-white px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 font-medium"
          >
            Send Another Message
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <EnhancedThreeBackground variant="elegant" />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-16">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-slate-800/95"></div>
        <div className="contact-hero relative container mx-auto px-4 py-20 z-10">
          <div className="max-w-5xl mx-auto text-center text-white">
            <Badge className="mb-8 bg-amber-500/20 text-amber-300 border-amber-500/30 text-lg px-6 py-3 backdrop-blur-sm font-medium">
              <Star className="w-5 h-5 mr-2" />
              Get In Touch
            </Badge>
            <h1 className="text-4xl md:text-7xl font-display font-bold mb-8 bg-gradient-to-r from-white via-slate-200 to-amber-300 bg-clip-text text-transparent">
              Let's Discuss Your Digital Vision!
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Ready to transform your ideas into exceptional digital experiences? We're here to help you every step of
              the way.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-white relative">
        <EnhancedThreeBackground variant="section" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <GSAPAnimations animation="slideInLeft">
              <Card className="border-slate-200 shadow-2xl bg-white/95 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl font-display font-bold text-slate-900 flex items-center">
                    <Zap className="h-6 w-6 text-amber-500 mr-2" />
                    Start Your Project
                  </CardTitle>
                  <p className="text-slate-600">Fill out the form below and we'll get back to you within 24 hours</p>
                </CardHeader>
                <CardContent>
                  {error && (
                    <Alert className="mb-6 border-red-200 bg-red-50">
                      <AlertCircle className="h-4 w-4 text-red-600" />
                      <AlertDescription className="text-red-800">{error}</AlertDescription>
                    </Alert>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName" className="text-slate-900 font-medium">
                          First Name *
                        </Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          required
                          value={formData.firstName}
                          onChange={(e) => handleInputChange("firstName", e.target.value)}
                          className="mt-1 border-slate-300 focus:border-amber-500 focus:ring-amber-500"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-slate-900 font-medium">
                          Last Name *
                        </Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          required
                          value={formData.lastName}
                          onChange={(e) => handleInputChange("lastName", e.target.value)}
                          className="mt-1 border-slate-300 focus:border-amber-500 focus:ring-amber-500"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-slate-900 font-medium">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="mt-1 border-slate-300 focus:border-amber-500 focus:ring-amber-500"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-slate-900 font-medium">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="mt-1 border-slate-300 focus:border-amber-500 focus:ring-amber-500"
                        placeholder="+91 9876543210"
                      />
                    </div>

                    <div>
                      <Label htmlFor="company" className="text-slate-900 font-medium">
                        Company Name
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        className="mt-1 border-slate-300 focus:border-amber-500 focus:ring-amber-500"
                        placeholder="Your Company"
                      />
                    </div>

                    <div>
                      <Label htmlFor="service" className="text-slate-900 font-medium">
                        Service Interested In *
                      </Label>
                      <Select
                        name="service"
                        required
                        value={formData.service}
                        onValueChange={(value) => handleInputChange("service", value)}
                      >
                        <SelectTrigger className="mt-1 border-slate-300 focus:border-amber-500 focus:ring-amber-500">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="web-development">Web Development</SelectItem>
                          <SelectItem value="ecommerce">E-commerce Solutions</SelectItem>
                          <SelectItem value="web-applications">Web Applications</SelectItem>
                          <SelectItem value="ui-ux-design">UI/UX Design</SelectItem>
                          <SelectItem value="maintenance">Website Maintenance</SelectItem>
                          <SelectItem value="cloud-solutions">Cloud Solutions</SelectItem>
                          <SelectItem value="consultation">Free Consultation</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="budget" className="text-slate-900 font-medium">
                        Project Budget
                      </Label>
                      <Select
                        name="budget"
                        value={formData.budget}
                        onValueChange={(value) => handleInputChange("budget", value)}
                      >
                        <SelectTrigger className="mt-1 border-slate-300 focus:border-amber-500 focus:ring-amber-500">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-50k">Under ₹50,000</SelectItem>
                          <SelectItem value="50k-1l">₹50,000 - ₹1,00,000</SelectItem>
                          <SelectItem value="1l-3l">₹1,00,000 - ₹3,00,000</SelectItem>
                          <SelectItem value="3l-5l">₹3,00,000 - ₹5,00,000</SelectItem>
                          <SelectItem value="above-5l">Above ₹5,00,000</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="timeline" className="text-slate-900 font-medium">
                        Project Timeline
                      </Label>
                      <Select
                        name="timeline"
                        value={formData.timeline}
                        onValueChange={(value) => handleInputChange("timeline", value)}
                      >
                        <SelectTrigger className="mt-1 border-slate-300 focus:border-amber-500 focus:ring-amber-500">
                          <SelectValue placeholder="When do you need this completed?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="asap">ASAP</SelectItem>
                          <SelectItem value="1-month">Within 1 month</SelectItem>
                          <SelectItem value="2-3-months">2-3 months</SelectItem>
                          <SelectItem value="3-6-months">3-6 months</SelectItem>
                          <SelectItem value="flexible">I'm flexible</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-slate-900 font-medium">
                        Project Details *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        className="mt-1 border-slate-300 focus:border-amber-500 focus:ring-amber-500"
                        placeholder="Tell us about your project requirements, goals, and any specific features you need..."
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="newsletter"
                        name="newsletter"
                        checked={formData.newsletter}
                        onCheckedChange={(checked) => handleInputChange("newsletter", checked as boolean)}
                        className="border-slate-300 data-[state=checked]:bg-amber-500 data-[state=checked]:border-amber-500"
                      />
                      <Label htmlFor="newsletter" className="text-sm text-slate-600">
                        Subscribe to our newsletter for updates and tips
                      </Label>
                    </div>

                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-orange-600 hover:to-amber-500 text-white py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? (
                        <div className="flex items-center">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Sending...
                        </div>
                      ) : (
                        <div className="flex items-center justify-center">
                          <Send className="mr-2 h-5 w-5" />
                          Send Message
                        </div>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </GSAPAnimations>

            {/* Contact Information */}
            <GSAPAnimations animation="slideInRight">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">Get in Touch</h2>
                  <p className="text-lg text-slate-600 leading-relaxed mb-8">
                    Ready to bring your digital vision to life? We're here to help you every step of the way. Choose
                    your preferred method of communication below.
                  </p>
                </div>

                <div className="grid gap-6">
                  {contactInfo.map((info, index) => (
                    <GSAPAnimations key={index} animation="scaleIn" delay={index * 0.1}>
                      <Card className="border-slate-200 hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-500 group cursor-pointer bg-white/95 backdrop-blur-sm">
                        <CardContent className="p-6">
                          <div className="flex items-center space-x-4">
                            <div
                              className={`w-16 h-16 bg-gradient-to-br ${info.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}
                            >
                              <info.icon className="h-8 w-8 text-white" />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-xl font-display font-semibold text-slate-900 mb-1 group-hover:text-amber-600 transition-colors duration-500">
                                {info.title}
                              </h3>
                              <div className="space-y-1">
                                {info.details.map((detail, idx) => (
                                  <p key={idx} className="text-slate-600">
                                    {detail}
                                  </p>
                                ))}
                              </div>
                            </div>
                            {info.action.startsWith("http") ? (
                              <a
                                href={info.action}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-amber-600 hover:text-orange-600 transition-colors duration-300"
                              >
                                <Send className="h-5 w-5" />
                              </a>
                            ) : info.action.startsWith("tel:") || info.action.startsWith("mailto:") ? (
                              <a
                                href={info.action}
                                className="text-amber-600 hover:text-orange-600 transition-colors duration-300"
                              >
                                <Send className="h-5 w-5" />
                              </a>
                            ) : null}
                          </div>
                        </CardContent>
                      </Card>
                    </GSAPAnimations>
                  ))}
                </div>

                {/* Business Hours */}
                <Card className="border-slate-200 bg-gradient-to-br from-slate-50 to-white">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <Clock className="h-6 w-6 text-amber-600" />
                      <h3 className="text-xl font-display font-semibold text-slate-900">Business Hours</h3>
                    </div>
                    <div className="space-y-2 text-slate-600">
                      <div className="flex justify-between">
                        <span>Monday - Friday</span>
                        <span className="font-medium">9:00 AM - 8:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday</span>
                        <span className="font-medium">10:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday</span>
                        <span className="font-medium">Emergency Support Only</span>
                      </div>
                      <div className="mt-4 p-3 bg-amber-50 rounded-lg border border-amber-200">
                        <p className="text-sm text-amber-800">
                          <strong>24/7 Emergency Support:</strong> Available for critical issues and existing clients
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </GSAPAnimations>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-white relative">
        <div className="container mx-auto px-4">
          <GSAPAnimations animation="fadeInUp" trigger=".faq-section">
            <div className="faq-section text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Quick answers to common questions about our services and process
              </p>
            </div>
          </GSAPAnimations>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                question: "How long does a typical project take?",
                answer:
                  "Project timelines vary based on complexity. Simple websites take 2-4 weeks, while complex applications can take 2-6 months. We provide detailed timelines during consultation.",
              },
              {
                question: "Do you provide ongoing support?",
                answer:
                  "Yes! We offer comprehensive maintenance packages including security updates, performance monitoring, content updates, and 24/7 technical support.",
              },
              {
                question: "What's included in your web development service?",
                answer:
                  "Our service includes responsive design, SEO optimization, CMS integration, performance optimization, security implementation, and post-launch support.",
              },
              {
                question: "Can you work with our existing brand guidelines?",
                answer:
                  "We work closely with your brand guidelines and can help enhance your digital presence while maintaining brand consistency.",
              },
            ].map((faq, index) => (
              <GSAPAnimations key={index} animation="fadeInUp" delay={index * 0.1}>
                <Card className="border-slate-200 hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-500 bg-white/95 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-display font-semibold text-slate-900 mb-3">{faq.question}</h3>
                    <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              </GSAPAnimations>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
