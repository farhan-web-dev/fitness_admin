'use client';

import { useState } from 'react';
import { EventCard } from '@/components/events/event-card';
import { EventFilters } from '@/components/events/event-filters';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { Event } from '@/types';

const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Sunrise Yoga Bliss',
    description: 'Start your day with energizing yoga sessions at sunrise.',
    image: 'https://images.pexels.com/photos/864939/pexels-photo-864939.jpeg?auto=compress&cs=tinysrgb&w=600',
    date: 'March 15, 2024',
    location: 'Beach Park',
    attendees: 45,
    status: 'upcoming',
  },
  {
    id: '2',
    title: 'City Marathon Training Run',
    description: 'Join us for a comprehensive marathon training session.',
    image: 'https://images.pexels.com/photos/2524739/pexels-photo-2524739.jpeg?auto=compress&cs=tinysrgb&w=600',
    date: 'March 18, 2024',
    location: 'City Center',
    attendees: 120,
    status: 'upcoming',
  },
  {
    id: '3',
    title: 'Mountain Biking Challenge',
    description: 'Experience thrilling mountain trails with expert guides.',
    image: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=600',
    date: 'March 20, 2024',
    location: 'Highland Trails',
    attendees: 32,
    status: 'upcoming',
  },
  {
    id: '4',
    title: 'Zen Mindfulness Training',
    description: 'Learn meditation and mindfulness techniques for daily life.',
    image: 'https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg?auto=compress&cs=tinysrgb&w=600',
    date: 'March 22, 2024',
    location: 'Wellness Center',
    attendees: 28,
    status: 'ongoing',
  },
  {
    id: '5',
    title: 'Educational Hiking Expedition',
    description: 'Explore nature trails while learning about local flora.',
    image: 'https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=600',
    date: 'March 25, 2024',
    location: 'Forest Reserve',
    attendees: 55,
    status: 'upcoming',
  },
  {
    id: '6',
    title: 'Adventure Swim Technique Class',
    description: 'Advanced swimming techniques for open water adventures.',
    image: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=600',
    date: 'March 28, 2024',
    location: 'Aquatic Center',
    attendees: 40,
    status: 'upcoming',
  },
  {
    id: '7',
    title: 'Healthy Cooking & Nutrition Class',
    description: 'Learn to prepare nutritious meals for active lifestyles.',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
    date: 'April 1, 2024',
    location: 'Community Kitchen',
    attendees: 35,
    status: 'upcoming',
  },
  {
    id: '8',
    title: 'Outdoor Camping Adventure',
    description: 'Weekend camping trip with survival skills training.',
    image: 'https://images.pexels.com/photos/699558/pexels-photo-699558.jpeg?auto=compress&cs=tinysrgb&w=600',
    date: 'April 5, 2024',
    location: 'Mountain Camp',
    attendees: 22,
    status: 'cancelled',
  },
];

export default function EventsPage() {
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [statusFilter, setStatusFilter] = useState<string>('all');

  const filteredEvents = mockEvents.filter((event) => {
    return statusFilter === 'all' || event.status === statusFilter;
  });

  const handleView = (event: Event) => {
    console.log('View event:', event);
  };

  const handleEdit = (event: Event) => {
    console.log('Edit event:', event);
  };

  const handleDelete = (event: Event) => {
    console.log('Delete event:', event);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Events Management
          </h1>
          <p className="mt-2 text-gray-600">
            Organize, track and manage all events. View details or create new
            events.
          </p>
        </div>
        <Button className="bg-violet-600 hover:bg-violet-700">
          <Plus className="mr-2 h-4 w-4" />
          Create Event
        </Button>
      </div>

      <EventFilters
        view={view}
        onViewChange={setView}
        onStatusChange={setStatusFilter}
      />

      {view === 'grid' ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredEvents.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              onView={handleView}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {filteredEvents.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              onView={handleView}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}

      {filteredEvents.length === 0 && (
        <div className="flex h-64 items-center justify-center rounded-lg border border-dashed">
          <p className="text-gray-500">No events found</p>
        </div>
      )}
    </div>
  );
}
