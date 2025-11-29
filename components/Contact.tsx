'use client'

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // EmailJS configuration - Replace with your actual service ID, template ID, and public key
      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      )

      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('EmailJS error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }
  }

  return (
    <section
      id="contact"
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-light-navy/30"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="text-teal">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-teal mx-auto" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be
            part of your visions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                Feel free to reach out if you're looking for a developer, have a question, or just
                want to connect.
              </p>
            </div>

            <div className="space-y-6">
              <motion.a
                href="mailto:muneebazam96@gmail.com"
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 text-gray-300 hover:text-teal transition-colors group"
              >
                <div className="p-3 bg-light-navy rounded-lg group-hover:bg-teal group-hover:text-navy transition-all">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="font-semibold">muneebazam96@gmail.com</p>
                </div>
              </motion.a>

              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 text-gray-300 hover:text-teal transition-colors group"
              >
                <div className="p-3 bg-light-navy rounded-lg group-hover:bg-teal group-hover:text-navy transition-all">
                  <FaLinkedin size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">LinkedIn</p>
                  <p className="font-semibold">linkedin.com/in/muneeb-ur-rehman</p>
                </div>
              </motion.a>

              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 text-gray-300 hover:text-teal transition-colors group"
              >
                <div className="p-3 bg-light-navy rounded-lg group-hover:bg-teal group-hover:text-navy transition-all">
                  <FaGithub size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">GitHub</p>
                  <p className="font-semibold">github.com/MUNEEBAZAM96</p>
                </div>
              </motion.a>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 text-gray-300"
              >
                <div className="p-3 bg-light-navy rounded-lg">
                  <FaMapMarkerAlt size={20} className="text-teal" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="font-semibold">Islamabad, Pakistan</p>
                </div>
              </motion.div>
            </div>

            {/* Map Placeholder - Replace with actual Google Maps integration */}
            <div className="mt-8 h-64 bg-light-navy rounded-lg border border-teal/20 flex items-center justify-center">
              <p className="text-gray-400">Map: Islamabad, Pakistan</p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-light-navy border border-teal/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-teal transition-colors"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-light-navy border border-teal/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-teal transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-light-navy border border-teal/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-teal transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-400"
                >
                  Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-400"
                >
                  Failed to send message. Please try again or email me directly.
                </motion.div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-teal text-navy font-semibold rounded-lg hover:bg-teal/80 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message <FaPaperPlane />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

