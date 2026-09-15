// Habilidades agrupadas por frente. Cada item pode citar os projetos (por id,
// ver projects.js) onde a tecnologia foi de fato usada — é isso que alimenta
// os links cruzados na seção de Habilidades.
export const skillGroups = [
  {
    id: 'interface',
    title: 'Interface',
    skills: [
      {
        id: 'html',
        name: 'HTML5',
        note: 'Estrutura semântica como base, não como formalidade.',
        projectIds: ['casa-betel-elevare'],
      },
      {
        id: 'css',
        name: 'CSS3 · Flexbox · Grid',
        note: 'Layout responsivo sem depender de framework utilitário.',
        projectIds: ['casa-betel-elevare'],
      },
      {
        id: 'responsivo',
        name: 'Design responsivo',
        note: 'Pensado para telas pequenas desde o início, não adaptado depois.',
        projectIds: ['casa-betel-elevare'],
      },
      {
        id: 'js',
        name: 'JavaScript (ES6+)',
        note: 'Interações, estado de interface, integração com APIs.',
        projectIds: ['casa-betel-elevare'],
      },
      {
        id: 'react',
        name: 'React',
        note: 'Componentização e organização de estado de interface.',
        projectIds: ['portfolio'],
      },
      {
        id: 'vue',
        name: 'Vue.js',
        note: 'Segunda ferramenta para escolher a certa, não a única.',
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
        note: 'Histórico que conta a evolução do projeto, não só o "commit final".',
        projectIds: ['casa-betel-elevare', 'portfolio'],
      },
      {
        id: 'performance',
        name: 'Performance Web',
        note: 'Otimização de aplicações pensando em Core Web Vitals reais.',
        projectIds: ['casa-betel-elevare', 'portfolio'],
      },
      {
        id: 'seo',
        name: 'SEO técnico para Front-end',
        note: 'Headings, semântica e indexação — parte do código, não um plugin.',
        projectIds: ['casa-betel-elevare', 'portfolio'],
      },
      {
        id: 'boas-praticas',
        name: 'Boas práticas de desenvolvimento',
        note: 'Código organizado, sem dependências ou abstrações desnecessárias.',
        projectIds: ['casa-betel-elevare', 'portfolio'],
      },
    ],
  },
]
