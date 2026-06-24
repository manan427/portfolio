import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaTerminal } from 'react-icons/fa';
import { projects } from '../data';

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="projects" className="section-padding bg-neutral-900/10 relative overflow-hidden">
      {/* Background glow spot */}
      <div className="glow-spot glow-spot-primary top-1/4 left-1/3 w-[400px] h-[400px] opacity-10"></div>
      <div className="glow-spot glow-spot-emerald bottom-1/4 right-1/3 w-[350px] h-[350px] opacity-10"></div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="section-title"
          >
            Featured Projects
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mb-6"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="section-subtitle"
          >
            A showcase of systems, automation engines, and agentic AI platforms I have designed and deployed
          </motion.p>
        </div>
        
        <div 
          ref={ref} 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="glass-card glass-card-hover bg-neutral-900/40 border-neutral-800/80 shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Card Title & Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary-500/10 border border-primary-500/20 text-primary-400 flex items-center justify-center">
                      <FaTerminal />
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  
                  {/* Action links if available */}
                  <div className="flex gap-2">
                    {project.codeUrl && (
                      <a 
                        href={project.codeUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-white flex items-center justify-center transition-colors"
                        aria-label="GitHub Repository"
                      >
                        <FaGithub size={15} />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-white flex items-center justify-center transition-colors"
                        aria-label="Live Demo"
                      >
                        <FaExternalLinkAlt size={13} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.techStack.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-neutral-800/80 border border-neutral-700/60 text-neutral-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Highlights List */}
                <ul className="space-y-2.5 text-neutral-300 text-sm list-disc pl-4 leading-relaxed mb-6">
                  {project.highlights.map((bullet, bulletIdx) => (
                    <li key={bulletIdx} className="relative">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;