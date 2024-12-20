'use client';

import { useState, useEffect } from 'react';

interface ImageWithFallbackProps {
  imageUrl: string;
  className: string;
}

export default function ImageWithFallback({ imageUrl, className }: ImageWithFallbackProps) {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = imageUrl;
    img.onerror = () => setHasError(true);
  }, [imageUrl]);

  if (hasError) {
    return (
      <div className="no-image-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="m22.019 16.82-3.13-7.32c-.57-1.34-1.42-2.1-2.39-2.15-.96-.05-1.89.62-2.6 1.9l-1.9 3.41c-.4.72-.97 1.15-1.59 1.2-.63.06-1.26-.27-1.77-.92l-.22-.28c-.71-.89-1.59-1.32-2.49-1.23-.9.09-1.67.71-2.18 1.72l-1.73 3.45c-.62 1.25-.56 2.7.17 3.88.73 1.18 2 1.89 3.39 1.89h12.76c1.34 0 2.59-.67 3.33-1.79.76-1.12.88-2.53.35-3.76ZM6.97 8.381a3.38 3.38 0 1 0 0-6.76 3.38 3.38 0 0 0 0 6.76Z"/>
        </svg>
      </div>
    );
  }

  return (
    <div 
      className={className}
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
  );
} 