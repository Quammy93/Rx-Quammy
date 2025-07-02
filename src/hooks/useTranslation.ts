"use client"

import { useState, useCallback } from "react"
import { translations } from "@/lib/constants"
import type { Language } from "@/types"

export function useTranslation() {
  const [currentLanguage, setCurrentLanguage] = useState<Language>("en")

  const t = useCallback(
    (key: string): string => {
      return translations[currentLanguage]?.[key] || key
    },
    [currentLanguage],
  )

  const changeLanguage = useCallback((language: Language) => {
    setCurrentLanguage(language)
  }, [])

  return {
    t,
    currentLanguage,
    changeLanguage,
  }
}
