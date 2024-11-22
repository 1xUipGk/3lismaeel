'use client';

import { useEffect, useState } from 'react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const toggleVisibility = () => {
    const scrolled = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollProgress = (scrolled / height) * 100;
    
    setProgress(scrollProgress);
    setIsVisible(scrolled > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          type="button"
          onClick={scrollToTop}
          className="tTb"
          style={{ '--progress': progress } as any}
          aria-label="العودة إلى الأعلى"
        >
          <svg viewBox="0 0 34 34">
            <g 
              transform="translate(0, 34) rotate(-90)" 
              strokeWidth="1.5" 
              stroke="currentColor" 
              strokeLinecap="round"
            >
              <circle cx="17" cy="17" r="15.92" />
              <circle 
                cx="17" 
                cy="17" 
                r="15.92" 
                fill="none" 
                strokeDasharray={`${progress}, 100`}
              />
              <path 
                d="M15.07,21.06,19.16,17l-4.09-4.06" 
                fill="none" 
                strokeWidth="1.25"
                transform="none"
              />
            </g>
          </svg>
        </button>
      )}
    </>
  );
} 