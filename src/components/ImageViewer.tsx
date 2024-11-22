'use client';

import { useState, useCallback } from 'react';

interface ImageViewerProps {
  src: string;
  alt?: string;
}

const ImageViewer = ({ src, alt }: ImageViewerProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <div className={`zmImg ${isOpen ? 's' : ''}`}>
      <a 
        href={src} 
        onClick={handleClick}
        style={{ display: 'block', padding: '1em 0', textAlign: 'center' }}
      >
        <img 
          src={src} 
          alt={alt || ''} 
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </a>
      {isOpen && (
        <div 
          className="zmImg-overlay"
          onClick={handleClose}
        />
      )}
    </div>
  );
};

export default ImageViewer; 