"use client"

import { useI18n, TRANSLATIONS } from "@/lib/i18n"
import { PERSONAL } from "@/lib/portfolio-data"
import { SocialLinks } from "./social-links"

export function Footer() {
  const { t } = useI18n()

  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-4 py-8 sm:gap-6 sm:px-6 sm:py-10">
        <SocialLinks />
        <p className="text-center font-mono text-[11px] text-muted-foreground sm:text-sm">
          &copy; {new Date().getFullYear()} {PERSONAL.name}. {t(TRANSLATIONS.footer.rights)}
        </p>
      </div>
    </footer>
  )
}
