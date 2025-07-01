import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { AuthContex } from '../../Provider/AuthContext';
import { toast } from 'react-toastify';

const TutorDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContex);
  const [tutor, setTutor] = useState(null);

  useEffect(() => {
    fetch(`https://lingomate-server-site.vercel.app/tutorials/${id}`)
      .then(res => res.json())
      .then(data => setTutor(data))
      .catch(() => toast.error('Failed to load tutor details'));
  }, [id]);

  const handleBook = () => {
    const bookingData = {
      tutorId: tutor._id,
      image: tutor.image,
      language: tutor.category,
      price: tutor.price,
      tutorEmail: tutor.email,
      email: user?.email,
    };

    fetch('https://lingomate-server-site.vercel.app/bookings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(bookingData),
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          toast.success('Booked successfully!');
        } else {
          toast.error('Booking failed.');
        }
      })
      .catch(() => toast.error('Something went wrong'));
  };

  if (!tutor) return <p className="text-center">Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 dark:bg-gray-900 min-h-screen">
      <img
        src={tutor.image}
        alt={tutor.name}
        className="w-full h-64 object-cover rounded mb-6"
        onError={e => (e.target.src = '/default-tutor.jpg')}
      />
      <div className="flex items-center gap-4 mb-6">
        <img
          src={tutor.userImage || '/default-user.png'}
          alt="Tutor Profile"
          className="w-14 h-14 rounded-full object-cover border"
          onError={e => (e.target.src = '/default-user.png')}
        />
        <div>
          <h2 className="text-3xl font-bold text-teal-600 dark:text-teal-400">{tutor.name}</h2>
          <p className="text-gray-600 dark:text-gray-300">{tutor.email}</p>
        </div>
      </div>

      <p className="text-lg mb-1 dark:text-gray-300"><strong>Language:</strong> {tutor.category}</p>
      <p className="text-lg mb-1 dark:text-gray-300"><strong>Price:</strong> ${tutor.price}</p>
      <p className="text-lg mb-1 dark:text-gray-300"><strong>Review:</strong> {tutor.review || 'No review yet'}</p>
      <p className="text-md text-gray-700 dark:text-gray-400 mb-6">{tutor.description}</p>

      <button
        onClick={handleBook}
        className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded"
      >
        Book
      </button>
    </div>
  );
};

export default TutorDetails;
