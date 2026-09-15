import { profile } from '../../data/profile'
import { SectionHeading } from '../SectionHeading'
import { useReveal } from '../../hooks/useReveal'
import styles from './Contact.module.css'

export function Contact() {
  const revealRef = useReveal()

  return (
    <section id="contato" className="section" aria-labelledby="contato-titulo">
      <div className="container">
        <SectionHeading index="03" id="contato-titulo" title="Contato" />

        <div ref={revealRef} className={styles.body}>
          <p className={styles.lead}>
            Se um projeto, uma vaga ou só uma ideia fizerem sentido pra conversar,
            os canais abaixo chegam direto até mim.
          </p>

          <ul className={styles.list}>
            {profile.contacts.map((contact) => (
              <li key={contact.label}>
                <a href={contact.href} target={contact.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                  <span className={styles.label}>{contact.label}</span>
                  <span className={styles.value}>{contact.value}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
