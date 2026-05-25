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
  { src: 'https://dlcdnwebimgs.asus.com/files/media/d5444a20-d912-40e3-9a48-bbacc1e3a4e6/v1/images/Strix_G18_KV_16x9.webp', alt: 'Rog Strix G18' },
  { src: 'https://images.steamusercontent.com/ugc/946219717597970362/CB88BD1F0C823F2002DDFEAC39B406D6F383196C/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false', alt: 'Rog Poster' },
  { src: 'https://images.samsung.com/is/image/samsung/assets/us/2507/watches/WatchesPCD_FT03_Watch8Classic_D.jpg?$1440_N_JPG$', alt: 'Samsung Galaxy Watch 8' }
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
    { icon: <Truck size={24} />, title: 'ដឹកជញ្ជូនឥតគិតថ្លៃ', desc: 'រាល់ការកុម្ម៉ង់ចាប់ពី $100 ឡើងទៅ' },
    { icon: <Shield size={24} />, title: 'ការទូទាត់ប្រាក់', desc: 'ប្រកបដោយសុវត្ថិភាព100%' },
    { icon: <RefreshCw size={24} />, title: 'ប្តូរទំនិញវិញងាយស្រួល', desc: 'អាចប្តូរវិញបានក្នុងរយៈពេល 30 ថ្ងៃ' },
    { icon: <Star size={24} />, title: 'ការធានាលើគុណភាព', desc: 'ផលិតផលគុណភាពខ្ពស់' }
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
                  គ្រឿងអាសេសេីរីថ្មីៗ
                </motion.span>
                <motion.h1 
                  className={styles.heroTitle}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  ទិញទំនិញគ្រប់យ៉ាង <span>ដែលអ្នកចង់បាន</span>
                </motion.h1>
                <motion.p 
                  className={styles.heroDesc}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  ស្វែងរកផលិតផលដែលអ្នកចង់បាន​ ជាងរាប់ពាន់មុខ។
                </motion.p>
                <motion.div 
                  className={styles.heroActions}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Link to="/shop">
                    <Button variant="primary" size="large">
                      កម្មង់ឥឡូវនេះ <ArrowRight size={20} />
                    </Button>
                  </Link>
                  <Link to="/categories">
                    <Button variant="secondary" size="large">
                      រកមើលប្រភេទផលិតផល
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
            <h2>ទិញទំនិញតាមប្រភេទ</h2>
            <Link to="/categories">មើលទាំងអស់ <ArrowRight size={16} /></Link>
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
            <h2>ផលិតផលណែនាំ</h2>
            <Link to="/shop">មើលទាំងអស់ <ArrowRight size={16} /></Link>
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
            <h2>ថ្មីៗ</h2>
            <Link to="/shop?sort=newest">មើលទាំងអស់ <ArrowRight size={16} /></Link>
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
            <span className={styles.bannerTag}>ការផ្តល់ជូនមានកំណត់</span>
            <h2>ទទួលបានការបញ្ចុះតម្លៃ 20% សម្រាប់ការកុម្ម៉ង់លើកដំបូង</h2>
            <p>សូមប្រើប្រាស់កូដ WELCOME នៅពេលទូទាត់ប្រាក់</p>
            <Link to="/shop">
              <Button variant="primary" size="large">
                កម្មង់ឥឡូវនេះ
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.testimonials}>
        <div className={styles.container}>
          <h2 className={styles.testimonialTitle}>ចំណាប់អារម្មណ៍ពីអតិថិជនរបស់យើង</h2>
          <div className={styles.testimonialGrid}>
            {[
              { name: 'Phanna', text: 'គុណភាពអេមខ្លាំង ហើយដឹកជញ្ជូនលឿនទៀត', rating: 5 },
              { name: 'Visa', text: 'ការទិញទំនិញអនឡាញដ៏ល្អបំផុតមិនធ្លាប់មាន', rating: 5 },
              { name: 'Reaksa', text: 'សេវាកម្មល្អបំផុត ហើយផលិតផលច្បាស់ប្រាកដ', rating: 5 }
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