// =============================================================================
// DETALHES DOS HACKATHONS / HACKATHON DETAILS
// =============================================================================
// Adicione aqui as descrições, certificados e links de publicações para cada hackathon.
// O id deve ser igual ao usado em HACKATHON_PHOTOS.
//
// Exemplo de uso:
// import { HACKATHON_DETAILS } from "@/lib/hackathon-details"
// HACKATHON_DETAILS["hackathon-1"].description
// =============================================================================

export interface HackathonDetail {
  id: string;
  description: string;
  certificate?: string;
  publications?: Array<{ label: string; url: string }>;
}

export const HACKATHON_DETAILS: Record<string, HackathonDetail> = {
  "hackathon-1": {
    id: "hackathon-1",
    description:
      "Hackathon promovido pelo Porto do Itaqui com o objetivo de conectar os desafios enfrentados pelas empresas da comunidade portuária com soluções desenvolvidas pelo ecossistema de inovação do Maranhão. O evento incentiva a colaboração, criatividade e o desenvolvimento de projetos tecnológicos capazes de gerar melhorias e inovação para o complexo portuário.",
    certificate: "/images/hackaton/certificado.png",
    publications: [
      { label: "LinkedIn", url: "https://www.linkedin.com/posts/ruanlink_inovacao-hackathon-portodoitaqui-activity-7343392295909502976-hNe8?utm_source=share&utm_medium=member_android&rcm=ACoAAEWJ08sBVExhIUQOF3OE0LwXKRVmQMALXhY" },
      {
        label: "Imirante.com",
        url: "https://m.imirante.com/noticias/sao-luis/2025/08/05/alunos-de-engenharia-da-computacao-do-ceuma-conquistam-1o-lugar-no-maior-evento-de-inovacao-portuaria-no-ma",
      },
      {
        label: "Universidade Ceuma",
        url: "https://www.instagram.com/p/DL77l8mOrJq/?img_index=1&igsh=bnQ1MnhzOXk3bXF6",
      },
    ],
    team: {
      pt: [
        'Sobre o Projeto:',
        '- Problema: Segurança Industrial',
        '- Ideia: Sistema com servidor central para captação de logs usando visão computacional e IA',
        '- Stack: React, Rust (aplicação desktop nativa), Typescript (Elysia), banco NoSQL MongoDB, IA: YOLO v8 (Python)',
        '- Objetivo: Automatizar inspeções e combater o mau uso de EPIs, gerando alertas por setor, com gerenciamento centralizado, logs em tempo real e configuração dinâmica de tokens/setores',
        '',
        'Sobre o Time:',
        '- Composto por 5 engenheiros de computação',
        '- Papéis bem definidos:',
        '  • Líder: Eduarda Rezzo',
        '  • Treinamento da IA: Pedro Ribeiro',
        '  • Desenvolvimento do Software: Ruan Silva (eu), Marcos Nogueira',
        '  • DevOps: Juliana Brito'
      ].join('\n'),
      en: [
        'About the Project:',
        '- Problem: Industrial Safety',
        '- Idea: System with a central server for log collection using computer vision and AI',
        '- Stack: React, Rust (native desktop app), Typescript (Elysia), NoSQL MongoDB database, AI: YOLO v8 (Python)',
        '- Goal: Automate inspections and fight improper use of PPE, generating alerts by sector, with centralized management, real-time logs, and dynamic configuration of tokens/sectors',
        '',
        'About the Team:',
        '- Composed of 5 computer engineers',
        '- Well-defined roles:',
        '  • Leader: Eduarda Rezzo',
        '  • AI Training: Pedro Ribeiro',
        '  • Software Development: Ruan Silva (me), Marcos Nogueira',
        '  • DevOps: Juliana Brito'
      ].join('\n'),
    },
  },
  "hackathon-2": {
    id: "hackathon-2",
    description: "(adicioneassasasssssssssssssssssssssssssssssss aqui a explicação do hackathon 2)",
    certificate: "(adicione aqui o link ou imagem do certificado)",
    publications: [{ label: "LinkedIn", url: "#" }],
  },
};
