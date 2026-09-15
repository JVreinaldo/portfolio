import { skillGroups } from '../../data/skills'
import { getProjectById } from '../../data/projects'
import { SectionHeading } from '../SectionHeading'
import { useReveal } from '../../hooks/useReveal'
import styles from './Skills.module.css'

export function Skills() {
  const revealRef = useReveal()

  return (
    <section id="habilidades" className="section" aria-labelledby="habilidades-titulo">
      <div className="container">
        <SectionHeading
          index="01"
          id="habilidades-titulo"
          title="Habilidades"
          description="Não é uma lista de logos: abra cada item para ver onde ele entrou em prática."
        />

        <div ref={revealRef} className={styles.groups}>
          {skillGroups.map((group) => (
            <div key={group.id} className={styles.group}>
              <h3 className={styles.groupTitle}>{group.title}</h3>
              <ul className={styles.list}>
                {group.skills.map((skill) => {
                  const relatedProjects = skill.projectIds
                    .map((id) => getProjectById(id))
                    .filter(Boolean)

                  return (
                    <li key={skill.id}>
                      <details className={styles.skill}>
                        <summary>{skill.name}</summary>
                        <p className={styles.note}>{skill.note}</p>
                        {relatedProjects.length > 0 && (
                          <p className={styles.usedIn}>
                            Usado em{' '}
                            {relatedProjects.map((project, i) => (
                              <span key={project.id}>
                                <a href={`#projeto-${project.id}`}>{project.name}</a>
                                {i < relatedProjects.length - 1 ? ', ' : ''}
                              </span>
                            ))}
                          </p>
                        )}
                      </details>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
