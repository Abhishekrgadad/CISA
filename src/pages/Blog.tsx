import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, User } from 'lucide-react';

export const Blog: React.FC = () => {
  const { t } = useTranslation();

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Cybersecurity: AI-Powered Threat Detection',
      excerpt: 'Discover how artificial intelligence is revolutionizing cybersecurity and helping organizations stay ahead of evolving threats.',
      image: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Sarah Johnson',
      date: '2025-01-10',
      category: 'AI Security'
    },
    {
      id: 2,
      title: 'Zero Trust Architecture: A Complete Implementation Guide',
      excerpt: 'Learn how to implement zero trust security model in your organization to protect against modern cyber threats.',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Michael Chen',
      date: '2025-01-08',
      category: 'Architecture'
    },
    {
      id: 3,
      title: 'Phishing Evolution: New Techniques and Defense Strategies',
      excerpt: 'Explore the latest phishing techniques used by cybercriminals and effective strategies to protect your organization.',
      image: 'https://images.pexels.com/photos/4792728/pexels-photo-4792728.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Emma Rodriguez',
      date: '2025-01-05',
      category: 'Social Engineering'
    },
    {
      id: 4,
      title: 'Cloud Security Best Practices for Modern Businesses',
      excerpt: 'Essential security measures every organization should implement when moving to cloud infrastructure.',
      image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'David Park',
      date: '2025-01-03',
      category: 'Cloud Security'
    },
    {
      id: 5,
      title: 'Incident Response Planning: Preparing for the Inevitable',
      excerpt: 'How to create an effective incident response plan to minimize damage and recover quickly from security breaches.',
      image: 'https://images.pexels.com/photos/5380792/pexels-photo-5380792.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Lisa Thompson',
      date: '2025-01-01',
      category: 'Incident Response'
    },
    {
      id: 6,
      title: 'The Human Factor: Employee Training in Cybersecurity',
      excerpt: 'Why employee education is crucial for cybersecurity and how to implement effective security awareness programs.',
      image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Robert Kim',
      date: '2024-12-28',
      category: 'Training'
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-white dark:bg-black dark:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t('blog.title')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('blog.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                  <span className="mx-2">•</span>
                  <User className="w-4 h-4 mr-2" />
                  <span>{post.author}</span>
                </div>
                <span className="inline-block px-3 py-1 text-xs font-semibold bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full mb-3">
                  {post.category}
                </span>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 leading-tight">
                  {post.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <motion.button
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium space-x-2"
                >
                  <span>{t('blog.readMore')}</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};