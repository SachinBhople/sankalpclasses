'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  course: string;
  avatar?: string;
}

interface ReviewCardProps {
  review: Review;
}

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <Card className="h-full">
      <CardContent className="p-6">
        <div className="space-y-4">
          {/* Rating */}
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < review.rating
                    ? 'fill-yellow-400 text-yellow-400'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>

          {/* Comment */}
          <p className="text-gray-600 italic">
            "{review.comment}"
          </p>

          {/* User Info */}
          <div className="flex items-center space-x-3 pt-4 border-t">
            <Avatar>
              <AvatarImage src={review.avatar} alt={review.name} />
              <AvatarFallback>
                {review.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div>
              <div className="font-semibold text-gray-900">{review.name}</div>
              <div className="text-sm text-gray-500">{review.course}</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}