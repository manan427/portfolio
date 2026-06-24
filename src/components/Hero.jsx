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
      <div className="absolute inset-0 bg-neutral-950 z-0"></div>
      <div className="glow-spot glow-spot-primary top-1/4 left-1/4 w-[500px] h-[500px] opacity-20"></div>
      <div className="glow-spot glow-spot-accent bottom-1/4 right-1/4 w-[400px] h-[400px] opacity-25"></div>
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#33415510_1px,transparent_1px),linear-gradient(to_bottom,#33415510_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30"></div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary-500/30 bg-primary-500/10 text-primary-400 text-sm font-medium mb-6 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-primary-400 animate-pulse"></span>
            Available for new opportunities
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-8xl font-black mb-6 tracking-tight"
          >
            <span className="block text-neutral-400 text-lg md:text-2xl font-light tracking-widest uppercase mb-3">
              Hello, I'm
            </span>
            <span className="bg-gradient-to-r from-white via-neutral-100 to-neutral-500 bg-clip-text text-transparent">
              {name}
            </span>
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-3xl font-light text-neutral-400 mb-10 tracking-wide max-w-2xl mx-auto"
          >
            Building <span className="text-white font-medium">AI-powered systems</span>, scalable backends, & automation pipelines.
          </motion.h2>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-16">
            <ScrollLink to="projects" smooth={true} duration={800} className="btn btn-primary px-8 cursor-pointer">
              Explore Projects
            </ScrollLink>
            <ScrollLink to="contact" smooth={true} duration={800} className="btn btn-outline px-8 cursor-pointer">
              Get in Touch
            </ScrollLink>
          </motion.div>

          {/* Social Media Icons */}
          <motion.div variants={itemVariants} className="flex justify-center space-x-4">
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
                    className="w-12 h-12 rounded-xl bg-neutral-900/60 border border-neutral-800/80 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-700 hover:shadow-lg hover:shadow-primary-500/10 hover:-translate-y-1 transition-all duration-300"
                  >
                    <span className="text-xl">{icon}</span>
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
