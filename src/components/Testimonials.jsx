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
      name: 'Viral Patni',
      role: 'Founder',
      company: 'Higher Vision',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200',
      shortText: 'Harsh built our website from scratch and delivered it faster than expected. We truly appreciated his efficiency and professionalism.',
      fullText: `Harsh built our recruitment firm's website from scratch, and we couldn't be happier with the results. What impressed us most was his ability to deliver the project faster than the agreed timeline without compromising on quality.

From the initial consultation to the final launch, Harsh demonstrated exceptional professionalism and technical expertise. He understood our business needs as a recruitment firm and created a website that perfectly represents our brand and helps us connect with potential clients and candidates.

The website is modern, user-friendly, and performs excellently. We truly appreciated his efficiency, attention to detail, and commitment to delivering value. I would highly recommend Harsh to any business looking for a reliable and skilled web developer.`,
      rating: 5,
    },
    {
      id: 2,
      name: 'Muskaan Shaikh',
      role: 'Senior Software Engineer',
      company: 'Vistaar Technologies',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200',
      shortText: 'Working alongside Harsh has been a great experience. I always appreciate his dedication, technical skills, and collaborative approach to problem-solving.',
      fullText: `I've had the pleasure of working with Harsh as a colleague at Vistaar Technologies since we both joined the company together. Throughout our time working together, I've consistently been impressed by his dedication, technical expertise, and collaborative spirit.

Harsh has an exceptional ability to tackle complex challenges with innovative solutions. His code quality is outstanding, and he always ensures that his work is well-documented and maintainable. What I appreciate most about working with Harsh is his willingness to share knowledge, help teammates, and contribute to the team's success.

His attention to detail and commitment to delivering high-quality work is evident in everything he does. Harsh is not just a skilled developer but also a great team player who brings positive energy to every project. I always appreciate his work and would highly recommend him to any team looking for a talented and reliable software engineer.`,
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
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">{testimonial.name}</h4>
                    <p className="text-xs sm:text-sm text-gray-600">
                      {testimonial.role} at {testimonial.company}
                    </p>
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
            <div className="pb-3 sm:pb-4 border-b border-gray-200">
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

