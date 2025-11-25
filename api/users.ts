import { apiClient } from '@/lib/api-client';
import { User } from '@/types';

export const getUsers = async (filters?: { location?: string; status?: string }): Promise<User[]> => {
  const response = await apiClient.get('/users', { params: filters });
  return response.data;
};

export const getUserById = async (id: string): Promise<User> => {
  const response = await apiClient.get(`/users/${id}`);
  return response.data;
};

export const updateUser = async (id: string, data: Partial<User>): Promise<User> => {
  const response = await apiClient.put(`/users/${id}`, data);
  return response.data;
};

export const deleteUser = async (id: string): Promise<void> => {
  await apiClient.delete(`/users/${id}`);
};

export const banUser = async (id: string): Promise<User> => {
  const response = await apiClient.post(`/users/${id}/ban`);
  return response.data;
};
