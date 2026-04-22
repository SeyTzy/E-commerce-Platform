import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Mail, ArrowLeft, Check } from 'lucide-react'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import { Button, Input } from '../components/common'
import styles from './ForgotPassword.module.css'

const ForgotPassword = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = async (data) => {
    await new Promise(resolve => setTimeout(resolve, 1000))
    toast.success('Reset link sent to your email!')
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className={styles.forgot}>
        <motion.div 
          className={styles.card}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <div className={styles.success}>
            <div className={styles.successIcon}>
              <Check size={32} />
            </div>
            <h1>Check Your Email</h1>
            <p>We've sent a password reset link to your email address.</p>
            <p className={styles.note}>Didn't receive the email? Check your spam folder or <button onClick={() => setIsSubmitted(false)}>try again</button></p>
          </div>
          <Link to="/auth" className={styles.back}>
            <ArrowLeft size={18} /> Back to Sign In
          </Link>
        </motion.div>
      </div>
    )
  }

  return (
    <div className={styles.forgot}>
      <motion.div 
        className={styles.card}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className={styles.header}>
          <Link to="/" className={styles.logo}>
            <span className={styles.logoIcon}>L</span>
          </Link>
          <h1>Forgot Password?</h1>
          <p>No worries, we'll send you reset instructions.</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <Input
            label="Email"
            type="email"
            placeholder="Enter your email"
            leftIcon={<Mail size={18} />}
            error={errors.email?.message}
            {...register('email', { 
              required: 'Email is required',
              pattern: { value: /^\S+@\S+$/i, message: 'Invalid email format' }
            })}
          />

          <Button type="submit" variant="primary" size="large" fullWidth>
            Reset Password
          </Button>
        </form>

        <Link to="/auth" className={styles.back}>
          <ArrowLeft size={18} /> Back to Sign In
        </Link>
      </motion.div>
    </div>
  )
}

export default ForgotPassword