import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiUser, FiCode, FiPhone, FiMail, FiMapPin } from 'react-icons/fi'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  const information = [
    { icon: <FiUser />, label: 'Name', value: 'Shruthika V' },
    { icon: <FiCode />, label: 'Role', value: 'Software Developer' },
    { icon: <FiPhone />, label: 'Phone', value: '7558191630' },
    { icon: <FiMail />, label: 'Email', value: 'shruthikavenugopal1630@gmail.com' },
    { icon: <FiMapPin />, label: 'Location', value: 'Singanallur, Coimbatore-641005' },
  ]

  return (
    <section id="about" className="section bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
        >
          <h2 className="section-title">
            About <span className="text-primary-500">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Who am I?
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                I'm Shruthika V, a passionate Software Developer with experience in creating responsive 
                web applications and mobile solutions. I specialize in modern JavaScript frameworks, 
                particularly React.js and React Native.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Currently working at Mindmade Technologies, I've developed various web and mobile 
                applications, focusing on creating intuitive user interfaces and implementing 
                complex functionalities.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                I enjoy solving real-world problems through code and continuously learning new 
                technologies to enhance my skill set.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {information.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md"
                >
                  <div className="mr-4 text-primary-500 dark:text-primary-400">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{item.label}</p>
                    <p className="font-medium text-gray-900 dark:text-white">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
