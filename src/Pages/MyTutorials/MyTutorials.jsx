import React, { useContext, useEffect, useState } from 'react';
import { AuthContex } from '../../Provider/AuthContext'; 
import { Link, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const MyTutorials = () => {
  const { user } = useContext(AuthContex);
  const [tutorials, setTutorials] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.email) {
      fetch('https://lingomate-server-site.vercel.app/tutorials', {
        headers: {
          authorization: `Bearer ${user.accessToken}`
        }
      })
        .then(res => res.json())
        .then(data => {
          const userTutorials = data.filter(tut => tut.email === user.email);
          setTutorials(userTutorials);
        })
        .catch(() => toast.error('Failed to fetch tutorials.'));
    }
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
      background: '#ffffff',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://lingomate-server-site.vercel.app/tutorials/${id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount) {
              Swal.fire('Deleted!', 'Your tutorial has been deleted.', 'success');
              setTutorials(prev => prev.filter(t => t._id !== id));
            }
          })
          .catch(() => {
            Swal.fire('Error!', 'Deletion failed.', 'error');
          });
      }
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 dark:bg-gray-900 min-h-screen">
      <h2 className="text-4xl mb-6 text-center font-bold text-teal-600 dark:text-teal-400">My Tutorials</h2>

      {tutorials.length === 0 ? (
        <p className="text-center text-gray-600 dark:text-gray-300">You haven't added any tutorials yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full text-gray-800 dark:text-gray-200">
            <thead className="bg-gradient-to-r from-teal-600 to-teal-400 text-white">
              <tr>
                <th className="py-3 px-4">#</th>
                <th className="py-3 px-4">Image</th>
                <th className="py-3 px-4">Language</th>
                <th className="py-3 px-4">Price</th>
                <th className="py-3 px-4">Description</th>
                <th className="py-3 px-4">Review</th>
                <th className="py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {tutorials.map((tutorial, index) => (
                <tr
                  key={tutorial._id}
                  className={`${
                    index % 2 === 0
                      ? 'bg-teal-50 dark:bg-gray-800'
                      : 'bg-white dark:bg-gray-700'
                  }`}
                >
                  <td className="py-4 px-4">{index + 1}</td>
                  <td className="py-4 px-4">
                    <img
                      src={tutorial.image}
                      alt="Tutorial"
                      className="w-16 h-16 object-cover rounded"
                    />
                  </td>
                  <td className="py-4 px-4">{tutorial.category}</td>
                  <td className="py-4 px-4">${tutorial.price}</td>
                  <td className="py-4 px-4 max-w-xs truncate">{tutorial.description}</td>
                  <td className="py-4 px-4">{tutorial.review || 'N/A'}</td>
                  <td className="py-4 px-4 space-x-2">
                    <Link
                      to={`/updatetutorial/${tutorial._id}`}
                      className="btn btn-sm bg-gradient-to-r from-teal-600 to-teal-400 hover:from-teal-700 hover:to-teal-500 text-white"
                    >
                      Update
                    </Link>
                    <button
                      onClick={() => handleDelete(tutorial._id)}
                      className="btn btn-sm bg-red-600 hover:bg-red-700 text-white"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyTutorials;
