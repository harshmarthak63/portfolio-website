import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Cloud } from 'lucide-react';
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiDocker,
  SiFigma,
  SiFirebase,
  SiNextdotjs,
  SiExpress,
} from 'react-icons/si';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', icon: SiReact, level: 95 },
        { name: 'Next.js', icon: SiNextdotjs, level: 90 },
        { name: 'JavaScript', icon: SiJavascript, level: 95 },
        { name: 'TypeScript', icon: SiTypescript, level: 85 },
        { name: 'HTML5', icon: SiHtml5, level: 98 },
        { name: 'CSS3', icon: SiCss3, level: 95 },
        { name: 'Tailwind CSS', icon: SiTailwindcss, level: 92 },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: SiNodedotjs, level: 90 },
        { name: 'Express.js', icon: SiExpress, level: 88 },
        { name: 'Python', icon: SiPython, level: 85 },
        { name: 'MongoDB', icon: SiMongodb, level: 88 },
        { name: 'PostgreSQL', icon: SiPostgresql, level: 82 },
        { name: 'Firebase', icon: SiFirebase, level: 80 },
      ],
    },
    {
      title: 'Tools & DevOps',
      skills: [
        { name: 'Git', icon: SiGit, level: 95 },
        { name: 'Docker', icon: SiDocker, level: 75 },
        { name: 'AWS', icon: Cloud, level: 70 },
        { name: 'Figma', icon: SiFigma, level: 80 },
      ],
    },
  ];

  return (
    <section
      id="skills"
      ref={ref}
      className="min-h-screen py-20 w-full overflow-x-hidden"
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-8 text-center md:text-left gradient-text">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: categoryIndex * 0.2 + index * 0.1,
                    }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-gray-100 border border-gray-200 p-4 sm:p-6 rounded-xl card-hover text-center group"
                  >
                    <skill.icon className="text-4xl sm:text-5xl mx-auto mb-3 sm:mb-4 text-teal-400 group-hover:text-teal-300 transition-colors" />
                    <h4 className="font-semibold mb-2 sm:mb-3 text-gray-800 text-sm sm:text-base">{skill.name}</h4>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.2 + index * 0.1 + 0.3,
                          ease: 'easeOut',
                        }}
                        className="bg-gradient-to-r from-teal-500 to-blue-500 h-2 rounded-full"
                      />
                    </div>
                    <p className="text-xs text-gray-600">{skill.level}%</p>
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
