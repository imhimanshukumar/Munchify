import React from 'react';

const Shimmer = () => {
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div className="text-3xl font-bold bg-gray-200 h-8 w-48 animate-pulse"></div>
      </div>
      <div className="flex flex-wrap overflow-hidden">
        {[...Array(10)].map((_, index) => (
          <div key={index} className="w-[200px] h-[200px] bg-gray-200 rounded-md m-2 relative">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-gray-200 to-gray-300 rounded-md animate-pulse"></div>
          </div>
        ))}
      </div>
      <hr className="my-6 border-[2px]" />
    </div>
  );
};

export default Shimmer;
