import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Users, Package, ShoppingBag, DollarSign, TrendingUp, TrendingDown, Plus, Edit, Trash2 } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button, Badge } from '../components/common'
import { selectIsAdmin } from '../redux/slices/authSlice'
import { selectOrders } from '../redux/slices/orderSlice'
import { products } from '../data/products'
import styles from './Admin.module.css'

const Admin = () => {
  const isAdmin = useSelector(selectIsAdmin)
  const orders = useSelector(selectOrders)
  const [activeTab, setActiveTab] = useState('dashboard')

  if (!isAdmin) {
    return (
      <div className={styles.admin}>
        <div className={styles.container}>
          <div className={styles.restricted}>
            <h2>ទាមទារការអនុញ្ញាតពី Admin</h2>
            <p>អ្នកត្រូវការសិទ្ធិ admin ដើម្បីមើលទំព័រនេះ</p>
            <Link to="/">
              <Button variant="primary">ទំព័រដើម</Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const stats = [
    { label: 'Total Users', value: '1,234', icon: <Users size={20} />, trend: '+12%', up: true },
    { label: 'Products', value: products.length, icon: <Package size={20} />, trend: '+3', up: true },
    { label: 'Orders', value: orders.length || 24, icon: <ShoppingBag size={20} />, trend: '+8%', up: true },
    { label: 'Revenue', value: '$12,345', icon: <DollarSign size={20} />, trend: '+15%', up: true }
  ]

  const tabs = ['dashboard', 'products', 'orders', 'users']

  return (
    <div className={styles.admin}>
      <div className={styles.container}>
        <h1>Admin Dashboard</h1>

        <div className={styles.statsGrid}>
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className={styles.statCard}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <div className={styles.statIcon}>{stat.icon}</div>
              <div className={styles.statInfo}>
                <span className={styles.statLabel}>{stat.label}</span>
                <span className={styles.statValue}>{stat.value}</span>
              </div>
              <div className={`${styles.statTrend} ${stat.up ? styles.up : styles.down}`}>
                {stat.up ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                {stat.trend}
              </div>
            </motion.div>
          ))}
        </div>

        <div className={styles.tabs}>
          {tabs.map(tab => (
            <button
              key={tab}
              className={activeTab === tab ? styles.active : ''}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        <div className={styles.tabContent}>
          {activeTab === 'dashboard' && (
            <div className={styles.dashboard}>
              <div className={styles.chart}>
                <h3>Recent Orders</h3>
                <p>Chart visualization would go here</p>
              </div>
              <div className={styles.recentOrders}>
                <h3>Latest Orders</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Order ID</th>
                      <th>Customer</th>
                      <th>Status</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>#ORD-001</td>
                      <td>Dara</td>
                      <td><Badge variant="success">កំពុងដំណើរការ...</Badge></td>
                      <td>$299.99</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'products' && (
            <div className={styles.tableContainer}>
              <div className={styles.tableHeader}>
                <h3>Products ({products.length})</h3>
                <Button variant="primary">
                  <Plus size={18} /> Add Product
                </Button>
              </div>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.slice(0, 8).map(product => (
                    <tr key={product.id}>
                      <td className={styles.productCell}>
                        <img src={product.images[0]} alt={product.name} />
                        <span>{product.name}</span>
                      </td>
                      <td>{product.category}</td>
                      <td>${product.price.toFixed(2)}</td>
                      <td>
                        <Badge variant={product.stock > 10 ? 'success' : product.stock > 0 ? 'warning' : 'error'}>
                          {product.stock}
                        </Badge>
                      </td>
                      <td>
                        <div className={styles.actions}>
                          <button><Edit size={16} /></button>
                          <button><Trash2 size={16} /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'orders' && (
            <div className={styles.tableContainer}>
              <h3>កម្មង់</h3>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Customer</th>
                    <th>Items</th>
                    <th>Total</th>
                    <th>Status</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>#ORD-001</td>
                    <td>Dara</td>
                    <td>2 items</td>
                    <td>$299.99</td>
                    <td><Badge variant="success">កំពុងដំណើរការ...</Badge></td>
                    <td>Jan 15, 2026</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'users' && (
            <div className={styles.tableContainer}>
              <h3>អ្នកប្រើប្រាស់</h3>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>អ្នកប្រើប្រាស់</th>
                    <th>អ៊ីមែល</th>
                    <th>តួនាទី</th>
                    <th>ចូលរួម</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Admin</td>
                    <td>admin@luxecart.com</td>
                    <td><Badge variant="primary">Admin</Badge></td>
                    <td>Jan 1, 2026</td>
                  </tr>
                  <tr>
                    <td>Demo User</td>
                    <td>demo@luxecart.com</td>
                    <td><Badge>User</Badge></td>
                    <td>Jan 5, 2026</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Admin