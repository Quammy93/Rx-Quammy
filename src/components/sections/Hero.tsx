"use client"

import Image from "next/image"
import { useTranslation } from "@/hooks/useTranslation"
import { Button } from "@/components/ui/Button"

export function Hero() {
  const { t } = useTranslation()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-16 px-4">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <Image
              src="/profile.jpg"
              alt="Profile"
              width={128}
              height={128}
              className="w-32 h-32 rounded-full mx-auto mb-6 shadow-2xl border-4 border-white object-cover"
              priority
            />
          </div>
          <h1 className="text-[28px] font-bold italic mb-6 bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 bg-clip-text text-transparent animate-slide-up">
            {t("Hi, I'm Maxwell Quammy Ahorlu!")}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto animate-slide-up">
            {t("hero.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Button onClick={() => scrollToSection("projects")} size="lg">
              {t("hero.viewWork")}
            </Button>
            <Button variant="secondary" size="lg" onClick={() => scrollToSection("contact")}>
              {t("hero.getInTouch")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
