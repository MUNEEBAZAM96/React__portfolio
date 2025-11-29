'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section
      id="about"
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
            About <span className="text-teal">Me</span>
          </h2>
          <div className="w-24 h-1 bg-teal mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div
              variants={itemVariants}
              className="relative w-full max-w-md mx-auto"
            >
              <div className="absolute inset-0 border-2 border-teal rounded-lg transform rotate-6" />
              <div className="relative bg-light-navy rounded-lg p-2">
                <div className="relative w-full h-96 bg-gray-800 rounded-lg overflow-hidden">
                  <Image
                    src="https://via.placeholder.com/400x500/64FFDA/0A192F?text=Muneeb+Ur+Rehman"
                    alt="Muneeb Ur Rehman"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.p variants={itemVariants} className="text-lg text-gray-400 leading-relaxed">
              Hello! I'm <span className="text-teal font-semibold">Muneeb Ur Rehman</span>, an
              aspiring software engineer with a passion for creating innovative web applications
              and engaging game experiences.
            </motion.p>

            <motion.p variants={itemVariants} className="text-lg text-gray-400 leading-relaxed">
              I'm currently pursuing my <span className="text-white font-semibold">Bachelor's
              degree in Software Engineering</span> at <span className="text-teal">Fast NUCES</span>,
              with an expected graduation date of <span className="text-white">June 2027</span>.
            </motion.p>

            <motion.p variants={itemVariants} className="text-lg text-gray-400 leading-relaxed">
              My interests lie in <span className="text-teal">AI-integrated web applications</span> and
              <span className="text-teal"> game development</span>. I enjoy exploring the intersection
              of artificial intelligence and user experience, creating applications that are both
              intelligent and intuitive.
            </motion.p>

            <motion.p variants={itemVariants} className="text-lg text-gray-400 leading-relaxed">
              When I'm not coding, you can find me working on personal projects, contributing to
              open-source, or learning about the latest technologies in web and game development.
            </motion.p>

            {/* Education Highlight */}
            <motion.div
              variants={itemVariants}
              className="mt-8 p-6 bg-light-navy rounded-lg border border-teal/20"
            >
              <h3 className="text-xl font-semibold text-white mb-2">Education</h3>
              <p className="text-gray-300">
                <span className="text-teal">Bachelor's in Software Engineering</span>
                <br />
                Fast NUCES | Expected Graduation: June 2027
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

