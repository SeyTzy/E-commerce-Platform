import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Mail, Phone, MapPin, Send, Clock, MessageCircle, Headphones } from 'lucide-react'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import { Button, Input } from '../components/common'
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

  const contactInfo = [
    { icon: <Mail size={20} />, title: 'Email', desc: 'support@luxecart.com', link: 'mailto:support@luxecart.com' },
    { icon: <Phone size={20} />, title: 'Phone', desc: '+1 (234) 567-890', link: 'tel:+1234567890' },
    { icon: <MapPin size={20} />, title: 'Address', desc: '123 Commerce St, NY 10001', link: null },
    { icon: <Clock size={20} />, title: 'Hours', desc: 'Mon-Fri: 9AM - 6PM EST', link: null }
  ]

  const supportOptions = [
    { icon: <MessageCircle size={24} />, title: 'Live Chat', desc: 'Chat with us in real-time' },
    { icon: <Headphones size={24} />, title: 'Phone Support', desc: 'Speak with our team' },
    { icon: <Mail size={24} />, title: 'Email', desc: 'Get replies within 24hrs' }
  ]

  return (
    <div className={styles.contact}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1>Contact Us</h1>
            <p>We're here to help! Reach out to us anytime</p>
          </motion.div>
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.container}>
          <div className={styles.grid}>
            <div className={styles.info}>
              <h2>Get in Touch</h2>
              <p>Have a question? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
              
              <div className={styles.contactList}>
                {contactInfo.map((item, i) => (
                  <motion.div
                    key={item.title}
                    className={styles.contactItem}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className={styles.contactIcon}>{item.icon}</div>
                    <div>
                      <h4>{item.title}</h4>
                      {item.link ? (
                        <a href={item.link}>{item.desc}</a>
                      ) : (
                        <p>{item.desc}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className={styles.support}>
                <h3>Need Support?</h3>
                <div className={styles.supportOptions}>
                  {supportOptions.map((option, i) => (
                    <div key={option.title} className={styles.supportOption}>
                      {option.icon}
                      <div>
                        <h4>{option.title}</h4>
                        <p>{option.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <motion.div 
              className={styles.formCard}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2>Send us a Message</h2>
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
                    placeholder="Write your message here..."
                    {...register('message', { required: 'Message is required' })}
                  />
                  {errors.message && <span className={styles.error}>{errors.message.message}</span>}
                </div>
                <Button type="submit" variant="primary" size="large" fullWidth isLoading={isSubmitting}>
                  Send Message <Send size={18} />
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <section className={styles.map}>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d354.2782359541071!2d104.89194783001777!3d11.556307692349538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTEuNTYsMTA0Ljg5!5e0!3m2!1sen!2skh!4v1633023222534!5m2!1sen!2skh"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </div>
  )
}

export default Contact