import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Heart, ShoppingBag, Trash2 } from 'lucide-react'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import { Button } from '../components/common'
import { selectWishlistItems, removeFromWishlist } from '../redux/slices/wishlistSlice'
import { addToCart } from '../redux/slices/cartSlice'
import { toggleSidebar } from '../redux/slices/uiSlice'
import styles from './Wishlist.module.css'

const Wishlist = () => {
  const dispatch = useDispatch()
  const items = useSelector(selectWishlistItems)

  const handleAddToCart = (product) => {
    dispatch(addToCart({ product, quantity: 1 }))
    dispatch(toggleSidebar(true))
  }

  const handleRemove = (id) => {
    dispatch(removeFromWishlist(id))
    toast.success('Removed from wishlist')
  }

  return (
    <div className={styles.wishlist}>
      <div className={styles.container}>
        <h1>My Wishlist</h1>

        {items.length === 0 ? (
          <div className={styles.empty}>
            <Heart size={64} strokeWidth={1.5} />
            <h2>Your wishlist is empty</h2>
            <p>Save items you love by clicking the heart icon</p>
            <Link to="/shop">
              <Button variant="primary" size="large">
                Start Shopping
              </Button>
            </Link>
          </div>
        ) : (
          <div className={styles.grid}>
            {items.map((item, i) => (
              <motion.div
                key={item.id}
                className={styles.card}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link to={`/product/${item.id}`} className={styles.image}>
                  <img src={item.image} alt={item.name} />
                </Link>
                <div className={styles.info}>
                  <Link to={`/product/${item.id}`} className={styles.name}>
                    {item.name}
                  </Link>
                  <span className={styles.category}>{item.category}</span>
                  <span className={styles.price}>${item.price.toFixed(2)}</span>
                  <div className={styles.actions}>
                    <Button variant="primary" size="small" onClick={() => handleAddToCart(item)}>
                      <ShoppingBag size={16} /> Add to Cart
                    </Button>
                    <button className={styles.remove} onClick={() => handleRemove(item.id)}>
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Wishlist