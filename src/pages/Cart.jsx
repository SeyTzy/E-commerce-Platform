import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '../components/common'
import { selectCartItems, selectCartTotal, selectCartOriginalTotal, removeFromCart, updateQuantity, clearCart } from '../redux/slices/cartSlice'
import { coupons } from '../data/products'
import styles from './Cart.module.css'

const Cart = () => {
  const dispatch = useDispatch()
  const items = useSelector(selectCartItems)
  const subtotal = useSelector(selectCartTotal)
  const originalTotal = useSelector(selectCartOriginalTotal)
  const savings = originalTotal - subtotal
  const shipping = subtotal > 100 ? 0 : 9.99
  const total = subtotal + shipping

  return (
    <div className={styles.cart}>
      <div className={styles.container}>
        <h1>Shopping Cart</h1>

        {items.length === 0 ? (
          <div className={styles.empty}>
            <ShoppingBag size={64} strokeWidth={1.5} />
            <h2>Your cart is empty</h2>
            <p>Looks like you haven't added any items yet.</p>
            <Link to="/shop">
              <Button variant="primary" size="large">
                Continue Shopping
              </Button>
            </Link>
          </div>
        ) : (
          <div className={styles.content}>
            <div className={styles.items}>
              <div className={styles.header}>
                <span>Product</span>
                <span>Price</span>
                <span>Quantity</span>
                <span>Total</span>
              </div>
              
              {items.map((item, i) => (
                <motion.div 
                  key={`${item.id}-${item.variant}`}
                  className={styles.item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <div className={styles.product}>
                    <img src={item.image} alt={item.name} />
                    <div>
                      <h4>{item.name}</h4>
                      {item.variant && <span>{item.variant}</span>}
                    </div>
                  </div>
                  <span className={styles.price}>${item.price.toFixed(2)}</span>
                  <div className={styles.quantity}>
                    <button onClick={() => dispatch(updateQuantity({ id: item.id, variant: item.variant, quantity: item.quantity - 1 }))}>
                      <Minus size={14} />
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => dispatch(updateQuantity({ id: item.id, variant: item.variant, quantity: item.quantity + 1 }))}>
                      <Plus size={14} />
                    </button>
                  </div>
                  <div className={styles.total}>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                    <button onClick={() => dispatch(removeFromCart({ id: item.id, variant: item.variant }))}>
                      <Trash2 size={16} />
                    </button>
                  </div>
                </motion.div>
              ))}

              <div className={styles.footer}>
                <Button variant="ghost" onClick={() => dispatch(clearCart())}>
                  Clear Cart
                </Button>
                <Link to="/shop">
                  <Button variant="secondary">
                    Continue Shopping
                  </Button>
                </Link>
              </div>
            </div>

            <div className={styles.summary}>
              <h3>Order Summary</h3>
              
              <div className={styles.summaryRow}>
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              
              {savings > 0 && (
                <div className={`${styles.summaryRow} ${styles.savings}`}>
                  <span>Savings</span>
                  <span>-${savings.toFixed(2)}</span>
                </div>
              )}
              
              <div className={styles.summaryRow}>
                <span>Shipping</span>
                <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
              </div>
              
              <div className={styles.summaryRow}>
                <span>Tax</span>
                <span>$0.00</span>
              </div>

              <div className={styles.divider} />
              
              <div className={`${styles.summaryRow} ${styles.total}`}>
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <Link to="/checkout">
                <Button variant="primary" fullWidth size="large">
                  Proceed to Checkout <ArrowRight size={18} />
                </Button>
              </Link>

              <div className={styles.coupons}>
                <h4>Available Coupons</h4>
                <div className={styles.couponList}>
                  {coupons.map(coupon => (
                    <div key={coupon.code} className={styles.coupon}>
                      <span className={styles.couponCode}>{coupon.code}</span>
                      <span>
                        {coupon.type === 'percentage' ? `${coupon.discount}% off` : `$${coupon.discount} off`}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart