import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Globe, Award, Target, CheckCircle } from 'lucide-react';

export const About: React.FC = () => {
  const industries = [
    'Finance & Banking',
    'Healthcare & Life Sciences',
    'Government & Public Sector',
    'Retail & E-commerce',
    'Energy & Utilities',
    'Manufacturing & OT',
    'Telecommunications & Technology'
  ];

  const expertise = [
    { icon: Shield, title: 'Firewalls & Network Security' },
    { icon: Target, title: 'Endpoint Protection' },
    { icon: Globe, title: 'Cloud Security' },
    { icon: Users, title: 'IoT & OT Environments' }
  ];

  return (
    <div className="pt-24 min-h-screen bg-white dark:bg-black dark:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About CISA B.V.
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            At CISA B.V., we believe cybersecurity should be accessible, effective, and tailored to every organization's unique challenges.
          </p>
        </motion.div>

        {/* Founder Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
        >
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Founded by Expertise
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Founded by{' '}
              <a
              href="https://www.linkedin.com/in/nielshoekman/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-blue-600 hover:underline"
              >
              Niels Hoekman (Founder &amp; CEO)
              </a>
              , a cybersecurity professional with over a decade of experience, CISA B.V. was created with a vision to deliver security services with integrity, transparency, and measurable results.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Niels previously worked at leading companies including <strong>IBM, Check Point, Sysdig, and Palo Alto Networks</strong>, building expertise in firewalls, endpoint protection, cloud security, IoT, and OT environments.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Cybersecurity Expert"
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>
        </motion.div>

        {/* Expertise Areas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Our Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertise.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 text-center border border-gray-200 dark:border-gray-800"
                >
                  <Icon className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Team Structure */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 mb-20 border border-gray-200 dark:border-gray-800"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Our Team Structure
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Independence & Strength
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Backed by a private investor, CISA B.V. brings the strength of independence combined with real-world experience.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Expert Network
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Niels works alongside a technical lead and a network of highly skilled ethical hackers, ensuring clients benefit from top-level expertise while keeping the team structure lean and agile.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Industries Served */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Industries We Serve
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-8">
            Our specialists have supported Fortune 500 companies and organizations across industries such as:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                className="flex items-center space-x-3 bg-white dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-800"
              >
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-900 dark:text-white font-medium">{industry}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white"
        >
          <Award className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl leading-relaxed max-w-4xl mx-auto">
            To help organizations stay ahead of evolving cyber threats with trusted, independent cybersecurity expertise. Whether you require proactive assessments, incident response, or long-term strategy, CISA B.V. is your partner in building a secure digital future.
          </p>
          <div className="mt-8 text-lg">
            <p className="font-semibold">Operating with global reach and local expertise</p>
            <p className="mt-2 opacity-90">We work remotely and on-site, depending on client needs.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};