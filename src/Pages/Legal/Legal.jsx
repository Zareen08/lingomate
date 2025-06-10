import { useEffect } from "react";
import { useLocation } from "react-router";


const Legal = () => {
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


      
      <section className="hero bg-base-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Legal Policies</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Transparency and trust are at the core of our platform
          </p>
        </div>
      </section>

      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <section id="terms" className="mb-16 scroll-mt-20">
          <div className="card bg-base-200 shadow-lg">
            <div className="card-body">
              <h2 className="card-title text-3xl mb-6">Terms of Service</h2>
              <p className="mb-6">
                Welcome to LingoMate. By using our platform to book language tutors, you agree to these Terms of Service. Please read them carefully.
              </p>
              
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="badge text-white bg-teal-600">1</div>
                  <div>
                    <h3 className="font-bold">Eligibility</h3>
                    <p>You must be at least 18 years old to use LingoMate. By registering, you confirm that you meet this requirement.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="badge text-white bg-teal-600">2</div>
                  <div>
                    <h3 className="font-bold">Account Responsibilities</h3>
                    <p>You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="badge text-white bg-teal-600">3</div>
                  <div>
                    <h3 className="font-bold">Booking and Payments</h3>
                    <p>All bookings are subject to tutor availability. Payments are processed securely, and you agree to pay the fees displayed at booking.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="badge text-white bg-teal-600">4</div>
                  <div>
                    <h3 className="font-bold">Prohibited Conduct</h3>
                    <p>You may not use LingoMate for unlawful purposes, harass tutors or other users, or upload harmful content.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="badge text-white bg-teal-600">5</div>
                  <div>
                    <h3 className="font-bold">Termination</h3>
                    <p>We may suspend or terminate your account for violations of these terms, with or without notice.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="badge text-white bg-teal-600">6</div>
                  <div>
                    <h3 className="font-bold">Limitation of Liability</h3>
                    <p>LingoMate is not liable for any indirect, incidental, or consequential damages arising from your use of the platform.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <p>These terms may be updated periodically. Continued use of LingoMate constitutes acceptance of the updated terms.</p>
                
              </div>
            </div>
          </div>
        </section>

        
        <section id="privacy" className="mb-16 scroll-mt-20">
          <div className="card bg-base-200 shadow-lg">
            <div className="card-body">
              <h2 className="card-title text-3xl mb-6">Privacy Policy</h2>
              <p className="mb-6">
                LingoMate values your privacy. This Privacy Policy outlines how we collect, use, and protect your personal information.
              </p>
              
              <div className="space-y-6">
                <div className="collapse collapse-plus bg-base-100 rounded-box">
                  <input type="radio" name="privacy-accordion" defaultChecked /> 
                  <div className="collapse-title text-lg font-medium">
                    Information Collected
                  </div>
                  <div className="collapse-content"> 
                    <p>We collect your name, email, payment details, and lesson preferences when you register or book a tutor.</p>
                  </div>
                </div>

                <div className="collapse collapse-plus bg-base-100 rounded-box">
                  <input type="radio" name="privacy-accordion" /> 
                  <div className="collapse-title text-lg font-medium">
                    Use of Information
                  </div>
                  <div className="collapse-content"> 
                    <p>Your data is used to facilitate bookings, process payments, and improve our services. We may send you promotional emails, which you can opt out of.</p>
                  </div>
                </div>

                <div className="collapse collapse-plus bg-base-100 rounded-box">
                  <input type="radio" name="privacy-accordion" /> 
                  <div className="collapse-title text-lg font-medium">
                    Data Sharing
                  </div>
                  <div className="collapse-content"> 
                    <p>We share your information with tutors to schedule lessons and with payment processors to complete transactions. We do not sell your data to third parties.</p>
                  </div>
                </div>

                <div className="collapse collapse-plus bg-base-100 rounded-box">
                  <input type="radio" name="privacy-accordion" /> 
                  <div className="collapse-title text-lg font-medium">
                    Data Security
                  </div>
                  <div className="collapse-content"> 
                    <p>We implement reasonable security measures to protect your information, but no system is completely secure.</p>
                  </div>
                </div>

                <div className="collapse collapse-plus bg-base-100 rounded-box">
                  <input type="radio" name="privacy-accordion" /> 
                  <div className="collapse-title text-lg font-medium">
                    Your Rights
                  </div>
                  <div className="collapse-content"> 
                    <p>You may access, update, or delete your personal information by contacting us at support@lingomate.com.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <p>This policy complies with applicable data protection laws, including GDPR where relevant. We may update this policy as needed.</p>
                
              </div>
            </div>
          </div>
        </section>

        
        <section id="cancellation" className="mb-16 scroll-mt-20">
          <div className="card bg-base-200 shadow-lg">
            <div className="card-body">
              <h2 className="card-title text-3xl mb-6">Cancellation Policy</h2>
              <p className="mb-6">
                LingoMate aims to provide flexibility for both students and tutors. Please review our Cancellation Policy below.
              </p>
              
              <div className="overflow-x-auto">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Policy</th>
                      <th>Timeframe</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Student Cancellations</td>
                      <td>24+ hours before</td>
                      <td>Full refund</td>
                    </tr>
                    <tr>
                      <td>Student Cancellations</td>
                      <td>Within 24 hours</td>
                      <td>Non-refunded (reschedule possible)</td>
                    </tr>
                    <tr>
                      <td>Tutor Cancellations</td>
                      <td>Any time</td>
                      <td>Full refund or reschedule</td>
                    </tr>
                    <tr>
                      <td>No-Shows (Student)</td>
                      <td>After start time</td>
                      <td>Full lesson fee charged</td>
                    </tr>
                    <tr>
                      <td>No-Shows (Tutor)</td>
                      <td>After start time</td>
                      <td>Account review/suspension</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-8">
                <p>Refunds are processed within 7 business days to the original payment method.</p>
                <p>Contact <a className="link link-primary">support@lingomate.com</a> for cancellation or refund inquiries.</p>
               
              </div>
            </div>
          </div>
        </section>

        
        <section id="cookies" className="scroll-mt-20">
          <div className="card bg-base-200 shadow-lg">
            <div className="card-body">
              <h2 className="card-title text-3xl mb-6">Cookie Policy</h2>
              <p className="mb-6">
                LingoMate uses cookies to enhance your experience on our platform. This Cookie Policy explains how we use them.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-lg mb-2">What Are Cookies</h3>
                  <p>Cookies are small text files stored on your device to remember your preferences and track usage.</p>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2">Types of Cookies</h3>
                  <div className="space-y-4 ml-4">
                    <div>
                      <h4 className="font-semibold">Essential Cookies</h4>
                      <p className="text-base-content/80">Required for website functionality, such as logging in or booking lessons.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Analytics Cookies</h4>
                      <p className="text-base-content/80">Help us understand how users interact with our site to improve performance.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Marketing Cookies</h4>
                      <p className="text-base-content/80">Used to deliver personalized ads based on your browsing behavior.</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2">Managing Cookies</h3>
                  <p>You can disable cookies in your browser settings, but this may affect site functionality. We provide a cookie consent tool on your first visit.</p>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2">Third-Party Cookies</h3>
                  <p>We use services like Google Analytics, which may set their own cookies. Review their policies for details.</p>
                </div>
              </div>

              <div className="mt-8">
                <p>For questions about cookies, contact us at <a className="link link-primary">support@lingomate.com</a>.</p>
                
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Legal;