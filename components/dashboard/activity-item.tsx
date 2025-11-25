'use client';

import { Activity } from '@/types';
import { FileText, Users, Calendar, MessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';

const iconMap = {
  document: FileText,
  user: Users,
  event: Calendar,
  message: MessageSquare,
};

const colorMap = {
  document: 'bg-blue-100 text-blue-600',
  user: 'bg-green-100 text-green-600',
  event: 'bg-purple-100 text-purple-600',
  message: 'bg-orange-100 text-orange-600',
};

interface ActivityItemProps {
  activity: Activity;
}

export function ActivityItem({ activity }: ActivityItemProps) {
  const Icon = iconMap[activity.type as keyof typeof iconMap] || FileText;
  const colorClass = colorMap[activity.type as keyof typeof colorMap] || 'bg-gray-100 text-gray-600';

  return (
    <div className="flex items-start space-x-4">
      <div className={cn('rounded-lg p-2', colorClass)}>
        <Icon className="h-4 w-4" />
      </div>
      <div className="flex-1 space-y-1">
        <p className="text-sm text-gray-900">{activity.message}</p>
        <p className="text-xs text-gray-500">{activity.timestamp}</p>
      </div>
    </div>
  );
}
