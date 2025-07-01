import React, { useContext, useEffect, useState } from 'react';
import { AuthContex } from '../../Provider/AuthContext';
import { Link } from 'react-router';
import { FaBook, FaChalkboardTeacher, FaUserEdit } from 'react-icons/fa';

const Dashboard = () => {
  const { user } = useContext(AuthContex);
  const [tutorialCount, setTutorialCount] = useState(0);
  const [bookingCount, setBookingCount] = useState(0);

  useEffect(() => {
    if (user?.email) {
      // Fetch posted tutorials
      fetch(`https://lingomate-server-site.vercel.app/my-tutorials?email=${user.email}`)
        .then(res => res.json())
        .then(data => setTutorialCount(data.length))
        .catch(err => console.error('Failed to load tutorials'));

      // Fetch booked tutorials
      fetch(`https://lingomate-server-site.vercel.app/my-booked?email=${user.email}`)
        .then(res => res.json())
        .then(data => setBookingCount(data.length))
        .catch(err => console.error('Failed to load bookings'));
    }
  }, [user]);

  return (
    <div className="p-6 md:p-10 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 md:p-10">
        <div className="text-center">
          <img
            src={user?.photoURL || '/default-user.png'}
            alt="User"
            className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-teal-600"
          />
          <h1 className="text-2xl md:text-3xl font-bold text-teal-600 dark:text-teal-400">
            Welcome, {user?.displayName || 'Tutor'}!
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Manage your tutorials, bookings, and profile all in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
          <Link
            to="/dashboard/addtutorials"
            className="flex items-center justify-between p-5 bg-gradient-to-r from-teal-600 to-teal-500 text-white rounded-lg shadow hover:shadow-lg transition"
          >
            <div className="flex items-center">
              <FaChalkboardTeacher className="text-2xl mr-4" />
              <span>Add New Tutorial</span>
            </div>
          </Link>

          <Link
            to="/dashboard/mytutorials"
            className="flex items-center justify-between p-5 bg-gradient-to-r from-teal-600 to-teal-500 text-white rounded-lg shadow hover:shadow-lg transition"
          >
            <div className="flex items-center">
              <FaBook className="text-2xl mr-4" />
              <span>My Tutorials</span>
            </div>
            <span className="bg-white text-teal-600 text-sm font-bold px-3 py-1 rounded-full">
              {tutorialCount}
            </span>
          </Link>

          <Link
            to="/dashboard/bookedtutorials"
            className="flex items-center justify-between p-5 bg-gradient-to-r from-teal-600 to-teal-500 text-white rounded-lg shadow hover:shadow-lg transition"
          >
            <div className="flex items-center">
              <FaUserEdit className="text-2xl mr-4" />
              <span>My Bookings</span>
            </div>
            <span className="bg-white text-teal-600 text-sm font-bold px-3 py-1 rounded-full">
              {bookingCount}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
