import { AdminLayout } from '@/components/layouts/admin-layout';

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AdminLayout>{children}</AdminLayout>;
}
