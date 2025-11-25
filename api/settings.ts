import { apiClient } from '@/lib/api-client';
import { Settings } from '@/types';

export const getSettings = async (): Promise<Settings> => {
  const response = await apiClient.get('/settings');
  return response.data;
};

export const updateSettings = async (data: Partial<Settings>): Promise<Settings> => {
  const response = await apiClient.put('/settings', data);
  return response.data;
};
