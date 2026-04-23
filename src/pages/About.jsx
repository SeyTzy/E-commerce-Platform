import { Link } from 'react-router-dom'
import { MapPin, Users, Package, Award, Heart, Leaf, Truck, Sparkles, Target, Gem } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '../components/common'
import styles from './About.module.css'

const About = () => {
  const stats = [
    { value: '50K+', label: 'Happy Customers', gradient: 'linear-gradient(135deg, #667eea, #764ba2)' },
    { value: '10K+', label: 'Products', gradient: 'linear-gradient(135deg, #f093fb, #f5576c)' },
    { value: '5+', label: 'Years Experience', gradient: 'linear-gradient(135deg, #4facfe, #00f2fe)' },
    { value: '99%', label: 'Satisfaction', gradient: 'linear-gradient(135deg, #43e97b, #38f9d7)' }
  ]

  const values = [
    { icon: <Heart size={28} />, title: 'Customer First', desc: 'We prioritize customer satisfaction in everything we do.', gradient: 'linear-gradient(135deg, #f093fb, #f5576c)' },
    { icon: <Award size={28} />, title: 'Quality Guaranteed', desc: 'Every product is inspected to ensure the highest quality standards.', gradient: 'linear-gradient(135deg, #667eea, #764ba2)' },
    { icon: <Leaf size={28} />, title: 'Sustainable', desc: 'Committed to eco-friendly practices and sustainable sourcing.', gradient: 'linear-gradient(135deg, #43e97b, #38f9d7)' },
    { icon: <Truck size={28} />, title: 'Fast Delivery', desc: 'Quick and reliable shipping to your doorstep.', gradient: 'linear-gradient(135deg, #4facfe, #00f2fe)' }
  ]

  const team = [
    { name: 'Thoeurn Seyhat', role: 'CEO & Founder', image: 'https://lookaside.fbsbx.com/elementpath/media/?media_id=323764547398564&version=1774609332' },
    { name: 'Sok Phanna', role: 'Head of Operations', image: 'https://www.investopedia.com/thmb/ddqNj2IApYn92JE0pXxju9TG_zE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-2151909132-17fc5847200f4f108dd54d0877d22467.jpg' },
    { name: 'Vorng Sovannareach', role: 'Lead Developer', image: 'https://cdn.britannica.com/05/236505-050-17B6E34A/Elon-Musk-2022.jpg' },
    { name: 'Ran Visa', role: 'Marketing Director', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/January_2025_Official_Presidential_Portrait_of_Donald_J._Trump.jpg/250px-January_2025_Official_Presidential_Portrait_of_Donald_J._Trump.jpg' }
  ]

  return (
    <div className={styles.about}>
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <div className={styles.gradientOrb1} />
          <div className={styles.gradientOrb2} />
          <div className={styles.gradientOrb3} />
          <div className={styles.gridLines} />
        </div>
        <div className={styles.container}>
          <motion.div
            className={styles.heroContent}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className={styles.heroLabel}>
              <Sparkles size={16} /> Our Story
            </span>
            <h1>About LuxeCart</h1>
            <p>Your destination for premium products with exceptional service</p>
          </motion.div>
        </div>
      </section>

      <section className={styles.story}>
        <div className={styles.container}>
          <div className={styles.storyContent}>
            <motion.div 
              className={styles.storyText}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className={styles.sectionTag}>Our Beginning</span>
              <h2>Building a Vision</h2>
              <p>
                Founded in 2019, LuxeCart began with a simple mission: to make premium products 
                accessible to everyone. What started as a small online shop has grown into a trusted 
                destination for thousands of customers seeking quality products.
              </p>
              <p>
                We believe in exceptional customer service, fast shipping, and products that stand 
                the test of time. Every item in our collection is carefully curated to meet our high 
                standards of quality and design.
              </p>
              <div className={styles.storyFeatures}>
                <div className={styles.storyFeature}>
                  <Target size={20} />
                  <span>Customer-Focused</span>
                </div>
                <div className={styles.storyFeature}>
                  <Gem size={20} />
                  <span>Premium Quality</span>
                </div>
                <div className={styles.storyFeature}>
                  <Leaf size={20} />
                  <span>Eco-Friendly</span>
                </div>
              </div>
            </motion.div>
            <motion.div 
              className={styles.storyImage}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img src="https://images.samsung.com/is/image/samsung/assets/us/watches/04162026/SDSAC-10478-26_md_co76_feature-kv_mx-EPP-KV-DT-1440x640.jpg?imwidth=2560" alt="Our Store" />
              <div className={styles.imageOverlay} />
              <div className={styles.imageBadge}>
                <span className={styles.badgeNumber}>5+</span>
                <span className={styles.badgeText}>Years of Excellence</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className={styles.stats}>
        <div className={styles.statsBackground} />
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className={styles.stat}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className={styles.statGlow} style={{ background: stat.gradient }} />
                <span className={styles.statValue} style={{ background: stat.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  {stat.value}
                </span>
                <span className={styles.statLabel}>{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.values}>
        <div className={styles.container}>
          <motion.div 
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className={styles.sectionTag}>What We Stand For</span>
            <h2>Our Core Values</h2>
            <p>The principles that guide everything we do</p>
          </motion.div>
          <div className={styles.valuesGrid}>
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                className={styles.valueCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className={styles.valueIconWrapper}>
                  <div className={styles.valueGlow} style={{ background: value.gradient }} />
                  <div className={styles.valueIcon} style={{ background: value.gradient }}>
                    {value.icon}
                  </div>
                </div>
                <h3>{value.title}</h3>
                <p>{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.team}>
        <div className={styles.teamBackground}>
          <div className={styles.teamGradient1} />
          <div className={styles.teamGradient2} />
        </div>
        <div className={styles.container}>
          <motion.div 
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className={styles.sectionTag}>The People Behind</span>
            <h2>Meet Our Team</h2>
            <p>Passionate individuals driving our success</p>
          </motion.div>
          <div className={styles.teamGrid}>
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                className={styles.memberCard}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className={styles.memberImageWrapper}>
                  <img src={member.image} alt={member.name} />
                  <div className={styles.memberOverlay} />
                </div>
                <h3>{member.name}</h3>
                <span>{member.role}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.ctaBackground}>
          <div className={styles.ctaOrb1} />
          <div className={styles.ctaOrb2} />
        </div>
        <div className={styles.container}>
          <motion.div 
            className={styles.ctaContent}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Start Shopping?</h2>
            <p>Join thousands of satisfied customers and discover premium products today</p>
            <Link to="/shop">
              <Button variant="primary" size="large" className={styles.ctaButton}>
                Browse Products <ArrowRight size={18} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

const ArrowRight = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
)

export default About