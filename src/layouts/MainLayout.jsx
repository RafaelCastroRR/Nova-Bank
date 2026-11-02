import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Menu } from 'lucide-react';
import Sidebar from '../components/navigation/Sidebar';
import useAccount from '../shared/hooks/useAccount';
import useAuthStore from '../shared/stores/authStore';

const MainLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { getMyAccount } = useAccount();
  const { isAuthenticated, user } = useAuthStore();

  useEffect(() => {
    if (isAuthenticated) {
      getMyAccount();
    }
    // eslint-disable-next-line
  }, [isAuthenticated]);

  return (
    <div className="flex h-screen overflow-hidden bg-gray-950">
      {/* Mobile Backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-xs md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

      <div className="flex flex-col flex-1 overflow-hidden min-w-0">
        {/* Mobile Header Bar */}
        <header className="flex h-14 items-center justify-between border-b border-gray-800 bg-gray-900 px-4 md:hidden shrink-0">
          <div className="flex items-center">
            <button
              onClick={() => setSidebarOpen(true)}
              className="mr-3 rounded-md p-1.5 text-gray-300 hover:bg-gray-800 hover:text-white focus:outline-hidden"
              aria-label="Abrir menú"
            >
              <Menu size={22} />
            </button>
            <span className="text-base font-semibold text-white">Nova Bank</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold">
              {user?.name?.substring(0, 2).toUpperCase() || "NB"}
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="mx-auto max-w-7xl animate-in">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
