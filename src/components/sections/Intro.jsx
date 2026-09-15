import { profile } from '../../data/profile'
import { useReveal } from '../../hooks/useReveal'
import styles from './Intro.module.css'

export function Intro() {
  const revealRef = useReveal()

  return (
    <section id="perfil" className={`section ${styles.intro}`} aria-labelledby="perfil-titulo">
      <div className="container">
        <p className="eyebrow">
          <strong>00</strong> Perfil
        </p>

        <h1 id="perfil-titulo" className={styles.name}>
          {profile.name}
        </h1>

        <p className={styles.role}>
          {profile.role} — {profile.status}
        </p>

        <div ref={revealRef} className={styles.body}>
          <div className={styles.bio}>
            {profile.bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <dl className={styles.focus}>
            <dt>Onde concentro esforço</dt>
            {profile.focusAreas.map((area) => (
              <dd key={area}>{area}</dd>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
