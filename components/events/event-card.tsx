'use client';

import { Event } from '@/types';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Users, MoreVertical } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface EventCardProps {
  event: Event;
  onEdit?: (event: Event) => void;
  onDelete?: (event: Event) => void;
  onView?: (event: Event) => void;
}

export function EventCard({ event, onEdit, onDelete, onView }: EventCardProps) {
  const getStatusBadge = (status: Event['status']) => {
    const config = {
      upcoming: { bg: 'bg-blue-100 text-blue-700', label: 'Upcoming' },
      ongoing: { bg: 'bg-green-100 text-green-700', label: 'Ongoing' },
      completed: { bg: 'bg-gray-100 text-gray-700', label: 'Completed' },
      cancelled: { bg: 'bg-red-100 text-red-700', label: 'Cancelled' },
    };

    return (
      <Badge className={`${config[status].bg} hover:${config[status].bg}`}>
        {config[status].label}
      </Badge>
    );
  };

  return (
    <Card className="overflow-hidden transition-shadow hover:shadow-lg">
      <div className="relative h-48 w-full overflow-hidden bg-gray-200">
        <img
          src={event.image}
          alt={event.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute right-2 top-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="h-8 w-8">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => onView?.(event)}>
                View Details
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => onEdit?.(event)}>
                Edit
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => onDelete?.(event)}
                className="text-red-600"
              >
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="absolute bottom-2 left-2">
          {getStatusBadge(event.status)}
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="mb-2 font-semibold text-gray-900">{event.title}</h3>
        <p className="mb-4 line-clamp-2 text-sm text-gray-600">
          {event.description}
        </p>
        <div className="space-y-2">
          <div className="flex items-center text-sm text-gray-600">
            <Calendar className="mr-2 h-4 w-4" />
            {event.date}
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <MapPin className="mr-2 h-4 w-4" />
            {event.location}
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Users className="mr-2 h-4 w-4" />
            {event.attendees} Attendees
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
