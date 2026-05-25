import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, Send } from 'lucide-react'
import { Button } from '../common'
import styles from './Footer.module.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    shop: [
      { name: 'ថ្មីៗ', path: '/shop?sort=newest' },
      { name: 'អ្នកទិញច្រើន', path: '/shop?sort=popular' },
      { name: 'ការលក់', path: '/shop?sale=true' },
      { name: 'ផលិតផលទាំងអស់', path: '/shop' }
    ],
    company: [
      { name: 'អំពីយើង', path: '/about' },
      { name: 'ការងារ', path: '/careers' },
      { name: 'ព័ត៌មាន', path: '/press' },
      { name: 'ប្លុក', path: '/blog' }
    ],
    support: [
      { name: 'ជំនួយ', path: '/help' },
      { name: 'ការដឹកជញ្ជូន', path: '/shipping' },
      { name: 'ការត្រឡប់', path: '/returns' },
      { name: 'តាមដានការបញ្ជា', path: '/track' }
    ],
    legal: [
      { name: 'គោលការណ៍ឯកជនភាព', path: '/privacy' },
      { name: 'លក្ខខណ្ឌសេវាកម្ម', path: '/terms' },
      { name: 'គោលការណ៍ប្រើប្រាស់', path: '/cookies' }
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
              គោលដៅនៃផលិតផលលំដាប់ប្រីមៀម និងសេវាកម្មដ៏ល្អឥតខ្ចោះ។ ទិញទំនិញតាមទំនោរនិយមចុងក្រោយបង្អស់ដោយក្តីទំនុកចិត្ត។
            </p>
            <div className={styles.contact}>
              <a href="tel:+885 99649877" className={styles.contactItem}>
                <Phone size={18} />
                <span>+885 99 649 877</span>
              </a>
              <a href="mailto:thoeurnseyhat@gmail.com" className={styles.contactItem}>
                <Mail size={18} />
                <span>thoeurnseyhat@gmail.com</span>
              </a>
              <div className={styles.contactItem}>
                <MapPin size={18} />
                <span>សង្កាត់ទឹកល្អក់ទី១ ខណ្ឌទួលគោក រាជធានីភ្នំពេញ</span>
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
            <h4 className={styles.linkTitle}>ទទួលបានព័ត៌មានថ្មីៗ</h4>
            <p className={styles.newsletterText}>
              ភ្ជាប់ទំនាក់ទំនងជាមួយយើង ដើម្បីទទួលបានប្រូម៉ូសិនពិសេសៗ និងការផ្តល់ជូនផ្តាច់មុខ។
            </p>
            <form className={styles.newsletterForm}>
              <label htmlFor="newsletter-email" className={styles.newsletterLabel}>អាសយដ្ឋានអ៊ីមែល</label>
              <input type="email" id="newsletter-email" placeholder="បញ្ចូលអាសយដ្ឋានអ៊ីមែលរបស់អ្នក" />
              <Button variant="primary" size="medium">
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
          <p>&copy; {currentYear} LuxeCart. All rights reserved.</p>
          <div className={styles.payments}>
            <span>យើងទទួលបាន:</span>
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