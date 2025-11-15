import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import Modal from './Modal';

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Product Manager',
      company: 'TechCorp',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200',
      shortText: 'Harsh delivered an exceptional project that exceeded our expectations. His attention to detail and technical expertise are outstanding.',
      fullText: `Working with Harsh was an absolute pleasure. He delivered an exceptional project that exceeded our expectations in every way. His attention to detail, technical expertise, and ability to understand complex requirements are outstanding.

Harsh consistently went above and beyond to ensure the project's success. He was always responsive, proactive in suggesting improvements, and maintained excellent communication throughout the development process. The final product was not only functional but also beautifully designed and performant.

I would highly recommend Harsh for any software development project. He's a true professional who combines technical skills with a collaborative approach.`,
      rating: 5,
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'CTO',
      company: 'StartupHub',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200',
      shortText: 'Professional, reliable, and incredibly skilled. Harsh transformed our vision into a reality with clean, maintainable code.',
      fullText: `Harsh is one of the most professional and skilled developers I've had the pleasure of working with. He transformed our vision into a reality with clean, maintainable code that our team can easily build upon.

His ability to balance technical excellence with business requirements is remarkable. He consistently delivered on time and was always available to discuss solutions and improvements. The project he built for us has become a cornerstone of our platform.

I'm grateful for Harsh's contributions and would work with him again without hesitation.`,
      rating: 5,
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Design Lead',
      company: 'Creative Agency',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200',
      shortText: 'Harsh brings both technical excellence and creative problem-solving. A true asset to any development team.',
      fullText: `Harsh brings a unique combination of technical excellence and creative problem-solving to every project. Working with him has been a fantastic experience, and the results speak for themselves.

He has an incredible ability to translate design concepts into functional, beautiful applications. His code is clean, well-documented, and follows best practices. More importantly, he's a great collaborator who values feedback and continuously improves.

The projects we've worked on together have been successful, and I attribute much of that success to Harsh's dedication and expertise. He's a true asset to any development team.`,
      rating: 5,
    },
    {
      id: 4,
      name: 'David Thompson',
      role: 'Founder',
      company: 'InnovateLabs',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200',
      shortText: 'Outstanding developer with a keen eye for detail. Harsh delivered a product that perfectly matched our requirements.',
      fullText: `Harsh is an outstanding developer with a keen eye for detail and a deep understanding of modern web technologies. He delivered a product that perfectly matched our requirements and exceeded our expectations.

Throughout the project, Harsh demonstrated excellent communication skills, keeping us informed of progress and proactively addressing potential issues. His technical solutions were elegant and efficient, and he always considered the long-term maintainability of the codebase.

I'm extremely satisfied with the work Harsh delivered and would highly recommend him to anyone looking for a skilled, reliable developer.`,
      rating: 5,
    },
    {
      id: 5,
      name: 'Lisa Anderson',
      role: 'Senior Developer',
      company: 'CodeMasters',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200',
      shortText: 'Harsh is a brilliant problem solver. His code quality and architecture decisions are top-notch. Highly recommended!',
      fullText: `Harsh is a brilliant problem solver who consistently delivers high-quality solutions. His code quality and architecture decisions are top-notch, and he has a deep understanding of software engineering principles.

Working alongside Harsh has been an incredible learning experience. He's always willing to share knowledge, explain complex concepts, and help the team grow. His contributions to our codebase have significantly improved our development velocity and code maintainability.

I would highly recommend Harsh to any team looking for a skilled developer who brings both technical expertise and a collaborative spirit.`,
      rating: 5,
    },
    {
      id: 6,
      name: 'James Wilson',
      role: 'Project Manager',
      company: 'Digital Solutions',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200',
      shortText: 'Exceptional communication and project management skills. Harsh made our collaboration seamless and productive.',
      fullText: `Harsh possesses exceptional communication and project management skills that made our collaboration seamless and productive. He always kept us informed, provided realistic timelines, and delivered exactly what was promised.

What impressed me most was his ability to understand business requirements and translate them into technical solutions. He's not just a developer - he's a strategic partner who thinks about the bigger picture.

The project was completed on time, within budget, and exceeded our quality expectations. I would definitely work with Harsh again on future projects.`,
      rating: 5,
    },
    {
      id: 7,
      name: 'Maria Garcia',
      role: 'CEO',
      company: 'TechVenture',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200',
      shortText: 'Harsh helped us build a scalable platform that supports our growing business. His expertise is invaluable.',
      fullText: `Harsh helped us build a scalable platform that now supports our growing business. His expertise in modern web technologies and best practices is invaluable. The system he built is robust, performant, and can handle our increasing user base.

Throughout the development process, Harsh was professional, responsive, and always focused on delivering value. He understood our business needs and provided solutions that not only met but exceeded our expectations.

I'm grateful for Harsh's contributions to our success and would recommend him to any business looking for a reliable, skilled developer.`,
      rating: 5,
    },
    {
      id: 8,
      name: 'Robert Kim',
      role: 'Lead Architect',
      company: 'CloudTech',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200',
      shortText: 'Outstanding technical skills and attention to detail. Harsh writes clean, efficient, and well-documented code.',
      fullText: `Harsh demonstrates outstanding technical skills and attention to detail in everything he does. He writes clean, efficient, and well-documented code that makes maintenance a breeze.

His understanding of modern development practices, design patterns, and performance optimization is impressive. He consistently delivers solutions that are not only functional but also elegant and maintainable.

Working with Harsh has been a pleasure, and I've learned a lot from his approach to problem-solving and code architecture. He's a developer I would trust with any complex project.`,
      rating: 5,
    },
  ];

  const testimonialsPerPage = 4;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  const getCurrentPageTestimonials = () => {
    const startIndex = currentIndex * testimonialsPerPage;
    const endIndex = startIndex + testimonialsPerPage;
    return testimonials.slice(startIndex, endIndex);
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const goToPage = (pageIndex) => {
    setCurrentIndex(pageIndex);
  };

  return (
    <section
      id="testimonials"
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
            <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            What clients and colleagues say about working with me
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8"
            >
              {getCurrentPageTestimonials().map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  onClick={() => setSelectedTestimonial(testimonial)}
                  className="bg-gray-100 border border-gray-200 rounded-xl p-4 sm:p-6 cursor-pointer card-hover"
                >
                  <Quote className="text-teal-400 mb-3 sm:mb-4" size={28} />
                  <p className="text-gray-700 mb-4 sm:mb-6 line-clamp-3 text-sm sm:text-base">
                    {testimonial.shortText}
                  </p>
                  <div className="flex items-center gap-3 sm:gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm sm:text-base">{testimonial.name}</h4>
                      <p className="text-xs sm:text-sm text-gray-600">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <div className="mt-3 sm:mt-4 flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center items-center gap-4">
            <button
              onClick={prevTestimonial}
              disabled={currentIndex === 0}
              className="p-3 bg-gray-200 hover:bg-gray-300 rounded-full text-teal-500 transition-colors border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Previous page"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToPage(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-teal-400 w-8'
                      : 'bg-gray-600 hover:bg-gray-500 w-2'
                  }`}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              disabled={currentIndex === totalPages - 1}
              className="p-3 bg-gray-200 hover:bg-gray-300 rounded-full text-teal-500 transition-colors border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Next page"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          <div className="text-center mt-4 text-sm text-gray-600">
            Page {currentIndex + 1} of {totalPages}
          </div>
        </div>
      </div>

      <Modal
        isOpen={!!selectedTestimonial}
        onClose={() => setSelectedTestimonial(null)}
        title="Client Testimonial"
      >
        {selectedTestimonial && (
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-center gap-3 sm:gap-4 pb-3 sm:pb-4 border-b border-gray-200">
              <img
                src={selectedTestimonial.image}
                alt={selectedTestimonial.name}
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover flex-shrink-0"
              />
              <div className="min-w-0">
                <h4 className="text-lg sm:text-xl font-semibold text-gray-900">
                  {selectedTestimonial.name}
                </h4>
                <p className="text-gray-600 text-sm sm:text-base">
                  {selectedTestimonial.role} at {selectedTestimonial.company}
                </p>
                <div className="flex gap-1 mt-1 sm:mt-2">
                  {[...Array(selectedTestimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-sm sm:text-base">★</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative">
              <Quote className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 text-teal-400/20 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20" />
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg relative z-10">
                {selectedTestimonial.fullText}
              </p>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Testimonials;

