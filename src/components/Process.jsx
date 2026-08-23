import { steps } from '../data/process'
import styles from '../styles/Process.module.css'

export default function Process() {
  return (
    <section id="process" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.header}>
          <span className={`eyebrow ${styles.kicker}`}>How I Work</span>
          <h2 className={styles.heading}>From Brief to Launch</h2>
          <p className={styles.sub}>
            A clear, collaborative process so you always know what&apos;s happening and what comes next.
          </p>
        </div>

        <ol className={styles.steps}>
          {steps.map((step) => (
            <li key={step.number} className={styles.step}>
              <span className={`numberBadge ${styles.number}`}>{step.number}</span>
              <h3 className={styles.title}>{step.title}</h3>
              <p className={styles.desc}>{step.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
