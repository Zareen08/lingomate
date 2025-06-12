import { Link } from 'react-router';
import { FaExclamationTriangle, FaHome, FaSearch } from 'react-icons/fa';

const Error = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-white flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-md mx-auto">
        
        <div className="mb-8 flex justify-center">
          <div className="bg-teal-100 p-6 rounded-full">
            <FaExclamationTriangle className="text-6xl text-teal-600" />
          </div>
        </div>

        
        <h1 className="text-5xl font-bold text-teal-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Oops! Page Not Found</h2>
        <p className="text-gray-500 mb-8">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>

        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="flex items-center justify-center px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors shadow-md"
          >
            <FaHome className="mr-2" />
            Return Home
          </Link>
          <Link
            to="/findtutors"
            className="flex items-center justify-center px-6 py-3 border border-teal-600 text-teal-600 rounded-lg hover:bg-teal-50 transition-colors"
          >
            <FaSearch className="mr-2" />
            Browse Tutors
          </Link>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-2">Still need help?</p>
          <a 
            href="mailto:support@tutorapp.com" 
            className="text-teal-600 hover:underline"
          >
            Contact our support team
          </a>
        </div>
      </div>

      
      <div className="fixed -z-10 inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-teal-100 opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-teal-200 opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 right-1/3 w-36 h-36 rounded-full bg-teal-300 opacity-20 animate-blob animation-delay-4000"></div>
      </div>
    </div>
  );
};

export default Error;