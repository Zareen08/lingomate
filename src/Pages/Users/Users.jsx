import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const Users = () => {
  const initialUsers = useLoaderData();
  const [users, setUsers] = useState(initialUsers);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#0d9488", 
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://lingomate-server-site.vercel.app/users/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              const remainingUsers = users.filter((user) => user._id !== id);
              setUsers(remainingUsers);
              Swal.fire({
                title: "Deleted!",
                text: "User has been deleted.",
                icon: "success",
                confirmButtonColor: "#0d9488", 
              });
            }
          });
      }
    });
  };

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-4xl md:text-6xl text-center mb-12 font-semibold text-gray-800">
        Users: <span className="text-teal-600">{users.length}</span>
      </h1>

      <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200">
        <table className="table-auto w-full text-left">
          <thead className="bg-teal-600 text-white">
            <tr>
              <th className="py-3 px-6">SL</th>
              <th className="py-3 px-6">Name</th>
              <th className="py-3 px-6">Email</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, index) => (
              <tr
                key={user._id}
                className="border-b last:border-none hover:bg-teal-50 transition"
              >
                <td className="py-4 px-6 font-medium">{index + 1}</td>

                <td className="py-4 px-6 flex items-center gap-4">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={user.photo} alt={user.name} />
                    </div>
                  </div>
                  <span className="text-gray-800 font-semibold">{user.name}</span>
                </td>

                <td className="py-4 px-6 text-gray-500">{user.email}</td>

                <td className="py-4 px-6 flex justify-center gap-3">
                  <button
                    className="btn btn-sm bg-teal-500 text-white hover:bg-teal-600 transition"
                    onClick={() => alert(`View user: ${user.name}`)}
                  >
                    View
                  </button>

                  <button
                    className="btn btn-sm bg-teal-700 text-white hover:bg-teal-800 transition"
                    onClick={() => alert(`Edit user: ${user.name}`)}
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(user._id)}
                    className="btn btn-sm bg-red-500 hover:bg-red-600 text-white transition"
                    aria-label={`Delete user ${user.name}`}
                  >
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
