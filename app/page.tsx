"use client"

import { useI18n, TRANSLATIONS } from "@/lib/i18n"
import { PERSONAL } from "@/lib/portfolio-data"
import { PHOTOS } from "@/lib/photos"
import { TopNav } from "@/components/top-nav"
import { Footer } from "@/components/footer"
import { SocialLinks } from "@/components/social-links"
import { MagneticButton } from "@/components/magnetic-button"
import Link from "next/link"
import { Code, Database, Briefcase, ArrowRight, Download } from "lucide-react"
import { useState } from "react"

function HeroBanner() {
  return (
    <div className="relative w-full">
      {/* Banner Image */}
      <div className="relative h-36 w-full overflow-hidden rounded-xl border border-border sm:h-44 md:h-52 lg:h-56">
        <img
          src={PHOTOS.banner_main}
          alt="Banner Ruan Santos - Dev Full-Stack"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-background/80 to-transparent" />
      </div>

      {/* Profile Photo overlapping banner */}
      <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 sm:-bottom-16">
        <div className="animate-glow-pulse relative h-28 w-28 overflow-hidden rounded-full border-4 border-background shadow-[0_0_30px_rgba(255,255,255,0.15)] sm:h-32 sm:w-32 md:h-36 md:w-36">
          <img
            src={PHOTOS.profile}
            alt={PERSONAL.name}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute -bottom-0.5 -right-0.5 h-4 w-4 rounded-full border-2 border-background bg-primary sm:h-5 sm:w-5" />
      </div>
    </div>
  )
}

function NavCard({
  href,
  icon,
  title,
  hoverText,
  delay,
}: {
  href: string
  icon: React.ReactNode
  title: string
  hoverText: string
  delay: string
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <MagneticButton className="w-full">
      <Link
        href={href}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onTouchStart={() => setHovered(true)}
        onTouchEnd={() => setTimeout(() => setHovered(false), 2000)}
        className={`animate-fade-up group flex w-full items-center gap-3 rounded-xl border border-border bg-card p-4 transition-all duration-500 hover:border-primary/50 hover:bg-secondary hover:shadow-[0_0_30px_rgba(255,255,255,0.08)] sm:gap-4 sm:p-5 ${delay}`}
      >
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground sm:h-12 sm:w-12">
          {icon}
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-balance font-sans text-sm font-bold text-foreground transition-colors group-hover:text-primary sm:text-base md:text-lg">
            {title}
          </h3>
          <p
            className={`font-mono text-[11px] leading-relaxed text-muted-foreground transition-all duration-300 sm:text-xs ${hovered ? "mt-1 max-h-20 opacity-100" : "max-h-0 opacity-0"}`}
          >
            {hoverText}
          </p>
        </div>
        <ArrowRight
          size={18}
          className="shrink-0 text-muted-foreground transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary sm:size-5"
        />
      </Link>
    </MagneticButton>
  )
}

export default function HomePage() {
  const { t } = useI18n()

  return (
    <div className="flex min-h-dvh flex-col">
      <TopNav />

      <main className="flex flex-1 flex-col items-center px-4 pt-16 pb-8 sm:px-6 sm:pt-20 sm:pb-10">
        <div className="flex w-full max-w-sm flex-col items-center gap-5 sm:max-w-md sm:gap-6 md:max-w-lg">
          {/* Banner + Overlapping Photo */}
          <div className="animate-elastic w-full">
            <HeroBanner />
          </div>

          {/* Name & Role */}
          <div className="mt-10 flex flex-col items-center gap-1 text-center sm:mt-12">
            <p className="font-mono text-xs tracking-widest text-primary sm:text-sm">
              {t(TRANSLATIONS.home.greeting)}
            </p>
            <h1 className="text-balance font-sans text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
              {PERSONAL.name}
            </h1>
            <p className="mt-1 font-mono text-xs text-muted-foreground sm:text-sm">
              {t(TRANSLATIONS.home.subtitle)}
            </p>
            <p className="font-mono text-[11px] text-muted-foreground sm:text-xs">
              {PERSONAL.email}
            </p>
          </div>

          {/* Social */}
          <div className="animate-fade-up stagger-1">
            <SocialLinks />
          </div>

          {/* CV Button */}
          <a
            href={PERSONAL.cv}
            target="_blank"
            rel="noopener noreferrer"
            className="animate-fade-up stagger-2 flex items-center gap-2 rounded-lg bg-cta px-5 py-2.5 font-mono text-xs font-semibold text-cta-foreground transition-all duration-300 hover:shadow-[0_0_20px_rgba(229,62,62,0.3)] active:scale-95 sm:text-sm"
          >
            <Download size={16} />
            {t(TRANSLATIONS.home.download_cv)}
          </a>

          {/* 3 Navigation Cards */}
          <div className="flex w-full flex-col gap-3">
            <NavCard
              href="/engineering"
              icon={<Code size={20} />}
              title={t(TRANSLATIONS.home.btn_engineering)}
              hoverText={t(TRANSLATIONS.home.btn_engineering_hover)}
              delay="stagger-3"
            />
            <NavCard
              href="/data"
              icon={<Database size={20} />}
              title={t(TRANSLATIONS.home.btn_data)}
              hoverText={t(TRANSLATIONS.home.btn_data_hover)}
              delay="stagger-4"
            />
            <NavCard
              href="/services"
              icon={<Briefcase size={20} />}
              title={t(TRANSLATIONS.home.btn_services)}
              hoverText={t(TRANSLATIONS.home.btn_services_hover)}
              delay="stagger-5"
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
