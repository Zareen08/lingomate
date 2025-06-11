import React from 'react';
import Slider from 'react-slick';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router';

const slides = [
  {
    titleWords: ['Master New Languages', 'Learn Anytime, Anywhere', 'Speak with Confidence'],
    description: 'Join interactive lessons led by expert tutors tailored to your pace.',
    image: '/banner1.png',
    overlay: 'bg-gradient-to-r from-teal-800/70 to-purple-800/70',
  },
  {
    titleWords: ['Connect with Native Tutors', 'Global Language Experts', 'Real Conversations'],
    description: 'Find tutors from around the world to practice authentic speaking.',
    image: '/banner2.png',
    overlay: 'bg-gradient-to-r from-amber-800/70 to-red-800/70',
  },
  {
    titleWords: ['Flexible Scheduling', 'Learn When It Suits You', 'Book Sessions Easily'],
    description: 'Our platform fits your routine. Choose time slots that match your lifestyle.',
    image: '/banner3.png',
    overlay: 'bg-gradient-to-r from-indigo-800/70 to-blue-800/70',
  },
  {
    titleWords: ['Become a Tutor', 'Share Your Knowledge', 'Earn While Teaching'],
    description: 'Passionate about teaching? Join LingoMate and reach global learners.',
    image: '/banner4.png',
    overlay: 'bg-gradient-to-r from-emerald-800/70 to-cyan-800/70',
  },
  {
    titleWords: ['Track Your Progress', 'Personalized Dashboards', 'Celebrate Milestones'],
    description: 'Monitor your journey with powerful tools to keep you motivated.',
    image: '/banner5.png',
    overlay: 'bg-gradient-to-r from-violet-800/70 to-fuchsia-800/70',
  },
];

const Banner = () => {
  const settings = {
    vertical: true,
    verticalSwiping: true,
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    swipe: true,
    draggable: true,
    pauseOnHover: false,
    customPaging: i => (
      <div className="w-3 h-3 rounded-full bg-white/30 hover:bg-white/70 transition-all duration-300"></div>
    ),
  };

  return (
    <div className="max-w-7xl mx-auto h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative h-[500px] md:h-[600px] overflow-hidden">
            
            <motion.div
              className="absolute top-0 left-0 w-full h-full"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 10, ease: 'linear' }}
            />

            
            <div className={`absolute inset-0 ${slide.overlay} z-10`}></div>

            <motion.div
              className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 z-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="max-w-4xl mx-auto">
                <motion.h2
                  className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg"
                  initial={{ y: 30 }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  <Typewriter
                    words={slide.titleWords}
                    loop={0}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={2000}
                    cursorColor="#ffffff"
                  />
                </motion.h2>

                <motion.p
                  className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  {slide.description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.6 }}
                >
                  <Link to={'/findtutors'} className="btn px-8 py-3 bg-white text-teal-700 font-semibold rounded-full hover:bg-teal-100 transition-all duration-300 shadow-lg hover:shadow-xl">
                    Get Started
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;