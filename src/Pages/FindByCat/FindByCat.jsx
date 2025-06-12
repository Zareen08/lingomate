import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router';
import { FaInfoCircle } from 'react-icons/fa';

const FindByCat = () => {
  const { category } = useParams();
  const [tutors, setTutors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!category) return;

    fetch(`http://localhost:4000/tutorials?category=${encodeURIComponent(category)}`)
      .then(res => res.json())
      .then(data => {
        setTutors(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch tutors by category:', err);
        setLoading(false);
      });
  }, [category]);

  if (loading) return <p className="text-center py-12">Loading tutors...</p>;
  if (tutors.length === 0) return <p className="text-center py-12">No tutors found for {category}.</p>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6 text-teal-600">Tutors for {category}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tutors.map(tutor => (
          <div key={tutor._id} className="bg-white rounded-xl shadow-md p-6">
            <img
              src={tutor.image || '/default-tutor.jpg'}
              alt={tutor.name}
              className="w-full h-48 object-cover rounded"
              onError={e => { e.target.src = '/default-tutor.jpg'; }}
            />
            <h2 className="mt-4 text-xl font-semibold">{tutor.name}</h2>
            <p><strong>Language:</strong> {tutor.language || tutor.category}</p>
            <p><strong>Price:</strong> ${tutor.price}</p>
            <p><strong>Reviews:</strong> {tutor.review || 0}</p>
            <Link
              to={`/tutor/${tutor._id}`}
              className="inline-block mt-3 px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700"
            >
              <FaInfoCircle className="inline mr-2" />
              Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FindByCat;
