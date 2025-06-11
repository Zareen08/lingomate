import React from 'react';
import { FaUserGraduate, FaStar, FaGlobe, FaUsers } from 'react-icons/fa';

const StatsSection = ({ tutors = 0, reviews = 0, languages = 0, users = 0 }) => {
  const stats = [
    {
      icon: <FaUserGraduate className="text-amber-500 " size={25}/>,
      label: 'Expert Tutors',
      value: tutors.toLocaleString(),
    },
    {
      icon: <FaStar className="text-amber-500" size={25}/>,
      label: '5-Star Reviews',
      value: reviews.toLocaleString(),
    },
    {
      icon: <FaGlobe className="text-amber-500" size={25}/>,
      label: 'Languages',
      value: languages,
    },
    {
      icon: <FaUsers className="text-amber-500" size={25}/>,
      label: 'Active Learners',
      value: users.toLocaleString(),
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-base-100 to-base-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    {stats.map((stat, index) => (
    <div key={index} 
    className="bg-base-100 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 group border border-base-300/20 hover:border-amber-400/20">
    <div className="flex flex-col items-center">
    <div className="mb-5 p-4 bg-amber-50 rounded-full group-hover:bg-amber-100 transition-colors duration-300">
    {stat.icon}
    </div>
    <h3 className="text-4xl font-extrabold text-teal-700 mb-2">
    {stat.value}+
    </h3>
    <p className="text-lg font-medium text-base-content/80">
    {stat.label}
    </p>
    </div>
    </div>
    ))}
    </div>
    </div>
    </section>
  );
};

export default StatsSection;