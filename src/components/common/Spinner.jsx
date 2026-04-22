import styles from './Spinner.module.css'

const Spinner = ({ size = 'medium', className = '' }) => {
  return (
    <div className={`${styles.spinner} ${styles[size]} ${className}`}>
      <div className={styles.ring}></div>
    </div>
  )
}

export default Spinner