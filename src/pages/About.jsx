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
            <h1>អំពី LuxeCart</h1>
            <p>ទីកន្លែងដ៏ស័ក្តិសមបំផុតសម្រាប់ផលិតផលលំដាប់ប្រីមៀម និងសេវាកម្មដ៏ល្អឥតខ្ចោះ</p>
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
              <span className={styles.sectionTag}>ការចាប់ផ្តើមរបស់យើង</span>
              <h2>Building a Vision</h2>
              <p>
                LuxeCart ត្រូវបានបង្កើតឡើងក្នុងឆ្នាំ 2026 បានចាប់ផ្តើមឡើងជាមួយនឹងបេសកកម្មដ៏សាមញ្ញមួយ គឺការនាំយកផលិតផលលំដាប់ប្រីមៀមជូនដល់អ្នករាល់គ្នា។ អ្វីដែលបានចាប់ផ្តើមចេញពីហាងអនឡាញតូចមួយ បានរីកចម្រើនក្លាយជាទីកន្លែងដ៏គួរឱ្យទុកចិត្តសម្រាប់អតិថិជនរាប់ពាន់នាក់ដែលស្វែងរកផលិតផលមានគុណភាព។
              </p>
              <p>
                យើងជឿជាក់លើការផ្តល់ជូនសេវាកម្មអតិថិជនដ៏ល្អឥតខ្ចោះ ការដឹកជញ្ជូនរហ័ស និងផលិតផលដែលមានភាពធន់គង់វង្សតាមពេលវេលា។ រាល់ទំនិញនីមួយៗនៅក្នុងការប្រមូលផ្ដុំរបស់យើង ត្រូវបានជ្រើសរើសយ៉ាងសម្រិតសម្រាំងបំផុត ដើម្បីឱ្យស្របតាមស្តង់ដារខ្ពស់នៃគុណភាព និងការរចនារបស់យើង។
              </p>
              <div className={styles.storyFeatures}>
                <div className={styles.storyFeature}>
                  <Target size={20} />
                  <span>ការយកចិត្តទុកដាក់លើអតិថិជនជាចម្បង</span>
                </div>
                <div className={styles.storyFeature}>
                  <Gem size={20} />
                  <span>គុណភាពល្អ</span>
                </div>
                <div className={styles.storyFeature}>
                  <Leaf size={20} />
                  <span>សេដ្ឋកិច្ច</span>
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
                <span className={styles.badgeText}>ឆ្នាំនៃការបង្កើតឧត្តមភាព</span>
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
            <span className={styles.sectionTag}>គោលការណ៍ដែលយើងប្រកាន់ខ្ជាប់</span>
            <h2>គោលការណ៍របស់យើង</h2>
            <p>គោលការណ៍ណែនាំនៃគ្រប់សកម្មភាពរបស់យើង</p>
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
            <span className={styles.sectionTag}>អ្នកដែលមានសកម្មភាព</span>
            <h2>ជួបគ្នាទីកន្លែងរបស់យើង</h2>
            <p>អ្នកដែលមានចិត្តសាធារណៈ ដែលធ្វើឱ្យយើងជោគជ័យ</p>
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
            <h2>ចាប់ផ្តើមទិញទំនិញឥឡូវនេះ?</h2>
            <p>ចូលរួមជាមួយអតិថិជនរបស់យើង និងរក្សាទំនិញល្អៗថ្មីៗឥឡូវនេះ</p>
            <Link to="/shop">
              <Button variant="primary" size="large" className={styles.ctaButton}>
                ស្វែងរកផលិតផល <ArrowRight size={18} />
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