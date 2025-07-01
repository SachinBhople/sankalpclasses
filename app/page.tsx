'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/HeroSection';
import { CourseCard } from '@/components/CourseCard';
import { CategoryCard } from '@/components/CategoryCard';
import { ReviewCard } from '@/components/ReviewCard';
import { EducatorCard } from '@/components/EducatorCard';
import { GoogleMapEmbed } from '@/components/GoogleMapEmbed';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { courses, categories } from '@/data/courses';
import { reviews } from '@/data/reviews';
import { educators } from '@/data/educators';
import { BookOpen, Users, Calculator, Atom } from 'lucide-react';
import Link from 'next/link';

const categoryIcons = {
  'Mathematics': Calculator,
  'Science': Atom,
  'Language': BookOpen,
  'Competitive': Users,
};

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Featured Courses Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('courses.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('courses.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {courses.slice(0, 6).map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

          <div className="text-center">
            <Link href="/courses">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                {t('common.viewAll')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('categories.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('categories.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category) => {
              const IconComponent = categoryIcons[category.title as keyof typeof categoryIcons];
              return (
                <CategoryCard
                  key={category.id}
                  title={category.title}
                  description={category.description}
                  icon={IconComponent}
                  courseCount={category.courseCount}
                  color={category.color}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('reviews.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('reviews.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.slice(0, 6).map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </section>

      {/* Educators Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('educators.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('educators.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {educators.map((educator) => (
              <EducatorCard key={educator.id} educator={educator} />
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('common.location')}
            </h2>
            <p className="text-xl text-gray-600 mb-4">
              Visit us at our Phulambri campus
            </p>
            <p className="text-gray-600">
              Sankalp Classes, Near the post office, Phulambri, Maharashtra 414002
            </p>
          </div>

          <GoogleMapEmbed />
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}