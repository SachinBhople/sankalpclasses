'use client';

import Link from 'next/link';
import { GraduationCap, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">Sankalp Classes</span>
            </div>
            <p className="text-gray-300 text-sm">
              Quality education since 2005. Empowering students with excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-gray-300 hover:text-white transition-colors">
                {t('nav.home')}
              </Link>
              <Link href="/courses" className="block text-gray-300 hover:text-white transition-colors">
                {t('nav.courses')}
              </Link>
              <Link href="/about" className="block text-gray-300 hover:text-white transition-colors">
                {t('nav.about')}
              </Link>
              <Link href="/contact" className="block text-gray-300 hover:text-white transition-colors">
                {t('nav.contact')}
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('contact.title')}</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  Sankalp Classes, Near the post office, Phulambri, Maharashtra 414002
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300 text-sm">+91 7588535563 | 8421428076 | 9226225330</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300 text-sm">info@sankalpclasses.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-4 w-4 text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  {t('contact.hours.text')}
                </span>
              </div>
            </div>
          </div>

          {/* Office Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('contact.info.hours')}</h3>
            <div className="space-y-2 text-gray-300 text-sm">
              <div>Monday - Friday: 9:00 AM - 6:00 PM</div>
              <div>Saturday: 10:00 AM - 4:00 PM</div>
              <div>Sunday: Closed</div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            © 2025 Sankalp Classes Phulambri. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}