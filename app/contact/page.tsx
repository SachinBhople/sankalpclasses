'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ContactForm } from '@/components/ContactForm';
import { GoogleMapEmbed } from '@/components/GoogleMapEmbed';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactPage() {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: MapPin,
      title: t('contact.info.address'),
      details: ['Sankalp Classes, Near the post office', 'Phulambri, Maharashtra 414002'],
      color: 'text-blue-600',
    },
    {
      icon: Phone,
      title: t('contact.info.phone'),
      details: ['+91 7588535563', '+91 8421428076', "+91 9226225330"],
      color: 'text-green-600',
    },
    {
      icon: Mail,
      title: t('contact.info.email'),
      details: ['info@sankalpclasses.com', 'admissions@sankalpclasses.com'],
      color: 'text-orange-600',
    },
    {
      icon: Clock,
      title: t('contact.info.hours'),
      details: ['Monday - Saturday: 9:00 AM - 6:00 PM', 'Sunday: Closed'],
      color: 'text-purple-600',
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t('contact.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <info.icon className={`h-8 w-8 mx-auto mb-4 ${info.color}`} />
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{info.title}</h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 text-sm">
                      {detail}
                    </p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              <GoogleMapEmbed />

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Visit Our Campus</h3>
                  <p className="text-gray-600 mb-4">
                    We're located in the heart of Phulambri, easily accessible by public transport.
                    Our modern campus features state-of-the-art classrooms, laboratories, and a
                    comprehensive library.
                  </p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p><strong>Nearest Landmark:</strong> Near the post office Phulambri </p>
                    {/* <p><strong>Parking:</strong> Free parking available</p> */}
                    {/* <p><strong>Public Transport:</strong> Regular bus service</p> */}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}