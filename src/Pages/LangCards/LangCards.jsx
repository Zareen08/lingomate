import React from 'react';
import { HiOutlineArrowRight } from 'react-icons/hi'; 

const LangCards = ({ lang, setLang, langs }) => {
  const { _id, title, logo } = lang;

  return (
    <div className="group cursor-pointer">
      <div className="card bg-base-100 shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col border border-gray-100 hover:border-teal-100">
        <figure className="px-6 pt-6 flex flex-col items-center">
          <img 
            src={logo} 
            alt={`${title} Logo`} 
            className="w-20 h-20 object-contain transition-transform duration-300 group-hover:scale-110" 
          />
        </figure>
        <div className="card-body items-center text-center pt-2 pb-6 px-6 flex-grow">
          <h2 className="card-title text-lg font-semibold mb-2 text-teal-600">{title} Tutors</h2>
          <div className="flex items-center justify-center text-teal-600 group-hover:text-teal-700 transition-colors">
            <span className="text-sm font-medium mr-1.5">Find tutors</span>
            <HiOutlineArrowRight className="text-lg transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LangCards;