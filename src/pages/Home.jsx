import { useEffect, useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { ArrowRight, Truck, Shield, RefreshCw, Star, Laptop, Watch, Sofa, Lamp, Dumbbell, ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '../components/common'
import { ProductCard } from '../components/features'
import { products, categories, categoryIcons } from '../data/products'
import { setProducts, setCategories } from '../redux/slices/productSlice'
import styles from './Home.module.css'

const heroImages = [
  { src: 'https://storage-asset.msi.com/global/picture/banner/banner_17718336283bc6a5ead82ee8d0ce753c015701d7fc.jpeg', alt: 'Hero Image 1' },
  { src: 'https://i.dell.com/is/image/DellContent/content/dam/ss2/non-product-images/alienware-difference/aw-difference-lp-laptops-hero-aa16250nt-aa18250nt-product-only.psd?fmt=png-alpha&wid=1680&hei=1071', alt: 'Hero Image 2' },
  { src: 'https://storage-asset.msi.com/global/picture/banner/banner_17756159791c43d9bafcf0618af7ccb0afddb06703.jpeg', alt: 'Hero Image 3' }
]

const iconMap = {
  laptop: Laptop,
  watch: Watch,
  sofa: Sofa,
  lamp: Lamp,
  dumbbell: Dumbbell
}

const Home = () => {
  const dispatch = useDispatch()
  const featuredProducts = products.slice(0, 8)
  const newArrivals = products.filter(p => p.isNew).slice(0, 4)
  const [currentImage, setCurrentImage] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    dispatch(setProducts(products))
    dispatch(setCategories(categories))
  }, [dispatch])

  const nextSlide = useCallback(() => {
    setCurrentImage((prev) => (prev + 1) % heroImages.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentImage((prev) => (prev - 1 + heroImages.length) % heroImages.length)
  }, [])

  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [isPaused, nextSlide])

  const getCategoryIcon = (iconName) => {
    const Icon = iconMap[iconName]
    const iconStyle = categoryIcons[iconName] || { bg: '#EEF2FF', color: '#4F46E5' }
    return { Icon, iconStyle }
  }

  const features = [
    { icon: <Truck size={24} />, title: 'Free Shipping', desc: 'On orders over $100' },
    { icon: <Shield size={24} />, title: 'Secure Payment', desc: '100% secure checkout' },
    { icon: <RefreshCw size={24} />, title: 'Easy Returns', desc: '30-day return policy' },
    { icon: <Star size={24} />, title: 'Quality Guarantee', desc: 'Premium products only' }
  ]

  return (
    <div className={styles.home}>
      <section className={styles.hero}>
        <div 
          className={styles.heroSlider}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImage}
              className={styles.heroSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img src={heroImages[currentImage].src} alt={heroImages[currentImage].alt} />
              <div className={styles.heroOverlay} />
              <div className={styles.heroContent}>
                <motion.span 
                  className={styles.heroTag}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  New Accessory 2026
                </motion.span>
                <motion.h1 
                  className={styles.heroTitle}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Discover Your <span>Style</span>
                </motion.h1>
                <motion.p 
                  className={styles.heroDesc}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Explore our curated Accessories of premium products designed to elevate your lifestyle.
                </motion.p>
                <motion.div 
                  className={styles.heroActions}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Link to="/shop">
                    <Button variant="primary" size="large">
                      Shop Now <ArrowRight size={20} />
                    </Button>
                  </Link>
                  <Link to="/categories">
                    <Button variant="secondary" size="large">
                      Browse Categories
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          <button className={`${styles.sliderBtn} ${styles.prevBtn}`} onClick={prevSlide}>
            <ChevronLeft size={32} />
          </button>
          <button className={`${styles.sliderBtn} ${styles.nextBtn}`} onClick={nextSlide}>
            <ChevronRight size={32} />
          </button>
          
          <div className={styles.sliderDots}>
            {heroImages.map((_, index) => (
              <button
                key={index}
                className={`${styles.dot} ${index === currentImage ? styles.activeDot : ''}`}
                onClick={() => setCurrentImage(index)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.features}>
        <div className={styles.container}>
          <div className={styles.featuresGrid}>
            {features.map((feature, i) => (
              <motion.div 
                key={feature.title}
                className={styles.featureCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className={styles.featureIcon}>{feature.icon}</div>
                <div>
                  <h4>{feature.title}</h4>
                  <p>{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.categories}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Shop by Category</h2>
            <Link to="/categories">View All <ArrowRight size={16} /></Link>
          </div>
          <div className={styles.categoryGrid}>
            {categories.map((cat, i) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link to={`/shop?category=${cat.id}`} className={styles.categoryCard}>
                  {(() => {
                    const { Icon, iconStyle } = getCategoryIcon(cat.icon)
                    return (
                      <span 
                        className={styles.categoryIcon}
                        style={{ backgroundColor: iconStyle.bg, color: iconStyle.color }}
                      >
                        <Icon size={28} />
                      </span>
                    )
                  })()}
                  <h4>{cat.name}</h4>
                  <span>{cat.count} Products</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.products}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Featured Products</h2>
            <Link to="/shop">View All <ArrowRight size={16} /></Link>
          </div>
          <div className={styles.productGrid}>
            {featuredProducts.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.newArrivals}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>New Arrivals</h2>
            <Link to="/shop?sort=newest">View All <ArrowRight size={16} /></Link>
          </div>
          <div className={styles.productGrid}>
            {newArrivals.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.banner}>
        <div className={styles.container}>
          <div className={styles.bannerContent}>
            <span className={styles.bannerTag}>Limited Time Offer</span>
            <h2>Get 20% Off Your First Order</h2>
            <p>Use code WELCOME at checkout</p>
            <Link to="/shop">
              <Button variant="primary" size="large">
                Shop Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.testimonials}>
        <div className={styles.container}>
          <h2 className={styles.testimonialTitle}>What Our Customers Say</h2>
          <div className={styles.testimonialGrid}>
            {[
              { name: 'Sarah Johnson', text: 'Amazing quality and fast shipping!', rating: 5 },
              { name: 'Michael Chen', text: 'Best online shopping experience ever.', rating: 5 },
              { name: 'Emily Davis', text: 'Love the product variety and prices.', rating: 5 }
            ].map((testimonial, i) => (
              <motion.div 
                key={testimonial.name}
                className={styles.testimonialCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className={styles.testimonialStars}>
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} size={16} fill="currentColor" />
                  ))}
                </div>
                <p>"{testimonial.text}"</p>
                <span className={styles.testimonialName}>— {testimonial.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home