import { useState, useEffect, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Search, SlidersHorizontal, X, Grid, List } from 'lucide-react'
import { ProductCard } from '../components/features'
import { Button, Select } from '../components/common'
import { products, categories } from '../data/products'
import styles from './Shop.module.css'

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [viewMode, setViewMode] = useState('grid')
  
  const [category, setCategory] = useState(searchParams.get('category') || '')
  const [priceMin, setPriceMin] = useState(0)
  const [priceMax, setPriceMax] = useState(1000)
  const [priceRange, setPriceRange] = useState([0, 1000])
  const [rating, setRating] = useState(0)
  const [sortBy, setSortBy] = useState(searchParams.get('sort') || 'popular')
  const [search, setSearch] = useState(searchParams.get('search') || '')

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (search) {
      const query = search.toLowerCase()
      result = result.filter(p => 
        p.name.toLowerCase().includes(query) || 
        p.description.toLowerCase().includes(query)
      )
    }

    if (category) {
      result = result.filter(p => p.category.toLowerCase() === category.toLowerCase())
    }

    if (priceRange[0] > 0) {
      result = result.filter(p => p.price >= priceRange[0])
    }

    if (priceRange[1] < 1000) {
      result = result.filter(p => p.price <= priceRange[1])
    }

    if (rating > 0) {
      result = result.filter(p => p.rating >= rating)
    }

    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        result.sort((a, b) => b.price - a.price)
        break
      case 'newest':
        result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0))
        break
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name))
        break
      default:
        result.sort((a, b) => (b.sales || 0) - (a.sales || 0))
    }

    return result
  }, [category, priceRange, rating, sortBy, search])

  const handleCategoryChange = (value) => {
    setCategory(value)
    if (value) {
      searchParams.set('category', value)
    } else {
      searchParams.delete('category')
    }
    setSearchParams(searchParams)
  }

  const handleSortChange = (value) => {
    setSortBy(value)
    if (value) {
      searchParams.set('sort', value)
    } else {
      searchParams.delete('sort')
    }
    setSearchParams(searchParams)
  }

  const handleClearFilters = () => {
    setCategory('')
    setPriceRange([0, 1000])
    setRating(0)
    setSortBy('popular')
    setSearch('')
    setSearchParams({})
  }

  const hasActiveFilters = category || priceRange[0] > 0 || priceRange[1] < 1000 || rating > 0 || search

  const sortOptions = [
    { value: 'popular', label: 'Most Popular' },
    { value: 'newest', label: 'Newest' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'name', label: 'Name: A-Z' }
  ]

  return (
    <div className={styles.shop}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Shop All Products</h1>
          <p>{filteredProducts.length} products</p>
        </div>

        <div className={styles.toolbar}>
          <div className={styles.searchBox}>
            <Search size={20} />
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className={styles.controls}>
            <button className={styles.filterToggle} onClick={() => setMobileFiltersOpen(true)}>
              <SlidersHorizontal size={18} />
              Filters
            </button>

            <Select
              options={sortOptions}
              value={sortBy}
              onChange={(e) => handleSortChange(e.target.value)}
            />

            <div className={styles.viewToggle}>
              <button className={viewMode === 'grid' ? styles.active : ''} onClick={() => setViewMode('grid')}>
                <Grid size={18} />
              </button>
              <button className={viewMode === 'list' ? styles.active : ''} onClick={() => setViewMode('list')}>
                <List size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className={styles.content}>
          <aside className={`${styles.sidebar} ${mobileFiltersOpen ? styles.open : ''}`}>
            <div className={styles.sidebarHeader}>
              <h3>Filters</h3>
              <button onClick={() => setMobileFiltersOpen(false)}>
                <X size={20} />
              </button>
            </div>

            <div className={styles.filterGroup}>
              <h4>Category</h4>
              <div className={styles.filterOptions}>
                <label className={styles.filterOption}>
                  <input
                    type="radio"
                    name="category"
                    checked={!category}
                    onChange={() => handleCategoryChange('')}
                  />
                  All Categories
                </label>
                {categories.map(cat => (
                  <label key={cat.id} className={styles.filterOption}>
                    <input
                      type="radio"
                      name="category"
                      checked={category === cat.id}
                      onChange={() => handleCategoryChange(cat.id)}
                    />
                    {cat.icon} {cat.name}
                  </label>
                ))}
              </div>
            </div>

            <div className={styles.filterGroup}>
              <h4>Price Range</h4>
              <div className={styles.priceDisplay}>
                <span className={styles.priceValue}>${priceRange[0]}</span>
                <span className={styles.priceDash}>—</span>
                <span className={styles.priceValue}>${priceRange[1]}</span>
              </div>
              <div className={styles.sliderContainer}>
                <div className={styles.sliderTrack}>
                  <div 
                    className={styles.sliderFill} 
                    style={{
                      left: `${(priceRange[0] / 1000) * 100}%`,
                      right: `${100 - (priceRange[1] / 1000) * 100}%`
                    }}
                  />
                </div>
                <input
                  type="range"
                  min="0"
                  max="1000"
                  step="10"
                  value={priceRange[0]}
                  onChange={(e) => {
                    const val = Number(e.target.value)
                    if (val < priceRange[1]) setPriceRange([val, priceRange[1]])
                  }}
                  className={styles.sliderInput}
                />
                <input
                  type="range"
                  min="0"
                  max="1000"
                  step="10"
                  value={priceRange[1]}
                  onChange={(e) => {
                    const val = Number(e.target.value)
                    if (val > priceRange[0]) setPriceRange([priceRange[0], val])
                  }}
                  className={styles.sliderInput}
                />
              </div>
              <div className={styles.priceLabels}>
                <span>$0</span>
                <span>$1000+</span>
              </div>
            </div>

            <div className={styles.filterGroup}>
              <h4>Rating</h4>
              <div className={styles.filterOptions}>
                {[4, 3, 2, 1].map(r => (
                  <label key={r} className={styles.filterOption}>
                    <input
                      type="radio"
                      name="rating"
                      checked={rating === r}
                      onChange={() => setRating(rating === r ? 0 : r)}
                    />
                    {r}+ Stars
                  </label>
                ))}
              </div>
            </div>

            {hasActiveFilters && (
              <Button variant="ghost" fullWidth onClick={handleClearFilters}>
                Clear All Filters
              </Button>
            )}
          </aside>

          <main className={styles.main}>
            {filteredProducts.length === 0 ? (
              <div className={styles.empty}>
                <p>No products found</p>
                <Button variant="secondary" onClick={handleClearFilters}>
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div className={`${styles.grid} ${styles[viewMode]}`}>
                {filteredProducts.map((product, i) => (
                  <ProductCard key={product.id} product={product} index={i} />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>

      {mobileFiltersOpen && (
        <div className={styles.sidebarOverlay} onClick={() => setMobileFiltersOpen(false)} />
      )}
    </div>
  )
}

export default Shop