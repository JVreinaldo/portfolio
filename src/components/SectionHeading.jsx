import styles from './SectionHeading.module.css'

export function SectionHeading({ index, title, description, id }) {
  return (
    <div className={styles.heading}>
      <span className={styles.index} aria-hidden="true">
        {index}
      </span>
      <div>
        <h2 id={id} className={styles.title}>
          {title}
        </h2>
        {description && <p className={styles.description}>{description}</p>}
      </div>
    </div>
  )
}
