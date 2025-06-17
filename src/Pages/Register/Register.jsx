import Lottie from 'lottie-react';
import { FaGoogle, FaUser, FaEnvelope, FaLock, FaCamera } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router';
import RegAnimation from '../../assets/RegAni/reg.json';
import { use } from 'react';
import { AuthContex } from '../../Provider/AuthContext';
import { toast } from 'react-toastify';

const Register = () => {
  const { createUser, signInWithG } = use(AuthContex);
  const navigate = useNavigate();

  const handleGSign = () => {
    signInWithG()
      .then(result => {
        toast.success('Signed in with Google');
        navigate('/');
      })
      .catch(error => {
        console.error(error);
        toast.error('Google sign-in failed');
      });
  };

  const handleReg = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

  const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;

  if (!passwordRegex.test(password)) {
    toast.error('Password must be at least 8 characters, include one uppercase letter and one number');
    return;
  }  

    createUser(email, password)
      .then(result => {
        toast.success('Account created successfully');
        navigate('/');
      })
      .catch(error => {
        console.error(error);
        toast.error(error.message || 'Registration failed');
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-100 to-base-200 flex flex-col">
      <header className="py-12 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-teal-600">Join LingoMate</h1>
        <p className="mt-2 text-base-content/80">Start your language learning journey today</p>
      </header>

      <main className="flex-grow flex flex-col lg:flex-row items-center justify-center gap-5 px-4 pb-12">
        <div className='w-30 lg:w-130'>
          <Lottie animationData={RegAnimation} loop={true} />
        </div>

        <div className="card bg-base-100 w-full max-w-md shadow-2xl">
          <div className="card-body p-8">
            <form onSubmit={handleReg} className="space-y-5">

              <div className="form-control">
                <label className="label" htmlFor="name">
                  <span className="label-text flex items-center gap-2">
                    <FaUser className="text-teal-600" />
                    Full Name
                  </span>
                </label>
                <input id="name" type="text" name="name" className="input input-bordered w-full" placeholder="John Doe" required />
              </div>

              <div className="form-control">
                <label className="label" htmlFor="email">
                  <span className="label-text flex items-center gap-2">
                    <FaEnvelope className="text-teal-600" />
                    Email Address
                  </span>
                </label>
                <input id="email" type="email" name="email" className="input input-bordered w-full" placeholder="your@email.com" required />
              </div>

              <div className="form-control">
                <label className="label" htmlFor="photo">
                  <span className="label-text flex items-center gap-2">
                    <FaCamera className="text-teal-600" />
                    Profile Photo URL
                  </span>
                </label>
                <input id="photo" type="text" name="photo" className="input input-bordered w-full" placeholder="https://example.com/photo.jpg" required />
              </div>

              <div className="form-control">
                <label className="label" htmlFor="password">
                  <span className="label-text flex items-center gap-2">
                    <FaLock className="text-teal-600" />
                    Password
                  </span>
                </label>
                <input id="password" type="password" name="password" className="input input-bordered w-full" placeholder="********" required />
                <label className="label">
                  <span className="label-text-alt">Minimum 8 characters</span>
                </label>
              </div>

              <button type="submit" className="btn bg-teal-600 btn-block mt-2 text-white">
                Create Account
              </button>

              <div className="divider">OR</div>

              <button onClick={handleGSign} type="button" className="btn btn-outline border-teal-600 btn-block gap-2">
                <FaGoogle className="text-teal-600" />
                Sign up with Google
              </button>

              <div className="text-center mt-6">
                <p className="text-sm text-base-content/80">
                  Already have an account?{' '}
                  <Link to="/login" className="link text-teal-600 font-medium">
                    Sign In
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </main>

      <footer className="py-4 text-center text-sm text-base-content/60">
        <p>
          By signing up, you agree to our <Link to="/terms" className="link link-hover">Terms</Link> and <Link to="/privacy" className="link link-hover">Privacy Policy</Link>
        </p>
      </footer>
    </div>
  );
};

export default Register;
