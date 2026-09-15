// Cada projeto é um registro independente. Para adicionar um novo, basta
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
    name: 'Casa Betel · Elevare',
    summary:
      'Landing page one-page para apresentar um empreendimento residencial de alto padrão.',
    problem:
      'A construtora queria uma página só deles pra mostrar o imóvel, com fotos boas e um tour completo pelos ambientes, sem depender só de portal imobiliário e Instagram.',
    solution:
      'Fiz uma landing one-page em HTML, CSS e JavaScript puro, sem framework. Galeria com filtro por ambiente, lightbox que funciona com teclado e swipe no celular, tour 360° embutido e contato direto no WhatsApp.',
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
      'O site que você está vendo agora, construído em público, com estrutura aberta para crescer.',
    problem:
      'Eu queria um espaço meu, não um template pronto, e que desse pra continuar atualizando sem reescrever a página inteira toda vez que eu terminasse um projeto novo.',
    solution:
      'React com Vite, sem framework de CSS. O conteúdo (perfil, habilidades, projetos) fica em arquivos separados. Pra adicionar algo novo eu só edito um arquivo.',
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
    summary: 'Espaço reservado: defina aqui o próximo projeto ou área a explorar.',
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
