'use client';

import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { LayoutGrid, List } from 'lucide-react';

interface EventFiltersProps {
  view: 'grid' | 'list';
  onViewChange: (view: 'grid' | 'list') => void;
  onStatusChange?: (value: string) => void;
}

export function EventFilters({
  view,
  onViewChange,
  onStatusChange,
}: EventFiltersProps) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4">
      <Select onValueChange={onStatusChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="All Events" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Events</SelectItem>
          <SelectItem value="upcoming">Upcoming</SelectItem>
          <SelectItem value="ongoing">Ongoing</SelectItem>
          <SelectItem value="completed">Completed</SelectItem>
          <SelectItem value="cancelled">Cancelled</SelectItem>
        </SelectContent>
      </Select>

      <div className="flex items-center space-x-2">
        <Button
          variant={view === 'grid' ? 'default' : 'outline'}
          size="icon"
          onClick={() => onViewChange('grid')}
          className={view === 'grid' ? 'bg-violet-600' : ''}
        >
          <LayoutGrid className="h-4 w-4" />
        </Button>
        <Button
          variant={view === 'list' ? 'default' : 'outline'}
          size="icon"
          onClick={() => onViewChange('list')}
          className={view === 'list' ? 'bg-violet-600' : ''}
        >
          <List className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
