"use client"

import { useTranslation } from "@/hooks/useTranslation"
import type { Language } from "@/types"

export function LanguageSelector() {
  const { currentLanguage, changeLanguage } = useTranslation()

  const languages: { code: Language; name: string }[] = [
    { code: "en", name: "EN" },
    { code: "es", name: "ES" },
    { code: "fr", name: "FR" },
  ]

  return (
    <select
      value={currentLanguage}
      onChange={(e) => changeLanguage(e.target.value as Language)}
      className="px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary bg-white"
    >
      {languages.map((lang) => (
        <option key={lang.code} value={lang.code}>
          {lang.name}
        </option>
      ))}
    </select>
  )
}
