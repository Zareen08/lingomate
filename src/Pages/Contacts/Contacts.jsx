import React, { useState } from 'react';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await fetch('https://lingomate-server-site.vercel.app/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Failed to send message.');
      }
    } catch (err) {
      console.error(err);
      alert('An error occurred while sending your message.');
    }
  };

  return (
    <div className="min-h-screen bg-base-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-base dark:bg-gray-800 rounded-xl shadow-md p-8 sm:p-10">
        <h2 className="text-3xl font-bold text-teal-600 dark:text-teal-400 text-center mb-4">
          Contact Us
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
          We'd love to hear from you! Fill out the form and we'll be in touch.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-teal-600 dark:text-gray-300 mb-1">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-base dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-teal-600 dark:text-gray-300 mb-1">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-base dark:bg-gray-700 text-teal-600 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-teal-600 dark:text-gray-300 mb-1">
              Your Message
            </label>
            <textarea
              name="message"
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-base dark:bg-teal-600 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Type your message here..."
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-2 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-md transition duration-200"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
