import { motion } from 'framer-motion';
import {
  FaArrowDown,
  FaDribbble,
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';
import { personalInfo } from '../data';

const Hero = () => {
  const { name, title, resumeUrl, socialLinks } = personalInfo;

  const iconMap = {
    github: <FaGithub />,
    linkedin: <FaLinkedinIn />,
    twitter: <FaTwitter />,
    dribbble: <FaDribbble />,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.6, 0.05, 0.01, 0.9],
      },
    },
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-accent-50 z-0"></div>
      <div className="absolute top-40 right-20 w-64 h-64 bg-primary-300/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 left-20 w-80 h-80 bg-accent-300/20 rounded-full blur-3xl"></div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          <motion.p variants={itemVariants} className="text-primary-600 font-medium mb-2">
            Hello, I'm
          </motion.p>
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent"
          >
            {name}
          </motion.h1>
          <motion.h2
            variants={itemVariants}
            className="text-xl md:text-2xl text-neutral-700 mb-6"
          >
            {title}
          </motion.h2>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
            <ScrollLink to="contact" smooth={true} duration={800} className="btn btn-primary px-8">
              Contact Me
            </ScrollLink>
            <a href={resumeUrl} className="btn btn-outline" target="_blank" rel="noopener noreferrer">
              Download Resume
            </a>
          </motion.div>

          {/* Social Media Icons */}
          <motion.div variants={itemVariants} className="flex justify-center space-x-4 mb-16">
            {socialLinks.map((link, index) => {
              const icon = iconMap[link.platform.toLowerCase()];
              const url = link.url.startsWith('http') ? link.url : `https://${link.url}`;
              return (
                icon && (
                  <a
                    key={index}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.platform}
                    className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-neutral-700 hover:text-primary-500 hover:shadow-lg transition-all duration-300"
                  >
                    {icon}
                  </a>
                )
              );
            })}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1.5,
          duration: 1,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center"
      >
        <div className="flex flex-col items-center">
          <span className="text-sm text-neutral-600 mb-2">Scroll Down</span>
          <FaArrowDown className="text-primary-500" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
