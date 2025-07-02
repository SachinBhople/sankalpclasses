'use client';

import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { FaWhatsapp } from "react-icons/fa";

export function WhatsAppFloat() {
  const { t } = useLanguage();

  const handleWhatsAppClick = () => {
    const phoneNumber = '7588535563'; // Replace with actual WhatsApp number
    const message = encodeURIComponent('Hello! I would like to know more about Sankalp Classes.');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
      size="icon"
    >
      <FaWhatsapp className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
      <span className="sr-only">{t('common.whatsapp')}</span>
    </Button>
  );
}