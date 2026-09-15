import { SiHtml5, SiCss, SiJavascript, SiReact, SiVuedotjs, SiGit } from 'react-icons/si'
import { LuSmartphone, LuZap, LuSearch, LuCircleCheck } from 'react-icons/lu'

// Ícones ficam monocromáticos (herdam a cor do texto) em vez das cores de
// marca — mantém a seção coerente com o resto da paleta, sem virar um
// mosaico colorido de logos.
const skillIcons = {
  html: SiHtml5,
  css: SiCss,
  responsivo: LuSmartphone,
  js: SiJavascript,
  react: SiReact,
  vue: SiVuedotjs,
  git: SiGit,
  performance: LuZap,
  seo: LuSearch,
  'boas-praticas': LuCircleCheck,
}

export function SkillIcon({ id, className }) {
  const Icon = skillIcons[id]
  if (!Icon) return null
  return <Icon aria-hidden="true" className={className} />
}
