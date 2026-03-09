"use client"

import { useI18n, TRANSLATIONS } from "@/lib/i18n"
import { LanguageToggle } from "./language-toggle"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export function TopNav({ showBack = false }: { showBack?: boolean }) {
  const { t } = useI18n()

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-2.5 sm:px-6 sm:py-3">
        <div className="flex items-center gap-2 sm:gap-3">
          {showBack && (
            <Link
              href="/"
              className="flex items-center gap-1.5 rounded-lg border border-border bg-secondary px-2.5 py-1.5 font-mono text-xs text-muted-foreground transition-all duration-300 hover:border-primary hover:text-primary active:scale-95 sm:gap-2 sm:px-3 sm:py-2 sm:text-sm"
            >
              <ArrowLeft size={14} className="sm:size-4" />
              <span className="hidden min-[360px]:inline">{t(TRANSLATIONS.nav.back)}</span>
            </Link>
          )}
          {!showBack && (
            <span className="font-mono text-sm font-bold tracking-wider text-primary">
              RS
            </span>
          )}
        </div>
        <LanguageToggle />
      </div>
    </nav>
  )
}
