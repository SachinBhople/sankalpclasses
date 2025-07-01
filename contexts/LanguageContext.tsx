'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'hi' | 'mr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.courses': 'Courses',
    'nav.about': 'About',
    'nav.contact': 'Contact',

    // Home Page
    'home.hero.title': 'Excellence in Education Since 2005',
    'home.hero.subtitle': 'Empowering students with quality education and personalized learning experiences in Phulambri',
    'home.hero.cta': 'Explore Courses',
    'home.hero.contact': 'Contact Us',

    // Courses
    'courses.title': 'Our Courses',
    'courses.subtitle': 'Comprehensive learning programs designed for academic excellence',
    'courses.all': 'All Courses',
    'courses.filter': 'Filter by Category',
    'courses.duration': 'Duration',
    'courses.students': 'Students',
    'courses.rating': 'Rating',
    'courses.enroll': 'Enroll Now',

    // Categories
    'categories.title': 'Course Categories',
    'categories.subtitle': 'Choose from our wide range of specialized programs',

    // Reviews
    'reviews.title': 'Student Reviews',
    'reviews.subtitle': 'What our students say about their learning experience',

    // Educators
    'educators.title': 'Our Educators',
    'educators.subtitle': 'Learn from experienced and dedicated teachers',
    'educators.experience': 'Years Experience',
    'educators.students': 'Students Taught',

    // About
    'about.title': 'About Sankalp Classes',
    'about.subtitle': 'Two decades of educational excellence and student success',
    'about.journey': 'Our Journey',
    'about.vision.title': 'Our Vision',
    'about.vision.text': 'To be the leading educational institution that nurtures talent and shapes the future of students.',
    'about.mission.title': 'Our Mission',
    'about.mission.text': 'Providing quality education with personalized attention to help every student achieve their academic goals.',

    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Get in touch with us for admissions and inquiries',
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email Address',
    'contact.form.phone': 'Phone Number',
    'contact.form.course': 'Course Interest',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send Message',
    'contact.info.address': 'Address',
    'contact.info.phone': 'Phone',
    'contact.info.email': 'Email',
    'contact.info.hours': 'Office Hours',
    'contact.hours.text': 'Monday - Saturday: 9:00 AM - 6:00 PM',

    // Common
    'common.readMore': 'Read More',
    'common.learnMore': 'Learn More',
    'common.viewAll': 'View All',
    'common.location': 'Location',
    'common.whatsapp': 'WhatsApp',
  },
  hi: {
    // Navigation
    'nav.home': 'मुख्य',
    'nav.courses': 'कोर्स',
    'nav.about': 'हमारे बारे में',
    'nav.contact': 'संपर्क',

    // Home Page
    'home.hero.title': '2005 से शिक्षा में उत्कृष्टता',
    'home.hero.subtitle': 'फुलंबरी में गुणवत्तापूर्ण शिक्षा और व्यक्तिगत सीखने के अनुभव के साथ छात्रों को सशक्त बनाना',
    'home.hero.cta': 'कोर्स देखें',
    'home.hero.contact': 'संपर्क करें',

    // Courses
    'courses.title': 'हमारे कोर्स',
    'courses.subtitle': 'शैक्षणिक उत्कृष्टता के लिए डिज़ाइन किए गए व्यापक शिक्षण कार्यक्रम',
    'courses.all': 'सभी कोर्स',
    'courses.filter': 'श्रेणी के अनुसार फ़िल्टर करें',
    'courses.duration': 'अवधि',
    'courses.students': 'छात्र',
    'courses.rating': 'रेटिंग',
    'courses.enroll': 'अभी दाखिला लें',

    // Categories
    'categories.title': 'कोर्स श्रेणियाँ',
    'categories.subtitle': 'हमारे विशेषज्ञ कार्यक्रमों की विस्तृत श्रृंखला से चुनें',

    // Reviews
    'reviews.title': 'छात्र समीक्षा',
    'reviews.subtitle': 'हमारे छात्र अपने सीखने के अनुभव के बारे में क्या कहते हैं',

    // Educators
    'educators.title': 'हमारे शिक्षक',
    'educators.subtitle': 'अनुभवी और समर्पित शिक्षकों से सीखें',
    'educators.experience': 'वर्षों का अनुभव',
    'educators.students': 'पढ़ाए गए छात्र',

    // About
    'about.title': 'संकल्प क्लासेस के बारे में',
    'about.subtitle': 'शैक्षणिक उत्कृष्टता और छात्र सफलता के दो दशक',
    'about.journey': 'हमारी यात्रा',
    'about.vision.title': 'हमारा दृष्टिकोण',
    'about.vision.text': 'प्रतिभा का पोषण करने और छात्रों के भविष्य को आकार देने वाली अग्रणी शैक्षणिक संस्था बनना।',
    'about.mission.title': 'हमारा मिशन',
    'about.mission.text': 'हर छात्र को अपने शैक्षणिक लक्ष्यों को प्राप्त करने में मदद करने के लिए व्यक्तिगत ध्यान के साथ गुणवत्तापूर्ण शिक्षा प्रदान करना।',

    // Contact
    'contact.title': 'संपर्क करें',
    'contact.subtitle': 'प्रवेश और पूछताछ के लिए हमसे संपर्क करें',
    'contact.form.name': 'पूरा नाम',
    'contact.form.email': 'ईमेल पता',
    'contact.form.phone': 'फोन नंबर',
    'contact.form.course': 'कोर्स की रुचि',
    'contact.form.message': 'संदेश',
    'contact.form.submit': 'संदेश भेजें',
    'contact.info.address': 'पता',
    'contact.info.phone': 'फोन',
    'contact.info.email': 'ईमेल',
    'contact.info.hours': 'कार्यालय समय',
    'contact.hours.text': 'सोमवार - शनिवार: सुबह 9:00 - शाम 6:00',

    // Common
    'common.readMore': 'और पढ़ें',
    'common.learnMore': 'और जानें',
    'common.viewAll': 'सभी देखें',
    'common.location': 'स्थान',
    'common.whatsapp': 'व्हाट्सऐप',
  },
  mr: {
    // Navigation
    'nav.home': 'मुख्यपृष्ठ',
    'nav.courses': 'अभ्यासक्रम',
    'nav.about': 'आमच्याबद्दल',
    'nav.contact': 'संपर्क',

    // Home Page
    'home.hero.title': '2005 पासून शिक्षणातील उत्कृष्टता',
    'home.hero.subtitle': 'फुलंबरी मध्ये गुणवत्तापूर्ण शिक्षण आणि वैयक्तिक शिकण्याच्या अनुभवांसह विद्यार्थ्यांना सक्षम बनवित आहोत',
    'home.hero.cta': 'अभ्यासक्रम पहा',
    'home.hero.contact': 'संपर्क साधा',

    // Courses
    'courses.title': 'आमचे अभ्यासक्रम',
    'courses.subtitle': 'शैक्षणिक उत्कृष्टतेसाठी डिझाइन केलेले सर्वसमावेशक शिक्षण कार्यक्रम',
    'courses.all': 'सर्व अभ्यासक्रम',
    'courses.filter': 'श्रेणीनुसार फिल्टर करा',
    'courses.duration': 'कालावधी',
    'courses.students': 'विद्यार्थी',
    'courses.rating': 'रेटिंग',
    'courses.enroll': 'आत्ता प्रवेश घ्या',

    // Categories
    'categories.title': 'अभ्यासक्रम श्रेणी',
    'categories.subtitle': 'आमच्या विशेष कार्यक्रमांच्या विस्तृत श्रेणीतून निवडा',

    // Reviews
    'reviews.title': 'विद्यार्थी पुनरावलोकन',
    'reviews.subtitle': 'आमचे विद्यार्थी त्यांच्या शिकण्याच्या अनुभवाबद्दल काय म्हणतात',

    // Educators
    'educators.title': 'आमचे शिक्षक',
    'educators.subtitle': 'अनुभवी आणि समर्पित शिक्षकांकडून जाणून घ्या',
    'educators.experience': 'वर्षांचा अनुभव',
    'educators.students': 'शिकवलेले विद्यार्थी',

    // About
    'about.title': 'संकल्प क्लासेसबद्दल',
    'about.subtitle': 'शैक्षणिक उत्कृष्टता आणि विद्यार्थी यशाची दोन दशके',
    'about.journey': 'आमचा प्रवास',
    'about.vision.title': 'आमची दृष्टी',
    'about.vision.text': 'प्रतिभेचे पालनपोषण करणारी आणि विद्यार्थ्यांचे भविष्य घडवणारी आघाडीची शैक्षणिक संस्था बनणे.',
    'about.mission.title': 'आमचे ध्येय',
    'about.mission.text': 'प्रत्येक विद्यार्थ्याला त्यांची शैक्षणिक उद्दिष्टे साध्य करण्यात मदत करण्यासाठी वैयक्तिक लक्ष देऊन गुणवत्तापूर्ण शिक्षण प्रदान करणे.',

    // Contact
    'contact.title': 'संपर्क साधा',
    'contact.subtitle': 'प्रवेश आणि चौकशीसाठी आमच्याशी संपर्क साधा',
    'contact.form.name': 'पूर्ण नाव',
    'contact.form.email': 'ईमेल पत्ता',
    'contact.form.phone': 'फोन नंबर',
    'contact.form.course': 'अभ्यासक्रमाची आवड',
    'contact.form.message': 'संदेश',
    'contact.form.submit': 'संदेश पाठवा',
    'contact.info.address': 'पत्ता',
    'contact.info.phone': 'फोन',
    'contact.info.email': 'ईमेल',
    'contact.info.hours': 'कार्यालयीन वेळा',
    'contact.hours.text': 'सोमवार - शनिवार: सकाळी 9:00 - संध्याकाळी 6:00',

    // Common
    'common.readMore': 'अधिक वाचा',
    'common.learnMore': 'अधिक जाणून घ्या',
    'common.viewAll': 'सर्व पहा',
    'common.location': 'स्थान',
    'common.whatsapp': 'व्हाट्सअॅप',
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && ['en', 'hi', 'mr'].includes(savedLanguage)) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[Language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}