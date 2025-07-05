"use client"

import { useState, useEffect } from "react"
import { X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

// WhatsApp Icon Component (since we can't use react-icons in Next.js)
const WhatsAppIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516z" />
  </svg>
)

interface WhatsAppWidgetProps {
  isOpen: boolean
  onClose: () => void
}

export default function WhatsAppWidget({ isOpen, onClose }: WhatsAppWidgetProps) {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 60000) // Update every minute

    return () => clearInterval(timer)
  }, [])

  const isBusinessHours = () => {
    const hour = currentTime.getHours()
    const day = currentTime.getDay()

    // Monday to Saturday: 9 AM to 8 PM
    if (day >= 1 && day <= 6) {
      return hour >= 9 && hour < 20
    }
    // Sunday: Available for urgent support (always show as available)
    return true
  }

  const getStatusText = () => {
    const day = currentTime.getDay()
    if (day === 0) return "Available for urgent support"
    return isBusinessHours() ? "Online" : "Offline"
  }

  const whatsappMessage = encodeURIComponent(
    "Hi there! Welcome to HBJ Syndicate 👋\n\nI'm interested in your web development services. How can you help me with my digital transformation today?",
  )

  if (!isOpen) return null

  return (
    <div className="fixed bottom-24 right-6 z-50 w-80 bg-white rounded-2xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
      {/* Header */}
      <div className="bg-green-500 px-4 py-3 flex items-center justify-between text-white">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <WhatsAppIcon className="w-6 h-6 text-white" />
            </div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-sm">HBJ Syndicate</h3>
            <p className="text-xs text-white/90">Typically replies instantly</p>
          </div>
        </div>
        <button onClick={onClose} className="text-white/80 hover:text-white transition-colors duration-200">
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Content */}
      <div className="p-4 space-y-4">
        {/* Welcome Message */}
        <div className="bg-gray-50 rounded-lg p-3">
          <p className="text-sm text-gray-700">
            <span className="text-base">👋</span> Hi there! Welcome to <strong>HBJ Syndicate</strong>
          </p>
          <p className="text-sm text-gray-600 mt-1">How can we help you with your digital transformation today?</p>
        </div>

        {/* Quick Actions */}
        <div>
          <h4 className="text-sm font-semibold text-gray-700 mb-3">Quick Actions:</h4>
          <div className="space-y-2">
            {/* Start WhatsApp Chat */}
            <a
              href={`https://wa.me/919173922112?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button className="w-full bg-green-500 hover:bg-green-600 text-white rounded-xl py-3 h-auto flex items-center justify-between group transition-all duration-300">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <WhatsAppIcon className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-sm">Start WhatsApp Chat</div>
                    <div className="text-xs text-green-100">Get instant responses</div>
                  </div>
                </div>
                <div className="text-white/80 group-hover:translate-x-1 transition-transform duration-300">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </div>
              </Button>
            </a>

            {/* Call Now */}
            <a href="tel:+919173922112" className="block">
              <Button
                variant="outline"
                className="w-full border-green-500 text-green-600 hover:bg-green-50 rounded-xl py-3 h-auto flex items-center justify-between group transition-all duration-300 bg-transparent"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Phone className="w-4 h-4 text-green-600" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-sm">Call Now</div>
                    <div className="text-xs text-gray-500">+919173922112</div>
                  </div>
                </div>
              </Button>
            </a>
          </div>
        </div>

        {/* Business Hours */}
        <div className="bg-yellow-50 rounded-lg p-3 border border-yellow-200">
          <div className="flex items-center space-x-2 mb-2">
            <div
              className={`px-2 py-1 rounded-full text-xs font-medium ${
                isBusinessHours() ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-600"
              }`}
            >
              {getStatusText()}
            </div>
            <span className="text-sm font-semibold text-gray-700">Business Hours</span>
          </div>
          <div className="text-xs text-gray-600 space-y-1">
            <div>Mon - Sat: 9:00 AM - 8:00 PM</div>
            <div>Sunday: Available for urgent support</div>
          </div>
        </div>
      </div>
    </div>
  )
}
