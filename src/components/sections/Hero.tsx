// "use client"

// import Image from "next/image"
// import { useTranslation } from "@/hooks/useTranslation"
// import { Button } from "@/components/ui/Button"

// export function Hero() {
//   const { t } = useTranslation()

//   const scrollToSection = (sectionId: string) => {
//     const element = document.getElementById(sectionId)
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" })
//     }
//   }

//   return (
//     <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-16 px-4">
//       <div className="container mx-auto text-center">
//         <div className="max-w-4xl mx-auto">
//           <div className="mb-8 animate-fade-in">
//             <Image
//               src="/profile.jpg"
//               alt="Profile"
//               width={128}
//               height={128}
//               className="w-32 h-32 rounded-full mx-auto mb-6 shadow-2xl border-4 border-white object-cover"
//               priority
//             />
//           </div>
//           <h1 className="text-[28px] font-bold italic mb-6 bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 bg-clip-text text-transparent animate-slide-up">
//             {t("Hi, I'm Maxwell Quammy Ahorlu!")}
//           </h1>
//           <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto animate-slide-up">
//             {t("hero.subtitle")}
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
//             <Button onClick={() => scrollToSection("projects")} size="lg">
//               {t("hero.viewWork")}
//             </Button>
//             <Button variant="secondary" size="lg" onClick={() => scrollToSection("contact")}>
//               {t("hero.getInTouch")}
//             </Button>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }


"use client"

import Image from "next/image"
import { useTranslation } from "@/hooks/useTranslation"
import { ArrowDown, Download, Mail } from "lucide-react"

export function Hero() {
  const { t } = useTranslation()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
        <div
          className="absolute top-1/3 right-1/4 w-72 h-72 bg-secondary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-accent-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 pt-20 pb-16">
        <div className="max-w-5xl mx-auto text-center">
          {/* Profile Image */}
          <div className="mb-8 animate-scale-in">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full blur-lg opacity-30 scale-110"></div>
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Profile"
                width={160}
                height={160}
                className="relative w-40 h-40 rounded-full mx-auto border-4 border-white shadow-2xl object-cover"
                priority
              />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white"></div>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            <div className="animate-fade-in">
              <p className="text-lg font-medium text-gray-600 mb-2">Hello, I'm</p>
              <h1 className="hero-title gradient-text mb-4">Your Name</h1>
              <div className="relative">
                <h2 className="hero-subtitle text-gray-600 max-w-3xl mx-auto">
                  Full Stack Developer & Creative Problem Solver
                </h2>
                <p className="text-lg text-gray-500 mt-4 max-w-2xl mx-auto leading-relaxed">
                  Crafting exceptional digital experiences with modern technologies. Passionate about creating scalable
                  solutions that make a difference.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up pt-8">
              <button onClick={() => scrollToSection("projects")} className="btn-primary group">
                <span>View My Work</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </button>

              <button onClick={() => scrollToSection("contact")} className="btn-secondary group">
                <Mail className="w-4 h-4" />
                <span>Get In Touch</span>
              </button>

              <button className="btn-secondary group">
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-md mx-auto pt-12 animate-slide-up">
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">50+</div>
                <div className="text-sm text-gray-500">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">3+</div>
                <div className="text-sm text-gray-500">Years Exp</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">100%</div>
                <div className="text-sm text-gray-500">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
