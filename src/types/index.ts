export interface Project {
  id: string
  title: string
  description: string
  image: string
  category: "web" | "mobile" | "design"
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
}

export interface Skill {
  name: string
  level: number
  category: "frontend" | "backend" | "tools"
}

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  image: string
  date: string
  readTime: string
  slug: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  content: string
  image: string
}

export interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

export type Language = "en" | "es" | "fr"

export interface Translation {
  [key: string]: string
}

export interface Translations {
  [key: string]: Translation
}
