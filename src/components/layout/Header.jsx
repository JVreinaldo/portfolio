import { useEffect, useState } from 'react'
import { profile } from '../../data/profile'
import styles from './Header.module.css'

const NAV_ITEMS = [
  { index: '00', label: 'Perfil', href: '#perfil' },
  { index: '01', label: 'Habilidades', href: '#habilidades' },
  { index: '02', label: 'Projetos', href: '#projetos' },
  { index: '03', label: 'Contato', href: '#contato' },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  // Fecha o menu mobile ao navegar ou ao alargar a tela além do breakpoint.
  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 56rem)')
    const closeOnWide = (event) => {
      if (event.matches) setMenuOpen(false)
    }
    mediaQuery.addEventListener('change', closeOnWide)
    return () => mediaQuery.removeEventListener('change', closeOnWide)
  }, [])

  return (
    <header className={styles.header}>
      <div className={`container ${styles.bar}`}>
        <a href="#topo" className={styles.mark}>
          {profile.handle}
        </a>

        <button
          type="button"
          className={styles.toggle}
          aria-expanded={menuOpen}
          aria-controls="nav-principal"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? 'Fechar' : 'Menu'}
        </button>

        <nav
          id="nav-principal"
          className={styles.nav}
          data-open={menuOpen}
          aria-label="Navegação principal"
        >
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={() => setMenuOpen(false)}>
                  <span aria-hidden="true">{item.index}</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
