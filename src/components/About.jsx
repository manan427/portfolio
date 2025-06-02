import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { personalInfo } from '../data';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="about" className="section-padding bg-neutral-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="section-title"
          >
            About Me
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-24 h-1 bg-primary-500 mx-auto rounded-full mb-6"
          ></motion.div>
        </div>

        <div ref={ref} className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Image Column */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full lg:w-2/5"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary-200 rounded-xl transform translate-x-4 translate-y-4"></div>
              <img 
                src={personalInfo.profileImage} 
                alt={personalInfo.name} 
                className="rounded-xl w-full h-auto relative z-10 object-cover shadow-lg"
              />
              
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg z-20">
                <p className="text-sm font-medium">
                  <span className="text-primary-500 text-3xl font-bold">2+</span><br/>
                  Years of Experience
                </p>
              </div>
            </div>
          </motion.div>
          
          {/* Content Column */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full lg:w-3/5"
          >
            <h3 className="text-2xl font-bold mb-4">
              Frontend Developer specializing in building exceptional digital experiences
            </h3>
            
            <p className="text-neutral-700 leading-relaxed mb-6">
              {personalInfo.bio}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-primary-500 mr-2"></div>
                <span className="text-neutral-700 font-medium">
                  <span className="font-bold text-neutral-900">Name:</span> {personalInfo.name}
                </span>
              </div>
              
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-primary-500 mr-2"></div>
                <span className="text-neutral-700 font-medium">
                  <span className="font-bold text-neutral-900">Email:</span> {personalInfo.email}
                </span>
              </div>
              
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-primary-500 mr-2"></div>
                <span className="text-neutral-700 font-medium">
                  <span className="font-bold text-neutral-900">Phone:</span> {personalInfo.phone}
                </span>
              </div>
              
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-primary-500 mr-2"></div>
                <span className="text-neutral-700 font-medium">
                  <span className="font-bold text-neutral-900">Location:</span> {personalInfo.location}
                </span>
              </div>
            </div>
            
            <a href={personalInfo.resumeUrl} className="btn btn-primary">
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;