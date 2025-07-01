import React, { useContext } from 'react';
import { AuthContex } from '../../Provider/AuthContext';
import { FaChalkboardTeacher, FaLanguage, FaDollarSign, FaInfoCircle } from 'react-icons/fa';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddTutorials = () => {
  const { user } = useContext(AuthContex); 

  const handleAddTutor = e => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const tutorData = Object.fromEntries(formData.entries());
    console.log(tutorData)
    
    

    fetch('https://lingomate-server-site.vercel.app/tutorials', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(tutorData)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
        toast.success("Profile Submitted! Your tutor profile is under review.", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        pauseOnHover: true,
        draggable: true,
        theme: "colored"
      });
      form.reset();
    }
  })
  .catch(error => {
    toast.error("❌ Submission failed. Please try again later.", {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      pauseOnHover: true,
      draggable: true,
      theme: "colored"
    });
  });
  };

  return (
    <div className='min-h-screen bg-base-50 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-4xl mx-auto bg-base rounded-xl shadow-md overflow-hidden'>
        
        <div className='bg-gradient-to-r from-teal-600 to-teal-400 p-6 text-white'>
          <div className='flex items-center justify-center space-x-3'>
            <FaChalkboardTeacher className='text-3xl' />
            <h1 className='text-2xl md:text-3xl font-bold'>Become a Tutor</h1>
          </div>
          <p className='mt-2 text-center text-teal-100 max-w-2xl mx-auto'>
            Share your knowledge with language learners worldwide. Complete your profile to get started.
          </p>
        </div>

        
        <form onSubmit={handleAddTutor} className='p-6 sm:p-8 space-y-6'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            
            <div className='md:col-span-2 bg-gray-50 p-4 rounded-lg'>
              <h3 className='font-medium text-gray-700 mb-3 flex items-center'>
                <span className='bg-teal-100 text-teal-800 p-1 rounded-full mr-2'>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </span>
                Your Information
              </h3>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <fieldset>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    defaultValue={user?.displayName || ''}
                    readOnly
                    className="w-full bg-gray-100 border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  />
                </fieldset>

                <fieldset>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    defaultValue={user?.email || ''}
                    readOnly
                    className="w-full bg-gray-100 border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  />
                </fieldset>
              </div>
            </div>

            
            <fieldset className="md:col-span-2">
              <label className=" text-sm font-medium text-gray-700 mb-1 flex items-center">
                <FaInfoCircle className="mr-2 text-teal-600" />
                Tutorial Image URL
              </label>
              <input
                type="url"
                name="image"
                placeholder="https://example.com/your-image.jpg"
                required
                className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              />
              <p className="mt-1 text-sm text-gray-500">Provide a high-quality image of yourself or your teaching materials</p>
            </fieldset>

            <fieldset>
              <label className=" text-sm font-medium text-gray-700 mb-1 flex items-center">
                <FaLanguage className="mr-2 text-teal-600" />
                Language
              </label>
              <select
                name="category"
                required
                className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              >
                <option value="">Select a language</option>
                <option value="English">English</option>
                <option value="Spanish">Spanish</option>
                <option value="French">French</option>
                <option value="German">German</option>
                <option value="Chinese">Chinese</option>
                <option value="Japanese">Japanese</option>
                <option value="Arabic">Arabic</option>
                <option value="Russian">Russian</option>
              </select>
            </fieldset>

            <fieldset>
              <label className="flex text-sm font-medium text-gray-700 mb-1  items-center">
                <FaDollarSign className="mr-2 text-teal-600" />
                Hourly Rate (USD)
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500">$</span>
                </div>
                <input
                  type="number"
                  name="price"
                  placeholder="20.00"
                  min="5"
                  step="5"
                  required
                  className="w-full border border-gray-300 pl-8 p-3 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                />
              </div>
              <p className="mt-1 text-sm text-gray-500">Suggested: $15-$50 per hour</p>
            </fieldset>

            <fieldset className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Teaching Description</label>
              <textarea
                name="description"
                placeholder="Tell students about your teaching experience, methodology, and what they can expect from your lessons..."
                required
                rows={5}
                className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              />
            </fieldset>
          </div>

          <div className="flex items-center justify-between pt-4">
            <div className="text-sm text-gray-500">
              By submitting, you agree to our <a href="/legal/#terms" className="text-teal-600 hover:underline">Terms of Service</a>
            </div>
            <button type="submit"
            className="px-8 py-3 bg-gradient-to-r from-teal-600 to-teal-400 text-white font-medium rounded-lg hover:from-teal-700 hover:to-teal-500 transition-all shadow-md hover:shadow-lg flex items-center">
            Submit Application
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTutorials;