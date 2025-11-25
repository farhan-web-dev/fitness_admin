'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Users,
  Calendar,
  Settings,
  FileText,
  PieChart,
  MessageSquare,
  Bell
} from 'lucide-react';
import { cn } from '@/lib/utils';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
  { icon: Users, label: 'Users Management', href: '/users' },
  { icon: Calendar, label: 'Events Management', href: '/events' },
  // { icon: FileText, label: 'Documents & Submissions', href: '/documents' },
  // { icon: PieChart, label: 'Reports', href: '/reports' },
  // { icon: MessageSquare, label: 'Communications', href: '/communications' },
  // { icon: Bell, label: 'Notification Centre', href: '/notifications' },
  { icon: Settings, label: 'Settings', href: '/settings' },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r bg-white">
      <div className="flex h-full flex-col">
        <div className="flex h-16 items-center border-b px-6">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-600" />
            <span className="text-lg font-semibold">Fitness  Admin</span>
          </div>
        </div>

        <nav className="flex-1 space-y-1 px-3 py-4">
          <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
            Navigation
          </p>
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'flex items-center space-x-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-violet-50 text-violet-600'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                )}
              >
                <Icon className="h-5 w-5" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="border-t p-4">
          <div className="flex items-center space-x-3 rounded-lg bg-gray-50 p-3">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-violet-500 to-purple-600" />
            <div className="flex-1 text-sm">
              <p className="font-medium text-gray-900">Admin User</p>
              <p className="text-xs text-gray-500">admin@basecamp.com</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
