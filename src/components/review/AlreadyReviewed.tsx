'use client';

import Link from 'next/link';
import { FaInfoCircle } from 'react-icons/fa';

interface AlreadyReviewedProps {
  name: string;
  date: string;
}

export default function AlreadyReviewed({ name, date }: AlreadyReviewedProps) {
  const formattedDate = new Date(date).toLocaleDateString('ar', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).replace('،', '');

  return (
    <div className="thank-you-message">
      <div className="thank-you-content">
        <FaInfoCircle className="thank-you-icon warning" />
        <h2 className="thank-you-title">عذراً {name}!</h2>
        <p className="thank-you-text">
          لقد قمت بتقييم خدماتي مسبقاً في {formattedDate}
        </p>
        <Link href="/" className="back-btn">
          العودة للرئيسية
        </Link>
      </div>
    </div>
  );
} 