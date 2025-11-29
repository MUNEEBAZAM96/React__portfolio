'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaCertificate, FaExternalLinkAlt, FaTimes } from 'react-icons/fa'

const certificates = [
  {
    title: 'JavaScript From First Step to Professional',
    subtitle: 'Modern Front End Development',
    issuer: 'Frontend Master',
    date: 'September 2025',
    link: 'https://example.com',
    description: 'Comprehensive JavaScript course covering fundamentals to advanced concepts in modern frontend development.',
  },
  {
    title: 'Node.js V3',
    issuer: 'Frontend Master',
    date: 'June 2025',
    link: 'https://example.com',
    description: 'Advanced Node.js course covering server-side development, APIs, and backend architecture.',
  },
  {
    title: 'Digging into Node.js V3',
    issuer: 'Frontend Master',
    date: 'June 2025',
    link: 'https://example.com',
    description: 'Deep dive into Node.js internals, performance optimization, and advanced patterns.',
  },
  {
    title: 'LeetCode Profile',
    issuer: 'LeetCode',
    date: 'September 2024 & June 2024',
    link: 'https://leetcode.com',
    description: 'Active problem-solving profile demonstrating algorithmic thinking and coding skills.',
  },
]

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState<number | null>(null)

  return (
    <section
      id="certificates"
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative"
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
            Certificates & <span className="text-teal">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-teal mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-light-navy rounded-lg p-6 border border-teal/20 hover:border-teal/50 transition-all cursor-pointer group"
              onClick={() => setSelectedCert(index)}
            >
              <div className="flex items-start justify-between mb-4">
                <FaCertificate className="text-teal text-3xl" />
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-gray-400 hover:text-teal transition-colors"
                >
                  <FaExternalLinkAlt size={18} />
                </a>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-teal transition-colors">
                {cert.title}
              </h3>
              {cert.subtitle && (
                <p className="text-sm text-gray-400 mb-2">{cert.subtitle}</p>
              )}
              <p className="text-teal font-semibold mb-1">{cert.issuer}</p>
              <p className="text-sm text-gray-400">{cert.date}</p>
            </motion.div>
          ))}
        </div>

        {/* Certificate Detail Modal */}
        <AnimatePresence>
          {selectedCert !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedCert(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0, rotateY: 180 }}
                animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                exit={{ scale: 0.8, opacity: 0, rotateY: 180 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-navy rounded-lg max-w-2xl w-full p-8 border border-teal/20"
              >
                {selectedCert !== null && (
                  <>
                    <div className="flex items-start justify-between mb-6">
                      <FaCertificate className="text-teal text-4xl" />
                      <button
                        onClick={() => setSelectedCert(null)}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <FaTimes size={24} />
                      </button>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-2">
                      {certificates[selectedCert].title}
                    </h3>
                    {certificates[selectedCert].subtitle && (
                      <p className="text-lg text-gray-400 mb-4">
                        {certificates[selectedCert].subtitle}
                      </p>
                    )}
                    <div className="mb-6">
                      <p className="text-teal font-semibold text-lg mb-1">
                        {certificates[selectedCert].issuer}
                      </p>
                      <p className="text-gray-400">{certificates[selectedCert].date}</p>
                    </div>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {certificates[selectedCert].description}
                    </p>
                    <a
                      href={certificates[selectedCert].link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-teal text-navy font-semibold rounded-lg hover:bg-teal/80 transition-all"
                    >
                      View Certificate <FaExternalLinkAlt />
                    </a>
                  </>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

