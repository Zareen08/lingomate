import React from 'react';
import { Link } from 'react-router';
import { FaEnvelope, FaLock, FaUserPlus } from 'react-icons/fa';
import RegAnimation from '../../assets/RegAni/reg.json'
import Lottie from 'lottie-react';

const Login = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-base-100 to-base-200 flex flex-col">
            
            <header className="py-12 px-4 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-teal-600">Welcome Back</h1>
                <p className="mt-2 text-base-content/80">Sign in to continue your language journey</p>
            </header>

            
            <main className="flex-grow flex items-center justify-center px-4 pb-12">

                <div className='w-130'>
              
                <Lottie
                 animationData={RegAnimation}
                 loop={true}
                />
        </div>
                <div className="card bg-base-100 w-full max-w-md shadow-2xl">
                    <div className="card-body p-8">
                        <form className="space-y-6">
                            
                            <div className="form-control">
                                <label className="label" htmlFor="email">
                                    <span className="label-text flex items-center gap-2">
                                        <FaEnvelope className="text-teal-600" />
                                        Email Address
                                    </span>
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    className="input input-bordered w-full"
                                    placeholder="your@email.com"
                                    required
                                    autoComplete="email"
                                />
                            </div>

                            
                            <div className="form-control">
                                <label className="label" htmlFor="password">
                                    <span className="label-text flex items-center gap-2">
                                        <FaLock className="text-teal-600" />
                                        Password
                                    </span>
                                </label>
                                <input
                                    id="password"
                                    type="password"
                                    name="password"
                                    className="input input-bordered w-full"
                                    placeholder="********"
                                    required
                                    autoComplete="current-password"
                                />
                                <label className="label">
                                    <Link to="/forgot-password" className="label-text-alt link link-hover text-sm">
                                        Forgot password?
                                    </Link>
                                </label>
                            </div>

                            
                            <button type="submit" className="btn bg-teal-600 text-white btn-block mt-2">
                                Sign In
                            </button>
                            
                            <div className="divider">OR</div>
                               
                                <div className="mt-6 text-center">
                                <button className="w-full bg-teal-600 text-white p-2 rounded hover:bg-amber-600">
                                Sign in with Google
                               </button>
                               </div>
                            
                            <div className="flex gap-4 justify-center">
                               
                            </div>

                            
                            <div className="text-center mt-6">
                                <p className="text-sm text-base-content/80">
                                    New to LingoMate?{' '}
                                    <Link 
                                        to="/register" 
                                        className="link text-teal-600 font-medium flex items-center justify-center gap-1"
                                    >
                                        <FaUserPlus size={14} color='teal'/>
                                        Create Account
                                    </Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </main>

            <footer className="py-4 text-center text-sm text-base-content/60">
                <p>By continuing, you agree to our <Link to="/terms" className="link link-hover">Terms of Service</Link> and <Link to="/privacy" className="link link-hover">Privacy Policy</Link></p>
            </footer>
        </div>
    );
};

export default Login;