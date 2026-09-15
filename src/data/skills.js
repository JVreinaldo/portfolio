// Habilidades agrupadas por frente. Cada item pode citar os projetos (por id,
// ver projects.js) onde a tecnologia foi de fato usada — é isso que alimenta
// os links cruzados na seção de Habilidades. O campo `icon` é resolvido em
// src/lib/icons.jsx (mantém esse arquivo livre de import de componente).
export const skillGroups = [
  {
    id: 'interface',
    title: 'Interface',
    skills: [
      {
        id: 'html',
        name: 'HTML5',
        icon: 'html',
        note: 'Base de tudo que eu construo — penso na estrutura antes do visual.',
        projectIds: ['casa-betel-elevare'],
      },
      {
        id: 'css',
        name: 'CSS3 · Flexbox · Grid',
        icon: 'css',
        note: 'Flexbox e Grid pro layout, media query pra responsividade.',
        projectIds: ['casa-betel-elevare'],
      },
      {
        id: 'responsivo',
        name: 'Design responsivo',
        icon: 'responsivo',
        note: 'Desenho pensando em celular primeiro, telão vem depois.',
        projectIds: ['casa-betel-elevare'],
      },
      {
        id: 'js',
        name: 'JavaScript (ES6+)',
        icon: 'js',
        note: 'Fetch, promises, manipulação de DOM — o dia a dia da interface.',
        projectIds: ['casa-betel-elevare'],
      },
      {
        id: 'react',
        name: 'React',
        icon: 'react',
        note: 'Onde organizo estado e componente quando o projeto cresce.',
        projectIds: ['portfolio'],
      },
      {
        id: 'vue',
        name: 'Vue.js',
        icon: 'vue',
        note: 'Aprendi depois do React. Gosto da sintaxe mais direta em tela simples.',
        projectIds: [],
      },
    ],
  },
  {
    id: 'processo',
    title: 'Processo & qualidade',
    skills: [
      {
        id: 'git',
        name: 'Git & controle de versão',
        icon: 'git',
        note: 'Uso todo dia: branch, commit pequeno, histórico que faz sentido depois.',
        projectIds: ['casa-betel-elevare', 'portfolio'],
      },
      {
        id: 'performance',
        name: 'Performance Web',
        icon: 'performance',
        note: 'Lighthouse e Core Web Vitals fazem parte do trabalho, não são um checklist do fim.',
        projectIds: ['casa-betel-elevare', 'portfolio'],
      },
      {
        id: 'seo',
        name: 'SEO técnico para Front-end',
        icon: 'seo',
        note: 'Heading certo, alt em imagem, HTML que o buscador consegue entender.',
        projectIds: ['casa-betel-elevare', 'portfolio'],
      },
      {
        id: 'boas-praticas',
        name: 'Boas práticas de desenvolvimento',
        icon: 'boas-praticas',
        note: 'Código que eu mesmo entendo daqui a três meses.',
        projectIds: ['casa-betel-elevare', 'portfolio'],
      },
    ],
  },
]
