import { Outlet } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from './Header'
import Footer from './Footer'
import { selectTheme } from '../../redux/slices/uiSlice'
import { Toaster } from 'react-hot-toast'
import styles from './Layout.module.css'

const Layout = () => {
  const dispatch = useDispatch()
  const theme = useSelector(selectTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>
        <Outlet />
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