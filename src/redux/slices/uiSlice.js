import { createSlice } from '@reduxjs/toolkit'

const getStoredTheme = () => {
  try {
    const theme = localStorage.getItem('luxecart_theme')
    if (theme) return theme
    
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark'
    }
    return 'light'
  } catch {
    return 'light'
  }
}

const initialState = {
  theme: getStoredTheme(),
  isSidebarOpen: false,
  isMobileMenuOpen: false,
  isQuickViewOpen: false,
  isAuthModalOpen: false,
  authModalTab: 'login',
  quickViewProduct: null,
  notifications: []
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light'
      localStorage.setItem('luxecart_theme', state.theme)
      document.documentElement.setAttribute('data-theme', state.theme)
    },
    setTheme: (state, action) => {
      state.theme = action.payload
      localStorage.setItem('luxecart_theme', state.theme)
      document.documentElement.setAttribute('data-theme', state.theme)
    },
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen
    },
    setSidebarOpen: (state, action) => {
      state.isSidebarOpen = action.payload
    },
    toggleMobileMenu: (state) => {
      state.isMobileMenuOpen = !state.isMobileMenuOpen
    },
    setMobileMenuOpen: (state, action) => {
      state.isMobileMenuOpen = action.payload
    },
    openQuickView: (state, action) => {
      state.isQuickViewOpen = true
      state.quickViewProduct = action.payload
    },
    closeQuickView: (state) => {
      state.isQuickViewOpen = false
      state.quickViewProduct = null
    },
    openAuthModal: (state, action) => {
      state.isAuthModalOpen = true
      state.authModalTab = action.payload || 'login'
    },
    closeAuthModal: (state) => {
      state.isAuthModalOpen = false
    },
    setAuthModalTab: (state, action) => {
      state.authModalTab = action.payload
    },
    addNotification: (state, action) => {
      state.notifications.push({
        id: Date.now(),
        ...action.payload
      })
    },
    removeNotification: (state, action) => {
      state.notifications = state.notifications.filter(n => n.id !== action.payload)
    },
    clearNotifications: (state) => {
      state.notifications = []
    }
  }
})

export const {
  toggleTheme,
  setTheme,
  toggleSidebar,
  setSidebarOpen,
  toggleMobileMenu,
  setMobileMenuOpen,
  openQuickView,
  closeQuickView,
  openAuthModal,
  closeAuthModal,
  setAuthModalTab,
  addNotification,
  removeNotification,
  clearNotifications
} = uiSlice.actions

export default uiSlice.reducer

export const selectTheme = (state) => state.ui.theme
export const selectIsSidebarOpen = (state) => state.ui.isSidebarOpen
export const selectIsMobileMenuOpen = (state) => state.ui.isMobileMenuOpen
export const selectIsQuickViewOpen = (state) => state.ui.isQuickViewOpen
export const selectQuickViewProduct = (state) => state.ui.quickViewProduct
export const selectIsAuthModalOpen = (state) => state.ui.isAuthModalOpen
export const selectAuthModalTab = (state) => state.ui.authModalTab
export const selectNotifications = (state) => state.ui.notifications