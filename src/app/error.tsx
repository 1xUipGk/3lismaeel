'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="error-container">
      <h1>حدث خطأ ما</h1>
      <p>عذراً، حدث خطأ أثناء تحميل الصفحة.</p>
      <div className="action-buttons">
        <button
          onClick={reset}
          className="error-primary-btn"
        >
          حاول مرة أخرى
        </button>
        <Link href="/" className="error-secondary-btn">
          العودة للرئيسية
        </Link>
      </div>
    </div>
  );
} 