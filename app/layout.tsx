import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sankalp Classes Phulambri - Quality Education Since 2005',
  description: 'Sankalp Classes Phulambri - Quality education since 2005. Explore top courses, experienced educators, and student reviews.',
  keywords: 'education, classes, coaching, Phulambri, Maharashtra, courses, tutoring',
  authors: [{ name: 'Sankalp Classes Team' }],
  openGraph: {
    title: 'Sankalp Classes Phulambri',
    description: 'Quality education since 2005',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          {children}
          <Toaster />
        </LanguageProvider>
      </body>
    </html>
  );
}