import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiBook, FiCalendar, FiMapPin } from 'react-icons/fi'

const Education = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const educationData = [
    {
      degree: "Bachelor of Information Technology",
      institution: "Nehru Arts and Science College, Coimbatore",
      period: "2020 - 2023",
      description: "Completed my Bachelor's degree with a focus on programming, web development, and computer science fundamentals."
    }
  ]

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section id="education" className="section bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
        >
          <h2 className="section-title">
            My <span className="text-primary-500">Education</span>
          </h2>

          <div className="max-w-3xl mx-auto">
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card relative border-l-4 border-primary-500 pl-6"
              >
                <div className="absolute -left-2.5 top-6 w-5 h-5 rounded-full bg-primary-500"></div>
                
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {item.degree}
                  </h3>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 mt-1 md:mt-0">
                    <FiCalendar className="mr-1" />
                    <span>{item.period}</span>
                  </div>
                </div>
                
                <div className="flex items-center mb-4 text-gray-700 dark:text-gray-300">
                  <FiMapPin className="mr-2 text-primary-500" />
                  <span>{item.institution}</span>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300">
                  {item.description}
                </p>
                
                <div className="mt-6 py-4 border-t border-gray-200 dark:border-gray-700">
                  <h4 className="font-semibold mb-3 flex items-center">
                    <FiBook className="mr-2 text-primary-500" />
                    Languages
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    <div className="skill-badge">Tamil</div>
                    <div className="skill-badge">Malayalam</div>
                    <div className="skill-badge">English</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education