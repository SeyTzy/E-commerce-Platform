import { Link } from 'react-router-dom'
import { MapPin, Users, Package, Award, Heart, Leaf, Truck } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '../components/common'
import styles from './About.module.css'

const About = () => {
  const stats = [
    { value: '50K+', label: 'Happy Customers' },
    { value: '10K+', label: 'Products' },
    { value: '5+', label: 'Years Experience' },
    { value: '99%', label: 'Satisfaction' }
  ]

  const values = [
    { icon: <Heart size={24} />, title: 'Customer First', desc: 'We prioritize customer satisfaction in everything we do.' },
    { icon: <Award size={24} />, title: 'Quality Guaranteed', desc: 'Every product is inspected to ensure the highest quality standards.' },
    { icon: <Leaf size={24} />, title: 'Sustainable', desc: 'Committed to eco-friendly practices and sustainable sourcing.' },
    { icon: <Truck size={24} />, title: 'Fast Delivery', desc: 'Quick and reliable shipping to your doorstep.' }
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
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1>About LuxeCart</h1>
            <p>Your destination for premium products with exceptional service</p>
          </motion.div>
        </div>
      </section>

      <section className={styles.story}>
        <div className={styles.container}>
          <div className={styles.storyContent}>
            <div className={styles.storyText}>
              <h2>Our Story</h2>
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
            </div>
            <div className={styles.storyImage}>
              <img src="https://images.samsung.com/is/image/samsung/assets/us/watches/04162026/SDSAC-10478-26_md_co76_feature-kv_mx-EPP-KV-DT-1440x640.jpg?imwidth=2560" alt="Our Store" />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.stats}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className={styles.stat}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.values}>
        <div className={styles.container}>
          <h2>Our Values</h2>
          <div className={styles.valuesGrid}>
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                className={styles.valueCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className={styles.valueIcon}>{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.team}>
        <div className={styles.container}>
          <h2>Meet Our Team</h2>
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
                <img src={member.image} alt={member.name} />
                <h3>{member.name}</h3>
                <span>{member.role}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.container}>
          <h2>Ready to Start Shopping?</h2>
          <p>Join thousands of satisfied customers</p>
          <Link to="/shop">
            <Button variant="primary" size="large">Browse Products</Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default About