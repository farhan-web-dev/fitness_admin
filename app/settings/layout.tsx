import { AdminLayout } from '@/components/layouts/admin-layout';

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AdminLayout>{children}</AdminLayout>;
}
