import { STATUS } from '../../data/projects'
import { skillGroups } from '../../data/skills'
import styles from './ProjectEntry.module.css'

const images = import.meta.glob('../../assets/projects/*.jpg', {
  eager: true,
  import: 'default',
})

const allSkills = skillGroups.flatMap((group) => group.skills)

function skillName(id) {
  return allSkills.find((skill) => skill.id === id)?.name ?? id
}

export function ProjectEntry({ project, index }) {
  const imageSrc = project.image
    ? images[`../../assets/projects/${project.image}`]
    : null

  return (
    <article
      id={`projeto-${project.id}`}
      className={styles.entry}
      data-status={project.status}
      data-placeholder={project.placeholder || undefined}
    >
      <div className={styles.rail} aria-hidden="true">
        <span className={styles.marker} />
      </div>

      <div className={styles.content}>
        <div className={styles.meta}>
          <span className={styles.number}>{index}</span>
          <span className={styles.status}>{STATUS[project.status].label}</span>
        </div>

        <h3 className={styles.name}>{project.name}</h3>
        <p className={styles.summary}>{project.summary}</p>

        {imageSrc && (
          <img
            className={styles.image}
            src={imageSrc}
            alt={`Captura de tela do projeto ${project.name}`}
            loading="lazy"
            decoding="async"
            width="1400"
            height="900"
          />
        )}

        <details className={styles.details}>
          <summary>Problema, solução e detalhes</summary>

          <div className={styles.grid}>
            <div>
              <h4>Problema</h4>
              <p>{project.problem}</p>
            </div>
            <div>
              <h4>Solução</h4>
              <p>{project.solution}</p>
            </div>
          </div>

          {project.features.length > 0 && (
            <div className={styles.features}>
              <h4>Funcionalidades</h4>
              <ul>
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>
          )}
        </details>

        {project.stack.length > 0 && (
          <ul className={styles.stack}>
            {project.stack.map((id) => (
              <li key={id}>{skillName(id)}</li>
            ))}
          </ul>
        )}

        {(project.links.repo || project.links.live) && (
          <p className={styles.links}>
            {project.links.repo && (
              <a href={project.links.repo} target="_blank" rel="noreferrer">
                Repositório
              </a>
            )}
            {project.links.live && (
              <a href={project.links.live} target="_blank" rel="noreferrer">
                Ver ao vivo
              </a>
            )}
          </p>
        )}
      </div>
    </article>
  )
}
