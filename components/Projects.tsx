'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa'
import Image from 'next/image'

const projects = [
  {
    title: 'My Portfolio',
    type: 'Personal Project',
    duration: '~30 hours',
    period: 'Feb 2025 - March 2025',
    description:
      'Built a real estate platform using React.js, Next.js, TypeScript, and Tailwind CSS, enhancing UI/UX and performance. Integrated Gemini AI API for intelligent property recommendations.',
    features: [
      'Developed property-specific AI chatbots',
      'Implemented voice-to-text functionality',
      'Enhanced UI/UX and performance optimization',
    ],
    tech: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Gemini AI API'],
    image: 'https://via.placeholder.com/600x400/64FFDA/0A192F?text=My+Portfolio',
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'RealEstate AI',
    type: 'Personal Project',
    duration: '~30 hours',
    period: 'Feb 2025 - March 2025',
    description:
      'A comprehensive real estate platform with AI-powered property recommendations and intelligent chatbots.',
    features: [
      'AI-integrated property recommendations',
      'Property-specific AI chatbots',
      'Voice-to-text functionality',
    ],
    tech: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Gemini AI'],
    image: 'https://via.placeholder.com/600x400/64FFDA/0A192F?text=RealEstate+AI',
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'Company Projects',
    type: 'Freelancing',
    duration: '~25 hours',
    period: 'March 2025',
    description:
      'A company portfolio with an admin panel for viewing client project requests via a form-linked system.',
    features: [
      'Admin panel for project management',
      'Client request form system',
      'Responsive design',
    ],
    tech: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    image: 'https://via.placeholder.com/600x400/64FFDA/0A192F?text=Company+Projects',
    github: 'https://github.com',
    live: 'https://example.com',
    status: 'In Progress',
  },
  {
    title: 'Weather APP',
    type: 'Web Weather App',
    duration: '~25 hours',
    period: 'March 2025',
    description:
      'A freelancing project featuring a weather application with modern UI and real-time data.',
    features: [
      'Real-time weather data',
      'Location-based forecasts',
      'Interactive UI',
    ],
    tech: ['React.js', 'Weather API', 'Tailwind CSS'],
    image: 'https://via.placeholder.com/600x400/64FFDA/0A192F?text=Weather+APP',
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'Iphone Website',
    type: 'Personal Project',
    duration: '~20 hours',
    period: '2024',
    description: 'A modern, responsive website inspired by Apple\'s design language.',
    features: ['Modern UI/UX', 'Responsive design', 'Smooth animations'],
    tech: ['React.js', 'CSS3', 'JavaScript'],
    image: 'https://via.placeholder.com/600x400/64FFDA/0A192F?text=Iphone+Website',
    github: 'https://github.com',
    live: 'https://example.com',
  },
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  return (
    <section
      id="projects"
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
            Featured <span className="text-teal">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-teal mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-navy/50 rounded-lg overflow-hidden border border-teal/20 hover:border-teal/50 transition-all cursor-pointer group"
              onClick={() => setSelectedProject(index)}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {project.status && (
                  <div className="absolute top-4 right-4 bg-teal text-navy px-3 py-1 rounded-full text-xs font-semibold">
                    {project.status}
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-gray-400 hover:text-teal transition-colors"
                    >
                      <FaGithub size={20} />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-gray-400 hover:text-teal transition-colors"
                    >
                      <FaExternalLinkAlt size={18} />
                    </a>
                  </div>
                </div>
                <p className="text-sm text-gray-400 mb-2">{project.type} • {project.period}</p>
                <p className="text-gray-300 mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs px-2 py-1 bg-light-navy text-teal rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-navy rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-teal/20"
              >
                {selectedProject !== null && (
                  <>
                    <div className="relative h-64">
                      <Image
                        src={projects[selectedProject].image}
                        alt={projects[selectedProject].title}
                        fill
                        className="object-cover"
                      />
                      <button
                        onClick={() => setSelectedProject(null)}
                        className="absolute top-4 right-4 p-2 bg-navy/80 rounded-full text-white hover:bg-navy transition-colors"
                      >
                        <FaTimes size={20} />
                      </button>
                    </div>
                    <div className="p-8">
                      <h3 className="text-3xl font-bold text-white mb-4">
                        {projects[selectedProject].title}
                      </h3>
                      <p className="text-gray-400 mb-4">
                        {projects[selectedProject].type} • {projects[selectedProject].period} • {projects[selectedProject].duration}
                      </p>
                      <p className="text-gray-300 mb-6">{projects[selectedProject].description}</p>
                      
                      <div className="mb-6">
                        <h4 className="text-xl font-semibold text-teal mb-3">Key Features</h4>
                        <ul className="space-y-2">
                          {projects[selectedProject].features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="text-gray-300 flex items-start gap-2">
                              <span className="text-teal mt-2">▹</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-xl font-semibold text-teal mb-3">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {projects[selectedProject].tech.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-light-navy text-teal rounded-lg"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <a
                          href={projects[selectedProject].github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-3 bg-teal text-navy font-semibold rounded-lg hover:bg-teal/80 transition-all flex items-center gap-2"
                        >
                          <FaGithub /> View Code
                        </a>
                        <a
                          href={projects[selectedProject].live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-3 border-2 border-teal text-teal font-semibold rounded-lg hover:bg-teal hover:text-navy transition-all flex items-center gap-2"
                        >
                          <FaExternalLinkAlt /> Live Demo
                        </a>
                      </div>
                    </div>
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

