import { useParams, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { ArrowLeft, Package, Truck, Check, Clock, MapPin, CreditCard, X } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button, Badge } from '../components/common'
import { selectOrders } from '../redux/slices/orderSlice'
import styles from './OrderDetail.module.css'

const OrderDetail = () => {
  const { id } = useParams()
  const orders = useSelector(selectOrders)
  const order = orders.find(o => o.id === id)

  if (!order) {
    return (
      <div className={styles.notFound}>
        <Package size={64} strokeWidth={1.5} />
        <h2>Order Not Found</h2>
        <p>The order you're looking for doesn't exist.</p>
        <Link to="/orders">
          <Button variant="primary">View All Orders</Button>
        </Link>
      </div>
    )
  }

  const statusSteps = [
    { status: 'processing', label: 'Order Placed', icon: <Clock size={16} /> },
    { status: 'shipped', label: 'Shipped', icon: <Truck size={16} /> },
    { status: 'delivered', label: 'Delivered', icon: <Check size={16} /> }
  ]

  const getStatusIndex = (status) => {
    if (status === 'processing') return 0
    if (status === 'shipped') return 1
    if (status === 'delivered') return 2
    if (status === 'cancelled') return -1
    return 0
  }

  const currentStatusIndex = getStatusIndex(order.status)
  const isCancelled = order.status === 'cancelled'

  return (
    <div className={styles.orderDetail}>
      <div className={styles.container}>
        <Link to="/orders" className={styles.back}>
          <ArrowLeft size={18} /> Back to Orders
        </Link>

        <div className={styles.header}>
          <div>
            <h1>Order #{order.id}</h1>
            <p>Placed on {new Date(order.createdAt).toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</p>
          </div>
          <div className={`${styles.status} ${styles[order.status]}`}>
            {order.status === 'cancelled' ? <X size={16} /> : statusSteps[currentStatusIndex]?.icon}
            {order.status}
          </div>
        </div>

        {!isCancelled && (
          <div className={styles.tracking}>
            <h3>Order Tracking</h3>
            <div className={styles.steps}>
              {statusSteps.map((step, i) => (
                <div key={step.status} className={`${styles.step} ${i <= currentStatusIndex ? styles.active : ''}`}>
                  <div className={styles.stepIcon}>{step.icon}</div>
                  <span>{step.label}</span>
                  {i < statusSteps.length - 1 && <div className={`${styles.stepLine} ${i < currentStatusIndex ? styles.completed : ''}`} />}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className={styles.content}>
          <div className={styles.items}>
            <h3>Items ({order.items?.length || 0})</h3>
            <div className={styles.itemsList}>
              {order.items?.map((item, i) => (
                <motion.div
                  key={`${item.id}-${i}`}
                  className={styles.item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <img src={item.image} alt={item.name} />
                  <div className={styles.itemInfo}>
                    <h4>{item.name}</h4>
                    {item.variant && <span>Variant: {item.variant}</span>}
                    <span>Qty: {item.quantity}</span>
                  </div>
                  <span className={styles.itemPrice}>${(item.price * item.quantity).toFixed(2)}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className={styles.details}>
            <div className={styles.detailCard}>
              <h4><MapPin size={18} /> Shipping Address</h4>
              <p>{order.shipping?.firstName} {order.shipping?.lastName}</p>
              <p>{order.shipping?.address}</p>
              <p>{order.shipping?.city}, {order.shipping?.state} {order.shipping?.zip}</p>
              <p>{order.shipping?.phone}</p>
            </div>

            <div className={styles.detailCard}>
              <h4><CreditCard size={18} /> Payment Method</h4>
              <p>Card ending in {order.payment?.last4 || '****'}</p>
              <p>Status: <Badge variant="success">Paid</Badge></p>
            </div>

            <div className={styles.summary}>
              <h4>Order Summary</h4>
              <div className={styles.summaryRow}>
                <span>Subtotal</span>
                <span>${order.subtotal?.toFixed(2)}</span>
              </div>
              {order.discount > 0 && (
                <div className={`${styles.summaryRow} ${styles.discount}`}>
                  <span>Discount</span>
                  <span>-${order.discount?.toFixed(2)}</span>
                </div>
              )}
              <div className={styles.summaryRow}>
                <span>Shipping</span>
                <span>{order.shippingCost === 0 ? 'Free' : `$${order.shipping?.toFixed(2)}`}</span>
              </div>
              <div className={`${styles.summaryRow} ${styles.total}`}>
                <span>Total</span>
                <span>${order.total?.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderDetail