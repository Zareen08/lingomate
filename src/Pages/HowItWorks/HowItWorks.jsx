import React from 'react';
import { motion } from 'framer-motion';
import { FaUserPlus, FaChalkboardTeacher, FaVideo } from 'react-icons/fa';

const steps = [
  {
    title: 'Create Your Account',
    desc: 'Sign up in 30 seconds with just your email',
    icon: <FaUserPlus className="text-2xl text-teal-700"/>,
    color: 'bg-teal-100',
  },
  {
    title: 'Find Your Perfect Tutor',
    desc: 'Browse our verified tutors and book a session',
    icon: <FaChalkboardTeacher className="text-2xl text-teal-700"/>,
    color: 'bg-amber-100',
  },
  {
    title: 'Start Learning',
    desc: 'Join live video sessions and track your progress',
    icon: <FaVideo className="text-2xl text-teal-700"/>,
    color: 'bg-indigo-100',
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-base-100 to-base-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div 
    className="text-center mb-16"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    >
    <h2 className="text-4xl md:text-5xl font-bold text-teal-700 mb-4">
    Start Learning in 3 Simple Steps
    </h2>
    <p className="text-xl text-base-content/80 max-w-2xl mx-auto">
    Join thousands of students mastering new languages with our platform
    </p>
    </motion.div>

    <div className="relative">
    <div className="hidden md:block absolute top-1/4 left-0 right-0 h-2 bg-teal-200/50 z-0"></div>
          
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
    {steps.map((step, index) => (
    <motion.div
    className="group"
    key={index}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.15, duration: 0.5 }}
    viewport={{ once: true }}
    >
    <div className="h-full p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-base-200 group-hover:border-teal-300 flex flex-col items-center text-center">
    <div className={`w-20 h-20 ${step.color} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
    {step.icon}
    </div>
                  
    <h3 className="text-2xl font-bold text-gray-800 mb-3">{step.title}</h3>
    <p className="text-gray-600 mb-6">{step.desc}</p>
    </div>
    </motion.div>
    ))}
    </div>
    </div>
    </div>
    </section>
  );
};

export default HowItWorks;