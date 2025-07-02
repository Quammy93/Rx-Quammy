"use client"

import { useEffect, useState } from "react"
import { useTranslation } from "@/hooks/useTranslation"
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver"
import { skills } from "@/lib/constants"
import type { Skill } from "@/types"

export function Skills() {
  const { t } = useTranslation()
  const { ref, isIntersecting } = useIntersectionObserver()

  const skillsByCategory = {
    frontend: skills.filter((skill) => skill.category === "frontend"),
    backend: skills.filter((skill) => skill.category === "backend"),
    tools: skills.filter((skill) => skill.category === "tools"),
  }

  return (
    <section id="skills" className="py-16 px-4">
      <div className="container mx-auto">
        <div ref={ref}>
          <h2
            className={`text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent transition-all duration-700 ${isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            {t("skills.title")}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SkillCategory title={t("skills.frontend")} skills={skillsByCategory.frontend} color="primary" index={0} />
          <SkillCategory title={t("skills.backend")} skills={skillsByCategory.backend} color="secondary" index={1} />
          <SkillCategory title={t("skills.tools")} skills={skillsByCategory.tools} color="accent" index={2} />
        </div>
      </div>
    </section>
  )
}

function SkillCategory({
  title,
  skills,
  color,
  index,
}: {
  title: string
  skills: Skill[]
  color: "primary" | "secondary" | "accent"
  index: number
}) {
  const { ref, isIntersecting } = useIntersectionObserver()

  const colorClasses = {
    primary: "text-primary-600",
    secondary: "text-secondary-600",
    accent: "text-accent-600",
  }

  return (
    <div
      ref={ref}
      className={`skill-category transition-all duration-700 ${
        isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <h3 className={`text-2xl font-bold mb-6 ${colorClasses[color]}`}>{title}</h3>
      <div className="space-y-4">
        {skills.map((skill, skillIndex) => (
          <SkillBar key={skill.name} skill={skill} color={color} isVisible={isIntersecting} delay={skillIndex * 100} />
        ))}
      </div>
    </div>
  )
}

function SkillBar({
  skill,
  color,
  isVisible,
  delay,
}: {
  skill: Skill
  color: "primary" | "secondary" | "accent"
  isVisible: boolean
  delay: number
}) {
  const [animatedLevel, setAnimatedLevel] = useState(0)

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setAnimatedLevel(skill.level)
      }, delay)
      return () => clearTimeout(timer)
    }
  }, [isVisible, skill.level, delay])

  const progressClasses = {
    primary: "bg-gradient-to-r from-primary-600 to-primary-400",
    secondary: "bg-gradient-to-r from-secondary-600 to-secondary-400",
    accent: "bg-gradient-to-r from-accent-600 to-accent-400",
  }

  return (
    <div className="skill-item">
      <div className="flex justify-between mb-2">
        <span className="font-medium">{skill.name}</span>
        <span className="text-sm text-gray-600">{skill.level}%</span>
      </div>
      <div className="skill-bar">
        <div
          className={`skill-progress ${progressClasses[color]} transition-all duration-1000 ease-out`}
          style={{ width: `${animatedLevel}%` }}
        />
      </div>
    </div>
  )
}
