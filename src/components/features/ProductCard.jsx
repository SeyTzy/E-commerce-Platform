import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { ShoppingBag, Heart, Eye, Star } from 'lucide-react'
import { motion } from 'framer-motion'
import { addToCart } from '../../redux/slices/cartSlice'
import { addToWishlist, removeFromWishlist } from '../../redux/slices/wishlistSlice'
import { toggleSidebar } from '../../redux/slices/uiSlice'
import { selectIsInWishlist } from '../../redux/slices/wishlistSlice'
import Badge from '../common/Badge'
import styles from './ProductCard.module.css'

const ProductCard = ({ product, index = 0 }) => {
  const dispatch = useDispatch()
  const isInWishlist = useSelector(selectIsInWishlist(product.id))

  const handleAddToCart = (e) => {
    e.preventDefault()
    dispatch(addToCart({ product, quantity: 1 }))
    dispatch(toggleSidebar(true))
  }

  const handleWishlist = (e) => {
    e.preventDefault()
    if (isInWishlist) {
      dispatch(removeFromWishlist(product.id))
    } else {
      dispatch(addToWishlist(product))
    }
  }

  const discount = product.originalPrice 
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0

  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Link to={`/product/${product.id}`} className={styles.imageWrapper}>
        <img src={product.images[0]} alt={product.name} className={styles.image} loading="lazy" />
        {discount > 0 && <Badge variant="error" className={styles.discount}>-{discount}%</Badge>}
        {product.isNew && <Badge variant="success" className={styles.newBadge}>New</Badge>}
        
        <div className={styles.overlay}>
          <button className={styles.quickView} onClick={(e) => { e.preventDefault() }}>
            <Eye size={20} />
          </button>
          <button 
            className={`${styles.wishlistBtn} ${isInWishlist ? styles.active : ''}`} 
            onClick={handleWishlist}
          >
            <Heart size={20} fill={isInWishlist ? 'currentColor' : 'none'} />
          </button>
        </div>
      </Link>

      <div className={styles.content}>
        <Link to={`/product/${product.id}`} className={styles.category}>{product.category}</Link>
        <Link to={`/product/${product.id}`} className={styles.title}>{product.name}</Link>
        
        <div className={styles.rating}>
          <div className={styles.stars}>
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} className={i < Math.floor(product.rating) ? styles.filled : ''} />
            ))}
          </div>
          <span>({product.reviews?.length || 0})</span>
        </div>

        <div className={styles.priceRow}>
          <div className={styles.price}>
            <span className={styles.currentPrice}>${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className={styles.originalPrice}>${product.originalPrice.toFixed(2)}</span>
            )}
          </div>
          <button className={styles.addToCart} onClick={handleAddToCart}>
            <ShoppingBag size={18} />
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default ProductCard