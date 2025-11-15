import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      icon: Github,
      url: 'https://github.com/harshmarthak63',
      label: 'GitHub',
      color: 'hover:text-gray-300',
    },
    {
      icon: Twitter,
      url: 'https://x.com/HarshMarthak',
      label: 'X (Twitter)',
      color: 'hover:text-blue-400',
    },
    {
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/harshmarthak',
      label: 'LinkedIn',
      color: 'hover:text-blue-500',
    },
    {
      icon: Mail,
      url: 'https://mail.google.com/mail/?view=cm&to=harshmarthak63@gmail.com',
      label: 'Gmail',
      color: 'hover:text-red-400',
    },
  ];

  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-gray-600 text-center md:text-left"
          >
            © 2025 Harsh Marthak. Built with love, passion and clean code.
          </motion.p>

          <div className="flex space-x-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className={`text-gray-600 ${social.color} transition-colors duration-200`}
                aria-label={social.label}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
