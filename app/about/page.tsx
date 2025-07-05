"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Users, Target, Lightbulb, Heart, Crown, Award, Star, Briefcase, Phone, Mail, MapPin } from "lucide-react"
import Link from "next/link"
import EnhancedThreeBackground from "@/components/enhanced-three-background"
import GSAPAnimations from "@/components/gsap-animations"
import { gsap } from "gsap"

export default function AboutPage() {
  useEffect(() => {
    // Advanced page animations
    const tl = gsap.timeline()

    tl.fromTo(
      ".about-hero",
      { y: 100, opacity: 0, scale: 0.95 },
      { y: 0, opacity: 1, scale: 1, duration: 1.5, ease: "power3.out" },
    )

    // Elegant floating animations for team cards
    gsap.utils.toArray(".team-card").forEach((card: any, index) => {
      gsap.to(card, {
        y: -12,
        duration: 3 + index * 0.5,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        delay: index * 0.4,
      })
    })
  }, [])

  const founders = [
    {
      name: "Harsh Prajapati",
      position: "CEO & Founder",
      role: "Chief Executive Officer",
      icon: Crown,
      description:
        "Visionary leader with 8+ years in technology and business strategy. Drives company vision, strategic partnerships, and business growth with deep expertise in digital transformation and client success.",
      expertise: [
        "Business Strategy",
        "Digital Transformation",
        "Client Relations",
        "Team Leadership",
        "Strategic Planning",
        "Market Analysis",
      ],
      gradient: "from-amber-500 to-orange-600",
      experience: "8+ Years",
      education: "MBA in Business Management, B.Tech in Computer Science",
      phone: "9173922112",
      email: "harsh@hbjsyndicate.com",
      achievements: ["Led 150+ successful projects", "Built strategic partnerships", "Achieved 300% business growth"],
      specialization: "Business Development & Strategic Leadership",
    },
    {
      name: "Jay Prajapati",
      position: "CTO & Co-Founder",
      role: "Chief Technology Officer",
      icon: Code,
      description:
        "Full-stack technology expert with 7+ years specializing in modern web frameworks, cloud architecture, and scalable solutions. Leads technical innovation and development excellence.",
      expertise: [
        "Full-Stack Development",
        "Cloud Architecture",
        "System Design",
        "Technical Leadership",
        "DevOps",
        "AI/ML Integration",
      ],
      gradient: "from-blue-500 to-indigo-600",
      experience: "7+ Years",
      education: "M.Tech in Software Engineering, B.Tech in Computer Science",
      phone: "9173922112",
      email: "jay@hbjsyndicate.com",
      achievements: [
        "Architected 100+ web applications",
        "Expert in React, Node.js, Python",
        "Cloud solutions specialist",
      ],
      specialization: "Technical Architecture & Development",
    },
    {
      name: "Bhavesh Vishwakarma",
      position: "Co-Founder & Lead Developer",
      role: "Innovation Director & Technical Lead",
      icon: Users,
      description:
        "Expert full-stack developer with 6+ years in database design, API development, and system optimization. Passionate about creating innovative solutions that exceed client expectations.",
      expertise: [
        "Backend Development",
        "Database Design",
        "API Architecture",
        "Performance Optimization",
        "System Integration",
        "Quality Assurance",
      ],
      gradient: "from-slate-600 to-slate-800",
      experience: "6+ Years",
      education: "B.Tech in Information Technology, Certified Cloud Architect",
      phone: "9173922112",
      email: "bhavesh@hbjsyndicate.com",
      achievements: ["Optimized 200+ database systems", "Built 50+ REST APIs", "Performance expert"],
      specialization: "Backend Systems & Database Architecture",
    },
  ]

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <EnhancedThreeBackground variant="elegant" />

      {/* Hero Section - Fixed spacing */}
      <section className="py-32 md:py-40 bg-gradient-to-br from-slate-900 to-blue-900 text-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="about-hero max-w-5xl mx-auto text-center">
            <GSAPAnimations animation="scaleIn">
              <Badge className="mb-8 bg-amber-500/20 text-amber-300 border-amber-500/30 backdrop-blur-sm text-lg px-6 py-3">
                <Star className="w-5 h-5 mr-2" />
                Meet Our Leadership
              </Badge>
            </GSAPAnimations>

            <h1 className="text-4xl md:text-6xl font-display font-bold mb-8 bg-gradient-to-r from-white to-amber-300 bg-clip-text text-transparent">
              The Visionaries Behind HBJ Syndicate
            </h1>

            <GSAPAnimations animation="fadeInUp" delay={0.5}>
              <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
                A dynamic leadership team of passionate technologists and business strategists united by a shared vision
                to transform businesses through innovative digital solutions and exceptional client experiences.
              </p>
            </GSAPAnimations>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-white relative">
        <div className="container mx-auto px-4">
          <GSAPAnimations animation="elegantFade" trigger=".leadership-section">
            <div className="leadership-section text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6">Our Leadership Team</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Meet the experienced professionals driving innovation and excellence at HBJ Syndicate
              </p>
            </div>
          </GSAPAnimations>

          <div className="grid lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {founders.map((founder, index) => (
              <GSAPAnimations key={index} animation="scaleIn" delay={index * 0.2}>
                <Card className="team-card border-slate-200 hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-700 group transform hover:-translate-y-4 h-full relative overflow-hidden bg-white/90 backdrop-blur-sm">
                  {/* Background gradient overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${founder.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-700`}
                  ></div>

                  <CardContent className="p-8 text-center relative z-10">
                    {/* Profile Icon */}
                    <div
                      className={`w-24 h-24 bg-gradient-to-br ${founder.gradient} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 shadow-lg`}
                    >
                      <founder.icon className="h-12 w-12 text-white" />
                    </div>

                    {/* Name and Position */}
                    <h3 className="text-2xl font-display font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors duration-500">
                      {founder.name}
                    </h3>
                    <div className="mb-6">
                      <p className="text-amber-600 font-semibold text-lg">{founder.position}</p>
                      <p className="text-slate-500 text-sm">{founder.role}</p>
                      <p className="text-blue-600 text-sm font-medium mt-1">{founder.specialization}</p>
                    </div>

                    {/* Experience and Education */}
                    <div className="flex justify-center gap-3 mb-6">
                      <Badge variant="secondary" className="bg-slate-100 border-amber-500/20">
                        <Briefcase className="w-3 h-3 mr-1" />
                        {founder.experience}
                      </Badge>
                      <Badge variant="secondary" className="bg-slate-100 border-amber-500/20">
                        <Award className="w-3 h-3 mr-1" />
                        Education
                      </Badge>
                    </div>

                    {/* Education Details */}
                    <div className="mb-6 p-3 bg-slate-100/50 rounded-lg">
                      <p className="text-xs text-slate-900 font-medium">{founder.education}</p>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-2 mb-6 p-4 bg-slate-100/50 rounded-lg">
                      <div className="flex items-center justify-center space-x-2 text-slate-900">
                        <Phone className="h-4 w-4 text-amber-600" />
                        <span className="font-medium text-sm">{founder.phone}</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2 text-slate-900">
                        <Mail className="h-4 w-4 text-amber-600" />
                        <span className="text-sm">{founder.email}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-600 mb-6 leading-relaxed text-sm">{founder.description}</p>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-slate-900 text-sm uppercase tracking-wide mb-3">
                        Key Achievements
                      </h4>
                      <div className="space-y-2">
                        {founder.achievements.map((achievement, achIndex) => (
                          <div key={achIndex} className="flex items-center justify-center text-xs text-slate-600">
                            <Star className="h-3 w-3 text-amber-600 mr-2 flex-shrink-0" />
                            {achievement}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Expertise Tags */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-slate-900 text-sm uppercase tracking-wide">Core Expertise</h4>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {founder.expertise.map((skill, skillIndex) => (
                          <Badge
                            key={skillIndex}
                            variant="outline"
                            className="border-amber-500/30 text-slate-900 hover:bg-amber-500/10 transition-colors duration-300 text-xs"
                          >
                            {skill}
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

      {/* Company Info */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <GSAPAnimations animation="slideInLeft">
                <div>
                  <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-8">Our Story</h2>
                  <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                    <p>
                      HBJ Syndicate was founded by three passionate technologists who shared a vision of transforming
                      businesses through innovative digital solutions. With combined experience of over 20 years, our
                      founders bring together expertise in business strategy, technical architecture, and development
                      excellence.
                    </p>
                    <p>
                      <strong className="text-slate-900">Harsh Prajapati</strong> leads our business strategy and client
                      relationships, ensuring every project aligns with business goals.{" "}
                      <strong className="text-slate-900">Jay Prajapati</strong> drives our technical innovation and
                      architecture decisions, while <strong className="text-slate-900">Bhavesh Vishwakarma</strong>{" "}
                      ensures robust backend systems and optimal performance.
                    </p>
                    <p>
                      Together, we've built a company that bridges the gap between cutting-edge technology and practical
                      business solutions, helping businesses thrive in the digital age.
                    </p>
                  </div>
                </div>
              </GSAPAnimations>

              <GSAPAnimations animation="scaleIn" delay={0.4}>
                <div className="relative">
                  <div className="aspect-square bg-gradient-to-br from-amber-500 to-blue-600 rounded-2xl flex items-center justify-center relative overflow-hidden group">
                    <Code className="h-24 w-24 text-white group-hover:scale-110 group-hover:rotate-12 transition-all duration-700" />

                    {/* Animated background elements */}
                    <div className="absolute inset-0 opacity-20">
                      {[...Array(8)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-4 h-4 bg-white rounded-full animate-pulse"
                          style={{
                            left: `${20 + (i % 3) * 30}%`,
                            top: `${20 + Math.floor(i / 3) * 25}%`,
                            animationDelay: `${i * 0.4}s`,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </GSAPAnimations>
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-white relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <GSAPAnimations animation="elegantFade">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-8">Our Philosophy</h2>
              <p className="text-xl text-slate-600 mb-16 max-w-3xl mx-auto leading-relaxed">
                The principles that guide everything we do at HBJ Syndicate
              </p>
            </GSAPAnimations>

            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  icon: Lightbulb,
                  title: "Innovation",
                  desc: "We stay ahead of technology trends to deliver cutting-edge solutions that give you a competitive advantage in the digital marketplace.",
                  gradient: "from-amber-500 to-orange-600",
                },
                {
                  icon: Target,
                  title: "Excellence",
                  desc: "Every line of code, every design element, and every user interaction is crafted with meticulous attention to detail and quality.",
                  gradient: "from-blue-500 to-indigo-600",
                },
                {
                  icon: Heart,
                  title: "Partnership",
                  desc: "We don't just build websites; we build lasting relationships based on trust, transparency, and mutual success.",
                  gradient: "from-slate-600 to-slate-800",
                },
              ].map((philosophy, index) => (
                <GSAPAnimations key={index} animation="scaleIn" delay={index * 0.2}>
                  <div className="text-center group cursor-pointer">
                    <div
                      className={`w-20 h-20 bg-gradient-to-br ${philosophy.gradient} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-700 shadow-lg`}
                    >
                      <philosophy.icon className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-xl font-display font-semibold text-slate-900 mb-4 group-hover:text-amber-600 transition-colors duration-500">
                      {philosophy.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">{philosophy.desc}</p>
                  </div>
                </GSAPAnimations>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 to-blue-900 text-white relative overflow-hidden">
        <EnhancedThreeBackground variant="minimal" />
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <GSAPAnimations animation="fadeInUp">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">Get in Touch with Our Team</h2>
              <p className="text-xl text-slate-300 mb-12 leading-relaxed">
                Ready to discuss your project with our experienced leadership team?
              </p>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <Phone className="h-8 w-8 text-amber-400 mx-auto mb-4" />
                  <h3 className="font-display font-semibold mb-2">Call Us</h3>
                  <p className="text-slate-300">9173922112</p>
                </div>
                <div className="text-center">
                  <Mail className="h-8 w-8 text-amber-400 mx-auto mb-4" />
                  <h3 className="font-display font-semibold mb-2">Email Us</h3>
                  <p className="text-slate-300">hello@hbjsyndicate.com</p>
                </div>
                <div className="text-center">
                  <MapPin className="h-8 w-8 text-amber-400 mx-auto mb-4" />
                  <h3 className="font-display font-semibold mb-2">Location</h3>
                  <p className="text-slate-300">Mumbai, India</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-orange-600 hover:to-amber-500 text-white px-10 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 group font-medium"
                  >
                    <div className="flex items-center">
                      Start Your Project
                      <Target className="ml-3 h-5 w-5 group-hover:rotate-12 transition-transform duration-500" />
                    </div>
                  </Button>
                </Link>

                <Link href="/services">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400/10 px-10 py-4 text-lg bg-transparent hover:border-amber-300 transition-all duration-500 transform hover:scale-105 font-medium"
                  >
                    <div className="flex items-center">
                      View Our Services
                      <Code className="ml-3 h-5 w-5 group-hover:scale-110 transition-transform duration-500" />
                    </div>
                  </Button>
                </Link>
              </div>
            </GSAPAnimations>
          </div>
        </div>
      </section>
    </div>
  )
}
