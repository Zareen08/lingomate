import React from 'react';

const Loader = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <span className="loading loading-dots loading-xs"></span>
      <span className="loading loading-dots loading-sm"></span>
      <span className="loading loading-dots loading-md"></span>
      <span className="loading loading-dots loading-lg"></span>
      <span className="loading loading-dots loading-xl"></span>
    </div>
  );
};

export default Loader;
