import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import Modal from './Modal';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [selectedExperience, setSelectedExperience] = useState(null);

  const experiences = [
    {
      id: 1,
      title: 'Senior Software Engineer',
      company: 'Vistaar Technologies',
      location: 'Dubai, UAE',
      period: '2020 - Present',
      description: 'Leading development of scalable web applications and modern software solutions.',
      fullDescription: `As a Senior Software Engineer at Vistaar Technologies, I contributed as part of the core product team, leading the development of scalable web applications and modern software solutions. My role involved architecting robust systems, mentoring team members, and partnering with cross-functional teams to deliver high-quality, user-centric products.

I have successfully delivered several Proofs of Concept (POCs) by quickly understanding problem statements, designing efficient and intuitive UI workflows, collecting iterative feedback, and securing alignment from stakeholders. This helped accelerate product decision-making and validated new feature directions.

•   Design and development of multiple enterprise solution websites, pricing solutions and dashboards for clients across diverse domains using React.js, Next.js and Ext.js.

•   Developed reusable components such as Filter Panel, DataGrid, and Import/Export modules, improving consistency and speed by 40% and reducing duplication across the platform. 

•   Led the development of VistaarAskQ Copilot, including modules like Response Viewer, Prompt Editor, Synonyms Manager, and Chat Mode using Open AI (LLMs).

•   Delivered multiple Proofs of Concept (POCs) by rapidly understanding requirements, designing efficient UI solutions, gathering feedback, and securing stakeholder approval by 90%.

•   Contributed to the ExtJS migration (6.5.3 to 7.4.0) initiative, enhancing component performance, modularity, and compatibility. Resulted in 20% code removal and better developer experience.

•   Implemented key dashboard features such as Filter Bar Docking, event-driven runtime updates, responsive layouts, and role-based control handling. Achieved a 30% boost in chart and DataGrid rendering speed through code and data processing optimizations.

•   Actively collaborated with QA and support teams to address S2-level production issues, ensuring stable releases and quick turnaround. Ensured 100% on-time resolution of critical tickets within defined SLAs.`,

      technologies: ['React.js', 'Ext.js', 'Next.js', 'Node.js', 'TypeScript', 'JavaScript', 'Redux',
        'AWS', 'Docker', 'Nginx', 'Webpack', 'VegaLite', 'Elastic Search', 'Kibana',
        'CI/CD Pipelines', 'Git', 'GitHub', 'HG Workbench', 'Mercurial' ],
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800',
    },
  ];

  return (
    <section
      id="experience"
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
            My <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-1 lg:grid-cols-1 gap-4 sm:gap-6 md:gap-8 max-w-2xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedExperience(exp)}
              className="bg-gray-100 border border-gray-200 rounded-xl p-6 cursor-pointer card-hover group"
            >
              <div className="relative h-40 sm:h-48 mb-4 rounded-lg overflow-hidden">
                <img
                  src={exp.image}
                  alt={exp.company}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
              </div>

              <div className="space-y-2 sm:space-y-3">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-1 group-hover:text-teal-600 transition-colors text-gray-900">
                    {exp.title}
                  </h3>
                  <p className="text-teal-600 font-semibold text-sm sm:text-base">{exp.company}</p>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={16} />
                    <span>{exp.location}</span>
                  </div>
                </div>

                <p className="text-gray-700 text-xs sm:text-sm line-clamp-3">{exp.description}</p>

                <div className="flex items-center gap-2 text-teal-600 text-sm font-semibold group-hover:gap-3 transition-all">
                  <span>View Details</span>
                  <ExternalLink size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Modal
        isOpen={!!selectedExperience}
        onClose={() => setSelectedExperience(null)}
        title={selectedExperience ? `${selectedExperience.title} at ${selectedExperience.company}` : ''}
      >
        {selectedExperience && (
          <div className="space-y-4 sm:space-y-6">
            <div className="relative h-48 sm:h-64 rounded-lg overflow-hidden">
              <img
                src={selectedExperience.image}
                alt={selectedExperience.company}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm">
              <div className="flex items-center gap-2 text-gray-600">
                <Calendar size={16} className="sm:w-[18px] sm:h-[18px]" />
                <span>{selectedExperience.period}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin size={16} className="sm:w-[18px] sm:h-[18px]" />
                <span>{selectedExperience.location}</span>
              </div>
            </div>

            <div className="prose prose-invert max-w-none">
              <p className="text-gray-700 leading-relaxed whitespace-pre-line text-sm sm:text-base">
                {selectedExperience.fullDescription}
              </p>
            </div>

            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {selectedExperience.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 sm:px-3 py-1 bg-teal-500/10 text-teal-400 text-xs sm:text-sm rounded-full border border-teal-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Experience;

