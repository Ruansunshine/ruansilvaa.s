"use client"

import { useI18n, TRANSLATIONS } from "@/lib/i18n"
import { PERSONAL, PROJECTS } from "@/lib/portfolio-data"
import { PHOTOS } from "@/lib/photos"
import { CERTIFICATES } from "@/lib/certificates"
import { TopNav } from "@/components/top-nav"
import { Footer } from "@/components/footer"
import { ExternalLink, BarChart3, Database, Workflow, Languages } from "lucide-react"

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

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[11px] text-foreground sm:text-xs">{name}</span>
        <span className="font-mono text-[11px] text-muted-foreground sm:text-xs">{level}%</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-border">
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary to-chart-2 transition-all duration-1000"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  )
}

const DATA_SKILLS = [
  { name: "Python (Pandas, NumPy)", level: 90 },
  { name: "SQL", level: 85 },
  { name: "Power BI", level: 75 },
  { name: "ETL / Pipeline", level: 70 },
  { name: "Data Visualization", level: 80 },
  { name: "Machine Learning Basics", level: 55 },
]

const ENGLISH_INFO = {
  pt: {
    title: "Ingles",
    description:
      "Nivel intermediario/avancado em ingles. Capaz de ler documentacao tecnica, escrever codigo com comentarios em ingles, participar de reunioes e comunicar-se com equipes internacionais.",
    skills: [
      { name: "Leitura Tecnica", level: 90 },
      { name: "Escrita", level: 75 },
      { name: "Conversacao", level: 70 },
      { name: "Compreensao Auditiva", level: 75 },
    ],
  },
  en: {
    title: "English",
    description:
      "Intermediate/advanced English level. Able to read technical documentation, write code with English comments, participate in meetings, and communicate with international teams.",
    skills: [
      { name: "Technical Reading", level: 90 },
      { name: "Writing", level: 75 },
      { name: "Speaking", level: 70 },
      { name: "Listening", level: 75 },
    ],
  },
}

const PIPELINE_ITEMS = {
  pt: [
    {
      title: "Extracao de Dados",
      description: "APIs, web scraping, bancos de dados, arquivos CSV/Excel",
      icon: <Database size={18} />,
    },
    {
      title: "Transformacao (ETL)",
      description: "Limpeza, normalizacao, agregacao e enriquecimento de dados",
      icon: <Workflow size={18} />,
    },
    {
      title: "Visualizacao & BI",
      description: "Dashboards interativos, relatorios automatizados, insights",
      icon: <BarChart3 size={18} />,
    },
  ],
  en: [
    {
      title: "Data Extraction",
      description: "APIs, web scraping, databases, CSV/Excel files",
      icon: <Database size={18} />,
    },
    {
      title: "Transformation (ETL)",
      description: "Cleaning, normalization, aggregation, and data enrichment",
      icon: <Workflow size={18} />,
    },
    {
      title: "Visualization & BI",
      description: "Interactive dashboards, automated reports, insights",
      icon: <BarChart3 size={18} />,
    },
  ],
}

export default function DataPage() {
  const { lang, t } = useI18n()
  const dataCerts = CERTIFICATES.filter((c) => c.category === "data" || c.category === "general")
  const dataProjects = PROJECTS.filter((p) => p.category === "data")
  const englishData = ENGLISH_INFO[lang]
  const pipelineItems = PIPELINE_ITEMS[lang]

  return (
    <div className="flex min-h-dvh flex-col">
      <TopNav showBack />

      {/* Hero */}
      <header className="relative flex flex-col items-center justify-center px-4 pt-20 pb-8 sm:px-6 sm:pt-24 sm:pb-12">
        <div className="relative mb-4 h-28 w-full max-w-3xl overflow-hidden rounded-xl border border-border sm:h-32 md:h-40">
          <img
            src={PHOTOS.banner_data}
            alt="Data Banner"
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
          {t(TRANSLATIONS.data.title)}
        </h1>
        <p className="mt-2 max-w-md px-4 text-center font-mono text-xs text-muted-foreground sm:text-sm">
          {t({
            pt: "Dados, ETL, pipelines, visualizacao e ingles tecnico",
            en: "Data, ETL, pipelines, visualization and technical English",
          })}
        </p>
      </header>

      <main className="mx-auto w-full max-w-3xl px-4 sm:px-6">
        {/* Data Skills */}
        <Section title={t(TRANSLATIONS.data.skills)} id="skills">
          <div className="grid gap-4 sm:grid-cols-2">
            {DATA_SKILLS.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} />
            ))}
          </div>
        </Section>

        {/* English Section */}
        <Section title={t(TRANSLATIONS.data.english)} id="english">
          <div className="rounded-xl border border-border bg-card p-4 sm:p-6">
            <div className="mb-3 flex items-center gap-3 sm:mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary sm:h-10 sm:w-10">
                <Languages size={18} className="sm:size-[22px]" />
              </div>
              <h3 className="font-sans text-base font-bold text-foreground sm:text-lg">
                {englishData.title}
              </h3>
            </div>
            <p className="mb-4 font-mono text-[11px] leading-relaxed text-muted-foreground sm:mb-6 sm:text-xs">
              {englishData.description}
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {englishData.skills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
          </div>
        </Section>

        {/* Pipelines & ETL */}
        <Section title={t(TRANSLATIONS.data.pipelines)} id="pipelines">
          <div className="grid gap-3 sm:gap-4 sm:grid-cols-2 md:grid-cols-3">
            {pipelineItems.map((item, i) => (
              <div
                key={i}
                className="animate-fade-up flex flex-col gap-3 rounded-xl border border-border bg-card p-4 transition-all duration-300 hover:border-primary/30 sm:p-5"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary sm:h-10 sm:w-10">
                  {item.icon}
                </div>
                <h3 className="font-sans text-sm font-bold text-foreground">{item.title}</h3>
                <p className="font-mono text-[11px] leading-relaxed text-muted-foreground sm:text-xs">
                  {item.description}
                </p>
                <div className="mt-auto flex items-center gap-1 text-primary">
                  <div className="h-px flex-1 bg-primary/30" />
                  <span className="font-mono text-[10px]">{`0${i + 1}`}</span>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Certifications */}
        <Section title={t(TRANSLATIONS.data.certifications)} id="data-certs">
          <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
            {dataCerts.map((cert) => (
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

        {/* Data Projects */}
        {dataProjects.length > 0 && (
          <Section title={t(TRANSLATIONS.engineering.projects)} id="data-projects">
            <div className="grid gap-3 sm:gap-4 md:grid-cols-2">
              {dataProjects.map((proj) => (
                <div
                  key={proj.id}
                  className="group overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_20px_rgba(45,212,168,0.08)]"
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
                  </div>
                </div>
              ))}
            </div>
          </Section>
        )}
      </main>

      <Footer />
    </div>
  )
}
