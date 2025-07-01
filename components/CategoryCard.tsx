'use client';

import { Card, CardContent } from '@/components/ui/card';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface CategoryCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  courseCount: number;
  color: string;
}

export function CategoryCard({ title, description, icon: Icon, courseCount, color }: CategoryCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className={`inline-flex p-3 rounded-lg ${color}`}>
            <Icon className="h-6 w-6 text-white" />
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
              {title}
            </h3>
            <p className="text-gray-600 text-sm mt-2">
              {description}
            </p>
          </div>

          <div className="text-sm text-gray-500">
            {courseCount} Courses Available
          </div>
        </div>
      </CardContent>
    </Card>
  );
}