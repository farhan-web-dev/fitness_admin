import { apiClient } from '@/lib/api-client';
import { DashboardStats, Activity } from '@/types';

export const getDashboardStats = async (): Promise<DashboardStats> => {
  const response = await apiClient.get('/dashboard/stats');
  return response.data;
};

export const getRecentActivity = async (): Promise<Activity[]> => {
  const response = await apiClient.get('/dashboard/activity');
  return response.data;
};

export const getChartData = async (type: 'users' | 'events') => {
  const response = await apiClient.get(`/dashboard/charts/${type}`);
  return response.data;
};
