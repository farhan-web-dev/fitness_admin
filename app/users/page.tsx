'use client';

import { useState } from 'react';
import { UsersTable } from '@/components/users/users-table';
import { UsersFilters } from '@/components/users/users-filters';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { User } from '@/types';

const mockUsers: User[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    location: 'London',
    status: 'active',
    joinDate: '2024-01-15',
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    email: 'sarah.j@example.com',
    location: 'Manchester',
    status: 'active',
    joinDate: '2024-02-20',
  },
  {
    id: '3',
    name: 'Mike Wilson',
    email: 'mike.w@example.com',
    location: 'Birmingham',
    status: 'inactive',
    joinDate: '2024-01-10',
  },
  {
    id: '4',
    name: 'Emma Davis',
    email: 'emma.d@example.com',
    location: 'London',
    status: 'active',
    joinDate: '2024-03-05',
  },
  {
    id: '5',
    name: 'James Brown',
    email: 'james.b@example.com',
    location: 'Liverpool',
    status: 'banned',
    joinDate: '2023-12-01',
  },
  {
    id: '6',
    name: 'Lisa Anderson',
    email: 'lisa.a@example.com',
    location: 'London',
    status: 'active',
    joinDate: '2024-02-14',
  },
  {
    id: '7',
    name: 'David Martinez',
    email: 'david.m@example.com',
    location: 'Manchester',
    status: 'active',
    joinDate: '2024-01-25',
  },
  {
    id: '8',
    name: 'Sophie Taylor',
    email: 'sophie.t@example.com',
    location: 'Birmingham',
    status: 'inactive',
    joinDate: '2023-11-30',
  },
];

export default function UsersPage() {
  const [users] = useState<User[]>(mockUsers);
  const [locationFilter, setLocationFilter] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<string>('all');

  const filteredUsers = users.filter((user) => {
    const matchesLocation =
      locationFilter === 'all' ||
      user.location.toLowerCase() === locationFilter.toLowerCase();
    const matchesStatus =
      statusFilter === 'all' || user.status === statusFilter;
    return matchesLocation && matchesStatus;
  });

  const handleView = (user: User) => {
    console.log('View user:', user);
  };

  const handleEdit = (user: User) => {
    console.log('Edit user:', user);
  };

  const handleBan = (user: User) => {
    console.log('Ban user:', user);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Users Management</h1>
          <p className="mt-2 text-gray-600">
            View and manage user accounts, permissions, and account statuses.
          </p>
        </div>
        <Button className="bg-violet-600 hover:bg-violet-700">
          <Plus className="mr-2 h-4 w-4" />
          Add User
        </Button>
      </div>

      <UsersFilters
        onLocationChange={setLocationFilter}
        onStatusChange={setStatusFilter}
      />

      <UsersTable
        users={filteredUsers}
        onView={handleView}
        onEdit={handleEdit}
        onBan={handleBan}
      />

      <div className="flex items-center justify-between rounded-lg border bg-white p-4">
        <p className="text-sm text-gray-600">
          Showing {filteredUsers.length} of {users.length} users
        </p>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            Previous
          </Button>
          <Button variant="outline" size="sm">
            1
          </Button>
          <Button variant="outline" size="sm" className="bg-violet-50">
            2
          </Button>
          <Button variant="outline" size="sm">
            3
          </Button>
          <Button variant="outline" size="sm">
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
