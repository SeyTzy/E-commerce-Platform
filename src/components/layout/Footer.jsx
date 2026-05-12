import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, Send } from 'lucide-react'
import { Button } from '../common'
import styles from './Footer.module.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    shop: [
      { name: 'New Arrivals', path: '/shop?sort=newest' },
      { name: 'Best Sellers', path: '/shop?sort=popular' },
      { name: 'Sale', path: '/shop?sale=true' },
      { name: 'All Products', path: '/shop' }
    ],
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Careers', path: '/careers' },
      { name: 'Press', path: '/press' },
      { name: 'Blog', path: '/blog' }
    ],
    support: [
      { name: 'Help Center', path: '/help' },
      { name: 'Shipping', path: '/shipping' },
      { name: 'Returns', path: '/returns' },
      { name: 'Track Order', path: '/track' }
    ],
    legal: [
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Terms of Service', path: '/terms' },
      { name: 'Cookie Policy', path: '/cookies' }
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
              Your destination for premium products with exceptional service. 
              Shop the latest trends with confidence.
            </p>
            <div className={styles.contact}>
              <a href="tel:+885 99649877" className={styles.contactItem}>
                <Phone size={18} />
                <span>+885 99649877</span>
              </a>
              <a href="mailto:thoeurnseyhat@gmail.com" className={styles.contactItem}>
                <Mail size={18} />
                <span>thoeurnseyhat@gmail.com</span>
              </a>
              <div className={styles.contactItem}>
                <MapPin size={18} />
                <span>Teuk Laak1, Toul Kork, Phnom Penh</span>
              </div>
            </div>
          </div>

          <div className={styles.links}>
            <div className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>Shop</h4>
              <ul className={styles.linkList}>
                {footerLinks.shop.map(link => (
                  <li key={link.path}>
                    <Link to={link.path}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>Company</h4>
              <ul className={styles.linkList}>
                {footerLinks.company.map(link => (
                  <li key={link.path}>
                    <Link to={link.path}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>Support</h4>
              <ul className={styles.linkList}>
                {footerLinks.support.map(link => (
                  <li key={link.path}>
                    <Link to={link.path}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>Legal</h4>
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
            <h4 className={styles.linkTitle}>Stay Updated</h4>
            <p className={styles.newsletterText}>
              Subscribe to get special offers and exclusive deals.
            </p>
            <form className={styles.newsletterForm}>
              <label htmlFor="newsletter-email" className={styles.newsletterLabel}>Email Address</label>
              <input type="email" id="newsletter-email" placeholder="Enter your email" />
              <Button variant="primary" size="medium">
                <Send size={18} />
              </Button>
            </form>
            <div className={styles.social}>
              <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
              <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
              <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
              <a href="#" aria-label="Youtube"><Youtube size={20} /></a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {currentYear} LuxeCart. All rights reserved.</p>
          <div className={styles.payments}>
            <span>We accept:</span>
            <div className={styles.paymentIcons}>
              <div className={styles.paymentIcon} title="Visa">
                <img src="https://raw.githubusercontent.com/slaterjohn/payment-logos/master/Square%20Corners/PNG/medium/visa.png" alt="Visa" />
              </div>
              <div className={styles.paymentIcon} title="Mastercard">
                <img src="https://raw.githubusercontent.com/slaterjohn/payment-logos/master/Square%20Corners/PNG/medium/mastercard.png" alt="Mastercard" />
              </div>
              <div className={styles.paymentIcon} title="Aceleda Bank ">
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