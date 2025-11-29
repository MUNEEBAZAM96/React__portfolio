'use client'

import { motion } from 'framer-motion'
import {
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiGit,
  SiGithub,
  SiBash,
} from 'react-icons/si'
import { FaUnity } from 'react-icons/fa'

const skillCategories = [
  {
    title: 'Languages',
    skills: [
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'Express', icon: SiExpress, color: '#000000' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    ],
  },
  {
    title: 'Software & Tools',
    skills: [
      { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'GitHub', icon: SiGithub, color: '#181717' },
      { name: 'Bash', icon: SiBash, color: '#4EAA25' },
      { name: 'Unity', icon: FaUnity, color: '#000000' },
    ],
  },
]

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section
      id="skills"
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
            Skills & <span className="text-teal">Technologies</span>
          </h2>
          <div className="w-24 h-1 bg-teal mx-auto" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="bg-navy/50 rounded-lg p-6 border border-teal/20"
            >
              <h3 className="text-2xl font-semibold text-teal mb-6">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {category.skills.map((skill, skillIndex) => {
                  const Icon = skill.icon
                  return (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex flex-col items-center p-4 bg-light-navy rounded-lg border border-teal/10 hover:border-teal/50 transition-all cursor-pointer group"
                    >
                      <Icon
                        size={48}
                        color={skill.color}
                        className="mb-3 group-hover:scale-110 transition-transform"
                      />
                      <span className="text-sm text-gray-300 font-medium text-center">
                        {skill.name}
                      </span>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

