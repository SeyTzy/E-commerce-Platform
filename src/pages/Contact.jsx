import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import { Button, Input } from '../components/common'
import myProfile from '../assets/images/My pf.jpg'
import styles from './Contact.module.css'

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { register, handleSubmit, reset, formState: { errors } } = useForm()

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1000))
    toast.success('Message sent successfully! We\'ll get back to you soon.')
    reset()
    setIsSubmitting(false)
  }

  const socialLinks = [
    { icon: <Github size={20} />, label: 'GitHub', url: 'https://github.com/SeyTzy' },
    { icon: <Linkedin size={20} />, label: 'LinkedIn', url: 'https://www.linkedin.com/in/thoeurn-seyhat-19123a402/' },
    { icon: <Twitter size={20} />, label: 'Twitter', url: 'https://t.me/thoeurnseyhat' }
  ]

  return (
    <div className={styles.contact}>
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <div className={styles.gradientOrb1} />
          <div className={styles.gradientOrb2} />
          <div className={styles.gridLines} />
        </div>
        <div className={styles.container}>
          <motion.div
            className={styles.heroContent}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.profileSection}>
              <motion.div 
                className={styles.profileWrapper}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <div className={styles.profileRing} />
                <div className={styles.profileInner}>
                  <img src={myProfile} alt="Developer Profile" className={styles.profileImage} />
                </div>
                <div className={styles.statusIndicator}>
                  <span className={styles.statusDot} />
                  <span>អ្នកបង្កេីត</span>
                </div>
              </motion.div>
              
              <motion.div 
                className={styles.heroText}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <span className={styles.greeting}>Hello, I'm</span>
                <h1>Thoeurn Seyhat</h1>
                <p className={styles.title}>Full Stack Developer</p>
                <p className={styles.bio}>
                  មានចំណង់ចំណូលចិត្តក្នុងការបង្កើតបទពិសោធន៍ឌីជីថលដ៏ល្អឥតខ្ចោះ។
                  មកធ្វើការជាមួយគ្នា ដើម្បីនាំយកគំនិតរបស់អ្នកឲ្យក្លាយជាការពិត។
                </p>
                
                <div className={styles.socialLinks}>
                  {socialLinks.map((social, i) => (
                    <motion.a
                      key={social.label}
                      href={social.url}
                      className={styles.socialLink}
                      whileHover={{ y: -3, scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.container}>
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Get In Touch</h2>
            <p>Have a project in mind? Let's create something amazing together.</p>
          </motion.div>

          <div className={styles.grid}>
            <motion.div 
              className={styles.infoCard}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className={styles.infoHeader}>
                <h3>Contact Information</h3>
                <p>Feel free to reach out through any of these channels</p>
              </div>

              <div className={styles.contactList}>
                <a href="mailto:thoeurnseyhat@gmail.com" className={styles.contactItem}>
                  <div className={styles.contactIcon}>
                    <Mail size={22} />
                  </div>
                  <div className={styles.contactDetails}>
                    <span className={styles.contactLabel}>Email</span>
                    <span className={styles.contactValue}>thoeurnseyhat@gmail.com</span>
                  </div>
                  <ExternalLink size={16} className={styles.contactArrow} />
                </a>

                <a href="tel:+1234567890" className={styles.contactItem}>
                  <div className={styles.contactIcon}>
                    <Phone size={22} />
                  </div>
                  <div className={styles.contactDetails}>
                    <span className={styles.contactLabel}>Phone</span>
                    <span className={styles.contactValue}>+885 (99) 649-877</span>
                  </div>
                  <ExternalLink size={16} className={styles.contactArrow} />
                </a>

                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>
                    <MapPin size={22} />
                  </div>
                  <div className={styles.contactDetails}>
                    <span className={styles.contactLabel}>Location</span>
                    <span className={styles.contactValue}>Teuk Laak1, Toul Kork, Phnom Penh</span>
                  </div>
                </div>
              </div>

              <div className={styles.statsSection}>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>5+</span>
                  <span className={styles.statLabel}>Years Experience</span>
                </div>
                <div className={styles.statDivider} />
                <div className={styles.stat}>
                  <span className={styles.statNumber}>50+</span>
                  <span className={styles.statLabel}>Projects Completed</span>
                </div>
                <div className={styles.statDivider} />
                <div className={styles.stat}>
                  <span className={styles.statNumber}>100%</span>
                  <span className={styles.statLabel}>Client Satisfaction</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className={styles.formCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className={styles.formHeader}>
                <h3>Send a Message</h3>
                <p>I'll get back to you within 24 hours</p>
              </div>
              
              <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <div className={styles.row}>
                  <Input
                    label="First Name"
                    error={errors.firstName?.message}
                    {...register('firstName', { required: 'First name is required' })}
                  />
                  <Input
                    label="Last Name"
                    error={errors.lastName?.message}
                    {...register('lastName', { required: 'Last name is required' })}
                  />
                </div>
                <Input
                  label="Email"
                  type="email"
                  error={errors.email?.message}
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: { value: /^\S+@\S+$/i, message: 'Invalid email format' }
                  })}
                />
                <Input
                  label="Subject"
                  error={errors.subject?.message}
                  {...register('subject', { required: 'Subject is required' })}
                />
                <div className={styles.textareaWrapper}>
                  <label>Message</label>
                  <textarea
                    placeholder="Tell me about your project..."
                    {...register('message', { required: 'Message is required' })}
                  />
                  {errors.message && <span className={styles.error}>{errors.message.message}</span>}
                </div>
                <Button 
                  type="submit" 
                  variant="primary" 
                  size="large" 
                  fullWidth 
                  isLoading={isSubmitting}
                  className={styles.submitButton}
                >
                  <span>Send Message</span>
                  <Send size={18} />
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact