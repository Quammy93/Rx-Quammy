// import type React from "react"
// import type { Metadata } from "next"
// import { Inter } from "next/font/google"
// import "./globals.css"

// const inter = Inter({ subsets: ["latin"] })

// export const metadata: Metadata = {
//   title: "Rx-Quammy - Portfolio",
//   description: "Full Stack Developer & Creative Problem Solver",
//   keywords: ["developer", "portfolio", "full stack", "react", "next.js"],
//   authors: [{ name: "Maxwell AHORLU" }],
//   creator: "Maxwell AHORLU",
//   openGraph: {
//     type: "website",
//     locale: "en_US",
//     url: "https://yourportfolio.com",
//     title: "Your Name - Portfolio",
//     description: "Full Stack Developer & Creative Problem Solver",
//     siteName: "Your Name Portfolio",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Your Name - Portfolio",
//     description: "Full Stack Developer & Creative Problem Solver",
//     creator: "@yourusername",
//   },
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       "max-video-preview": -1,
//       "max-image-preview": "large",
//       "max-snippet": -1,
//     },
//   },
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en" className="scroll-smooth">
//       <body className={`${inter.className} bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50 min-h-screen`}>
//         {children}
//         <div className="bg-red-500 text-white p-4 rounded">
//   Tailwind is working!
// </div>

//       </body>
//     </html>
//   )
// }


import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  title: "Your Name - Portfolio",
  description: "Full Stack Developer & Creative Problem Solver",
  keywords: ["developer", "portfolio", "full stack", "react", "next.js", "web development"],
  authors: [{ name: "Your Name" }],
  creator: "Your Name",
  metadataBase: new URL("https://yourportfolio.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourportfolio.com",
    title: "Your Name - Portfolio",
    description: "Full Stack Developer & Creative Problem Solver",
    siteName: "Your Name Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Your Name - Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Name - Portfolio",
    description: "Full Stack Developer & Creative Problem Solver",
    creator: "@yourusername",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#6366f1" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
