import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaClock, FaUserFriends, FaComments } from 'react-icons/fa';

const features = [
  {
    title: 'Verified Tutors',
    desc: 'We handpick qualified tutors to ensure quality learning experiences.',
    icon: <FaShieldAlt className= "text-2xl text-teal-700"/>,
    color: 'bg-teal-100',
  },
  {
    title: 'Flexible Scheduling',
    desc: 'Book sessions at your convenience, anytime from anywhere.',
    icon: <FaClock className= "text-2xl text-teal-700"/>,
    color: 'bg-amber-100',
  },
  {
    title: 'Global Community',
    desc: 'Connect with learners and tutors from across the world.',
    icon: <FaUserFriends className= "text-2xl text-teal-700"/>,
    color: 'bg-indigo-100',
  },
  {
    title: 'Live Chat Support',
    desc: 'Got questions? Our support team is ready to help 24/7.',
    icon: <FaComments className= "text-2xl text-teal-700"/>,
    color: 'bg-purple-100',
  },
];

const WhyChoose = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-base-100 to-base-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
    <motion.h2
    className="text-4xl md:text-5xl font-bold text-teal-700 mb-4"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    >
    Why Choose LingoMate?
    </motion.h2>
    <motion.p
    className="text-xl text-base-content/80 max-w-2xl mx-auto"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.2, duration: 0.6 }}
    viewport={{ once: true }}
    >
    We're revolutionizing language learning with our innovative platform
    </motion.p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    {features.map((feature, index) => (
    <motion.div
    key={index}
    className="group"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    viewport={{ once: true, margin: "-50px" }}
    >
    <div className="h-full p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-base-200 group-hover:border-teal-300/30 flex flex-col items-center text-center">
    <div className={`w-20 h-20 ${feature.color} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
    {feature.icon}
    </div>
    <h3 className="text-2xl font-bold text-gray-800 mb-3">{feature.title}</h3>
    <p className="text-gray-600 mb-4 flex-grow">{feature.desc}</p>
    <div className="w-12 h-1 bg-teal-400 rounded-full mt-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
    </motion.div>
    ))}
    </div>
    </div>
    </section>
  );
};

export default WhyChoose;