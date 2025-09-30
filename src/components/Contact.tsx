import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Send, Quote } from 'lucide-react';

export const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const testimonials = [
    {
      id: 1,
      review: "CISA's security awareness training transformed our company culture. Our employees are now our strongest defense against cyber threats.",
      name: "Sarah Johnson",
      company: "TechCorp Solutions",
      rating: 5
    },
    {
      id: 2,
      review: "The penetration testing revealed critical vulnerabilities we never knew existed. CISA's expertise saved us from potential disasters.",
      name: "Michael Chen",
      company: "SecureBank Ltd",
      rating: 5
    },
    {
      id: 3,
      review: "Professional, thorough, and reliable. CISA's vulnerability scanning service gives us peace of mind and regulatory compliance.",
      name: "Emma Rodriguez",
      company: "DataFlow Industries",
      rating: 5
    },
    {
      id: 4,
      review: "Outstanding phishing campaign simulations. Our team's security awareness improved dramatically after working with CISA.",
      name: "David Park",
      company: "CyberShield Corp",
      rating: 5
    },
    {
      id: 5,
      review: "CISA's in-house security partnership model is exactly what we needed. Expert guidance without the overhead costs.",
      name: "Lisa Thompson",
      company: "InfoGuard Systems",
      rating: 5
    },
    {
      id: 6,
      review: "Exceptional service quality and deep cybersecurity expertise. CISA helped us build a robust security infrastructure.",
      name: "Robert Kim",
      company: "NetSecure Technologies",
      rating: 5
    }
  ];

  const [result, setResult] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResult("Sending...");
    const formDataObj = new FormData(e.target as HTMLFormElement);
    formDataObj.append("access_key", "4987e65e-fac8-4aae-aacf-fb3a7660319f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formDataObj
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      setFormData({ name: '', email: '', message: '' });
    } else {
      setResult(data.message || "Submission failed.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  // Testimonial Card Flip Animation
  const [activeIndex, setActiveIndex] = useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % testimonials.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Testimonials Section - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {t('testimonials.title')}
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                {t('testimonials.subtitle')}
              </p>
            </div>

            {/* Testimonial Card Flip - Left Side, Fade & Slide Animation */}
            <div className="relative h-80 flex justify-center items-center overflow-hidden">
              {testimonials.map((testimonial, index) => {
              const isActive = index === activeIndex;
              const isPrev =
                (activeIndex === 0 && index === testimonials.length - 1) ||
                index === activeIndex - 1;

              return (
                <motion.div
                key={testimonial.id}
                className="absolute w-[28rem] h-72"
                style={{
                  zIndex: isActive ? 3 : isPrev ? 2 : 1,
                  pointerEvents: isActive ? 'auto' : 'none',
                }}
                animate={
                  isActive
                  ? {
                    opacity: 1,
                    x: 0,
                    scale: 1,
                    rotate: 0,
                    }
                  : isPrev
                  ? {
                    opacity: 0.6,
                    x: -120,
                    scale: 0.92,
                    rotate: -8,
                    }
                  : {
                    opacity: 0,
                    x: 0,
                    scale: 0.9,
                    rotate: 0,
                    }
                }
                transition={{
                  type: 'spring',
                  stiffness: 80,
                  damping: 18,
                  duration: 1.1,
                }}
                >
                <motion.div
                  initial={false}
                  animate={isActive ? { scale: 1 } : { scale: 0.96 }}
                  transition={{ duration: 0.6 }}
                  className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-800 w-full h-full flex flex-col justify-between"
                >
                  <div>
                  <div className="flex items-start space-x-3 mb-4">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full">
                    <Quote className="w-5 h-5 text-blue-600 dark:text-blue-400 transform rotate-180" />
                    </div>
                    <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">★</span>
                    ))}
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    "{testimonial.review}"
                  </p>
                  </div>
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {testimonial.company}
                  </p>
                  </div>
                </motion.div>
                </motion.div>
              );
              })}
            </div>
            </motion.div>

          {/* Contact Form - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-800"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t('contact.form.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-200"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t('contact.form.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-200"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t('contact.form.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-200"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>{t('contact.form.submit')}</span>
              
                <Send className="w-5 h-5" />
              </motion.button>
            </form>
              <span>{result}</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};