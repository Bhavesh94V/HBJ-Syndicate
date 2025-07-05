"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  TrendingUp,
  Heart,
  Coffee,
  MapPin,
  Clock,
  DollarSign,
  Briefcase,
  GraduationCap,
  Star,
  Zap,
  Target,
} from "lucide-react"
import Link from "next/link"
import EnhancedThreeBackground from "@/components/enhanced-three-background"
import GSAPAnimations from "@/components/gsap-animations"
import { gsap } from "gsap"

export default function CareersPage() {
  useEffect(() => {
    gsap.fromTo(".careers-hero", { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1.5, ease: "power3.out" })
  }, [])

  const jobOpenings = [
    {
      title: "Senior Full-Stack Developer",
      department: "Engineering",
      location: "Remote / India",
      type: "Full-time",
      experience: "3-5 years",
      salary: "₹8-15 LPA",
      skills: ["React.js", "Node.js", "TypeScript", "MongoDB", "AWS"],
      description:
        "Join our core development team to build cutting-edge web applications and contribute to our growing portfolio of innovative projects.",
      requirements: [
        "3+ years of full-stack development experience",
        "Proficiency in React.js and Node.js",
        "Experience with modern development tools and practices",
        "Strong problem-solving and communication skills",
      ],
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      location: "Remote / India",
      type: "Full-time",
      experience: "2-4 years",
      salary: "₹5-10 LPA",
      skills: ["Figma", "Adobe XD", "Prototyping", "User Research", "Design Systems"],
      description:
        "Create exceptional user experiences and beautiful interfaces that delight our clients and their customers.",
      requirements: [
        "2+ years of UI/UX design experience",
        "Proficiency in Figma and design tools",
        "Strong portfolio showcasing web and mobile designs",
        "Understanding of user-centered design principles",
      ],
    },
    {
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Remote / India",
      type: "Full-time",
      experience: "2-4 years",
      salary: "₹6-12 LPA",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Monitoring"],
      description:
        "Build and maintain scalable infrastructure to support our growing client base and internal development needs.",
      requirements: [
        "2+ years of DevOps/Infrastructure experience",
        "Experience with cloud platforms (AWS/GCP)",
        "Knowledge of containerization and orchestration",
        "Familiarity with CI/CD pipelines and automation",
      ],
    },
    {
      title: "Business Development Executive",
      department: "Sales",
      location: "India",
      type: "Full-time",
      experience: "1-3 years",
      salary: "₹4-8 LPA + Incentives",
      skills: ["Sales", "Client Relations", "Communication", "CRM", "Lead Generation"],
      description:
        "Drive business growth by identifying new opportunities and building relationships with potential clients.",
      requirements: [
        "1+ years of sales/business development experience",
        "Excellent communication and presentation skills",
        "Understanding of digital services and web development",
        "Proven track record of meeting sales targets",
      ],
    },
  ]

  const benefits = [
    {
      icon: DollarSign,
      title: "Competitive Salary",
      description: "Market-leading compensation with performance bonuses and annual increments",
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Clear career progression paths with mentorship and skill development opportunities",
    },
    {
      icon: Coffee,
      title: "Flexible Work",
      description: "Hybrid work model with flexible hours and remote work options",
    },
    {
      icon: GraduationCap,
      title: "Learning & Development",
      description: "Continuous learning budget for courses, conferences, and certifications",
    },
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance and wellness programs for you and your family",
    },
    {
      icon: Users,
      title: "Team Culture",
      description: "Collaborative, inclusive environment with regular team events and celebrations",
    },
  ]

  const values = [
    {
      icon: Star,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from code quality to client relationships",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We embrace new technologies and creative solutions to solve complex problems",
    },
    {
      icon: Target,
      title: "Impact",
      description: "We focus on creating meaningful impact for our clients and their businesses",
    },
    {
      icon: Heart,
      title: "Collaboration",
      description: "We believe in the power of teamwork and open communication",
    },
  ]

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <EnhancedThreeBackground variant="elegant" />

      {/* Hero Section - Fixed spacing */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-16">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-slate-800/95"></div>
        <div className="careers-hero relative container mx-auto px-4 py-20 z-10">
          <div className="max-w-5xl mx-auto text-center text-white">
            <Badge className="mb-8 bg-amber-500/20 text-amber-300 border-amber-500/30 text-lg px-6 py-3 backdrop-blur-sm font-medium">
              Join Our Team
            </Badge>
            <h1 className="text-4xl md:text-7xl font-display font-bold mb-8 bg-gradient-to-r from-white via-slate-200 to-amber-300 bg-clip-text text-transparent">
              Build Your Future
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Join a team of passionate developers and designers creating the future of digital experiences
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-orange-600 hover:to-amber-500 text-white px-10 py-4 text-lg shadow-2xl hover:shadow-amber-500/25 transition-all duration-500 transform hover:scale-105 font-medium"
              >
                View Open Positions
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400/10 px-10 py-4 text-lg bg-transparent backdrop-blur-sm hover:border-amber-300 transition-all duration-500 transform hover:scale-105 font-medium"
              >
                Learn About Our Culture
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-24 bg-white relative">
        <EnhancedThreeBackground variant="section" />
        <div className="container mx-auto px-4 relative z-10">
          <GSAPAnimations animation="fadeInUp" trigger=".why-work-section">
            <div className="why-work-section text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6">Why Work With Us?</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Join a company that values growth, innovation, and work-life balance
              </p>
            </div>
          </GSAPAnimations>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <GSAPAnimations key={index} animation="scaleIn" delay={index * 0.1}>
                <Card className="border-slate-200 hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-700 group transform hover:-translate-y-4 h-full bg-white/95 backdrop-blur-sm">
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 shadow-lg">
                      <benefit.icon className="h-10 w-10 md:h-12 md:w-12 text-white" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-display font-semibold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors duration-500">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              </GSAPAnimations>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-white relative">
        <div className="container mx-auto px-4">
          <GSAPAnimations animation="slideInLeft" trigger=".openings-section">
            <div className="openings-section text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6">Current Openings</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Exciting opportunities to join our growing team
              </p>
            </div>
          </GSAPAnimations>

          <div className="space-y-8">
            {jobOpenings.map((job, index) => (
              <GSAPAnimations key={index} animation="slideInRight" delay={index * 0.1}>
                <Card className="border-slate-200 hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-700 group bg-white/95 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div>
                        <CardTitle className="text-2xl font-display font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors duration-500">
                          {job.title}
                        </CardTitle>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <Badge className="bg-amber-500/10 text-amber-600 border-amber-500/20 font-medium">
                            {job.department}
                          </Badge>
                          <Badge variant="outline" className="border-slate-300">
                            <MapPin className="h-3 w-3 mr-1" />
                            {job.location}
                          </Badge>
                          <Badge variant="outline" className="border-slate-300">
                            <Clock className="h-3 w-3 mr-1" />
                            {job.type}
                          </Badge>
                          <Badge variant="outline" className="border-slate-300">
                            <Briefcase className="h-3 w-3 mr-1" />
                            {job.experience}
                          </Badge>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-display font-bold text-slate-900 mb-2">{job.salary}</div>
                        <Link href="/contact">
                          <Button className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-orange-600 hover:to-amber-500 text-white shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 font-medium">
                            Apply Now
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-6 leading-relaxed">{job.description}</p>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-display font-semibold text-slate-900 mb-3">Required Skills</h4>
                        <div className="flex flex-wrap gap-2">
                          {job.skills.map((skill, skillIndex) => (
                            <Badge
                              key={skillIndex}
                              variant="secondary"
                              className="bg-slate-100 text-slate-900 border-amber-500/20"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-display font-semibold text-slate-900 mb-3">Requirements</h4>
                        <ul className="space-y-1">
                          {job.requirements.map((req, reqIndex) => (
                            <li key={reqIndex} className="text-sm text-slate-600 flex items-start">
                              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </GSAPAnimations>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <GSAPAnimations animation="fadeInUp" trigger=".values-section">
            <div className="values-section text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6">Our Values</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                The principles that guide our work and shape our culture
              </p>
            </div>
          </GSAPAnimations>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <GSAPAnimations key={index} animation="fadeInUp" delay={index * 0.2}>
                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-slate-800 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-700 shadow-lg">
                    <value.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors duration-500">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">{value.description}</p>
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
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">Ready to Join Our Team?</h2>
            <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Take the next step in your career and help us build the future of digital experiences
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-orange-600 hover:to-amber-500 text-white px-10 py-4 text-lg shadow-2xl hover:shadow-amber-500/25 transition-all duration-500 transform hover:scale-105 font-medium"
                >
                  Apply Now
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400/10 px-10 py-4 text-lg bg-transparent backdrop-blur-sm hover:border-amber-300 transition-all duration-500 transform hover:scale-105 font-medium"
                >
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </GSAPAnimations>
        </div>
      </section>
    </div>
  )
}
