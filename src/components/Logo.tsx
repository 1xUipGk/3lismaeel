'use client';

import { useEffect, useState } from 'react';

const Logo = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="logo-img animate-pulse bg-gray-800 rounded-lg" /> // placeholder while loading
    );
  }

  return (
    <div className="logo">
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 256.7 256.7"
        className="logo-img text-[#FF4D00] hover:text-white transition-colors duration-300"
        aria-label="شعار علي إسماعيل"
      >
        <g>
          <path 
            fill="#ffffff"
            d="M215.82,0h-122.82v134.05h-52.11V0h0C18.3,0,0,18.3,0,40.88v174.93c0,22.58,18.3,40.88,40.88,40.88h0v-.02c.21,0,.43.02.64.02h92.35v-40.88H40.88v-40.88h215.82v-40.88h-122.82V40.88h81.94v51.01h40.88v-51.01h0c0-22.58-18.3-40.88-40.88-40.88Z"
          />
          <path 
            fill="#ffffff"
            d="M215.82,256.7h0c22.58,0,40.88-18.3,40.88-40.88h-40.88v40.88Z"
          />
          <rect 
            fill="#ffffff"
            x="154.4" 
            y="215.82" 
            width="40.88" 
            height="40.88"
          />
        </g>
      </svg>
    </div>
  );
};

export default Logo; 