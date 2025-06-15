import React, { useContext, useEffect, useState } from 'react';
import { AuthContex } from '../../Provider/AuthContext';
import { toast } from 'react-toastify';

const MyBooked = () => {
  const { user } = useContext(AuthContex);
  const [bookedTutors, setBookedTutors] = useState([]);
  const [loading, setLoading] = useState(true);
   
  console.log(user.accessToken)
  useEffect(() => {
    if (!user?.email) return;

    fetch(`https://lingomate-server-site.vercel.app/bookings?email=${user.email}`,{
      headers:{
        authorization: `Bearer ${user.accessToken}`
      }
    })
      .then(res => res.json())
      .then(data => {
        setBookedTutors(data);
        setLoading(false);
      })
      .catch(() => {
        toast.error('Failed to load your booked tutors');
        setLoading(false);
      });
  }, [user]);

  
  const handleReview = (tutorId) => {
    fetch(`https://lingomate-server-site.vercel.app/tutorials/${tutorId}/review`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      },
      
      body: JSON.stringify({ email: user.email }) 
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0 || data.review) {
          setBookedTutors(prev =>
            prev.map(t =>
              t.tutorId === tutorId
                ? { ...t, review: (t.review || 0) + 1 }
                : t
            )
          );
          toast.success('Thank you for your review!');
        } else {
          toast.error('You already reviewed this tutor');
        }
      })
      .catch(() => {
        toast.error('Failed to submit review');
      });
  };

  if (loading) return <p className="text-center">Loading your booked tutors...</p>;
  if (!bookedTutors.length) return <p className="text-center">You have no booked tutors yet.</p>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-teal-600">My Booked Tutors</h1>
      {bookedTutors.map(tutor => (
        <div key={tutor._id} className="border rounded p-4 mb-6 flex items-center gap-6">
          <img src={tutor.image} alt={tutor.name} className="w-24 h-24 rounded object-cover" />
          <div className="flex-grow">
            <h2 className="text-xl font-semibold">{tutor.name || 'Tutor'}</h2>
            <p><strong>Language:</strong> {tutor.language || 'N/A'}</p>
            <p><strong>Price:</strong> ${tutor.price}</p>
            <p><strong>Reviews:</strong> {tutor.review || 0}</p>
          </div>
          <button onClick={() => handleReview(tutor.tutorId)}
          className="btn bg-teal-600 text-white hover:bg-teal-700 px-4 py-2"
          disabled={tutor.reviewed}>
          {tutor.reviewed ? 'Reviewed' : 'Review'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default MyBooked;
