import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight, Shield } from 'lucide-react';

export const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="pt-24 pb-16 bg-white dark:bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-pattern dark:opacity-50"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              {t('hero.tagline')}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              {t('hero.subtitle')}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 space-x-2"
            >
              <span>{t('hero.cta')}</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-8 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-700/20 rounded-2xl backdrop-blur-sm"></div>
              <div className="relative z-10 text-center">
                <Shield className="w-32 h-32 mx-auto text-white mb-4" />
                <div className="grid grid-cols-2 gap-4 text-white">
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl font-bold">24/7</div>
                    <div className="text-sm">Protection</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl font-bold">99.9%</div>
                    <div className="text-sm">Uptime</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl font-bold">500+</div>
                    <div className="text-sm">Clients</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl font-bold">10+</div>
                    <div className="text-sm">Years</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};