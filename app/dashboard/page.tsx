'use client';

import { Users, Calendar, TrendingUp, Activity } from 'lucide-react';
import { StatCard } from '@/components/dashboard/stat-card';
import { UsersChart } from '@/components/dashboard/users-chart';
import { ActivitiesChart } from '@/components/dashboard/activities-chart';
import { ActivityItem } from '@/components/dashboard/activity-item';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const mockActivities = [
  {
    id: '1',
    type: 'user',
    message: 'New user registered: John Doe',
    timestamp: '2 hours ago',
  },
  {
    id: '2',
    type: 'event',
    message: 'Adventure Swimming Technique class - Created',
    timestamp: '3 hours ago',
  },
  {
    id: '3',
    type: 'document',
    message: 'Accommodation booking PDF - uploaded by Alex',
    timestamp: '5 hours ago',
  },
  {
    id: '4',
    type: 'message',
    message: 'New message from Sarah Johnson',
    timestamp: '1 day ago',
  },
  {
    id: '5',
    type: 'user',
    message: 'User profile updated: Mike Wilson',
    timestamp: '1 day ago',
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-violet-500 to-purple-600 p-8 text-white">
        <div className="relative z-10">
          <h1 className="text-3xl font-bold">Welcome back, Admin User!</h1>
          <p className="mt-2 text-violet-100">
            Here&apos;s what&apos;s happening with your platform today.
          </p>
        </div>
        <div className="absolute right-0 top-0 h-full w-1/3 opacity-10">
          <div className="h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] bg-repeat" />
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-xl font-semibold text-gray-900">
          Key Performance Indicators
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Total Users"
            value="10,234"
            change="12.5%"
            changeType="positive"
            icon={Users}
            iconColor="bg-blue-100 text-blue-600"
          />
          <StatCard
            title="Active Events"
            value="857"
            change="8.2%"
            changeType="positive"
            icon={Calendar}
            iconColor="bg-green-100 text-green-600"
          />
          <StatCard
            title="Total Events"
            value="21.2M"
            change="3.1%"
            changeType="positive"
            icon={TrendingUp}
            iconColor="bg-purple-100 text-purple-600"
          />
          <StatCard
            title="Growth Rate"
            value="15.7%"
            change="2.4%"
            changeType="positive"
            icon={Activity}
            iconColor="bg-orange-100 text-orange-600"
          />
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <UsersChart />
        <ActivitiesChart />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {mockActivities.map((activity) => (
            <ActivityItem key={activity.id} activity={activity} />
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
