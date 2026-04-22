import { createSlice } from '@reduxjs/toolkit'

const getStoredOrders = () => {
  try {
    const orders = localStorage.getItem('luxecart_orders')
    return orders ? JSON.parse(orders) : []
  } catch {
    return []
  }
}

const initialState = {
  items: getStoredOrders(),
  currentOrder: null,
  isLoading: false,
  error: null
}

const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    addOrder: (state, action) => {
      const order = {
        ...action.payload,
        id: `ORD-${Date.now()}`,
        createdAt: new Date().toISOString(),
        status: 'processing'
      }
      state.items.unshift(order)
      state.currentOrder = order
      localStorage.setItem('luxecart_orders', JSON.stringify(state.items))
    },
    setCurrentOrder: (state, action) => {
      state.currentOrder = action.payload
    },
    updateOrderStatus: (state, action) => {
      const { id, status } = action.payload
      const order = state.items.find(o => o.id === id)
      if (order) {
        order.status = status
        order.updatedAt = new Date().toISOString()
        localStorage.setItem('luxecart_orders', JSON.stringify(state.items))
      }
    },
    cancelOrder: (state, action) => {
      const id = action.payload
      const order = state.items.find(o => o.id === id)
      if (order) {
        order.status = 'cancelled'
        order.cancelledAt = new Date().toISOString()
        localStorage.setItem('luxecart_orders', JSON.stringify(state.items))
      }
    },
    clearOrders: (state) => {
      state.items = []
      localStorage.removeItem('luxecart_orders')
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
  addOrder,
  setCurrentOrder,
  updateOrderStatus,
  cancelOrder,
  clearOrders,
  setLoading,
  setError
} = orderSlice.actions

export default orderSlice.reducer

export const selectOrders = (state) => state.orders.items
export const selectCurrentOrder = (state) => state.orders.currentOrder
export const selectOrdersLoading = (state) => state.orders.isLoading
export const selectOrderById = (id) => (state) => state.orders.items.find(o => o.id === id)