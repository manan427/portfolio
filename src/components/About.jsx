import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBriefcase, FaGraduationCap, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { personalInfo, experience, education } from '../data';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="about" className="section-padding bg-neutral-900/20 relative overflow-hidden">
      {/* Background blur decoration */}
      <div className="glow-spot glow-spot-accent top-1/2 left-10 w-[300px] h-[300px] opacity-10"></div>

      <div className="container-custom relative z-10" ref={ref}>
        {/* Section Header */}
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
            className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mb-6"
          ></motion.div>
        </div>

        {/* Part A: Professional Profile Summary */}
        <div className="max-w-4xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card bg-neutral-900/60 border-neutral-800/80 p-8 md:p-10 shadow-xl"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              Professional Summary
            </h3>
            
            <p className="text-neutral-300 leading-relaxed text-lg mb-8">
              {personalInfo.bio}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-neutral-800/80">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary-500/10 border border-primary-500/20 text-primary-400 flex items-center justify-center flex-shrink-0">
                  <FaEnvelope />
                </div>
                <div className="overflow-hidden">
                  <span className="block text-xs text-neutral-500 uppercase tracking-wider">Email</span>
                  <a href={`mailto:${personalInfo.email}`} className="text-sm font-medium text-neutral-300 hover:text-white transition-colors truncate block">
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent-500/10 border border-accent-500/20 text-accent-400 flex items-center justify-center flex-shrink-0">
                  <FaPhone />
                </div>
                <div>
                  <span className="block text-xs text-neutral-500 uppercase tracking-wider">Phone</span>
                  <a href={`tel:${personalInfo.phone.replace(/\D/g, '')}`} className="text-sm font-medium text-neutral-300 hover:text-white transition-colors block">
                    {personalInfo.phone}
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <span className="block text-xs text-neutral-500 uppercase tracking-wider">Location</span>
                  <span className="text-sm font-medium text-neutral-300 block">
                    {personalInfo.location}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Part B: Timelines Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <FaBriefcase className="text-primary-500 text-2xl" />
              <h3 className="text-2xl font-bold text-white">Work Experience</h3>
            </div>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 before:w-0.5 before:bg-neutral-800">
              {experience.map((exp, idx) => (
                <div key={idx} className="relative pl-10 group">
                  {/* Timeline Node */}
                  <span className="absolute left-2.5 top-1.5 w-3.5 h-3.5 rounded-full bg-neutral-950 border-2 border-primary-500 group-hover:bg-primary-500 transition-all duration-300"></span>
                  
                  <div className="glass-card glass-card-hover p-6 bg-neutral-900/40 border-neutral-800/60 shadow-lg">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary-500/10 border border-primary-500/20 text-primary-400 mb-3">
                      {exp.period}
                    </span>
                    <h4 className="text-lg font-bold text-white mb-1 group-hover:text-primary-400 transition-colors">
                      {exp.role}
                    </h4>
                    <p className="text-neutral-400 font-medium text-sm mb-4">
                      {exp.company} &bull; {exp.location}
                    </p>
                    <ul className="space-y-2 text-neutral-300 text-sm list-disc pl-4">
                      {exp.highlights.map((bullet, bulletIdx) => (
                        <li key={bulletIdx} className="leading-relaxed">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <FaGraduationCap className="text-accent-500 text-2xl" />
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 before:w-0.5 before:bg-neutral-800">
              {education.map((edu, idx) => (
                <div key={idx} className="relative pl-10 group">
                  {/* Timeline Node */}
                  <span className="absolute left-2.5 top-1.5 w-3.5 h-3.5 rounded-full bg-neutral-950 border-2 border-accent-500 group-hover:bg-accent-500 transition-all duration-300"></span>
                  
                  <div className="glass-card glass-card-hover p-6 bg-neutral-900/40 border-neutral-800/60 shadow-lg">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-accent-500/10 border border-accent-500/20 text-accent-400 mb-3">
                      Completed in {edu.year}
                    </span>
                    <h4 className="text-lg font-bold text-white mb-1 group-hover:text-accent-400 transition-colors">
                      {edu.degree}
                    </h4>
                    <p className="text-neutral-400 font-medium text-sm mb-4">
                      {edu.institution} &bull; {edu.location}
                    </p>
                    <div className="inline-flex items-center px-2.5 py-1 rounded bg-neutral-800 border border-neutral-700 text-xs font-medium text-emerald-400">
                      Grade: {edu.score}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;