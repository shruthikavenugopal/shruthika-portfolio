import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiBriefcase, FiCalendar } from 'react-icons/fi'

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const experienceData = [
    {
      title: "Software Developer",
      company: "Mindmade Technologies",
      period: "Nov 2023 - Present",
      description: "Working as a full-stack developer creating web and mobile applications using React.js and React Native.",
      responsibilities: [
        "Developing responsive web applications using React.js, HTML, CSS, and JavaScript",
        "Building mobile applications using React Native for both Android and iOS platforms",
        "Implementing RESTful API integrations and state management with Redux",
        "Collaborating with design teams to transform wireframes into responsive interfaces",
        "Testing and debugging applications across multiple browsers and devices"
      ],
      projects: [
        {
          name: "Allendreyfus",
          description: "A content-based news website delivering up-to-date information and insightful analysis on South African news and blogs.",
          tech: "React.js, HTML, CSS, Bootstrap, JavaScript, Redux, Git, Postman"
        },
        {
          name: "PSG Institute of Architecture and Planning",
          description: "A responsive website for PSG Institute of Architecture with intuitive interface for course listings, event calendars, and admission details.",
          tech: "React.js, HTML, CSS, Bootstrap, JavaScript, Redux, Git, Postman, cPanel"
        },
        {
          name: "Tickatrip",
          description: "A comprehensive online platform for booking flights and hotels, as well as accessing travel-related blogs.",
          tech: "React.js, HTML, CSS, Bootstrap, JavaScript, Redux, cPanel, Git, Postman"
        },
        {
          name: "Prasanna-Jewellers",
          description: "An e-commerce website specializing in wholesaling idols and ornaments.",
          tech: "React.js, HTML, CSS, Bootstrap, JavaScript, Redux, Git, Postman, cPanel"
        },
        {
          name: "Prasanna-Jewellers Mobile App",
          description: "An e-commerce mobile application specializing in wholesaling idols and ornaments.",
          tech: "React Native, CSS, Bootstrap, JavaScript, Redux, Git, Postman, cPanel, Firebase"
        },
        {
          name: "Cakey",
          description: "A home-baked cakes online shopping app with features like product listings, secure payments, and order tracking.",
          tech: "React Native, CSS, Bootstrap, JavaScript, Redux, Git, Postman, Firebase, Razorpay, Google location"
        },
                {
          name: "Mahil",
          description: "A React Native app for ordering irrigation products online and tracking delivery..",
          tech: "React Native, CSS, Bootstrap, JavaScript, Redux, Git, Postman, Firebase, Razorpay, Google location"
        }

      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section id="experience" className="section bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Professional <span className="text-primary-500">Experience</span>
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700"></div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="space-y-12"
            >
              {experienceData.map((experience, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -top-2 w-5 h-5 rounded-full bg-primary-500"></div>

                  <div className="md:w-1/2 md:ml-auto md:pl-12 pl-10">
                    <div className="card">
                      <div className="flex items-center mb-2">
                        <FiBriefcase className="text-primary-500 mr-2" />
                        <h3 className="text-xl font-bold">{experience.title}</h3>
                      </div>
                      <h4 className="text-lg text-primary-600 dark:text-primary-400 font-medium mb-1">
                        {experience.company}
                      </h4>
                      <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                        <FiCalendar className="mr-2" />
                        <span>{experience.period}</span>
                      </div>
                      <p className="mb-4 text-gray-700 dark:text-gray-300">
                        {experience.description}
                      </p>

                      <h5 className="font-semibold text-lg mb-2">Responsibilities:</h5>
                      <ul className="list-disc pl-5 mb-6 space-y-1 text-gray-700 dark:text-gray-300">
                        {experience.responsibilities.map((responsibility, rIndex) => (
                          <li key={rIndex}>{responsibility}</li>
                        ))}
                      </ul>

                      <h5 className="font-semibold text-lg mb-2">Projects:</h5>
                      <div className="space-y-4">
                        {experience.projects.map((project, pIndex) => (
                          <div key={pIndex} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                            <h6 className="font-semibold text-primary-600 dark:text-primary-400 mb-1">
                              {project.name}
                            </h6>
                            <p className="text-sm mb-2 text-gray-700 dark:text-gray-300">
                              {project.description}
                            </p>
                            <div className="flex flex-wrap gap-1">
                              {project.tech.split(", ").map((tech, tIndex) => (
                                <span 
                                  key={tIndex} 
                                  className="inline-block text-xs px-2 py-1 bg-gray-200 dark:bg-gray-600 rounded-full"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
