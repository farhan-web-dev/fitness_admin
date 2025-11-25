import { apiClient } from '@/lib/api-client';
import { Event } from '@/types';

export const getEvents = async (filters?: { status?: string }): Promise<Event[]> => {
  const response = await apiClient.get('/events', { params: filters });
  return response.data;
};

export const getEventById = async (id: string): Promise<Event> => {
  const response = await apiClient.get(`/events/${id}`);
  return response.data;
};

export const createEvent = async (data: Partial<Event>): Promise<Event> => {
  const response = await apiClient.post('/events', data);
  return response.data;
};

export const updateEvent = async (id: string, data: Partial<Event>): Promise<Event> => {
  const response = await apiClient.put(`/events/${id}`, data);
  return response.data;
};

export const deleteEvent = async (id: string): Promise<void> => {
  await apiClient.delete(`/events/${id}`);
};
