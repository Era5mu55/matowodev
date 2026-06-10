import { CURRENCIES } from '../utils/currency'
import styles from '../styles/CurrencySwitcher.module.css'

export default function CurrencySwitcher({ active, onSelect, isLive }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.buttons} role="group" aria-label="Select display currency">
        {CURRENCIES.map(c => (
          <button
            key={c}
            className={`${styles.btn} ${active === c ? styles.active : ''}`}
            onClick={() => onSelect(c)}
            aria-pressed={active === c}
          >
            {c}
          </button>
        ))}
      </div>
      {isLive && (
        <span className={styles.liveTag}>
          <span className={styles.liveDot} aria-hidden="true" />
          Live rates
        </span>
      )}
    </div>
  )
}
