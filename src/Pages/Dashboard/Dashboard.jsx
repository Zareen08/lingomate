import React, { useContext } from 'react';
import { AuthContex } from '../../Provider/AuthContext';
import { Link } from 'react-router'; 
import { FaBook, FaChalkboardTeacher, FaUserEdit } from 'react-icons/fa';

const Dashboard = () => {
  const { user } = useContext(AuthContex);

  return (
    <div className="p-6 md:p-10 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-6 md:p-10">
        <div className="text-center">
          <img
            src={user?.photoURL || '/default-user.png'}
            alt="User"
            className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-teal-600"
          />
          <h1 className="text-2xl md:text-3xl font-bold text-teal-600">Welcome, {user?.displayName || 'Tutor'}!</h1>
          <p className="text-gray-600 mt-2">Manage your tutorials, bookings, and profile all in one place.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
          <Link
            to="/dashboard/addtutorials"
            className="flex items-center p-5 bg-gradient-to-r from-teal-600 to-teal-500 text-white rounded-lg shadow hover:shadow-lg transition"
          >
            <FaChalkboardTeacher className="text-2xl mr-4" />
            <span>Add New Tutorial</span>
          </Link>

          <Link
            to="/dashboard/mytutorials"
            className="flex items-center p-5 bg-gradient-to-r from-teal-600 to-teal-500 text-white rounded-lg shadow hover:shadow-lg transition"
          >
            <FaBook className="text-2xl mr-4" />
            <span>My Tutorials</span>
          </Link>

          <Link
            to="/dashboard/bookedtutorials"
            className="flex items-center p-5 bg-gradient-to-r from-teal-600 to-teal-500 text-white rounded-lg shadow hover:shadow-lg transition"
          >
            <FaUserEdit className="text-2xl mr-4" />
            <span>My Bookings</span>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
