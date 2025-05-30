import { motion } from 'framer-motion';
import {
  FaCss3Alt,
  FaGitAlt,
  FaHtml5,
  FaJs,
  FaReact
} from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { useInView } from 'react-intersection-observer';
import { skills } from '../data';

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const getIconComponent = (iconName) => {
    const iconMap = {
      html5: <FaHtml5 className="text-[#E34F26] text-4xl" />,
      css3: <FaCss3Alt className="text-[#1572B6] text-4xl" />,
      javascript: <FaJs className="text-[#F7DF1E] text-4xl" />,
      react: <FaReact className="text-[#61DAFB] text-4xl" />,
      tailwind: <SiTailwindcss className="text-[#06B6D4] text-4xl" />,
      git: <FaGitAlt className="text-[#F05032] text-4xl" />,
      
      // Flutterflow as SVG (inline or from file)
      flutterflow: (
        <img
          src="/icons/flutterflow.svg"
          alt="Flutterflow"
          className="w-10 h-10"
          loading="lazy"
        />
      ),
      
      // Supabase and Bubble as PNG
      supabase: (
        <img
          src="/icons/supabase.png"
          alt="Supabase"
          className="w-10 h-10 object-contain"
          loading="lazy"
        />
      ),
      bubble: (
        <img
          src="/icons/bubble.png"
          alt="Bubble"
          className="w-10 h-10 object-contain"
          loading="lazy"
        />
      ),
    };

    return iconMap[iconName] || (
      <div className="w-10 h-10 bg-neutral-300 rounded-full"></div>
    );
  };

  return (
    <section id="skills" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="section-title"
          >
            My Skills
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-24 h-1 bg-primary-500 mx-auto rounded-full mb-6"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="section-subtitle"
          >
            Here are the technologies and tools I work with
          </motion.p>
        </div>

        <div ref={ref} className="space-y-16">
          {skills.map((skillCategory, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-2xl font-bold text-neutral-800 mb-8">
                {skillCategory.category}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {skillCategory.items.map((skill, index) => (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    key={index}
                    className="card p-6 hover:-translate-y-2 transform transition-all rounded-lg shadow-md bg-white"
                  >
                    <div className="flex flex-col items-center">
                      <div className="mb-4">{getIconComponent(skill.icon)}</div>
                      <h4 className="text-lg font-medium mb-3">{skill.name}</h4>
                      <div className="w-full bg-neutral-200 rounded-full h-2 mb-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : {}}
                          transition={{
                            duration: 1,
                            delay: 0.5 + 0.1 * index,
                          }}
                          className="h-full rounded-full bg-primary-500"
                        />
                      </div>
                      <span className="text-sm text-neutral-600">{skill.level}%</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
