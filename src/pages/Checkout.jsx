import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import {
  CreditCard, Truck, Check, ArrowLeft, Shield, MapPin,
  ChevronRight, ChevronLeft, Package, Percent, Smartphone
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import toast from 'react-hot-toast'
import { Button, Input } from '../components/common'
import { selectCartItems, selectCartTotal, selectCartOriginalTotal, clearCart } from '../redux/slices/cartSlice'
import { addOrder } from '../redux/slices/orderSlice'
import { coupons } from '../data/products'
import styles from './Checkout.module.css'

const STEPS = [
  { num: 1, icon: MapPin, label: 'Shipping' },
  { num: 2, icon: CreditCard, label: 'Payment' },
  { num: 3, icon: Check, label: 'Review' }
]

const Checkout = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const [couponCode, setCouponCode] = useState('')
  const [appliedCoupon, setAppliedCoupon] = useState(null)

  const [cardPreview, setCardPreview] = useState({
    number: '',
    name: '',
    expiry: '',
    cvv: ''
  })
  const [paymentMethod, setPaymentMethod] = useState('card')

  const { register, handleSubmit, formState: { errors } } = useForm()

  const items = useSelector(selectCartItems)
  const subtotal = useSelector(selectCartTotal)
  const originalTotal = useSelector(selectCartOriginalTotal)

  if (items.length === 0) {
    return (
      <div className={styles.empty}>
        <Package size={48} className={styles.emptyIcon} />
        <h2>មិនទាន់មានទំនិញនៅក្នុងកន្ត្រក</h2>
        <p>បន្ថែមទំនិញ ដើម្បីចាប់ផ្តើម</p>
        <Link to="/shop">
          <Button>បន្តទិញទំនិញ</Button>
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

  const formatCardNumber = (value) => {
    const digits = value.replace(/\D/g, '').slice(0, 16)
    return digits.replace(/(\d{4})(?=\d)/g, '$1 ')
  }

  const detectCardBrand = (number) => {
    const clean = number.replace(/\s/g, '')
    if (/^4/.test(clean)) return 'Visa'
    if (/^5[1-5]/.test(clean)) return 'Mastercard'
    if (/^3[47]/.test(clean)) return 'Amex'
    if (/^6(?:011|5)/.test(clean)) return 'Discover'
    return ''
  }

  const onSubmit = (data) => {
    const payment = paymentMethod === 'card'
      ? { method: 'card', last4: cardPreview.number.replace(/\s/g, '').slice(-4) || '4242' }
      : { method: 'qr' }
    const order = {
      id: `ORD-${Date.now()}`,
      items,
      shipping: data,
      payment,
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

  const slideVariants = {
    enter: { opacity: 0, x: 30 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -30 }
  }

  return (
    <div className={styles.checkout}>
      <div className={styles.container}>
        <Link to="/cart" className={styles.back}>
          <ArrowLeft size={18} /> Back to Cart
        </Link>

        <div className={styles.steps}>
          {STEPS.map((s, i) => {
            const Icon = s.icon
            const isActive = step >= s.num
            const isComplete = step > s.num
            return (
              <div key={s.num} className={`${styles.step} ${isActive ? styles.active : ''} ${isComplete ? styles.complete : ''}`}>
                <div className={styles.stepIndicator}>
                  {isComplete ? (
                    <div className={styles.stepCheck}><Check size={16} /></div>
                  ) : (
                    <Icon size={18} />
                  )}
                </div>
                <div className={styles.stepInfo}>
                  <span className={styles.stepLabel}>Step {s.num}</span>
                  <span className={styles.stepTitle}>{s.label}</span>
                </div>
                {i < STEPS.length - 1 && (
                  <div className={`${styles.stepConnector} ${isComplete ? styles.connectorActive : ''}`} />
                )}
              </div>
            )
          })}
        </div>

        <div className={styles.content}>
          <div className={styles.formSection}>
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="shipping"
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <div className={styles.sectionHeader}>
                    <Truck size={22} />
                    <h2>អាសយដ្ឋានទទួលទំនិញ</h2>
                  </div>
                  <div className={styles.form}>
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
                    <div className={styles.formActions}>
                      <span />
                      <Button variant="primary" size="large" onClick={() => setStep(2)}>
                        បន្តទៅការបង់ប្រាក់ <ChevronRight size={18} />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="payment"
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <div className={styles.sectionHeader}>
                    <CreditCard size={22} />
                    <h2>ជ្រើសរើសវិធីបង់ប្រាក់</h2>
                  </div>

                  <div className={styles.paymentMethods}>
                    <div
                      className={`${styles.paymentMethod} ${paymentMethod === 'card' ? styles.paymentMethodActive : ''}`}
                      onClick={() => setPaymentMethod('card')}
                    >
                      <div className={styles.paymentMethodIcon}>
                        <CreditCard size={24} />
                      </div>
                      <div className={styles.paymentMethodInfo}>
                        <span className={styles.paymentMethodTitle}>Visa Card</span>
                        <span className={styles.paymentMethodDesc}>បង់ប្រាក់តាមកាតឥណទាន ឬឥណពន្ធ</span>
                      </div>
                      <div className={`${styles.paymentRadio} ${paymentMethod === 'card' ? styles.paymentRadioActive : ''}`} />
                    </div>

                    <div
                      className={`${styles.paymentMethod} ${paymentMethod === 'qr' ? styles.paymentMethodActive : ''}`}
                      onClick={() => setPaymentMethod('qr')}
                    >
                      <div className={styles.paymentMethodIcon}>
                        <Smartphone size={24} />
                      </div>
                      <div className={styles.paymentMethodInfo}>
                        <span className={styles.paymentMethodTitle}>Scan QR</span>
                        <span className={styles.paymentMethodDesc}>ស្កេន QR ដើម្បីបង់ប្រាក់</span>
                      </div>
                      <div className={`${styles.paymentRadio} ${paymentMethod === 'qr' ? styles.paymentRadioActive : ''}`} />
                    </div>
                  </div>

                  {paymentMethod === 'card' ? (
                    <>
                      <div className={styles.cardPreview}>
                        <div className={styles.cardArt}>
                          <div className={styles.cardChip} />
                          <div className={styles.cardBrand}>
                            {detectCardBrand(cardPreview.number) || 'Card'}
                          </div>
                          <div className={styles.cardNumber}>
                            {cardPreview.number || '•••• •••• •••• ••••'}
                          </div>
                          <div className={styles.cardFooter}>
                            <div>
                              <span className={styles.cardLabel}>Card Holder</span>
                              <span className={styles.cardValue}>{cardPreview.name || 'Your Name'}</span>
                            </div>
                            <div>
                              <span className={styles.cardLabel}>Expiry</span>
                              <span className={styles.cardValue}>{cardPreview.expiry || 'MM/YY'}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className={styles.form}>
                        <div className={styles.cardBrandRow}>
                          {['Visa', 'Mastercard', 'Amex', 'Discover'].map(brand => (
                            <div
                              key={brand}
                              className={`${styles.brandBadge} ${detectCardBrand(cardPreview.number) === brand ? styles.brandActive : ''}`}
                            >
                              {brand}
                            </div>
                          ))}
                        </div>
                        <Input
                          label="Card Number"
                          placeholder="1234 5678 9012 3456"
                          value={cardPreview.number}
                          onChange={(e) => setCardPreview(prev => ({ ...prev, number: formatCardNumber(e.target.value) }))}
                          error={errors.cardNumber?.message}
                          {...register('cardNumber', { required: 'Card number is required' })}
                        />
                        <div className={styles.row}>
                          <Input
                            label="Expiry Date"
                            placeholder="MM/YY"
                            value={cardPreview.expiry}
                            onChange={(e) => setCardPreview(prev => ({ ...prev, expiry: e.target.value }))}
                            error={errors.expiry?.message}
                            {...register('expiry', { required: 'Expiry is required' })}
                          />
                          <Input
                            label="CVV"
                            placeholder="123"
                            value={cardPreview.cvv}
                            onChange={(e) => setCardPreview(prev => ({ ...prev, cvv: e.target.value }))}
                            error={errors.cvv?.message}
                            {...register('cvv', { required: 'CVV is required' })}
                            type="password"
                          />
                        </div>
                        <Input
                          label="Name on Card"
                          value={cardPreview.name}
                          onChange={(e) => setCardPreview(prev => ({ ...prev, name: e.target.value }))}
                          error={errors.cardName?.message}
                          {...register('cardName', { required: 'Name is required' })}
                        />
                        <div className={styles.secureBadge}>
                          <Shield size={16} />
                          <span>ព័ត៌មានបង់ប្រាក់របស់អ្នកត្រូវបានថេរក្សា និងមានសុវត្ថិភាពខ្ពស់</span>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className={styles.qrDisplay}>
                      <div className={styles.qrCode}>
                        <img src="/assets/images/QR.jpg" alt="Scan QR to pay" className={styles.qrImage} />
                      </div>
                      <div className={styles.qrInstructions}>
                        <h3>ស្កេន QR ដើម្បីបង់ប្រាក់</h3>
                        <p>ប្រើកម្មវិធីធនាគាររបស់អ្នកដើម្បីស្កេន QR ខាងលើ</p>
                      </div>
                      <div className={styles.qrSteps}>
                        <div className={styles.qrStep}>
                          <span className={styles.qrStepNum}>1</span>
                          <span>បើកកម្មវិធីធនាគាររបស់អ្នក</span>
                        </div>
                        <div className={styles.qrStep}>
                          <span className={styles.qrStepNum}>2</span>
                          <span>ជ្រើសរើស "ស្កេន QR"</span>
                        </div>
                        <div className={styles.qrStep}>
                          <span className={styles.qrStepNum}>3</span>
                          <span>ស្កេន QR នេះ និងបញ្ជាក់ការបង់ប្រាក់</span>
                        </div>
                      </div>
                      <div className={styles.qrNote}>
                        <Shield size={14} />
                        <span>ការទូទាត់របស់អ្នកត្រូវបានអ៊ិនគ្រីប និងមានសុវត្ថិភាព</span>
                      </div>
                    </div>
                  )}

                  <div className={styles.formActions}>
                    <Button variant="secondary" onClick={() => setStep(1)}>
                      <ChevronLeft size={18} /> ត្រឡប់ក្រោយ
                    </Button>
                    <Button variant="primary" size="large" onClick={() => setStep(3)}>
                      ពិនិត្យការបញ្ជាទិញឡើងវិញ <ChevronRight size={18} />
                    </Button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="review"
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <div className={styles.sectionHeader}>
                    <Check size={22} />
                    <h2>ពិនិត្យការបញ្ជាទិញ</h2>
                  </div>

                  <div className={styles.reviewSection}>
                    <div className={styles.reviewHeader}>
                      <div className={styles.reviewHeaderLeft}>
                        <MapPin size={16} />
                        <h3>អាសយដ្ឋានទទួលទំនិញ</h3>
                      </div>
                      <button className={styles.editBtn} onClick={() => setStep(1)}>Edit</button>
                    </div>
                    <div className={styles.reviewBody}>
                      <p><strong>Sok Dara</strong></p>
                      <p>120 Main Street</p>
                      <p>Phnom Penh, Cambodia 10001</p>
                      <p>+855 12 345 678</p>
                    </div>
                  </div>

                  <div className={styles.reviewSection}>
                    <div className={styles.reviewHeader}>
                      <div className={styles.reviewHeaderLeft}>
                        <CreditCard size={16} />
                        <h3>ជម្រើសបង់ប្រាក់</h3>
                      </div>
                      <button className={styles.editBtn} onClick={() => setStep(2)}>Edit</button>
                    </div>
                    <div className={styles.reviewBody}>
                      {paymentMethod === 'card' ? (
                        <>
                          <p>
                            {detectCardBrand(cardPreview.number) || 'Card'} ending in {cardPreview.number.replace(/\s/g, '').slice(-4) || '4242'}
                          </p>
                          <p className={styles.reviewSub}>Expires {cardPreview.expiry || '12/26'}</p>
                        </>
                      ) : (
                        <>
                          <p>QR Code Payment</p>
                          <p className={styles.reviewSub}>Scan QR with your banking app</p>
                        </>
                      )}
                    </div>
                  </div>

                  <div className={styles.reviewSection}>
                    <div className={styles.reviewHeader}>
                      <div className={styles.reviewHeaderLeft}>
                        <Package size={16} />
                        <h3>ទំនិញ ({items.length})</h3>
                      </div>
                    </div>
                    <div className={styles.reviewBody}>
                      {items.map(item => (
                        <div key={item.id} className={styles.reviewItem}>
                          <img src={item.image} alt={item.name} />
                          <div className={styles.reviewItemInfo}>
                            <h4>{item.name}</h4>
                            <span>ចំនួន: {item.quantity}</span>
                          </div>
                          <span className={styles.reviewItemPrice}>
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <form onSubmit={handleSubmit(onSubmit)} className={styles.reviewActions}>
                    <Button variant="secondary" onClick={() => setStep(2)}>
                      <ChevronLeft size={18} /> ត្រឡប់ក្រោយ
                    </Button>
                    <Button variant="primary" size="large" type="submit">
                      Place Order — ${total.toFixed(2)}
                    </Button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className={styles.summary}>
            <h3>សរុបការបញ្ជាទិញ</h3>

            <div className={styles.summaryItems}>
              {items.map(item => (
                <div key={item.id} className={styles.summaryItem}>
                  <img src={item.image} alt={item.name} />
                  <div>
                    <h4>{item.name}</h4>
                    <span>ចំនួន: {item.quantity}</span>
                  </div>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>

            <div className={styles.coupon}>
              <Percent size={16} />
              <input
                type="text"
                placeholder="Enter coupon code"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
              />
              <Button variant="secondary" size="small" onClick={handleApplyCoupon}>
                Apply
              </Button>
            </div>

            <div className={styles.summaryDivider} />
            <div className={styles.summaryRow}>
              <span>សរុប</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            {savings > 0 && (
              <div className={`${styles.summaryRow} ${styles.savings}`}>
                <span>សន្សំសម្ចៃ</span>
                <span>-${savings.toFixed(2)}</span>
              </div>
            )}
            {discount > 0 && (
              <div className={`${styles.summaryRow} ${styles.discount}`}>
                <span>បញ្ចុះតំលៃ ({appliedCoupon?.code})</span>
                <span>-${discount.toFixed(2)}</span>
              </div>
            )}
            <div className={styles.summaryRow}>
              <span>ដឹកជញ្ជួន</span>
              <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
            </div>
            <div className={styles.summaryDivider} />
            <div className={styles.summaryTotal}>
              <span>សរុប</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
