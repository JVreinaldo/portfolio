# Portfólio de João Victor Reinaldo

Portfólio pessoal construído do zero: identidade, habilidades e projetos,
com uma direção visual editorial (papel + tinta + um acento, sem gradiente
ou glassmorphism) em vez do "template de dev" padrão.

## Stack

- **React 19** + **Vite**, sem TypeScript, sem Next.js, sem framework de
  CSS. Escolha deliberada: usar só o que eu domino de fato hoje.
- **CSS puro**, organizado em CSS Modules por componente, sobre um sistema
  de tokens (`src/index.css`): cores, tipografia e espaçamento fluidos,
  com suporte nativo a dark mode via `prefers-color-scheme`.
- Sem biblioteca de animação: as microinterações usam `IntersectionObserver`
  (`src/hooks/useReveal.js`) e transições CSS, respeitando
  `prefers-reduced-motion`.
- **oxlint** para lint.

## Rodando localmente

```bash
npm install
npm run dev       # http://localhost:5173/portfolio/
```

(A URL leva `/portfolio/` no caminho porque o `base` do Vite está configurado
para bater com o GitHub Pages. Veja a seção de Deploy.)

## Build

```bash
npm run build      # gera dist/
npm run preview    # serve o build de produção localmente
```

## Deploy

Hospedado no **GitHub Pages**, publicado em
`https://jvreinaldo.github.io/portfolio/`, com deploy automático a cada push
na branch `main` via GitHub Actions (`.github/workflows/deploy.yml`): o
workflow builda o projeto e publica o conteúdo de `dist/`.

Ativação (feita uma única vez, direto nas configurações do repositório,
não é algo que dá pra automatizar por fora):

1. Repositório precisa ser **público**: o GitHub Pages gratuito não
   funciona em repositório privado.
2. Em **Settings → Pages**, em "Build and deployment → Source", selecione
   **GitHub Actions**.
3. Qualquer push em `main` a partir daí dispara o deploy.

O `vite.config.js` já está com `base: '/portfolio/'`. Se o repositório
mudar de nome, esse valor precisa acompanhar.

## Estrutura do projeto

```
src/
  data/            conteúdo do site, editar aqui e não nos componentes
    profile.js     nome, bio, foco atual, contatos
    skills.js      habilidades por grupo, com referência aos projetos
    projects.js    projetos (concluído / em desenvolvimento / futuro)
  components/
    layout/        Header, Footer
    sections/      Perfil, Habilidades, Projetos, Contato
    SectionHeading.jsx  título numerado reutilizado pelas seções
  hooks/
    useReveal.js   scroll-reveal via IntersectionObserver
  assets/          imagens (ex.: capturas de projetos)
```

### Adicionando um projeto novo

Edite `src/data/projects.js` e inclua um objeto no array `projects`:

```js
{
  id: 'meu-projeto',
  status: 'desenvolvimento', // 'concluido' | 'desenvolvimento' | 'futuro'
  name: 'Nome do projeto',
  summary: 'Uma frase.',
  problem: 'Qual problema ele resolve.',
  solution: 'Como resolvi.',
  stack: ['react', 'css'],   // ids definidos em src/data/skills.js
  features: ['Funcionalidade 1', 'Funcionalidade 2'],
  links: { repo: 'https://...', live: 'https://...' },
  image: null,               // nome do arquivo em src/assets/projects, ou null
}
```

Nenhum componente precisa mudar: a seção de Projetos e as referências
cruzadas na seção de Habilidades são geradas a partir desse array.

### Adicionando uma habilidade nova

Mesma lógica em `src/data/skills.js`: um objeto a mais dentro do grupo
certo, com `projectIds` apontando para os projetos onde ela foi usada.

## Licença

Uso pessoal. Sinta-se livre para se inspirar, mas o conteúdo (textos,
projetos, identidade) é meu.
