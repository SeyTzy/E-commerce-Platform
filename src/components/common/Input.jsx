import { forwardRef, useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import styles from './Input.module.css'

const Input = forwardRef(({
  label,
  error,
  helperText,
  leftIcon,
  rightIcon,
  type = 'text',
  className = '',
  ...props
}, ref) => {
  const [showPassword, setShowPassword] = useState(false)
  const isPassword = type === 'password'
  const inputType = isPassword ? (showPassword ? 'text' : 'password') : type

  return (
    <div className={`${styles.wrapper} ${className}`}>
      {label && <label className={styles.label}>{label}</label>}
      <div className={`${styles.inputContainer} ${error ? styles.hasError : ''}`}>
        {leftIcon && <span className={styles.leftIcon}>{leftIcon}</span>}
        <input
          ref={ref}
          type={inputType}
          className={`${styles.input} ${leftIcon ? styles.hasLeftIcon : ''} ${(rightIcon || isPassword) ? styles.hasRightIcon : ''}`}
          {...props}
        />
        {isPassword && (
          <button
            type="button"
            className={styles.togglePassword}
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}
        {rightIcon && !isPassword && <span className={styles.rightIcon}>{rightIcon}</span>}
      </div>
      {error && <span className={styles.error}>{error}</span>}
      {helperText && !error && <span className={styles.helperText}>{helperText}</span>}
    </div>
  )
})

Input.displayName = 'Input'
export default Input