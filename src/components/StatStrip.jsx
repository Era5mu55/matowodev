import heroData from '../data/hero'
import useCountUp from '../utils/useCountUp'
import styles from '../styles/StatStrip.module.css'

function Stat({ target, suffix, label }) {
  const [display, ref] = useCountUp(target, suffix)
  return (
    <div ref={ref} className={styles.stat}>
      <span className={styles.value}>{display}</span>
      <span className={styles.label}>{label}</span>
    </div>
  )
}

export default function StatStrip() {
  return (
    <div className={styles.strip} aria-label="Quick stats">
      <div className={`container ${styles.grid}`}>
        {heroData.stats.map(({ target, suffix, label }) => (
          <Stat key={label} target={target} suffix={suffix} label={label} />
        ))}
      </div>
    </div>
  )
}
