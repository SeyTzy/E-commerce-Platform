import { forwardRef } from 'react'
import styles from './Card.module.css'

const Card = forwardRef(({
  children,
  hover = false,
  padding = 'medium',
  className = '',
  ...props
}, ref) => {
  return (
    <div
      ref={ref}
      className={`${styles.card} ${hover ? styles.hover : ''} ${styles[padding]} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
})

Card.displayName = 'Card'
export default Card