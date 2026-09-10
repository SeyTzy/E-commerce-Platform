import { useState, useRef, useEffect, memo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Check, Globe } from 'lucide-react'
import toast from 'react-hot-toast'
import { useLanguage } from '../../contexts/LanguageContext'
import styles from './LanguageSwitch.module.css'

// Precision SVG Cambodian Flag badge
export const CambodiaFlag = memo(({ size = 18, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${styles.flagSvg} ${className}`}
  >
    <defs>
      <clipPath id="kh-clip-circle">
        <circle cx="16" cy="16" r="16" />
      </clipPath>
    </defs>
    <g clipPath="url(#kh-clip-circle)">
      {/* Blue bands (top & bottom: 8px each) */}
      <rect width="32" height="32" fill="#032EA6" />
      {/* Red band (center: 16px) */}
      <rect y="8" width="32" height="16" fill="#ED1B24" />
      {/* Angkor Wat Temple Silhouette */}
      <g fill="#FFFFFF">
        {/* Base foundation */}
        <rect x="7" y="21" width="18" height="1.8" rx="0.4" />
        <rect x="8.5" y="19.5" width="15" height="1.5" />
        <rect x="9.5" y="18.2" width="13" height="1.3" />
        {/* Center Tower (tallest) */}
        <path d="M15 13.5C15 12.2 15.5 11 16 10C16.5 11 17 12.2 17 13.5V18.2H15V13.5Z" />
        <rect x="15.4" y="9.2" width="1.2" height="1.2" />
        {/* Left inner tower */}
        <path d="M12.5 15C12.5 14 12.9 13 13.3 12.2C13.7 13 14.1 14 14.1 15V18.2H12.5V15Z" />
        {/* Right inner tower */}
        <path d="M17.9 15C17.9 14 18.3 13 18.7 12.2C19.1 13 19.5 14 19.5 15V18.2H17.9V15Z" />
        {/* Left outer tower */}
        <path d="M10.2 16.2C10.2 15.5 10.5 14.8 10.8 14.2C11.1 14.8 11.4 15.5 11.4 16.2V18.2H10.2V16.2Z" />
        {/* Right outer tower */}
        <path d="M20.6 16.2C20.6 15.5 20.9 14.8 21.2 14.2C21.5 14.8 21.8 15.5 21.8 16.2V18.2H20.6V16.2Z" />
        {/* Entry gallery doors */}
        <rect x="15.3" y="16.5" width="1.4" height="2" fill="#ED1B24" />
      </g>
    </g>
    <circle cx="16" cy="16" r="15.5" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
  </svg>
))

// Precision SVG UK Union Flag badge
export const UKFlag = memo(({ size = 18, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${styles.flagSvg} ${className}`}
  >
    <defs>
      <clipPath id="uk-clip-circle">
        <circle cx="16" cy="16" r="16" />
      </clipPath>
    </defs>
    <g clipPath="url(#uk-clip-circle)">
      {/* Blue background */}
      <rect width="32" height="32" fill="#012169" />
      {/* White Diagonals */}
      <path d="M-2 -2L34 34M34 -2L-2 34" stroke="#FFFFFF" strokeWidth="5.5" strokeLinecap="square" />
      {/* Red Diagonals */}
      <path d="M-2 -2L34 34M34 -2L-2 34" stroke="#C8102E" strokeWidth="2.8" strokeLinecap="square" />
      {/* White Cross */}
      <path d="M16 -2V34M-2 16H34" stroke="#FFFFFF" strokeWidth="8" />
      {/* Red Cross */}
      <path d="M16 -2V34M-2 16H34" stroke="#C8102E" strokeWidth="4.8" />
    </g>
    <circle cx="16" cy="16" r="15.5" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
  </svg>
))

CambodiaFlag.displayName = 'CambodiaFlag'
UKFlag.displayName = 'UKFlag'

const LanguageSwitch = ({ variant = 'dropdown', className = '' }) => {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  const languages = [
    {
      code: 'km',
      name: 'KH',
      nativeName: 'ភាសាខ្មែរ',
      fullName: 'Khmer',
      Flag: CambodiaFlag
    },
    {
      code: 'en',
      name: 'EN',
      nativeName: 'English',
      fullName: 'English',
      Flag: UKFlag
    }
  ]

  const currentLang = languages.find((l) => l.code === language) || languages[0]
  const CurrentFlag = currentLang.Flag

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false)
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  const handleSelectLanguage = (code) => {
    if (code !== language) {
      setLanguage(code)
      toast.success(
        code === 'km' ? 'បានប្តូរទៅជា ភាសាខ្មែរ (KH)' : 'Switched to English (EN)',
        {
          id: 'lang-toast',
          duration: 1600,
          style: {
            borderRadius: '9999px',
            padding: '8px 16px',
            fontWeight: 600,
            fontSize: '13px'
          }
        }
      )
    }
    setIsOpen(false)
  }

  // Mobile Drawer Card Variant
  if (variant === 'card' || variant === 'mobile') {
    return (
      <div className={`${styles.mobileContainer} ${className}`}>
        <div className={styles.mobileTitleRow}>
          <span className={styles.mobileTitle}>ភាសា / Language</span>
          <span className={styles.mobileCurrentBadge}>
            {language === 'km' ? '🇰🇭 ភាសាខ្មែរ' : '🇬🇧 English'}
          </span>
        </div>
        <div className={styles.mobileGrid}>
          {languages.map((lang) => {
            const isActive = language === lang.code
            const FlagIcon = lang.Flag
            return (
              <motion.button
                key={lang.code}
                type="button"
                className={`${styles.mobileOptionCard} ${isActive ? styles.mobileOptionActive : ''}`}
                onClick={() => handleSelectLanguage(lang.code)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                aria-pressed={isActive}
                aria-label={`Select ${lang.fullName}`}
              >
                <div className={styles.mobileOptionLeft}>
                  <div className={styles.flagWrapper}>
                    <FlagIcon size={24} />
                    {isActive && <div className={styles.flagActiveGlow} />}
                  </div>
                  <div className={styles.mobileOptionText}>
                    <span className={styles.mobileNativeName}>{lang.nativeName}</span>
                    <span className={styles.mobileSubName}>{lang.fullName} ({lang.name})</span>
                  </div>
                </div>
                <div className={`${styles.radioIndicator} ${isActive ? styles.radioIndicatorActive : ''}`}>
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                      >
                        <Check size={14} strokeWidth={3} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.button>
            )
          })}
        </div>
      </div>
    )
  }

  // Dual Pill Variant (Alternative)
  if (variant === 'pill') {
    return (
      <div
        className={`${styles.pillContainer} ${className}`}
        role="group"
        aria-label="Language selection"
      >
        <div className={styles.pillTrack}>
          {languages.map((lang) => {
            const isActive = language === lang.code
            const FlagIcon = lang.Flag
            return (
              <button
                key={lang.code}
                type="button"
                className={`${styles.pillButton} ${isActive ? styles.pillButtonActive : ''}`}
                onClick={() => handleSelectLanguage(lang.code)}
                aria-pressed={isActive}
                title={`${lang.nativeName} (${lang.fullName})`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeLangIndicator"
                    className={styles.activeIndicator}
                    transition={{
                      type: 'spring',
                      stiffness: 420,
                      damping: 32
                    }}
                  />
                )}

                <span className={styles.pillContent}>
                  <span className={styles.pillFlag}>
                    <FlagIcon size={16} />
                  </span>
                  <span className={styles.pillLabel}>{lang.name}</span>
                  {isActive && <span className={styles.activeDot} />}
                </span>
              </button>
            )
          })}
        </div>
      </div>
    )
  }

  // Luxury Dropdown Variant (Default)
  return (
    <div
      ref={dropdownRef}
      className={`${styles.dropdownWrapper} ${className}`}
    >
      <motion.button
        type="button"
        className={`${styles.dropdownTrigger} ${isOpen ? styles.dropdownTriggerOpen : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label={`Language: ${currentLang.fullName}. Click to switch.`}
      >
        <span className={styles.triggerFlagWrapper}>
          <CurrentFlag size={18} />
        </span>
        <span className={styles.triggerCode}>{currentLang.name}</span>
        <motion.span
          className={styles.chevronWrapper}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
        >
          <ChevronDown size={14} className={styles.chevronIcon} />
        </motion.span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.dropdownMenu}
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            role="listbox"
            aria-label="Language options"
          >
            <div className={styles.dropdownHeader}>
              <div className={styles.dropdownHeaderTitle}>
                <Globe size={13} className={styles.headerGlobeIcon} />
                <span>{language === 'km' ? 'ជ្រើសរើសភាសា' : 'Select Language'}</span>
              </div>
              <span className={styles.activeCodeBadge}>{currentLang.name}</span>
            </div>

            <div className={styles.dropdownList}>
              {languages.map((lang) => {
                const isActive = language === lang.code
                const FlagIcon = lang.Flag
                return (
                  <motion.button
                    key={lang.code}
                    type="button"
                    className={`${styles.dropdownItem} ${isActive ? styles.dropdownItemActive : ''}`}
                    onClick={() => handleSelectLanguage(lang.code)}
                    role="option"
                    aria-selected={isActive}
                    whileHover={{ x: 3 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className={styles.itemLeft}>
                      <div className={styles.itemFlagWrapper}>
                        <FlagIcon size={22} />
                        {isActive && <div className={styles.itemFlagGlow} />}
                      </div>
                      <div className={styles.itemText}>
                        <span className={styles.itemNative}>{lang.nativeName}</span>
                        <span className={styles.itemSub}>{lang.fullName} ({lang.name})</span>
                      </div>
                    </div>

                    <div className={styles.itemRight}>
                      {isActive ? (
                        <motion.div
                          className={styles.checkBadge}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                        >
                          <Check size={12} strokeWidth={3} />
                        </motion.div>
                      ) : (
                        <div className={styles.uncheckCircle} />
                      )}
                    </div>
                  </motion.button>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default memo(LanguageSwitch)
