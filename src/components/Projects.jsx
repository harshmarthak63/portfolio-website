import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import Modal from './Modal';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with payment integration and admin dashboard. (On Going)',
      fullDescription: `A comprehensive e-commerce platform built with modern technologies. Features include user authentication, product catalog, shopping cart, payment processing with Stripe, order management, and an admin dashboard for inventory and sales management.

The platform handles thousands of concurrent users and processes transactions securely. It includes features like product search, filtering, reviews, wishlist, and email notifications.`,
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Express.js'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800',
      github: 'https://github.com/harshmarthak63/mern-ecommerce',
      demo: 'https://mern-ecommerce-fwwgbyyi3-harsh-marthaks-projects.vercel.app/',
      features: [
        'User authentication & authorization',
        'Product catalog with search & filters',
        'Shopping cart & checkout',
        'Payment processing with Stripe',
        'Order management system',
        'Admin dashboard',
      ],
    },
    {
      id: 2,
      title: 'To Do App',
      description: 'A simple and intuitive to-do application for managing daily tasks and productivity.',
      fullDescription: `A clean and user-friendly to-do application designed to help users stay organized and productive. Built with modern web technologies, it provides a seamless experience for creating, managing, and tracking tasks.

The app features a minimalist design that focuses on simplicity and ease of use. Users can quickly add tasks, mark them as complete, organize by categories, and filter tasks based on their status. It includes local storage to persist data and smooth animations for an enhanced user experience.`,
      technologies: ['React', 'Local Storage', 'Tailwind CSS', 'Framer Motion'],
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800',
      github: 'https://github.com',
      demo: 'https://example.com',
      features: [
        'Add and delete tasks',
        'Mark tasks as complete',
        'Task categories and filtering',
        'Local storage persistence',
        'Smooth animations',
        'Responsive design',
      ],
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website showcasing projects and skills.',
      fullDescription: `A beautiful portfolio website built with React and Tailwind CSS. Features smooth animations, responsive design, and an elegant user interface that effectively showcases projects, skills, and experience.

The website includes sections for about, experience, skills, projects, testimonials, and contact. It's fully responsive and optimized for performance.`,
      technologies: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800',
      github: 'https://github.com',
      demo: 'https://harshmarthak.netlify.app/',
      features: [
        'Responsive design',
        'Smooth animations',
        'Project showcase',
        'Contact form',
        'Performance optimized',
        'Modern UI/UX',
      ],
    },
  ];

  return (
    <section
      id="projects"
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
            Recent <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedProject(project)}
              className="bg-gray-100 border border-gray-200 rounded-xl overflow-hidden cursor-pointer card-hover group"
            >
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent" />
              </div>

              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-teal-600 transition-colors text-gray-900">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 sm:py-1 bg-teal-500/10 text-teal-400 text-[10px] sm:text-xs rounded-full border border-teal-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-0.5 sm:py-1 bg-gray-200 text-gray-600 text-[10px] sm:text-xs rounded-full">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2 text-teal-400 text-xs sm:text-sm font-semibold group-hover:gap-3 transition-all">
                  <span>View Details</span>
                  <ExternalLink size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title || ''}
      >
        {selectedProject && (
          <div className="space-y-4 sm:space-y-6">
            <div className="relative h-48 sm:h-64 rounded-lg overflow-hidden">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-2">Description</h4>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line text-sm sm:text-base">
                {selectedProject.fullDescription}
              </p>
            </div>

            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">Key Features</h4>
              <ul className="grid sm:grid-cols-2 gap-2">
                {selectedProject.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-700 text-sm sm:text-base">
                    <span className="text-teal-400 mt-1 flex-shrink-0">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 sm:px-3 py-1 bg-teal-500/10 text-teal-400 text-xs sm:text-sm rounded-full border border-teal-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 border-t border-gray-200">
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors text-sm sm:text-base"
              >
                <Github size={18} className="sm:w-5 sm:h-5" />
                <span>View Code</span>
              </a>
              <a
                href={selectedProject.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-lg hover:from-teal-600 hover:to-blue-600 transition-all text-sm sm:text-base"
              >
                <ExternalLink size={18} className="sm:w-5 sm:h-5" />
                <span>Live Demo</span>
              </a>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Projects;
