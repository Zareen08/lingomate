import React from 'react';
import { Link } from 'react-router';
import { ImFacebook2 } from "react-icons/im";
import { FaGithub } from "react-icons/fa6";
import { FaYoutube, FaLinkedin } from "react-icons/fa";
const Footer = () => {
    return (
        <div>
            <footer className="footer sm:footer-horizontal bg-base-100 border-t-2 border-teal-600 text-base-content justify-around p-10">
  <nav>
    <h6 className="footer-title">Services</h6>
    <Link to='/services/#find-a-tutor' className="link link-hover">Find a Tutor</Link>
    <Link to='/services/#become-a-tutor' className="link link-hover">Become a Tutor</Link>
    <Link to='/services/#group-classes' className="link link-hover">Group Classes</Link>
    <Link to='/services/#corporate-training' className="link link-hover">Corporate Training</Link>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <Link to='/company/#about' className="link link-hover">About LingoMate</Link>
    <Link  to='/company/#contact' className="link link-hover">Contact Support</Link>
    <Link to='/company/#careers' className="link link-hover">Careers</Link>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <Link to='/legal/#terms' className="link link-hover">Terms of Service</Link>
    <Link to='/legal/#privacy' className="link link-hover">Privacy Policy</Link>
    <Link to='/legal/#cancellation' className="link link-hover">Cancellation Policy</Link>
    <Link to='/legal/#cookies' className="link link-hover">Cookie Policy</Link>
  </nav>
 
</footer>

<footer className="footer bg-base-100 text-base-content border-base-300 border-t px-10 py-4">
  <aside className="grid-flow-col items-center">
   <img src="/lingomate.png" alt="lingomate" className='w-30'/>
    <p>
      LingoMate
      <br />
      Connecting language learners with expert tutors since 2025
    </p>
  </aside>
  <nav className="md:place-self-center md:justify-self-end">
    <div className="grid grid-flow-col gap-4">
      <a href='https://www.facebook.com/' target='_blank'>
        <ImFacebook2 size={25} color='#1877F2'/>
      </a>
      <a href='https://github.com/' target='_blank'>
        <FaGithub size={25} color='#181717'/>
      </a>
      
      <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"aria-label="YouTube">
      <FaYoutube size={25} color="#FF0000"/>
      </a>
      <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"aria-label="LinkedIn">
      <FaLinkedin size={25} color="#0077B5" />
    </a>
    </div>
  </nav>
</footer>
        </div>
    );
};

export default Footer;