"use client"

import { useState } from "react"
import Image from "next/image"
import { ExternalLink, Github } from 'lucide-react'
import { useTranslation } from "@/hooks/useTranslation"
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver"
import { projects } from "@/lib/constants"
import type { Project } from "@/types"

type FilterType = "all" | "web" | "AI" | "DevOps" | "mobile"

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all")
  const { t } = useTranslation()
  const { ref, isIntersecting } = useIntersectionObserver()

  const filters: { key: FilterType; label: string }[] = [
    { key: "all", label: t("projects.all") },
    { key: "web", label: t("projects.web") },
    { key: "AI", label: t("AI") },
    { key: "DevOps", label: t("DevOps") },
    { key: "mobile", label: t("projects.mobile") },
  ]

  const filteredProjects = projects.filter(
    (project) => activeFilter === "all" || project.category === activeFilter
  )


  return (
    <section id="projects" className="py-16 px-4 bg-white/50">
      <div className="container mx-auto">
        <div ref={ref}>
          <h2
            className={`text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent transition-all duration-700 ${isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            {t("projects.title")}
          </h2>
        </div>

        {/* Project Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`filter-btn ${activeFilter === filter.key ? "active" : ""}`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { ref, isIntersecting } = useIntersectionObserver()

  return (
    <div
      ref={ref}
      className={`project-card transition-all duration-700 ${
        isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative overflow-hidden rounded-lg shadow-lg group">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          width={400}
          height={300}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-sm mb-4">{project.description}</p>
            <div className="flex gap-2 mb-4">
              {project.technologies.slice(0, 3).map((tech) => (
                <span key={tech} className="px-2 py-1 bg-white/20 rounded text-xs">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-cyan-400 transition-colors"
                >
                  <ExternalLink size={20} />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-cyan-400 transition-colors"
                >
                  <Github size={20} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
