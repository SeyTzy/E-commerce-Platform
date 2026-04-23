import { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Search, ShoppingBag, Heart, User, Sun, Moon, Menu, X, LogOut, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { selectCartCount } from '../../redux/slices/cartSlice'
import { selectWishlistCount } from '../../redux/slices/wishlistSlice'
import { selectIsAuthenticated, selectCurrentUser, selectIsAdmin, logout } from '../../redux/slices/authSlice'
import { selectTheme, toggleTheme } from '../../redux/slices/uiSlice'
import { setSearchQuery } from '../../redux/slices/productSlice'
import { useUI } from '../../contexts/UIContext'
import styles from './Header.module.css'

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const { mobileMenuOpen, setMobileMenuOpen } = useUI()
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const [scrolled, setScrolled] = useState(false)
  const [userMenuOpen, setUserMenuOpen] = useState(false)

  const cartCount = useSelector(selectCartCount)
  const wishlistCount = useSelector(selectWishlistCount)
  const isAuthenticated = useSelector(selectIsAuthenticated)
  const user = useSelector(selectCurrentUser)
  const isAdmin = useSelector(selectIsAdmin)
  const theme = useSelector(selectTheme)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [mobileMenuOpen])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location.pathname, setMobileMenuOpen])

  useEffect(() => {
    if (searchValue) {
      dispatch(setSearchQuery(searchValue))
    }
  }, [searchValue, dispatch])

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchValue.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchValue)}`)
      setSearchOpen(false)
    }
  }

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Categories', path: '/categories' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ]

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <button className={styles.menuButton} onClick={() => setMobileMenuOpen(true)}>
          <Menu size={24} />
        </button>

        <Link to="/" className={styles.logo}>
          <img src="/assets/images/LogoLuxCart.png" alt="LuxeCart" className={styles.logoImg} />
        </Link>

        <nav className={styles.nav}>
          {navLinks.map(link => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={`${styles.navLink} ${location.pathname === link.path ? styles.navLinkActive : ''}`}
            >
              <span>{link.name}</span>
            </Link>
          ))}
        </nav>

        <div className={styles.actions}>
          <button className={styles.iconButton} onClick={() => setSearchOpen(!searchOpen)}>
            <Search size={20} />
          </button>

          <button className={styles.iconButton} onClick={() => dispatch(toggleTheme())}>
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <Link to="/wishlist" className={styles.iconButton}>
            <Heart size={20} />
            {wishlistCount > 0 && <span className={styles.badge}>{wishlistCount}</span>}
          </Link>

          <Link to="/cart" className={styles.iconButton}>
            <ShoppingBag size={20} />
            {cartCount > 0 && <span className={styles.badge}>{cartCount}</span>}
          </Link>

          {isAuthenticated ? (
            <div className={styles.userMenu}>
              <button 
                className={styles.iconButton}
                onClick={() => setUserMenuOpen(!userMenuOpen)}
              >
                {user?.photoURL ? (
                  <img 
                    src={user.photoURL} 
                    alt={user.name}
                    style={{ width: 20, height: 20, borderRadius: '50%', objectFit: 'cover' }}
                  />
                ) : (
                  <User size={20} />
                )}
                <ChevronDown size={14} />
              </button>
              {userMenuOpen && (
                <div className={styles.dropdown}>
                  <Link to="/account" onClick={() => setUserMenuOpen(false)}>My Account</Link>
                  <Link to="/orders" onClick={() => setUserMenuOpen(false)}>My Orders</Link>
                  {isAdmin && <Link to="/admin" onClick={() => setUserMenuOpen(false)}>Admin Dashboard</Link>}
                  <div className={styles.divider} />
                  <button 
                    onClick={() => { 
                      dispatch(logout())
                      setUserMenuOpen(false)
                      navigate('/')
                    }}
                    className={styles.logoutBtn}
                  >
                    <LogOut size={16} /> Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/auth" className={styles.authButton}>Sign In</Link>
          )}
        </div>
      </div>

      <AnimatePresence>
        {searchOpen && (
          <motion.div
            className={styles.searchBar}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <form onSubmit={handleSearch} className={styles.searchForm}>
              <Search size={20} />
              <input
                type="text"
                placeholder="Search products..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                autoFocus
              />
              <button type="button" onClick={() => setSearchOpen(false)}>
                <X size={20} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {mobileMenuOpen && (
          <>
            <motion.div
              key="mobile-overlay"
              className={styles.mobileOverlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              key="mobile-menu"
              className={styles.mobileMenu}
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            >
              <div className={styles.mobileMenuContent} onClick={(e) => e.stopPropagation()}>
                <div className={styles.mobileMenuHeader}>
                  <Link to="/" className={styles.logo} onClick={() => setMobileMenuOpen(false)}>
                    <img src="/assets/images/LogoLuxCart.png" alt="LuxeCart" className={styles.logoImg} />
                  </Link>
                  <button onClick={() => setMobileMenuOpen(false)}>
                    <X size={24} />
                  </button>
                </div>
                <nav className={styles.mobileNav}>
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        to={link.path}
                        className={`${styles.mobileNavLink} ${location.pathname === link.path ? styles.active : ''}`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
                <div className={styles.mobileMenuFooter}>
                  {isAuthenticated ? (
                    <div className={styles.userInfo}>
                      <User size={20} />
                      <span>{user?.name}</span>
                    </div>
                  ) : (
                    <Link to="/auth" className={styles.authButton} onClick={() => setMobileMenuOpen(false)}>
                      Sign In
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header