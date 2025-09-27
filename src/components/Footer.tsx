import React from 'react';
import { useTranslation } from 'react-i18next';
import { Shield, Linkedin, MessageCircle, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

export const Footer: React.FC = () => {
  const { t } = useTranslation();

  const services = [
    { key: 'awareness', href: '/#services' },
    { key: 'scanning', href: '/#services' },
    { key: 'testing', href: '/#services' },
    { key: 'phishing', href: '/#services' }
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/nielshoekman/', label: 'LinkedIn' },
    { icon: MessageCircle, href: 'https://wa.me/1234567890', label: 'WhatsApp' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' }
  ];

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-2 mb-6">
              <Shield className="w-8 h-8 text-blue-400" />
              <span className="text-xl font-bold">CISA</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {t('hero.subtitle')}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="p-2 bg-gray-800 hover:bg-blue-600 rounded-lg transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-6">{t('footer.services')}</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.key}>
                  <a
                    href={service.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {t(`services.${service.key}.title`)}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold mb-6">{t('footer.company')}</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/#services"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {t('nav.services')}
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {t('nav.blog')}
                </a>
              </li>
              <li>
                <a
                  href="/#contact"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {t('nav.contact')}
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">© 2025 CISA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};