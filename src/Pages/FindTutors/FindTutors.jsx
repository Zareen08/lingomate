import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';


const FindTutors = () => {
  const [tutors, setTutors] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/tutorials')
      .then(res => res.json())
      .then(data => setTutors(data))
      .catch(err => console.error('Failed to fetch tutors:', err));
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-4xl mb-6 text-center text-teal-600 font-bold">Find Tutors</h2>

      {tutors.length === 0 ? (
        <p className="text-center text-gray-500">No tutors available at the moment.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tutors.map((tutor, index) => (
            <div key={tutor._id} className="bg-white rounded-lg shadow p-5 hover:shadow-lg transition duration-300">
              <img
                src={tutor.image}
                alt={tutor.name}
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-1">{tutor.name}</h3>
              <p className="text-sm text-gray-500 mb-2">Language: {tutor.category}</p>
              <p className="text-sm text-gray-500 mb-2">Review: {tutor.review || "No reviews yet"}</p>
              <p className="text-gray-700 text-sm">{tutor.description}</p>
              <Link to={`/tutor/${tutor._id}`}
              className="inline-block mt-4 px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600 transition">
              View Details
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FindTutors;
