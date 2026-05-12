import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { motion, AnimatePresence } from 'framer-motion'
import Header from './Header'
import Footer from './Footer'
import { selectTheme } from '../../redux/slices/uiSlice'
import { Toaster } from 'react-hot-toast'
import styles from './Layout.module.css'

const Layout = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const theme = useSelector(selectTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: 'var(--color-surface)',
            color: 'var(--color-text-primary)',
            boxShadow: 'var(--shadow-lg)'
          },
          success: {
            iconTheme: {
              primary: 'var(--color-success)',
              secondary: 'var(--color-surface)'
            }
          },
          error: {
            iconTheme: {
              primary: 'var(--color-error)',
              secondary: 'var(--color-surface)'
            }
          }
        }}
      />
    </div>
  )
}

export default Layout