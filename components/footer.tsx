import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"
import HBJLogo from "./hbj-logo"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 to-blue-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <HBJLogo className="w-12 h-12" />
              <span className="text-2xl font-display font-bold text-amber-400">HBJ Syndicate</span>
            </Link>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Transforming businesses through innovative digital solutions. Your success is our passion.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-slate-300">
                <Phone className="h-5 w-5 text-amber-400" />
                <span className="font-medium">9173922112</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <Mail className="h-5 w-5 text-amber-400" />
                <span>hello@hbjsyndicate.com</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <MapPin className="h-5 w-5 text-amber-400" />
                <span>India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-display font-semibold mb-6 text-amber-400">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Services" },
                { href: "/projects", label: "Our Work" },
                { href: "/careers", label: "Careers" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-amber-400 transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-display font-semibold mb-6 text-amber-400">Services</h3>
            <ul className="space-y-3">
              {[
                "Web Development",
                "E-commerce Solutions",
                "Web Applications",
                "UI/UX Design",
                "Digital Strategy",
                "Maintenance & Support",
              ].map((service) => (
                <li key={service}>
                  <span className="text-slate-300 hover:text-amber-400 transition-colors duration-300 cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-display font-semibold mb-6 text-amber-400">Get In Touch</h3>
            <p className="text-slate-300 mb-4 leading-relaxed">Ready to start your digital transformation journey?</p>
            <Link
              href="/contact"
              className="inline-flex items-center text-amber-400 hover:text-slate-300 font-medium transition-colors duration-300 group"
            >
              Let's discuss your project
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>

            <div className="mt-8">
              <p className="text-slate-300 text-sm mb-2">Business Hours:</p>
              <p className="text-amber-400 font-medium">Mon - Sat: 9:00 AM - 8:00 PM</p>
              <p className="text-slate-300 text-sm">Sunday: Available for urgent support</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-300 text-sm">© {new Date().getFullYear()} HBJ Syndicate. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="/privacy"
              className="text-slate-300 hover:text-amber-400 text-sm transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-slate-300 hover:text-amber-400 text-sm transition-colors duration-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
