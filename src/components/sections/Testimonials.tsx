"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"
import { useTranslation } from "@/hooks/useTranslation"
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver"
import { testimonials } from "@/lib/constants"

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { t } = useTranslation()
  const { ref, isIntersecting } = useIntersectionObserver()

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-16 px-4">
      <div className="container mx-auto">
        <div ref={ref}>
          <h2
            className={`text-4xl font-bold text-center mb-4 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent transition-all duration-700 ${isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            {t("testimonials.title")}
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Don't just take my word for it. Here's what clients and colleagues have to say about working with me.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Testimonial Display */}
          <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8">
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 text-primary-200">
              <Quote className="w-12 h-12" />
            </div>

            {/* Stars */}
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>

            {/* Testimonial Content */}
            <div className="text-center">
              <blockquote className="text-xl md:text-2xl text-gray-700 mb-8 italic leading-relaxed">
                "{testimonials[currentIndex].content}"
              </blockquote>

              <div className="flex items-center justify-center">
                <Image
                  src={testimonials[currentIndex].image || "/placeholder.svg"}
                  alt={testimonials[currentIndex].name}
                  width={60}
                  height={60}
                  className="w-15 h-15 rounded-full mr-4 object-cover"
                />
                <div className="text-left">
                  <h4 className="font-bold text-lg text-gray-900">{testimonials[currentIndex].name}</h4>
                  <p className="text-gray-600">
                    {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center text-gray-600 hover:text-primary-600 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center text-gray-600 hover:text-primary-600 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-primary-600 scale-125" : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

          {/* All Testimonials Grid (Optional) */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => goToSlide(index)}
              >
                <div className="flex items-center mb-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full mr-3 object-cover"
                  />
                  <div>
                    <h5 className="font-semibold text-sm">{testimonial.name}</h5>
                    <p className="text-xs text-gray-600">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700 line-clamp-3">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
