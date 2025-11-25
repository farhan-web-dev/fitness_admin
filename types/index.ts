export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  location: string;
  status: 'active' | 'inactive' | 'banned';
  joinDate: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
  location: string;
  attendees: number;
  status: 'upcoming' | 'ongoing' | 'completed' | 'cancelled';
}

export interface DashboardStats {
  totalUsers: number;
  activeUsers: number;
  totalEvents: number;
  growthRate: number;
}

export interface Activity {
  id: string;
  type: string;
  message: string;
  timestamp: string;
  icon?: string;
}

export interface Settings {
  enableDarkMode: boolean;
  enableNotifications: boolean;
  brandColors: {
    primary: string;
    secondary: string;
  };
  brandName: string;
  logoUrl?: string;
  emailNotifications: boolean;
  pushNotifications: boolean;
}
