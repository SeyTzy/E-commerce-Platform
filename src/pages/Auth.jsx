import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Mail, Lock, User, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import { Button, Input } from '../components/common'
import { setCredentials, setLoading, setError, selectAuthLoading, selectAuthError } from '../redux/slices/authSlice'
import styles from './Auth.module.css'

const isFirebaseConfigured = import.meta.env.VITE_FIREBASE_API_KEY && import.meta.env.VITE_FIREBASE_API_KEY !== 'YOUR_API_KEY'

let firebaseAuth = null

const Auth = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [isLogin, setIsLogin] = useState(true)
  const [firebaseReady, setFirebaseReady] = useState(false)
  const isLoading = useSelector(selectAuthLoading)
  const authError = useSelector(selectAuthError)

  const { register, handleSubmit, formState: { errors }, reset } = useForm()

  useEffect(() => {
    if (isFirebaseConfigured) {
      import('../firebase').then(module => {
        firebaseAuth = module
        setFirebaseReady(true)
      })
    }
  }, [])

  const handleGoogleSignIn = async () => {
    if (!isFirebaseConfigured || !firebaseAuth) {
      dispatch(setCredentials({
        user: { id: '1', email: 'demo@gmail.com', name: 'Demo User', role: 'user' },
        token: 'demo-token-123'
      }))
      toast.success('Welcome back! (Demo Mode)')
      navigate('/')
      return
    }

    dispatch(setLoading(true))
    try {
      const result = await firebaseAuth.signInWithGoogle()
      const user = result.user
      dispatch(setCredentials({
        user: {
          id: user.uid,
          email: user.email,
          name: user.displayName || 'Google User',
          photoURL: user.photoURL
        },
        token: user.accessToken
      }))
      toast.success('Welcome back!')
      navigate('/')
    } catch (error) {
      dispatch(setError(error.message))
      toast.error('Google sign in failed: ' + error.message)
    }
  }

  const onSubmit = async (data) => {
    if (!isFirebaseConfigured || !firebaseAuth) {
      if (isLogin) {
        if (data.email === 'demo@gmail.com' && data.password === 'demo123') {
          dispatch(setCredentials({
            user: { id: '1', email: data.email, name: 'Demo User', role: 'user' },
            token: 'demo-token-123'
          }))
          toast.success('Welcome back!')
          navigate('/')
        } else if (data.email === 'admin@gmail.com' && data.password === 'admin123') {
          dispatch(setCredentials({
            user: { id: '0', email: data.email, name: 'Admin', role: 'admin' },
            token: 'admin-token-123'
          }))
          toast.success('Welcome back, Admin!')
          navigate('/')
        } else {
          dispatch(setError('Invalid email or password'))
          toast.error('Invalid email or password')
        }
      } else {
        dispatch(setCredentials({
          user: { id: Date.now().toString(), email: data.email, name: data.name, role: 'user' },
          token: 'new-user-token'
        }))
        toast.success('Account created successfully!')
        navigate('/')
      }
      return
    }

    dispatch(setLoading(true))

    try {
      if (isLogin) {
        const result = await firebaseAuth.signInWithEmail(data.email, data.password)
        const user = result.user
        dispatch(setCredentials({
          user: {
            id: user.uid,
            email: user.email,
            name: user.displayName || 'User'
          },
          token: user.accessToken
        }))
        toast.success('Welcome back!')
        navigate('/')
      } else {
        const result = await firebaseAuth.signUpWithEmail(data.email, data.password)
        const user = result.user
        await user.updateProfile({ displayName: data.name })
        dispatch(setCredentials({
          user: {
            id: user.uid,
            email: user.email,
            name: data.name
          },
          token: user.accessToken
        }))
        toast.success('Account created successfully!')
        navigate('/')
      }
    } catch (error) {
      dispatch(setError(error.message))
      if (error.code === 'auth/invalid-email') {
        toast.error('Invalid email address')
      } else if (error.code === 'auth/wrong-password') {
        toast.error('Invalid password')
      } else if (error.code === 'auth/user-not-found') {
        toast.error('User not found')
      } else if (error.code === 'auth/email-already-in-use') {
        toast.error('Email already in use')
      } else if (error.code === 'auth/weak-password') {
        toast.error('Password should be at least 4 characters')
      } else {
        toast.error(error.message)
      }
    }
  }

  const toggleMode = () => {
    setIsLogin(!isLogin)
    reset()
  }

  return (
    <div className={styles.auth}>
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
              <h1>{isLogin ? 'Welcome Back' : 'Create Account'}</h1>
              <p>{isLogin ? 'Sign in to continue shopping' : 'Join us for a better shopping experience'}</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
              {!isLogin && (
                <Input
                  label="Full Name"
                  placeholder="Enter your name"
                  leftIcon={<User size={18} />}
                  error={errors.name?.message}
                  {...register('name', {
                    required: !isLogin ? 'Name is required' : false,
                    minLength: { value: 2, message: 'Name must be at least 2 characters' }
                  })}
                />
              )}

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

              <Input
                label="Password"
                type="password"
                placeholder="Enter your password"
                leftIcon={<Lock size={18} />}
                error={errors.password?.message}
                {...register('password', {
                  required: 'Password is required',
                  minLength: { value: 4, message: 'Password must be at least 4 characters' }
                })}
              />

              {isLogin && (
                <div className={styles.forgot}>
                  <Link to="/forgot-password">Forgot Password?</Link>
                </div>
              )}

              <Button type="submit" variant="primary" size="large" fullWidth isLoading={isLoading}>
                {isLogin ? 'Sign In' : 'Create Account'} <ArrowRight size={18} />
              </Button>
            </form>

            <div className={styles.divider}>
              <span>or continue with</span>
            </div>

            <div className={styles.social}>
              <button
                type="button"
                className={styles.socialBtn}
                onClick={handleGoogleSignIn}
                disabled={isLoading}
              >
                <svg viewBox="0 0 24 24" width="20" height="20">
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Google
              </button>
            </div>

            <p className={styles.switch}>
              {isLogin ? "Don't have an account?" : 'Already have an account?'}
              <button type="button" onClick={toggleMode}>
                {isLogin ? 'Sign Up' : 'Sign In'}
              </button>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Auth
