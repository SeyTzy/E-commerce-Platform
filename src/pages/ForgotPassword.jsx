import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Mail, ArrowLeft, Check } from 'lucide-react'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import { Button, Input } from '../components/common'
import styles from './ForgotPassword.module.css'

const ForgotPassword = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [firebaseAuth, setFirebaseAuth] = useState(null)
  const { register, handleSubmit, formState: { errors } } = useForm()

  useEffect(() => {
    import('../firebase').then(module => setFirebaseAuth(module))
  }, [])

  const onSubmit = async (data) => {
    if (firebaseAuth?.resetPassword) {
      try {
        await firebaseAuth.resetPassword(data.email)
        toast.success('Reset link sent to your email!')
        setIsSubmitted(true)
      } catch (error) {
        if (error.code === 'auth/user-not-found') {
          toast.error('No account found with this email')
        } else {
          toast.error(error.message)
        }
      }
    } else {
      await new Promise(resolve => setTimeout(resolve, 1000))
      toast.success('Reset link sent to your email!')
      setIsSubmitted(true)
    }
  }

  if (isSubmitted) {
    return (
      <div className={styles.forgot}>
        <motion.div
          className={styles.container}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {/* Left Panel - Branding */}
          <div className={styles.leftPanel}>
            <div className={styles.logoWrapper}>
              <img
                src="/assets/images/LogoLuxCart.png"
                alt="LuxeCart"
                className={styles.logoImage}
              />
              <h2 className={styles.brandTitle}>LuxeCart</h2>
              <p className={styles.brandSubtitle}>Premium Shopping Experience</p>
            </div>
          </div>

          {/* Right Panel - Success Message */}
          <div className={styles.rightPanel}>
            <div className={styles.card}>
              <div className={styles.header}>
                <Link to="/" className={styles.headerLogo}>
                  <img src="/assets/images/LogoLuxCart.png" alt="LuxeCart" />
                </Link>
              </div>

              <div className={styles.success}>
                <div className={styles.successIcon}>
                  <Check size={40} />
                </div>
                <h1>Check Your Email</h1>
                <p>We've sent a password reset link to your email address.</p>
                <p className={styles.note}>
                  Didn't receive the email? Check your spam folder or{' '}
                  <button onClick={() => setIsSubmitted(false)}>try again</button>
                </p>
              </div>

              <Link to="/auth" className={styles.back}>
                <ArrowLeft size={18} /> Back to Sign In
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className={styles.forgot}>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {/* Left Panel - Branding */}
        <div className={styles.leftPanel}>
          <div className={styles.logoWrapper}>
            <img
              src="/assets/images/LogoLuxCart.png"
              alt="LuxeCart"
              className={styles.logoImage}
            />
            <h2 className={styles.brandTitle}>LuxeCart</h2>
            <p className={styles.brandSubtitle}>Premium Shopping Experience</p>
          </div>
        </div>

        {/* Right Panel - Form */}
        <div className={styles.rightPanel}>
          <div className={styles.card}>
            <div className={styles.header}>
              <Link to="/" className={styles.headerLogo}>
                <img src="/assets/images/LogoLuxCart.png" alt="LuxeCart" />
              </Link>
              <h1>Forgot Password?</h1>
              <p>No worries, we'll send you reset instructions.</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
              <Input
                label="Email Address"
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
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default ForgotPassword
