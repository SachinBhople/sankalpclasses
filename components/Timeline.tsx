'use client';

import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  achievement?: string;
}

interface TimelineProps {
  events: TimelineEvent[];
}

export function Timeline({ events }: TimelineProps) {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-blue-200"></div>

      <div className="space-y-8">
        {events.map((event, index) => (
          <div
            key={index}
            className={`relative flex items-center ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
          >
            {/* Timeline dot */}
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center z-10">
              <CheckCircle className="h-4 w-4 text-white" />
            </div>

            {/* Content */}
            <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-8 md:pr-8' : 'md:ml-8 md:pl-8'} md:w-1/2`}>
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-blue-600">{event.year}</span>
                      {event.achievement && (
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                          {event.achievement}
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{event.title}</h3>
                    <p className="text-gray-600">{event.description}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}