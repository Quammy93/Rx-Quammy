import { Header } from "@/components/sections/Header"
import { Hero } from "@/components/sections/Hero"
import { Projects } from "@/components/sections/Projects"
import { Skills } from "@/components/sections/Skills"
import { BackToTop } from "@/components/common/BackToTop"

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50 min-h-screen">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Skills />
        {/* Add other sections here: Blog, Testimonials, Contact, Footer */}
      </main>
      <BackToTop />
    </div>
  )
}
