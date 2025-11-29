'use client'

import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaEnvelope, FaHeart } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-navy border-t border-teal/20 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-400 text-sm flex items-center gap-2"
          >
            Made with <FaHeart className="text-teal animate-pulse" /> by Muneeb Ur Rehman
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-6"
          >
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-teal transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-teal transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="mailto:muneebazam96@gmail.com"
              className="text-gray-400 hover:text-teal transition-colors"
              aria-label="Email"
            >
              <FaEnvelope size={20} />
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-gray-400 text-sm"
          >
            © {currentYear} All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  )
}

