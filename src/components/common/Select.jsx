import { forwardRef } from 'react'
import { ChevronDown } from 'lucide-react'
import styles from './Select.module.css'

const Select = forwardRef(({
  label,
  error,
  options = [],
  placeholder = 'Select an option',
  className = '',
  ...props
}, ref) => {
  return (
    <div className={`${styles.wrapper} ${className}`}>
      {label && <label className={styles.label}>{label}</label>}
      <div className={styles.selectContainer}>
        <select ref={ref} className={`${styles.select} ${error ? styles.hasError : ''}`} {...props}>
          <option value="">{placeholder}</option>
          {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <ChevronDown size={18} className={styles.icon} />
      </div>
      {error && <span className={styles.error}>{error}</span>}
    </div>
  )
})

Select.displayName = 'Select'
export default Select