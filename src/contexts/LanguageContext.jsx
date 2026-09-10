import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import { translations } from '../i18n/translations'

const LanguageContext = createContext()

const STORAGE_KEY = 'luxecart_lang'

const getInitialLanguage = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'km' || saved === 'en') {
      return saved
    }
  } catch (e) {
    console.warn('Could not read language from localStorage', e)
  }
  return 'km' // Default to Khmer as requested for the Cambodian e-commerce platform
}

export const LanguageProvider = ({ children }) => {
  const [language, setLanguageState] = useState(getInitialLanguage)

  const applyLanguageAttributes = (lang) => {
    document.documentElement.setAttribute('lang', lang)
    document.documentElement.setAttribute('data-lang', lang)
  }

  useEffect(() => {
    applyLanguageAttributes(language)
  }, [language])

  const setLanguage = useCallback((lang) => {
    if (lang !== 'km' && lang !== 'en') return
    setLanguageState(lang)
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch (e) {
      console.warn('Could not save language to localStorage', e)
    }
    applyLanguageAttributes(lang)
  }, [])

  const toggleLanguage = useCallback(() => {
    setLanguage(language === 'km' ? 'en' : 'km')
  }, [language, setLanguage])

  /**
   * Translate a key, e.g. t('nav.home') or t('shop.showingResults', { count: 12, total: 40 })
   */
  const t = useCallback((key, fallbackOrParams = '', maybeParams = null) => {
    let fallback = typeof fallbackOrParams === 'string' ? fallbackOrParams : ''
    let params = typeof fallbackOrParams === 'object' && fallbackOrParams !== null ? fallbackOrParams : maybeParams

    if (!key) return ''

    const keys = key.split('.')
    let current = translations[language]

    for (const k of keys) {
      if (current && typeof current === 'object' && k in current) {
        current = current[k]
      } else {
        current = undefined
        break
      }
    }

    // Fallback to English or other language if missing in current
    if (current === undefined) {
      const altLang = language === 'km' ? 'en' : 'km'
      let altCurrent = translations[altLang]
      for (const k of keys) {
        if (altCurrent && typeof altCurrent === 'object' && k in altCurrent) {
          altCurrent = altCurrent[k]
        } else {
          altCurrent = undefined
          break
        }
      }
      current = altCurrent !== undefined ? altCurrent : (fallback || key)
    }

    // Interpolate parameters if string
    if (typeof current === 'string' && params && typeof params === 'object') {
      return Object.entries(params).reduce((str, [paramKey, val]) => {
        return str.replace(new RegExp(`\\{${paramKey}\\}`, 'g'), String(val))
      }, current)
    }

    return current
  }, [language])

  const value = {
    language,
    setLanguage,
    toggleLanguage,
    t,
    isKhmer: language === 'km',
    isEnglish: language === 'en'
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

export const useTranslation = useLanguage

export default LanguageContext
