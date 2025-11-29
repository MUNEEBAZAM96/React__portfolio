'use client'

import { motion } from 'framer-motion'
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'

const experiences = [
  {
    title: 'Game Programmer Intern',
    company: 'Mindstorm Studio',
    location: 'Lahore, PK',
    period: 'June 2024 - Aug 2024',
    description: [
      'Contributed to enhancing user engagement and optimizing game mechanics',
      'Collaborated with cross-functional teams to develop a complete game using C# and Unity',
      'Streamlined development process and organized internal game jam',
      'Participated in Rookie Game Jam, designing and implementing a complete game',
    ],
  },
]

export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Work <span className="text-teal">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-teal mx-auto" />
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-teal/30 transform md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative mb-12 ${
                index % 2 === 0 ? 'md:pr-1/2 md:pr-8' : 'md:pl-1/2 md:pl-8 md:text-right'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-teal rounded-full transform -translate-x-1/2 -translate-y-1 border-4 border-navy z-10" />

              {/* Content Card */}
              <div
                className={`ml-16 md:ml-0 bg-light-navy rounded-lg p-6 border border-teal/20 hover:border-teal/50 transition-all ${
                  index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white mb-2 md:mb-0">
                    {exp.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span className="flex items-center gap-2">
                      <FaCalendarAlt className="text-teal" />
                      {exp.period}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-teal mb-4">
                  <FaMapMarkerAlt />
                  <span className="font-semibold">{exp.company}</span>
                  <span className="text-gray-400">• {exp.location}</span>
                </div>

                <ul className="space-y-2 mt-4">
                  {exp.description.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: itemIndex * 0.1 }}
                      className="text-gray-400 flex items-start gap-2"
                    >
                      <span className="text-teal mt-2">▹</span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

