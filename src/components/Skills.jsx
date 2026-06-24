import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaPython, FaJs, FaReact, FaAngular, FaBootstrap, FaGithub, 
  FaDatabase, FaServer, FaBrain, FaTerminal, FaRobot, 
  FaSlidersH, FaRoute, FaCode, FaCheckCircle, FaChartBar,
  FaTv, FaClock, FaNetworkWired, FaLaptopCode, FaProjectDiagram, 
  FaFileCode, FaSync
} from 'react-icons/fa';
import { 
  SiFastapi, SiTailwindcss, SiPostgresql, SiFirebase, SiSupabase, 
  SiAnsible, SiPandas, SiNumpy
} from 'react-icons/si';
import { skills } from '../data';

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const getIconComponent = (iconName) => {
    const iconMap = {
      python: <FaPython className="text-[#3776AB]" />,
      fastapi: <SiFastapi className="text-[#009688]" />,
      api: <FaServer className="text-[#0ea5e9]" />,
      javascript: <FaJs className="text-[#F7DF1E]" />,
      react: <FaReact className="text-[#61DAFB]" />,
      angular: <FaAngular className="text-[#DD0031]" />,
      tailwind: <SiTailwindcss className="text-[#06B6D4]" />,
      bootstrap: <FaBootstrap className="text-[#7952B3]" />,
      brain: <FaBrain className="text-[#ec4899]" />,
      terminal: <FaTerminal className="text-[#10b981]" />,
      agent: <FaRobot className="text-[#a855f7]" />,
      tpot: <FaSlidersH className="text-[#f97316]" />,
      gemini: <FaBrain className="text-[#4f46e5]" />,
      openai: <FaRobot className="text-[#10b981]" />,
      pandas: <SiPandas className="text-[#150458]" />,
      numpy: <SiNumpy className="text-[#013243]" />,
      pipeline: <FaRoute className="text-[#3b82f6]" />,
      dataproc: <FaCode className="text-[#64748b]" />,
      validation: <FaCheckCircle className="text-[#10b981]" />,
      visualization: <FaChartBar className="text-[#ec4899]" />,
      postgresql: <SiPostgresql className="text-[#4169E1]" />,
      mssql: <FaDatabase className="text-[#cc292b]" />,
      sqlopt: <FaDatabase className="text-[#eab308]" />,
      queryrewrite: <FaSync className="text-[#06b6d4]" />,
      firebase: <SiFirebase className="text-[#FFCA28]" />,
      supabase: <SiSupabase className="text-[#3ECF8E]" />,
      zabbix: <FaTv className="text-[#d01116]" />,
      ansible: <SiAnsible className="text-[#EE0000]" />,
      cron: <FaClock className="text-[#64748b]" />,
      sse: <FaNetworkWired className="text-[#0ea5e9]" />,
      github: <FaGithub className="text-white" />,
      browserstack: <FaLaptopCode className="text-[#0ea5e9]" />,
      openproject: <FaProjectDiagram className="text-[#0ea5e9]" />,
      sublime: <FaFileCode className="text-[#f97316]" />
    };

    return iconMap[iconName] || <FaCode className="text-neutral-400" />;
  };

  return (
    <section id="skills" className="section-padding bg-neutral-950 relative overflow-hidden">
      {/* Background glow spot */}
      <div className="glow-spot glow-spot-primary bottom-0 right-10 w-[300px] h-[300px] opacity-10"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="section-title"
          >
            Skills &amp; Expertise
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mb-6"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="section-subtitle"
          >
            A comprehensive overview of my technical stack and engineering capabilities
          </motion.p>
        </div>

        <div ref={ref} className="space-y-16 max-w-5xl mx-auto">
          {skills.map((skillCategory, categoryIndex) => (
            <motion.div 
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * categoryIndex }}
              className="glass-card bg-neutral-900/30 border-neutral-800/40 p-6 md:p-8"
            >
              <h3 className="text-xl font-bold text-white mb-6 border-l-4 border-primary-500 pl-3">
                {skillCategory.category}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {skillCategory.items.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-neutral-900/60 border border-neutral-800/80 hover:border-primary-500/30 hover:bg-neutral-900 transition-all duration-300 group"
                  >
                    <div className="text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      {getIconComponent(skill.icon)}
                    </div>
                    <span className="font-medium text-sm text-neutral-300 group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
