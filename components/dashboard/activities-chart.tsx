'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const mockData = [
  { day: 'Mon', activities: 45 },
  { day: 'Tue', activities: 52 },
  { day: 'Wed', activities: 48 },
  { day: 'Thu', activities: 61 },
  { day: 'Fri', activities: 55 },
  { day: 'Sat', activities: 67 },
  { day: 'Sun', activities: 72 },
];

export function ActivitiesChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Activities</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={mockData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis
              dataKey="day"
              stroke="#888888"
              fontSize={12}
              tickLine={false}
            />
            <YAxis stroke="#888888" fontSize={12} tickLine={false} />
            <Tooltip />
            <Bar
              dataKey="activities"
              fill="#8b5cf6"
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
