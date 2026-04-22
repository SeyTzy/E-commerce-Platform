import { useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { LayoutDashboard, Package, Users, ShoppingCart, TrendingUp, TrendingDown, DollarSign, Package as PackageIcon, Camera, Upload } from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import { Button } from '../components/common'
import { selectIsAdmin, selectCurrentUser, updateUser } from '../redux/slices/authSlice'
import { products } from '../data/products'
import { Link } from 'react-router-dom'
import styles from './Account.module.css'

const Account = () => {
  const dispatch = useDispatch()
  const user = useSelector(selectCurrentUser)
  const isAdmin = useSelector(selectIsAdmin)
  const [activeTab, setActiveTab] = useState('overview')
  const [isUploading, setIsUploading] = useState(false)
  const [editingField, setEditingField] = useState(null)
  const [editValue, setEditValue] = useState('')
  const fileInputRef = useRef(null)

  const handleImageSelect = (e) => {
    const file = e.target.files[0]
    if (!file) return

    if (!file.type.startsWith('image/')) {
      toast.error('Please select an image file')
      return
    }

    if (file.size > 5 * 1024 * 1024) {
      toast.error('Image size must be less than 5MB')
      return
    }

    setIsUploading(true)
    const reader = new FileReader()
    reader.onload = (event) => {
      const imageUrl = event.target.result
      dispatch(updateUser({ photoURL: imageUrl }))
      toast.success('Profile image updated!')
      setIsUploading(false)
    }
    reader.onerror = () => {
      toast.error('Failed to read image')
      setIsUploading(false)
    }
    reader.readAsDataURL(file)
  }

  const startEdit = (field, currentValue) => {
    setEditingField(field)
    setEditValue(currentValue || '')
  }

  const cancelEdit = () => {
    setEditingField(null)
    setEditValue('')
  }

  const saveEdit = () => {
    if (!editValue.trim()) {
      toast.error('Value cannot be empty')
      return
    }

    if (editingField === 'name' && editValue.trim().length < 2) {
      toast.error('Name must be at least 2 characters')
      return
    }

    if (editingField === 'email') {
      const emailRegex = /^\S+@\S+\.\S+$/
      if (!emailRegex.test(editValue)) {
        toast.error('Invalid email format')
        return
      }
    }

    dispatch(updateUser({ [editingField]: editValue.trim() }))
    toast.success(`${editingField === 'name' ? 'Name' : 'Email'} updated!`)
    cancelEdit()
  }

  const getInitials = (name) => {
    if (!name) return '?'
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
  }

  if (!user) {
    return (
      <div className={styles.account}>
        <div className={styles.container}>
          <h1>Please sign in to view your account</h1>
          <Link to="/auth">
            <Button variant="primary">Sign In</Button>
          </Link>
        </div>
      </div>
    )
  }

  const stats = [
    { label: 'Total Orders', value: '12', icon: <ShoppingCart size={20} />, change: '+2' },
    { label: 'Total Spent', value: '$1,234', icon: <DollarSign size={20} />, change: '+$234' },
    { label: 'Items Purchased', value: '28', icon: <PackageIcon size={20} />, change: '+5' }
  ]

  const chartData = [
    { name: 'Jan', sales: 4000 },
    { name: 'Feb', sales: 3000 },
    { name: 'Mar', sales: 5500 },
    { name: 'Apr', sales: 4500 },
    { name: 'May', sales: 6000 },
    { name: 'Jun', sales: 5500 }
  ]

  return (
    <div className={styles.account}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.userInfo}>
            <div 
              className={styles.avatar}
              onClick={() => fileInputRef.current?.click()}
              style={{ cursor: 'pointer', position: 'relative' }}
            >
              {user.photoURL ? (
                <img src={user.photoURL} alt={user.name} />
              ) : (
                getInitials(user.name)
              )}
              <div className={styles.avatarOverlay}>
                <Camera size={16} />
              </div>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageSelect}
                accept="image/*"
                style={{ display: 'none' }}
              />
            </div>
            <div>
              <h1>Welcome, {user.name}</h1>
              <p>{user.email}</p>
            </div>
          </div>
        </div>

        <div className={styles.stats}>
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
              <div className={styles.statChange}>
                <TrendingUp size={14} /> {stat.change}
              </div>
            </motion.div>
          ))}
        </div>

        <div className={styles.tabs}>
          <button className={activeTab === 'overview' ? styles.active : ''} onClick={() => setActiveTab('overview')}>
            Overview
          </button>
          <button className={activeTab === 'orders' ? styles.active : ''} onClick={() => setActiveTab('orders')}>
            Orders
          </button>
          <button className={activeTab === 'settings' ? styles.active : ''} onClick={() => setActiveTab('settings')}>
            Settings
          </button>
        </div>

        {activeTab === 'overview' && (
          <div className={styles.tabContent}>
            <div className={styles.chartCard}>
              <h3>Monthly Spending</h3>
              <div className={styles.chart}>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                    <XAxis dataKey="name" stroke="var(--color-text-muted)" fontSize={12} />
                    <YAxis stroke="var(--color-text-muted)" fontSize={12} />
                    <Tooltip />
                    <Line type="monotone" dataKey="sales" stroke="var(--color-primary)" strokeWidth={2} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'orders' && (
          <div className={styles.tabContent}>
            <p className={styles.noData}>Your recent orders will appear here</p>
            <Link to="/orders">
              <Button variant="secondary">View All Orders</Button>
            </Link>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className={styles.tabContent}>
            <div className={styles.settingsGroup}>
              <h3>Account Settings</h3>
              <div className={styles.setting}>
                <div>
                  <h4>Name</h4>
                  {editingField === 'name' ? (
                    <input
                      type="text"
                      value={editValue}
                      onChange={(e) => setEditValue(e.target.value)}
                      className={styles.editInput}
                      autoFocus
                    />
                  ) : (
                    <p>{user.name}</p>
                  )}
                </div>
                {editingField === 'name' ? (
                  <div className={styles.editActions}>
                    <Button variant="ghost" size="small" onClick={cancelEdit}>Cancel</Button>
                    <Button variant="primary" size="small" onClick={saveEdit}>Save</Button>
                  </div>
                ) : (
                  <Button variant="ghost" size="small" onClick={() => startEdit('name', user.name)}>Edit</Button>
                )}
              </div>
              <div className={styles.setting}>
                <div>
                  <h4>Email</h4>
                  {editingField === 'email' ? (
                    <input
                      type="email"
                      value={editValue}
                      onChange={(e) => setEditValue(e.target.value)}
                      className={styles.editInput}
                      autoFocus
                    />
                  ) : (
                    <p>{user.email}</p>
                  )}
                </div>
                {editingField === 'email' ? (
                  <div className={styles.editActions}>
                    <Button variant="ghost" size="small" onClick={cancelEdit}>Cancel</Button>
                    <Button variant="primary" size="small" onClick={saveEdit}>Save</Button>
                  </div>
                ) : (
                  <Button variant="ghost" size="small" onClick={() => startEdit('email', user.email)}>Edit</Button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Account