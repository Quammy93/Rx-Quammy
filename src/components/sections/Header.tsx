// // "use client"
// "use client"

// import { useState, useEffect } from "react"
// import Image from "next/image"
// import Link from "next/link"
// import { Menu, X } from "lucide-react"
// import { useTranslation } from "@/hooks/useTranslation"
// import { useScrollSpy } from "@/hooks/useScrollSpy"
// import { SearchBar } from "@/components/common/SearchBar"
// import { LanguageSelector } from "@/components/common/LanguageSelector"

// const sections = ["home", "projects", "skills", "blog", "testimonials", "contact"]

// export function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)
//   const [isScrolled, setIsScrolled] = useState(false)
//   const { t } = useTranslation()
//   const activeSection = useScrollSpy(sections, 200)

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 100)
//     }

//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   const scrollToSection = (sectionId: string) => {
//     const element = document.getElementById(sectionId)
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" })
//     }
//     setIsMenuOpen(false)
//   }

//   return (
//     <header
//       className={`fixed top-0 w-full z-50 transition-all duration-300 ${
//         isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white/90 backdrop-blur-md"
//       }`}
//     >
//       <nav className="container mx-auto px-4 py-4">
//         <div className="flex items-center justify-between">
//           {/* Logo */}
//           <Link
//             href="#home"
//             onClick={(e) => {
//               e.preventDefault()
//               scrollToSection("home")
//             }}
//             className="flex items-center space-x-3 hover:scale-105 transition-transform duration-300"
//           >
//             <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full flex items-center justify-center">
//               <Image
//                 src="/profile.jpg"
//                 alt="Logo"
//                 width={32}
//                 height={32}
//                 className="rounded-full"
//               />
//             </div>
//             <span className="text-xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
//                Quammy
//             </span>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             {sections.map((section) => (
//               <button
//                 key={section}
//                 onClick={() => scrollToSection(section)}
//                 className={`nav-link ${activeSection === section ? "active" : ""}`}
//               >
//                 {t(`nav.${section}`)}
//               </button>
//             ))}
//           </div>

//           {/* Search and Language */}
//           <div className="hidden lg:flex items-center space-x-4">
//             <SearchBar />
//             <LanguageSelector />
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden text-gray-600 hover:text-primary-600 transition-colors"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="md:hidden mt-4 pb-4">
//             <div className="flex flex-col space-y-4">
//               {sections.map((section) => (
//                 <button key={section} onClick={() => scrollToSection(section)} className="nav-link text-left">
//                   {t(`nav.${section}`)}
//                 </button>
//               ))}
//             </div>
//             <div className="mt-4 pt-4 border-t border-gray-200 space-y-2">
//               <SearchBar />
//               <LanguageSelector />
//             </div>
//           </div>
//         )}
//       </nav>
//     </header>
//   )
// }


"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useTranslation } from "@/hooks/useTranslation"
import { useScrollSpy } from "@/hooks/useScrollSpy"
import { SearchBar } from "@/components/common/SearchBar"
import { LanguageSelector } from "@/components/common/LanguageSelector"

const sections = ["home", "projects", "skills", "blog", "testimonials", "contact"]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { t } = useTranslation()
  const activeSection = useScrollSpy(sections, 200)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-white/80 backdrop-blur-xl shadow-lg border-b border-white/20" : "bg-white/60 backdrop-blur-md"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="#home"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection("home")
            }}
            className="flex items-center space-x-3 group"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative w-12 h-12 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl flex items-center justify-center transform group-hover:scale-105 transition-transform">
                <span className="text-white font-bold text-lg">Y</span>
              </div>
            </div>
            <span className="text-xl font-bold gradient-text">Your Name</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`nav-link ${activeSection === section ? "active" : ""}`}
              >
                {t(`nav.${section}`)}
              </button>
            ))}
          </div>

          {/* Search and Language */}
          <div className="hidden lg:flex items-center space-x-4">
            <SearchBar />
            <LanguageSelector />
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-lg transition-all duration-300 ${
              isMenuOpen ? "bg-primary-600 text-white" : "text-gray-600 hover:text-primary-600 hover:bg-primary-50"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20">
            <div className="flex flex-col space-y-4">
              {sections.map((section) => (
                <button key={section} onClick={() => scrollToSection(section)} className="nav-link text-left py-2">
                  {t(`nav.${section}`)}
                </button>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-gray-200 space-y-4">
              <SearchBar />
              <LanguageSelector />
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
