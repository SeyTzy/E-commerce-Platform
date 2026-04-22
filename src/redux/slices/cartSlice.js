import { createSlice } from '@reduxjs/toolkit'

const getStoredCart = () => {
  try {
    const cart = localStorage.getItem('luxecart_cart')
    return cart ? JSON.parse(cart) : { items: [], coupon: null }
  } catch {
    return { items: [], coupon: null }
  }
}

const initialState = getStoredCart()

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { product, quantity = 1, variant } = action.payload
      const existingItem = state.items.find(
        item => item.id === product.id && item.variant === variant
      )

      if (existingItem) {
        existingItem.quantity += quantity
      } else {
        state.items.push({
          id: product.id,
          name: product.name,
          price: product.price,
          originalPrice: product.originalPrice,
          image: product.images[0],
          quantity,
          variant,
          category: product.category
        })
      }
      localStorage.setItem('luxecart_cart', JSON.stringify(state))
    },
    removeFromCart: (state, action) => {
      const { id, variant } = action.payload
      state.items = state.items.filter(
        item => !(item.id === id && item.variant === variant)
      )
      localStorage.setItem('luxecart_cart', JSON.stringify(state))
    },
    updateQuantity: (state, action) => {
      const { id, variant, quantity } = action.payload
      const item = state.items.find(
        item => item.id === id && item.variant === variant
      )
      if (item) {
        item.quantity = Math.max(1, quantity)
      }
      localStorage.setItem('luxecart_cart', JSON.stringify(state))
    },
    clearCart: (state) => {
      state.items = []
      state.coupon = null
      localStorage.setItem('luxecart_cart', JSON.stringify(state))
    },
    applyCoupon: (state, action) => {
      state.coupon = action.payload
      localStorage.setItem('luxecart_cart', JSON.stringify(state))
    },
    removeCoupon: (state) => {
      state.coupon = null
      localStorage.setItem('luxecart_cart', JSON.stringify(state))
    }
  }
})

export const { addToCart, removeFromCart, updateQuantity, clearCart, applyCoupon, removeCoupon } = cartSlice.actions
export default cartSlice.reducer

export const selectCartItems = (state) => state.cart.items
export const selectCartTotal = (state) => {
  const items = state.cart.items
  return items.reduce((total, item) => total + (item.price * item.quantity), 0)
}
export const selectCartOriginalTotal = (state) => {
  const items = state.cart.items
  return items.reduce((total, item) => total + ((item.originalPrice || item.price) * item.quantity), 0)
}
export const selectCartCount = (state) => state.cart.items.reduce((count, item) => count + item.quantity, 0)
export const selectCoupon = (state) => state.cart.coupon
export const selectDiscount = (state) => {
  const coupon = state.cart.coupon
  const total = state.cart.items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  if (!coupon) return 0
  if (coupon.type === 'percentage') {
    return (total * coupon.discount) / 100
  }
  return Math.min(coupon.discount, total)
}
export const selectShippingCost = (state) => {
  const total = state.cart.items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  return total > 100 ? 0 : 9.99
}
export const selectCartTotalWithDiscount = (state) => {
  const subtotal = selectCartTotal(state)
  const discount = selectDiscount(state)
  const shipping = selectShippingCost(state)
  return subtotal - discount + shipping
}