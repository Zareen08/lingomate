import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { FaStar, FaChalkboardTeacher, FaLanguage, FaInfoCircle } from 'react-icons/fa';

const Featured = () => {
  const [allTutors, setAllTutors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://lingomate-server-site.vercel.app/tutorials')
      .then(res => res.json())
      .then(data => {
        setAllTutors(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch tutors:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 dark:bg-gray-900">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-teal-600 dark:text-teal-400 mb-3">
          Featured Tutorials
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Connect with expert tutors in various languages and subjects
        </p>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500 dark:border-teal-400"></div>
        </div>
      ) : allTutors.length === 0 ? (
        <div className="text-center py-12">
          <FaChalkboardTeacher className="mx-auto text-5xl text-gray-400 dark:text-gray-600 mb-4" />
          <p className="text-xl text-gray-500 dark:text-gray-400">
            No featured tutors available at the moment.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {allTutors.map(tutor => (
            <div
              key={tutor._id}
              className="bg-base dark:bg-gray-800 rounded-xl shadow-md dark:shadow-black/40 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col"
            >
              <div className="relative h-56 w-full">
                <img
                  src={tutor.image || '/default-tutor.jpg'}
                  alt={tutor.name}
                  className="w-full h-full object-cover"
                  onError={e => {
                    e.target.src = '/default-tutor.jpg';
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-xl font-bold text-white">{tutor.name}</h3>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center mb-3">
                  <FaLanguage className="text-teal-600 dark:text-teal-400 mr-2" />
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                    {tutor.category}
                  </span>
                </div>

                <div className="flex items-center mb-4">
                  <div className="text-yellow-500 flex items-center mr-2">
                    <FaStar className="mr-1" />
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {tutor.review || 0} review{(tutor.review || 0) !== 1 && 's'}
                  </span>
                </div>

                <p className="text-gray-600 dark:text-gray-300 text-sm mb-5 line-clamp-3 flex-grow">
                  {tutor.description}
                </p>

                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-2xl font-bold text-teal-600 dark:text-teal-400">
                      ${tutor.price}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">/hour</span>
                  </div>
                  <Link
                    to={`/tutor/${tutor._id}`}
                    className="flex items-center px-4 py-2 bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 text-white rounded-lg transition-colors"
                  >
                    <FaInfoCircle className="mr-2" />
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Featured;
