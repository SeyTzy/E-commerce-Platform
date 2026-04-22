import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { CreditCard, Truck as ShippingIcon, Check, ArrowLeft } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import toast from 'react-hot-toast'
import { Button, Input, Select } from '../components/common'
import { selectCartItems, selectCartTotal, selectCartOriginalTotal, clearCart } from '../redux/slices/cartSlice'
import { addOrder } from '../redux/slices/orderSlice'
import { coupons } from '../data/products'
import styles from './Checkout.module.css'

const Checkout = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const [couponCode, setCouponCode] = useState('')
  const [appliedCoupon, setAppliedCoupon] = useState(null)
  const { register, handleSubmit, formState: { errors } } = useForm()

  const items = useSelector(selectCartItems)
  const subtotal = useSelector(selectCartTotal)
  const originalTotal = useSelector(selectCartOriginalTotal)

  if (items.length === 0) {
    return (
      <div className={styles.empty}>
        <h2>Your cart is empty</h2>
        <Link to="/shop">
          <Button>Continue Shopping</Button>
        </Link>
      </div>
    )
  }

  const savings = originalTotal - subtotal
  const discount = appliedCoupon 
    ? (appliedCoupon.type === 'percentage' ? (subtotal * appliedCoupon.discount) / 100 : appliedCoupon.discount)
    : 0
  const shipping = subtotal > 100 ? 0 : 9.99
  const total = subtotal - discount + shipping

  const handleApplyCoupon = () => {
    const coupon = coupons.find(c => c.code.toUpperCase() === couponCode.toUpperCase())
    if (coupon) {
      if (subtotal >= coupon.minOrder) {
        setAppliedCoupon(coupon)
        toast.success(`Coupon ${coupon.code} applied!`)
      } else {
        toast.error(`Minimum order $${coupon.minOrder} required`)
      }
    } else {
      toast.error('Invalid coupon code')
    }
  }

  const onSubmit = (data) => {
    const order = {
      id: `ORD-${Date.now()}`,
      items: items,
      shipping: data,
      payment: { method: 'card', last4: '4242' },
      subtotal,
      discount,
      shippingCost: shipping,
      total,
      status: 'processing',
      createdAt: new Date().toISOString()
    }

    dispatch(addOrder(order))
    dispatch(clearCart())
    toast.success('Order placed successfully!')
    navigate('/orders')
  }

  const steps = [
    { num: 1, icon: <ShippingIcon size={18} />, label: 'Shipping' },
    { num: 2, icon: <CreditCard size={18} />, label: 'Payment' },
    { num: 3, icon: <Check size={18} />, label: 'Review' }
  ]

  return (
    <div className={styles.checkout}>
      <div className={styles.container}>
        <Link to="/cart" className={styles.back}>
          <ArrowLeft size={18} /> Back to Cart
        </Link>

        <div className={styles.steps}>
          {steps.map((s, i) => (
            <div key={s.num} className={`${styles.step} ${step >= s.num ? styles.active : ''}`}>
              <div className={styles.stepNum}>
                {step > s.num ? <Check size={16} /> : s.num}
              </div>
              <span>{s.label}</span>
              {i < steps.length - 1 && <div className={styles.stepLine} />}
            </div>
          ))}
        </div>

        <div className={styles.content}>
          <div className={styles.formSection}>
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="shipping"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h2>Shipping Information</h2>
                  <form className={styles.form}>
                    <div className={styles.row}>
                      <Input
                        label="First Name"
                        error={errors.firstName?.message}
                        {...register('firstName', { required: 'First name is required' })}
                      />
                      <Input
                        label="Last Name"
                        error={errors.lastName?.message}
                        {...register('lastName', { required: 'Last name is required' })}
                      />
                    </div>
                    <Input
                      label="Address"
                      error={errors.address?.message}
                      {...register('address', { required: 'Address is required' })}
                    />
                    <div className={styles.row}>
                      <Input
                        label="City"
                        error={errors.city?.message}
                        {...register('city', { required: 'City is required' })}
                      />
                      <Input
                        label="State"
                        error={errors.state?.message}
                        {...register('state', { required: 'State is required' })}
                      />
                    </div>
                    <div className={styles.row}>
                      <Input
                        label="ZIP Code"
                        error={errors.zip?.message}
                        {...register('zip', { required: 'ZIP code is required' })}
                      />
                      <Input
                        label="Phone"
                        type="tel"
                        error={errors.phone?.message}
                        {...register('phone', { required: 'Phone is required' })}
                      />
                    </div>
                    <Button variant="primary" size="large" fullWidth onClick={() => setStep(2)}>
                      Continue to Payment
                    </Button>
                  </form>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="payment"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h2>Payment Method</h2>
                  <div className={styles.paymentMethods}>
                    <div className={styles.paymentMethod}>
                      <input type="radio" name="payment" id="card" defaultChecked />
                      <label htmlFor="card">
                        <CreditCard size={20} />
                        Credit/Debit Card
                      </label>
                    </div>
                  </div>
                  <form className={styles.form}>
                    <Input
                      label="Card Number"
                      placeholder="1234 5678 9012 3456"
                      {...register('cardNumber', { required: 'Card number is required' })}
                    />
                    <div className={styles.row}>
                      <Input
                        label="Expiry Date"
                        placeholder="MM/YY"
                        {...register('expiry', { required: 'Expiry is required' })}
                      />
                      <Input
                        label="CVV"
                        placeholder="123"
                        {...register('cvv', { required: 'CVV is required' })}
                      />
                    </div>
                    <Input
                      label="Name on Card"
                      {...register('cardName', { required: 'Name is required' })}
                    />
                    <div className={styles.formActions}>
                      <Button variant="secondary" onClick={() => setStep(1)}>Back</Button>
                      <Button variant="primary" size="large" onClick={() => setStep(3)}>
                        Review Order
                      </Button>
                    </div>
                  </form>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="review"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h2>Review Your Order</h2>
                  <div className={styles.review}>
                    <h3>Shipping Address</h3>
                    <p>John Doe</p>
                    <p>123 Main Street</p>
                    <p>New York, NY 10001</p>
                  </div>
                  <div className={styles.review}>
                    <h3>Payment Method</h3>
                    <p>Card ending in 4242</p>
                  </div>
                  <div className={styles.review}>
                    <h3>Items ({items.length})</h3>
                    {items.map(item => (
                      <div key={item.id} className={styles.reviewItem}>
                        <img src={item.image} alt={item.name} />
                        <div>
                          <p>{item.name}</p>
                          <span>Qty: {item.quantity}</span>
                        </div>
                        <span>${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                  </div>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <Button variant="primary" size="large" fullWidth type="submit">
                      Place Order (${total.toFixed(2)})
                    </Button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className={styles.summary}>
            <h3>Order Summary</h3>
            
            <div className={styles.summaryItems}>
              {items.map(item => (
                <div key={item.id} className={styles.summaryItem}>
                  <img src={item.image} alt={item.name} />
                  <div>
                    <h4>{item.name}</h4>
                    <span>Qty: {item.quantity}</span>
                  </div>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>

            <div className={styles.coupon}>
              <input
                type="text"
                placeholder="Coupon code"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
              />
              <Button variant="secondary" size="small" onClick={handleApplyCoupon}>
                Apply
              </Button>
            </div>

            <div className={styles.summaryRow}>
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            
            {discount > 0 && (
              <div className={`${styles.summaryRow} ${styles.discount}`}>
                <span>Discount</span>
                <span>-${discount.toFixed(2)}</span>
              </div>
            )}
            
            <div className={styles.summaryRow}>
              <span>Shipping</span>
              <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
            </div>

            <div className={styles.summaryTotal}>
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout