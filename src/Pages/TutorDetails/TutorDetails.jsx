import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { AuthContex } from '../../Provider/AuthContext';
import { toast } from 'react-toastify';

const TutorDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContex);
  const [tutor, setTutor] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/tutorials/${id}`)
      .then(res => res.json())
      .then(data => setTutor(data))
      .catch(err => toast.error('Failed to load tutor details'));
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

    fetch('http://localhost:4000/bookings', {
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
      .catch(err => toast.error('Something went wrong'));
  };

  if (!tutor) return <p className="text-center">Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <img src={tutor.image} alt={tutor.name} className="w-full h-64 object-cover rounded mb-6" />
      <h2 className="text-3xl font-bold text-teal-600 mb-2">{tutor.name}</h2>
      <p className="text-lg mb-1"><strong>Language:</strong> {tutor.category}</p>
      <p className="text-lg mb-1"><strong>Price:</strong> ${tutor.price}</p>
      <p className="text-lg mb-1"><strong>Review:</strong> {tutor.review || "No review yet"}</p>
      <p className="text-md text-gray-700 mb-4">{tutor.description}</p>
      <button
        onClick={handleBook}
        className="btn bg-teal-600 text-white hover:bg-teal-700 px-6 py-2"
      >
        Book
      </button>
    </div>
  );
};

export default TutorDetails;
