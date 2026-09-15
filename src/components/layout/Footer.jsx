import { profile } from '../../data/profile'
import styles from './Footer.module.css'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.bar}`}>
        <p>
          {profile.name} · {year}
        </p>
        <a href="#topo">Voltar ao topo</a>
      </div>
    </footer>
  )
}
