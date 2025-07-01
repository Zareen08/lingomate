import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (!email.includes('@')) {
      toast.error('Please enter a valid email!');
      return;
    }

    try {
      const res = await fetch('https://lingomate-server-site.vercel.app/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success('Thanks for subscribing!');
        setEmail('');
      } else {
        toast.error(data.message || 'Subscription failed.');
      }
    } catch (err) {
      toast.error('Server error. Please try again later.');
      console.error(err);
    }
  };

  return (
    <div className="bg-base-50 dark:bg-gray-900 py-16 px-4 md:px-8 transition-colors duration-300 mb-5">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-teal-600 dark:text-teal-400 mb-4">
          Join Our Language Community
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Subscribe to receive updates on new tutors, language learning tips, and exclusive platform news.
        </p>

        <form
          onSubmit={handleSubscribe}
          className="flex flex-col md:flex-row items-center justify-center gap-4"
        >
          <input
            type="email"
            className="w-full md:w-auto px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-base dark:bg-gray-800 text-teal-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-600"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="px-6 py-2 bg-teal-600 text-white font-semibold rounded hover:bg-teal-700 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
