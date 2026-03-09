// =============================================================================
// DETALHES DO HACKATHON TRILHAS / TRILHAS HACKATHON DETAILS
// =============================================================================
// Estrutura semelhante ao hackathon-details.ts
// =============================================================================

export interface TrilhasDetail {
  id: string
  description: string
  certificate?: string
  publications?: Array<{ label: string; url: string }>
  team?: { pt: string; en: string }
}

export const TRILHAS_DETAILS: Record<string, TrilhasDetail> = {
  "trilhas-1": {
    id: "trilhas-1",
    description: "Hackathon promovido pela FAPEMA & SECTI com o objetivo de fomentar a inovação tecnológica no Maranhão, reunindo equipes multidisciplinares para solucionar desafios reais do setor público e privado.",
    certificate: "/images/hackatonTrilhas/certificadoTrilhas.jpeg",
    publications: [
      { label: "LinkedIn", url: "https://www.linkedin.com/posts/ruanlink_tem%C3%A1tica-desafios-do-maranh%C3%A3o-conhe%C3%A7a-a-activity-7355981309569118209-rRMY?utm_source=share&utm_medium=member_android&rcm=ACoAAEWJ08sBVExhIUQOF3OE0LwXKRVmQMALXhY" },
      { label: "Difusora Grupo", url: "https://youtu.be/hc2TCT-jTp8?si=4jLMaiaI2AAz875T&t=57" },
    ],
    team: {
      pt: [
        'O programa Trilhas Inova capacita em trilhas de aprendizado como Backend, Frontend, Data Science, entre outras, com o objetivo de formar profissionais qualificados para o mercado de trabalho e fomentar a inovação tecnológica no Maranhão. O programa é dividido em etapas, sendo a última um hackathon para desenvolver soluções inovadoras para desafios reais do estado.',
        '',
        'TEMA: Inovação digital frente às complexidades regionais',
        '',
        'PROBLEMA: Saneamento básico e Agricultura familiar',
        '',
        'Solução: SaneaGest — Uma solução de linha dupla: de um lado, o descarte de lodo no meio ambiente, realizado por ETES e empresas como Caema e Ambev; do outro, o alto custo de fertilizantes químicos para a agricultura. O SaneaGest é um sistema que une gerenciamento e marketplace, permitindo que empresas saneadoras ofereçam lodo tratado como alternativa econômica e comprovadamente benéfica para o solo, enquanto agricultores encontram opções acessíveis e sustentáveis. O sistema gera retroalimentação econômica, logística inteligente, mais empregos e pode ser aplicado em modelos públicos ou privados.',
        '',
        'Tecnologias:',
        'Next.js, NestJS, Postgres',
        '',
        'Time:',
        'Ruan Silva (Líder, desenvolvedor e engenheiro, foco na ideia, gargalos e pitch), Angelo (Vice-líder, desenvolvedor), Ana Clara (Design, Canvas Discovery), Mikael e Kleyciane (Backend), Alexandre Silva, Douglas, Cammilly (Frontend), Vicente (Techlead), Tito Levi (Vendas e pitch).',
      ].join('\n'),
      en: [
        'The Trilhas Inova program provides training in learning tracks such as Backend, Frontend, and Data Science, aiming to prepare qualified professionals for the job market and foster technological innovation in Maranhão. The program is divided into stages, with the final one being a hackathon to develop innovative solutions for real challenges in the state.',
        '',
        'THEME: Digital innovation facing regional complexities',
        '',
        'PROBLEM: Basic sanitation and family farming',
        '',
        'Solution: SaneaGest — A dual-sided solution: on one side, the disposal of sludge into the environment by ETES and companies like Caema and Ambev; on the other, the high cost of chemical fertilizers for agriculture. SaneaGest is a system that combines management and a marketplace, allowing sanitation companies to offer treated sludge as an affordable and proven beneficial alternative for soil, while farmers find accessible and sustainable options. The system creates economic feedback, smart logistics, more jobs, and is applicable to both public and private models.',
        '',
        'Technologies:',
        'Next.js, NestJS, Postgres',
        '',
        'Team:',
        'Ruan Silva (Leader, developer, and engineer, focused on the idea, bottlenecks, and pitch), Angelo (Vice-leader, developer), Ana Clara (Design, Canvas Discovery), Mikael and Kleyciane (Backend), Alexandre Silva, Douglas, Cammilly (Frontend), Vicente (Techlead), Tito Levi (Sales and pitch).',
      ].join('\n'),
    },
  },
}
