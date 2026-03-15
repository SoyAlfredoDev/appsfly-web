import { Metadata } from 'next';
import { isAuthenticated } from '@/lib/admin/auth';
import LoginForm from '@/components/admin/LoginForm';

export const metadata: Metadata = {
  title: 'Admin Dashboard',
  robots: {
    index: false,
    follow: false,
  },
};

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isAuth = await isAuthenticated();

  if (!isAuth) {
    return (
      <div className="min-h-screen bg-[#0f172a] flex flex-col justify-center items-center p-4">
        <div className="w-full max-w-md bg-[#1e293b] border border-slate-700/50 rounded-2xl shadow-2xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-white mb-2">AppsFly Admin</h1>
            <p className="text-slate-400">Ingresa tu contraseña para acceder al panel</p>
          </div>
          <LoginForm />
        </div>
      </div>
    );
  }

  // Dashboard autenticado
  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 selection:bg-indigo-500/30">
      {children}
    </div>
  );
}
