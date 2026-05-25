import { Link } from 'react-router-dom'
import { useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ArrowRight, Laptop, Watch, Sofa, Lamp, Dumbbell } from 'lucide-react'
import { motion } from 'framer-motion'
import { ProductCard } from '../components/features'
import { selectFilteredProducts, setFilter, applyFilters } from '../redux/slices/productSlice'
import { products, categories } from '../data/products'
import styles from './Categories.module.css'

const iconMap = {
  laptop: Laptop,
  watch: Watch,
  sofa: Sofa,
  lamp: Lamp,
  dumbbell: Dumbbell
}

const categoryGradients = [
  'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
  'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
]

const Categories = () => {
  const dispatch = useDispatch()
  const filteredProducts = useSelector(selectFilteredProducts)

  const categoryCounts = useMemo(() => {
    const counts = {}
    products.forEach(p => {
      const key = p.category.toLowerCase()
      counts[key] = (counts[key] || 0) + 1
    })
    return counts
  }, [])

  const handleCategoryClick = (categoryId) => {
    dispatch(setFilter({ key: 'category', value: categoryId }))
    dispatch(applyFilters())
  }

  return (
    <div className={styles.categories}>
      <div className={styles.hero}>
        <div className={styles.heroBackground}>
          <div className={styles.gradientOrb1} />
          <div className={styles.gradientOrb2} />
          <div className={styles.gridLines} />
        </div>
        <div className={styles.container}>
          <motion.div
            className={styles.heroContent}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className={styles.heroLabel}>ស្វែងរក</span>
            <h1>ទិញទំនិញតាមប្រភេទ</h1>
            <p>រីករាយទស្សនាបណ្តុំផលិតផលពិសេសៗរបស់យើង ដែលបែងចែកជា ៥ ប្រភេទប្លែកពីគ្នា។</p>
          </motion.div>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.grid}>
          {categories.map((cat, i) => {
            const Icon = iconMap[cat.icon]
            const gradient = categoryGradients[i % categoryGradients.length]
            return (
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
                  <div 
                    className={styles.iconWrapper}
                    style={{ background: gradient }}
                  >
                    {Icon && <Icon size={36} />}
                    <div className={styles.iconGlow} />
                  </div>
                  <h3>{cat.name}</h3>
                  <p>{categoryCounts[cat.id]} products</p>
                  <span className={styles.link}>
                    ទិញឥឡូវនេះ <ArrowRight size={16} />
                  </span>
                  <div className={styles.cardGlow} style={{ background: gradient }} />
                </Link>
              </motion.div>
            )
          })}
        </div>

        <section className={styles.featured}>
          <div className={styles.sectionHeader}>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              ផលិតផលពិសេស
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              ផលិតផលសម្រិតសម្រាំង សម្រាប់អ្នកជាពិសេស
            </motion.p>
          </div>
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
