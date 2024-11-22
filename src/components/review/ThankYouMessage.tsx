'use client';

import Link from 'next/link';
import { FaCheckCircle } from 'react-icons/fa';

interface ThankYouMessageProps {
  name: string;
  date: string;
}

export default function ThankYouMessage({ name, date }: ThankYouMessageProps) {
  const formattedDate = new Date(date).toLocaleDateString('ar', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).replace('،', '');

  return (
    <div className="thank-you-message">
      <div className="thank-you-content">
        <FaCheckCircle className="thank-you-icon success" />
        <h2 className="thank-you-title">شكراً جزيلاً {name}!</h2>
        <p className="thank-you-text">
          أشكر لك وقتك الثمين في مشاركة رأيك وتقييمك لخدماتي
          <br />
          تم استلام تقييمك بتاريخ {formattedDate}
        </p>
        <Link href="/" className="back-btn">
          العودة للرئيسية
        </Link>
      </div>
    </div>
  );
} 