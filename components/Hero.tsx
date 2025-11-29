'use client'

import { motion } from 'framer-motion'
import { FaDownload, FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { Link } from 'react-scroll'
import FloatingCode from './FloatingCode'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-dark-navy to-navy opacity-50" />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center md:text-left"
          >
            <motion.div variants={itemVariants}>
              <p className="text-teal font-mono text-sm md:text-base mb-4">
                Hi, my name is
              </p>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold text-white mb-4"
            >
              Muneeb Ur Rehman
            </motion.h1>

            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-5xl font-semibold text-gray-400 mb-6"
            >
              Aspiring Software Engineer
              <br />
              <span className="text-teal">Web & Game Developer</span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-400 mb-8 max-w-2xl"
            >
              I'm a software engineering student passionate about building
              innovative web applications and engaging game experiences. Currently
              pursuing my Bachelor's degree at Fast NUCES.
            </motion.p>

            {/* Contact Info */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 mb-8 text-sm text-gray-400"
            >
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-teal" />
                <span>Islamabad, PK</span>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-teal" />
                <a
                  href="mailto:muneebazam96@gmail.com"
                  className="hover:text-teal transition-colors"
                >
                  muneebazam96@gmail.com
                </a>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 mb-8"
            >
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-light-navy text-gray-300 hover:text-teal hover:bg-lightest-navy transition-all"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-light-navy text-gray-300 hover:text-teal hover:bg-lightest-navy transition-all"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-80}
                className="px-6 py-3 bg-teal text-navy font-semibold rounded-lg hover:bg-teal/80 transition-all transform hover:scale-105"
              >
                Get In Touch
              </Link>
              <a
                href="/resume.pdf"
                download
                className="px-6 py-3 border-2 border-teal text-teal font-semibold rounded-lg hover:bg-teal hover:text-navy transition-all transform hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  <FaDownload /> Download Resume
                </span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side - 3D Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden md:block relative h-[500px]"
          >
            <FloatingCode />
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <Link to="about" smooth={true} duration={500} offset={-80}>
            <div className="w-6 h-10 border-2 border-teal rounded-full flex items-start justify-center p-2 cursor-pointer">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1 h-1 bg-teal rounded-full"
              />
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

