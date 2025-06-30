import React from 'react';
import { Outlet, NavLink } from 'react-router'; 

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen">
      
      <nav className="w-64 bg-teal-700 text-white p-6 space-y-6 flex flex-col">
        <h2 className="text-2xl font-bold mb-6">LingoMate</h2>

        
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `block py-2 px-3 rounded hover:bg-teal-600 transition-colors ${
              isActive ? 'bg-teal-900 font-semibold' : ''
            }`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/dashboard"
          end
          className={({ isActive }) =>
            `block py-2 px-3 rounded hover:bg-teal-600 transition-colors ${
              isActive ? 'bg-teal-900 font-semibold' : ''
            }`
          }
        >
          Dashboard Home
        </NavLink>

        <NavLink
          to="/dashboard/addtutorials"
          className={({ isActive }) =>
            `block py-2 px-3 rounded hover:bg-teal-600 transition-colors ${
              isActive ? 'bg-teal-900 font-semibold' : ''
            }`
          }
        >
          Add Tutorial
        </NavLink>

        <NavLink
          to="/dashboard/mytutorials"
          className={({ isActive }) =>
            `block py-2 px-3 rounded hover:bg-teal-600 transition-colors ${
              isActive ? 'bg-teal-900 font-semibold' : ''
            }`
          }
        >
          My Tutorials
        </NavLink>

        <NavLink
          to="/dashboard/bookedtutorials"
          className={({ isActive }) =>
            `block py-2 px-3 rounded hover:bg-teal-600 transition-colors ${
              isActive ? 'bg-teal-900 font-semibold' : ''
            }`
          }
        >
          My Bookings
        </NavLink>
      </nav>

      
      <main className="flex-1 p-6 bg-gray-50">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
