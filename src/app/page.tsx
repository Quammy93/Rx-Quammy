// import { Header } from "@/components/sections/Header"
// import { Hero } from "@/components/sections/Hero"
// import { Projects } from "@/components/sections/Projects"
// import { Skills } from "@/components/sections/Skills"
// import { Blog } from "@/components/sections/Blog"
// import { Testimonials } from "@/components/sections/Testimonials"
// import { Contact } from "@/components/sections/Contact"
// import { Footer } from "@/components/sections/Footer"
// import { BackToTop } from "@/components/common/BackToTop"

// export default function Home() {
//   return (
//     <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50 min-h-screen">
//       <Header />
//       <main>
//         <Hero />
//         <Projects />
//         <Skills />
//         <Blog />
//         <Testimonials />
//         <Contact />
//       </main>
//       <Footer />
//       <BackToTop />
//     </div>
//   )
// }


import { Header } from "@/components/sections/Header"
import { Hero } from "@/components/sections/Hero"
import { Projects } from "@/components/sections/Projects"
import { Skills } from "@/components/sections/Skills"
import { Blog } from "@/components/sections/Blog"
import { Testimonials } from "@/components/sections/Testimonials"
import { Contact } from "@/components/sections/Contact"
import { Footer } from "@/components/sections/Footer"
import { BackToTop } from "@/components/common/BackToTop"

export default function Home() {
  // Uncomment the line below to test Tailwind CSS
  // return <TailwindTest />

  return (
    <div className="min-h-screen w-full">
      <Header />
      <main className="w-full">
        <Hero />
        <Projects />
        <Skills />
        <Blog />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
