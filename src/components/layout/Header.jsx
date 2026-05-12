import { useState, useEffect, useRef } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Search, ShoppingBag, Heart, User, Sun, Moon, Menu, X, LogOut, ChevronDown, Home, Grid, Tags, Info, Mail, Settings, Package, LayoutDashboard } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { selectCartCount } from '../../redux/slices/cartSlice'
import { selectWishlistCount } from '../../redux/slices/wishlistSlice'
import { selectIsAuthenticated, selectCurrentUser, selectIsAdmin, logout } from '../../redux/slices/authSlice'
import { selectTheme, toggleTheme } from '../../redux/slices/uiSlice'
import { setSearchQuery } from '../../redux/slices/productSlice'
import { useUI } from '../../contexts/UIContext'
import styles from './Header.module.css'
import { AnimatePresence as Presence } from 'framer-motion'

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const { mobileMenuOpen, setMobileMenuOpen } = useUI()
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const [scrolled, setScrolled] = useState(false)
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const userMenuRef = useRef(null)

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
  }, [location.pathname])

  useEffect(() => {
    const handleNavigation = () => {
      setMobileMenuOpen(false)
    }
    window.addEventListener('popstate', handleNavigation)
    return () => window.removeEventListener('popstate', handleNavigation)
  }, [])

useEffect(() => {
    if (searchValue) {
      dispatch(setSearchQuery(searchValue))
    }
  }, [searchValue, dispatch])

  const handleNavClick = (e, path) => {
    e?.preventDefault()
    setMobileMenuOpen(false)
    setTimeout(() => navigate(path), 150)
  }

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchValue.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchValue)}`)
      setSearchOpen(false)
    }
  }

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (userMenuRef.current && !userMenuRef.current.contains(e.target)) {
        setUserMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const navLinks = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Shop', path: '/shop', icon: Grid },
    { name: 'Categories', path: '/categories', icon: Tags },
    { name: 'About', path: '/about', icon: Info },
    { name: 'Contact', path: '/contact', icon: Mail }
  ]

  return (
    <motion.header
      className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className={styles.container}>
        <button className={styles.menuButton} onClick={() => setMobileMenuOpen(true)} aria-label="Toggle menu">
          <Menu size={24} />
        </button>

        <Link to="/" className={styles.logo}>
          <img src="/assets/images/LogoLuxCart.png" alt="LuxeCart" className={styles.logoImg} />
        </Link>

        <nav className={styles.nav}>
          {navLinks.map((link, i) => {
            const Icon = link.icon
            return (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={link.path}
                  className={`${styles.navLink} ${location.pathname === link.path ? styles.navLinkActive : ''}`}
                >
                  <motion.div
                    style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}
                    whileHover={{ x: 3 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Icon size={18} />
                    <span>{link.name}</span>
                  </motion.div>
                </Link>
              </motion.div>
            )
          })}
        </nav>

        <div className={styles.actions}>
          <motion.button
            className={styles.iconButton}
            onClick={() => setSearchOpen(!searchOpen)}
            aria-label="Search"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Search size={20} />
          </motion.button>

          <motion.button
            className={styles.iconButton}
            onClick={() => dispatch(toggleTheme())}
            aria-label="Toggle theme"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/wishlist" className={styles.iconButton} aria-label="Wishlist">
              <Heart size={20} />
              {wishlistCount > 0 && <motion.span
                className={styles.badge}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              >{wishlistCount}</motion.span>}
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/cart" className={styles.iconButton} aria-label="Cart">
              <ShoppingBag size={20} />
              {cartCount > 0 && <motion.span
                className={styles.badge}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              >{cartCount}</motion.span>}
            </Link>
          </motion.div>

          {isAuthenticated ? (
            <div className={styles.userMenu} ref={userMenuRef}>
              <motion.button
                className={styles.userButton}
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {user?.photoURL ? (
                  <motion.img
                    src={user.photoURL}
                    alt={user.name}
                    className={styles.avatar}
                    whileHover={{ scale: 1.1 }}
                  />
                ) : (
                  <User size={20} />
                )}
                <ChevronDown size={14} className={`${styles.chevron} ${userMenuOpen ? styles.chevronUp : ''}`} />
              </motion.button>
              <AnimatePresence>
                {userMenuOpen && (
                   <motion.div
                     className={styles.dropdown}
                     initial={{ opacity: 0, y: 10, scale: 0.95 }}
                     animate={{ opacity: 1, y: 0, scale: 1 }}
                     exit={{ opacity: 0, y: 10, scale: 0.95 }}
                     transition={{ duration: 0.2 }}
                   >
                     <motion.div
                       className={styles.dropdownHeader}
                       initial={{ opacity: 0 }}
                       animate={{ opacity: 1 }}
                       transition={{ delay: 0.05 }}
                     >
                       <span className={styles.dropdownName}>{user?.name}</span>
                       <span className={styles.dropdownEmail}>{user?.email}</span>
                     </motion.div>
                     <div className={styles.dropdownDivider} />
                     <motion.div
                       initial={{ opacity: 0, x: -10 }}
                       animate={{ opacity: 1, x: 0 }}
                       transition={{ delay: 0.1 }}
                     >
                       <Link to="/account" onClick={() => setUserMenuOpen(false)}>
                         <Settings size={16} /> My Account
                       </Link>
                     </motion.div>
                     <motion.div
                       initial={{ opacity: 0, x: -10 }}
                       animate={{ opacity: 1, x: 0 }}
                       transition={{ delay: 0.15 }}
                     >
                       <Link to="/orders" onClick={() => setUserMenuOpen(false)}>
                         <Package size={16} /> My Orders
                       </Link>
                     </motion.div>
                     {isAdmin && (
                       <motion.div
                         initial={{ opacity: 0, x: -10 }}
                         animate={{ opacity: 1, x: 0 }}
                         transition={{ delay: 0.2 }}
                       >
                         <Link to="/admin" onClick={() => setUserMenuOpen(false)}>
                           <LayoutDashboard size={16} /> Admin Dashboard
                         </Link>
                       </motion.div>
                     )}
                     <div className={styles.dropdownDivider} />
                     <motion.div
                       initial={{ opacity: 0 }}
                       animate={{ opacity: 1 }}
                       transition={{ delay: 0.25 }}
                     >
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
                     </motion.div>
                   </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <Link to="/auth" className={styles.ctaButton}>
              Sign In
            </Link>
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
            <motion.nav
              key="mobile-menu"
              className={styles.mobileMenu}
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            >
              <div className={styles.mobileMenuContent}>
                <div className={styles.mobileMenuHeader}>
                  <Link to="/" className={styles.mobileLogo} onClick={() => setMobileMenuOpen(false)}>
                    <img src="/assets/images/LogoLuxCart.png" alt="LuxeCart" className={styles.mobileLogoImg} />
                  </Link>
                  <button className={styles.closeButton} onClick={() => setMobileMenuOpen(false)} aria-label="Close menu">
                    <X size={24} />
                  </button>
                </div>

                {isAuthenticated && (
                  <div className={styles.mobileUserSection}>
                    {user?.photoURL ? (
                      <img src={user.photoURL} alt={user.name} className={styles.mobileAvatar} />
                    ) : (
                      <div className={styles.mobileAvatarPlaceholder}>
                        <User size={24} />
                      </div>
                    )}
                    <div className={styles.mobileUserInfo}>
                      <span className={styles.mobileUserName}>{user?.name}</span>
                      <span className={styles.mobileUserEmail}>{user?.email}</span>
                    </div>
                  </div>
                )}

                <nav className={styles.mobileNav}>
                  {navLinks.map((link, i) => {
                    const Icon = link.icon
                    return (
                      <motion.div
                        key={link.path}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Link
                          to={link.path}
                          className={`${styles.mobileNavLink} ${location.pathname === link.path ? styles.active : ''}`}
                          onClick={(e) => handleNavClick(e, link.path)}
                        >
                          <motion.div
                            style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}
                            whileHover={{ x: 3 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                          >
                            <Icon size={20} />
                            <span>{link.name}</span>
                          </motion.div>
                        </Link>
                      </motion.div>
                    )
                  })}
                </nav>

                <div className={styles.mobileActions}>
                  <button 
                    className={styles.mobileActionButton}
                    onClick={() => { dispatch(toggleTheme()); setMobileMenuOpen(false) }}
                  >
                    {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                    <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
                  </button>
                  <Link 
                    to="/cart" 
                    className={styles.mobileActionButton}
                    onClick={(e) => handleNavClick(e, '/cart')}
                  >
                    <ShoppingBag size={20} />
                    <span>Cart ({cartCount})</span>
                  </Link>
                  <Link 
                    to="/wishlist" 
                    className={styles.mobileActionButton}
                    onClick={(e) => handleNavClick(e, '/wishlist')}
                  >
                    <Heart size={20} />
                    <span>Wishlist ({wishlistCount})</span>
                  </Link>
                </div>

                <div className={styles.mobileFooter}>
                  {isAuthenticated ? (
                    <button 
                      onClick={() => { 
                        dispatch(logout())
                        setMobileMenuOpen(false)
                        navigate('/')
                      }}
                      className={styles.mobileLogoutButton}
                    >
                      <LogOut size={18} />
                      <span>Sign Out</span>
                    </button>
                  ) : (
                    <Link to="/auth" className={styles.mobileCtaButton} onClick={(e) => handleNavClick(e, '/auth')}>
                      <User size={18} />
                      <span>Sign In</span>
                    </Link>
                  )}
                </div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
     </motion.header>
   )
 }

export default Header