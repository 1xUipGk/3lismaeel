'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

export default function LoadingSpinner() {
  return (
    <div className="loading-container">
      <FontAwesomeIcon 
        icon={faSpinner} 
        className="loading-icon"
        spin 
      />
    </div>
  );
} 