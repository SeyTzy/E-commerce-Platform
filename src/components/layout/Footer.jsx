import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, Send } from 'lucide-react'
import { Button } from '../common'
import { useLanguage } from '../../contexts/LanguageContext'
import styles from './Footer.module.css'

const Footer = () => {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    shop: [
      { name: t('footer.newest'), path: '/shop?sort=newest' },
      { name: t('footer.popular'), path: '/shop?sort=popular' },
      { name: t('footer.sale'), path: '/shop?sale=true' },
      { name: t('footer.allProducts'), path: '/shop' }
    ],
    company: [
      { name: t('footer.aboutUs'), path: '/about' },
      { name: t('footer.careers'), path: '/careers' },
      { name: t('footer.press'), path: '/press' },
      { name: t('footer.blog'), path: '/blog' }
    ],
    support: [
      { name: t('footer.help'), path: '/help' },
      { name: t('footer.shippingInfo'), path: '/shipping' },
      { name: t('footer.returns'), path: '/returns' },
      { name: t('footer.trackOrder'), path: '/track' }
    ],
    legal: [
      { name: t('footer.privacyPolicy'), path: '/privacy' },
      { name: t('footer.termsOfService'), path: '/terms' },
      { name: t('footer.cookiePolicy'), path: '/cookies' }
    ]
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Link to="/" className={styles.logo}>
              <img src="/assets/images/LogoLuxCart.png" alt="LuxeCart" className={styles.logoImg} />
            </Link>
            <p className={styles.description}>
              {t('footer.description')}
            </p>
            <div className={styles.contact}>
              <a href="tel:+88599649877" className={styles.contactItem}>
                <Phone size={18} />
                <span>+885 99 649 877</span>
              </a>
              <a href="mailto:thoeurnseyhat@gmail.com" className={styles.contactItem}>
                <Mail size={18} />
                <span>thoeurnseyhat@gmail.com</span>
              </a>
              <div className={styles.contactItem}>
                <MapPin size={18} />
                <span>{t('contact.addressText')}</span>
              </div>
            </div>
          </div>

          <div className={styles.links}>
            <div className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>{t('footer.shop')}</h4>
              <ul className={styles.linkList}>
                {footerLinks.shop.map(link => (
                  <li key={link.path}>
                    <Link to={link.path}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>{t('footer.company')}</h4>
              <ul className={styles.linkList}>
                {footerLinks.company.map(link => (
                  <li key={link.path}>
                    <Link to={link.path}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>{t('footer.support')}</h4>
              <ul className={styles.linkList}>
                {footerLinks.support.map(link => (
                  <li key={link.path}>
                    <Link to={link.path}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>{t('footer.legal')}</h4>
              <ul className={styles.linkList}>
                {footerLinks.legal.map(link => (
                  <li key={link.path}>
                    <Link to={link.path}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={styles.newsletter}>
            <h4 className={styles.linkTitle}>{t('footer.newsletterTitle')}</h4>
            <p className={styles.newsletterText}>
              {t('footer.newsletterText')}
            </p>
            <form className={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="newsletter-email" className={styles.newsletterLabel}>{t('footer.emailAddress')}</label>
              <input type="email" id="newsletter-email" placeholder={t('footer.emailPlaceholder')} />
              <Button variant="primary" size="medium" aria-label={t('footer.subscribe')}>
                <Send size={18} />
              </Button>
            </form>
            <div className={styles.social}>
              <a href="https://www.facebook.com/seytzy/" aria-label="Facebook"><Facebook size={20} /></a>
              <a href="https://twitter.com/seytzy" aria-label="Twitter"><Twitter size={20} /></a>
              <a href="https://www.instagram.com/@seyhatbadboy/" aria-label="Instagram"><Instagram size={20} /></a>
              <a href="https://www.youtube.com/@SeyTzy-168" aria-label="YouTube"><Youtube size={20} /></a>
              <a href="https://www.linkedin.com/in/thoeurn-seyhat-19123a402/" aria-label="LinkedIn"><img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" style={{ width: 20, height: 20 }} /></a>  
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {currentYear} LuxeCart. {t('footer.allRightsReserved')}</p>
          <div className={styles.payments}>
            <span>{t('footer.acceptedPayments')}</span>
            <div className={styles.paymentIcons}>
              <div className={styles.paymentIcon} title="Visa">
                <img src="https://raw.githubusercontent.com/slaterjohn/payment-logos/master/Square%20Corners/PNG/medium/visa.png" alt="Visa" />
              </div>
              <div className={styles.paymentIcon} title="Mastercard">
                <img src="https://raw.githubusercontent.com/slaterjohn/payment-logos/master/Square%20Corners/PNG/medium/mastercard.png" alt="Mastercard" />
              </div>
              <div className={styles.paymentIcon} title="Aceleda Bank">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAKu3K10MP_MHViP6bAUVBjWscn2KwloGMQg&s" alt="Aceleda Bank" />
              </div>
              <div className={styles.paymentIcon} title="PayPal">
                <img src="https://raw.githubusercontent.com/slaterjohn/payment-logos/master/Square%20Corners/PNG/medium/paypal.png" alt="PayPal" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer