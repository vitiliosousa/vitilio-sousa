import type { StaticImageData } from "next/image";

import bug from "@/assets/bug.png"
import cyber from "@/assets/cyber.png"
import girl from "@/assets/girl.png"
import laisher from "@/assets/laisher.png"
import mozcyberCover from "@/assets/mozcyber.jpg"
import bisky from "@/assets/bisky.jpg"
import supremogo from "@/assets/supremogo.jpg"
import noyanas from "@/assets/noyanas.jpg"
import mozcyber2 from "@/assets/mozcyber-2.jpg"
import mozcyber3 from "@/assets/mozcyber-3.jpg"
import bisky2 from "@/assets/bisky-2.jpg"
import bisky3 from "@/assets/bisky-3.jpg"
import supremogo2 from "@/assets/supremogo-2.jpg"
import supremogo3 from "@/assets/supremogo-3.jpg"
import noyanas2 from "@/assets/noyanas-2.jpg"
import noyanas3 from "@/assets/noyanas-3.jpg"

export type Project = {
  slug: string;
  title: string;
  /** Preencher com o ano de cada projecto; só aparece se existir. */
  year?: string;
  description: string;
  tech: string[];
  demo?: string;
  github?: string;
  image?: StaticImageData;
  /** Campos opcionais: se existirem, a página do projecto mostra as secções correspondentes. */
  role?: string;
  duration?: string;
  overview?: string;
  features?: { title: string; text: string }[];
  challenge?: string;
  result?: string;
  gallery?: StaticImageData[];
};

export const projectsData: Project[] = [
  {
    slug: "mozcyber",
    title: "MozCyber",
    description: "Website da comunidade MozCyber, dedicada à cibersegurança em Moçambique: apresentação, agenda de eventos (workshops, hackathons, CTFs e palestras), blog e entrada para os membros.",
    overview: "A MozCyber é uma comunidade dedicada à protecção de dados, à formação em cibersegurança e à construção de uma cultura digital mais segura em Moçambique. O website é a sua porta de entrada: apresenta a comunidade e o que ela faz, divulga a agenda de eventos, mostra a equipa e os parceiros, e reúne o blog e o acesso dos membros num só sítio, com um visual escuro e tecnológico que combina com o tema.",
    role: "Technology Manager e desenvolvimento",
    tech: ["Next.js", "TailwindCSS", "Supabase"],
    demo: "https://mozcyber.org",
    image: mozcyberCover,
    features: [
      { title: "Agenda de eventos", text: "Últimos e próximos eventos (palestras, workshops, hackathons), cada um com data, formato e local, num carrossel fácil de percorrer." },
      { title: "O que a comunidade faz", text: "Workshops de segurança ofensiva e defensiva, hackathons, competições CTF e palestras de literacia digital, explicados de forma clara." },
      { title: "Pessoas e parceiros", text: "Testemunhos de quem já participou, a equipa que organiza a comunidade e as instituições parceiras." },
      { title: "Blog e área de membros", text: "Espaço para conteúdo de cibersegurança e entrada na comunidade para quem quer participar." },
    ],
    gallery: [mozcyber3, mozcyber2],
  },
  {
    slug: "bisky",
    title: "Bisky",
    description: "Página de apresentação do Bisky, um sistema de gestão para confeitarias: pedidos, stock, custos e caixa num só lugar, com planos, perguntas frequentes e trial de 60 dias.",
    overview: "O Bisky é um sistema de gestão feito para confeitarias que querem sair do improviso. Esta é a página que o apresenta: começa pelos problemas do dia a dia (pedidos perdidos no WhatsApp, preços sem custo real, stock que falha no dia da entrega, lucro que ninguém vê), mostra a solução e a aplicação por dentro, explica o funcionamento em três passos e termina com os planos, as perguntas frequentes e o convite para um trial de 60 dias.",
    tech: ["Next.js", "TailwindCSS", "Vercel"],
    demo: "https://bisky-landing.vercel.app",
    image: bisky,
    features: [
      { title: "Dashboard claro", text: "Receita do mês, pedidos, valores a receber, lucro e alertas de stock num só ecrã." },
      { title: "Pedidos com estados", text: "Do pendente à entrega (pendente, produção, pronto, entregue), com clientes, prazos e valores numa ficha só." },
      { title: "Produtos e receitas", text: "Bolos e doces com ingredientes, custo unitário e margem sob controlo." },
      { title: "Stock e alertas", text: "Ingredientes e materiais com mínimos definidos, para avisar antes de faltar o essencial." },
      { title: "Fluxo de caixa", text: "Entradas, saídas e contas a pagar e a receber, para o lucro do mês deixar de estar no escuro." },
      { title: "Calculadora de preços", text: "Escala a receita, calcula o custo completo e define o preço com ponto de equilíbrio." },
    ],
    challenge: "Gerir uma confeitaria no improviso custa caro: pedidos misturados entre mensagens e cadernos, preços definidos no \"feeling\", stock que acaba no dia da entrega e um lucro que ninguém consegue ver.",
    result: "Uma página que explica o produto do problema à solução, mostra a aplicação por dentro e apresenta dois planos (Start e Pro) com trial de 60 dias, para o visitante perceber o valor e começar.",
    gallery: [bisky2, bisky3],
  },
  {
    slug: "supremogo",
    title: "SupremoGo",
    description: "Aplicação de mobilidade urbana, desenvolvida de raiz, da app móvel ao backend, com integração de mapas. O website apresenta o serviço a passageiros e motoristas.",
    overview: "O SupremoGo é uma aplicação de mobilidade urbana para Maputo e Matola, desenvolvida de raiz, da app móvel ao backend, com integração de mapas. O website apresenta o serviço a passageiros e a motoristas: as categorias de viagem (carro, moto e txopela), como funciona um pedido, as ferramentas de segurança, o acompanhamento em tempo real e as perguntas frequentes. Enquanto a app não está nas lojas, permite também aos motoristas começarem o registo.",
    tech: ["Flutter", "NestJS", "Google Maps", "Next.js"],
    demo: "https://supremogo.co.mz",
    image: supremogo,
    features: [
      { title: "Três categorias de viagem", text: "Carro para o dia a dia, moto para furar o trânsito e txopela para trajectos curtos e médios a preço acessível." },
      { title: "Pedido em poucos passos", text: "Pedir a corrida, ver o motorista a caminho com nome, foto e matrícula, embarcar com segurança e pagar no fim." },
      { title: "Acompanhamento em tempo real", text: "Localização do motorista ao vivo no mapa, tempo estimado de chegada actualizado e histórico de todas as corridas." },
      { title: "Segurança em primeiro lugar", text: "Verificação documental dos motoristas, partilha da viagem em tempo real e botão SOS com localização." },
      { title: "Para quem conduz", text: "Ganhos flexíveis, horários à escolha, pagamento na hora e uma página para começar o registo como motorista." },
    ],
    gallery: [supremogo2, supremogo3],
  },
  {
    slug: "noyanas-cakes",
    title: "Noyana's Cakes",
    description: "Website de uma confeitaria que trabalha por encomenda, com galeria de bolos, doces e salgados, apresentação da marca e encomendas directas por WhatsApp.",
    overview: "Website para a Noyana's Cakes, uma confeitaria de Maputo que trabalha por encomenda. Mostra o trabalho em galeria (bolos de aniversário, de casamento, personalizados, doces e salgados), conta a história da marca, reúne testemunhos de clientes e leva quem visita a encomendar em três passos, falando directamente por WhatsApp.",
    tech: ["Next.js", "TailwindCSS", "Vercel"],
    demo: "https://noyanascakes.vercel.app",
    image: noyanas,
    features: [
      { title: "Galeria por ocasião", text: "Aniversário, casamento, bolos personalizados, doces e salgados, com fotografias reais do trabalho." },
      { title: "Encomenda por WhatsApp", text: "Botões em todo o site que abrem a conversa com o pedido, sem ser preciso loja online." },
      { title: "Como encomendar em três passos", text: "Escolher o que deseja, falar pelo WhatsApp e confirmar data e detalhes da entrega." },
      { title: "Marca, testemunhos e contactos", text: "A história da confeitaria, comentários de clientes e os contactos (telefone, WhatsApp, localização e redes sociais)." },
    ],
    challenge: "Uma confeitaria que trabalha por encomenda precisa de mostrar o seu trabalho com a qualidade que ele tem e de tornar o pedido simples, sem exigir uma loja online.",
    result: "O cliente escolhe na galeria, fala por WhatsApp e combina os detalhes em três passos, num site com a identidade rosa e elegante da marca.",
    gallery: [noyanas2, noyanas3],
  },
  {
    slug: "cyber-space",
    title: "Cyber Space",
    description: "Plataforma de Bug Bounty para a comunidade de cibersegurança onde as empresas poderão avaliar submeter os seus sistemas e hackers farão testes de penetração.",
    overview: "O Cyber Space é uma plataforma de bug bounty pensada para Moçambique. Empresas publicam programas com o escopo e as recompensas, pesquisadores de segurança testam os sistemas, reportam as vulnerabilidades de forma responsável e são recompensados depois da validação. O objectivo é que as organizações encontrem as falhas antes dos atacantes, com uma comunidade de especialistas a trabalhar com elas.",
    tech: ["Next.js", "TailwindCSS", "Motion"],
    demo: "https://cyber-space.vercel.app",
    image: bug,
    features: [
      { title: "Para organizações", text: "Publicar programas, definir o escopo e as recompensas, e ter testes de segurança contínuos feitos por pesquisadores verificados." },
      { title: "Para pesquisadores", text: "Acesso a programas de empresas moçambicanas, recompensas por vulnerabilidades válidas e oportunidade de desenvolver competências." },
      { title: "Processo em cinco passos", text: "Programa publicado, testes, reporte responsável, validação com recompensa e correcção da vulnerabilidade." },
      { title: "Reporte seguro", text: "Os bugs são reportados através da plataforma, de forma responsável e organizada." },
    ],
  },
  {
    slug: "code-like-a-girl",
    title: "Code Like a Girl",
    description: "Website com os projectos apresentados pelas participantes no Code Like a Girl.",
    overview: "Website que reúne os projectos apresentados pelas participantes do Code Like a Girl. Cada projecto tem o seu cartão com uma descrição e uma ligação para ser visitado, e juntos mostram a variedade de ideias que nasceram do programa, do estudo e da orientação de carreira à nutrição, ciência e ambiente.",
    tech: ["HTML", "CSS"],
    demo: "https://clg-ana-mogas.vercel.app",
    github: "https://github.com/vitiliosousa/clg-ana-mogas",
    image: girl,
    features: [
      { title: "Bluegoals", text: "Plataforma digital que ajuda meninas a organizar a sua jornada, do estudo à vida profissional." },
      { title: "Nutrição e Ética Ambiental", text: "Sites educativos sobre hábitos saudáveis, combate à desnutrição e práticas sustentáveis." },
      { title: "Informática Aplicada e STEM", text: "Portais de aprendizagem sobre informática, introdução à programação e ciência, tecnologia, engenharia e matemática." },
      { title: "Inspira+ e Universidade Maria Ana Mogas", text: "Recursos académicos, bolsas e oportunidades de estudo, e o site institucional que liga estudantes a cursos." },
    ],
  },
  // EXEMPLO FICTÍCIO: serve só para ver a página preenchida. Apagar quando houver dados reais.
  {
    slug: "projecto-de-exemplo",
    title: "Plataforma de Exemplo",
    year: "2025",
    description: "Plataforma web de gestão de pedidos e equipas, com painel em tempo real, perfis de acesso e relatórios exportáveis.",
    overview: "Este é um projecto fictício, criado para mostrar como a página de um projecto fica quando está completa. A plataforma permite a uma equipa receber pedidos, atribuí-los a responsáveis, acompanhar o estado de cada um em tempo real e gerar relatórios para a gestão. O objectivo foi substituir folhas de cálculo dispersas por um único sítio claro, rápido e seguro.",
    role: "Full-stack developer",
    duration: "4 meses",
    tech: ["Next.js", "NestJS", "PostgreSQL", "Docker"],
    demo: "https://example.com",
    github: "https://github.com/vitiliosousa",
    image: cyber,
    features: [
      { title: "Painel em tempo real", text: "Estado dos pedidos actualizado sem recarregar a página, com filtros por equipa e prioridade." },
      { title: "Perfis e permissões", text: "Cada utilizador vê e faz apenas o que o seu perfil permite, com registo de todas as acções." },
      { title: "Fluxo de aprovação", text: "Pedidos passam por vários níveis de aprovação antes de serem executados." },
      { title: "Relatórios exportáveis", text: "Resumos por período e por equipa, exportáveis para PDF e Excel." },
    ],
    challenge: "Os pedidos chegavam por canais diferentes e sem estrutura, o que tornava difícil saber quem estava a tratar de quê e quanto tempo cada pedido demorava.",
    result: "A equipa passou a ter uma única fonte de verdade: menos pedidos perdidos, tempos de resposta visíveis e relatórios prontos em segundos.",
    gallery: [bug, girl, laisher],
  },
];

export const getProject = (slug: string) => projectsData.find((p) => p.slug === slug);
