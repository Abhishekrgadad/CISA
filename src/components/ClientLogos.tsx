import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export const ClientLogos: React.FC = () => {
  const { t } = useTranslation();

  const clients = [
    { name: 'TechCorp', logo: 'https://via.placeholder.com/120x60/3B82F6/FFFFFF?text=TechCorp' },
    { name: 'SecureBank', logo: 'https://via.placeholder.com/120x60/10B981/FFFFFF?text=SecureBank' },
    { name: 'DataFlow', logo: 'https://via.placeholder.com/120x60/F59E0B/FFFFFF?text=DataFlow' },
    { name: 'CyberShield', logo: 'https://via.placeholder.com/120x60/EF4444/FFFFFF?text=CyberShield' },
    { name: 'InfoGuard', logo: 'https://via.placeholder.com/120x60/8B5CF6/FFFFFF?text=InfoGuard' },
    { name: 'NetSecure', logo: 'https://via.placeholder.com/120x60/06B6D4/FFFFFF?text=NetSecure' },
    { name: 'SafeTech', logo: 'https://via.placeholder.com/120x60/84CC16/FFFFFF?text=SafeTech' },
    { name: 'ProtectPro', logo: 'https://via.placeholder.com/120x60/F97316/FFFFFF?text=ProtectPro' }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('clients.title')}
          </h2>
        </motion.div>

        <div className="relative">
          <div className="flex space-x-8 animate-scroll">
            {[...clients, ...clients].map((client, index) => (
              <motion.div
                key={`${client.name}-${index}`}
                className="flex-shrink-0 bg-white dark:bg-gray-800/50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700/50"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
};