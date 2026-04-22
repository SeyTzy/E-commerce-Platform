import { Star } from 'lucide-react'
import styles from './Rating.module.css'

const Rating = ({ value = 0, max = 5, size = 16, showValue = true, className = '' }) => {
  return (
    <div className={`${styles.rating} ${className}`}>
      <div className={styles.stars}>
        {[...Array(max)].map((_, i) => (
          <Star
            key={i}
            size={size}
            className={i < Math.floor(value) ? styles.filled : styles.empty}
          />
        ))}
      </div>
      {showValue && <span className={styles.value}>{value.toFixed(1)}</span>}
    </div>
  )
}

export default Rating