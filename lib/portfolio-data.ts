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
    pt: "FullStack\nBackend: SpringBoot, Node.js, Postgres, MariaDB, MongoDB, API REST & RESTFULL\nFrontend: React, Next.js, Tailwind\nDevOps: Docker, AzureDevopsq",
    en: "Computer Engineer passionate about technology, data, and innovation. Active hackathon participant and impactful project builder.",
  },
  email: "ruandev14@gmail.com",
  linkedin: "https://br.linkedin.com/in/ruanlink",
  instagram: "https://www.instagram.com/ruansilvaa.s/",
  whatsapp: "5599991746387",
  github: "https://github.com/Ruansunshine",
  cv: "https://drive.google.com/file/d/1pfM2gmvQOc6hf8keR10iplhBwpjz3wem/view?usp=sharing",
};

// =============================================================================
// LINHA DO TEMPO / TIMELINE
// =============================================================================

export type TimelineItem = {
  year: string;
  title: { pt: string; en: string };
  description: { pt: string; en: string };
  type: "work" | "education" | "achievement";
};

export const TIMELINE: TimelineItem[] = [
  {
    year: "2020-2022",
    title: {
      pt: "Ensino Médio & Trabalho na Roça",
      en: "High School & Farm Work",
    },
    description: {
      pt: "Dos 15 aos 17 anos, durante a pandemia, fiz o 1º e 2º ano do ensino médio de forma remota e o 3º presencial. Nessa época, trabalhava com plantio de abacaxi na roça com meu pai. Não sabia mexer em computador.",
      en: "From 15 to 17 years old, during the pandemic, I completed the 1st and 2nd years of high school remotely and the 3rd year in person. At that time, I worked planting pineapples on the farm with my father. I didn't know how to use a computer.",
    },
    type: "work",
  },
  {
    year: "2019-2021",
    title: {
      pt: "Curso de Informática Básica",
      en: "Basic Informatics Course",
    },
    description: {
      pt: "Com 16 anos, durante a pandemia, fiz um curso de informática básica na minha cidade, com duração de 1 ano e 6 meses.",
      en: "At 16, during the pandemic, I took a basic informatics course in my city, lasting 1 year and 6 months.",
    },
    type: "education",
  },
  {
    year: "2022'",
    title: {
      pt: "Primeira conquista: Moto XTZ Crosser",
      en: "XTZ Crosser Motorcycle",
    },
    description: {
      pt: "No início do 3º ano do ensino médio, comprei minha moto XTZ Crosser. Morava no interior, São Francisco (município de Graça Aranha).",
      en: "At the start of the 3rd year of high school, I bought my XTZ Crosser motorcycle. I lived in the countryside, São Francisco (Graça Aranha municipality).",
    },
    type: "achievement",
  },
  {
    year: "2022",
    title: {
      pt: "Aprovação na Universidade Ceuma",
      en: "Admission to Ceuma University",
    },
    description: {
      pt: "Ao final do ensino médio, passei com bolsa de 50% em Engenharia de Computação e Educação Física na Universidade Ceuma Renascença, em São Luís. O episódio marca minha saída do interior para a capital do Maranhão, São Luís.",
      en: "At the end of high school, I was admitted with a 50% scholarship to Computer Engineering and Physical Education at Ceuma Renascença University in São Luís.",
    },
    type: "achievement",
  },
  {
    year: "2023",
    title: {
      pt: "Início da Graduação pelo Prouni",
      en: "Started Computer Engineering Degree via Prouni",
    },
    description: {
      pt: "Em 28/03/2023, aos 18 anos, comecei a graduação em Engenharia de Computação na Universidade Ceuma Renascença, em São Luís, pelo Prouni. Para me sustentar nos meses iniciais, vendi minha moto XTZ Crosser.",
      en: "On 28/03/2023, at 18 years old, I started the Computer Engineering degree at Ceuma Renascença University in São Luís, via Prouni. To support myself in the first months, I sold my XTZ Crosser motorcycle.",
    },
    type: "education",
  },
  {
    year: "2023-2024",
    title: {
      pt: "Os dois primeiros anos de Engenharia",
      en: "First Two Years of Engineering",
    },
    description: {
      pt: "O início foi muito difícil, vi matérias de cálculo, física, programação, etc. Mas me dediquei muito e consegui passar com boas notas. Não só usei meu conhecimento para passar, mas também para criar projetos e participar de hackathons, o que me ajudou a aprender na prática e me destacar.",
      en: "The beginning was very difficult, I took subjects like calculus, physics, programming, etc. But I dedicated myself a lot and managed to pass with good grades.",
    },
    type: "achievement",
  },
  {
    year: "2025",
    title: { pt: "Primeiro Estágio-Fixtell Telecom", en: "First Internship" },
    description: {
      pt: "O estágio começou em 12/01, após férias e trabalho com meu pai. Recebi por email a oportunidade na Fixtell Telecom, de janeiro a abril, atuando em suporte ao cliente e resolução de problemas. Atividades: colaboração com suporte N1, ativação/configuração de roteadores remotamente, habilitação de roteadores para equipes de instalação e suporte técnico. O estágio durou 4 meses. Pela distância e boa relação com professores, fui indicado por Edilson à OxygenHub, encerrando o estágio.",
      en: "Internship at Fixtell Telecom, from January to April, working with customer support and troubleshooting for clients and the field team. Activities: collaboration with Level 1 support, remote activation/configuration of routers, enabling routers for installation teams, and technical support. The internship lasted 4 months. Due to the distance and good relationship with professors, Edilson recommended me to OxygenHub, ending the internship.",
    },
    type: "work",
  },
  {
    year: "2025",
    title: { pt: "OxygenyHub", en: "OxygenHub Internship" },
    description: {
      pt: "O Incode Techschool foi uma capacitação em lógica de programação com Java, realizada no Ceuma do Turu, de abril a junho. Estudei Java e lógica de programação. O OxygenyHub foi uma fonte rica de networking, onde se encontravam pessoas como Marcos Barros (coordenador dos cursos de TI da Universidade Ceuma) e colegas de diferentes universidades (UFMA, UNDB). Foram dois meses de aprendizado em um ambiente onde, de um lado, estava o setor de TI do Ceuma e, do outro, alunos do Incode Techschool.",
      en: "The Incode Techschool was an intensive Java programming and logic course at Ceuma Turu, from April to June. I studied Java, logic, and networking with Marcos Barros (IT coordinator) and colleagues from UFMA, UNDB, and Ceuma. It was two months of collaborative learning with Ceuma's IT sector and Incode Techschool students.",
    },
    type: "work",
  },
  {
  year: "2025",
  title: {
    pt: "Trilhas Inova – Governo do Maranhão",
    en: "Trilhas Inova – Government of Maranhão Program"
  },
  description: {
    pt: "Em paralelo ao estágio na Telecom e à participação no Incode Techschool, participei do programa Trilhas Inova, do Governo do Maranhão. O processo seletivo era composto por duas etapas: conhecimentos gerais e conhecimentos específicos dentro de uma trilha de especialização. Fui aprovado na trilha de Backend em janeiro com a nota 990/1000.\n\nO programa ocorreu de janeiro a julho de 2025 e foi uma experiência muito rica em aprendizado. Durante essa edição, fui um dos alunos de destaque, liderando uma equipe de 10 desenvovledores(tinha até dev Pleno nessa equipe) conquistando o 2º lugar no hackathon que finalizou o programa. Também atuei como líder nos últimos seis desafios propostos pela trilha.\n\nNa capacitação de Backend, aprofundei conhecimentos em protocolo HTTP, lógica de programação, bancos de dados, arquitetura cliente-servidor e desenvolvimento de servidores web utilizando JavaScript.\n\nO programa era dividido nas trilhas de Backend, Frontend, Design e Dados. A partir do quarto desafio até o hackathon final, as trilhas passaram a trabalhar de forma integrada, reunindo participantes de diferentes áreas. Nesse contexto multidisciplinar, também exerci papel de liderança nas equipes.",
    
    en: "Alongside my internship at Telecom and my participation in Incode Techschool, I joined the Trilhas Inova program organized by the Government of Maranhão. The selection process consisted of two stages: general knowledge and specialized knowledge within a specific learning track. I was accepted into the Backend track in January with a score of 990/1000.\n\nThe program ran from January to July 2025 and provided an intensive learning experience. During this edition, I was recognized as one of the standout participants, leading a team that achieved 2nd place in the final hackathon. I also acted as a team leader during the last six challenges of the program.\n\nIn the Backend track, I developed knowledge in HTTP protocol, programming logic, databases, client-server architecture, and web server development using JavaScript.\n\nThe program was structured into four tracks: Backend, Frontend, Design, and Data. From the fourth challenge onward until the final hackathon, participants from all tracks collaborated in multidisciplinary teams, where I also played a leadership role."
  },
  type: "work"
},
 {
  year: "2025-2026",
  title: {
    pt: "Segundo Estágio – SEMIT (Secretaria Municipal de Tecnologia da Informação)",
    en: "Second Internship – SEMIT (Municipal Department of Information Technology)"
  },
  description: {
    pt: "De junho de 2025 a março de 2026, vivi uma das minhas maiores experiências como desenvolvedor. Entrei como estagiário na SEMIT (Secretaria Municipal de Tecnologia da Informação) já com uma boa bagagem técnica e tive a oportunidade de trabalhar no desenvolvimento de sistemas reais para a Prefeitura de São Luís.\n\nFui responsável por projetos importantes, como o chatbot da prefeitura (o ícone azul presente no site oficial), além de participar da construção de sistemas para outras secretarias, como o sistema de gerenciamento de empreendedores das Feirinhas de São Luís, desenvolvido para a SEMAPA, que administra alguns dos pontos mais conhecidos da cidade.\n\nO diferencial desse estágio foi a diversidade de responsabilidades. Eu não atuava apenas como desenvolvedor: também lidava diretamente com diferentes setores da prefeitura e com várias áreas da TI. Eventualmente trabalhei com infraestrutura, resolvendo problemas relacionados a máquinas virtuais, DNS e Nginx. Também colaborei com o time de suporte da secretaria, corrigindo bugs e ajustando sistemas já em produção.\n\nAlém disso, participei de reuniões de governança, discussões de arquitetura, modelagem de dados e outros projetos institucionais. A experiência também me permitiu conhecer de perto diversos desafios tecnológicos e administrativos enfrentados pela cidade de São Luís.\n\nMinha saída ocorreu em fevereiro de 2026 devido a novas oportunidades profissionais. Durante o último período, cheguei a conciliar dois estágios simultaneamente, um pela manhã e outro pela tarde, até encerrar oficialmente minhas atividades na SEMIT em março de 2026.",
    
    en: "From June 2025 to March 2026, I had one of the most significant experiences of my career as a developer. I joined SEMIT (Municipal Department of Information Technology) as an intern, already with a solid technical background, and worked on real systems used by the city government of São Luís.\n\nI contributed to important projects such as the city's official website chatbot (the blue icon available on the municipal website). I also helped develop systems for other departments, including a management platform for local entrepreneurs participating in the city's public markets and fairs, built for SEMAPA.\n\nOne of the key aspects of this internship was the diversity of responsibilities. I did not work only as a developer; I also interacted directly with multiple departments and different areas of the IT sector. I occasionally worked with infrastructure tasks, solving issues related to virtual machines, DNS configuration, and Nginx servers. I also collaborated with the support team, fixing bugs and improving existing systems.\n\nAdditionally, I participated in governance meetings, data modeling discussions, and other institutional technology projects. This experience allowed me to understand many of the real technological and administrative challenges faced by the city of São Luís.\n\nI left the internship in early 2026 due to new professional opportunities. During my final period there, I even managed two internships simultaneously, one in the morning and another in the afternoon, before officially finishing my activities at SEMIT in March 2026."
  },
  type: "work"
},
{
  year: "2025",
  title: {
    pt: "Primeiro Hackathon, Primeira Conquista",
    en: "First Hackathon, First Achievement"
  },
  description: {
    pt: "Meu primeiro hackathon foi organizado pelo Porto do Itaqui, um dos setores mais estratégicos do estado do Maranhão. O evento aconteceu nos dias 14 e 15, das 8h às 18h, reunindo cerca de 20 equipes em uma maratona de inovação para resolver três problemas propostos.\n\nComo eu ainda era novo nesse universo, minha principal preocupação era aprender com colegas que já tinham mais experiência em hackathons e desenvolvimento de soluções.\n\nNossa equipe era composta por profissionais e estudantes com diferentes especialidades. Maria Eduarda Rezzo atuava como líder do time; analista de dados, possuía grande experiência em hackathons e forte habilidade de apresentação. Marcos Nogueira, arquiteto de sistemas, tinha grande conhecimento técnico e já possuía experiência em estágios no setor financeiro, sendo responsável por estruturar grande parte da arquitetura da solução.\n\nPedro Ribeiro atuava como head de inovação e também participava da Incode Techschool; era responsável por comunicação, estratégia e apresentação do projeto. Juliana Ribeiro era nossa DevOps, trabalhando diretamente com hardware e Arduino. Já eu, Ruan, trabalhei junto com Marcos Nogueira na construção do sistema chamado \"Julia\", sendo responsável principalmente pelo desenvolvimento do frontend da aplicação.\n\nEssa experiência marcou o início da minha participação em hackathons e despertou em mim um forte interesse por desenvolvimento orientado a resultados, trabalho em equipe e construção rápida de soluções para problemas reais.",
    
    en: "My first hackathon was organized by the Port of Itaqui, one of the most strategic sectors in the state of Maranhão. The event took place on the 14th and 15th, from 8 AM to 6 PM, bringing together around 20 teams in an innovation marathon to solve three real-world challenges.\n\nAs I was still new to this environment, my main goal was to learn from teammates who already had experience with hackathons and product development.\n\nOur team brought together members with different specializations. Maria Eduarda Rezzo led the team; as a data analyst, she had strong experience in hackathons and excellent presentation skills. Marcos Nogueira, a systems architect, contributed deep technical expertise and designed much of the system architecture.\n\nPedro Ribeiro acted as our head of innovation and was also involved with Incode Techschool, focusing on strategy and project presentation. Juliana Ribeiro worked as our DevOps, dealing directly with hardware and Arduino development. I, Ruan, collaborated with Marcos Nogueira on building our system called \"Julia\", focusing mainly on the frontend development of the application.\n\nThis experience marked the beginning of my journey in hackathons and sparked my interest in result-oriented development, teamwork, and building fast solutions for real problems."
  },
  type: "work"
},
];

export type StackItem = {
  name: string;
  level: number; // 0-100
  category: "frontend" | "backend" | "data" | "devops" | "languages";
};

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
];

// =============================================================================
// SERVICOS / SERVICES
// =============================================================================

export type Service = {
  id: string;
  title: { pt: string; en: string };
  description: { pt: string; en: string };
  icon: string;
};

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
];

// =============================================================================
// PROJETOS / PROJECTS
// =============================================================================

export type Project = {
  id: string;
  title: string;
  description: { pt: string; en: string };
  image: string;
  stack: string[];
  url?: string;
  github?: string;
  category: "engineering" | "data" | "freelance";
};

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
];
