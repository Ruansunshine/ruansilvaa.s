"use client"

import { useI18n } from "@/lib/i18n"
import { Languages } from "lucide-react"

export function LanguageToggle() {
  const { lang, toggleLang } = useI18n()

  return (
    <button
      onClick={toggleLang}
      className="flex items-center gap-1.5 rounded-lg border border-border bg-secondary px-2.5 py-1.5 font-mono text-xs text-muted-foreground transition-all duration-300 hover:border-primary hover:text-primary active:scale-95 sm:gap-2 sm:px-3 sm:py-2 sm:text-sm"
      aria-label={lang === "pt" ? "Switch to English" : "Mudar para Portugues"}
    >
      <Languages size={14} className="sm:size-4" />
      <span className="font-semibold">{lang === "pt" ? "EN" : "PT"}</span>
    </button>
  )
}
