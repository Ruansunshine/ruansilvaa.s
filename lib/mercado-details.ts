// =============================================================================
// DETALHES DO HACKATHON MERCADO 3 / HACKATHON MERCADO 3 DETAILS
// =============================================================================
// Adicione aqui as descrições, certificados e links de publicações para o Hackathon Mercado 3.
// O id deve ser igual ao usado em HACKATHON_PHOTOS.
// =============================================================================

export interface HackathonMercadoDetail {
  id: string;
  description: string;
  certificate?: string;
  publications?: Array<{ label: string; url: string }>;
  team?: {
    pt: string;
    en: string;
  };
}

export const HACKATHON_MERCADO_DETAILS: Record<string, HackathonMercadoDetail> = {
  "hackathon-3": {
    id: "hackathon-3",
    description: "A 1ª Maratona de Inovação – Hackathon do Mercado, iniciativa voltada para estudantes de instituições de ensino superior da capital maranhense.",
    certificate: "/images/hackatonMercado/hackatonMercado.png",
    publications: [
      { label: "LinkedIn", url: "https://www.linkedin.com/posts/ruanlink_sumi-mas-n%C3%A3o-estive-parado-haha-quero-activity-7430229098054021121-qK2Q?utm_source=share&utm_medium=member_android&rcm=ACoAAEWJ08sBVExhIUQOF3OE0LwXKRVmQMALXhY" }
    ],
    team: {
      pt: [
        'Sobre o Projeto:',
        '- Problema: Mercado 2050 – inclusão digital e adaptação tecnológica para idosos.',
        '- Ideia: Agente de IA como parceiro do consumidor e do estabelecimento.',
        '- Objetivo: Facilitar o acesso e a experiência de compra para idosos, por meio de um sistema de software aliado a um agente de IA. O agente gerencia compras, identifica necessidades especiais e atua como mediador de voz, ajustando-se às demandas do público idoso. Para o feirante, o sistema auxilia no gerenciamento de estoque e logística, promovendo contato direto com o consumidor final.',
        '',
        'Sobre o Time:',
        '- Participar do hackathon foi uma decisão de última hora, com menos de um dia e meio para o fim da maratona. Como líder, designei tarefas e conduzi o time, composto por outros estagiários da SEMIT (Secretaria Municipal de Tecnologia). Apesar do tempo curto, conquistamos o 3º lugar. Essa experiência potencializou minhas habilidades de liderança, garantindo presença no pódio.',
        '- Composição:',
        '  • Líder: Ruan Silva',
        '  • Desenvolvimento: Estagiários SEMIT',
      ].join('\n'),
      en: [
        'About the Project:',
        '- Problem:',
        '- Idea:',
        '- Stack:',
        '- Goal:',
        '',
        'About the Team:',
        '- Composed of:',
        '- Well-defined roles:',
        '  • Leader:',
        '  • Development:',
        '  • Others:',
      ].join('\n'),
    },
  },
};
