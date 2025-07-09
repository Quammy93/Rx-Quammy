// "use client"

// import type React from "react"
// import { useState } from "react"
// import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react"
// import { useTranslation } from "@/hooks/useTranslation"
// import { useIntersectionObserver } from "@/hooks/useIntersectionObserver"
// import { Button } from "@/components/ui/Button"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/Textarea"
// import { generateCaptcha } from "@/lib/utils"

// export function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//     captchaAnswer: "",
//   })
//   const [captcha, setCaptcha] = useState(generateCaptcha())
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

//   const { t } = useTranslation()
//   const { ref, isIntersecting } = useIntersectionObserver()

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target
//     setFormData((prev) => ({ ...prev, [name]: value }))
//   }

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()

//     // Validate CAPTCHA
//     if (Number.parseInt(formData.captchaAnswer) !== captcha.answer) {
//       setSubmitStatus("error")
//       return
//     }

//     setIsSubmitting(true)

//     try {
//       // Simulate form submission
//       await new Promise((resolve) => setTimeout(resolve, 2000))

//       setSubmitStatus("success")
//       setFormData({
//         name: "",
//         email: "",
//         subject: "",
//         message: "",
//         captchaAnswer: "",
//       })
//       setCaptcha(generateCaptcha())
//     } catch (error) {
//       setSubmitStatus("error")
//     } finally {
//       setIsSubmitting(false)
//     }
//   }

//   const contactInfo = [
//     {
//       icon: Mail,
//       label: "Email",
//       value: "Quammy93@gmail.com",
//       href: "mailto:your.email@example.com",
//     },
//     {
//       icon: Phone,
//       label: "Phone",
//       value: "+233244534628",
//       href: "tel:+233244534528",
//     },
//     {
//       icon: MapPin,
//       label: "Location",
//       value: "Accra, Ghana",
//       href: "#",
//     },
//   ]

//   return (
//     <section id="contact" className="py-16 px-4 bg-white/50">
//       <div className="container mx-auto">
//         <div ref={ref}>
//           <h2
//             className={`text-4xl font-bold text-center mb-4 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent transition-all duration-700 ${isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
//           >
//             {t("contact.title")}
//           </h2>
//           <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
//             Have a project in mind or want to collaborate? I'd love to hear from you. Let's create something amazing
//             together!
//           </p>
//         </div>

//         <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
//           {/* Contact Information */}
//           <div className="space-y-8">
//             <div>
//               <h3 className="text-2xl font-bold mb-6">{t("contact.info")}</h3>
//               <div className="space-y-6">
//                 {contactInfo.map((info, index) => {
//                   const Icon = info.icon
//                   return (
//                     <div key={index} className="flex items-center group">
//                       <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
//                         <Icon className="w-5 h-5 text-white" />
//                       </div>
//                       <div>
//                         <h4 className="font-semibold text-gray-900">{info.label}</h4>
//                         {info.href !== "#" ? (
//                           <a href={info.href} className="text-gray-600 hover:text-primary-600 transition-colors">
//                             {info.value}
//                           </a>
//                         ) : (
//                           <span className="text-gray-600">{info.value}</span>
//                         )}
//                       </div>
//                     </div>
//                   )
//                 })}
//               </div>
//             </div>

//             {/* Map or Additional Info */}
//             <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8">
//               <h4 className="text-lg font-semibold mb-4">Why Work With Me?</h4>
//               <ul className="space-y-3 text-gray-600">
//                 <li className="flex items-center">
//                   <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
//                   Fast response time (usually within 24 hours)
//                 </li>
//                 <li className="flex items-center">
//                   <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
//                   Clear communication throughout the project
//                 </li>
//                 <li className="flex items-center">
//                   <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
//                   High-quality, modern solutions
//                 </li>
//                 <li className="flex items-center">
//                   <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
//                   Post-launch support and maintenance
//                 </li>
//               </ul>
//             </div>
//           </div>

//           {/* Contact Form */}
//           <div className="bg-white rounded-2xl shadow-xl p-8">
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="grid md:grid-cols-2 gap-6">
//                 <div>
//                   <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
//                     {t("contact.name")} *
//                   </label>
//                   <Input
//                     id="name"
//                     name="name"
//                     type="text"
//                     required
//                     value={formData.name}
//                     onChange={handleInputChange}
//                     placeholder="Your full name"
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
//                     {t("contact.email")} *
//                   </label>
//                   <Input
//                     id="email"
//                     name="email"
//                     type="email"
//                     required
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     placeholder="your.email@example.com"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
//                   {t("contact.subject")} *
//                 </label>
//                 <Input
//                   id="subject"
//                   name="subject"
//                   type="text"
//                   required
//                   value={formData.subject}
//                   onChange={handleInputChange}
//                   placeholder="What's this about?"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
//                   {t("contact.message")} *
//                 </label>
//                 <Textarea
//                   id="message"
//                   name="message"
//                   required
//                   value={formData.message}
//                   onChange={handleInputChange}
//                   placeholder="Tell me about your project..."
//                   rows={5}
//                 />
//               </div>

//               {/* CAPTCHA */}
//               <div className="bg-gray-50 p-4 rounded-lg">
//                 <label htmlFor="captchaAnswer" className="block text-sm font-medium text-gray-700 mb-2">
//                   {t("contact.captcha")} *
//                 </label>
//                 <div className="flex items-center space-x-4">
//                   <span className="text-lg font-semibold text-gray-900">{captcha.question}</span>
//                   <Input
//                     id="captchaAnswer"
//                     name="captchaAnswer"
//                     type="number"
//                     required
//                     value={formData.captchaAnswer}
//                     onChange={handleInputChange}
//                     className="w-20"
//                     placeholder="?"
//                   />
//                 </div>
//               </div>

//               {/* Submit Status */}
//               {submitStatus === "success" && (
//                 <div className="flex items-center text-green-600 bg-green-50 p-3 rounded-lg">
//                   <CheckCircle className="w-5 h-5 mr-2" />
//                   <span>Message sent successfully! I'll get back to you soon.</span>
//                 </div>
//               )}

//               {submitStatus === "error" && (
//                 <div className="flex items-center text-red-600 bg-red-50 p-3 rounded-lg">
//                   <AlertCircle className="w-5 h-5 mr-2" />
//                   <span>Please check your CAPTCHA answer and try again.</span>
//                 </div>
//               )}

//               <Button type="submit" disabled={isSubmitting} className="w-full" size="lg">
//                 {isSubmitting ? (
//                   <>
//                     <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
//                     Sending...
//                   </>
//                 ) : (
//                   <>
//                     <Send className="w-4 h-4 mr-2" />
//                     {t("contact.send")}
//                   </>
//                 )}
//               </Button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }


"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react"
import { useTranslation } from "@/hooks/useTranslation"
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/Textarea"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const { t } = useTranslation()
  const { ref, isIntersecting } = useIntersectionObserver()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setIsSubmitting(true)

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 2000))

      setSubmitStatus("success")
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "your.email@example.com",
      href: "mailto:your.email@example.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Your City, Country",
      href: "#",
    },
  ]

  return (
    <section id="contact" className="py-16 px-4 bg-white/50">
      <div className="container mx-auto">
        <div ref={ref}>
          <h2
            className={`text-4xl font-bold text-center mb-4 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent transition-all duration-700 ${isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            {t("contact.title")}
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you. Let's create something amazing
            together!
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">{t("contact.info")}</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <div key={index} className="flex items-center group">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{info.label}</h4>
                        {info.href !== "#" ? (
                          <a href={info.href} className="text-gray-600 hover:text-primary-600 transition-colors">
                            {info.value}
                          </a>
                        ) : (
                          <span className="text-gray-600">{info.value}</span>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Map or Additional Info */}
            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8">
              <h4 className="text-lg font-semibold mb-4">Why Work With Me?</h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Fast response time (usually within 24 hours)
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Clear communication throughout the project
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  High-quality, modern solutions
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Post-launch support and maintenance
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    {t("contact.name")} *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    {t("contact.email")} *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  {t("contact.subject")} *
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  {t("contact.message")} *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project..."
                  rows={5}
                />
              </div>

              {/* Submit Status */}
              {submitStatus === "success" && (
                <div className="flex items-center text-green-600 bg-green-50 p-3 rounded-lg">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span>Message sent successfully! I'll get back to you soon.</span>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="flex items-center text-red-600 bg-red-50 p-3 rounded-lg">
                  <AlertCircle className="w-5 h-5 mr-2" />
                  <span>Something went wrong. Please try again.</span>
                </div>
              )}

              <Button type="submit" disabled={isSubmitting} className="w-full" size="lg">
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    {t("contact.send")}
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
