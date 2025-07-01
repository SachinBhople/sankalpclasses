'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  duration: string;
  students: number;
  rating: number;
  price: string;
  image: string;
  level: string;
}

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  const { t } = useLanguage();

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 left-4">
            <Badge variant="secondary" className="bg-white/90">
              {course.level}
            </Badge>
          </div>
          <div className="absolute top-4 right-4">
            <Badge className="bg-blue-600">
              {course.category}
            </Badge>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-6">
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
              {course.title}
            </h3>
            <p className="text-gray-600 text-sm mt-2 line-clamp-2">
              {course.description}
            </p>
          </div>

          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="h-4 w-4" />
              <span>{course.students} {t('courses.students')}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span>{course.rating}</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-blue-600">
              {course.price}
            </div>
          </div>
        </div>
      </CardContent>



      {/* <CardFooter className="p-6 pt-0">
        <Button
          className="w-full bg-blue-600 hover:bg-blue-700 group-hover:bg-blue-700"
          onClick={() => window.open('https://wa.me/917588535563', '_blank')}
        >
          {t('courses.enroll')}
        </Button>
      </CardFooter> */}

      <CardFooter className="p-6 pt-0">
        <Button
          className="w-full bg-blue-600 hover:bg-blue-700 group-hover:bg-blue-700"
          onClick={() =>
            window.open(
              `https://wa.me/917588535563?text=${encodeURIComponent(
                `Hi, I'm interested in the course: ${course.title}`
              )}`,
              '_blank'
            )
          }
        >
          {t('courses.enroll')}
        </Button>
      </CardFooter>


    </Card>
  );
}