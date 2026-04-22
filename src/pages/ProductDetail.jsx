import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { ShoppingBag, Heart, ArrowLeft, Star, Truck, Shield, RefreshCw, Minus, Plus } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button, Rating, Badge } from '../components/common'
import { selectCurrentProduct } from '../redux/slices/productSlice'
import { addToCart } from '../redux/slices/cartSlice'
import { addToWishlist, removeFromWishlist } from '../redux/slices/wishlistSlice'
import { selectIsInWishlist } from '../redux/slices/wishlistSlice'
import { toggleSidebar } from '../redux/slices/uiSlice'
import { products } from '../data/products'
import styles from './ProductDetail.module.css'

const ProductDetail = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState('description')

  const product = products.find(p => p.id === id)
  const isInWishlist = useSelector(selectIsInWishlist(id))

  if (!product) {
    return (
      <div className={styles.notFound}>
        <h2>Product Not Found</h2>
        <Link to="/shop">
          <Button>Back to Shop</Button>
        </Link>
      </div>
    )
  }

  const handleAddToCart = () => {
    dispatch(addToCart({ product, quantity }))
    dispatch(toggleSidebar(true))
  }

  const handleWishlist = () => {
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
    <div className={styles.product}>
      <div className={styles.container}>
        <Link to="/shop" className={styles.backLink}>
          <ArrowLeft size={18} /> Back to Shop
        </Link>

        <div className={styles.content}>
          <div className={styles.gallery}>
            <motion.div 
              className={styles.mainImage}
              key={selectedImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <img src={product.images[selectedImage]} alt={product.name} />
              {discount > 0 && <Badge variant="error" className={styles.discount}>-{discount}%</Badge>}
              {product.isNew && <Badge variant="success" className={styles.newBadge}>New</Badge>}
            </motion.div>
            <div className={styles.thumbnails}>
              {product.images.map((img, i) => (
                <button
                  key={i}
                  className={`${styles.thumbnail} ${selectedImage === i ? styles.active : ''}`}
                  onClick={() => setSelectedImage(i)}
                >
                  <img src={img} alt={`${product.name} ${i + 1}`} />
                </button>
              ))}
            </div>
          </div>

          <div className={styles.info}>
            <Link to={`/shop?category=${product.category.toLowerCase()}`} className={styles.category}>
              {product.category}
            </Link>
            <h1 className={styles.name}>{product.name}</h1>
            
            <div className={styles.rating}>
              <Rating value={product.rating} />
              <span>{product.reviews?.length || 0} reviews</span>
            </div>

            <div className={styles.price}>
              <span className={styles.currentPrice}>${product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <>
                  <span className={styles.originalPrice}>${product.originalPrice.toFixed(2)}</span>
                  <Badge variant="error">-{discount}%</Badge>
                </>
              )}
            </div>

            <p className={styles.description}>{product.description}</p>

            <div className={styles.features}>
              <div className={styles.feature}>
                <Truck size={20} />
                <div>
                  <h4>Free Shipping</h4>
                  <p>On orders over $100</p>
                </div>
              </div>
              <div className={styles.feature}>
                <Shield size={20} />
                <div>
                  <h4>Secure Payment</h4>
                  <p>100% secure checkout</p>
                </div>
              </div>
              <div className={styles.feature}>
                <RefreshCw size={20} />
                <div>
                  <h4>Easy Returns</h4>
                  <p>30-day return policy</p>
                </div>
              </div>
            </div>

            <div className={styles.quantityRow}>
              <span>Quantity</span>
              <div className={styles.quantity}>
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                  <Minus size={18} />
                </button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)}>
                  <Plus size={18} />
                </button>
              </div>
            </div>

            <div className={styles.actions}>
              <Button variant="primary" size="large" fullWidth onClick={handleAddToCart}>
                <ShoppingBag size={20} /> Add to Cart
              </Button>
              <Button 
                variant={isInWishlist ? 'primary' : 'secondary'} 
                size="large" 
                onClick={handleWishlist}
              >
                <Heart size={20} fill={isInWishlist ? 'currentColor' : 'none'} />
              </Button>
            </div>

            <div className={styles.stock}>
              {product.stock > 0 ? (
                <span className={styles.inStock}>
                  <span className={styles.stockDot} /> In Stock ({product.stock} available)
                </span>
              ) : (
                <span className={styles.outOfStock}>Out of Stock</span>
              )}
            </div>
          </div>
        </div>

        <div className={styles.tabs}>
          <div className={styles.tabHeader}>
            <button 
              className={activeTab === 'description' ? styles.active : ''}
              onClick={() => setActiveTab('description')}
            >
              Description
            </button>
            <button 
              className={activeTab === 'specs' ? styles.active : ''}
              onClick={() => setActiveTab('specs')}
            >
              Specifications
            </button>
            <button 
              className={activeTab === 'reviews' ? styles.active : ''}
              onClick={() => setActiveTab('reviews')}
            >
              Reviews ({product.reviews?.length || 0})
            </button>
          </div>

          <div className={styles.tabContent}>
            {activeTab === 'description' && (
              <div className={styles.descriptionTab}>
                <p>{product.description}</p>
                <p>
                  Experience premium quality with our carefully crafted product. Each item is inspected to ensure 
                  the highest standards of craftsmanship and durability. Perfect for everyday use 
                  with a design that stands the test of time.
                </p>
              </div>
            )}

            {activeTab === 'specs' && (
              <div className={styles.specsTab}>
                <table>
                  <tbody>
                    <tr>
                      <td>Category</td>
                      <td>{product.category}</td>
                    </tr>
                    <tr>
                      <td>Rating</td>
                      <td>{product.rating} / 5</td>
                    </tr>
                    <tr>
                      <td>Total Sales</td>
                      <td>{product.sales}+</td>
                    </tr>
                    <tr>
                      <td>Stock</td>
                      <td>{product.stock} units</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className={styles.reviewsTab}>
                <div className={styles.reviewsSummary}>
                  <div className={styles.reviewsAverage}>
                    <span className={styles.average}>{product.rating}</span>
                    <Rating value={product.rating} size={20} />
                    <span>{product.reviews?.length || 0} reviews</span>
                  </div>
                  <div className={styles.reviewsBars}>
                    {[5, 4, 3, 2, 1].map(stars => {
                      const count = product.reviews?.filter(r => r.rating === stars).length || 0
                      const total = product.reviews?.length || 1
                      const percent = (count / total) * 100
                      return (
                        <div key={stars} className={styles.reviewBar}>
                          <span>{stars} stars</span>
                          <div className={styles.bar}>
                            <div className={styles.barFill} style={{ width: `${percent}%` }} />
                          </div>
                          <span>{count}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>

                <div className={styles.reviewsList}>
                  {product.reviews?.map(review => (
                    <div key={review.id} className={styles.review}>
                      <div className={styles.reviewHeader}>
                        <h4>{review.user}</h4>
                        <Rating value={review.rating} size={14} />
                      </div>
                      <p>{review.text}</p>
                      <span className={styles.reviewDate}>{review.date}</span>
                    </div>
                  ))}

                  {(!product.reviews || product.reviews.length === 0) && (
                    <p className={styles.noReviews}>No reviews yet</p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail