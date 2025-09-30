import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, User } from 'lucide-react';

export const Blog: React.FC = () => {
  const { t } = useTranslation();
  const [activePost, setActivePost] = React.useState<number | null>(null);

  const blogPosts = [
    {
      id: 1,
      title: 'It’s No Longer a Question of “If” – It’s “When” You’ll Be Hacked',
      excerpt: 'Cybersecurity threats are real, and no business—large or small—is completely safe.',
      description: (
        <>
          <p>
            The internet is often described as the new Wild West—and for good reason. Every second, countless cyberattacks target devices, networks, and systems worldwide. Hackers don’t sleep, and they don’t play fair. Cybersecurity threats are real, and no business—large or small—is completely safe.
          </p>
          <h3 className="mt-6 mb-2 font-semibold text-lg">🌐 The Growing Cyber Threat Landscape</h3>
          <p>
            As businesses expand their digital footprint, the number of potential vulnerabilities grows. Public-facing services, cloud applications, and IoT devices create multiple attack vectors. Most organizations lack a complete overview of their attack surface, leaving overlooked backups, outdated software, and misconfigured devices exposed.
          </p>
          <p>
            Cybercrime is no longer just a threat to large corporations. Small and medium-sized businesses are increasingly targeted because attackers assume their defenses are weaker. No organization is too small or too “safe” to be hacked.
          </p>
          <h4 className="mt-4 mb-2 font-semibold">SEO Keywords:</h4>
          <ul className="list-disc ml-6 mb-4">
            <li>cyber threats</li>
            <li>digital security</li>
            <li>attack surface</li>
            <li>cybercrime</li>
          </ul>
          <h3 className="mt-6 mb-2 font-semibold text-lg">📊 Cybersecurity Statistics You Need to Know</h3>
          <ul className="list-disc ml-6 mb-4">
            <li>Every 39 seconds, a cyberattack occurs globally, translating to over 2,200 attacks per day.</li>
            <li>In Q2 2024, cyberattacks increased by 30%, with organizations experiencing an average of 1,636 attacks per week.</li>
            <li>Over 30,000 new security vulnerabilities were discovered in 2024, a 17% increase year-over-year.</li>
            <li>90% of organizations are exposed to at least one attack path, with 61% leading to sensitive accounts.</li>
          </ul>
          <p>
            These numbers highlight why understanding and defending your attack surface is more critical than ever.
          </p>
          <h4 className="mt-4 mb-2 font-semibold">SEO Keywords:</h4>
          <ul className="list-disc ml-6 mb-4">
            <li>cyberattack statistics</li>
            <li>vulnerabilities</li>
            <li>security risks</li>
            <li>data protection</li>
          </ul>
          <h3 className="mt-6 mb-2 font-semibold text-lg">🕵️‍♂️ Real-World Cyberattack Examples</h3>
          <ol className="list-decimal ml-6 mb-4">
            <li>
              <strong>Kido Nursery – Data Breach:</strong> In 2025, Kido Nursery in the UK suffered a cyberattack, compromising the personal information of 8,000 children. Attackers released some profiles publicly and demanded a ransom. This demonstrates that even trusted institutions are vulnerable.
            </li>
            <li>
              <strong>Jaguar Land Rover – Factory Production Halt:</strong> A ransomware attack in August 2025 forced Jaguar Land Rover to suspend factory operations in the UK. Systems managing parts, vehicles, and sales were disrupted, showing how cyberattacks impact critical infrastructure.
            </li>
            <li>
              <strong>Harrods – Customer Data Exposed:</strong> In September 2025, Harrods reported a breach affecting a third-party service provider, compromising customer names and contact information. This incident highlights the importance of securing third-party vendors and supply chains.
            </li>
          </ol>
          <h4 className="mt-4 mb-2 font-semibold">SEO Keywords:</h4>
          <ul className="list-disc ml-6 mb-4">
            <li>cyberattack examples</li>
            <li>ransomware</li>
            <li>data breaches</li>
            <li>business security</li>
          </ul>
          <h3 className="mt-6 mb-2 font-semibold text-lg">🔍 Why Penetration Testing is Essential</h3>
          <p>
            Penetration testing (pentesting) identifies vulnerabilities before attackers exploit them. By simulating real-world cyberattacks, pentests reveal weaknesses in your systems, networks, and applications.
          </p>
          <p>
            At CISA, our pentesting services go beyond vulnerability scanning. We provide actionable insights, prioritize security improvements, and strengthen your defenses against cyber threats.
          </p>
          <h4 className="mt-4 mb-2 font-semibold">SEO Keywords:</h4>
          <ul className="list-disc ml-6 mb-4">
            <li>penetration testing</li>
            <li>pentest services</li>
            <li>vulnerability assessment</li>
            <li>network security</li>
          </ul>
          <h3 className="mt-6 mb-2 font-semibold text-lg">🛡️ Preparing for the Inevitable Cyberattack</h3>
          <p>
            Assuming a breach will happen changes the focus from fear to preparation. Organizations should:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li><strong>Develop an Incident Response Plan:</strong> Respond effectively to breaches.</li>
            <li><strong>Conduct Regular Vulnerability Assessments:</strong> Identify and fix weaknesses continuously.</li>
            <li><strong>Train Employees:</strong> Recognize phishing and social engineering attacks.</li>
            <li><strong>Implement Advanced Monitoring and Detection:</strong> Detect unusual activity early.</li>
          </ul>
          <p>
            A proactive approach reduces risk, mitigates damage, and safeguards your reputation.
          </p>
          <h4 className="mt-4 mb-2 font-semibold">SEO Keywords:</h4>
          <ul className="list-disc ml-6 mb-4">
            <li>incident response</li>
            <li>cybersecurity preparedness</li>
            <li>threat detection</li>
            <li>employee training</li>
          </ul>
          <h3 className="mt-6 mb-2 font-semibold text-lg">✅ Conclusion</h3>
          <p>
            The question isn’t if your organization will be hacked—it’s when. By understanding your attack surface, performing regular penetration tests, and implementing robust cybersecurity strategies, you can stay ahead of potential threats.
          </p>
          <p>
            At CISA, we help businesses gain clarity in the complex cyber landscape. Protect your data, systems, and clients—because in cybersecurity, being proactive isn’t optional; it’s essential.
          </p>
          <h4 className="mt-4 mb-2 font-semibold">SEO Keywords:</h4>
          <ul className="list-disc ml-6 mb-4">
            <li>cybersecurity strategy</li>
            <li>protect business</li>
            <li>data protection</li>
            <li>cyber resilience</li>
          </ul>
        </>
      ),
      image: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Sarah Johnson',
      date: '2025-01-10',
      category: 'Security'
    },
    {
      id: 6,
      title: 'The Human Factor: Employee Training in Cybersecurity',
      excerpt: 'Why employee education is crucial for cybersecurity and how to implement effective security awareness programs.',
      description: (
        <>
          <p>
            Employees are often the weakest link in cybersecurity. Comprehensive training programs can empower staff to recognize threats, follow best practices, and respond appropriately to incidents.
          </p>
          <p>
            Effective security awareness initiatives include regular workshops, simulated phishing exercises, and clear communication of policies.
          </p>
        </>
      ),
      image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Robert Kim',
      date: '2024-12-28',
      category: 'Training'
    }
  ];
  const popupRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    if (activePost === null) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
        setActivePost(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [activePost]);

  return (
    <div className="pt-24 min-h-screen bg-white dark:bg-black dark:text-white relative">
      {/* Blur overlay when popup is active */}
      {activePost !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-30 bg-black/30 backdrop-blur-sm"
        />
      )}
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 ${activePost !== null ? 'pointer-events-none select-none blur-sm' : ''}`}>
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
              whileHover={{ scale: 1.05, boxShadow: '0 8px 32px rgba(0,0,0,0.15)' }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 cursor-pointer"
              onClick={() => setActivePost(post.id)}
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
      {/* Popup for active post */}
      {activePost !== null && (
        <motion.div
          id="blog-popup"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="fixed inset-0 z-40 flex items-center justify-center"
        >
          <div
            ref={popupRef}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-4xl w-full p-0 flex flex-col md:flex-row relative"
          >
            {(() => {
              const post = blogPosts.find(p => p.id === activePost);
              if (!post) return null;
              return (
                <>
                  {/* Left: Card details */}
                  <div className="md:w-1/2 w-full p-8 flex flex-col items-center border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-800">
                    <img src={post.image} alt={post.title} className="w-full h-56 object-cover rounded-xl mb-6" />
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
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">{post.title}</h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 text-center">{post.excerpt}</p>
                  </div>
                  {/* Right: Description */}
                  <div className="md:w-1/2 w-full p-8 flex flex-col">
                   <div className="flex-1 overflow-y-auto max-h-[32rem] pr-2"></div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4"></h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{post.description}</p>
                  </div>
                </>
              );
            })()}
          </div>
        </motion.div>
      )}
    </div>
  );
};