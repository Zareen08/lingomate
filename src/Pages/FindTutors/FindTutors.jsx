import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import {
  FaStar,
  FaChalkboardTeacher,
  FaLanguage,
  FaInfoCircle,
} from 'react-icons/fa';

const FindTutors = () => {
  const [tutors, setTutors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:4000/tutorials')
      .then(res => res.json())
      .then(data => {
        setTutors(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch tutors:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-teal-600 mb-3">Find Your Perfect Tutor</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Connect with expert tutors in various languages and subjects
        </p>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500"></div>
        </div>
      ) : tutors.length === 0 ? (
        <div className="text-center py-12">
          <FaChalkboardTeacher className="mx-auto text-5xl text-gray-400 mb-4" />
          <p className="text-xl text-gray-500">No tutors available at the moment.</p>
          <p className="text-gray-400">Please check back later.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tutors.map(tutor => (
            <div
              key={tutor._id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative h-56 w-full">
                <img
                  src={tutor.image || '/default-tutor.jpg'}
                  alt={tutor.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = '/default-tutor.jpg';
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-xl font-bold text-white">{tutor.name}</h3>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center mb-3">
                  <FaLanguage className="text-teal-600 mr-2" />
                  <span className="text-sm font-medium text-gray-600">
                    {tutor.category}
                  </span>
                </div>

                <div className="flex items-center mb-4">
                  <div className="text-yellow-500 flex items-center mr-2">
                    <FaStar className="mr-1" />
                  </div>
                  <span className="text-sm text-gray-500">
                    {tutor.review || 0} review{(tutor.review || 0) !== 1 && 's'}
                  </span>
                </div>

                <p className="text-gray-600 text-sm mb-5 line-clamp-3">
                  {tutor.description}
                </p>

                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-2xl font-bold text-teal-600">
                      ${tutor.price}
                    </span>
                    <span className="text-gray-500 text-sm">/hour</span>
                  </div>
                  <Link
                    to={`/tutor/${tutor._id}`}
                    className="flex items-center px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
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

export default FindTutors;
