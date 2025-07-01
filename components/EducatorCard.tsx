'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';

interface Educator {
  id: string;
  name: string;
  position: string;
  experience: number;
  students: number;
  subjects: string[];
  avatar?: string;
  description: string;
}

interface EducatorCardProps {
  educator: Educator;
}

export function EducatorCard({ educator }: EducatorCardProps) {
  const { t } = useLanguage();

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardContent className="p-6">
        <div className="space-y-4">
          {/* Avatar and Basic Info */}
          <div className="text-center">
            <Avatar className="h-20 w-20 mx-auto mb-4">
              <AvatarImage src={educator.avatar} alt={educator.name} />
              <AvatarFallback className="text-lg">
                {educator.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
              {educator.name}
            </h3>
            <p className="text-blue-600 font-medium">{educator.position}</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-gray-900">{educator.experience}+</div>
              <div className="text-sm text-gray-500">{t('educators.experience')}</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">{educator.students}+</div>
              <div className="text-sm text-gray-500">{t('educators.students')}</div>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-sm text-center">
            {educator.description}
          </p>

          {/* Subjects */}
          <div className="space-y-2">
            <div className="text-sm font-medium text-gray-700">Subjects:</div>
            <div className="flex flex-wrap gap-2">
              {educator.subjects.map((subject, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {subject}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}