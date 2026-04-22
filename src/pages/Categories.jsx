import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { ArrowRight, Laptop, Watch, Sofa, Lamp, Dumbbell } from 'lucide-react'
import { motion } from 'framer-motion'
import { ProductCard } from '../components/features'
import { selectFilteredProducts, setFilter, applyFilters } from '../redux/slices/productSlice'
import { products, categories, categoryIcons } from '../data/products'
import styles from './Categories.module.css'

const iconMap = {
  laptop: Laptop,
  watch: Watch,
  sofa: Sofa,
  lamp: Lamp,
  dumbbell: Dumbbell
}

const Categories = () => {
  const dispatch = useDispatch()
  const filteredProducts = useSelector(selectFilteredProducts)

  const handleCategoryClick = (categoryId) => {
    dispatch(setFilter({ key: 'category', value: categoryId }))
    dispatch(applyFilters())
  }

  return (
    <div className={styles.categories}>
      <div className={styles.hero}>
        <div className={styles.container}>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Shop by Category
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Browse our collection by category
          </motion.p>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.grid}>
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
            >
              <Link 
                to={`/shop?category=${cat.id}`} 
                className={styles.categoryCard}
                onClick={() => handleCategoryClick(cat.id)}
              >
                {(() => {
                  const Icon = iconMap[cat.icon]
                  const iconStyle = categoryIcons[cat.icon] || { bg: '#EEF2FF', color: '#4F46E5' }
                  return (
                    <span 
                      className={styles.icon}
                      style={{ backgroundColor: iconStyle.bg, color: iconStyle.color }}
                    >
                      <Icon size={32} />
                    </span>
                  )
                })()}
                <h3>{cat.name}</h3>
                <p>{cat.count} products</p>
                <span className={styles.link}>
                  Shop Now <ArrowRight size={16} />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        <section className={styles.featured}>
          <h2>Featured Products</h2>
          <div className={styles.products}>
            {products.slice(0, 4).map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Categories