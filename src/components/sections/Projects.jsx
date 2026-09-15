import { projects, STATUS } from '../../data/projects'
import { SectionHeading } from '../SectionHeading'
import { ProjectEntry } from './ProjectEntry'
import { useReveal } from '../../hooks/useReveal'
import styles from './Projects.module.css'

const STATUS_ORDER = ['concluido', 'desenvolvimento', 'futuro']

function orderedByStatus() {
  return STATUS_ORDER.map((status) => ({
    status,
    items: projects.filter((project) => project.status === status),
  })).filter((group) => group.items.length > 0)
}

function withGlobalIndex(groups) {
  const indexById = new Map()
  let position = 0
  for (const group of groups) {
    for (const project of group.items) {
      position += 1
      indexById.set(project.id, String(position).padStart(2, '0'))
    }
  }
  return indexById
}

export function Projects() {
  const revealRef = useReveal()
  const groups = orderedByStatus()
  const indexById = withGlobalIndex(groups)

  return (
    <section id="projetos" className="section" aria-labelledby="projetos-titulo">
      <div className="container">
        <SectionHeading
          index="02"
          id="projetos-titulo"
          title="Projetos"
          description="Do que já está no ar ao que ainda é só direção — nesta ordem, de propósito."
        />

        <div ref={revealRef}>
          {groups.map(({ status, items }) => (
            <div key={status} className={styles.group}>
              <h3 className={styles.groupTitle}>
                {STATUS[status].label}
                <span>{String(items.length).padStart(2, '0')}</span>
              </h3>

              {items.map((project) => (
                <ProjectEntry
                  key={project.id}
                  project={project}
                  index={indexById.get(project.id)}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
