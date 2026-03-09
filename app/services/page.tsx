"use client"

import { useI18n, TRANSLATIONS } from "@/lib/i18n"
import { PERSONAL, SERVICES } from "@/lib/portfolio-data"
import { PHOTOS } from "@/lib/photos"
import { TopNav } from "@/components/top-nav"
import { Footer } from "@/components/footer"
import { MagneticButton } from "@/components/magnetic-button"
import { Database, GraduationCap, Globe, Code, MessageCircle, ArrowRight } from "lucide-react"

const ICON_MAP: Record<string, React.ReactNode> = {
  database: <Database size={22} />,
  "graduation-cap": <GraduationCap size={22} />,
  globe: <Globe size={22} />,
  code: <Code size={22} />,
}

export default function ServicesPage() {
  const { t } = useI18n()

  const whatsappUrl = `https://wa.me/${PERSONAL.whatsapp}`

  return (
    <div className="flex min-h-dvh flex-col">
      <TopNav showBack />

      {/* Hero */}
      <header className="relative flex flex-col items-center justify-center px-4 pt-20 pb-8 sm:px-6 sm:pt-24 sm:pb-12">
        <div className="relative mb-4 h-28 w-full max-w-3xl overflow-hidden rounded-xl border border-border sm:h-32 md:h-40">
          <img
            src={PHOTOS.banner_services}
            alt="Services Banner"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background/80 to-transparent" />
        </div>
        <div className="relative -mt-12 h-24 w-24 overflow-hidden rounded-full border-4 border-background shadow-[0_0_20px_rgba(45,212,168,0.15)] sm:-mt-14 sm:h-28 sm:w-28 md:h-36 md:w-36">
          <img
            src={PHOTOS.profile}
            alt={PERSONAL.name}
            className="h-full w-full object-cover"
          />
        </div>
        <h1 className="mt-3 text-balance text-center font-sans text-2xl font-bold text-foreground sm:mt-4 sm:text-3xl md:text-4xl">
          {t(TRANSLATIONS.services.title)}
        </h1>
        <p className="mt-2 max-w-md px-4 text-center font-mono text-xs text-muted-foreground sm:text-sm">
          {t(TRANSLATIONS.services.subtitle)}
        </p>
      </header>

      <main className="mx-auto w-full max-w-3xl px-4 pb-12 sm:px-6 sm:pb-16">
        {/* Service Cards */}
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
          {SERVICES.map((service, i) => (
            <MagneticButton key={service.id} className="w-full">
              <div
                className="animate-fade-up group flex h-full flex-col gap-3 rounded-xl border border-border bg-card p-4 transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_30px_rgba(45,212,168,0.08)] sm:gap-4 sm:p-6"
                style={{ animationDelay: `${i * 0.12}s` }}
              >
                {/* Icon */}
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground sm:h-12 sm:w-12">
                  {ICON_MAP[service.icon] || <Code size={22} />}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-sans text-base font-bold text-foreground group-hover:text-primary sm:text-lg">
                    {t(service.title)}
                  </h3>
                  <p className="mt-1.5 font-mono text-[11px] leading-relaxed text-muted-foreground sm:mt-2 sm:text-xs">
                    {t(service.description)}
                  </p>
                </div>

                {/* CTA */}
                <a
                  href={`${whatsappUrl}?text=${encodeURIComponent(t(service.title))}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 self-start rounded-lg bg-cta px-3 py-2 font-mono text-[11px] font-semibold text-cta-foreground transition-all duration-300 hover:shadow-[0_0_15px_rgba(229,62,62,0.3)] active:scale-95 sm:px-4 sm:text-xs"
                >
                  <MessageCircle size={13} />
                  {t(TRANSLATIONS.services.cta)}
                  <ArrowRight size={13} />
                </a>
              </div>
            </MagneticButton>
          ))}
        </div>

        {/* General CTA */}
        <div className="mt-10 flex flex-col items-center gap-4 rounded-xl border border-border bg-card p-6 text-center sm:mt-16 sm:gap-6 sm:p-8">
          <h2 className="text-balance font-sans text-xl font-bold text-foreground sm:text-2xl">
            {t({
              pt: "Tem outra ideia?",
              en: "Have another idea?",
            })}
          </h2>
          <p className="max-w-md font-mono text-[11px] text-muted-foreground sm:text-sm">
            {t({
              pt: "Entre em contato comigo pelo WhatsApp ou LinkedIn. Vamos conversar sobre como posso ajudar!",
              en: "Get in touch via WhatsApp or LinkedIn. Let's talk about how I can help!",
            })}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg bg-cta px-5 py-2.5 font-mono text-xs font-semibold text-cta-foreground transition-all duration-300 hover:shadow-[0_0_20px_rgba(229,62,62,0.3)] active:scale-95 sm:px-6 sm:py-3 sm:text-sm"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
            <a
              href={PERSONAL.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg border border-primary bg-primary/10 px-5 py-2.5 font-mono text-xs font-semibold text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground active:scale-95 sm:px-6 sm:py-3 sm:text-sm"
            >
              LinkedIn
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
