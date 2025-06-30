import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router';

const Services = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-center mb-12 text-base-content">
        Our <span className="text-teal-600">Services</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        
        <section id="find-a-tutor" className="card bg-base-200 shadow-lg hover:shadow-xl transition-shadow">
          <div className="card-body">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-base-content">Find a Tutor</h2>
            </div>
            <p className="text-base-content/80 mb-4">
              Discover expert tutors tailored to your learning needs. Whether you're
              studying for exams or learning a new skill, our tutors provide
              personalized support to help you succeed.
            </p>
            <div className="card-actions">
              <Link to="/findtutors">
                <button className="btn bg-teal-600 btn-sm text-white">Browse Tutors</button>
              </Link>
            </div>
          </div>
        </section>

        
        <section id="become-a-tutor" className="card bg-base-200 shadow-lg hover:shadow-xl transition-shadow">
          <div className="card-body">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-base-content">Become a Tutor</h2>
            </div>
            <p className="text-base-content/80 mb-4">
              Share your expertise and inspire others. Join our platform as a tutor,
              set your schedule, and teach subjects you're passionate about.
            </p>
           
          </div>
        </section>

        
        <section id="group-classes" className="card bg-base-200 shadow-lg hover:shadow-xl transition-shadow">
          <div className="card-body">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-base-content">Group Classes</h2>
            </div>
            <p className="text-base-content/80 mb-4">
              Join interactive group classes to learn collaboratively. Our small class
              sizes ensure personalized attention and engaging learning experiences.
            </p>
            
          </div>
        </section>

        
        <section id="corporate-training" className="card bg-base-200 shadow-lg hover:shadow-xl transition-shadow">
          <div className="card-body">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-base-content">Corporate Training</h2>
            </div>
            <p className="text-base-content/80 mb-4">
              Elevate your team's skills with our customized corporate training
              programs. We offer flexible, industry-specific training to boost
              productivity and innovation.
            </p>
            
          </div>
        </section>

      </div>
    </div>
  );
};

export default Services;
