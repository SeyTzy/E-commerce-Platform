import styles from './Badge.module.css'

const Badge = ({ children, variant = 'default', size = 'medium', className = '' }) => {
  return (
    <span className={`${styles.badge} ${styles[variant]} ${styles[size]} ${className}`}>
      {children}
    </span>
  )
}

export default Badge