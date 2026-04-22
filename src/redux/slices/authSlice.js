import { createSlice } from '@reduxjs/toolkit'

const getStoredAuth = () => {
  try {
    const user = localStorage.getItem('luxecart_user')
    const token = localStorage.getItem('luxecart_token')
    return { user: user ? JSON.parse(user) : null, token }
  } catch {
    return { user: null, token: null }
  }
}

const { user, token } = getStoredAuth()

const initialState = {
  user: user,
  token: token,
  isAuthenticated: !!token,
  isLoading: false,
  error: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { user, token } = action.payload
      state.user = user
      state.token = token
      state.isAuthenticated = true
      state.isLoading = false
      state.error = null
      localStorage.setItem('luxecart_user', JSON.stringify(user))
      localStorage.setItem('luxecart_token', token)
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload
    },
    setError: (state, action) => {
      state.error = action.payload
      state.isLoading = false
    },
    logout: (state) => {
      state.user = null
      state.token = null
      state.isAuthenticated = false
      state.isLoading = false
      state.error = null
      localStorage.removeItem('luxecart_user')
      localStorage.removeItem('luxecart_token')
    },
    updateUser: (state, action) => {
      state.user = { ...state.user, ...action.payload }
      localStorage.setItem('luxecart_user', JSON.stringify(state.user))
    }
  }
})

export const { setCredentials, setLoading, setError, logout, updateUser } = authSlice.actions
export default authSlice.reducer

export const selectCurrentUser = (state) => state.auth.user
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated
export const selectIsAdmin = (state) => state.auth.user?.role === 'admin'
export const selectAuthLoading = (state) => state.auth.isLoading
export const selectAuthError = (state) => state.auth.error