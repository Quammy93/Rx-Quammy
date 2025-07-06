"use client"

import Link from "next/link"
import { Github, Linkedin, Twitter, Mail, Phone, MapPin, Heart, ArrowUp } from "lucide-react"
import { useTranslation } from "@/hooks/useTranslation"

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/Quammy93",
    icon: Github,
    color: "hover:text-gray-900",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/maxwell-ahorlu-6833b41ab/",
    icon: Linkedin,
    color: "hover:text-blue-600",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/@Dev_MacCitY",
    icon: Twitter,
    color: "hover:text-blue-400",
  },
  // {
  //   name: "Instagram",
  //   href: "https://instagram.com/yourusername",
  //   icon: Instagram,
  //   color: "hover:text-pink-600",
  // },
]

const quickLinks = [
  { name: "nav.home", href: "#home" },
  { name: "nav.projects", href: "#projects" },
  { name: "nav.skills", href: "#skills" },
  { name: "nav.blog", href: "#blog" },
  { name: "nav.testimonials", href: "#testimonials" },
  { name: "nav.contact", href: "#contact" },
]

const services = ["Web Development", "Cloud Engineer", "Consulting", "", "API Development"]

export function Footer() {
  const { t } = useTranslation()

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-secondary-500"></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">Y</span>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                  Maxwell Q Ahorlu
                </span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">{t("footer.description")}</p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center text-gray-400 hover:text-white transition-colors">
                  <Mail className="w-4 h-4 mr-3" />
                  <span className="text-sm">Quammy93@gmail.com</span>
                </div>
                <div className="flex items-center text-gray-400 hover:text-white transition-colors">
                  <Phone className="w-4 h-4 mr-3" />
                  <span className="text-sm">+ (233) 244534628</span>
                </div>
                <div className="flex items-center text-gray-400 hover:text-white transition-colors">
                  <MapPin className="w-4 h-4 mr-3" />
                  <span className="text-sm">Accra, Ghana</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">{t("footer.quickLinks")}</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-sm hover:translate-x-1 transform inline-block"
                    >
                      {t(link.name)}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">{t("footer.services")}</h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <span className="text-gray-400 hover:text-white transition-colors duration-300 text-sm cursor-default">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Media & Newsletter */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">{t("footer.social")}</h3>

              {/* Social Links */}
              <div className="flex space-x-4 mb-8">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 transition-all duration-300 hover:scale-110 hover:bg-gray-700 ${social.color}`}
                      aria-label={social.name}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  )
                })}
              </div>

              {/* Newsletter Signup */}
              <div>
                <h4 className="text-sm font-semibold mb-3 text-white">Stay Updated</h4>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-lg text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                  <button className="px-4 py-2 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-r-lg hover:from-primary-700 hover:to-secondary-700 transition-all duration-300 text-sm font-medium">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center text-gray-400 text-sm mb-4 md:mb-0">
                <span>&copy; 2024 AHORLU MAXWELL QUAMMY. All rights reserved.</span>
                <span className="mx-2">•</span>
                <span className="flex items-center">
                  Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> and lots of coffee
                </span>
              </div>

              <div className="flex items-center space-x-6">
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Terms of Service
                </Link>
                <button
                  onClick={scrollToTop}
                  className="flex items-center text-gray-400 hover:text-white transition-colors text-sm group"
                >
                  <span className="mr-2">Back to top</span>
                  <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
