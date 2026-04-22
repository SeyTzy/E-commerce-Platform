import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Package, ChevronRight, Clock, Check, Truck, X } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '../components/common'
import { selectOrders } from '../redux/slices/orderSlice'
import styles from './Orders.module.css'

const Orders = () => {
  const orders = useSelector(selectOrders)

  const getStatusIcon = (status) => {
    switch (status) {
      case 'processing': return <Clock size={16} />
      case 'shipped': return <Truck size={16} />
      case 'delivered': return <Check size={16} />
      case 'cancelled': return <X size={16} />
      default: return <Package size={16} />
    }
  }

  const getStatusClass = (status) => {
    switch (status) {
      case 'processing': return styles.processing
      case 'shipped': return styles.shipped
      case 'delivered': return styles.delivered
      case 'cancelled': return styles.cancelled
      default: return ''
    }
  }

  return (
    <div className={styles.orders}>
      <div className={styles.container}>
        <h1>My Orders</h1>

        {orders.length === 0 ? (
          <div className={styles.empty}>
            <Package size={64} strokeWidth={1.5} />
            <h2>No orders yet</h2>
            <p>Start shopping to see your orders here</p>
            <Link to="/shop">
              <Button variant="primary" size="large">
                Start Shopping
              </Button>
            </Link>
          </div>
        ) : (
          <div className={styles.list}>
            {orders.map((order, i) => (
              <motion.div
                key={order.id}
                className={styles.order}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <div className={styles.orderHeader}>
                  <div>
                    <span className={styles.orderId}>Order #{order.id}</span>
                    <span className={styles.orderDate}>
                      {new Date(order.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  <div className={`${styles.status} ${getStatusClass(order.status)}`}>
                    {getStatusIcon(order.status)}
                    {order.status}
                  </div>
                </div>

                <div className={styles.items}>
                  {order.items?.slice(0, 3).map((item, idx) => (
                    <img key={idx} src={item.image} alt={item.name} />
                  ))}
                  {order.items?.length > 3 && (
                    <div className={styles.more}>+{order.items.length - 3}</div>
                  )}
                </div>

                <div className={styles.orderFooter}>
                  <div className={styles.total}>
                    <span>Total</span>
                    <span>${order.total?.toFixed(2)}</span>
                  </div>
                  <Link to={`/orders/${order.id}`}>
                    <Button variant="ghost" size="small">
                      View Details <ChevronRight size={16} />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Orders