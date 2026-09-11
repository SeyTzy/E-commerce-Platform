import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { X, Plus, Minus, Trash2, ShoppingCart, ArrowRight, Lock } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import toast from 'react-hot-toast'
import { selectIsSidebarOpen, setSidebarOpen } from '../../redux/slices/uiSlice'
import { selectCartItems, selectCartTotal, removeFromCart, updateQuantity, selectCartCount } from '../../redux/slices/cartSlice'
import { selectIsAuthenticated } from '../../redux/slices/authSlice'
import { Button } from '../common'
import { useLanguage } from '../../contexts/LanguageContext'
import styles from './CartSidebar.module.css'

const CartSidebar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { t } = useLanguage()
  const isOpen = useSelector(selectIsSidebarOpen)
  const items = useSelector(selectCartItems)
  const total = useSelector(selectCartTotal)
  const count = useSelector(selectCartCount)
  const isAuthenticated = useSelector(selectIsAuthenticated)

  const handleClose = () => dispatch(setSidebarOpen(false))

  const handleProceedToCheckout = () => {
    handleClose()
    if (!isAuthenticated) {
      toast.error(t('checkout.authNotice'))
      navigate('/auth?redirect=/checkout', { state: { from: '/checkout' } })
      return
    }
    navigate('/checkout')
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          />
          <motion.div
            className={styles.sidebar}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            <div className={styles.header}>
              <h3 className={styles.title}>
                <ShoppingCart size={20} />
                {t('cart.title')} ({count})
              </h3>
              <button className={styles.closeBtn} onClick={handleClose} aria-label={t('common.close')}>
                <X size={20} />
              </button>
            </div>

            <div className={styles.content}>
              {items.length === 0 ? (
                <div className={styles.empty}>
                  <ShoppingCart size={48} strokeWidth={1.5} />
                  <p>{t('cart.emptyTitle')}</p>
                  <Button variant="secondary" onClick={handleClose}>
                    {t('cart.continueShopping')}
                  </Button>
                </div>
              ) : (
                <ul className={styles.items}>
                  <AnimatePresence>
                    {items.map((item) => (
                      <motion.li
                        key={`${item.id}-${item.variant}`}
                        className={styles.item}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                      >
                        <img src={item.image} alt={item.name} className={styles.itemImage} />
                        <div className={styles.itemDetails}>
                          <h4 className={styles.itemName}>{item.name}</h4>
                          {item.variant && <span className={styles.itemVariant}>{item.variant}</span>}
                          <span className={styles.itemPrice}>${item.price.toFixed(2)}</span>
                          <div className={styles.quantity}>
                            <button onClick={() => dispatch(updateQuantity({ id: item.id, variant: item.variant, quantity: item.quantity - 1 }))}>
                              <Minus size={14} />
                            </button>
                            <span>{item.quantity}</span>
                            <button onClick={() => dispatch(updateQuantity({ id: item.id, variant: item.variant, quantity: item.quantity + 1 }))}>
                              <Plus size={14} />
                            </button>
                          </div>
                        </div>
                        <button
                          className={styles.removeBtn}
                          onClick={() => dispatch(removeFromCart({ id: item.id, variant: item.variant }))}
                          aria-label={t('common.remove')}
                        >
                          <Trash2 size={16} />
                        </button>
                      </motion.li>
                    ))}
                  </AnimatePresence>
                </ul>
              )}
            </div>

            {items.length > 0 && (
              <div className={styles.footer}>
                <div className={styles.subtotal}>
                  <span>{t('cart.subtotal')}</span>
                  <span className={styles.total}>${total.toFixed(2)}</span>
                </div>
                <Button variant="primary" fullWidth size="large" onClick={handleProceedToCheckout}>
                  {t('cart.checkout')} <ArrowRight size={18} />
                </Button>
                {!isAuthenticated && (
                  <p className={styles.authNotice}>
                    <Lock size={12} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 4 }} />
                    {t('checkout.authNoticeShort')}
                  </p>
                )}
                <Link to="/cart" className={styles.viewCart} onClick={handleClose}>
                  {t('cart.viewCart')}
                </Link>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default CartSidebar