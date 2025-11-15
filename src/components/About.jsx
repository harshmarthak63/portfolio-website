import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      id="about"
      ref={ref}
      className="min-h-screen flex items-center justify-center py-20 w-full overflow-x-hidden"
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center md:justify-end order-2 md:order-1"
          >
            <motion.div
              className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden soft-glow"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="/profile.png"
                alt="Harsh Marthak"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'flex';
                }}
              />
              <div className="w-full h-full bg-gradient-to-br from-teal-500/20 via-blue-500/20 to-lavender-500/20 flex items-center justify-center hidden">
                <span className="text-6xl font-bold gradient-text">HM</span>
              </div>
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-500/30 via-blue-500/30 to-lavender-500/30 blur-2xl -z-10"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4 sm:space-y-6 order-1 md:order-2"
          >
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              I’m a Software Developer with 5+ years of experience building high-quality, modern web applications. I specialize in single-page applications (SPAs), end-to-end web solutions, and creating clean, user-focused interfaces that are both performant and SEO-friendly.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            I’m passionate about AI-powered development, Web3 technologies, and the next wave of innovation shaping the future of software. I love solving complex problems, optimizing workflows, and engineering scalable solutions that support real business impact.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Alongside my full-time roles, I also work as a freelance developer, helping clients bring their ideas to life with fast, reliable, and modern digital experiences.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
