import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar, User, Linkedin } from 'lucide-react';

export const SecurityInsights: React.FC = () => {
  const { t } = useTranslation();

  const articles = [
    {
      id: 1,
      title: 'Another giant just got hit. CrowdStrike',
      excerpt: 'This is not a small incident. Over 180 packages have been compromised so far, including@crowdstrike.',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Niels Hoekman',
      // date: '2025-01-15',
      category: 'Security Architecture',
      linkedinUrl: 'https://www.linkedin.com/posts/nielshoekman_another-giant-just-got-hit-crowdstrike-activity-7373770662621892609-cr7P/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAzJ9RUB62msZNlYj_cEd9qGzxodBD7d6ak'
    },
    {
      id: 2,
      title: 'Intel Broker claims a major data breach at Cisco. ',
      excerpt: 'IntelBroker is a Serbian black hat hacker active since October 2022, who has committed several high-profile cyber attacks.',
      image: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Niels Hoekman',
      // date: '2025-01-12',
      category: 'Security',
      linkedinUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7251834327368351744/'
    },
    {
      id: 3,
      title: 'A Game-Changer in Cloud Security?',
      excerpt: 'Big news in the cloud security world: Wiz and Check Point are teaming up to create what they claim will be the industrys most comprehensive cloud protection solution.',
      image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Niels Hoekman',
      // date: '2025-01-10',
      category: 'Cloud Security',
      linkedinUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7295415775102750720/?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A7295415775102750720%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29'
    },
    //  {
    //   id: 4,
    //   title: 'Zero Trust Security: The Future of Cybersecurity',
    //   excerpt: 'Learn how zero trust architecture is revolutionizing cybersecurity and protecting modern businesses from evolving threats.',
    //   image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600',
    //   author: 'Niels Hoekman',
    //   date: '2025-01-15',
    //   category: 'Security Architecture',
    //   linkedinUrl: 'https://www.linkedin.com/posts/nielshoekman_another-giant-just-got-hit-crowdstrike-activity-7373770662621892609-cr7P/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAzJ9RUB62msZNlYj_cEd9qGzxodBD7d6ak'
    // },
    // {
    //   id: 5,
    //   title: 'AI-Powered Threat Detection: Game Changer',
    //   excerpt: 'Discover how artificial intelligence is transforming threat detection and response capabilities in modern cybersecurity.',
    //   image: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=600',
    //   author: 'Niels Hoekman',
    //   date: '2025-01-12',
    //   category: 'AI Security',
    //   linkedinUrl: 'https://www.linkedin.com/posts/your-profile-2'
    // },
    // {
    //   id: 6,
    //   title: 'Cloud Security Best Practices for 2025',
    //   excerpt: 'Essential security measures every organization should implement in their cloud infrastructure to stay protected.',
    //   image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=600',
    //   author: 'Niels Hoekman',
    //   date: '2025-01-10',
    //   category: 'Cloud Security',
    //   linkedinUrl: 'https://www.linkedin.com/posts/your-profile-3'
    // }
  ];

  return (
    <section className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('insights.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('insights.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.a
              key={article.id}
              href={article.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-800 block"
            >
              <div className="aspect-w-16 aspect-h-9">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-48 object-cover"
          />
              </div>
              <div className="p-6">
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
            <User className="w-4 h-4 mr-2" />
            <span>{article.author}</span>
          </div>

          <span className="inline-block px-3 py-1 text-xs font-semibold bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full mb-3">
            {article.category}
          </span>
          
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 leading-tight">
            {article.title}
          </h3>
          
          <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
            {article.excerpt}
          </p>
          
          <div className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium space-x-2 bg-blue-50 dark:bg-blue-900/20 px-4 py-2 rounded-lg">
            <Linkedin className="w-4 h-4" />
            <span>View on LinkedIn</span>
            <ExternalLink className="w-4 h-4" />
          </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};