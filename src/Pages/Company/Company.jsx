import { useEffect } from "react";
import { Link, useLocation } from "react-router";

const CompanyPage = () => {
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
    <div className="bg-base-100">
      <section className="hero bg-base-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">About <span className="text-teal-600">LingoMate</span></h1>
          <p className="text-xl max-w-3xl mx-auto">
            Connecting language learners with expert tutors worldwide since 2025
          </p>
        </div>
      </section>

      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        
        <section id="about" className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-lg mb-6">
              LingoMate was founded in 2025 with a simple mission: to make language learning accessible, 
              personalized, and engaging for everyone. What started as a small team of language enthusiasts 
              has grown into a global platform connecting thousands of learners with certified tutors.
            </p>
            <div className="stats  bg-base-200 gap-5">
              <div className="stat shadow">
                <div className="stat-title">Languages Offered</div>
                <div className="stat-value text-teal-600">25+</div>
              </div>
              <div className="stat shadow">
                <div className="stat-title">Expert Tutors</div>
                <div className="stat-value text-teal-600">1,200+</div>
              </div>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img 
              src="/team.png" 
              alt="LingoMate team" 
              className="w-150 h-120"
            />
          </div>
        </section>

        
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-12">Meet Our Leadership</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: "Alex Chen", role: "CEO & Founder", img: "https://i.ibb.co/NgmDhwdR/law9.jpg" },
              { name: "Maria Gonzalez", role: "Head of Education", img: "https://i.ibb.co/s9hMks5m/law1.jpg" },
              { name: "James Wilson", role: "CTO", img: "https://i.ibb.co/HfFv6Lq1/law10.jpg" }
            ].map((person, index) => (
              <div key={index} className="card bg-base-200 shadow-lg">
                <figure className="px-6 pt-6">
                  <img 
                    src={person.img} 
                    alt={person.name} 
                    className="rounded-xl w-48 h-48 object-cover"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h3 className="card-title">{person.name}</h3>
                  <p className="text-base-content/70">{person.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        
        <section id="contact" className="card bg-teal-600 text-primary-content shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-3xl mb-4">Get in Touch</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Support</h3>
                <p className="mb-2"><span className="font-medium">Email:</span> support@lingomate.com</p>
                <p className="mb-2"><span className="font-medium">Phone:</span> +1-800-123-4567</p>
                <p><span className="font-medium">Hours:</span> Mon-Fri, 9 AM - 6 PM</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Visit Us</h3>
                <p>123 Language Lane</p>
                <p>San Francisco, CA 94107</p>
                
              </div>
            </div>
          </div>
        </section>

       
        <section id="careers" className="text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
          <p className="text-xl max-w-3xl mx-auto mb-10">
            We're always looking for passionate individuals to help shape the future of language learning.
          </p>
          <div className="grid md:grid-cols-1 gap-8 mb-12">
            {[
              { title: "Language Tutor", type: "Remote" },
             
            ].map((job, index) => (
              <div key={index} className="card bg-base-200 shadow-lg hover:shadow-xl transition-shadow">
                <div className="card-body text-left">
                  <h3 className="card-title">{job.title}</h3>
                  <p className="text-base-content/70 mb-4">{job.type}</p>
                  <div className="card-actions justify-end">
                    <Link to={'/dashboard/addtutorials'} className="btn bg-teal-600 text-white btn-sm">Apply Now</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        
      </div>
    </div>
  );
};

export default CompanyPage;