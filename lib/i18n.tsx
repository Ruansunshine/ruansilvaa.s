"use client"

import { createContext, useContext, useState, useCallback, type ReactNode } from "react"

type Lang = "pt" | "en"

type I18nContextType = {
  lang: Lang
  toggleLang: () => void
  t: (text: { pt: string; en: string }) => string
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("pt")

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === "pt" ? "en" : "pt"))
  }, [])

  const t = useCallback(
    (text: { pt: string; en: string }) => text[lang],
    [lang]
  )

  return (
    <I18nContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error("useI18n must be used within I18nProvider")
  return ctx
}

// =============================================================================
// TRADUCOES GLOBAIS / GLOBAL TRANSLATIONS
// =============================================================================

export const TRANSLATIONS = {
  nav: {
    home: { pt: "Inicio", en: "Home" },
    engineering: { pt: "Engenharia", en: "Engineering" },
    data: { pt: "Dados", en: "Data" },
    services: { pt: "Servicos", en: "Services" },
    back: { pt: "Voltar", en: "Back" },
  },
  home: {
    greeting: { pt: "Olá, eu sou", en: "Hi, I'm" },
    subtitle: {
      pt: "Engenheiro de Computacao | Analista de Dados",
      en: "Computer Engineer | Data Analyst",
    },
    btn_engineering: {
      pt: "Eu como Engenheiro",
      en: "Me as an Engineer",
    },
    btn_engineering_hover: {
      pt: "Hackatons, formacao, linha do tempo, estagios e conquistas",
      en: "Hackathons, education, timeline, internships and achievements",
    },
    btn_data: {
      pt: "Analista de Dados",
      en: "Data Analyst",
    },
    btn_data_hover: {
      pt: "Ingles, dados, ETL, pipelines e projetos de BI",
      en: "English, data, ETL, pipelines and BI projects",
    },
    btn_services: {
      pt: "Servicos Oferecidos",
      en: "Services Offered",
    },
    btn_services_hover: {
      pt: "Pipeline de dados, aulas, portfolios web e consultoria",
      en: "Data pipelines, classes, web portfolios and consulting",
    },
    download_cv: { pt: "Baixar Curriculo", en: "Download CV" },
  },
  engineering: {
    title: { pt: "Bacharelado em Engenharia de Computação (em andamento)", en: "Bachelor's in Computer Engineering (in progress)" },
    hackathons: { pt: "Hackathons", en: "Hackathon Achievements" },
    timeline: { pt: "Linha do Tempo", en: "Timeline" },
    certifications: { pt: "Certificacoes", en: "Certifications" },
    projects: { pt: "Projetos", en: "Projects" },
    stack: { pt: "Tech Stack", en: "Tech Stack" },
    github: { pt: "GitHub", en: "GitHub" },
    hackathon_details: {
      title: { pt: "Complexo Portuário Maranhense Hackathon - Detalhes", en: "Maranhão Port Complex Hackathon - Details" },
      explanation_label: { pt: "Explicação do hackathon:", en: "Hackathon explanation:" },
      explanation: {
        pt: "Hackathon promovido pelo Porto do Itaqui com o objetivo de conectar os desafios enfrentados pelas empresas da comunidade portuária com soluções desenvolvidas pelo ecossistema de inovação do Maranhão. O evento incentiva a colaboração, criatividade e o desenvolvimento de projetos tecnológicos capazes de gerar melhorias e inovação para o complexo portuário.",
        en: "Hackathon promoted by Porto do Itaqui aiming to connect the challenges faced by companies in the port community with solutions developed by Maranhão's innovation ecosystem. The event encourages collaboration, creativity, and the development of technological projects capable of generating improvements and innovation for the port complex."
      },
      certificate: { pt: "Certificado", en: "Certificate" },
      view_new_tab: { pt: "Ver em nova aba", en: "View in new tab" },
      publications: { pt: "Publicações:", en: "Publications:" },
      linkedin: { pt: "LinkedIn", en: "LinkedIn" },
      imirante: { pt: "Imirante.com 1º lugar", en: "Imirante.com 1st place" },
      close: { pt: "Fechar", en: "Close" },
    },
    trilhas_details: {
      title: { pt: "Trilhas Inova FAPEMA & SECTI - Detalhes", en: "Trilhas Inova FAPEMA & SECTI - Details" },
      explanation_label: { pt: "Explicação do hackathon:", en: "Hackathon explanation:" },
      explanation: {
        pt: "Hackathon promovido pela FAPEMA & SECTI com o objetivo de fomentar a inovação tecnológica no Maranhão, reunindo equipes multidisciplinares para solucionar desafios reais do setor público e privado.",
        en: "Hackathon promoted by FAPEMA & SECTI aiming to foster technological innovation in Maranhão, bringing together multidisciplinary teams to solve real challenges in the public and private sectors."
      },
      certificate: { pt: "Certificado", en: "Certificate" },
      view_new_tab: { pt: "Ver em nova aba", en: "View in new tab" },
      publications: { pt: "Publicações:", en: "Publications:" },
      linkedin: { pt: "LinkedIn", en: "LinkedIn" },
      site: { pt: "Site Oficial", en: "Official Site" },
      close: { pt: "Fechar", en: "Close" },
    },
  },
  data: {
    title: { pt: "Analista de Dados", en: "Data Analyst" },
    skills: { pt: "Habilidades", en: "Skills" },
    english: { pt: "Ingles", en: "English" },
    pipelines: { pt: "Pipelines & ETL", en: "Pipelines & ETL" },
    certifications: { pt: "Certificacoes", en: "Certifications" },
  },
  services: {
    title: { pt: "Servicos", en: "Services" },
    cta: { pt: "Fale Comigo", en: "Contact Me" },
    subtitle: {
      pt: "Como posso ajudar voce ou sua empresa",
      en: "How I can help you or your company",
    },
  },
  footer: {
    rights: { pt: "Todos os direitos reservados.", en: "All rights reserved." },
  },
}
