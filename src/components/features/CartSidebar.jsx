import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { selectIsSidebarOpen, setSidebarOpen } from '../../redux/slices/uiSlice'
import { selectCartItems, selectCartTotal, removeFromCart, updateQuantity, selectCartCount } from '../../redux/slices/cartSlice'
import { Button } from '../common'
import styles from './CartSidebar.module.css'

const CartSidebar = () => {
  const dispatch = useDispatch()
  const isOpen = useSelector(selectIsSidebarOpen)
  const items = useSelector(selectCartItems)
  const total = useSelector(selectCartTotal)
  const count = useSelector(selectCartCount)

  const handleClose = () => dispatch(setSidebarOpen(false))

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
                <ShoppingBag size={20} />
                Your Cart ({count})
              </h3>
              <button className={styles.closeBtn} onClick={handleClose}>
                <X size={20} />
              </button>
            </div>

            <div className={styles.content}>
              {items.length === 0 ? (
                <div className={styles.empty}>
                  <ShoppingBag size={48} strokeWidth={1.5} />
                  <p>Your cart is empty</p>
                  <Button variant="secondary" onClick={handleClose}>
                    Continue Shopping
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
                  <span>Subtotal</span>
                  <span className={styles.total}>${total.toFixed(2)}</span>
                </div>
                <p className={styles.note}>Shipping & taxes calculated at checkout</p>
                <Link to="/checkout" onClick={handleClose}>
                  <Button variant="primary" fullWidth size="large">
                    Checkout <ArrowRight size={18} />
                  </Button>
                </Link>
                <Link to="/cart" className={styles.viewCart} onClick={handleClose}>
                  View Cart
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