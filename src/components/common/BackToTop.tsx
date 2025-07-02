"use client"

import { useState, useEffect } from "react"
import { ArrowUp } from "lucide-react"

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 bg-primary-600 hover:bg-secondary-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50 ${
        isVisible ? "opacity-100 visible transform scale-100" : "opacity-0 invisible transform scale-95"
      }`}
    >
      <ArrowUp size={20} />
    </button>
  )
}
