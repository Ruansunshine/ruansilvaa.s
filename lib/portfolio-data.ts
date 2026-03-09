// =============================================================================
// DADOS DO PORTFOLIO / PORTFOLIO DATA
// =============================================================================

export const PERSONAL = {
  name: "Ruan Silva",
  role: {
    pt: "Engenheiro de Computação",
    en: "Computer Engineer",
  },
  bio: {
    pt: "Engenheiro de Computação apaixonado por tecnologia, dados e inovação. Participante ativo de hackathons e realizador de projetos de impacto.",
    en: "Computer Engineer passionate about technology, data, and innovation. Active hackathon participant and impactful project builder.",
  },
  email: "ruandev14@gmail.com",
  linkedin: "https://br.linkedin.com/in/ruanlink",
  instagram: "https://www.instagram.com/ruansilvaa.s/",
  whatsapp: "5599991746387",
  github: "https://github.com/Ruansunshine",
  cv: "https://drive.google.com/file/d/1pfM2gmvQOc6hf8keR10iplhBwpjz3wem/view?usp=sharing",
}

// =============================================================================
// LINHA DO TEMPO / TIMELINE
// =============================================================================

export type TimelineItem = {
  year: string
  title: { pt: string; en: string }
  description: { pt: string; en: string }
  type: "work" | "education" | "achievement"
}

export const TIMELINE: TimelineItem[] = [
  {
    year: "2024",
    title: { pt: "Estagio em Engenharia", en: "Engineering Internship" },
    description: {
      pt: "Estagio em empresa de tecnologia, trabalhando com desenvolvimento web e dados.",
      en: "Internship at a tech company, working with web development and data.",
    },
    type: "work",
  },
  {
    year: "2023",
    title: { pt: "Hackathon - 1o Lugar", en: "Hackathon - 1st Place" },
    description: {
      pt: "Vencedor do hackathon X com projeto de impacto social.",
      en: "Winner of hackathon X with a social impact project.",
    },
    type: "achievement",
  },
  {
    year: "2022",
    title: {
      pt: "Inicio da Graduacao",
      en: "Started Computer Engineering Degree",
    },
    description: {
      pt: "Inicio do curso de Engenharia de Computacao.",
      en: "Started the Computer Engineering program.",
    },
    type: "education",
  },
]

// =============================================================================
// TECH STACK
// =============================================================================

export type StackItem = {
  name: string
  level: number // 0-100
  category: "frontend" | "backend" | "data" | "devops" | "languages"
}

export const TECH_STACK: StackItem[] = [
  { name: "React", level: 85, category: "frontend" },
  { name: "Next.js", level: 80, category: "frontend" },
  { name: "TypeScript", level: 75, category: "languages" },
  { name: "Python", level: 90, category: "languages" },
  { name: "Node.js", level: 70, category: "backend" },
  { name: "SQL", level: 80, category: "data" },
  { name: "Power BI", level: 70, category: "data" },
  { name: "Docker", level: 60, category: "devops" },
  { name: "Git", level: 85, category: "devops" },
  { name: "Tailwind CSS", level: 85, category: "frontend" },
]

// =============================================================================
// SERVICOS / SERVICES
// =============================================================================

export type Service = {
  id: string
  title: { pt: string; en: string }
  description: { pt: string; en: string }
  icon: string
}

export const SERVICES: Service[] = [
  {
    id: "pipeline",
    title: {
      pt: "Pipeline de Dados",
      en: "Data Pipeline",
    },
    description: {
      pt: "Precisa de um pipeline de dados para sua empresa? ETL, integracao de dados e automacao.",
      en: "Need a data pipeline for your company? ETL, data integration, and automation.",
    },
    icon: "database",
  },
  {
    id: "aulas",
    title: {
      pt: "Aulas e Mentoria",
      en: "Classes & Mentoring",
    },
    description: {
      pt: "Precisa de conhecimento? Agende ja uma aula particular ou mentoria em programacao e dados.",
      en: "Need knowledge? Schedule a private class or mentoring session in programming and data.",
    },
    icon: "graduation-cap",
  },
  {
    id: "portfolio",
    title: {
      pt: "Portfolio Web",
      en: "Web Portfolio",
    },
    description: {
      pt: "Precisa de um portfolio web profissional? Vamos combinar precos e criar algo unico.",
      en: "Need a professional web portfolio? Let's discuss pricing and create something unique.",
    },
    icon: "globe",
  },
  {
    id: "engenheiro",
    title: {
      pt: "Engenheiro para seu Time",
      en: "Engineer for Your Team",
    },
    description: {
      pt: "Precisa de um engenheiro para ajudar seu time? Entre em contato comigo para projetos e consultoria.",
      en: "Need an engineer to help your team? Contact me for projects and consulting.",
    },
    icon: "code",
  },
]

// =============================================================================
// PROJETOS / PROJECTS
// =============================================================================

export type Project = {
  id: string
  title: string
  description: { pt: string; en: string }
  image: string
  stack: string[]
  url?: string
  github?: string
  category: "engineering" | "data" | "freelance"
}

export const PROJECTS: Project[] = [
  {
    id: "proj-1",
    title: "Projeto Parceiro 1",
    description: {
      pt: "Projeto desenvolvido para parceiro/freelance. Descricao detalhada aqui.",
      en: "Project developed for a partner/freelance. Detailed description here.",
    },
    image: "/images/projects/projeto-1.jpg",
    stack: ["React", "Node.js", "PostgreSQL"],
    url: "https://example.com",
    github: "https://github.com/ruansilva/proj-1",
    category: "engineering",
  },
  {
    id: "proj-2",
    title: "Dashboard de Dados",
    description: {
      pt: "Dashboard interativo de analise de dados com Power BI e Python.",
      en: "Interactive data analysis dashboard with Power BI and Python.",
    },
    image: "/images/projects/projeto-2.jpg",
    stack: ["Python", "Power BI", "SQL"],
    category: "data",
  },
  {
    id: "proj-3",
    title: "Projeto Freelance",
    description: {
      pt: "Site completo para cliente freelance.",
      en: "Complete website for freelance client.",
    },
    image: "/images/projects/projeto-3.jpg",
    stack: ["Next.js", "Tailwind", "Vercel"],
    url: "https://example.com",
    category: "freelance",
  },
]
