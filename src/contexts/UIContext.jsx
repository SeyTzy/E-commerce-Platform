import { createContext, useContext, useState } from 'react'

const UIContext = createContext()

export const UIProvider = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <UIContext.Provider value={{ mobileMenuOpen, setMobileMenuOpen }}>
      {children}
    </UIContext.Provider>
  )
}

export const useUI = () => useContext(UIContext)