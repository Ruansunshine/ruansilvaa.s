// =============================================================================
// ARQUIVO DE FOTOS / PHOTOS FILE
// =============================================================================
// Instrucoes / Instructions:
// 
// Para cada foto, voce pode usar:
//   1. Um caminho local do diretorio: "/images/minha-foto.jpg"
//   2. Um link externo (Google Drive, etc): "https://drive.google.com/..."
//   3. Um blob URL do Vercel: "https://..."
//
// Para links do Google Drive, use o formato:
//   "https://drive.google.com/uc?export=view&id=SEU_FILE_ID"
//
// Exemplos:
//   foto_perfil: "/images/profile.jpg"           // arquivo local em /public/images/
//   foto_perfil: "https://drive.google.com/uc?export=view&id=1abc123"  // Google Drive
// =============================================================================

export const PHOTOS = {
  // ----- FOTO DE PERFIL / PROFILE PHOTO -----
  // Foto olhando para tela (com headphone)
  profile: "/images/profile.jpg",

  // ----- FOTO FORMAL / FORMAL PHOTO -----
  // Foto mais formal (blazer preto)
  profile_formal: "/images/profile-formal.jpg",

  // ----- BANNER PRINCIPAL / MAIN BANNER -----
  // Banner com nome, email, icones de tech
  banner_main: "/images/banner-main.jpg",

  // ----- BANNER ENGENHARIA / ENGINEERING BANNER -----
  banner_engineering: "/images/banner-main.jpg",

  // ----- BANNER DADOS / DATA BANNER -----
  banner_data: "/images/banner-main.jpg",

  // ----- BANNER SERVICOS / SERVICES BANNER -----
  banner_services: "/images/banner-main.jpg",

  // ----- LOGO -----
  logo: "/images/logo.png",
}

// =============================================================================
// FOTOS DOS PROJETOS / PROJECT PHOTOS
// =============================================================================
// Adicione aqui as fotos dos seus projetos.
// O "id" deve ser unico para cada projeto.
// =============================================================================

export const PROJECT_PHOTOS = [
  {
    id: "projeto-1",
    title: "Projeto 1",
    image: "/images/projects/projeto-1.jpg",
    // Pode ser link externo tambem:
    // image: "https://drive.google.com/uc?export=view&id=SEU_ID",
  },
  {
    id: "projeto-2",
    title: "Projeto 2",
    image: "/images/projects/projeto-2.jpg",
  },
  {
    id: "projeto-3",
    title: "Projeto 3",
    image: "/images/projects/projeto-3.jpg",
  },
]

// =============================================================================
// FOTOS DOS HACKATONS / HACKATHON PHOTOS
// =============================================================================

export const HACKATHON_PHOTOS = [
  {
    id: "hackathon-1",
    title: {
      pt: "Complexo Portuário Maranhense Hackathon",
      en: "Maranhão Port Complex Hackathon"
    },
    image: "/images/hackaton/porto.png",
    images: [
      "/images/hackaton/1_lugar.jpeg",
      "/images/hackaton/porto.png",
      "/images/hackaton/inova_portos_1_lugar.jpeg",
      "/images/hackaton/ruan_photos.jpeg"
    ],
    description: {
      pt: "O 1º Hackathon do Complexo Portuário Maranhense, evento promovido pela EMAP, reuniu estudantes de instituições de ensino superior do MA em uma competição multidisciplinar de ideias voltadas ao setor portuário.",
      en: "The 1st Maranhão Port Complex Hackathon, promoted by EMAP, brought together students from higher education institutions in Maranhão in a multidisciplinary competition of ideas focused on the port sector."
    },
    placement: {
      pt: "1º lugar",
      en: "1st place"
    },
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
  // Card do Hackathon Trilhas: detalhes completos no TRILHAS_DETAILS
  {
    id: "hackathon-2",
    title: {
      pt: "Trilhas Inova FAPEMA & SECTI (Governo do Maranhão)",
      en: "2nd Place in Hackathon Trilhas Inova FAPEMA and SECTI (Government of Maranhão)"
    },
    image: "/images/hackatonTrilhas/2_lugar.jpeg",
    images: [
      "/images/hackatonTrilhas/ruan_2_lugar.jpeg",
      "/images/hackatonTrilhas/2_lugar_soluns.jpeg",
      "/images/hackatonTrilhas/postagm_governo.jpeg",
      "/images/hackatonTrilhas/mestre_ruan.jpeg"
    ],
    description: {
      pt: "Hackathon Trilhas Inova, evento que finaliza o programa, reunindo jovens participantes e convidados limitados para o desenvolvimento de soluções para o estado do Maranhão.",
      en: "Hackathon Trilhas Inova, event that concludes the program, bringing together young participants and limited guests to develop solutions for the state of Maranhão."
    },
    placement: {
      pt: "2º lugar",
      en: "2nd place"
    }
    // Detalhes completos no TRILHAS_DETAILS
  },
  {
    id: "hackathon-2",
    title: {
      pt: "Hackathon 2",
      en: "Hackathon 2"
    },
    image: "/images/hackathons/hackathon-2.jpg",
    images: ["/images/hackathons/hackathon-2.jpg"],
    description: {
      pt: "Hackathon Trilhas Inova, evento que finaliza o programa, reunindo jovens participantes e convidados limitados para o desenvolvimento de soluções para o estado do Maranhão.",
      en: "Hackathon description"
    },
    placement: {
      pt: "2º lugar",
      en: "2nd place"
    },
    team: {
      pt: "",
      en: ""
    },
  },
]
