import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { title } from 'framer-motion/client';

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        services: 'Services',
        blog: 'Blog',
        about: 'About',
        contact: 'Contact'
      },
      hero: {
        tagline: 'Protecting Businesses with Ethical Hacker',
        subtitle: 'Advanced cybersecurity solutions designed to safeguard your digital assets and maintain business continuity in an ever-evolving threat landscape.',
        cta: 'Get Protected Now'
      },
      services: {
        title: 'Our Cybersecurity Services',
        subtitle: 'Comprehensive security solutions tailored to protect your business',
        awareness: {
          title: 'Security Awareness',
          description: 'Educate your team with comprehensive security awareness training programs designed to prevent human error vulnerabilities.'
        },
        scanning: {
          title: 'Vulnerability Scanning',
          description: 'Identify and assess security weaknesses in your infrastructure before attackers can exploit them.'
        },
        testing: {
          title: 'Penetration Testing',
          description: 'Simulate real-world attacks to test your defenses and identify critical security gaps.'
        },
        phishing: {
          title: 'Phishing Simulations',
          description: 'Test your employees resilience against social engineering attacks with realistic phishing simulations.'
        },
        lp2: {
          title: 'Auditing & compliance',
          description: 'Specialized security services tailored to meet your unique organizational requirements and compliance needs.'
        },
        more: {
          title: 'More Services',
          description: 'Additional comprehensive security solutions designed to address your specific industry challenges and requirements.'
        }
      },
      contact: {
        title: 'Get in Touch',
        subtitle: 'Ready to secure your business? Contact our cybersecurity experts today.',
        form: {
          name: 'Full Name',
          email: 'Email Address',
          message: 'Message',
          submit: 'Send Message'
        }
      },
      whyChoose: {
        title: 'Why opt for an in-house security partner?',
        cost: {
          title: 'Cost Saving',
          description: 'Reduce overhead costs while maintaining top-tier security expertise with our dedicated in-house security partnership model.'
        },
        security: {
          title: 'Full Security',
          description: 'Comprehensive security coverage across all your digital assets with 24/7 monitoring and rapid incident response capabilities.'
        },
        flexible: {
          title: 'Flexible',
          description: 'Scalable security solutions that adapt to your business needs and growth, ensuring optimal protection at every stage.'
        },
        ai: {
          title: "AI and Innovation",
          description: "Leverage cutting-edge AI technologies and innovative security practices to stay ahead of emerging cyber threats."
        }
      },
      experts: {
        title: 'Backed by experts',
        subtitle: 'Our team of certified cybersecurity professionals brings decades of combined experience in protecting businesses from evolving cyber threats. We stay ahead of the curve with continuous training and cutting-edge security technologies.'
      },
      clients: {
        title: 'Some of the companies we\'ve helped get more secure - through our services'
      },
      allServices: {
        title: 'Our Complete Security Services',
        subtitle: 'Comprehensive cybersecurity solutions designed to protect your business from every angle',
        inhouse: {
          title: 'In-house Security',
          description: 'Dedicated security team integration with your organization for continuous protection and monitoring.'
        },
        pentest: {
          title: 'Penetration Testing',
          description: 'Comprehensive security assessments to identify vulnerabilities before attackers can exploit them.'
        },
        awareness: {
          title: 'Security Awareness',
          description: 'Employee training programs to build a human firewall against social engineering attacks.'
        },
        scanning: {
          title: 'Vulnerability Scanning',
          description: 'Automated and manual scanning to identify security weaknesses in your infrastructure.'
        },
        phishing: {
          title: 'Phishing Campaigns',
          description: 'Simulated phishing attacks to test and improve your team\'s security awareness.'
        },
        bugbounty: {
          title: 'Bug Bounty',
          description: 'Crowdsourced security testing to discover vulnerabilities through ethical hacking programs.'
        },
        physical: {
          title: 'Physical Pentest',
          description: 'Physical security assessments to test your premises and access control systems.'
        },
        more: {
          title: 'More Services',
          description: 'Additional specialized security services tailored to your specific industry and requirements.'
        }
      },
      insights: {
        title: 'Always one step ahead in security',
        subtitle: 'Stay informed with the latest cybersecurity insights, threat intelligence, and best practices from our expert team.'
      },
      blog: {
        title: 'Cybersecurity Insights',
        subtitle: 'Stay informed about the latest cybersecurity trends, threats, and best practices.',
        readMore: 'Read More'
      },
      footer: {
        services: 'Services',
        company: 'Company',
        copyright: '© 2025 CISA. All rights reserved.'
      },
      testimonials: {
        title: 'What Our Clients Say',
        subtitle: 'Trusted by organizations worldwide for comprehensive cybersecurity solutions.'
      }
    }
  },
  nl: {
    translation: {
      nav: {
        services: 'Diensten',
        blog: 'Blog',
        about: 'Over Ons',
        contact: 'Contact'
      },
      hero: {
        tagline: 'Bedrijven Beschermen met Slimmere Cybersecurity',
        subtitle: 'Geavanceerde cybersecurity-oplossingen ontworpen om uw digitale middelen te beschermen en bedrijfscontinuïteit te behouden in een steeds veranderend dreigingslandschap.',
        cta: 'Word Nu Beschermd'
      },
      services: {
        title: 'Onze Cybersecurity Diensten',
        subtitle: 'Uitgebreide beveiligingsoplossingen op maat om uw bedrijf te beschermen',
        testing: {
          title: 'Penetratietesten',
          description: 'Simuleer echte aanvallen om uw verdediging te testen en kritieke beveiligingslacunes te identificeren.'
        },
        awareness: {
          title: 'Beveiligingsbewustzijn',
          description: 'Train uw team met uitgebreide beveiligingsbewustzijnsprogrammas ontworpen om menselijke fout kwetsbaarheden te voorkomen.'
        },
        phishing: {
          title: 'Phishing Campagnes',
          description: 'Test de veerkracht van uw werknemers tegen social engineering-aanvallen met realistische phishing-simulaties.'
        },
        lp2: {
          title: 'Lp2 Diensten',
          description: 'Gespecialiseerde beveiligingsdiensten op maat om te voldoen aan uw unieke organisatorische vereisten en compliance behoeften.'
        },
        more: {
          title: 'Meer Diensten',
          description: 'Aanvullende uitgebreide beveiligingsoplossingen ontworpen om uw specifieke branche-uitdagingen en vereisten aan te pakken.'
        },
        information: {
          title: 'Informatiebeveiliging',
          description: 'Uitgebreid informatiebeveiligingsbeheer om uw gevoelige gegevens en intellectueel eigendom te beschermen.'
        },
        bugbounty: {
          title: 'Bug Bounty',
          description: 'Crowdsourced beveiligingstesten om kwetsbaarheden te ontdekken door ethische hacking programma\'s.'
        },
        physical: {
          title: 'Fysieke Pentest',
          description: 'Fysieke beveiligingsbeoordelingen om uw panden en toegangscontrolesystemen te testen.'
        }
      },
      contact: {
        title: 'Neem Contact Op',
        subtitle: 'Klaar om uw bedrijf te beveiligen? Neem vandaag contact op met onze cybersecurity-experts.',
        form: {
          name: 'Volledige Naam',
          email: 'E-mailadres',
          message: 'Bericht',
          submit: 'Verstuur Bericht'
        }
      },
      whyChoose: {
        title: 'Waarom kiezen voor een interne beveiligingspartner?',
        cost: {
          title: 'Kostenbesparing',
          description: 'Verminder overheadkosten terwijl u topkwaliteit beveiligingsexpertise behoudt met ons toegewijde interne beveiligingspartnerschap model.'
        },
        security: {
          title: 'Volledige Beveiliging',
          description: 'Uitgebreide beveiligingsdekking voor al uw digitale middelen met 24/7 monitoring en snelle incidentrespons mogelijkheden.'
        },
        flexible: {
          title: 'Flexibel',
          description: 'Schaalbare beveiligingsoplossingen die zich aanpassen aan uw bedrijfsbehoeften en groei, voor optimale bescherming in elke fase.'
        }
      },
      experts: {
        title: 'Ondersteund door experts',
        subtitle: 'Ons team van gecertificeerde cybersecurity professionals brengt tientallen jaren gecombineerde ervaring in het beschermen van bedrijven tegen evoluerende cyberdreigingen. We blijven voorop lopen met continue training en geavanceerde beveiligingstechnologieën.'
      },
      clients: {
        title: 'Enkele van de bedrijven die we hebben geholpen veiliger te worden - door onze diensten'
      },
      allServices: {
        title: 'Onze Volledige Beveiligingsdiensten',
        subtitle: 'Uitgebreide cybersecurity-oplossingen ontworpen om uw bedrijf vanuit elke hoek te beschermen',
        inhouse: {
          title: 'Interne Beveiliging',
          description: 'Toegewijde beveiligingsteam integratie met uw organisatie voor continue bescherming en monitoring.'
        },
        pentest: {
          title: 'Penetratietesten',
          description: 'Uitgebreide beveiligingsbeoordelingen om kwetsbaarheden te identificeren voordat aanvallers ze kunnen uitbuiten.'
        },
        awareness: {
          title: 'Beveiligingsbewustzijn',
          description: 'Werknemerstrainingen om een menselijke firewall op te bouwen tegen social engineering-aanvallen.'
        },
        scanning: {
          title: 'Kwetsbaarheidsscanning',
          description: 'Geautomatiseerde en handmatige scanning om beveiligingszwakheden in uw infrastructuur te identificeren.'
        },
        phishing: {
          title: 'Phishing Campagnes',
          description: 'Gesimuleerde phishing-aanvallen om het beveiligingsbewustzijn van uw team te testen en verbeteren.'
        },
        bugbounty: {
          title: 'Bug Bounty',
          description: 'Crowdsourced beveiligingstesten om kwetsbaarheden te ontdekken door ethische hacking programma\'s.'
        },
        physical: {
          title: 'Fysieke Pentest',
          description: 'Fysieke beveiligingsbeoordelingen om uw panden en toegangscontrolesystemen te testen.'
        },
        more: {
          title: 'Meer Diensten',
          description: 'Aanvullende gespecialiseerde beveiligingsdiensten op maat voor uw specifieke industrie en vereisten.'
        }
      },
      insights: {
        title: 'Altijd een stap vooruit in beveiliging',
        subtitle: 'Blijf op de hoogte met de nieuwste cybersecurity inzichten, dreigingsinformatie en beste praktijken van ons expertteam.'
      },
      blog: {
        title: 'Cybersecurity Inzichten',
        subtitle: 'Blijf op de hoogte van de laatste cybersecurity-trends, bedreigingen en beste praktijken.',
        readMore: 'Lees Meer'
      },
      footer: {
        services: 'Diensten',
        company: 'Bedrijf',
        copyright: '© 2025 CISA. Alle rechten voorbehouden.'
      },
      testimonials: {
        title: 'Wat Onze Klanten Zeggen',
        subtitle: 'Vertrouwd door organisaties wereldwijd voor uitgebreide cybersecurity-oplossingen.'
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;