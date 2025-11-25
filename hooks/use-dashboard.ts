import { useQuery } from '@tanstack/react-query';
import { getDashboardStats, getRecentActivity, getChartData } from '@/api/dashboard';

export const useDashboardStats = () => {
  return useQuery({
    queryKey: ['dashboardStats'],
    queryFn: getDashboardStats,
  });
};

export const useRecentActivity = () => {
  return useQuery({
    queryKey: ['recentActivity'],
    queryFn: getRecentActivity,
  });
};

export const useChartData = (type: 'users' | 'events') => {
  return useQuery({
    queryKey: ['chartData', type],
    queryFn: () => getChartData(type),
  });
};
