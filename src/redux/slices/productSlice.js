import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
  filteredItems: [],
  currentProduct: null,
  categories: [],
  filters: {
    category: null,
    priceRange: [0, 1000],
    rating: null,
    sortBy: 'popular',
    search: ''
  },
  search: {
    query: '',
    results: []
  },
  pagination: {
    page: 1,
    totalPages: 1,
    totalItems: 0,
    itemsPerPage: 12
  },
  isLoading: false,
  error: null
}

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.items = action.payload
      state.filteredItems = action.payload
      state.isLoading = false
    },
    setCurrentProduct: (state, action) => {
      state.currentProduct = action.payload
    },
    setCategories: (state, action) => {
      state.categories = action.payload
    },
    setFilter: (state, action) => {
      const { key, value } = action.payload
      state.filters[key] = value
      state.pagination.page = 1
    },
    clearFilters: (state) => {
      state.filters = initialState.filters
      state.filteredItems = state.items
      state.pagination.page = 1
    },
    applyFilters: (state) => {
      let filtered = [...state.items]

      if (state.filters.search) {
        const query = state.filters.search.toLowerCase()
        filtered = filtered.filter(p => 
          p.name.toLowerCase().includes(query) || 
          p.description.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query)
        )
      }

      if (state.filters.category) {
        filtered = filtered.filter(p => p.category === state.filters.category)
      }

      if (state.filters.priceRange) {
        const [min, max] = state.filters.priceRange
        filtered = filtered.filter(p => p.price >= min && p.price <= max)
      }

      if (state.filters.rating) {
        filtered = filtered.filter(p => p.rating >= state.filters.rating)
      }

      switch (state.filters.sortBy) {
        case 'price-low':
          filtered.sort((a, b) => a.price - b.price)
          break
        case 'price-high':
          filtered.sort((a, b) => b.price - a.price)
          break
        case 'newest':
          filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          break
        case 'name':
          filtered.sort((a, b) => a.name.localeCompare(b.name))
          break
        case 'popular':
        default:
          filtered.sort((a, b) => (b.sales || 0) - (a.sales || 0))
      }

      state.filteredItems = filtered
      state.pagination.totalItems = filtered.length
      state.pagination.totalPages = Math.ceil(filtered.length / state.pagination.itemsPerPage)
    },
    setSearchQuery: (state, action) => {
      state.search.query = action.payload
      if (action.payload) {
        const query = action.payload.toLowerCase()
        state.search.results = state.items.filter(p =>
          p.name.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query)
        )
      } else {
        state.search.results = []
      }
    },
    setPage: (state, action) => {
      state.pagination.page = action.payload
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload
    },
    setError: (state, action) => {
      state.error = action.payload
      state.isLoading = false
    }
  }
})

export const {
  setProducts,
  setCurrentProduct,
  setCategories,
  setFilter,
  clearFilters,
  applyFilters,
  setSearchQuery,
  setPage,
  setLoading,
  setError
} = productSlice.actions

export default productSlice.reducer

export const selectProducts = (state) => state.products.items
export const selectFilteredProducts = (state) => state.products.filteredItems
export const selectCurrentProduct = (state) => state.products.currentProduct
export const selectCategories = (state) => state.products.categories
export const selectFilters = (state) => state.products.filters
export const selectSearchQuery = (state) => state.products.search.query
export const selectSearchResults = (state) => state.products.search.results
export const selectPagination = (state) => state.products.pagination
export const selectProductsLoading = (state) => state.products.isLoading
export const selectPaginatedProducts = (state) => {
  const { filteredItems, pagination } = state.products
  const start = (pagination.page - 1) * pagination.itemsPerPage
  return filteredItems.slice(start, start + pagination.itemsPerPage)
}