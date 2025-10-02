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
      author: ' Niels Hoekman',
      date: '2025-01-10',
      category: 'Security'
    },
    {
      id: 2,
      title: "Cloud Security: Not Just for the Big Players – It's a Necessity for All",
      excerpt: "Cloud security is a shared responsibility. Ignoring it is like leaving your house keys with a landlord and assuming burglars won’t notice.",
      description: (
        <>
          <p>
            You’ve probably heard it before: “We’re on the cloud now, security isn’t our problem anymore.” Right. Sure. Except that thinking is exactly what puts companies at risk. Many businesses blindly trust cloud providers, imagining that their data is floating safely in some magical, impregnable vault. Reality check: it’s not. Cloud providers secure the infrastructure—but your data, applications, and configurations? That’s your responsibility.
          </p>
          <p>
            <strong>Cloud security is a shared responsibility.</strong> Ignoring it is like leaving your house keys with a landlord and assuming burglars won’t notice.
          </p>
          <h3 className="mt-6 mb-2 font-semibold text-lg">🌐 The Alarming State of Cloud Security</h3>
          <p>
            Cloud adoption is skyrocketing, but so are the risks. Consider these statistics:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li>83% of organizations experienced at least one cloud security incident in 2024.</li>
            <li>32% of cloud assets remain unmonitored, each carrying an average of 115 known vulnerabilities.</li>
            <li>82% of data breaches in 2023 involved cloud-stored information.</li>
          </ul>
          <p>
            These numbers make it clear: assuming the cloud keeps you safe without any effort is a dangerous gamble.
          </p>
          <h3 className="mt-6 mb-2 font-semibold text-lg">🏢 High-Profile Cloud Breaches You Should Know About</h3>
          <ol className="list-decimal ml-6 mb-4">
            <li>
              <strong>Snowflake Data Breach (2024):</strong> Hackers exploited stolen credentials to access customer accounts on Snowflake, a leading cloud data platform. Companies affected included Ticketmaster, Santander, and AT&amp;T, resulting in significant data exposure.
            </li>
            <li>
              <strong>Harrods Data Breach (2025):</strong> A third-party provider’s system was compromised, exposing customer names and contact details. While payment information wasn’t affected, the breach highlighted the risks associated with vendor and supply chain security.
            </li>
            <li>
              <strong>Bank Transfer Records Exposure (2025):</strong> An unsecured cloud server exposed approximately 273,000 bank transfer records, including sensitive personal and financial information.
            </li>
          </ol>
          <p>
            These incidents prove that no organization is too small or too safe to be targeted. SMBs are often attractive targets because attackers assume their defenses are weaker—but the consequences can be just as severe.
          </p>
          <h3 className="mt-6 mb-2 font-semibold text-lg">🔐 Why Every Company Needs Cloud Security</h3>
          <p>
            Ignoring cloud security is like driving a car and assuming the brakes work without checking tire pressure, fuel levels, or whether the doors are locked. You’re relying on someone else’s infrastructure without taking responsibility for the parts that matter most.
          </p>
          <p>
            <strong>Consequences of neglecting cloud security include:</strong>
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li><strong>Financial Loss:</strong> The average cost of a cloud data breach was $5.17 million in 2024.</li>
            <li><strong>Reputational Damage:</strong> Customers may lose trust in your ability to protect their data.</li>
            <li><strong>Operational Disruption:</strong> Misconfigurations or breaches can halt business operations, causing lost revenue.</li>
          </ul>
          <h3 className="mt-6 mb-2 font-semibold text-lg">🛡️ Practical Steps to Protect Your Cloud Environment</h3>
          <ul className="list-disc ml-6 mb-4">
            <li><strong>Understand Shared Responsibility:</strong> Know what the cloud provider secures and what falls under your responsibility.</li>
            <li><strong>Implement Strong Access Controls:</strong> Use multi-factor authentication and restrict privileges to only those who need them.</li>
            <li><strong>Monitor &amp; Audit Regularly:</strong> Continuously watch for unusual activity and misconfigurations.</li>
            <li><strong>Encrypt Sensitive Data:</strong> Protect data in transit and at rest.</li>
            <li><strong>Conduct Penetration Testing:</strong> Simulate attacks to identify weaknesses before real attackers do.</li>
          </ul>
          <p>
            Even simple measures like these drastically reduce the risk of breaches.
          </p>
          <h3 className="mt-6 mb-2 font-semibold text-lg">✅ Conclusion</h3>
          <p>
            Cloud computing offers incredible flexibility and efficiency—but it’s not a magic shield. Thinking “security is the provider’s job” is a recipe for disaster. Whether you’re a Fortune 500 company or a small business just starting, proactive cloud security is essential.
          </p>
          <p>
            At CISA, we help organizations identify vulnerabilities, secure their cloud environments, and implement best practices to protect critical data. Don’t wait for a breach to realize the importance of cloud security—act now, stay protected, and keep your business safe.
          </p>
          <h4 className="mt-4 mb-2 font-semibold">SEO Keywords:</h4>
          <ul className="list-disc ml-6 mb-4">
            <li>cloud security</li>
            <li>cloud breach</li>
            <li>shared responsibility</li>
            <li>cloud penetration testing</li>
            <li>data protection</li>
            <li>cloud best practices</li>
          </ul>
        </>
      ),
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: ' Niels Hoekman',
      date: '2025-02-02',
      category: 'Cloud Security'
    },
    {
      id: 3,
      title: "CFOs: Engage CISA – Know Your Organization’s Cybersecurity Posture Before It’s Too Late",
      excerpt: "For CFOs, cybersecurity risk is financial risk. A single breach or ransomware attack can threaten cash flow, operations, reputation, and even the survival of the company.",
      description: (
        <>
          <p>
            As a CFO, your main responsibility is protecting the financial health of your organization. But in today’s digital world, <strong>cybersecurity risk is financial risk</strong>. A single breach or ransomware attack can threaten cash flow, operations, reputation, and even the survival of the company.
          </p>
          <p>
            This isn’t just a concern for Fortune 500 companies—small and medium-sized businesses are increasingly targeted, and the consequences can be devastating.
          </p>
          <h3 className="mt-6 mb-2 font-semibold text-lg">🔍 Cybersecurity Is a Financial Risk – Not Just an IT Issue</h3>
          <ul className="list-disc ml-6 mb-4">
            <li>
              The average cost of a data breach in 2024 was <strong>$5.17 million</strong>, including downtime, lost revenue, fines, and recovery.
            </li>
            <li>
              Ransomware attacks often demand millions of dollars in ransom, which can cripple cash flow.
            </li>
            <li>
              Operational disruption from an attack can halt business processes and impact the entire supply chain.
            </li>
          </ul>
          <p>
            For CFOs, these aren’t abstract figures—they represent potential financial exposure that could threaten shareholder value and investor confidence.
          </p>
          <h4 className="mt-4 mb-2 font-semibold">SEO Keywords:</h4>
          <ul className="list-disc ml-6 mb-4">
            <li>cost of data breach</li>
            <li>ransomware financial impact</li>
            <li>cyber risk for CFOs</li>
          </ul>
          <h3 className="mt-6 mb-2 font-semibold text-lg">🏢 High-Profile Cyberattacks with Financial Consequences</h3>
          <ol className="list-decimal ml-6 mb-4">
            <li>
              <strong>Colonial Pipeline (2021):</strong> Ransomware shut down critical fuel infrastructure, leading to $4.4 million paid in ransom and severe operational disruption.
            </li>
            <li>
              <strong>Harrods (2025):</strong> Cloud breach exposed customer data, resulting in significant remediation and reputational costs.
            </li>
            <li>
              <strong>SMBs at Risk:</strong> Studies show that 60% of small and medium-sized businesses go out of business within six months after a cyberattack.
            </li>
          </ol>
          <p>
            These cases prove that cybersecurity risk affects all companies, not just large enterprises.
          </p>
          <h4 className="mt-4 mb-2 font-semibold">SEO Keywords:</h4>
          <ul className="list-disc ml-6 mb-4">
            <li>real-world cyberattacks</li>
            <li>SMB cybersecurity</li>
            <li>ransomware case study</li>
          </ul>
          <h3 className="mt-6 mb-2 font-semibold text-lg">🛡️ How CISA Helps CFOs Manage Cyber Financial Risk</h3>
          <p>
            At CISA, we provide actionable insight into your organization’s security posture, helping CFOs:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li>Identify vulnerabilities through comprehensive penetration testing.</li>
            <li>Understand financial exposure linked to cyber risks.</li>
            <li>Prioritize investments to strengthen cybersecurity efficiently.</li>
            <li>Ensure compliance with regulatory and industry standards.</li>
          </ul>
          <p>
            Cybersecurity isn’t about technology alone—it’s about protecting your organization’s finances and continuity.
          </p>
          <h4 className="mt-4 mb-2 font-semibold">SEO Keywords:</h4>
          <ul className="list-disc ml-6 mb-4">
            <li>penetration testing for CFOs</li>
            <li>cybersecurity investment</li>
            <li>risk management</li>
            <li>compliance cybersecurity</li>
          </ul>
          <h3 className="mt-6 mb-2 font-semibold text-lg">💡 Key Takeaways for CFOs</h3>
          <ul className="list-disc ml-6 mb-4">
            <li><strong>Cybersecurity = Financial Risk</strong> – Treat cyber threats like any other business risk.</li>
            <li><strong>Prevention Saves Money</strong> – Investing in cybersecurity upfront is cheaper than recovering from a breach.</li>
            <li><strong>Visibility is Critical</strong> – You can’t manage what you don’t know is vulnerable.</li>
            <li><strong>Engage CISA</strong> – Gain clarity on your organization’s security posture and make informed financial decisions.</li>
          </ul>
          <h4 className="mt-4 mb-2 font-semibold">SEO Keywords:</h4>
          <ul className="list-disc ml-6 mb-4">
            <li>cybersecurity awareness for CFOs</li>
            <li>proactive cybersecurity strategy</li>
            <li>business financial protection</li>
          </ul>
          <h3 className="mt-6 mb-2 font-semibold text-lg">✅ Conclusion</h3>
          <p>
            A cyber breach or ransomware attack is not hypothetical—it’s a real, growing threat. CFOs have a responsibility to understand the financial impact of cybersecurity risks. Engaging CISA ensures you know where your organization stands, allowing you to make informed decisions that protect revenue, reputation, and long-term survival.
          </p>
          <p>
            In cybersecurity, being proactive isn’t optional—it can be the difference between staying in business and going bankrupt.
          </p>
          <h4 className="mt-4 mb-2 font-semibold">SEO Keywords:</h4>
          <ul className="list-disc ml-6 mb-4">
            <li>CFO cybersecurity responsibility</li>
            <li>ransomware prevention</li>
            <li>cyber risk mitigation</li>
            <li>cloud security financial impact</li>
          </ul>
        </>
      ),
      image: 'https://images.pexels.com/photos/4968633/pexels-photo-4968633.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: ' Niels Hoekman',
      date: '2025-03-15',
      category: 'Finance & Security'
    },
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
                      {/* <Calendar className="w-4 h-4 mr-2" /> */}
                      {/* <span>{new Date(post.date).toLocaleDateString()}</span> */}
                      {/* <span className="mx-2">•</span> */}
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
                    <div className="flex-1 overflow-y-auto max-h-[32rem] pr-2">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4"></h3>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{post.description}</p>
                    </div>
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