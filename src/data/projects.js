// Cada projeto é um registro independente — para adicionar um novo, basta
// incluir um objeto neste array. Nenhum componente precisa mudar.
//
// status: 'concluido' | 'desenvolvimento' | 'futuro'

export const STATUS = {
  concluido: { label: 'Concluído' },
  desenvolvimento: { label: 'Em desenvolvimento' },
  futuro: { label: 'Futuro' },
}

export const projects = [
  {
    id: 'casa-betel-elevare',
    status: 'concluido',
    name: 'Casa Betel — Elevare',
    summary:
      'Landing page one-page para apresentar um empreendimento residencial de alto padrão.',
    problem:
      'A construtora precisava de uma página própria para apresentar o imóvel com apelo visual alto e um tour completo pelos ambientes, sem depender só de portais imobiliários e redes sociais.',
    solution:
      'Landing page one-page em HTML, CSS e JavaScript puros — sem framework —, com galeria filtrável por ambiente, lightbox com navegação por teclado e swipe, tour virtual 360° incorporado e contato direto via WhatsApp e Instagram.',
    stack: ['html', 'css', 'js', 'responsivo', 'seo', 'performance'],
    features: [
      'Header fixo com navegação suave e menu adaptado para mobile',
      'Galeria com filtro por ambiente e lightbox com teclado, swipe e botões',
      'Ficha técnica com a prancha oficial do projeto arquitetônico',
      'Tour virtual 360°',
      'Animações de entrada suaves ao rolar a página',
    ],
    links: {
      repo: 'https://github.com/JVreinaldo/casa-betel-elevare',
      live: 'https://jvreinaldo.github.io/casa-betel-elevare/',
    },
    image: 'casa-betel-elevare.jpg',
  },
  {
    id: 'portfolio',
    status: 'desenvolvimento',
    name: 'Este portfólio',
    summary:
      'O site que você está vendo agora — construído em público, com estrutura aberta para crescer.',
    problem:
      'Eu precisava de um espaço que fosse meu — não um template — para mostrar como eu penso um projeto do início ao fim, e que eu conseguisse continuar alimentando sem reescrever a estrutura a cada atualização.',
    solution:
      'React com Vite, sem framework de estilo, com o conteúdo (perfil, habilidades, projetos) separado em arquivos de dados. Adicionar um projeto novo ou uma habilidade nova é editar um arquivo, não redesenhar uma seção.',
    stack: ['react', 'js', 'css', 'git', 'performance', 'seo', 'boas-praticas'],
    features: [
      'Seção de habilidades com referência cruzada para os projetos onde cada tecnologia foi usada',
      'Projetos organizados por status (concluído, em desenvolvimento, futuro) a partir de um único arquivo de dados',
      'Microinterações discretas ao rolar a página, respeitando prefers-reduced-motion',
    ],
    links: {
      repo: 'https://github.com/JVreinaldo/portfolio',
      live: null,
    },
    image: null,
  },
  {
    id: 'proximo-passo',
    status: 'futuro',
    placeholder: true,
    name: '[Próximo projeto]',
    summary: 'Espaço reservado — defina aqui o próximo projeto ou área a explorar.',
    problem: 'Substitua por um problema real que vale a pena resolver.',
    solution: 'Substitua pela abordagem que você pretende usar.',
    stack: [],
    features: [],
    links: { repo: null, live: null },
    image: null,
  },
]

export function getProjectById(id) {
  return projects.find((project) => project.id === id)
}
