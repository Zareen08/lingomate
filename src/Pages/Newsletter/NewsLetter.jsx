import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    try {
      const res = await fetch('https://lingomate-server-site.vercel.app/newsletter/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (res.status === 201) {
        setStatus('success');
        setEmail('');
      } else if (res.status === 409) {
        setStatus('exists');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="mt-20 bg-base-200 py-16 rounded-xl">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h3 className="text-3xl font-bold text-base-content mb-4">Subscribe to Our Newsletter</h3>
        <p className="text-base-content/70 mb-8">
          Get updates on new tutors, features, and learning tips – straight to your inbox.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered w-full sm:w-auto px-6 py-3 rounded-lg bg-base-100 text-base-content placeholder:text-base-content/50"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="btn bg-teal-600 text-white hover:bg-teal-700 px-6 py-3"
          >
            Subscribe
          </button>
        </form>
        {status === 'success' && <p className="mt-4 text-green-600">Subscribed successfully!</p>}
        {status === 'exists' && <p className="mt-4 text-yellow-600">You are already subscribed.</p>}
        {status === 'error' && <p className="mt-4 text-red-600">Subscription failed. Please try again.</p>}
      </div>
    </section>
  );
};

export default Newsletter;
