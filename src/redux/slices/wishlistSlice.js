import { createSlice } from '@reduxjs/toolkit'

const getStoredWishlist = () => {
  try {
    const wishlist = localStorage.getItem('luxecart_wishlist')
    return wishlist ? JSON.parse(wishlist) : []
  } catch {
    return []
  }
}

const initialState = {
  items: getStoredWishlist()
}

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const product = action.payload
      if (!state.items.find(item => item.id === product.id)) {
        state.items.push({
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.images[0],
          category: product.category
        })
        localStorage.setItem('luxecart_wishlist', JSON.stringify(state.items))
      }
    },
    removeFromWishlist: (state, action) => {
      const id = action.payload
      state.items = state.items.filter(item => item.id !== id)
      localStorage.setItem('luxecart_wishlist', JSON.stringify(state.items))
    },
    clearWishlist: (state) => {
      state.items = []
      localStorage.removeItem('luxecart_wishlist')
    }
  }
})

export const { addToWishlist, removeFromWishlist, clearWishlist } = wishlistSlice.actions
export default wishlistSlice.reducer

export const selectWishlistItems = (state) => state.wishlist.items
export const selectWishlistCount = (state) => state.wishlist.items.length
export const selectIsInWishlist = (id) => (state) => state.wishlist.items.some(item => item.id === id)