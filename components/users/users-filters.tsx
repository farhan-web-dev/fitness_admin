'use client';

import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Filter } from 'lucide-react';

interface UsersFiltersProps {
  onLocationChange?: (value: string) => void;
  onStatusChange?: (value: string) => void;
}

export function UsersFilters({
  onLocationChange,
  onStatusChange,
}: UsersFiltersProps) {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <div className="flex items-center space-x-2">
        <Filter className="h-4 w-4 text-gray-500" />
        <span className="text-sm font-medium text-gray-700">Filter Users</span>
      </div>

      <Select onValueChange={onLocationChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="All Locations" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Locations</SelectItem>
          <SelectItem value="london">London</SelectItem>
          <SelectItem value="manchester">Manchester</SelectItem>
          <SelectItem value="birmingham">Birmingham</SelectItem>
          <SelectItem value="liverpool">Liverpool</SelectItem>
        </SelectContent>
      </Select>

      <Select onValueChange={onStatusChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="All Status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Status</SelectItem>
          <SelectItem value="active">Active</SelectItem>
          <SelectItem value="inactive">Inactive</SelectItem>
          <SelectItem value="banned">Banned</SelectItem>
        </SelectContent>
      </Select>

      <Button variant="outline" className="ml-auto">
        Export
      </Button>
    </div>
  );
}
