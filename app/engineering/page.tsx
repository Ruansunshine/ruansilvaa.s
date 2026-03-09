"use client"

import * as React from 'react'
import { useI18n, TRANSLATIONS } from "@/lib/i18n"
import { PERSONAL, TIMELINE, TECH_STACK, PROJECTS, type TimelineItem } from "@/lib/portfolio-data"
import { PHOTOS } from "@/lib/photos"
import { HACKATHON_PHOTOS } from "@/lib/photos"
import { HACKATHON_DETAILS } from "@/lib/hackathon-details"
import { TRILHAS_DETAILS } from "@/lib/trilhas-details"
import { CERTIFICATES } from "@/lib/certificates"
import { TopNav } from "@/components/top-nav"
import { Footer } from "@/components/footer"
import { Trophy, Briefcase, GraduationCap, ExternalLink, Github } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from '@/components/ui/carousel'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

// ---- RADAR CHART (Tech Stack) ----
function RadarChart({ items }: { items: { name: string; level: number }[] }) {
  const cx = 150
  const cy = 150
  const maxR = 100
  const n = items.length
  const angleStep = (2 * Math.PI) / n

  const points = items.map((item, i) => {
    const angle = i * angleStep - Math.PI / 2
    const r = (item.level / 100) * maxR
    return {
      x: cx + r * Math.cos(angle),
      y: cy + r * Math.sin(angle),
      lx: cx + (maxR + 24) * Math.cos(angle),
      ly: cy + (maxR + 24) * Math.sin(angle),
      name: item.name,
      level: item.level,
    }
  })

  const polyPoints = points.map((p) => `${p.x},${p.y}`).join(" ")
  const gridLevels = [25, 50, 75, 100]

  return (
    <svg viewBox="0 0 300 300" className="mx-auto w-full max-w-[240px] sm:max-w-[280px] md:max-w-xs">
      {gridLevels.map((level) => {
        const r = (level / 100) * maxR
        const gridPoints = Array.from({ length: n }, (_, i) => {
          const angle = i * angleStep - Math.PI / 2
          return `${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`
        }).join(" ")
        return (
          <polygon
            key={level}
            points={gridPoints}
            fill="none"
            stroke="var(--border)"
            strokeWidth="0.5"
          />
        )
      })}
      {points.map((p, i) => (
        <line
          key={`axis-${i}`}
          x1={cx}
          y1={cy}
          x2={cx + maxR * Math.cos(i * angleStep - Math.PI / 2)}
          y2={cy + maxR * Math.sin(i * angleStep - Math.PI / 2)}
          stroke="var(--border)"
          strokeWidth="0.5"
        />
      ))}
      <polygon
        points={polyPoints}
        fill="rgba(255, 255, 255, 0.08)"
        stroke="var(--primary)"
        strokeWidth="2"
      />
      {points.map((p, i) => (
        <g key={`label-${i}`}>
          <circle cx={p.x} cy={p.y} r="3" fill="var(--primary)" />
          <text
            x={p.lx}
            y={p.ly}
            textAnchor="middle"
            dominantBaseline="central"
            fill="var(--muted-foreground)"
            fontSize="7"
            fontFamily="var(--font-mono)"
          >
            {p.name}
          </text>
        </g>
      ))}
    </svg>
  )
}

// ---- TIMELINE SECTION ----
function TimelineSection({ items }: { items: TimelineItem[] }) {
  const { t } = useI18n()

  const iconMap = {
    work: <Briefcase size={14} />,
    education: <GraduationCap size={14} />,
    achievement: <Trophy size={14} />,
  }

  return (
    <div className="relative flex flex-col gap-0 pl-6 sm:pl-8">
      <div className="absolute top-0 bottom-0 left-2 w-px bg-border sm:left-3" />
      {items.map((item, i) => (
        <div key={i} className="animate-fade-up relative flex gap-3 pb-8 sm:gap-4" style={{ animationDelay: `${i * 0.1}s` }}>
          <div className="absolute -left-4 flex h-6 w-6 items-center justify-center rounded-full border border-border bg-secondary text-primary sm:-left-5 sm:h-7 sm:w-7">
            {iconMap[item.type]}
          </div>
          <div className="min-w-0">
            <span className="font-mono text-[11px] text-primary sm:text-xs">{item.year}</span>
            <h4 className="text-balance font-sans text-sm font-bold text-foreground sm:text-base">{t(item.title)}</h4>
            <p className="mt-1 font-mono text-[11px] leading-relaxed text-muted-foreground sm:text-xs">{t(item.description)}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

// ---- SECTION WRAPPER ----
function Section({
  title,
  children,
  id,
}: {
  title: string
  children: React.ReactNode
  id?: string
}) {
  return (
    <section id={id} className="py-8 sm:py-12">
      <h2 className="mb-6 font-sans text-xl font-bold text-foreground sm:mb-8 sm:text-2xl">
        <span className="mr-2 text-primary">{""}</span>
        {title}
      </h2>
      {children}
    </section>
  )
}

export default function EngineeringPage() {
  const { t } = useI18n()

  const engineeringCerts = CERTIFICATES.filter(
    (c) => c.category === "engineering" || c.category === "general"
  )
  const engineeringProjects = PROJECTS.filter(
    (p) => p.category === "engineering" || p.category === "freelance"
  )

  return (
    <div className="flex min-h-dvh flex-col">
      <TopNav showBack />

      {/* Hero Banner */}
      <header className="relative flex flex-col items-center justify-center px-4 pt-20 pb-8 sm:px-6 sm:pt-24 sm:pb-12">
        <div className="relative mb-4 h-28 w-full max-w-3xl overflow-hidden rounded-xl border border-border sm:h-32 md:h-40">
          <img
            src={PHOTOS.banner_engineering}
            alt="Engineering Banner"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background/80 to-transparent" />
        </div>
        <div className="relative -mt-12 h-24 w-24 overflow-hidden rounded-full border-4 border-background shadow-[0_0_20px_rgba(255,255,255,0.1)] sm:-mt-14 sm:h-28 sm:w-28 md:h-36 md:w-36">
          <img
            src={PHOTOS.profile}
            alt={PERSONAL.name}
            className="h-full w-full object-cover"
          />
        </div>
        <h1 className="mt-3 text-balance text-center font-sans text-2xl font-bold text-foreground sm:mt-4 sm:text-3xl md:text-4xl">
          {t(TRANSLATIONS.engineering.title)}
        </h1>
        <p className="mt-2 max-w-md px-4 text-center font-mono text-xs text-muted-foreground sm:text-sm">
          {t(PERSONAL.bio)}
        </p>
      </header>

      

      <main className="mx-auto w-full max-w-3xl px-4 sm:px-6">
        {/* Hackathons */}
        <Section title={t(TRANSLATIONS.engineering.hackathons)} id="hackathons">
          <div className="grid gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-3">
            {HACKATHON_PHOTOS.map((hack,  idx) => {
              const images: string[] = hack.images && hack.images.length ? hack.images : hack.image ? [hack.image] : []

              function HackCarousel({ images }: { images: string[] }) {
                const [api, setApi] = React.useState<CarouselApi | undefined>()

                React.useEffect(() => {
                  if (!api) return
                  const id = setInterval(() => {
                    api.scrollNext()
                  }, 3000)
                  return () => clearInterval(id)
                }, [api])

                return (
                  <Carousel setApi={(a) => setApi(a)} opts={{ loop: true }} className="relative">
                    <CarouselContent className="flex">
                      {images.map((src, i) => (
                        <CarouselItem key={i}>
                          <div className="aspect-video overflow-hidden bg-secondary">
                            <img
                              src={src}
                              alt={`${hack.title} ${i + 1}`}
                              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement
                                target.style.display = "none"
                              }}
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                )
              }

              // esse é o card1
              if (idx === 0) {
                // esse é o card1
              }
              // esse é o card2
              if (idx === 1) {
                // esse é o card 2
              }
              return (
                <Dialog key={hack.id}>
                  <div className="group overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_20px_rgba(255,255,255,0.06)]">
                    {images.length > 1 ? (
                      <HackCarousel images={images} />
                    ) : (
                      <div className="aspect-video overflow-hidden bg-secondary">
                        <img
                          src={images[0]}
                          alt={hack.title}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement
                            target.style.display = "none"
                          }}
                        />
                      </div>
                    )}

                    <div className="p-3 sm:p-4">
                      <div className="flex items-center gap-2">
                        <Trophy size={14} className="text-primary sm:size-4" />
                        <span className="font-mono text-[11px] font-bold text-primary sm:text-xs">
                          {typeof hack.placement === 'string' ? hack.placement : t(hack.placement)}
                        </span>
                      </div>
                      <h3 className="mt-1 font-sans text-sm font-bold text-foreground sm:text-base">
                        {typeof hack.title === 'string' ? hack.title : t(hack.title)}
                      </h3>
                      <p className="mt-1 font-mono text-[11px] text-muted-foreground sm:text-xs">
                        {typeof hack.description === 'string' ? hack.description : t(hack.description)}
                      </p>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm" className="mt-3 w-full">Ver detalhes</Button>
                      </DialogTrigger>
                    </div>
                  </div>
                  <DialogContent
                    className="w-full max-w-[95vw] sm:max-w-lg md:max-w-xl lg:max-w-2xl p-0 rounded-lg overflow-hidden"
                    style={{
                      width: '100%',
                      maxWidth: '95vw',
                      minHeight: 'auto',
                      height: 'auto',
                      maxHeight: '95vh',
                      padding: 0,
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <div className="flex items-center justify-end w-full sticky top-0 z-20 bg-card/90 backdrop-blur p-2 sm:hidden">
                      <DialogClose asChild>
                        <Button size="icon" variant="ghost" className="text-2xl">×</Button>
                      </DialogClose>
                    </div>
                    <div className="overflow-y-auto flex-1 px-2 pb-2 sm:px-6 sm:pb-6">
                    <DialogHeader>
                      <DialogTitle>{typeof hack.title === 'string' ? hack.title : t(hack.title)} - {t(TRANSLATIONS.engineering.hackathon_details.title)}</DialogTitle>
                      <DialogDescription>
                        {(() => {
                          // Se for o card do Trilhas, usa TRILHAS_DETAILS
                          const detail = hack.id === "hackathon-2"
                            ? TRILHAS_DETAILS["trilhas-1"]
                            : HACKATHON_DETAILS[hack.id]
                          const isTrilhas = hack.id === "hackathon-2"
                          const detailsT = isTrilhas ? TRANSLATIONS.engineering.trilhas_details : TRANSLATIONS.engineering.hackathon_details
                          return (
                            <>
                              <div className="mb-2">
                                <span className="font-semibold">{t(detailsT.explanation_label)}</span><br />
                                <span className="text-foreground">{t(detailsT.explanation)}</span>
                              </div>
                              <div className="mb-2">
                                <span className="font-semibold">{t(detailsT.certificate)}:</span><br />
                                {detail?.certificate && /\.(jpg|jpeg|png|gif|webp)$/i.test(detail.certificate) ? (
                                  <>
                                    <img src={detail.certificate} alt={t(detailsT.certificate)} className="mt-2 max-h-[32vh] w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto rounded border shadow object-contain" style={{ display: 'block' }} />
                                    <div className="mt-2 text-center">
                                      <a href={detail.certificate} className="text-primary underline" target="_blank" rel="noopener noreferrer">{t(detailsT.view_new_tab)}</a>
                                    </div>
                                  </>
                                ) : detail?.certificate && detail.certificate !== '(adicione aqui o link ou imagem do certificado)' ? (
                                  <a href={detail.certificate} className="text-primary underline" target="_blank" rel="noopener noreferrer">{t(detailsT.certificate)}</a>
                                ) : (
                                  <span className="text-foreground">{detail?.certificate || '(adicione aqui)'}</span>
                                )}
                              </div>
                              {detail?.team && (detail.team.pt || detail.team.en) && (
                                <div className="mb-2">
                                  <span className="font-semibold">Resumo:</span><br />
                                  <span className="text-foreground" style={{ whiteSpace: 'pre-line' }}>
                                    {t(detail.team)}
                                  </span>
                                </div>
                              )}
                              <div>
                                <span className="font-semibold">{t(detailsT.publications)}</span>
                                <ul className="list-disc pl-5">
                                  {detail?.publications && detail.publications.length > 0 ? (
                                    detail.publications.map((pub, idx) => (
                                      <li key={idx}>
                                        <a href={pub.url} className="text-primary underline" target="_blank" rel="noopener noreferrer">
                                          {pub.label === "LinkedIn"
                                            ? t(detailsT.linkedin)
                                            : pub.label === "Imirante.com"
                                              ? t(detailsT.imirante)
                                              : pub.label === "Site Oficial" && detailsT.site
                                                ? t(detailsT.site)
                                                : pub.label}
                                        </a>
                                      </li>
                                    ))
                                  ) : (
                                    <li><span className="text-foreground">(adicione aqui)</span></li>
                                  )}
                                </ul>
                              </div>
                            </>
                          )
                        })()}
                      </DialogDescription>
                    </DialogHeader>
                    </div>
                    <DialogFooter>
                      <DialogClose asChild>
                        <Button variant="secondary">{t(TRANSLATIONS.engineering.hackathon_details.close)}</Button>
                      </DialogClose>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              )
            })}
          </div>
        </Section>





        {/* Timeline */}
        <Section title={t(TRANSLATIONS.engineering.timeline)} id="timeline">
          <TimelineSection items={TIMELINE} />
        </Section>

        {/* Certifications */}
        <Section title={t(TRANSLATIONS.engineering.certifications)} id="certs">
          <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
            {engineeringCerts.map((cert) => (
              <div
                key={cert.id}
                className="group overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:border-primary/30"
              >
                <div className="aspect-[4/3] overflow-hidden bg-secondary">
                  <img
                    src={cert.image}
                    alt={t({ pt: cert.title, en: cert.titleEn })}
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.style.display = "none"
                    }}
                  />
                </div>
                <div className="p-3">
                  <h4 className="text-balance font-sans text-xs font-bold text-foreground sm:text-sm">
                    {t({ pt: cert.title, en: cert.titleEn })}
                  </h4>
                  <p className="font-mono text-[11px] text-muted-foreground sm:text-xs">
                    {cert.issuer} - {cert.date}
                  </p>
                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-1 font-mono text-[11px] text-primary hover:underline sm:text-xs"
                    >
                      Verificar <ExternalLink size={11} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Tech Stack Radar */}
        <Section title={t(TRANSLATIONS.engineering.stack)} id="stack">
          <div className="flex flex-col items-center gap-6 md:flex-row md:gap-8">
            <div className="w-full md:w-1/2">
              <RadarChart items={TECH_STACK.slice(0, 8)} />
            </div>
            <div className="flex w-full flex-wrap gap-2 md:w-1/2">
              {TECH_STACK.map((s) => (
                <div
                  key={s.name}
                  className="flex items-center gap-2 rounded-lg border border-border bg-secondary px-2.5 py-1.5 sm:px-3 sm:py-2"
                >
                  <div
                    className="h-1.5 rounded-full bg-primary sm:h-2"
                    style={{ width: `${s.level * 0.4}px` }}
                  />
                  <span className="font-mono text-[11px] text-foreground sm:text-xs">{s.name}</span>
                  <span className="font-mono text-[10px] text-muted-foreground sm:text-xs">{s.level}%</span>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Projects */}
        <Section title={t(TRANSLATIONS.engineering.projects)} id="projects">
          <div className="grid gap-3 sm:gap-4 md:grid-cols-2">
            {engineeringProjects.map((proj) => (
              <div
                key={proj.id}
                className="group overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_20px_rgba(255,255,255,0.06)]"
              >
                <div className="aspect-video overflow-hidden bg-secondary">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.style.display = "none"
                    }}
                  />
                </div>
                <div className="p-3 sm:p-4">
                  <h3 className="font-sans text-sm font-bold text-foreground sm:text-base">{proj.title}</h3>
                  <p className="mt-1 font-mono text-[11px] leading-relaxed text-muted-foreground sm:text-xs">
                    {t(proj.description)}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1 sm:mt-3 sm:gap-1.5">
                    {proj.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-md bg-primary/10 px-1.5 py-0.5 font-mono text-[10px] text-primary sm:px-2"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="mt-2 flex gap-2 sm:mt-3">
                    {proj.url && (
                      <a
                        href={proj.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 font-mono text-[11px] text-primary hover:underline sm:text-xs"
                      >
                        <ExternalLink size={11} /> Live
                      </a>
                    )}
                    {proj.github && (
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 font-mono text-[11px] text-muted-foreground hover:text-primary hover:underline sm:text-xs"
                      >
                        <Github size={11} /> Repo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* GitHub */}
        <Section title={t(TRANSLATIONS.engineering.github)} id="github">
          <a
            href={PERSONAL.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_20px_rgba(255,255,255,0.06)] sm:gap-4 sm:p-6"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground sm:h-14 sm:w-14">
              <Github size={24} className="sm:size-7" />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="truncate font-sans text-base font-bold text-foreground group-hover:text-primary sm:text-lg">
                @{PERSONAL.github.split("/").pop()}
              </h3>
              <p className="font-mono text-[11px] text-muted-foreground sm:text-xs">
                {t({ pt: "Ver todos os repositorios", en: "View all repositories" })}
              </p>
            </div>
            <ExternalLink size={18} className="shrink-0 text-muted-foreground group-hover:text-primary sm:size-5" />
          </a>
        </Section>
      </main>

      <Footer />
    </div>
  )
}
