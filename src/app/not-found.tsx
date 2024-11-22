'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="error-container">
      <h1>404 - الصفحة غير موجودة</h1>
      <p>عذراً، الصفحة التي تبحث عنها غير موجودة.</p>
      <div className="action-buttons">
        <Link href="/" className="error-primary-btn">
          العودة للرئيسية
        </Link>
      </div>
    </div>
  );
} 